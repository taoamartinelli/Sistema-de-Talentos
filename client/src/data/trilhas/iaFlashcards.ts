import { Flashcard } from '../trilha360';

/**
 * Flash cards da trilha de IA.
 * Lote 1: módulos 1 a 4 (34 cards). O baralho chega a 100 conforme os lotes avançam.
 */
export const IA_FLASHCARDS: Flashcard[] = [
  /* ---------------- Módulo 1 — A virada agêntica (8) ---------------- */
  { id: 'if-1', moduleId: 'ia-1', front: 'O que é IA agêntica?', back: 'A posse de um resultado por meio de um laço controlado que dá passos dentro de regras definidas — não uma conversa melhor.' },
  { id: 'if-2', moduleId: 'ia-1', front: 'Qual a mudança de postura que a IA agêntica exige?', back: 'Sair de pedir respostas e passar a desenhar um processo que produz artefatos e move o trabalho adiante.' },
  { id: 'if-3', moduleId: 'ia-1', front: 'Quantos resultados o primeiro agente deve possuir?', back: 'Um só. Uma pilha de funcionalidades é o caminho mais rápido para o agente não saber o que é sucesso.' },
  { id: 'if-4', moduleId: 'ia-1', front: 'Quais critérios escolhem o primeiro caso de uso?', back: 'Impacto, frequência, disponibilidade de dados e risco.' },
  { id: 'if-5', moduleId: 'ia-1', front: 'O que é a escada da autonomia?', back: 'Assistido, supervisionado e semiautônomo — com draft-first como padrão para o que é externo, custoso ou irreversível.' },
  { id: 'if-6', moduleId: 'ia-1', front: 'O que é a lista de proibições (stop list)?', back: 'O que o agente nunca pode fazer, para que ele pare com segurança em vez de improvisar.' },
  { id: 'if-7', moduleId: 'ia-1', front: 'O que compõe o SLA de um agente?', back: 'Tempo de resposta, critério de sucesso em artefatos, tratamento de falha e relato para auditoria.' },
  { id: 'if-8', moduleId: 'ia-1', front: 'O que é a descrição de cargo do agente?', back: 'Uma frase que define o resultado que ele possui, com as restrições e os artefatos que deve produzir.' },

  /* ---------------- Módulo 2 — Anatomia de um agente (10) ---------------- */
  { id: 'if-9', moduleId: 'ia-2', front: 'Qual é o laço que define um agente?', back: 'Entrada → interpretação → planejamento → ação → observação → atualização de estado → próximo passo.' },
  { id: 'if-10', moduleId: 'ia-2', front: 'Por que existe a etapa de interpretação?', back: 'Porque entradas reais são confusas: o papel do agente é transformar ruído em estrutura.' },
  { id: 'if-11', moduleId: 'ia-2', front: 'Por que existe a etapa de observação?', back: 'Porque ações têm consequências — inclusive erros, resultados parciais e informação nova.' },
  { id: 'if-12', moduleId: 'ia-2', front: 'Chamar uma ferramenta é o quê, dentro do laço?', back: 'Um tipo de ação. Recuperar informação é observação mais atualização de estado.' },
  { id: 'if-13', moduleId: 'ia-2', front: 'Qual a diferença entre estado e memória?', back: 'Estado é o que o agente carrega na execução atual; memória é o que ele mantém entre execuções.' },
  { id: 'if-14', moduleId: 'ia-2', front: 'O que o estado deve registrar, no mínimo?', back: 'Objetivo, restrições e permissões, plano, registro de execução e perguntas em aberto.' },
  { id: 'if-15', moduleId: 'ia-2', front: 'Por que agentes inventam informação?', back: 'Porque muitas vezes não há onde registrar o desconhecido — sem lugar para "não sei", a lacuna vira texto confiante.' },
  { id: 'if-16', moduleId: 'ia-2', front: 'O que é um checkpoint?', back: 'O momento em que o agente reafirma, em uma frase, o objetivo e o próximo passo antes de agir de novo.' },
  { id: 'if-17', moduleId: 'ia-2', front: 'Qual é a saída real do trabalho agêntico?', back: 'Artefatos: rascunhos, tarefas, memorandos, listas — coisas que podem ser armazenadas, revisadas e aprovadas.' },
  { id: 'if-18', moduleId: 'ia-2', front: 'Quais são os quatro blocos de uma instrução estável?', back: 'Papel e missão, restrições, processo e formato de saída — mais um comportamento de fallback para quando travar.' },

  /* ---------------- Módulo 3 — Ferramentas (8) ---------------- */
  { id: 'if-19', moduleId: 'ia-3', front: 'O que muda quando o agente ganha ferramentas?', back: 'Ele passa a produzir efeitos colaterais no mundo — e é aí que a confiança é ganha ou perdida.' },
  { id: 'if-20', moduleId: 'ia-3', front: 'O que define o contrato de uma ferramenta?', back: 'Entradas explícitas, recibo, comportamento previsível de falha, retentativa segura e idempotência.' },
  { id: 'if-21', moduleId: 'ia-3', front: 'O que é idempotência?', back: 'A garantia de que repetir a mesma chamada não duplica o efeito.' },
  { id: 'if-22', moduleId: 'ia-3', front: 'O que é um recibo de ferramenta?', back: 'A prova de que a ação aconteceu: id, link ou status devolvido pela ferramenta.' },
  { id: 'if-23', moduleId: 'ia-3', front: 'O que fazer quando não há recibo?', back: 'Registrar como falha no estado — sem recibo, o passo não aconteceu.' },
  { id: 'if-24', moduleId: 'ia-3', front: 'Por que começar com um catálogo pequeno de ferramentas?', back: 'Porque gera valor imediato com risco limitado; o catálogo cresce por necessidade comprovada.' },
  { id: 'if-25', moduleId: 'ia-3', front: 'O que é a prévia da carga (payload preview)?', back: 'Mostrar exatamente o que será enviado antes de executar — aprova-se a intenção, não só o resultado.' },
  { id: 'if-26', moduleId: 'ia-3', front: 'Para que serve a tabela de ações permitidas?', back: 'Deixar explícito o que o agente pode fazer, com qual ferramenta e sob qual permissão.' },

  /* ---------------- Módulo 4 — Memória e RAG (8) ---------------- */
  { id: 'if-27', moduleId: 'ia-4', front: 'Onde o conhecimento deve viver?', back: 'Nos documentos e sistemas de registro, recuperado quando necessário — assim ele tem procedência e citação.' },
  { id: 'if-28', moduleId: 'ia-4', front: 'O que é boa memória em um agente?', back: 'Lembrar só o que melhora as próximas execuções, de forma auditável, corrigível e com prazo de validade.' },
  { id: 'if-29', moduleId: 'ia-4', front: 'Qual o risco da memória velha?', back: 'Ela parece competência: o agente age rápido e confiante aplicando algo que já não é verdade.' },
  { id: 'if-30', moduleId: 'ia-4', front: 'O que compõe o esquema mínimo de memória?', back: 'Chave, valor, categoria, fonte, confiança, última verificação, TTL e sensibilidade.' },
  { id: 'if-31', moduleId: 'ia-4', front: 'O que significa RAG?', back: 'Retrieval Augmented Generation: recuperar, resumir, citar e então agir.' },
  { id: 'if-32', moduleId: 'ia-4', front: 'Qual é a regra de ouro do RAG?', back: 'Se não pode apontar a fonte, não pode afirmar o fato.' },
  { id: 'if-33', moduleId: 'ia-4', front: 'Por que o agente fica "inteligentemente errado"?', back: 'Porque o modelo produz continuações plausíveis; sem obrigação de recuperar e citar, ele preenche a lacuna com o mais provável.' },
  { id: 'if-34', moduleId: 'ia-4', front: 'O que fazer quando as fontes se contradizem?', back: 'Trazer o conflito à tona, ordenar por uma régua de qualidade e seguir com a de maior autoridade ou escalar.' }
];
