import { certifiedTracks } from './certification';
import { loadJourney } from './journey';

/**
 * Nível da pessoa dentro do programa:
 * - 0: entrou no sistema;
 * - 1: iniciou uma trilha;
 * - 2: certificou-se em uma trilha.
 */
export type UserLevel = 0 | 1 | 2;

export const LEVEL_DESCRIPTION: Record<UserLevel, string> = {
  0: 'Ainda não iniciou uma trilha',
  1: 'Trilha em andamento',
  2: 'Trilha concluída e certificada'
};

/** Rótulo com dois dígitos, como o programa usa: 00, 01, 02. */
export function levelLabel(level: UserLevel): string {
  return `Nível ${String(level).padStart(2, '0')}`;
}

/** True quando existe ao menos uma trilha concluída 100%. */
export function hasCertificate(userId: string): boolean {
  return certifiedTracks(userId).length > 0;
}

export function levelOf(userId: string): UserLevel {
  if (hasCertificate(userId)) return 2;
  if (loadJourney(userId).length > 0) return 1;
  return 0;
}
