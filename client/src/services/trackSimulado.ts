export interface SimuladoResult {
  trackId: string;
  correct: number;
  total: number;
  percentage: number;
  approved: boolean;
  completedAt: string;
}

// Resultado do simulado final de cada trilha, por usuário.
// Fica no navegador até existir banco de dados no backend.
const storageKey = (userId: string, trackId: string) => `zello:simulado:${trackId}:${userId}`;

export function loadSimuladoResult(userId: string, trackId: string): SimuladoResult | null {
  try {
    const raw = localStorage.getItem(storageKey(userId, trackId));
    return raw ? (JSON.parse(raw) as SimuladoResult) : null;
  } catch {
    return null;
  }
}

export function saveSimuladoResult(userId: string, result: SimuladoResult): SimuladoResult {
  try {
    localStorage.setItem(storageKey(userId, result.trackId), JSON.stringify(result));
  } catch {
    /* modo privado ou storage indisponível — o resultado vale nesta sessão */
  }
  return result;
}

/** True quando o simulado final da trilha foi concluído com aprovação. */
export function isSimuladoApproved(userId: string, trackId: string): boolean {
  return loadSimuladoResult(userId, trackId)?.approved === true;
}

export function clearSimuladoResult(userId: string, trackId: string): void {
  try {
    localStorage.removeItem(storageKey(userId, trackId));
  } catch {
    /* modo privado ou storage indisponível */
  }
}
