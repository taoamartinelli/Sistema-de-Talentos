import { SimuladoQuestion } from '../trilha360';

/** Simulado de conclusão de cada módulo da trilha de Automação: 5 questões por módulo. */
export const AUTOMACAO_MODULE_QUIZZES: Record<string, SimuladoQuestion[]> = {
  'auto-1': [
    {
      id: 'aq1-1',
      statement: 'Qual é a ideia central da trilha?',
      options: [
        'Saber dar o contexto certo é mais importante que saber programar',
        'É preciso dominar programação para usar IA',
        'A IA funciona melhor com perguntas curtas',
        'Ferramentas de IA dispensam qualquer instrução'
      ],
      answer: 0
    },
    {
      id: 'aq1-2',
      statement: 'Por que uma pergunta vaga gera uma resposta genérica?',
      options: [
        'Porque a IA responde com base no que você fornece — ela não adivinha',
        'Porque a IA prefere respostas curtas',
        'Porque a ferramenta está com defeito',
        'Porque falta memória no computador'
      ],
      answer: 0
    },
    {
      id: 'aq1-3',
      statement: 'Na metáfora do gênio da lâmpada, o que garante o resultado esperado?',
      options: [
        'Explicar o desejo em detalhes',
        'Pedir vários desejos ao mesmo tempo',
        'Repetir o mesmo pedido',
        'Confiar que o gênio entende sozinho'
      ],
      answer: 0
    },
    {
      id: 'aq1-4',
      statement: 'Como melhorar o pedido "Escreva um poema triste"?',
      options: [
        'Dando critérios: sobre o quê, onde e em que clima',
        'Pedindo que seja mais curto',
        'Repetindo o pedido várias vezes',
        'Trocando de ferramenta de IA'
      ],
      answer: 0
    },
    {
      id: 'aq1-5',
      statement: 'A que a IA é comparada no Módulo 1?',
      options: [
        'A um filhote muito inteligente, que precisa ser ensinado com clareza',
        'A uma calculadora que só aceita números',
        'A um livro fechado',
        'A um programa que não pode ser corrigido'
      ],
      answer: 0
    }
  ],

  'auto-2': [
    {
      id: 'aq2-1',
      statement: 'O que é o refinamento progressivo?',
      options: [
        'Alimentar a IA com informações aos poucos, em rodadas',
        'Escrever um único prompt gigante',
        'Pedir sempre a mesma coisa de formas diferentes',
        'Deixar a IA decidir o projeto sozinha'
      ],
      answer: 0
    },
    {
      id: 'aq2-2',
      statement: 'Qual é o primeiro passo da técnica?',
      options: ['A ideia bruta', 'O diferencial', 'A escolha da ferramenta', 'A revisão final'],
      answer: 0
    },
    {
      id: 'aq2-3',
      statement: 'O que entra na rodada "o quê e quem"?',
      options: [
        'Os primeiros detalhes essenciais: função principal e público',
        'A cor da interface',
        'O nome da empresa',
        'O orçamento do projeto'
      ],
      answer: 0
    },
    {
      id: 'aq2-4',
      statement: 'Qual destas é uma "frase mágica" do módulo?',
      options: [
        '"Expandindo essa ideia, e se a gente adicionasse..."',
        '"Faça do seu jeito."',
        '"Não precisa explicar."',
        '"Responda em uma palavra."'
      ],
      answer: 0
    },
    {
      id: 'aq2-5',
      statement: 'Na metáfora do detetive, qual é o seu papel?',
      options: [
        'Entregar as pistas aos poucos para resolver o caso junto com a IA',
        'Esconder as informações da IA',
        'Deixar a IA investigar sozinha',
        'Resolver o caso antes de conversar com a IA'
      ],
      answer: 0
    }
  ],

  'auto-3': [
    {
      id: 'aq3-1',
      statement: 'Qual é a sequência correta das primeiras etapas do fluxo?',
      options: [
        'Ideia → leitura → organização → criação',
        'Criação → ideia → verificação → leitura',
        'Organização → lançamento → ideia → criação',
        'Verificação → refinamento → ideia → leitura'
      ],
      answer: 0
    },
    {
      id: 'aq3-2',
      statement: 'O que acontece na etapa de organização?',
      options: [
        'A IA quebra a ideia em partes menores — os requisitos',
        'A IA publica o projeto',
        'Você escolhe a ferramenta final',
        'O projeto é encerrado'
      ],
      answer: 0
    },
    {
      id: 'aq3-3',
      statement: 'Para que serve a etapa de verificação?',
      options: [
        'Comparar o que a IA entregou com o que você realmente queria',
        'Escolher o nome do projeto',
        'Aumentar o tamanho da resposta',
        'Trocar de ferramenta'
      ],
      answer: 0
    },
    {
      id: 'aq3-4',
      statement: 'Quando o resultado não está bom, o que fazer?',
      options: [
        'Voltar à organização ou criação e pedir ajustes',
        'Recomeçar o projeto do zero',
        'Aceitar o resultado assim mesmo',
        'Encerrar a conversa'
      ],
      answer: 0
    },
    {
      id: 'aq3-5',
      statement: 'Por que seguir um fluxo ao trabalhar com IA?',
      options: [
        'Para não esquecer etapas e manter o controle do processo',
        'Para escrever prompts mais longos',
        'Para reduzir o custo da ferramenta',
        'Para eliminar a necessidade de revisão'
      ],
      answer: 0
    }
  ],

  'auto-4': [
    {
      id: 'aq4-1',
      statement: 'O que torna uma pergunta sobre ferramentas realmente útil?',
      options: [
        'Informar o contexto do projeto e as suas restrições',
        'Ser o mais curta possível',
        'Citar o maior número de tecnologias',
        'Pedir a opinião pessoal da IA'
      ],
      answer: 0
    },
    {
      id: 'aq4-2',
      statement: 'Na metáfora do GPS, o que são as ferramentas?',
      options: ['As rotas possíveis até o destino', 'O destino final', 'O combustível', 'O motorista'],
      answer: 0
    },
    {
      id: 'aq4-3',
      statement: 'Qual destas é uma restrição relevante para a IA?',
      options: [
        'Não saber programar e não querer gastar dinheiro',
        'A cor preferida do dono',
        'O dia da semana',
        'O número de páginas do site'
      ],
      answer: 0
    },
    {
      id: 'aq4-4',
      statement: 'Por que pedir vantagens e desvantagens de cada opção?',
      options: [
        'Porque a decisão final continua sendo sua',
        'Para deixar a resposta mais longa',
        'Porque a IA não sabe escolher',
        'Para evitar usar ferramentas gratuitas'
      ],
      answer: 0
    },
    {
      id: 'aq4-5',
      statement: 'Qual é o seu papel nesse módulo?',
      options: [
        'Explicar o problema tão bem que a IA possa sugerir a ferramenta certa',
        'Conhecer todas as tecnologias disponíveis',
        'Programar a solução sozinho',
        'Contratar um especialista'
      ],
      answer: 0
    }
  ],

  'auto-5': [
    {
      id: 'aq5-1',
      statement: 'Qual é o objetivo da missão final?',
      options: [
        'Criar um mini projeto do zero aplicando todo o método',
        'Decorar os comandos da ferramenta',
        'Escrever um único prompt perfeito',
        'Comparar ferramentas de IA'
      ],
      answer: 0
    },
    {
      id: 'aq5-2',
      statement: 'Qual é o primeiro passo da missão?',
      options: [
        'Explicar a ideia de forma ampla — a ideia bruta',
        'Escolher a ferramenta',
        'Preencher o projeto com exemplos',
        'Revisar o resultado'
      ],
      answer: 0
    },
    {
      id: 'aq5-3',
      statement: 'Em que momento se pede sugestão de ferramentas?',
      options: [
        'Depois que a ideia já está clara e refinada',
        'Antes de explicar a ideia',
        'Somente no fim do projeto',
        'Nunca — a escolha é sempre sua'
      ],
      answer: 0
    },
    {
      id: 'aq5-4',
      statement: 'Na metáfora do navio, qual é o seu papel?',
      options: [
        'Capitão: define o destino e comanda a tripulação',
        'Passageiro: só acompanha a viagem',
        'Tripulante: executa as ordens',
        'Observador: não interfere'
      ],
      answer: 0
    },
    {
      id: 'aq5-5',
      statement: 'O que caracteriza o passo de refinamento final?',
      options: [
        'Revisar o que foi criado e pedir ajustes pontuais',
        'Recomeçar o projeto',
        'Trocar a ideia inicial',
        'Encerrar sem revisar'
      ],
      answer: 0
    }
  ],

  'auto-6': [
    {
      id: 'aq6-1',
      statement: 'Qual a diferença entre IA conversacional e agente de IA?',
      options: [
        'O agente é treinado uma vez e trabalha sozinho; a conversacional responde a cada pergunta',
        'O agente só funciona com programação',
        'Não existe diferença prática',
        'A conversacional é sempre mais avançada'
      ],
      answer: 0
    },
    {
      id: 'aq6-2',
      statement: 'Quais são os 4 pilares do contexto para agentes?',
      options: [
        'Papel, Processo, Regras e Dados',
        'Papel, Preço, Prazo e Pessoas',
        'Prompt, Plano, Produto e Publicação',
        'Processo, Programação, Painel e Prática'
      ],
      answer: 0
    },
    {
      id: 'aq6-3',
      statement: 'O que ativa um agente é chamado de:',
      options: ['Gatilho', 'Finalização', 'Regra', 'Persona'],
      answer: 0
    },
    {
      id: 'aq6-4',
      statement: 'Por que definir regras de "não pode"?',
      options: [
        'Para estabelecer limites claros e evitar problemas',
        'Para deixar o prompt mais longo',
        'Para impedir que o agente responda',
        'Porque a ferramenta exige'
      ],
      answer: 0
    },
    {
      id: 'aq6-5',
      statement: 'Qual dica de ouro vale para o primeiro agente?',
      options: [
        'Começar simples: fazer uma coisa muito bem',
        'Automatizar dez tarefas de uma vez',
        'Dispensar testes antes de publicar',
        'Evitar qualquer intervenção humana'
      ],
      answer: 0
    }
  ],

  'auto-7': [
    {
      id: 'aq7-1',
      statement: 'O que é usar uma persona com a IA?',
      options: [
        'Atribuir a ela um papel profissional para responder como um especialista',
        'Pedir que ela invente uma história',
        'Trocar o idioma da resposta',
        'Limitar o tamanho do texto'
      ],
      answer: 0
    },
    {
      id: 'aq7-2',
      statement: 'Quais são as 3 camadas de uma persona eficaz?',
      options: [
        'Profissão base, experiência específica e especialidade',
        'Nome, idade e cidade',
        'Pergunta, resposta e revisão',
        'Papel, processo e regras'
      ],
      answer: 0
    },
    {
      id: 'aq7-3',
      statement: 'O que muda quando você usa uma persona?',
      options: [
        'Conhecimento especializado, vocabulário técnico e perspectiva profissional',
        'Apenas o tamanho da resposta',
        'A velocidade da ferramenta',
        'O idioma da conversa'
      ],
      answer: 0
    },
    {
      id: 'aq7-4',
      statement: 'Qual persona é mais eficaz?',
      options: [
        'Analista de QA especializado em testes de segurança',
        'Analista',
        'Profissional de tecnologia',
        'Especialista em tudo'
      ],
      answer: 0
    },
    {
      id: 'aq7-5',
      statement: 'Como testar o efeito de uma persona?',
      options: [
        'Fazendo a mesma pergunta sem persona, com persona básica e com persona completa',
        'Usando ferramentas diferentes',
        'Mudando o horário da pergunta',
        'Pedindo respostas mais curtas'
      ],
      answer: 0
    }
  ]
};

/** Simulado final da trilha de Automação: 50 questões. */
export const AUTOMACAO_SIMULADO: SimuladoQuestion[] = [
  ...AUTOMACAO_MODULE_QUIZZES['auto-1'],
  ...AUTOMACAO_MODULE_QUIZZES['auto-2'],
  ...AUTOMACAO_MODULE_QUIZZES['auto-3'],
  ...AUTOMACAO_MODULE_QUIZZES['auto-4'],
  ...AUTOMACAO_MODULE_QUIZZES['auto-5'],
  ...AUTOMACAO_MODULE_QUIZZES['auto-6'],
  ...AUTOMACAO_MODULE_QUIZZES['auto-7'],
  {
    id: 'as-36',
    statement: 'Qual a ordem correta do fluxo de trabalho com IA?',
    options: [
      'Ideia → leitura → organização → criação → verificação → lançamento → refinamento',
      'Criação → ideia → lançamento → verificação',
      'Organização → criação → ideia → verificação',
      'Ideia → lançamento → criação → refinamento'
    ],
    answer: 0
  },
  {
    id: 'as-37',
    statement: 'O que caracteriza uma "pergunta poderosa" sobre ferramentas?',
    options: [
      'Contexto do projeto, restrições e formato de resposta desejado',
      'Uma lista de tecnologias conhecidas',
      'Uma pergunta curta e direta',
      'Pedir a ferramenta mais popular'
    ],
    answer: 0
  },
  {
    id: 'as-38',
    statement: 'No pilar Processo, o que vem depois da Análise?',
    options: ['Decisão', 'Gatilho', 'Finalização', 'Papel'],
    answer: 0
  },
  {
    id: 'as-39',
    statement: 'Que informação deve constar no Papel de um agente de atendimento?',
    options: [
      'Nome, tom de voz, objetivo e para onde direcionar quando não souber',
      'Apenas o nome da empresa',
      'A lista de concorrentes',
      'O histórico financeiro do negócio'
    ],
    answer: 0
  },
  {
    id: 'as-40',
    statement: 'Por que todo agente precisa de uma saída humana?',
    options: [
      'Para escalar ao responsável em vez de inventar uma resposta',
      'Para reduzir o custo da automação',
      'Porque agentes não funcionam sozinhos',
      'Para dispensar o monitoramento'
    ],
    answer: 0
  },
  {
    id: 'as-41',
    statement: 'Qual exemplo representa a terceira rodada do refinamento progressivo?',
    options: [
      'Adicionar o diferencial: identificar a planta por foto',
      'Dizer que é um app para cuidar de plantas',
      'Definir que o público são iniciantes',
      'Escolher a plataforma do app'
    ],
    answer: 0
  },
  {
    id: 'as-42',
    statement: 'O que a etapa de "leitura" representa no fluxo?',
    options: [
      'A IA processa sua ideia e tenta entender o que você quer',
      'Você lê a documentação da ferramenta',
      'A IA publica o resultado',
      'Você revisa o texto final'
    ],
    answer: 0
  },
  {
    id: 'as-43',
    statement: 'Qual é a função dos "templates de resposta" no pilar Dados?',
    options: [
      'Padronizar as respostas do agente em diferentes situações',
      'Definir o gatilho do agente',
      'Limitar o número de clientes',
      'Substituir as regras do agente'
    ],
    answer: 0
  },
  {
    id: 'as-44',
    statement: 'Combinar personas significa:',
    options: [
      'Unir duas perspectivas, como "Product Manager com background técnico"',
      'Usar duas ferramentas de IA ao mesmo tempo',
      'Fazer a mesma pergunta duas vezes',
      'Alternar entre idiomas'
    ],
    answer: 0
  },
  {
    id: 'as-45',
    statement: 'Qual a melhor forma de pedir ajuda a um especialista quando você é iniciante?',
    options: [
      'Pedir que ele explique de forma didática',
      'Pedir apenas termos técnicos',
      'Evitar dar contexto',
      'Pedir a resposta mais curta possível'
    ],
    answer: 0
  },
  {
    id: 'as-46',
    statement: 'Que resultado se espera de quem conclui a trilha?',
    options: [
      'Dar contexto claro, conduzir projetos com IA e criar agentes autônomos',
      'Programar em várias linguagens',
      'Administrar servidores',
      'Criar interfaces gráficas do zero'
    ],
    answer: 0
  },
  {
    id: 'as-47',
    statement: 'Por que testar o agente com cenários difíceis?',
    options: [
      'Para verificar se ele sabe lidar com situações reais e imprevistos',
      'Para aumentar o número de regras',
      'Para reduzir o tempo de resposta',
      'Porque a ferramenta exige testes'
    ],
    answer: 0
  },
  {
    id: 'as-48',
    statement: 'O que significa "a IA é um copiloto"?',
    options: [
      'Ela apoia o trabalho, mas a direção continua sendo sua',
      'Ela decide sozinha o rumo do projeto',
      'Ela substitui a equipe',
      'Ela executa apenas tarefas técnicas'
    ],
    answer: 0
  },
  {
    id: 'as-49',
    statement: 'Qual erro mais compromete o resultado de uma conversa com IA?',
    options: [
      'Não fornecer contexto suficiente',
      'Escrever frases longas',
      'Usar pontuação',
      'Fazer perguntas em português'
    ],
    answer: 0
  },
  {
    id: 'as-50',
    statement: 'O que fazer depois que o agente entra em operação?',
    options: [
      'Monitorar o uso e ajustar as instruções regularmente',
      'Encerrar o acompanhamento',
      'Remover as regras de limite',
      'Duplicar o agente para outras funções'
    ],
    answer: 0
  }
];
