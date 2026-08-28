import { Module } from '../trilha360';
import { TrackOverview } from '../../components/TrackPage';

/**
 * Trilha PSPO I — baseada no Guia de Consulta Rápida e no Guia Supremo de Estudo
 * da certificação Professional Scrum Product Owner I.
 */

export const PSPO1_OVERVIEW: TrackOverview = {
  title: 'Guia de estudo — certificação PSPO I',
  intro:
    'Material de consulta rigoroso para a preparação e a execução do exame Professional Scrum Product Owner I. O conteúdo se baseia estritamente no Guia do Scrum, nas Competências Profissionais do Scrum e nos conceitos de Gestão Baseada em Evidências.',
  pillars: [
    'Empirismo, os três pilares e os cinco valores do Scrum',
    'Responsabilidades e fronteiras de cada papel',
    'Os cinco eventos: propósito, timebox e quem participa',
    'Os três artefatos e seus compromissos',
    'Maximização de valor e visão de produto',
    'EBM: as quatro áreas de valor chave',
    'As armadilhas clássicas montadas pelas questões'
  ],
  audience: [
    'Quem vai prestar a certificação PSPO I',
    'Product Owners iniciantes e em transição para o papel',
    'Times que querem alinhar a prática ao Guia do Scrum'
  ],
  prerequisite:
    'A fonte absoluta da verdade é o Guia do Scrum vigente. Termos de mercado como User Stories, Story Points, Velocity, Burndown e Planning Poker não pertencem ao framework oficial — são práticas complementares opcionais.',
  completion: [
    'Explicar empirismo, os três pilares e os cinco valores',
    'Delimitar o que cada papel faz e o que não faz',
    'Aplicar o timebox e a regra de participação de cada evento',
    'Ligar cada artefato ao seu compromisso',
    'Diferenciar as quatro áreas de valor do EBM',
    'Responder às armadilhas clássicas com o fato oficial do Guia do Scrum'
  ]
};

export const PSPO1_MODULES: Module[] = [
  {
    id: 'pspo1-1',
    number: 1,
    title: 'O exame e a fonte da verdade',
    objective: 'Conhecer a mecânica da prova e o que conta como Scrum oficial.',
    topics: [
      {
        title: 'Parâmetros do exame',
        items: [
          'Duração: 60 minutos cravados, sem pausas — cerca de 45 segundos por questão',
          'Volume: 80 questões, entre múltipla escolha, resposta múltipla e verdadeiro ou falso',
          'Nota de corte: 85% — é preciso acertar ao menos 68 das 80'
        ]
      },
      {
        title: 'A fonte absoluta da verdade',
        text: 'O Guia do Scrum vigente. Terminologias de mercado como User Stories, Story Points, Velocity, Burndown Charts e Planning Poker não pertencem ao framework oficial: são práticas complementares opcionais, nunca regras obrigatórias.'
      },
      {
        title: 'Gestão do tempo',
        text: 'O fator mais crítico é o relógio, dada a densidade das questões. Ler o enunciado identificando o papel, o evento ou o artefato em jogo é o que permite responder em segundos.'
      }
    ],
    outcome: 'Entrar na prova sabendo o ritmo exigido e descartando de imediato alternativas que citam práticas não oficiais.'
  },
  {
    id: 'pspo1-2',
    number: 2,
    title: 'Empirismo, pilares e valores',
    objective: 'Dominar a base teórica sobre a qual todas as demais respostas se apoiam.',
    topics: [
      {
        title: 'As duas bases',
        items: [
          'Empirismo: o conhecimento vem da experiência e as decisões se baseiam no que é observado',
          'Pensamento enxuto (lean): foco na redução de desperdícios e na entrega do que é essencial'
        ]
      },
      {
        title: 'Os três pilares',
        items: [
          'Transparência: o processo e o trabalho devem estar visíveis para quem executa e para quem recebe — decisões baseadas em estados maquiados destroem o empirismo',
          'Inspeção: artefatos e progresso rumo aos objetivos devem ser inspecionados com frequência e diligência',
          'Adaptação: se algo se desviar dos limites aceitáveis, o processo ou o material deve ser ajustado imediatamente'
        ]
      },
      {
        title: 'Os cinco valores',
        items: [
          'Foco: no trabalho da Sprint e nos objetivos do time',
          'Respeito: entre membros, como pessoas capazes e independentes',
          'Abertura: sobre o trabalho e os desafios, com a equipe e os stakeholders',
          'Compromisso: pessoal, com os objetivos da Equipe Scrum',
          'Coragem: para fazer a coisa certa e trabalhar em problemas difíceis'
        ],
        text: 'Quando os valores são vividos, os pilares do empirismo se tornam reais.'
      }
    ],
    outcome: 'Reconhecer, em qualquer cenário, qual pilar ou valor está sendo violado.'
  },
  {
    id: 'pspo1-3',
    number: 3,
    title: 'O Product Owner: o que faz e o que não faz',
    objective: 'Delimitar com precisão a responsabilidade do papel — a fronteira mais cobrada na prova.',
    topics: [
      {
        title: 'O que o PO faz',
        items: [
          'É o único responsável por maximizar o valor do produto resultante do trabalho da Equipe Scrum',
          'Gerencia e ordena o Product Backlog, garantindo transparência dos itens',
          'Desenvolve e comunica explicitamente o Product Goal',
          'Define o "o quê" e o "porquê" do produto',
          'Representa os desejos da organização e dos stakeholders no backlog',
          'Decide se um incremento deve ou não ser lançado no mercado'
        ]
      },
      {
        title: 'O que o PO não faz',
        items: [
          'Não gerencia nem direciona as tarefas diárias dos Developers',
          'Não dita o "como" o trabalho técnico deve ser executado',
          'Não estima o esforço dos itens — a estimativa é dos Developers',
          'Não aceita formalmente item a item como um gate de aprovação'
        ]
      },
      {
        title: 'Uma pessoa, não um comitê',
        text: 'O Product Owner é uma pessoa física única. Suas decisões podem ser influenciadas por comitês e stakeholders, mas o backlog final é decisão dele.'
      }
    ],
    outcome: 'Distinguir a autoridade do PO das decisões que pertencem aos Developers.'
  },
  {
    id: 'pspo1-4',
    number: 4,
    title: 'Developers e Scrum Master',
    objective: 'Fechar as fronteiras dos outros dois papéis e o caráter autogerenciável do time.',
    topics: [
      {
        title: 'A Equipe Scrum',
        text: 'É autogerenciável — decide internamente quem faz, como e quando — e interfuncional, reunindo todas as habilidades necessárias para entregar valor a cada Sprint. Não há hierarquias, subequipes nem títulos internos.'
      },
      {
        title: 'Developers: o que fazem',
        items: [
          'São comprometidos em criar qualquer aspecto de um incremento utilizável a cada Sprint',
          'Criam o plano da Sprint: o Sprint Backlog',
          'Detêm o controle total sobre tamanho e esforço dos itens — a estimativa é deles',
          'Adaptam o plano diariamente na Daily Scrum rumo ao Sprint Goal',
          'Seguem e mantêm a Definition of Done'
        ]
      },
      {
        title: 'Developers: o que não fazem',
        items: [
          'Não esperam que o PO atribua tarefas ou diga como trabalhar',
          'Não entregam trabalho que não cumpra a Definition of Done',
          'Não mudam o Sprint Goal arbitrariamente',
          'Não têm divisões funcionais internas — não existe "testador" separado do "programador"'
        ]
      },
      {
        title: 'Scrum Master: líder que serve',
        items: [
          'Responsável por estabelecer o Scrum conforme o Guia',
          'Ajuda time e organização a focar em eficácia e melhoria contínua',
          'Remove impedimentos que travam o progresso',
          'Garante que os eventos ocorram e sejam produtivos dentro do timebox'
        ]
      },
      {
        title: 'Scrum Master: o que não é',
        items: [
          'Não é gerente de projetos tradicional nem chefe da equipe',
          'Não cobra status na Daily Scrum — a Daily é dos e para os Developers',
          'Não atualiza o Product Backlog no lugar do PO',
          'Não gerencia escopo ou prioridades do produto'
        ]
      },
      {
        title: 'Conflitos técnicos',
        text: 'Atritos sobre arquitetura ou engenharia são resolvidos pelos próprios Developers. Nem o PO nem o SM devem ditar soluções técnicas.'
      }
    ],
    outcome: 'Responder cenários de invasão de papel identificando quem tem autoridade sobre o quê.'
  },
  {
    id: 'pspo1-5',
    number: 5,
    title: 'Os cinco eventos e seus timeboxes',
    objective: 'Fixar propósito e duração máxima de cada evento, para Sprints de um mês.',
    topics: [
      {
        title: 'Sprint — o contêiner',
        text: 'Até 1 mês. Contém todos os outros eventos e mantém consistência e foco. Uma nova Sprint começa imediatamente após a anterior terminar.'
      },
      {
        title: 'Sprint Planning — 8 horas',
        items: [
          '1) Por que esta Sprint é valiosa? — define o Sprint Goal',
          '2) O que pode ser feito nesta Sprint?',
          '3) Como o trabalho escolhido será realizado?'
        ]
      },
      {
        title: 'Daily Scrum — 15 minutos',
        text: 'Timebox estrito. Inspeciona o progresso rumo ao Sprint Goal e adapta o Sprint Backlog, criando um plano claro para as próximas 24 horas. Realizada no mesmo local e horário.'
      },
      {
        title: 'Sprint Review — 4 horas',
        text: 'Inspeciona o resultado da Sprint — o incremento — e determina adaptações futuras no Product Backlog. É uma sessão de trabalho colaborativa, nunca apresentação de slides ou cobrança de status.'
      },
      {
        title: 'Sprint Retrospective — 3 horas',
        text: 'Inspeciona a Sprint quanto a indivíduos, interações, processos, ferramentas e Definição de Pronto, planejando melhorias de qualidade e eficácia para a próxima Sprint.'
      },
      {
        title: 'Regra geral',
        text: 'Os timeboxes valem para Sprints de um mês; para Sprints menores, os eventos costumam ser mais curtos. Todos os eventos servem estritamente para habilitar inspeção e adaptação.'
      }
    ],
    outcome: 'Associar cada evento ao seu propósito e timebox sem confundir um com o outro.'
  },
  {
    id: 'pspo1-6',
    number: 6,
    title: 'Quem participa de cada evento',
    objective: 'Saber quem deve, quem pode e quem não pode estar em cada evento.',
    topics: [
      {
        title: 'Sprint Planning',
        text: 'Participação obrigatória de toda a Equipe Scrum: PO, Scrum Master e Developers. Stakeholders ficam fora, salvo convite pontual para dar insumos.'
      },
      {
        title: 'Daily Scrum',
        text: 'Exclusiva dos Developers. O PO e o SM só participam se estiverem ativamente executando itens técnicos da Sprint como Developers. Stakeholders nunca entram — e, se PO ou SM estiverem presentes como ouvintes, não podem falar nem interferir.'
      },
      {
        title: 'Sprint Review',
        text: 'Toda a Equipe Scrum reúne-se com as partes interessadas convidadas pelo PO. É o evento-chave para o feedback dos stakeholders: nenhum deles está proibido aqui.'
      },
      {
        title: 'Sprint Retrospective',
        text: 'Participação obrigatória de toda a Equipe Scrum. Stakeholders externos estão estritamente proibidos, para preservar a segurança psicológica do time.'
      }
    ],
    outcome: 'Responder de imediato às questões de presença, que são frequentes e valem pontos fáceis.'
  },
  {
    id: 'pspo1-7',
    number: 7,
    title: 'Artefatos e compromissos',
    objective: 'Ligar cada artefato ao seu compromisso — a estrutura que garante transparência e foco.',
    topics: [
      {
        title: 'Product Backlog → Product Goal',
        text: 'Lista ordenada, viva e dinâmica de tudo o que é conhecido como necessário para o produto; é a única fonte de trabalho da equipe. Seu compromisso é o Product Goal, que descreve um estado futuro do produto como alvo de longo prazo. É preciso atingir ou abandonar uma meta antes de começar a próxima.'
      },
      {
        title: 'Sprint Backlog → Sprint Goal',
        text: 'Composto pelo objetivo da Sprint (porquê), pelos itens selecionados (o quê) e pelo plano de entrega (como). É de propriedade exclusiva dos Developers. Seu compromisso é o Sprint Goal, a meta única definida no planejamento, que não deve ser alterada se isso invalidar o propósito da Sprint.'
      },
      {
        title: 'Incremento → Definition of Done',
        text: 'Passo concreto em direção ao Product Goal, cumulativo em relação aos anteriores e totalmente utilizável. Vários incrementos podem ser criados e entregues em uma única Sprint. Seu compromisso é a Definition of Done.'
      },
      {
        title: 'O Product Backlog é vivo',
        text: 'Ele não fica trancado após o Sprint Planning: muda e evolui continuamente conforme o negócio muda. O que não deve mudar sem alinhamento drástico é o Sprint Backlog.'
      }
    ],
    outcome: 'Responder qualquer questão que troque artefato por compromisso ou por evento.'
  },
  {
    id: 'pspo1-8',
    number: 8,
    title: 'Definition of Done e o Incremento',
    objective: 'Aplicar a regra de qualidade que separa o que é incremento do que não é.',
    topics: [
      {
        title: 'O que é a Definition of Done',
        text: 'A descrição formal do estado do incremento quando ele atende às medidas de qualidade exigidas pelo produto.'
      },
      {
        title: 'Quando um item não atende à DoD',
        items: [
          'Ele nunca pode ser considerado um incremento',
          'Não pode ser apresentado na Sprint Review',
          'Retorna integralmente ao Product Backlog para reavaliação e reordenação pelo PO'
        ]
      },
      {
        title: 'Quem define a DoD',
        text: 'Se a organização já tem um padrão de qualidade institucional, a Equipe Scrum é obrigada a adotá-lo como base mínima. Se não houver, os Developers devem formular uma DoD adequada ao produto.'
      },
      {
        title: 'Quando o incremento pode ser lançado',
        text: 'A qualquer momento da Sprint, assim que cumprir a Definition of Done. A Sprint Review serve para inspecionar e adaptar, nunca como barreira burocrática de liberação.'
      }
    ],
    outcome: 'Decidir corretamente o destino de um item incompleto e o momento de liberar um incremento.'
  },
  {
    id: 'pspo1-9',
    number: 9,
    title: 'Maximização de valor e visão de produto',
    objective: 'Entender como o PO gerencia valor comercial de forma empírica.',
    topics: [
      {
        title: 'Gestão do retorno',
        text: 'O PO gerencia o retorno sobre o investimento garantindo que o time gaste energia primeiro no que traz mais impacto.'
      },
      {
        title: 'Visão do Produto',
        items: [
          'Descreve claramente o propósito do produto',
          'Expressa o valor que ele vai entregar',
          'Deixa explícito quem se beneficiará dele',
          'Alinha-se de forma explícita à estratégia de negócios da organização'
        ]
      },
      {
        title: 'Alinhamento entre visão e valor',
        text: 'É um processo iterativo conduzido pelo refinamento contínuo do backlog: quebrar itens grandes em fatias menores e estimá-los.'
      }
    ],
    outcome: 'Avaliar se uma visão de produto está completa e ligada à estratégia do negócio.'
  },
  {
    id: 'pspo1-10',
    number: 10,
    title: 'EBM: as quatro áreas de valor',
    objective: 'Medir e gerenciar valor com dados empíricos — tema que cai massivamente na prova.',
    topics: [
      {
        title: 'Current Value (Valor Atual)',
        text: 'Mede o valor que o produto entrega a clientes, usuários e ao negócio hoje. Exemplos: satisfação do cliente, lucratividade, receita por funcionário, retenção de usuários, índice de uso.'
      },
      {
        title: 'Unrealized Value (Valor Não Realizado)',
        text: 'Mede o valor potencial futuro que poderia ser capturado se novas necessidades fossem atendidas. Exemplos: participação de mercado potencial, desejos não atendidos dos clientes. Ajuda a decidir se vale continuar investindo.'
      },
      {
        title: 'Time-to-Market (Tempo de Resposta)',
        text: 'Avalia a velocidade com que a organização entrega valor, aprende com o feedback e responde ao mercado. Exemplos: frequência de releases, cycle time, lead time.'
      },
      {
        title: 'Ability to Innovate (Capacidade de Inovar)',
        text: 'Mede a capacidade estrutural de fornecer novas soluções, indicando se problemas operacionais ou dívida técnica consomem a energia do time. Exemplos: custo com manutenção versus novos recursos, índice de defeitos em produção.'
      }
    ],
    outcome: 'Classificar corretamente uma métrica dentro da área de valor a que ela pertence.'
  },
  {
    id: 'pspo1-11',
    number: 11,
    title: 'Posturas profissionais',
    objective: 'Reconhecer as posturas que qualquer membro do time pode assumir para desenvolver a equipe.',
    topics: [
      {
        title: 'Desenvolvimento de equipes não é exclusividade do Scrum Master',
        text: 'Como o time é autogerenciável, todos apoiam a evolução mútua.'
      },
      {
        title: 'As quatro posturas',
        items: [
          'Facilitador: conduzir dinâmicas de forma neutra',
          'Coach: fazer perguntas poderosas para o time encontrar as próprias respostas',
          'Mentor: compartilhar experiência pessoal',
          'Professor: ensinar a teoria do Scrum'
        ]
      }
    ],
    outcome: 'Escolher a postura adequada ao cenário descrito na questão.'
  },
  {
    id: 'pspo1-12',
    number: 12,
    title: 'Armadilhas clássicas da prova',
    objective: 'Ter à mão a resposta oficial para os cenários polêmicos mais montados pela Scrum.org.',
    topics: [
      {
        title: 'Quem pode cancelar uma Sprint?',
        text: 'Apenas o Product Owner, e somente se o Sprint Goal se tornar obsoleto por mudança drástica de mercado ou estratégia.'
      },
      {
        title: 'Várias equipes no mesmo produto',
        text: 'Independentemente do número de equipes — 2, 5, 10 ou 15 —, existe apenas 1 Product Backlog e 1 Product Owner. O produto é único, logo a governança de valor também é.'
      },
      {
        title: 'O incremento só pode ser liberado após a Sprint Review?',
        text: 'Não. Pode ser entregue a qualquer momento da Sprint, assim que atingir a Definition of Done.'
      },
      {
        title: 'Item não "Done" no fim da Sprint',
        text: 'Não pode ser apresentado na Sprint Review e volta ao Product Backlog para ser reavaliado e reordenado pelo PO.'
      },
      {
        title: 'Quem dita a Definition of Done?',
        text: 'Se há padrão organizacional, a equipe o adota. Se não há, os Developers criam uma DoD apropriada ao produto.'
      },
      {
        title: 'O Product Backlog fica trancado após o Sprint Planning?',
        text: 'Não — ele é vivo e evolui com o negócio. O que não deve mudar sem alinhamento é o Sprint Backlog.'
      },
      {
        title: 'Quem resolve conflitos técnicos?',
        text: 'Os próprios Developers, por serem autogerenciáveis. Nem PO nem SM intervêm em decisões de engenharia.'
      }
    ],
    outcome: 'Responder com segurança aos cenários que mais derrubam candidatos.'
  }
];
