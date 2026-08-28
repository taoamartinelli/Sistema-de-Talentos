// Padrão do sistema: nomes sempre exibidos com a primeira letra
// do nome e do sobrenome em maiúsculo.
// Ex.: "taoa araujo" -> "Taoa Araujo"

// Partículas que, por convenção, seguem em minúsculo no meio do nome.
const PARTICLES = new Set(['de', 'da', 'do', 'das', 'dos', 'e', 'di', 'del', 'van', 'von']);

export function formatPersonName(rawName: string): string {
  return rawName
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      if (index > 0 && PARTICLES.has(word)) return word;
      // Preserva nomes compostos com hífen: "ana-maria" -> "Ana-Maria"
      return word
        .split('-')
        .map((part) => (part ? part.charAt(0).toUpperCase() + part.slice(1) : part))
        .join('-');
    })
    .join(' ');
}
