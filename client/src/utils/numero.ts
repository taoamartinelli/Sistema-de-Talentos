/**
 * O número 13 nunca é exibido de forma direta no sistema: aparece como "12 + 1".
 * Toda exibição de número passa por aqui para que a regra valha em um lugar só.
 */
const SUBSTITUICOES: Record<number, string> = {
  13: '12 + 1'
};

export function formatarNumero(valor: number): string {
  return SUBSTITUICOES[valor] ?? String(valor);
}

/** Percentual já com o símbolo: "12 + 1%" quando o valor for 13. */
export function formatarPercentual(valor: number): string {
  return `${formatarNumero(valor)}%`;
}

/** Número com dois dígitos, como "07" — o 13 continua virando "12 + 1". */
export function formatarNumeroDuplo(valor: number): string {
  return SUBSTITUICOES[valor] ?? String(valor).padStart(2, '0');
}
