import { AssessmentKey, Level } from '../data/assessments';

export interface AssessmentResult {
  key: AssessmentKey;
  correct: number;
  total: number;
  percentage: number;
  level: Level;
  approved: boolean;
  completedAt: string;
}

export type ResultMap = Partial<Record<AssessmentKey, AssessmentResult>>;

// Os resultados ficam no navegador até existir uma base de dados no backend.
// A versão na chave permite descartar resultados antigos quando o teste muda.
const STORAGE_VERSION = 'v2';
const storageKey = (userId: string) => `zello:avaliacoes:${STORAGE_VERSION}:${userId}`;
const legacyKey = (userId: string) => `zello:avaliacoes:${userId}`;

export function loadResults(userId: string): ResultMap {
  try {
    // Resultados do conjunto anterior de questões não valem mais.
    localStorage.removeItem(legacyKey(userId));

    const raw = localStorage.getItem(storageKey(userId));
    return raw ? (JSON.parse(raw) as ResultMap) : {};
  } catch {
    return {};
  }
}

// Apaga os resultados do usuário e devolve o estado zerado.
export function clearResults(userId: string): ResultMap {
  try {
    localStorage.removeItem(storageKey(userId));
    localStorage.removeItem(legacyKey(userId));
  } catch {
    /* modo privado ou storage indisponível */
  }
  return {};
}

export function saveResult(userId: string, result: AssessmentResult): ResultMap {
  const results = { ...loadResults(userId), [result.key]: result };
  try {
    localStorage.setItem(storageKey(userId), JSON.stringify(results));
  } catch {
    /* sem espaço ou modo privado — o resultado segue válido nesta sessão */
  }
  return results;
}

export function formatCompletedAt(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}
