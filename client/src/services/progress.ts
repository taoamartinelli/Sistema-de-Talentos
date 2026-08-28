// Marca que o usuário leu a introdução e está ciente das regras do programa.
// Enquanto não houver banco de dados, o registro fica no navegador.
const acknowledgeKey = (userId: string) => `zello:ciente:${userId}`;

export function isAcknowledged(userId: string): boolean {
  try {
    return localStorage.getItem(acknowledgeKey(userId)) === 'true';
  } catch {
    return false;
  }
}

export function acknowledge(userId: string): void {
  try {
    localStorage.setItem(acknowledgeKey(userId), 'true');
  } catch {
    /* modo privado ou storage indisponível — vale só nesta sessão */
  }
}
