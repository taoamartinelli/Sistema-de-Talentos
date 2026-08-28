import { Module } from '../trilha360';
import { TrackOverview } from '../../components/TrackPage';

/**
 * Trilha PSM I — baseada na Trilha Oficial de Formação (Professional Scrum Master I),
 * organizada nas mesmas 10 fases do documento.
 */

export const PSM1_OVERVIEW: TrackOverview = {
  title: 'Trilha oficial de formação — PSM I',
  intro:
    'Trilha para capacitar profissionais sem experiência prévia em Scrum, conduzindo-os de forma estruturada até o nível necessário para a certificação Professional Scrum Master I. O conteúdo avança em etapas progressivas, dos conceitos fundamentais à preparação prática para a prova oficial.',
  pillars: [
    'Construção de base sólida sobre Scrum',
    'Entendimento completo do framework e do Scrum Guide 2020',
    'Desenvolvimento da mentalidade ágil',
    'Familiarização com as terminologias em inglês da certificação',
    'Organização dos estudos e documentação',
    'Preparação prática por simulados e revisões'
  ],
  audience: [
    'Pessoas sem experiência anterior com Scrum',
    'Profissionais iniciantes na área de tecnologia',
    'Profissionais migrando de área',
    'Quem quer base sólida antes da certificação'
  ],
  prerequisite:
    'Não é necessário conhecimento prévio. A trilha está organizada em ordem progressiva para permitir aprendizado do zero. A referência principal é o Scrum Guide 2020.',
  completion: [
    'Compreender o que é Scrum e sua aplicação',
    'Entender os princípios do empirismo',
    'Identificar corretamente as responsabilidades do Scrum Team',
    'Interpretar o Scrum Guide 2020',
    'Diferenciar práticas corretas e incorretas dentro do framework',
    'Entender o funcionamento dos eventos e dos artefatos',
    'Identificar as armadilhas comuns da prova',
    'Estar apto a realizar a prova oficial PSM I'
  ]
};

export const PSM1_MODULES: Module[] = [
  {
    id: 'psm1-1',
    number: 1,
    title: 'Introdução ao Scrum e ao PSM I',
    objective:
      'Apresentar os conceitos iniciais do Scrum, o objetivo da certificação e a mentalidade ágil.',
    topics: [
      {
        title: 'O que é Scrum',
        text: 'Um framework leve utilizado para geração de valor através de soluções adaptativas para problemas complexos.',
        items: [
          'O que é um framework',
          'Diferença entre Scrum e metodologia tradicional',
          'Conceito de agilidade',
          'Conceito de valor',
          'Iteração e incremento',
          'Adaptabilidade e complexidade'
        ]
      },
      {
        title: 'O que é o PSM I',
        items: [
          'Certificação internacional emitida pela Scrum.org, que valida o conhecimento sobre Scrum e a atuação do Scrum Master',
          'Base oficial: o Scrum Guide 2020',
          '80 questões e tempo limite de 60 minutos',
          'Múltipla escolha, múltiplas respostas e verdadeiro/falso',
          'Nota mínima de aprovação: 85%',
          'Idioma principal: inglês'
        ],
        text: 'O exame é fortemente baseado na interpretação correta do Scrum Guide.'
      },
      {
        title: 'Mentalidade ágil',
        items: [
          'Colaboração',
          'Transparência',
          'Inspeção',
          'Adaptação',
          'Melhoria contínua',
          'Autogestão'
        ]
      }
    ],
    outcome:
      'Entender o que é o Scrum, o formato da prova e a mentalidade que sustenta o framework.'
  },
  {
    id: 'psm1-2',
    number: 2,
    title: 'Organização dos estudos',
    objective: 'Usar o repositório oficial da trilha como ambiente central de estudo.',
    topics: [
      {
        title: 'O GitHub como repositório da trilha',
        items: [
          'Documentações',
          'Guias de estudo',
          'Links oficiais',
          'Simulados',
          'Materiais complementares',
          'Anotações e exercícios',
          'Histórico de atualização da trilha'
        ]
      },
      {
        title: 'O que o participante deve aprender',
        items: [
          'Como acessar o repositório',
          'Como navegar pelas pastas',
          'Como localizar arquivos e baixar documentos',
          'Como identificar versões atualizadas',
          'Como acompanhar as atualizações da trilha'
        ]
      },
      {
        title: 'Por que isso importa',
        text: 'A trilha foi construída com foco em padronização e clareza: manter um único lugar para materiais, anotações e histórico evita estudar por versões desatualizadas.'
      }
    ],
    outcome: 'Ter um ambiente único e organizado para conduzir os estudos até a prova.'
  },
  {
    id: 'psm1-3',
    number: 3,
    title: 'Scrum Guide: definição e teoria',
    objective: 'Desenvolver o entendimento completo do Scrum Guide 2020, a principal referência da certificação.',
    topics: [
      {
        title: 'Definição do Scrum',
        items: [
          'O propósito do Scrum',
          'Framework leve',
          'Geração de valor',
          'Problemas complexos',
          'Soluções adaptativas'
        ]
      },
      {
        title: 'Empirismo',
        text: 'O Scrum se apoia no empirismo: o conhecimento vem da experiência e as decisões se baseiam no que é observado.'
      },
      {
        title: 'Os três pilares',
        items: ['Transparência', 'Inspeção', 'Adaptação']
      },
      {
        title: 'A cadeia que o Scrum Guide estabelece',
        items: [
          'A transparência permite a inspeção',
          'A inspeção permite a adaptação',
          'Sem adaptação, a inspeção perde valor'
        ]
      }
    ],
    outcome: 'Interpretar o Scrum Guide como documento oficial e explicar a lógica dos três pilares.'
  },
  {
    id: 'psm1-4',
    number: 4,
    title: 'Os valores do Scrum',
    objective: 'Dominar os cinco valores, extremamente cobrados na prova oficial — inclusive em inglês.',
    topics: [
      {
        title: 'Os cinco valores',
        items: [
          'Commitment (Compromisso)',
          'Focus (Foco)',
          'Openness (Abertura)',
          'Respect (Respeito)',
          'Courage (Coragem)'
        ]
      },
      {
        title: 'Por que os valores importam',
        text: 'Eles sustentam a confiança dentro da equipe. Quando são vividos, os pilares do empirismo se tornam reais; quando faltam, transparência e inspeção viram formalidade.'
      },
      {
        title: 'Terminologia em inglês',
        text: 'A prova é aplicada em inglês. Reconhecer os termos originais — commitment, focus, openness, respect, courage — evita erros de interpretação sob pressão de tempo.'
      }
    ],
    outcome: 'Reconhecer qual valor está em jogo em cada cenário descrito pelas questões.'
  },
  {
    id: 'psm1-5',
    number: 5,
    title: 'O Scrum Team',
    objective:
      'Compreender a estrutura e as responsabilidades do time, com foco no papel do Scrum Master.',
    topics: [
      {
        title: 'Estrutura do Scrum Team',
        items: ['1 Product Owner', '1 Scrum Master', 'Developers'],
        text: 'O time deve ser pequeno, multifuncional e autogerenciável.'
      },
      {
        title: 'Scrum Master — o foco da certificação',
        items: [
          'Papel de facilitador',
          'Liderança servidora',
          'Remoção de impedimentos',
          'Coaching do time',
          'Garantia do entendimento do Scrum'
        ],
        text: 'Conforme o Scrum Guide, o Scrum Master é responsável por estabelecer o Scrum como definido no guia.'
      },
      {
        title: 'Product Owner',
        items: ['Maximização de valor', 'Gestão do Product Backlog', 'Priorização', 'Product Goal']
      },
      {
        title: 'Developers',
        items: [
          'Autogestão',
          'Planejamento da Sprint',
          'Criação do incremento',
          'Responsabilidade pela qualidade'
        ]
      }
    ],
    outcome: 'Identificar corretamente quem faz o quê dentro do Scrum Team.'
  },
  {
    id: 'psm1-6',
    number: 6,
    title: 'Os eventos do Scrum',
    objective: 'Compreender o propósito de cada evento e o que se espera dele.',
    topics: [
      {
        title: 'Sprint — o contêiner',
        items: ['Timebox', 'Objetivo da Sprint', 'Previsibilidade', 'Inspeção', 'Adaptação', 'Sprint Goal']
      },
      {
        title: 'Sprint Planning',
        items: [
          'Por que a Sprint é valiosa',
          'O que será feito',
          'Como o trabalho será realizado'
        ]
      },
      {
        title: 'Daily Scrum',
        items: [
          'Objetivo da Daily',
          'Duração máxima de 15 minutos',
          'Inspeção do progresso',
          'Planejamento das próximas 24 horas'
        ],
        text: 'Importante: a Daily Scrum é para os Developers.'
      },
      {
        title: 'Sprint Review',
        items: [
          'Inspeção do incremento',
          'Feedback',
          'Colaboração com os stakeholders',
          'Adaptação do Product Backlog'
        ]
      },
      {
        title: 'Sprint Retrospective',
        items: [
          'Melhoria contínua',
          'Inspeção do processo',
          'Eficiência do time',
          'Qualidade',
          'Ações de melhoria'
        ]
      }
    ],
    outcome: 'Explicar o propósito de cada evento sem trocar um pelo outro.'
  },
  {
    id: 'psm1-7',
    number: 7,
    title: 'Artefatos e compromissos',
    objective: 'Compreender os três artefatos, suas características e o compromisso de cada um.',
    topics: [
      {
        title: 'Product Backlog',
        items: ['Único', 'Ordenado', 'Transparente', 'Emergente']
      },
      {
        title: 'Sprint Backlog',
        items: ['Objetivo da Sprint', 'Plano de trabalho', 'Atualização contínua']
      },
      {
        title: 'Increment',
        items: [
          'Entrega de valor',
          'Incremento utilizável',
          'Necessidade de atender à Definition of Done'
        ]
      },
      {
        title: 'Definition of Done',
        items: [
          'Critério de qualidade',
          'Transparência',
          'Trabalho concluído',
          'Qualidade mínima'
        ],
        text: 'Importante: a Definition of Done nunca deve ser reduzida para caber mais trabalho na Sprint.'
      }
    ],
    outcome: 'Relacionar cada artefato ao seu compromisso e defender a integridade da DoD.'
  },
  {
    id: 'psm1-8',
    number: 8,
    title: 'Armadilhas e interpretação de prova',
    objective: 'Preparar o participante para interpretar corretamente as questões e evitar os erros clássicos.',
    topics: [
      {
        title: 'Conceitos que costumam gerar erro',
        items: [
          'Sprint Zero não existe',
          'Velocidade não mede valor',
          'Story Points não medem valor',
          'O Scrum não exige User Stories',
          'O refinamento é contínuo',
          'O Product Owner não gerencia pessoas',
          'O Scrum Master não substitui o Product Owner'
        ]
      },
      {
        title: 'Interpretação de questões',
        items: [
          'Leitura cuidadosa do enunciado',
          'Interpretação do contexto',
          'Atenção aos termos em inglês',
          'Reconhecimento de pegadinhas conceituais',
          'Diferença entre o Scrum real e as práticas de mercado'
        ]
      }
    ],
    outcome: 'Separar o que está no Guia do Scrum do que é hábito de mercado.'
  },
  {
    id: 'psm1-9',
    number: 9,
    title: 'Simulados e fixação',
    objective: 'Preparar o participante para o formato real da prova.',
    topics: [
      {
        title: 'O que deve ser realizado',
        items: [
          'Simulados oficiais',
          'Questões comentadas',
          'Revisões periódicas',
          'Análise dos erros',
          'Revisão do Scrum Guide'
        ]
      },
      {
        title: 'Meta recomendada',
        items: [
          'Mínimo de 90% nos simulados',
          'Consistência nos resultados',
          'Capacidade de interpretar questões rapidamente'
        ]
      },
      {
        title: 'Por que a meta é maior que a nota de corte',
        text: 'A prova exige 85%. Chegar a 90% de forma consistente nos simulados cria a margem necessária para lidar com o inglês e com a pressão do relógio.'
      }
    ],
    outcome: 'Chegar à prova com desempenho consistente e leitura rápida de enunciados.'
  },
  {
    id: 'psm1-10',
    number: 10,
    title: 'Preparação final',
    objective: 'Fazer a revisão final e organizar o dia da prova.',
    topics: [
      {
        title: 'Revisão final',
        items: [
          'Scrum Guide completo',
          'Valores do Scrum',
          'Eventos',
          'Responsabilidades',
          'Artefatos e compromissos',
          'Armadilhas comuns'
        ]
      },
      {
        title: 'Preparação para o dia da prova',
        items: [
          'Ambiente silencioso',
          'Internet estável',
          'Navegador atualizado',
          'Boa gestão do tempo',
          'Atenção às questões com múltiplas respostas'
        ]
      },
      {
        title: 'Critérios de conclusão da trilha',
        items: [
          'Finalizar todas as fases',
          'Realizar a leitura completa do Scrum Guide',
          'Concluir os materiais obrigatórios',
          'Realizar os simulados',
          'Demonstrar entendimento dos conceitos fundamentais'
        ]
      },
      {
        title: 'Considerações finais',
        text: 'O objetivo principal não é apenas a aprovação, mas o entendimento real do framework e da atuação do Scrum Master. A certificação é consequência da construção correta da base de conhecimento.'
      }
    ],
    outcome: 'Chegar ao exame com revisão feita e o ambiente preparado.'
  }
];
