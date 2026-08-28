import { SimuladoQuestion } from '../trilha360';

/** Simulado de conclusão de cada fase da trilha PSM I: 5 questões por módulo. */
export const PSM1_MODULE_QUIZZES: Record<string, SimuladoQuestion[]> = {
  'psm1-1': [
    {
      id: 'sq1-1',
      statement: 'O que é o Scrum, conforme o Guia?',
      options: [
        'Um framework leve para gerar valor por meio de soluções adaptativas para problemas complexos',
        'Uma metodologia de gestão de projetos',
        'Um processo de desenvolvimento em fases',
        'Um conjunto de ferramentas de planejamento'
      ],
      answer: 0
    },
    {
      id: 'sq1-2',
      statement: 'Qual a nota mínima de aprovação no PSM I?',
      options: ['85%', '70%', '75%', '90%'],
      answer: 0
    },
    {
      id: 'sq1-3',
      statement: 'Quantas questões e em quanto tempo?',
      options: ['80 questões em 60 minutos', '60 questões em 90 minutos', '100 questões em 120 minutos', '50 questões em 45 minutos'],
      answer: 0
    },
    {
      id: 'sq1-4',
      statement: 'Qual é a base oficial do exame?',
      options: ['O Scrum Guide 2020', 'O Manifesto Ágil', 'O guia SAFe', 'O PMBOK'],
      answer: 0
    },
    {
      id: 'sq1-5',
      statement: 'Qual destes compõe a mentalidade ágil apresentada na trilha?',
      options: ['Autogestão', 'Comando e controle', 'Especialização isolada', 'Planejamento fixo de longo prazo'],
      answer: 0
    }
  ],

  'psm1-2': [
    {
      id: 'sq2-1',
      statement: 'Qual o papel do repositório oficial na trilha?',
      options: [
        'Ser o ambiente central com materiais, simulados e histórico',
        'Hospedar o código do produto',
        'Substituir o Scrum Guide',
        'Registrar as notas dos simulados oficiais'
      ],
      answer: 0
    },
    {
      id: 'sq2-2',
      statement: 'Por que acompanhar o histórico de atualização dos materiais?',
      options: [
        'Para não estudar por versões desatualizadas',
        'Para contar quantos arquivos existem',
        'Para saber quem escreveu cada guia',
        'Porque a prova cobra o histórico'
      ],
      answer: 0
    },
    {
      id: 'sq2-3',
      statement: 'O que o participante deve saber fazer no repositório?',
      options: [
        'Acessar, navegar, localizar arquivos e identificar versões',
        'Criar branches e abrir pull requests',
        'Configurar integração contínua',
        'Publicar releases'
      ],
      answer: 0
    },
    {
      id: 'sq2-4',
      statement: 'O que NÃO faz parte do conteúdo do repositório da trilha?',
      options: [
        'O código-fonte do produto da empresa',
        'Guias de estudo',
        'Simulados',
        'Links oficiais'
      ],
      answer: 0
    },
    {
      id: 'sq2-5',
      statement: 'Qual o benefício de centralizar os estudos?',
      options: [
        'Padronização e clareza do material',
        'Reduzir o tempo de prova',
        'Dispensar a leitura do Scrum Guide',
        'Aumentar a nota automaticamente'
      ],
      answer: 0
    }
  ],

  'psm1-3': [
    {
      id: 'sq3-1',
      statement: 'Quais são os três pilares do empirismo?',
      options: [
        'Transparência, Inspeção e Adaptação',
        'Foco, Coragem e Respeito',
        'Planejar, Fazer e Revisar',
        'Visão, Valor e Velocidade'
      ],
      answer: 0
    },
    {
      id: 'sq3-2',
      statement: 'Segundo o Scrum Guide, o que a transparência permite?',
      options: ['A inspeção', 'A adaptação', 'A previsibilidade', 'A estimativa'],
      answer: 0
    },
    {
      id: 'sq3-3',
      statement: 'O que acontece quando não há adaptação?',
      options: [
        'A inspeção perde valor',
        'A transparência aumenta',
        'O time fica mais previsível',
        'A Sprint é cancelada'
      ],
      answer: 0
    },
    {
      id: 'sq3-4',
      statement: 'O que é empirismo?',
      options: [
        'O conhecimento vem da experiência e as decisões se baseiam no observado',
        'O plano define antecipadamente todas as etapas',
        'A decisão cabe a quem tem mais experiência na hierarquia',
        'O trabalho é medido por estimativas detalhadas'
      ],
      answer: 0
    },
    {
      id: 'sq3-5',
      statement: 'Por que o Scrum é descrito como framework leve?',
      options: [
        'Porque define poucas regras — responsabilidades, eventos e artefatos',
        'Porque exige poucas pessoas',
        'Porque dispensa documentação',
        'Porque não tem eventos obrigatórios'
      ],
      answer: 0
    }
  ],

  'psm1-4': [
    {
      id: 'sq4-1',
      statement: 'Quais são os cinco valores do Scrum?',
      options: [
        'Commitment, Focus, Openness, Respect e Courage',
        'Transparency, Inspection, Adaptation, Focus e Respect',
        'Collaboration, Delivery, Quality, Speed e Trust',
        'Discipline, Order, Method, Deadline e Result'
      ],
      answer: 0
    },
    {
      id: 'sq4-2',
      statement: 'Uma equipe evita expor um problema para não parecer mal. Qual valor está em falta?',
      options: ['Openness', 'Focus', 'Commitment', 'Respect'],
      answer: 0
    },
    {
      id: 'sq4-3',
      statement: 'Um membro assume um problema difícil em vez de contorná-lo. Qual valor demonstra?',
      options: ['Courage', 'Focus', 'Openness', 'Commitment'],
      answer: 0
    },
    {
      id: 'sq4-4',
      statement: 'O time evita dispersão e mantém a atenção no Sprint Goal. Qual valor?',
      options: ['Focus', 'Respect', 'Courage', 'Openness'],
      answer: 0
    },
    {
      id: 'sq4-5',
      statement: 'Qual a relação entre os valores e os pilares do empirismo?',
      options: [
        'Quando os valores são vividos, os pilares se tornam reais',
        'Os valores substituem os pilares',
        'Os pilares só valem se houver certificação',
        'Não há relação entre eles'
      ],
      answer: 0
    }
  ],

  'psm1-5': [
    {
      id: 'sq5-1',
      statement: 'Como é composto o Scrum Team?',
      options: [
        'Um Product Owner, um Scrum Master e os Developers',
        'Um gerente de projeto e a equipe técnica',
        'Um líder, um analista e vários especialistas',
        'Dois Product Owners e um Scrum Master'
      ],
      answer: 0
    },
    {
      id: 'sq5-2',
      statement: 'Qual a responsabilidade central do Scrum Master?',
      options: [
        'Estabelecer o Scrum conforme definido no Scrum Guide',
        'Distribuir tarefas entre os Developers',
        'Aprovar o incremento antes do lançamento',
        'Ordenar o Product Backlog'
      ],
      answer: 0
    },
    {
      id: 'sq5-3',
      statement: 'O que significa o time ser autogerenciável?',
      options: [
        'Ele decide internamente quem faz o quê, como e quando',
        'Ele não presta contas a ninguém',
        'Ele escolhe os próprios objetivos de negócio',
        'Ele dispensa o Scrum Master'
      ],
      answer: 0
    },
    {
      id: 'sq5-4',
      statement: 'Quem é responsável pela qualidade do incremento?',
      options: ['Os Developers', 'O Scrum Master', 'O Product Owner', 'A área de qualidade'],
      answer: 0
    },
    {
      id: 'sq5-5',
      statement: 'Qual o foco do Product Owner?',
      options: [
        'Maximizar o valor e gerir o Product Backlog',
        'Coordenar as tarefas diárias',
        'Facilitar os eventos',
        'Garantir a adoção do framework'
      ],
      answer: 0
    }
  ],

  'psm1-6': [
    {
      id: 'sq6-1',
      statement: 'Qual evento é o contêiner de todos os outros?',
      options: ['A Sprint', 'A Sprint Planning', 'A Daily Scrum', 'A Sprint Review'],
      answer: 0
    },
    {
      id: 'sq6-2',
      statement: 'Qual a duração máxima da Daily Scrum?',
      options: ['15 minutos', '30 minutos', '1 hora', 'O tempo necessário'],
      answer: 0
    },
    {
      id: 'sq6-3',
      statement: 'Para quem é a Daily Scrum?',
      options: ['Para os Developers', 'Para o Product Owner', 'Para os stakeholders', 'Para a gerência'],
      answer: 0
    },
    {
      id: 'sq6-4',
      statement: 'Quais três perguntas a Sprint Planning responde?',
      options: [
        'Por que a Sprint é valiosa, o que será feito e como o trabalho será realizado',
        'O que deu certo, o que deu errado e o que melhorar',
        'Quem faz, quando entrega e quanto custa',
        'Qual o escopo, o prazo e o risco'
      ],
      answer: 0
    },
    {
      id: 'sq6-5',
      statement: 'O que a Sprint Retrospective inspeciona?',
      options: [
        'O processo, a eficiência e a qualidade, gerando ações de melhoria',
        'O incremento entregue',
        'O Product Backlog',
        'A satisfação dos stakeholders'
      ],
      answer: 0
    }
  ],

  'psm1-7': [
    {
      id: 'sq7-1',
      statement: 'Quais são as características obrigatórias do Product Backlog?',
      options: [
        'Único, ordenado, transparente e emergente',
        'Fixo, detalhado, aprovado e versionado',
        'Estimado, congelado, revisado e assinado',
        'Dividido por equipe, por área e por trimestre'
      ],
      answer: 0
    },
    {
      id: 'sq7-2',
      statement: 'A Definition of Done pode ser reduzida para caber mais trabalho na Sprint?',
      options: [
        'Nunca',
        'Sim, se o PO autorizar',
        'Sim, em Sprints curtas',
        'Sim, quando o prazo é crítico'
      ],
      answer: 0
    },
    {
      id: 'sq7-3',
      statement: 'Qual o compromisso do Incremento?',
      options: ['A Definition of Done', 'O Sprint Goal', 'O Product Goal', 'O plano de release'],
      answer: 0
    },
    {
      id: 'sq7-4',
      statement: 'O que compõe o Sprint Backlog?',
      options: [
        'O objetivo da Sprint, o plano de trabalho e sua atualização contínua',
        'A lista de todos os requisitos do produto',
        'O cronograma da release',
        'Os critérios de aceite do cliente'
      ],
      answer: 0
    },
    {
      id: 'sq7-5',
      statement: 'O que caracteriza um incremento?',
      options: [
        'Ser utilizável e atender à Definition of Done',
        'Ter passado pela homologação do cliente',
        'Estar documentado e aprovado',
        'Conter todos os itens da Sprint'
      ],
      answer: 0
    }
  ],

  'psm1-8': [
    {
      id: 'sq8-1',
      statement: 'Existe "Sprint Zero" no Scrum?',
      options: ['Não', 'Sim, para preparar o ambiente', 'Sim, para escrever o backlog', 'Sim, em projetos grandes'],
      answer: 0
    },
    {
      id: 'sq8-2',
      statement: 'Velocidade e Story Points medem valor?',
      options: [
        'Não — medem tamanho e capacidade, não valor',
        'Sim, ambos medem valor entregue',
        'Apenas a velocidade mede valor',
        'Apenas os Story Points medem valor'
      ],
      answer: 0
    },
    {
      id: 'sq8-3',
      statement: 'O Scrum exige que os itens sejam escritos como User Stories?',
      options: [
        'Não — é apenas um formato possível',
        'Sim, é obrigatório',
        'Sim, para itens funcionais',
        'Sim, quando há mais de uma equipe'
      ],
      answer: 0
    },
    {
      id: 'sq8-4',
      statement: 'Quando ocorre o refinamento do Product Backlog?',
      options: [
        'É contínuo — não é um evento com hora marcada',
        'Sempre antes da Sprint Planning',
        'Uma vez por Sprint, obrigatoriamente',
        'Durante a Retrospective'
      ],
      answer: 0
    },
    {
      id: 'sq8-5',
      statement: 'O Scrum Master pode substituir o Product Owner?',
      options: [
        'Não — são responsabilidades distintas',
        'Sim, quando o PO está ausente',
        'Sim, se tiver a certificação',
        'Sim, em times pequenos'
      ],
      answer: 0
    }
  ],

  'psm1-9': [
    {
      id: 'sq9-1',
      statement: 'Qual a meta recomendada nos simulados?',
      options: ['Mínimo de 90%, com consistência', 'Exatamente 85%', '70% é suficiente', 'Não há meta definida'],
      answer: 0
    },
    {
      id: 'sq9-2',
      statement: 'Por que a meta dos simulados é maior que a nota de corte?',
      options: [
        'Para criar margem diante do inglês e da pressão do tempo',
        'Porque os simulados são mais difíceis que a prova',
        'Porque a Scrum.org exige',
        'Para compensar questões anuladas'
      ],
      answer: 0
    },
    {
      id: 'sq9-3',
      statement: 'O que fazer com os erros cometidos nos simulados?',
      options: [
        'Analisá-los e voltar ao ponto correspondente do Scrum Guide',
        'Refazer o mesmo simulado até acertar',
        'Ignorá-los se a nota geral for boa',
        'Trocar de material de estudo'
      ],
      answer: 0
    },
    {
      id: 'sq9-4',
      statement: 'Além de conhecimento, o que os simulados treinam?',
      options: [
        'A interpretação rápida de questões',
        'A digitação',
        'A memorização de números',
        'A leitura em diagonal'
      ],
      answer: 0
    },
    {
      id: 'sq9-5',
      statement: 'Qual o valor das questões comentadas?',
      options: [
        'Entender por que a alternativa está certa, não apenas qual é',
        'Reduzir o tempo de estudo',
        'Substituir a leitura do Guia',
        'Antecipar as questões da prova real'
      ],
      answer: 0
    }
  ],

  'psm1-10': [
    {
      id: 'sq10-1',
      statement: 'O que deve ser revisado na preparação final?',
      options: [
        'Scrum Guide, valores, eventos, responsabilidades, artefatos, compromissos e armadilhas',
        'Apenas os simulados errados',
        'Apenas os eventos e os timeboxes',
        'Apenas a terminologia em inglês'
      ],
      answer: 0
    },
    {
      id: 'sq10-2',
      statement: 'Quanto tempo, em média, por questão?',
      options: ['Cerca de 45 segundos', 'Cerca de 2 minutos', 'Cerca de 15 segundos', 'Não há limite por questão'],
      answer: 0
    },
    {
      id: 'sq10-3',
      statement: 'Qual cuidado é específico das questões de múltiplas respostas?',
      options: [
        'Verificar quantas alternativas devem ser marcadas',
        'Responder sempre a primeira alternativa',
        'Deixá-las para o fim',
        'Marcar todas as plausíveis'
      ],
      answer: 0
    },
    {
      id: 'sq10-4',
      statement: 'Quando o participante é considerado apto a concluir a trilha?',
      options: [
        'Ao finalizar as fases, ler o Guia, fazer os simulados e demonstrar entendimento',
        'Ao assistir a todos os vídeos',
        'Ao acessar o repositório',
        'Ao agendar a prova'
      ],
      answer: 0
    },
    {
      id: 'sq10-5',
      statement: 'Qual é o objetivo principal da trilha?',
      options: [
        'O entendimento real do framework e da atuação do Scrum Master',
        'A aprovação na prova a qualquer custo',
        'A memorização do Scrum Guide',
        'A obtenção rápida do certificado'
      ],
      answer: 0
    }
  ]
};

const first = (moduleId: string, count: number) => PSM1_MODULE_QUIZZES[moduleId].slice(0, count);

/**
 * Simulado final: 50 questões — 4 de cada uma das 10 fases (40)
 * e mais 10 cenários de interpretação, no estilo da prova.
 */
export const PSM1_SIMULADO: SimuladoQuestion[] = [
  ...first('psm1-1', 4),
  ...first('psm1-2', 4),
  ...first('psm1-3', 4),
  ...first('psm1-4', 4),
  ...first('psm1-5', 4),
  ...first('psm1-6', 4),
  ...first('psm1-7', 4),
  ...first('psm1-8', 4),
  ...first('psm1-9', 4),
  ...first('psm1-10', 4),
  {
    id: 'ss-41',
    statement: 'Um gerente pede ao Scrum Master um relatório diário do que cada Developer fez. O que fazer?',
    options: [
      'Explicar que a Daily é dos Developers e orientar o gerente sobre transparência via artefatos',
      'Passar a coletar o status na Daily e enviar o relatório',
      'Pedir ao PO que faça o relatório',
      'Recusar sem explicação'
    ],
    answer: 0
  },
  {
    id: 'ss-42',
    statement: 'O time quer diminuir a Definition of Done para fechar a Sprint no prazo. Qual a orientação?',
    options: [
      'A DoD não é reduzida para caber mais trabalho — o item incompleto volta ao Product Backlog',
      'Reduzir a DoD apenas nesta Sprint',
      'Entregar mesmo assim e corrigir depois',
      'Prorrogar a Sprint por alguns dias'
    ],
    answer: 0
  },
  {
    id: 'ss-43',
    statement: 'Um stakeholder afirma que o time é lento porque a velocidade caiu. Como responder?',
    options: [
      'Velocidade mede capacidade, não valor — a conversa deve ir para o resultado entregue',
      'Aumentar o número de itens por Sprint',
      'Ajustar a escala de pontos para elevar o número',
      'Trocar membros da equipe'
    ],
    answer: 0
  },
  {
    id: 'ss-44',
    statement: 'A equipe quer criar uma "Sprint Zero" para preparar o ambiente. Qual a resposta correta?',
    options: [
      'Sprint Zero não existe no Scrum; toda Sprint deve produzir um incremento de valor',
      'É aceitável desde que dure menos de duas semanas',
      'É recomendada para projetos novos',
      'É permitida se o PO aprovar'
    ],
    answer: 0
  },
  {
    id: 'ss-45',
    statement: 'Durante a Sprint, o time descobre que o trabalho é maior do que previsto. O que acontece?',
    options: [
      'O escopo é renegociado com o PO, mantendo o Sprint Goal',
      'A Sprint é estendida',
      'O Sprint Goal é trocado',
      'Os itens são entregues sem atender à DoD'
    ],
    answer: 0
  },
  {
    id: 'ss-46',
    statement: 'Quem participa da Sprint Review?',
    options: [
      'A Equipe Scrum e as partes interessadas convidadas',
      'Apenas os Developers',
      'Apenas o PO e os stakeholders',
      'Apenas o Scrum Master'
    ],
    answer: 0
  },
  {
    id: 'ss-47',
    statement: 'O Product Owner pede aos Developers que usem uma tecnologia específica. Qual a orientação?',
    options: [
      'As decisões técnicas são dos Developers',
      'O PO decide, por ser responsável pelo valor',
      'O Scrum Master decide em caso de impasse',
      'A decisão vai para a gerência'
    ],
    answer: 0
  },
  {
    id: 'ss-48',
    statement: 'A organização quer um único backlog compartilhado por três produtos diferentes. Faz sentido?',
    options: [
      'Não — o Product Backlog é único por produto',
      'Sim, para facilitar a priorização',
      'Sim, se houver um só PO',
      'Sim, se as equipes forem as mesmas'
    ],
    answer: 0
  },
  {
    id: 'ss-49',
    statement: 'O time nunca conclui as ações definidas na Retrospective. Qual é o problema?',
    options: [
      'Falta adaptação: inspecionar sem mudar esvazia o empirismo',
      'A Retrospective deveria ser mais longa',
      'O Scrum Master deveria executar as ações sozinho',
      'As ações deveriam ir para o Sprint Backlog do PO'
    ],
    answer: 0
  },
  {
    id: 'ss-50',
    statement: 'Qual a postura correta diante de uma alternativa que descreve prática comum de mercado?',
    options: [
      'Verificar se ela está no Scrum Guide; se não estiver, é complementar e opcional',
      'Escolhê-la, por ser a mais usada na prática',
      'Descartá-la sempre',
      'Escolher a alternativa mais longa'
    ],
    answer: 0
  }
];
