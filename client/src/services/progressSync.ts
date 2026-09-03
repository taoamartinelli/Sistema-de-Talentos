import { collection, doc, getDocs, runTransaction, setDoc } from 'firebase/firestore';
import { db } from './firebase';
import { AssessmentKey } from '../data/assessments';
import { ResultMap, loadResults, saveResult } from './assessmentStorage';
import { JourneyEntry, loadJourney, replaceJourney } from './journey';
import { ModuleResults, loadModuleResults, saveModuleResult } from './moduleProgress';
import { SimuladoResult, loadSimuladoResult, saveSimuladoResult } from './trackSimulado';
import { loadInterests, saveInterests } from './interest';
import { acknowledge, isAcknowledged } from './progress';
import { TRACK_IDS } from './certification';

/**
 * Retrato completo do progresso de uma pessoa.
 * O navegador continua sendo a cópia de trabalho; o Firestore guarda o
 * mesmo conteúdo para que o Painel enxergue todo mundo e o progresso
 * acompanhe a pessoa entre dispositivos.
 */
export interface ProgressSnapshot {
  name: string;
  email: string;
  avatarUrl?: string;
  acknowledged: boolean;
  interests: AssessmentKey[];
  assessments: ResultMap;
  journey: JourneyEntry[];
  modules: Record<string, ModuleResults>;
  simulados: Record<string, SimuladoResult>;
  updatedAt: string;
  /** Último sinal de vida da sessão, usado para saber quem está online. */
  lastSeen?: string;
  /** Momento em que a pessoa saiu do sistema. Limpo a cada novo acesso. */
  lastLogoutAt?: string;
}

const COLLECTION = 'progresso';

/** Reúne o que está gravado neste navegador. */
export function collectLocal(
  userId: string,
  identity: { name: string; email: string; avatarUrl?: string }
): ProgressSnapshot {
  const modules: Record<string, ModuleResults> = {};
  const simulados: Record<string, SimuladoResult> = {};

  TRACK_IDS.forEach((trackId) => {
    const results = loadModuleResults(userId, trackId);
    if (Object.keys(results).length > 0) modules[trackId] = results;

    const simulado = loadSimuladoResult(userId, trackId);
    if (simulado) simulados[trackId] = simulado;
  });

  return {
    name: identity.name,
    email: identity.email,
    ...(identity.avatarUrl ? { avatarUrl: identity.avatarUrl } : {}),
    acknowledged: isAcknowledged(userId),
    interests: loadInterests(userId),
    assessments: loadResults(userId),
    journey: loadJourney(userId),
    modules,
    simulados,
    updatedAt: new Date().toISOString(),
    lastSeen: new Date().toISOString()
  };
}

/** Janela em que a pessoa ainda é considerada online. */
const PRESENCE_WINDOW_MS = 2 * 60 * 1000;

export function isOnline(lastSeen?: string): boolean {
  if (!lastSeen) return false;

  const visto = new Date(lastSeen).getTime();
  if (Number.isNaN(visto)) return false;

  return Date.now() - visto < PRESENCE_WINDOW_MS;
}

/** Sinal de vida periódico: grava só o carimbo, sem reescrever o progresso. */
export async function touchPresence(userId: string): Promise<void> {
  try {
    await setDoc(
      doc(db, COLLECTION, userId),
      { lastSeen: new Date().toISOString() },
      { merge: true }
    );
  } catch {
    /* sem conexão ou sem Firestore: a presença simplesmente não é registrada */
  }
}

/**
 * Marca a saída da pessoa. Sem isso, a presença só expiraria quando o
 * último sinal envelhecesse — e ela apareceria online depois de sair.
 */
export async function goOffline(userId: string): Promise<void> {
  try {
    await setDoc(
      doc(db, COLLECTION, userId),
      { lastSeen: new Date(0).toISOString(), lastLogoutAt: new Date().toISOString() },
      { merge: true }
    );
  } catch {
    /* sem conexão: a presença expira sozinha pela janela de tempo */
  }
}

/** Grava no navegador o que veio da nuvem. */
export function applyLocal(userId: string, snapshot: ProgressSnapshot): void {
  if (snapshot.acknowledged) acknowledge(userId);
  if (snapshot.interests?.length) saveInterests(userId, snapshot.interests);

  Object.values(snapshot.assessments ?? {}).forEach((result) => {
    if (result) saveResult(userId, result);
  });

  if (snapshot.journey) replaceJourney(userId, snapshot.journey);

  Object.entries(snapshot.modules ?? {}).forEach(([trackId, results]) => {
    Object.values(results).forEach((result) => saveModuleResult(userId, trackId, result));
  });

  Object.values(snapshot.simulados ?? {}).forEach((result) => {
    saveSimuladoResult(userId, result);
  });
}

/**
 * Entre dois resultados da mesma prova vale o melhor: aprovado ganha de
 * reprovado, depois o maior percentual, e por último o mais recente.
 */
function melhor<T extends { percentage: number; approved: boolean; completedAt: string }>(
  a: T | undefined,
  b: T | undefined
): T | undefined {
  if (!a) return b;
  if (!b) return a;
  if (a.approved !== b.approved) return a.approved ? a : b;
  if (a.percentage !== b.percentage) return a.percentage > b.percentage ? a : b;
  return (a.completedAt ?? '') >= (b.completedAt ?? '') ? a : b;
}

/** Junta as duas jornadas por trilha, somando os módulos concluídos em cada uma. */
function unirJornada(remota: JourneyEntry[] = [], local: JourneyEntry[] = []): JourneyEntry[] {
  const porTrilha = new Map<string, JourneyEntry>();

  [...remota, ...local].forEach((entrada) => {
    if (!entrada?.trilhaId) return;

    const atual = porTrilha.get(entrada.trilhaId);
    const concluidos = new Set([
      ...(atual?.completedModules ?? []),
      ...(entrada.completedModules ?? [])
    ]);

    porTrilha.set(entrada.trilhaId, {
      trilhaId: entrada.trilhaId,
      // Vale o primeiro início registrado, venha de onde vier.
      startedAt:
        atual && (atual.startedAt ?? '') <= (entrada.startedAt ?? '')
          ? atual.startedAt
          : entrada.startedAt,
      completedModules: [...concluidos]
    });
  });

  return [...porTrilha.values()];
}

/**
 * Funde o que está na nuvem com o que está neste navegador. Nada é descartado:
 * cada máquina guarda só uma parte do progresso, e gravar apenas a sua parte
 * apagaria o que foi feito nas outras.
 */
export function unirProgresso(
  remoto: ProgressSnapshot | null,
  local: ProgressSnapshot
): ProgressSnapshot {
  if (!remoto) return local;

  const assessments: ResultMap = { ...(remoto.assessments ?? {}) };
  Object.entries(local.assessments ?? {}).forEach(([chave, resultado]) => {
    const escolhido = melhor(assessments[chave as AssessmentKey], resultado);
    if (escolhido) assessments[chave as AssessmentKey] = escolhido;
  });

  const modules: Record<string, ModuleResults> = {};
  const trilhas = new Set([
    ...Object.keys(remoto.modules ?? {}),
    ...Object.keys(local.modules ?? {})
  ]);
  trilhas.forEach((trilha) => {
    const juntos: ModuleResults = { ...(remoto.modules?.[trilha] ?? {}) };
    Object.entries(local.modules?.[trilha] ?? {}).forEach(([moduloId, resultado]) => {
      const escolhido = melhor(juntos[moduloId], resultado);
      if (escolhido) juntos[moduloId] = escolhido;
    });
    modules[trilha] = juntos;
  });

  const simulados: Record<string, SimuladoResult> = { ...(remoto.simulados ?? {}) };
  Object.entries(local.simulados ?? {}).forEach(([trilha, resultado]) => {
    const escolhido = melhor(simulados[trilha], resultado);
    if (escolhido) simulados[trilha] = escolhido;
  });

  return {
    ...local,
    acknowledged: Boolean(remoto.acknowledged || local.acknowledged),
    interests: [...new Set([...(remoto.interests ?? []), ...(local.interests ?? [])])],
    assessments,
    journey: unirJornada(remoto.journey, local.journey),
    modules,
    simulados,
    // A saída registrada na nuvem não se perde por causa de uma gravação.
    ...(remoto.lastLogoutAt ? { lastLogoutAt: remoto.lastLogoutAt } : {})
  };
}

/**
 * Enquanto o login não termina de baixar a nuvem, este navegador ainda está
 * vazio. Gravar nesse intervalo apagaria o progresso feito em outra máquina,
 * então toda escrita espera o portão abrir.
 */
const portoes = new Map<string, Promise<void>>();
const aberturas = new Map<string, () => void>();

function portao(userId: string): Promise<void> {
  const existente = portoes.get(userId);
  if (existente) return existente;

  const espera = new Promise<void>((resolve) => aberturas.set(userId, resolve));
  portoes.set(userId, espera);
  return espera;
}

function abrirPortao(userId: string): void {
  portao(userId);
  aberturas.get(userId)?.();
}

/**
 * Grava o estado consolidado e devolve o que ficou valendo. A leitura e a
 * escrita vão na mesma transação para que duas abas abertas não sobrescrevam
 * uma à outra.
 */
async function gravar(
  userId: string,
  identity: { name: string; email: string; avatarUrl?: string }
): Promise<ProgressSnapshot | null> {
  const referencia = doc(db, COLLECTION, userId);
  const local = collectLocal(userId, identity);

  try {
    return await runTransaction(db, async (transacao) => {
      const atual = await transacao.get(referencia);
      const remoto = atual.exists() ? (atual.data() as ProgressSnapshot) : null;
      const unido = unirProgresso(remoto, local);
      transacao.set(referencia, unido);
      return unido;
    });
  } catch (err) {
    // Sem Firestore configurado o sistema segue funcionando só com o navegador.
    console.warn('Não foi possível salvar o progresso na nuvem:', err);
    return null;
  }
}

/** Envia o progresso deste navegador para a nuvem, sem descartar o que já havia. */
export async function pushProgress(
  userId: string,
  identity: { name: string; email: string; avatarUrl?: string }
): Promise<void> {
  await portao(userId);
  await gravar(userId, identity);
}

/**
 * No login, funde nuvem e navegador e devolve o resultado para os dois lados.
 * Aplicar o documento remoto cru apagaria o que só existe aqui — uma jornada
 * vazia na nuvem, por exemplo, substituiria a jornada deste navegador.
 */
export async function syncProgress(
  userId: string,
  identity: { name: string; email: string; avatarUrl?: string }
): Promise<void> {
  try {
    const unido = await gravar(userId, identity);
    if (unido) applyLocal(userId, unido);
  } catch (err) {
    console.warn('Não foi possível sincronizar o progresso:', err);
  } finally {
    // Mesmo em caso de falha o portão abre: travar as gravações para sempre
    // seria pior do que gravar com o que houver.
    abrirPortao(userId);
  }
}

/** Progresso de todas as pessoas, para o Painel. */
export async function fetchAllProgress(): Promise<Record<string, ProgressSnapshot>> {
  try {
    const snapshot = await getDocs(collection(db, COLLECTION));
    const todos: Record<string, ProgressSnapshot> = {};

    snapshot.forEach((documento) => {
      todos[documento.id] = documento.data() as ProgressSnapshot;
    });

    return todos;
  } catch (err) {
    console.warn('Não foi possível ler o progresso dos usuários:', err);
    return {};
  }
}
