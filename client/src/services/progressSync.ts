import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
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

/** Envia o progresso deste navegador para a nuvem. */
export async function pushProgress(
  userId: string,
  identity: { name: string; email: string; avatarUrl?: string }
): Promise<void> {
  try {
    await setDoc(doc(db, COLLECTION, userId), collectLocal(userId, identity));
  } catch (err) {
    // Sem Firestore configurado o sistema segue funcionando só com o navegador.
    console.warn('Não foi possível salvar o progresso na nuvem:', err);
  }
}

/**
 * Traz o progresso da nuvem no login. Se ainda não houver registro,
 * sobe o que existir neste navegador — é a migração do que já foi feito.
 */
export async function syncProgress(
  userId: string,
  identity: { name: string; email: string; avatarUrl?: string }
): Promise<void> {
  try {
    const snapshot = await getDoc(doc(db, COLLECTION, userId));

    if (snapshot.exists()) {
      applyLocal(userId, snapshot.data() as ProgressSnapshot);
    }

    // Sempre devolve o estado consolidado, para a nuvem refletir o local.
    await pushProgress(userId, identity);
  } catch (err) {
    console.warn('Não foi possível sincronizar o progresso:', err);
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
