import { SimuladoQuestion } from '../trilha360';

/** Simulado de conclusão de cada módulo da trilha PSPO II: 5 questões por módulo. */
export const PSPO2_MODULE_QUIZZES: Record<string, SimuladoQuestion[]> = {
  'pspo2-1': [
    {
      id: 'pq1-1',
      statement: 'Qual é a diferença entre output e outcome?',
      options: [
        'Output é o que a equipe produz; outcome é a mudança real que isso gera',
        'Output é o resultado de negócio; outcome é a entrega técnica',
        'São sinônimos em gestão de produto',
        'Output é medido pelo cliente; outcome, pela equipe'
      ],
      answer: 0
    },
    {
      id: 'pq1-2',
      statement: 'Quando um incremento é valioso o suficiente para ser lançado?',
      options: [
        'Quando entrega um único resultado novo ou melhorado',
        'Quando entrega muitas features de uma vez',
        'Quando corrige um defeito',
        'Quando completa todos os itens obrigatórios do backlog'
      ],
      answer: 0
    },
    {
      id: 'pq1-3',
      statement: 'Qual a melhor evidência de que o produto está agregando valor?',
      options: [
        'O uso real pelo cliente: frequência, adoção e retenção',
        'A quantidade de itens obrigatórios entregues',
        'O custo do lançamento',
        'O cumprimento do cronograma'
      ],
      answer: 0
    },
    {
      id: 'pq1-4',
      statement: 'Muitos stakeholders pedem features "essenciais" e todas parecem válidas. O que fazer?',
      options: [
        'Lançar assim que for possível entregar ao menos um resultado esperado real',
        'Esperar até entregar todas as features pedidas',
        'Escolher os stakeholders mais importantes e agradá-los',
        'Adiar a decisão até a próxima reunião de portfólio'
      ],
      answer: 0
    },
    {
      id: 'pq1-5',
      statement: 'Um incremento é considerado valioso quando:',
      options: [
        'É provável que aumente a satisfação do cliente',
        'Foi entregue rapidamente',
        'Atendeu à especificação técnica',
        'Chegou na data que o PO esperava'
      ],
      answer: 0
    }
  ],

  'pspo2-2': [
    {
      id: 'pq2-1',
      statement: 'O que é a lacuna de satisfação do usuário?',
      options: [
        'A diferença entre a experiência real de uso e o resultado desejado pelo usuário',
        'A diferença entre o preço e o valor percebido',
        'A distância entre a participação de mercado atual e a meta',
        'O tempo entre o pedido do cliente e a entrega'
      ],
      answer: 0
    },
    {
      id: 'pq2-2',
      statement: 'A lacuna de satisfação tem relação com o tamanho do mercado?',
      options: [
        'Não — é puramente a distância entre expectativa e experiência',
        'Sim — quanto maior o mercado, maior a lacuna',
        'Sim — mercados pequenos não têm lacuna',
        'Só quando há concorrentes diretos'
      ],
      answer: 0
    },
    {
      id: 'pq2-3',
      statement: 'Uma feature considerada importante quase não é usada. Qual a conduta correta?',
      options: [
        'Investigar com usuários, experimentos e análise antes de decidir',
        'Remover a funcionalidade imediatamente',
        'Ignorar o dado, já que a feature é estratégica',
        'Investir mais na divulgação da feature'
      ],
      answer: 0
    },
    {
      id: 'pq2-4',
      statement: 'Que combinação de evidências a prova valoriza?',
      options: [
        'Quantitativa, qualitativa e validação por experimentos',
        'Apenas dados de uso',
        'Apenas entrevistas com usuários',
        'Apenas a opinião do time de produto'
      ],
      answer: 0
    },
    {
      id: 'pq2-5',
      statement: 'Dados de uso surpreendentes devem ser tratados como:',
      options: [
        'Ponto de partida para investigação',
        'Sentença final sobre a funcionalidade',
        'Erro de instrumentação a ser ignorado',
        'Justificativa para aumentar o escopo'
      ],
      answer: 0
    }
  ],

  'pspo2-3': [
    {
      id: 'pq3-1',
      statement: 'Quais são as quatro áreas de valor do EBM?',
      options: [
        'Current Value, Unrealized Value, Time-to-Market e Ability to Innovate',
        'Receita, custo, prazo e escopo',
        'Visão, estratégia, backlog e incremento',
        'Satisfação, retenção, adoção e churn'
      ],
      answer: 0
    },
    {
      id: 'pq3-2',
      statement: 'Quando faz sentido reduzir o investimento em um produto?',
      options: [
        'Quando o Valor Não Realizado é muito pequeno',
        'Quando o Valor Atual é alto',
        'Quando o Time-to-Market é curto',
        'Quando a equipe está com alta velocidade'
      ],
      answer: 0
    },
    {
      id: 'pq3-3',
      statement: 'Produto com alto Valor Atual e alto Valor Não Realizado: qual a primeira ação?',
      options: [
        'Melhorar o marketing para atrair mais clientes',
        'Reduzir o preço do produto',
        'Adicionar mais funcionalidades',
        'Relançar o mesmo produto com outro nome'
      ],
      answer: 0
    },
    {
      id: 'pq3-4',
      statement: 'Um concorrente menor lança mais rápido e ganha mercado. Onde atuar?',
      options: [
        'Em Time-to-Market e Ability to Innovate',
        'Na redução de preço',
        'Na entrada em novos mercados',
        'No acúmulo de novas features'
      ],
      answer: 0
    },
    {
      id: 'pq3-5',
      statement: 'Um stakeholder influente não acredita nos dados de uso. O que fazer?',
      options: [
        'Continuar medindo e publicando com transparência, usando os dados nas decisões',
        'Esconder os dados para evitar conflito',
        'Descartar os dados para agradá-lo',
        'Trocar a métrica por outra que confirme a opinião dele'
      ],
      answer: 0
    }
  ],

  'pspo2-4': [
    {
      id: 'pq4-1',
      statement: 'Qual métrica NÃO interessa a um investidor para avaliar valor de negócio?',
      options: [
        'A velocidade dos developers',
        'Receita por funcionário',
        'Participação de mercado',
        'Rentabilidade do produto'
      ],
      answer: 0
    },
    {
      id: 'pq4-2',
      statement: 'Quais fontes devem ancorar uma decisão de preço?',
      options: [
        'Satisfação do cliente, preços da concorrência, participação de mercado e necessidades não atendidas',
        'Metas de lucro e estratégia de canal',
        'Velocidade da equipe e custo do sprint',
        'Cronograma de lançamento e escopo previsto'
      ],
      answer: 0
    },
    {
      id: 'pq4-3',
      statement: 'Vendas quer baixar o preço e o financeiro teme a rentabilidade. Qual o caminho?',
      options: [
        'Buscar evidência externa de mercado e cliente',
        'Atender à área com mais poder na empresa',
        'Dividir a diferença entre as duas posições',
        'Manter o preço sem análise'
      ],
      answer: 0
    },
    {
      id: 'pq4-4',
      statement: 'Produtividade da equipe equivale a valor gerado para o negócio?',
      options: [
        'Não — é um erro comum confundir os dois',
        'Sim — mais entregas significam mais valor',
        'Sim, desde que a velocidade seja estável',
        'Somente em produtos maduros'
      ],
      answer: 0
    },
    {
      id: 'pq4-5',
      statement: 'Quando a questão fala na perspectiva de acionistas, pense em:',
      options: [
        'Métricas de mercado e financeiras',
        'Métricas de entrega da Equipe Scrum',
        'Indicadores de processo interno',
        'Satisfação do time de desenvolvimento'
      ],
      answer: 0
    }
  ],

  'pspo2-5': [
    {
      id: 'pq5-1',
      statement: 'Qual afirmação sobre o Product Backlog é verdadeira?',
      options: [
        'É emergente e evolui continuamente',
        'É congelado após a fase de planejamento',
        'É substituído por um novo a cada release',
        'É mantido estável por um documento de requisitos'
      ],
      answer: 0
    },
    {
      id: 'pq5-2',
      statement: 'Quantos Product Backlogs existem?',
      options: [
        'Um por produto',
        'Um por equipe Scrum',
        'Um por programa',
        'Um por portfólio'
      ],
      answer: 0
    },
    {
      id: 'pq5-3',
      statement: 'O que faz parte de gerenciar o Product Backlog?',
      options: [
        'Ordenar itens, dividir os grandes, reduzir dependências e revisar com stakeholders',
        'Estimar em detalhe o esforço de cada item',
        'Aprovar formalmente cada entrega',
        'Definir o Sprint Backlog'
      ],
      answer: 0
    },
    {
      id: 'pq5-4',
      statement: 'Quem pode adicionar itens ao Product Backlog?',
      options: [
        'Qualquer pessoa pode sugerir; a ordenação é responsabilidade do PO',
        'Apenas o Product Owner',
        'Apenas os Developers',
        'Apenas o Scrum Master'
      ],
      answer: 0
    },
    {
      id: 'pq5-5',
      statement: 'Todo item do Product Backlog precisa ser uma história de usuário?',
      options: [
        'Não — é apenas um formato possível',
        'Sim, é exigência do Scrum',
        'Sim, quando há mais de uma equipe',
        'Somente os itens da próxima Sprint'
      ],
      answer: 0
    }
  ],

  'pspo2-6': [
    {
      id: 'pq6-1',
      statement: 'O que é o Product Goal?',
      options: [
        'O elemento do Product Backlog que conecta as Sprints a um propósito de longo prazo',
        'A meta de uma Sprint específica',
        'A previsão de conclusão do backlog',
        'O documento de visão da empresa'
      ],
      answer: 0
    },
    {
      id: 'pq6-2',
      statement: 'O Product Goal é opcional no Scrum?',
      options: ['Não — faz parte do Product Backlog', 'Sim', 'Só em produtos grandes', 'Só quando há várias equipes'],
      answer: 0
    },
    {
      id: 'pq6-3',
      statement: 'Quem é responsável por manter e comunicar o Product Goal?',
      options: ['O Product Owner', 'Os Developers', 'O patrocinador executivo', 'As partes interessadas'],
      answer: 0
    },
    {
      id: 'pq6-4',
      statement: 'O Product Goal serve para prever quando o backlog será concluído?',
      options: [
        'Não — isso é forecasting, um conceito diferente',
        'Sim, é sua função principal',
        'Sim, quando combinado com a velocidade',
        'Somente no planejamento de release'
      ],
      answer: 0
    },
    {
      id: 'pq6-5',
      statement: 'Qual benefício o Product Goal traz à Sprint Review?',
      options: [
        'Facilita a inspeção do progresso incremental',
        'Substitui o Sprint Goal',
        'Elimina a necessidade de demonstração',
        'Define o timebox do evento'
      ],
      answer: 0
    }
  ],

  'pspo2-7': [
    {
      id: 'pq7-1',
      statement: 'O que a Sprint Planning produz e dá direção à Sprint?',
      options: ['O Sprint Goal', 'O Product Goal', 'O burndown', 'A Definição de Pronto'],
      answer: 0
    },
    {
      id: 'pq7-2',
      statement: 'O Sprint Backlog representa:',
      options: [
        'A previsão do trabalho que os Developers acreditam concluir na Sprint',
        'Um contrato rígido de entrega',
        'Uma ferramenta gerencial de controle',
        'O comunicado de versões futuras aos stakeholders'
      ],
      answer: 0
    },
    {
      id: 'pq7-3',
      statement: 'Qual é o foco da pergunta central da Daily Scrum?',
      options: [
        'O trabalho que será feito hoje para atingir o Sprint Goal',
        'O relatório do que já foi feito ontem',
        'O status para os stakeholders',
        'A revisão do Product Backlog'
      ],
      answer: 0
    },
    {
      id: 'pq7-4',
      statement: 'Qual o timebox da Sprint Review para uma Sprint de 4 semanas?',
      options: ['Até 4 horas', '15 minutos', '8 horas', 'O tempo que for necessário'],
      answer: 0
    },
    {
      id: 'pq7-5',
      statement: 'O que um gráfico de burndown rastreia?',
      options: [
        'O trabalho restante ao longo do tempo',
        'O custo acumulado do projeto',
        'A produtividade individual',
        'O valor de negócio entregue'
      ],
      answer: 0
    }
  ],

  'pspo2-8': [
    {
      id: 'pq8-1',
      statement: 'Itens que não atendem à Definição de Pronto:',
      options: [
        'Voltam ao Product Backlog',
        'Permanecem no Sprint Backlog como parciais',
        'São entregues com ressalva',
        'São aprovados pelo PO como exceção'
      ],
      answer: 0
    },
    {
      id: 'pq8-2',
      statement: 'Um incremento que não atinge a Definição de Pronto pode ser lançado?',
      options: [
        'Não, em nenhuma hipótese',
        'Sim, se o cliente aceitar',
        'Sim, se o PO aprovar',
        'Sim, se o prazo estiver apertado'
      ],
      answer: 0
    },
    {
      id: 'pq8-3',
      statement: 'Qual atividade o Product Owner nunca deve realizar?',
      options: [
        'Aceitar formalmente o trabalho da Sprint, como um gate de aprovação',
        'Ordenar o Product Backlog',
        'Conversar com stakeholders',
        'Comunicar o Product Goal'
      ],
      answer: 0
    },
    {
      id: 'pq8-4',
      statement: 'Como a qualidade é garantida no Scrum?',
      options: [
        'Continuamente, pela Definição de Pronto, com inspeção colaborativa na Sprint Review',
        'Por aprovação individual item a item do PO',
        'Por um gerente de projeto que valida o plano',
        'Por auditoria externa ao final do release'
      ],
      answer: 0
    },
    {
      id: 'pq8-5',
      statement: 'O que acontece com a transparência quando a Definição de Pronto não é atendida?',
      options: [
        'A indicação de progresso no Product Backlog deixa de ser transparente',
        'Nada muda, pois o item continua listado',
        'A transparência aumenta, pois o problema fica visível',
        'A Sprint é automaticamente cancelada'
      ],
      answer: 0
    }
  ],

  'pspo2-9': [
    {
      id: 'pq9-1',
      statement: 'Qual destas é foco real do trabalho do Product Owner?',
      options: [
        'Ordenar o Product Backlog e comunicar o Product Goal',
        'Escrever pessoalmente todas as histórias de usuário',
        'Estar sempre fisicamente disponível para os Developers',
        'Aceitar formalmente cada item entregue'
      ],
      answer: 0
    },
    {
      id: 'pq9-2',
      statement: 'PO sobrecarregado em cenário com múltiplas equipes: qual a melhor estratégia?',
      options: [
        'Comunicar um objetivo claro e delegar atividades, mantendo um PO e um backlog',
        'Criar sub-Product Owners por equipe',
        'Adicionar POs de componente',
        'Transferir a coordenação para um PMO'
      ],
      answer: 0
    },
    {
      id: 'pq9-3',
      statement: 'Quem pode interagir com as partes interessadas?',
      options: [
        'Qualquer membro da Equipe Scrum',
        'Apenas o Product Owner',
        'Apenas o Scrum Master',
        'Apenas o PO e o patrocinador'
      ],
      answer: 0
    },
    {
      id: 'pq9-4',
      statement: 'A conversa direta entre Developers e stakeholders é:',
      options: [
        'Desejável e normal',
        'Proibida pelo Scrum',
        'Permitida só com autorização do PO',
        'Restrita à Sprint Review'
      ],
      answer: 0
    },
    {
      id: 'pq9-5',
      statement: 'Escrever todas as histórias de usuário é responsabilidade exclusiva do PO?',
      options: [
        'Não — é tarefa tática que pode ser feita com os Developers',
        'Sim, é o foco central do papel',
        'Sim, quando há mais de uma equipe',
        'Sim, para garantir a qualidade do backlog'
      ],
      answer: 0
    }
  ],

  'pspo2-10': [
    {
      id: 'pq10-1',
      statement: 'Muita gente quer participar das decisões e isso trava o produto. O que fazer?',
      options: [
        'Criar um quadro de delegação, mostrar dados do impacto e evoluir a organização com o Scrum Master',
        'Deixar todos decidirem, para manter o engajamento',
        'Assumir uma postura autocrática e decidir sozinho',
        'Levar todas as decisões para votação'
      ],
      answer: 0
    },
    {
      id: 'pq10-2',
      statement: 'Um stakeholder influente discorda dos dados e ameaça perder um cliente. Como agir?',
      options: [
        'Reconhecer a opinião, não ceder por pressão e validar com um experimento pequeno junto dele',
        'Adicionar a funcionalidade para agradá-lo',
        'Recusar sem diálogo, já que os dados são claros',
        'Resolver por votação entre as opções não testadas'
      ],
      answer: 0
    },
    {
      id: 'pq10-3',
      statement: 'Para que serve um quadro de delegação?',
      options: [
        'Deixar claro quem decide o quê',
        'Registrar as decisões já tomadas',
        'Substituir o Product Backlog',
        'Definir o timebox das reuniões'
      ],
      answer: 0
    },
    {
      id: 'pq10-4',
      statement: 'Como a evidência ajuda quando as decisões estão lentas?',
      options: [
        'Demonstrando quanto tempo elas levam e o impacto na entrega de valor',
        'Provando que o PO está certo',
        'Justificando a exclusão dos stakeholders',
        'Substituindo a conversa por relatórios'
      ],
      answer: 0
    },
    {
      id: 'pq10-5',
      statement: 'O que a prova valoriza em decisões de produto?',
      options: [
        'Colaboração ancorada em evidência e experimentação',
        'Decisão por hierarquia',
        'Decisão por popularidade',
        'Decisão por pressão do cliente maior'
      ],
      answer: 0
    }
  ],

  'pspo2-11': [
    {
      id: 'pq11-1',
      statement: 'O que uma boa Visão e Estratégia de Produto cobre?',
      options: [
        'O que é valor e como medi-lo, quem usa, comparação com concorrentes e como o produto será usado',
        'Apenas o roadmap de doze meses',
        'Apenas as personas do produto',
        'Apenas as metas financeiras do ano'
      ],
      answer: 0
    },
    {
      id: 'pq11-2',
      statement: 'Para que servem personas?',
      options: [
        'Entender necessidades, formular hipóteses de valor, avaliar mercado e descobrir gatilhos de adoção',
        'Documentar os requisitos funcionais',
        'Substituir a pesquisa com usuários reais',
        'Definir a ordem do Product Backlog'
      ],
      answer: 0
    },
    {
      id: 'pq11-3',
      statement: 'O que uma boa Visão de Produto expressa?',
      options: [
        'O valor que o produto deve entregar e a quem',
        'A arquitetura técnica escolhida',
        'O cronograma de releases',
        'O orçamento aprovado'
      ],
      answer: 0
    },
    {
      id: 'pq11-4',
      statement: 'Como visão e valor se alinham ao longo do tempo?',
      options: [
        'De forma iterativa e incremental, pelo refinamento contínuo do backlog',
        'Em um documento aprovado no início do projeto',
        'Na reunião anual de planejamento',
        'Quando o produto atinge o ponto de equilíbrio'
      ],
      answer: 0
    },
    {
      id: 'pq11-5',
      statement: 'O que o valor do produto impulsiona?',
      options: [
        'Satisfação e fidelização do cliente, reputação da marca e longevidade do negócio',
        'A velocidade da equipe',
        'O tamanho do backlog',
        'A quantidade de releases por ano'
      ],
      answer: 0
    }
  ],

  'pspo2-12': [
    {
      id: 'pq12-1',
      statement: 'Produtos altamente interdependentes: qual a resposta esperada?',
      options: [
        'Desenvolvê-los o mais independentes possível, com coordenação entre eles',
        'Criar um plano de desenvolvimento centralizado',
        'Nomear um líder de projeto único para supervisionar tudo',
        'Deixar um PMO gerenciar as dependências'
      ],
      answer: 0
    },
    {
      id: 'pq12-2',
      statement: 'Qual o princípio geral do Scrum sobre dependências?',
      options: [
        'Reduzi-las na origem, em vez de gerenciá-las com mais burocracia',
        'Centralizar o controle em uma única área',
        'Documentá-las detalhadamente antes de começar',
        'Aceitá-las como parte natural do trabalho'
      ],
      answer: 0
    },
    {
      id: 'pq12-3',
      statement: 'Quais são vantagens de lançar com frequência?',
      options: [
        'Inspecionar e adaptar mais vezes, entender melhor o cliente e correr menos risco',
        'Reduzir o custo de infraestrutura',
        'Diminuir o número de reuniões',
        'Aumentar a velocidade da equipe'
      ],
      answer: 0
    },
    {
      id: 'pq12-4',
      statement: 'Quanto maior a incerteza sobre as necessidades do cliente:',
      options: [
        'Menor deve ser o tamanho de cada liberação',
        'Maior deve ser o escopo de cada release',
        'Mais tempo deve ser investido em especificação',
        'Menos experimentos devem ser feitos'
      ],
      answer: 0
    },
    {
      id: 'pq12-5',
      statement: 'Qual fio condutor resume o tratamento da qualidade?',
      options: [
        'Qualidade é binária e coletiva',
        'Qualidade é negociável conforme o prazo',
        'Qualidade é responsabilidade do PO',
        'Qualidade é medida pela velocidade'
      ],
      answer: 0
    }
  ]
};

const first = (moduleId: string, count: number) => PSPO2_MODULE_QUIZZES[moduleId].slice(0, count);

/**
 * Simulado final: 50 questões — 3 de cada módulo (36) e 14 cenários no estilo
 * da avaliação aberta de EBM da Scrum.org.
 */
export const PSPO2_SIMULADO: SimuladoQuestion[] = [
  ...first('pspo2-1', 3),
  ...first('pspo2-2', 3),
  ...first('pspo2-3', 3),
  ...first('pspo2-4', 3),
  ...first('pspo2-5', 3),
  ...first('pspo2-6', 3),
  ...first('pspo2-7', 3),
  ...first('pspo2-8', 3),
  ...first('pspo2-9', 3),
  ...first('pspo2-10', 3),
  ...first('pspo2-11', 3),
  ...first('pspo2-12', 3),
  {
    id: 'ps-37',
    statement: 'O principal benefício de seguir uma abordagem ágil é entregar soluções mais rapidamente.',
    options: [
      'Falso — a vantagem é analisar o valor percebido e adaptar-se com base no feedback',
      'Verdadeiro — velocidade é o principal ganho',
      'Verdadeiro — desde que a equipe seja estável',
      'Falso — o principal ganho é reduzir custos'
    ],
    answer: 0
  },
  {
    id: 'ps-38',
    statement:
      'O CEO quer resultados mais rápidos. Uns querem contratar, outros querem automação. Qual a melhor forma de entender o problema?',
    options: [
      'Criar um Mapa do Fluxo de Valor para entender o processo atual e seus gargalos',
      'Fazer uma pesquisa de satisfação do cliente',
      'Analisar as taxas de utilização dos funcionários',
      'Contratar mais pessoas e melhorar a automação ao mesmo tempo'
    ],
    answer: 0
  },
  {
    id: 'ps-39',
    statement:
      'Várias equipes ágeis em produtos diferentes devem criar um painel comum de status para a gerência acompanhar.',
    options: [
      'Falso — o melhor é compartilhar metas e o que foi conquistado em relação a elas',
      'Verdadeiro — padroniza o acompanhamento',
      'Verdadeiro — facilita a comparação entre equipes',
      'Falso — cada equipe deve reportar isoladamente'
    ],
    answer: 0
  },
  {
    id: 'ps-40',
    statement:
      'Você quer melhorar sua capacidade de resposta a novas oportunidades. Qual medida NÃO ajuda nesse entendimento?',
    options: ['Receita por funcionário', 'Tempo de ciclo', 'Dívida técnica', 'Tempo de lançamento'],
    answer: 0
  },
  {
    id: 'ps-41',
    statement:
      'Manter muitas variações do mesmo produto não deixa tempo para melhorá-lo. Qual medida examinar?',
    options: [
      'Taxa de inovação',
      'Velocidade da equipe',
      'Tempo de ciclo',
      'Receita por funcionário'
    ],
    answer: 0
  },
  {
    id: 'ps-42',
    statement: 'Um benefício de usar uma abordagem ágil é gerenciar o risco de negócio de forma mais eficaz.',
    options: [
      'Verdadeiro — riscos não gerenciados reduzem a capacidade de entregar valor no longo prazo',
      'Falso — risco é responsabilidade do PMO',
      'Falso — agilidade trata apenas de velocidade',
      'Verdadeiro — porque elimina a necessidade de planejamento'
    ],
    answer: 0
  },
  {
    id: 'ps-43',
    statement:
      'Produto A: alto Valor Atual e baixo Valor Não Realizado. Produto B: baixo Valor Atual e alto Valor Não Realizado. Onde investir?',
    options: [
      'No Produto B, que tem maior potencial futuro',
      'No Produto A, que sustenta a receita atual',
      'Dividir proporcionalmente à receita de cada um',
      'Dividir igualmente entre os dois'
    ],
    answer: 0
  },
  {
    id: 'ps-44',
    statement:
      'Você lança todo mês, melhor que os concorrentes, mas entrega só pequenas correções e a satisfação segue baixa. Em quais áreas focar?',
    options: [
      'Valor Não Realizado e Capacidade de Inovar',
      'Valor Atual e Tempo de Lançamento',
      'Tempo de Lançamento e Capacidade de Inovar',
      'Valor Atual e Valor Não Realizado'
    ],
    answer: 0
  },
  {
    id: 'ps-45',
    statement: 'Um benefício da abordagem ágil é minimizar o trabalho que não agrega valor.',
    options: [
      'Verdadeiro — esse trabalho reduz a capacidade de entregar resultados valiosos',
      'Falso — todo trabalho planejado agrega valor',
      'Falso — isso é objetivo do Lean, não do ágil',
      'Verdadeiro — porque elimina a documentação'
    ],
    answer: 0
  },
  {
    id: 'ps-46',
    statement:
      'As vendas estão atrás dos concorrentes e você não sabe por quê. Quais áreas de valor dão a melhor visão?',
    options: [
      'Valor Atual e Valor Não Realizado',
      'Tempo de Lançamento e Capacidade de Inovar',
      'Valor Atual e Tempo de Lançamento',
      'Capacidade de Inovar e Valor Não Realizado'
    ],
    answer: 0
  },
  {
    id: 'ps-47',
    statement: 'O lançamento de um produto é bem-sucedido se atender a todos os requisitos internos das partes interessadas.',
    options: [
      'Falso — sucesso se mede pelo resultado percebido pelo cliente',
      'Verdadeiro — os requisitos representam o negócio',
      'Verdadeiro, se aprovados pelo comitê',
      'Falso — só importa a data de entrega'
    ],
    answer: 0
  },
  {
    id: 'ps-48',
    statement: 'Qual dessas situações indica que a dívida técnica está limitando a capacidade de inovar?',
    options: [
      'A maior parte do tempo é gasta mantendo versões diferentes do mesmo produto',
      'A equipe entrega menos pontos por sprint',
      'O time-to-market caiu no último trimestre',
      'A receita por funcionário aumentou'
    ],
    answer: 0
  },
  {
    id: 'ps-49',
    statement: 'Como avaliar o desempenho de uma equipe ágil de forma consistente com o EBM?',
    options: [
      'Pelo progresso em relação às metas',
      'Pela quantidade de trabalho realizado',
      'Pelo cumprimento do cronograma',
      'Pela utilização das pessoas'
    ],
    answer: 0
  },
  {
    id: 'ps-50',
    statement: 'Qual princípio resume a lógica de decisão cobrada no PSPO II?',
    options: [
      'Diagnostique antes de agir, com evidência, e prefira resultado a volume entregue',
      'Entregue o máximo possível em cada Sprint',
      'Priorize sempre o pedido do stakeholder mais influente',
      'Garanta que o plano inicial seja cumprido'
    ],
    answer: 0
  }
];
