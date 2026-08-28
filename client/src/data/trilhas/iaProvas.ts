import { SimuladoQuestion } from '../trilha360';

/**
 * Simulados da trilha de IA.
 * Lote 1: simulado de conclusão dos módulos 1 a 4.
 * O simulado final de 50 questões entra quando os 12 módulos estiverem publicados.
 */
export const IA_MODULE_QUIZZES: Record<string, SimuladoQuestion[]> = {
  'ia-1': [
    {
      id: 'iq1-1',
      statement: 'O que caracteriza a IA agêntica?',
      options: [
        'A posse de um resultado por meio de um laço controlado que age dentro de regras',
        'Uma conversa mais fluente com o modelo',
        'Um modelo maior e mais caro',
        'Um chatbot com memória infinita'
      ],
      answer: 0
    },
    {
      id: 'iq1-2',
      statement: 'Quais critérios usar para escolher o primeiro caso de uso?',
      options: [
        'Impacto, frequência, disponibilidade de dados e risco',
        'Custo da licença e número de usuários',
        'Popularidade da ferramenta e tamanho do modelo',
        'Tempo de resposta e idioma suportado'
      ],
      answer: 0
    },
    {
      id: 'iq1-3',
      statement: 'O que é o comportamento draft-first?',
      options: [
        'O agente prepara o rascunho e aguarda aprovação antes de agir no mundo',
        'O agente age primeiro e avisa depois',
        'O agente responde sempre em texto curto',
        'O agente escreve o código antes do plano'
      ],
      answer: 0
    },
    {
      id: 'iq1-4',
      statement: 'Para que serve a lista de proibições?',
      options: [
        'Definir o que o agente nunca pode fazer, permitindo parar em vez de improvisar',
        'Listar as ferramentas disponíveis',
        'Registrar os erros já cometidos',
        'Definir o formato dos artefatos'
      ],
      answer: 0
    },
    {
      id: 'iq1-5',
      statement: 'Um SLA de agente define o critério de sucesso em termos de:',
      options: [
        'Artefatos produzidos',
        'Impressão de quem leu a resposta',
        'Número de mensagens trocadas',
        'Tamanho do prompt utilizado'
      ],
      answer: 0
    }
  ],

  'ia-2': [
    {
      id: 'iq2-1',
      statement: 'Qual é a sequência do laço de um agente?',
      options: [
        'Entrada, interpretação, planejamento, ação, observação, atualização de estado, próximo passo',
        'Entrada, resposta, encerramento',
        'Planejamento, memória, conversa, relatório',
        'Ação, entrada, observação, conclusão'
      ],
      answer: 0
    },
    {
      id: 'iq2-2',
      statement: 'Dentro do laço, chamar uma ferramenta é:',
      options: ['Um tipo de ação', 'Um tipo de observação', 'Uma atualização de estado', 'Um checkpoint'],
      answer: 0
    },
    {
      id: 'iq2-3',
      statement: 'Por que o estado precisa ser explícito?',
      options: [
        'Para o sistema ser inspecionável, depurável e confiável',
        'Para reduzir o custo do modelo',
        'Para acelerar a resposta',
        'Para dispensar o uso de ferramentas'
      ],
      answer: 0
    },
    {
      id: 'iq2-4',
      statement: 'Qual é a saída real do trabalho agêntico?',
      options: [
        'Artefatos que podem ser armazenados, revisados e aprovados',
        'Mensagens de chat bem escritas',
        'O histórico da conversa',
        'O prompt utilizado'
      ],
      answer: 0
    },
    {
      id: 'iq2-5',
      statement: 'Quais são os quatro blocos de uma instrução estável?',
      options: [
        'Papel e missão, restrições, processo e formato de saída',
        'Entrada, saída, erro e log',
        'Objetivo, ferramenta, memória e relatório',
        'Contexto, exemplo, pergunta e resposta'
      ],
      answer: 0
    }
  ],

  'ia-3': [
    {
      id: 'iq3-1',
      statement: 'O que muda quando o agente ganha ferramentas?',
      options: [
        'Ele passa a produzir efeitos colaterais reais no mundo',
        'Ele passa a responder mais rápido',
        'Ele deixa de precisar de estado',
        'Ele dispensa aprovação humana'
      ],
      answer: 0
    },
    {
      id: 'iq3-2',
      statement: 'O que garante a idempotência de uma ferramenta?',
      options: [
        'Repetir a mesma chamada não duplica o efeito',
        'A ferramenta nunca falha',
        'A resposta é sempre em JSON',
        'O agente pede aprovação a cada chamada'
      ],
      answer: 0
    },
    {
      id: 'iq3-3',
      statement: 'O agente afirma ter criado uma tarefa, mas não há recibo. O que o estado deve registrar?',
      options: [
        'Falha — sem recibo, o passo não aconteceu',
        'Sucesso, confiando na afirmação do agente',
        'Nada, porque o passo é irrelevante',
        'Um aviso informativo apenas'
      ],
      answer: 0
    },
    {
      id: 'iq3-4',
      statement: 'Para que serve a prévia da carga antes de executar?',
      options: [
        'Permitir que se aprove a intenção, e não apenas o resultado',
        'Reduzir o tamanho da requisição',
        'Aumentar a velocidade da chamada',
        'Substituir o contrato da ferramenta'
      ],
      answer: 0
    },
    {
      id: 'iq3-5',
      statement: 'Por que começar com um catálogo pequeno de ferramentas?',
      options: [
        'Gera valor imediato com risco limitado',
        'Porque mais ferramentas deixam o modelo lento',
        'Porque ferramentas custam licença por unidade',
        'Porque o agente só suporta três ferramentas'
      ],
      answer: 0
    }
  ],

  'ia-4': [
    {
      id: 'iq4-1',
      statement: 'Qual a diferença entre estado, memória e conhecimento?',
      options: [
        'Estado é da execução atual; memória atravessa execuções; conhecimento vive nos documentos e é recuperado',
        'São três nomes para a mesma coisa',
        'Estado é permanente; memória é temporária; conhecimento é opcional',
        'Memória é da execução atual; estado atravessa execuções'
      ],
      answer: 0
    },
    {
      id: 'iq4-2',
      statement: 'Por que a memória velha é perigosa?',
      options: [
        'Porque parece competência: o agente age confiante aplicando algo que já não é verdade',
        'Porque ocupa muito espaço em disco',
        'Porque deixa o agente mais lento',
        'Porque impede o uso de ferramentas'
      ],
      answer: 0
    },
    {
      id: 'iq4-3',
      statement: 'Qual é a regra de ouro do RAG?',
      options: [
        'Se não pode apontar a fonte, não pode afirmar o fato',
        'Sempre citar pelo menos três fontes',
        'Nunca usar documentos internos',
        'Resumir antes de recuperar'
      ],
      answer: 0
    },
    {
      id: 'iq4-4',
      statement: 'Qual é o ciclo do RAG bem feito?',
      options: [
        'Recuperar, resumir, citar, agir',
        'Agir, recuperar, revisar, publicar',
        'Perguntar, responder, salvar, esquecer',
        'Planejar, executar, verificar, repetir'
      ],
      answer: 0
    },
    {
      id: 'iq4-5',
      statement: 'Duas fontes se contradizem. O que o agente deve fazer?',
      options: [
        'Trazer o conflito à tona, ordenar por qualidade e seguir com a mais autorizada ou escalar',
        'Escolher a mais recente sem avisar',
        'Ignorar as duas e responder pelo modelo',
        'Interromper a execução sem explicação'
      ],
      answer: 0
    }
  ]
};

/** Simulado final da trilha — entra quando os 12 módulos estiverem publicados. */
export const IA_SIMULADO: SimuladoQuestion[] = [];
