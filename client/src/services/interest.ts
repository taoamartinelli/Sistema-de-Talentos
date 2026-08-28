import { AssessmentKey } from '../data/assessments';
import { TrackArea } from '../data/trilhas';

// Áreas de interesse da pessoa. Definem quais testes aparecem na avaliação
// e quais trilhas ficam disponíveis.
// Enquanto não houver banco de dados, o registro fica no navegador.
const interestKey = (userId: string) => `zello:interesse:${userId}`;

const VALID: AssessmentKey[] = ['desenvolvimento', 'analise'];

const isValid = (value: unknown): value is AssessmentKey =>
  VALID.includes(value as AssessmentKey);

/** Áreas já escolhidas. Lista vazia significa que a pessoa ainda não respondeu. */
export function loadInterests(userId: string): AssessmentKey[] {
  try {
    const saved = localStorage.getItem(interestKey(userId));
    if (!saved) return [];

    // Formato antigo: uma única área gravada como texto puro.
    if (isValid(saved)) return [saved];

    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed.filter(isValid) : [];
  } catch {
    return [];
  }
}

export function saveInterests(userId: string, areas: AssessmentKey[]): void {
  try {
    localStorage.setItem(interestKey(userId), JSON.stringify(areas));
  } catch {
    /* modo privado ou storage indisponível — vale só nesta sessão */
  }
}

/** Acrescenta uma área às já escolhidas e devolve a lista atualizada. */
export function addInterest(userId: string, area: AssessmentKey): AssessmentKey[] {
  const current = loadInterests(userId);
  if (current.includes(area)) return current;

  const updated = [...current, area];
  saveInterests(userId, updated);
  return updated;
}

/**
 * Remove uma área das escolhidas. A última nunca é removida:
 * sem nenhuma área, a pessoa ficaria sem teste e sem trilha.
 */
export function removeInterest(userId: string, area: AssessmentKey): AssessmentKey[] {
  const current = loadInterests(userId);
  if (current.length <= 1) return current;

  const updated = current.filter((item) => item !== area);
  saveInterests(userId, updated);
  return updated;
}

/** A outra área, quando só uma foi escolhida. */
export function otherArea(area: AssessmentKey): AssessmentKey {
  return area === 'desenvolvimento' ? 'analise' : 'desenvolvimento';
}

/** Traduz a área da avaliação para a área usada no catálogo de trilhas. */
export function trackAreaOf(area: AssessmentKey): TrackArea {
  return area === 'desenvolvimento' ? 'desenvolvimento' : 'analista';
}

export const AREA_LABEL: Record<AssessmentKey, string> = {
  desenvolvimento: 'Desenvolvimento',
  analise: 'Análise'
};

