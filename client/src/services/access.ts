import { AssessmentKey } from '../data/assessments';
import { ResultMap } from './assessmentStorage';

/** Seções do sistema, na ordem em que aparecem no menu. */
export type SectionKey = 'inicio' | 'avaliacao' | '360' | 'trilhas' | 'jornada' | 'painel';

/**
 * Estágio da pessoa dentro do programa:
 * - `entrada`: ainda não confirmou o aviso da página Início;
 * - `ciente`: confirmou, mas ainda não fez a avaliação;
 * - `reprovado`: fez a avaliação e não atingiu a nota mínima;
 * - `base360`: reprovado na avaliação, mas aprovado no simulado do 360;
 * - `aprovado`: passou na avaliação de todas as áreas de interesse.
 */
export type Stage = 'entrada' | 'ciente' | 'reprovado' | 'base360' | 'aprovado';

// Uma pessoa reprovada estuda pelo 360, que é a base para quem não tem
// a noção mínima — por isso essa página abre mesmo sem aprovação.
const SECTIONS_BY_STAGE: Record<Stage, SectionKey[]> = {
  entrada: ['inicio'],
  ciente: ['inicio', 'avaliacao'],
  reprovado: ['inicio', 'avaliacao', '360', 'painel'],
  // Concluir o simulado do 360 é o outro caminho para chegar às trilhas.
  base360: ['inicio', 'avaliacao', '360', 'trilhas', 'jornada', 'painel'],
  aprovado: ['inicio', 'avaliacao', '360', 'trilhas', 'jornada', 'painel']
};

/** Áreas que a pessoa precisa aprovar. Sem interesse definido, valem as duas. */
function requiredAreas(interests: AssessmentKey[]): AssessmentKey[] {
  return interests.length ? interests : ['desenvolvimento', 'analise'];
}

/**
 * Basta ser aprovado em uma das áreas de interesse.
 * Assim, acrescentar uma segunda área não revoga a aprovação já conquistada —
 * mas remover justamente a área aprovada volta a bloquear.
 */
export function isApprovedOverall(results: ResultMap, interests: AssessmentKey[]): boolean {
  return requiredAreas(interests).some((area) => results[area]?.approved === true);
}

/** True assim que a pessoa concluir ao menos um dos testes exigidos. */
export function hasTakenAssessment(results: ResultMap, interests: AssessmentKey[]): boolean {
  return requiredAreas(interests).some((area) => Boolean(results[area]));
}

/** True quando não resta nenhum teste pendente nas áreas de interesse. */
export function hasTakenAllAssessments(results: ResultMap, interests: AssessmentKey[]): boolean {
  return requiredAreas(interests).every((area) => Boolean(results[area]));
}

export function stageOf(
  acknowledged: boolean,
  results: ResultMap,
  interests: AssessmentKey[],
  approved360 = false
): Stage {
  if (!acknowledged) return 'entrada';
  if (!hasTakenAssessment(results, interests)) return 'ciente';
  if (isApprovedOverall(results, interests)) return 'aprovado';
  return approved360 ? 'base360' : 'reprovado';
}

export function isSectionAvailable(stage: Stage, section: SectionKey): boolean {
  return SECTIONS_BY_STAGE[stage].includes(section);
}

/** Motivo do bloqueio, usado na dica que aparece ao passar o mouse. */
export function lockReason(stage: Stage): string {
  if (stage === 'entrada') return 'Confirme "Estou Ciente" na página Início';
  if (stage === 'ciente') return 'Faça a avaliação inicial para liberar';
  return 'Seja aprovado na avaliação ou conclua o simulado do 360';
}

// A modal de conclusão do 360 aparece uma única vez.
const base360Key = (userId: string) => 'zello:360-aprovado-visto:' + userId;

export function hasSeenBase360(userId: string): boolean {
  try {
    return localStorage.getItem(base360Key(userId)) === 'true';
  } catch {
    return false;
  }
}

export function markBase360Seen(userId: string): void {
  try {
    localStorage.setItem(base360Key(userId), 'true');
  } catch {
    /* modo privado ou storage indisponível — vale só nesta sessão */
  }
}

// A modal de aprovação aparece uma única vez.
const approvalKey = (userId: string) => `zello:aprovacao-vista:${userId}`;

export function hasSeenApproval(userId: string): boolean {
  try {
    return localStorage.getItem(approvalKey(userId)) === 'true';
  } catch {
    return false;
  }
}

export function markApprovalSeen(userId: string): void {
  try {
    localStorage.setItem(approvalKey(userId), 'true');
  } catch {
    /* modo privado ou storage indisponível — vale só nesta sessão */
  }
}
