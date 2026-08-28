import { MODULES } from '../data/trilha360';
import { Module } from '../data/trilha360';
import { TRILHAS } from '../data/trilhas';
import { ModuleResults, completedModuleIds, loadModuleResults } from './moduleProgress';
import { loadSimuladoResult } from './trackSimulado';

/** Todas as formações que podem ser concluídas: o 360 e as trilhas do catálogo. */
export const TRACK_IDS = ['360', ...TRILHAS.map((trilha) => trilha.id)];

export function trackTitle(trackId: string): string {
  if (trackId === '360') return 'Formação 360';
  return TRILHAS.find((trilha) => trilha.id === trackId)?.title ?? trackId;
}

export function trackModules(trackId: string): Module[] {
  if (trackId === '360') return MODULES;
  return TRILHAS.find((trilha) => trilha.id === trackId)?.modules ?? [];
}

/** Percentual de módulos concluídos dentro da trilha. */
export function trackCompletion(userId: string, trackId: string) {
  const modules = trackModules(trackId);
  const completed = completedModuleIds(loadModuleResults(userId, trackId)).length;
  const total = modules.length;

  return {
    completed,
    total,
    percentage: total === 0 ? 0 : Math.round((completed / total) * 100)
  };
}

/**
 * Certificação é concluir 100% da trilha: todos os módulos concluídos
 * e o simulado final aprovado.
 */
export function isCertified(userId: string, trackId: string): boolean {
  const { completed, total } = trackCompletion(userId, trackId);
  if (total === 0 || completed < total) return false;

  return loadSimuladoResult(userId, trackId)?.approved === true;
}

/** Ids das trilhas já certificadas. */
export function certifiedTracks(userId: string): string[] {
  return TRACK_IDS.filter((trackId) => isCertified(userId, trackId));
}

/* --- Versões que trabalham sobre dados já carregados (usadas no Painel) --- */

/** Progresso a partir de um conjunto de resultados já em mãos. */
export function completionFrom(results: ModuleResults | undefined, trackId: string) {
  const total = trackModules(trackId).length;
  const completed = completedModuleIds(results ?? {}).length;

  return {
    completed,
    total,
    percentage: total === 0 ? 0 : Math.round((completed / total) * 100)
  };
}

/** Certificação a partir de dados já carregados. */
export function isCertifiedFrom(
  results: ModuleResults | undefined,
  simulado: { approved: boolean } | undefined,
  trackId: string
): boolean {
  const { completed, total } = completionFrom(results, trackId);
  if (total === 0 || completed < total) return false;

  return simulado?.approved === true;
}
