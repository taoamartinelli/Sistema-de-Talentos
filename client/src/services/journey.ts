import { TRILHAS } from '../data/trilhas';
import { completedModuleIds, loadModuleResults } from './moduleProgress';

export interface JourneyEntry {
  trilhaId: string;
  startedAt: string;
  /** Ids dos módulos já concluídos dentro da trilha. */
  completedModules: string[];
}

// A jornada fica no navegador até existir banco de dados no backend.
const storageKey = (userId: string) => `zello:jornada:${userId}`;

export function loadJourney(userId: string): JourneyEntry[] {
  try {
    const raw = localStorage.getItem(storageKey(userId));
    const entries = raw ? (JSON.parse(raw) as JourneyEntry[]) : [];
    // Descarta trilhas que não existem mais no catálogo.
    return entries.filter((entry) => TRILHAS.some((trilha) => trilha.id === entry.trilhaId));
  } catch {
    return [];
  }
}

function persist(userId: string, entries: JourneyEntry[]): JourneyEntry[] {
  try {
    localStorage.setItem(storageKey(userId), JSON.stringify(entries));
  } catch {
    /* modo privado ou storage indisponível */
  }
  return entries;
}

/** Substitui a jornada inteira — usado ao trazer os dados da nuvem. */
export function replaceJourney(userId: string, entries: JourneyEntry[]): JourneyEntry[] {
  return persist(userId, entries);
}

export function startTrilha(userId: string, trilhaId: string): JourneyEntry[] {
  const entries = loadJourney(userId);
  if (entries.some((entry) => entry.trilhaId === trilhaId)) return entries;

  return persist(userId, [
    ...entries,
    { trilhaId, startedAt: new Date().toISOString(), completedModules: [] }
  ]);
}

export function removeTrilha(userId: string, trilhaId: string): JourneyEntry[] {
  return persist(
    userId,
    loadJourney(userId).filter((entry) => entry.trilhaId !== trilhaId)
  );
}

export function isStarted(userId: string, trilhaId: string): boolean {
  return loadJourney(userId).some((entry) => entry.trilhaId === trilhaId);
}

/**
 * Progresso da trilha: módulos com simulado de conclusão aprovado
 * sobre o total de módulos. Sem módulos cadastrados, o progresso é 0.
 */
export function progressOf(userId: string, entry: JourneyEntry) {
  const trilha = TRILHAS.find((item) => item.id === entry.trilhaId);
  const total = trilha?.modules.length ?? 0;
  const completed = completedModuleIds(loadModuleResults(userId, entry.trilhaId)).length;

  return {
    completed,
    total,
    percentage: total === 0 ? 0 : Math.round((completed / total) * 100)
  };
}

export function formatStartedAt(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}
