import { Module } from '../data/trilha360';

export interface ModuleResult {
  moduleId: string;
  correct: number;
  total: number;
  percentage: number;
  approved: boolean;
  completedAt: string;
}

export type ModuleResults = Record<string, ModuleResult>;

// Resultado dos simulados de módulo, por usuário e por trilha.
const storageKey = (userId: string, trackId: string) => `zello:modulos:${trackId}:${userId}`;

export function loadModuleResults(userId: string, trackId: string): ModuleResults {
  try {
    const raw = localStorage.getItem(storageKey(userId, trackId));
    return raw ? (JSON.parse(raw) as ModuleResults) : {};
  } catch {
    return {};
  }
}

export function saveModuleResult(
  userId: string,
  trackId: string,
  result: ModuleResult
): ModuleResults {
  const results = { ...loadModuleResults(userId, trackId), [result.moduleId]: result };
  try {
    localStorage.setItem(storageKey(userId, trackId), JSON.stringify(results));
  } catch {
    /* modo privado ou storage indisponível */
  }
  return results;
}

/**
 * O primeiro módulo está sempre liberado; os demais abrem quando o
 * simulado do módulo anterior é aprovado.
 */
export function isModuleUnlocked(modules: Module[], results: ModuleResults, moduleId: string): boolean {
  const index = modules.findIndex((module) => module.id === moduleId);
  if (index <= 0) return true;

  const previous = modules[index - 1];
  return results[previous.id]?.approved === true;
}

/** Ids dos módulos concluídos (simulado aprovado). */
export function completedModuleIds(results: ModuleResults): string[] {
  return Object.values(results)
    .filter((result) => result.approved)
    .map((result) => result.moduleId);
}

/** Apaga o progresso dos módulos de uma trilha (usado ao sair da jornada). */
export function clearModuleResults(userId: string, trackId: string): void {
  try {
    localStorage.removeItem(storageKey(userId, trackId));
  } catch {
    /* modo privado ou storage indisponível */
  }
}
