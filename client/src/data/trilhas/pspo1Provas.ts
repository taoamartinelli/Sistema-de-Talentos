import { SimuladoQuestion } from '../trilha360';

/** Simulado de conclusão de cada módulo da trilha PSPO I: 5 questões por módulo. */
export const PSPO1_MODULE_QUIZZES: Record<string, SimuladoQuestion[]> = {
  'pspo1-1': [
    {
      id: 'oq1-1',
      statement: 'Qual é a nota de corte do exame PSPO I?',
      options: ['85% — 68 das 80 questões', '70% — 56 das 80', '80% — 64 das 80', '90% — 72 das 80'],
      answer: 0
    },
    {
      id: 'oq1-2',
      statement: 'Quanto tempo dura a prova?',
      options: ['60 minutos, sem pausas', '90 minutos', '45 minutos', '120 minutos'],
      answer: 0
    },
    {
      id: 'oq1-3',
      statement: 'Story Points e Planning Poker são parte do Scrum oficial?',
      options: [
        'Não — são práticas complementares opcionais',
        'Sim, são obrigatórios para estimar',
        'Sim, quando há mais de uma equipe',
        'Somente Story Points é oficial'
      ],
      answer: 0
    },
    {
      id: 'oq1-4',
      statement: 'Qual é a fonte da verdade para responder às questões?',
      options: ['O Guia do Scrum vigente', 'O manual da empresa', 'O SAFe', 'O PMBOK'],
      answer: 0
    },
    {
      id: 'oq1-5',
      statement: 'Quantas questões compõem o exame?',
      options: ['80', '60', '100', '50'],
      answer: 0
    }
  ],

  'pspo1-2': [
    {
      id: 'oq2-1',
      statement: 'Quais são os três pilares do empirismo?',
      options: [
        'Transparência, Inspeção e Adaptação',
        'Foco, Coragem e Compromisso',
        'Planejar, Executar e Revisar',
        'Visão, Estratégia e Execução'
      ],
      answer: 0
    },
    {
      id: 'oq2-2',
      statement: 'Quais são os cinco valores do Scrum?',
      options: [
        'Foco, Respeito, Abertura, Compromisso e Coragem',
        'Transparência, Inspeção, Adaptação, Foco e Respeito',
        'Colaboração, Entrega, Qualidade, Velocidade e Melhoria',
        'Disciplina, Ordem, Método, Prazo e Resultado'
      ],
      answer: 0
    },
    {
      id: 'oq2-3',
      statement: 'Em que o Scrum se baseia, além do empirismo?',
      options: ['No pensamento enxuto (lean)', 'Na gestão por objetivos', 'No método em cascata', 'Na teoria das restrições'],
      answer: 0
    },
    {
      id: 'oq2-4',
      statement: 'Uma equipe reporta um status melhor do que o real. Qual pilar é violado?',
      options: ['Transparência', 'Adaptação', 'Inspeção', 'Nenhum — é uma questão de estilo'],
      answer: 0
    },
    {
      id: 'oq2-5',
      statement: 'O processo se desviou dos limites aceitáveis. O que o Scrum exige?',
      options: [
        'Ajuste imediato — adaptação',
        'Aguardar a próxima Retrospective',
        'Registrar o desvio e seguir o plano',
        'Escalar para a gerência'
      ],
      answer: 0
    }
  ],

  'pspo1-3': [
    {
      id: 'oq3-1',
      statement: 'Quem é o único responsável por maximizar o valor do produto?',
      options: ['O Product Owner', 'O Scrum Master', 'Os Developers', 'O patrocinador'],
      answer: 0
    },
    {
      id: 'oq3-2',
      statement: 'O Product Owner pode ser um comitê?',
      options: [
        'Não — é uma pessoa física única',
        'Sim, quando o produto é grande',
        'Sim, se a organização definir assim',
        'Sim, desde que haja um porta-voz'
      ],
      answer: 0
    },
    {
      id: 'oq3-3',
      statement: 'Qual destas NÃO é atribuição do PO?',
      options: [
        'Estimar o esforço dos itens do backlog',
        'Ordenar o Product Backlog',
        'Comunicar o Product Goal',
        'Decidir sobre o lançamento do incremento'
      ],
      answer: 0
    },
    {
      id: 'oq3-4',
      statement: 'O PO pode dizer aos Developers como executar o trabalho técnico?',
      options: [
        'Não — ele define o "o quê" e o "porquê"',
        'Sim, quando o prazo aperta',
        'Sim, se tiver formação técnica',
        'Sim, com aprovação do Scrum Master'
      ],
      answer: 0
    },
    {
      id: 'oq3-5',
      statement: 'Quem decide se um incremento será lançado no mercado?',
      options: ['O Product Owner', 'Os Developers', 'O Scrum Master', 'O comitê de stakeholders'],
      answer: 0
    }
  ],

  'pspo1-4': [
    {
      id: 'oq4-1',
      statement: 'Quem cria o Sprint Backlog?',
      options: ['Os Developers', 'O Product Owner', 'O Scrum Master', 'A gerência'],
      answer: 0
    },
    {
      id: 'oq4-2',
      statement: 'Quem estima o tamanho e o esforço dos itens?',
      options: ['Os Developers', 'O Product Owner', 'O Scrum Master', 'O cliente'],
      answer: 0
    },
    {
      id: 'oq4-3',
      statement: 'Existe divisão funcional entre testadores e programadores?',
      options: [
        'Não — todos são Developers, sem subequipes',
        'Sim, é a estrutura recomendada',
        'Sim, quando a equipe tem mais de sete pessoas',
        'Sim, se a organização exigir'
      ],
      answer: 0
    },
    {
      id: 'oq4-4',
      statement: 'Qual destas NÃO é responsabilidade do Scrum Master?',
      options: [
        'Gerenciar o escopo e as prioridades do produto',
        'Remover impedimentos',
        'Estabelecer o Scrum conforme o Guia',
        'Garantir que os eventos ocorram dentro do timebox'
      ],
      answer: 0
    },
    {
      id: 'oq4-5',
      statement: 'Quem resolve um conflito sobre arquitetura técnica?',
      options: [
        'Os próprios Developers',
        'O Product Owner',
        'O Scrum Master',
        'O arquiteto corporativo'
      ],
      answer: 0
    }
  ],

  'pspo1-5': [
    {
      id: 'oq5-1',
      statement: 'Qual o timebox da Sprint Planning para uma Sprint de um mês?',
      options: ['8 horas', '4 horas', '3 horas', '15 minutos'],
      answer: 0
    },
    {
      id: 'oq5-2',
      statement: 'Qual o timebox da Sprint Review?',
      options: ['4 horas', '8 horas', '3 horas', '2 horas'],
      answer: 0
    },
    {
      id: 'oq5-3',
      statement: 'Qual o timebox da Sprint Retrospective?',
      options: ['3 horas', '4 horas', '8 horas', '1 hora'],
      answer: 0
    },
    {
      id: 'oq5-4',
      statement: 'Quando uma nova Sprint começa?',
      options: [
        'Imediatamente após o término da anterior',
        'Após a aprovação do PO',
        'Na segunda-feira seguinte',
        'Depois da Retrospective e de um intervalo de planejamento'
      ],
      answer: 0
    },
    {
      id: 'oq5-5',
      statement: 'Quais três tópicos a Sprint Planning aborda?',
      options: [
        'Por que a Sprint é valiosa, o que pode ser feito e como será realizado',
        'O que deu errado, o que deu certo e o que melhorar',
        'Escopo, prazo e custo',
        'Visão, estratégia e roadmap'
      ],
      answer: 0
    }
  ],

  'pspo1-6': [
    {
      id: 'oq6-1',
      statement: 'De quem é a Daily Scrum?',
      options: [
        'Dos Developers',
        'Do Scrum Master',
        'Do Product Owner',
        'De toda a organização'
      ],
      answer: 0
    },
    {
      id: 'oq6-2',
      statement: 'Stakeholders podem participar da Sprint Retrospective?',
      options: [
        'Não — estão estritamente proibidos',
        'Sim, sempre',
        'Sim, se convidados pelo PO',
        'Sim, como ouvintes'
      ],
      answer: 0
    },
    {
      id: 'oq6-3',
      statement: 'Qual evento é o momento-chave para o feedback dos stakeholders?',
      options: ['A Sprint Review', 'A Daily Scrum', 'A Retrospective', 'A Sprint Planning'],
      answer: 0
    },
    {
      id: 'oq6-4',
      statement: 'Quando o PO participa da Daily Scrum?',
      options: [
        'Somente se estiver executando itens técnicos como Developer',
        'Sempre, para acompanhar o progresso',
        'Quando precisa cobrar prazos',
        'Nunca, em nenhuma hipótese'
      ],
      answer: 0
    },
    {
      id: 'oq6-5',
      statement: 'Stakeholders participam da Sprint Planning?',
      options: [
        'Não, salvo convite pontual para dar insumos',
        'Sim, sempre',
        'Sim, se forem clientes',
        'Somente na primeira Sprint'
      ],
      answer: 0
    }
  ],

  'pspo1-7': [
    {
      id: 'oq7-1',
      statement: 'Qual é o compromisso do Product Backlog?',
      options: ['O Product Goal', 'O Sprint Goal', 'A Definition of Done', 'O roadmap'],
      answer: 0
    },
    {
      id: 'oq7-2',
      statement: 'Qual é o compromisso do Incremento?',
      options: ['A Definition of Done', 'O Sprint Goal', 'O Product Goal', 'O plano de release'],
      answer: 0
    },
    {
      id: 'oq7-3',
      statement: 'De quem é a propriedade do Sprint Backlog?',
      options: ['Exclusiva dos Developers', 'Do Product Owner', 'Do Scrum Master', 'Compartilhada com stakeholders'],
      answer: 0
    },
    {
      id: 'oq7-4',
      statement: 'O que compõe o Sprint Backlog?',
      options: [
        'O Sprint Goal, os itens selecionados e o plano de entrega',
        'Apenas a lista de tarefas do dia',
        'O Product Goal e o roadmap',
        'A Definition of Done e os critérios de aceite'
      ],
      answer: 0
    },
    {
      id: 'oq7-5',
      statement: 'É possível perseguir dois Product Goals ao mesmo tempo?',
      options: [
        'Não — é preciso atingir ou abandonar um antes do próximo',
        'Sim, se houver duas equipes',
        'Sim, um por trimestre',
        'Sim, desde que o PO aprove'
      ],
      answer: 0
    }
  ],

  'pspo1-8': [
    {
      id: 'oq8-1',
      statement: 'Um item não atingiu a Definition of Done no fim da Sprint. O que acontece?',
      options: [
        'Volta ao Product Backlog para reavaliação e reordenação pelo PO',
        'É apresentado na Review com ressalva',
        'É considerado incremento parcial',
        'É concluído no início da próxima Sprint automaticamente'
      ],
      answer: 0
    },
    {
      id: 'oq8-2',
      statement: 'Quando o incremento pode ser liberado em produção?',
      options: [
        'A qualquer momento da Sprint, assim que atingir a DoD',
        'Somente após a Sprint Review',
        'Somente no fim da Sprint',
        'Somente com aprovação dos stakeholders'
      ],
      answer: 0
    },
    {
      id: 'oq8-3',
      statement: 'Quem define a Definition of Done quando não há padrão organizacional?',
      options: ['Os Developers', 'O Product Owner', 'O Scrum Master', 'A área de qualidade'],
      answer: 0
    },
    {
      id: 'oq8-4',
      statement: 'A organização tem um padrão de qualidade corporativo. O que a equipe faz?',
      options: [
        'Adota-o como base mínima',
        'Cria a própria DoD independentemente',
        'Ignora se for mais rígido',
        'Negocia exceções com o PO'
      ],
      answer: 0
    },
    {
      id: 'oq8-5',
      statement: 'A Sprint Review funciona como portão de aprovação para liberar o incremento?',
      options: [
        'Não — serve para inspecionar e adaptar',
        'Sim, é o momento de homologação',
        'Sim, quando há stakeholders presentes',
        'Sim, se o PO exigir'
      ],
      answer: 0
    }
  ],

  'pspo1-9': [
    {
      id: 'oq9-1',
      statement: 'O que uma boa Visão de Produto deve descrever?',
      options: [
        'O propósito, o valor entregue e quem se beneficia dele',
        'O cronograma de entregas do ano',
        'A arquitetura técnica da solução',
        'O orçamento aprovado'
      ],
      answer: 0
    },
    {
      id: 'oq9-2',
      statement: 'Com o que a Visão do Produto deve se alinhar?',
      options: [
        'Com a estratégia de negócios da organização',
        'Com a capacidade da equipe',
        'Com o calendário fiscal',
        'Com o backlog da concorrência'
      ],
      answer: 0
    },
    {
      id: 'oq9-3',
      statement: 'Como o PO gerencia o retorno sobre o investimento?',
      options: [
        'Garantindo que a equipe trabalhe primeiro no que traz mais impacto',
        'Reduzindo o custo por Sprint',
        'Aumentando o número de itens entregues',
        'Contratando mais Developers'
      ],
      answer: 0
    },
    {
      id: 'oq9-4',
      statement: 'Como o alinhamento entre visão e valor acontece na prática?',
      options: [
        'Pelo refinamento contínuo do Product Backlog',
        'Por um documento aprovado no início do ano',
        'Por reuniões trimestrais de portfólio',
        'Pela Retrospective'
      ],
      answer: 0
    },
    {
      id: 'oq9-5',
      statement: 'Qual é a única fonte de trabalho da Equipe Scrum?',
      options: ['O Product Backlog', 'O Sprint Backlog', 'O roadmap', 'A lista de chamados'],
      answer: 0
    }
  ],

  'pspo1-10': [
    {
      id: 'oq10-1',
      statement: 'Satisfação do cliente e lucratividade pertencem a qual área de valor?',
      options: ['Current Value', 'Unrealized Value', 'Time-to-Market', 'Ability to Innovate'],
      answer: 0
    },
    {
      id: 'oq10-2',
      statement: 'Participação de mercado potencial pertence a qual área?',
      options: ['Unrealized Value', 'Current Value', 'Time-to-Market', 'Ability to Innovate'],
      answer: 0
    },
    {
      id: 'oq10-3',
      statement: 'Cycle time e frequência de releases medem o quê?',
      options: ['Time-to-Market', 'Current Value', 'Unrealized Value', 'Ability to Innovate'],
      answer: 0
    },
    {
      id: 'oq10-4',
      statement: 'Gasto com manutenção versus novos recursos indica qual área?',
      options: ['Ability to Innovate', 'Current Value', 'Time-to-Market', 'Unrealized Value'],
      answer: 0
    },
    {
      id: 'oq10-5',
      statement: 'Para que serve medir o Unrealized Value?',
      options: [
        'Para decidir se vale a pena continuar investindo no produto',
        'Para avaliar a produtividade da equipe',
        'Para calcular o custo do Sprint',
        'Para definir o timebox dos eventos'
      ],
      answer: 0
    }
  ],

  'pspo1-11': [
    {
      id: 'oq11-1',
      statement: 'Qual postura conduz dinâmicas de forma neutra?',
      options: ['Facilitador', 'Coach', 'Mentor', 'Professor'],
      answer: 0
    },
    {
      id: 'oq11-2',
      statement: 'Qual postura faz perguntas poderosas para o time achar as respostas?',
      options: ['Coach', 'Mentor', 'Professor', 'Facilitador'],
      answer: 0
    },
    {
      id: 'oq11-3',
      statement: 'Qual postura compartilha experiência pessoal?',
      options: ['Mentor', 'Coach', 'Facilitador', 'Professor'],
      answer: 0
    },
    {
      id: 'oq11-4',
      statement: 'Qual postura ensina a teoria do Scrum?',
      options: ['Professor', 'Mentor', 'Coach', 'Facilitador'],
      answer: 0
    },
    {
      id: 'oq11-5',
      statement: 'Desenvolver a equipe é responsabilidade exclusiva do Scrum Master?',
      options: [
        'Não — o time é autogerenciável e todos apoiam a evolução mútua',
        'Sim, é o papel central dele',
        'Sim, junto com o PO',
        'Sim, quando a equipe é nova'
      ],
      answer: 0
    }
  ],

  'pspo1-12': [
    {
      id: 'oq12-1',
      statement: 'Quem pode cancelar uma Sprint e em que condição?',
      options: [
        'Apenas o PO, e só se o Sprint Goal se tornar obsoleto',
        'O Scrum Master, se a equipe estiver atrasada',
        'Os Developers, por decisão coletiva',
        'A gerência, a qualquer momento'
      ],
      answer: 0
    },
    {
      id: 'oq12-2',
      statement: 'Quatro equipes trabalham no mesmo produto. Quantos POs e backlogs existem?',
      options: [
        'Um Product Owner e um Product Backlog',
        'Quatro POs e quatro backlogs',
        'Um PO e quatro backlogs',
        'Quatro POs e um backlog'
      ],
      answer: 0
    },
    {
      id: 'oq12-3',
      statement: 'O Product Backlog fica trancado após o Sprint Planning?',
      options: [
        'Não — ele é vivo e evolui com o negócio',
        'Sim, até a próxima Sprint',
        'Sim, exceto para o PO',
        'Sim, para garantir previsibilidade'
      ],
      answer: 0
    },
    {
      id: 'oq12-4',
      statement: 'O que não deve mudar sem alinhamento drástico?',
      options: ['O Sprint Backlog', 'O Product Backlog', 'A Visão do Produto', 'A Definition of Done'],
      answer: 0
    },
    {
      id: 'oq12-5',
      statement: 'Um item incompleto pode ser demonstrado na Sprint Review?',
      options: [
        'Não, sob nenhuma hipótese',
        'Sim, se estiver quase pronto',
        'Sim, se o PO autorizar',
        'Sim, para colher feedback antecipado'
      ],
      answer: 0
    }
  ]
};

const first = (moduleId: string, count: number) => PSPO1_MODULE_QUIZZES[moduleId].slice(0, count);

/**
 * Simulado final: 50 questões — 4 de cada um dos 12 módulos (48)
 * e mais 2 questões de integração.
 */
export const PSPO1_SIMULADO: SimuladoQuestion[] = [
  ...first('pspo1-1', 4),
  ...first('pspo1-2', 4),
  ...first('pspo1-3', 4),
  ...first('pspo1-4', 4),
  ...first('pspo1-5', 4),
  ...first('pspo1-6', 4),
  ...first('pspo1-7', 4),
  ...first('pspo1-8', 4),
  ...first('pspo1-9', 4),
  ...first('pspo1-10', 4),
  ...first('pspo1-11', 4),
  ...first('pspo1-12', 4),
  {
    id: 'os-49',
    statement:
      'Um stakeholder exige participar da Retrospective para entender por que a equipe não entregou tudo. Qual a resposta correta?',
    options: [
      'A Retrospective é fechada à Equipe Scrum, para preservar a segurança psicológica; o espaço dele é a Sprint Review',
      'Ele pode participar como ouvinte',
      'Ele pode participar se o Scrum Master autorizar',
      'A Retrospective deve ser adiada até incluí-lo'
    ],
    answer: 0
  },
  {
    id: 'os-50',
    statement:
      'O PO quer que os Developers usem uma tecnologia específica para acelerar a entrega. O que o framework diz?',
    options: [
      'A decisão técnica é dos Developers; o PO define o "o quê" e o "porquê"',
      'O PO pode decidir, pois é o responsável pelo valor',
      'O Scrum Master decide em caso de impasse',
      'A decisão cabe ao arquiteto da organização'
    ],
    answer: 0
  }
];
