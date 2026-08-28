import { SimuladoQuestion } from '../trilha360';

/** Simulado de conclusão de cada fase da trilha CTFL: 5 questões por módulo. */
export const CTFL_MODULE_QUIZZES: Record<string, SimuladoQuestion[]> = {
  'ctfl-1': [
    {
      id: 'cq1-1',
      statement: 'Qual a diferença entre erro, defeito e falha?',
      options: [
        'O erro é a ação humana, o defeito é a imperfeição no artefato e a falha é o comportamento observado',
        'O defeito é a ação humana e o erro é o comportamento observado',
        'Falha e defeito são sinônimos',
        'O erro só existe em produção'
      ],
      answer: 0
    },
    {
      id: 'cq1-2',
      statement: 'O que o teste demonstra?',
      options: [
        'A presença de defeitos, nunca a ausência',
        'Que o software está livre de defeitos',
        'Que o código está correto',
        'Que os requisitos estão completos'
      ],
      answer: 0
    },
    {
      id: 'cq1-3',
      statement: 'Por que testes exaustivos são impossíveis?',
      options: [
        'Porque o número de combinações de entradas e caminhos é grande demais',
        'Porque faltam ferramentas adequadas',
        'Porque o time nunca tem orçamento',
        'Porque os requisitos mudam'
      ],
      answer: 0
    },
    {
      id: 'cq1-4',
      statement: 'O que é a falácia da ausência de defeitos?',
      options: [
        'Um sistema sem defeitos conhecidos pode ainda assim não atender à necessidade do usuário',
        'Todo sistema tem defeitos ocultos',
        'Defeitos sempre se agrupam',
        'Nenhum teste encontra todos os defeitos'
      ],
      answer: 0
    },
    {
      id: 'cq1-5',
      statement: 'Verificação e validação: qual a diferença?',
      options: [
        'Verificação: construímos corretamente? Validação: construímos o produto certo?',
        'Verificação é feita pelo cliente; validação, pelo time',
        'Verificação é automatizada; validação é manual',
        'São sinônimos'
      ],
      answer: 0
    }
  ],

  'ctfl-2': [
    {
      id: 'cq2-1',
      statement: 'Qual é a sequência correta das atividades do processo de teste?',
      options: [
        'Planejamento, monitoramento e controle, análise, modelagem, implementação, execução e encerramento',
        'Execução, análise, planejamento e encerramento',
        'Modelagem, execução, planejamento e controle',
        'Análise, execução, encerramento e planejamento'
      ],
      answer: 0
    },
    {
      id: 'cq2-2',
      statement: 'O que é testware?',
      options: [
        'O conjunto de produtos gerados pelas atividades de teste',
        'A ferramenta usada para automatizar testes',
        'O ambiente onde os testes rodam',
        'O software sob teste'
      ],
      answer: 0
    },
    {
      id: 'cq2-3',
      statement: 'Para que serve a rastreabilidade?',
      options: [
        'Ligar requisitos, casos de teste, resultados e defeitos',
        'Medir a velocidade da equipe',
        'Automatizar a execução',
        'Priorizar os defeitos'
      ],
      answer: 0
    },
    {
      id: 'cq2-4',
      statement: 'O que ocorre na atividade de modelagem (design) de testes?',
      options: [
        'As condições de teste são transformadas em casos de teste concretos',
        'Os testes são executados',
        'Os defeitos são registrados',
        'O ambiente é preparado'
      ],
      answer: 0
    },
    {
      id: 'cq2-5',
      statement: 'Qual o objetivo do encerramento das atividades de teste?',
      options: [
        'Consolidar resultados, lições aprendidas e o testware para uso futuro',
        'Corrigir os defeitos encontrados',
        'Liberar o sistema em produção',
        'Aprovar o orçamento do próximo ciclo'
      ],
      answer: 0
    }
  ],

  'ctfl-3': [
    {
      id: 'cq3-1',
      statement: 'O que é shift-left?',
      options: [
        'Antecipar as atividades de teste para o início do ciclo',
        'Mover os testes para o fim do projeto',
        'Automatizar toda a regressão',
        'Testar apenas em produção'
      ],
      answer: 0
    },
    {
      id: 'cq3-2',
      statement: 'O que caracteriza um modelo sequencial de desenvolvimento?',
      options: [
        'Cada fase termina antes de a próxima começar',
        'O produto é refinado em ciclos',
        'As entregas são incrementais',
        'O escopo muda a cada iteração'
      ],
      answer: 0
    },
    {
      id: 'cq3-3',
      statement: 'Qual a contribuição do teste em times ágeis?',
      options: [
        'Feedback rápido e qualidade contínua, desde os requisitos',
        'Validar somente ao final da release',
        'Substituir a revisão de código',
        'Garantir a estimativa da equipe'
      ],
      answer: 0
    },
    {
      id: 'cq3-4',
      statement: 'Para que servem as revisões?',
      options: [
        'Encontrar defeitos em documentos e artefatos antes de o código existir',
        'Aprovar formalmente a entrega',
        'Medir a cobertura de código',
        'Registrar os defeitos de produção'
      ],
      answer: 0
    },
    {
      id: 'cq3-5',
      statement: 'O que é integração contínua?',
      options: [
        'Integrar e verificar o código com frequência, detectando problemas cedo',
        'Publicar em produção todos os dias',
        'Executar apenas testes manuais',
        'Unificar os repositórios do time'
      ],
      answer: 0
    }
  ],

  'ctfl-4': [
    {
      id: 'cq4-1',
      statement: 'Quais são os quatro níveis de teste?',
      options: [
        'Componente, integração, sistema e aceite',
        'Funcional, não funcional, caixa-preta e caixa-branca',
        'Unitário, exploratório, regressivo e de carga',
        'Planejamento, execução, análise e encerramento'
      ],
      answer: 0
    },
    {
      id: 'cq4-2',
      statement: 'O teste de integração verifica:',
      options: [
        'A comunicação e as interfaces entre componentes ou sistemas',
        'Partes isoladas do código',
        'A necessidade do usuário final',
        'O desempenho sob carga'
      ],
      answer: 0
    },
    {
      id: 'cq4-3',
      statement: 'Desempenho, usabilidade e segurança são testes de que tipo?',
      options: ['Não funcionais', 'Funcionais', 'De regressão', 'De confirmação'],
      answer: 0
    },
    {
      id: 'cq4-4',
      statement: 'Qual a diferença entre teste de confirmação e de regressão?',
      options: [
        'A confirmação valida a correção específica; a regressão protege o que já funcionava',
        'A regressão valida a correção; a confirmação testa o restante',
        'São a mesma coisa com nomes diferentes',
        'A confirmação só existe em testes automatizados'
      ],
      answer: 0
    },
    {
      id: 'cq4-5',
      statement: 'O teste caixa-branca se baseia em quê?',
      options: [
        'Na estrutura interna do software',
        'Apenas na especificação',
        'Na experiência do testador',
        'Nos relatórios de produção'
      ],
      answer: 0
    }
  ],

  'ctfl-5': [
    {
      id: 'cq5-1',
      statement: 'O que é particionamento de equivalência?',
      options: [
        'Dividir as entradas em classes com o mesmo comportamento esperado',
        'Testar apenas os valores das bordas',
        'Cobrir todas as combinações de condições',
        'Explorar o sistema sem roteiro'
      ],
      answer: 0
    },
    {
      id: 'cq5-2',
      statement: 'Por que a análise de valor limite é eficaz?',
      options: [
        'Porque os defeitos se concentram nas fronteiras das partições',
        'Porque reduz o número de casos a zero',
        'Porque dispensa a especificação',
        'Porque só se aplica a testes automatizados'
      ],
      answer: 0
    },
    {
      id: 'cq5-3',
      statement: 'Quando usar tabela de decisão?',
      options: [
        'Quando o comportamento depende de várias regras combinadas',
        'Quando o sistema tem estados e transições',
        'Quando não há especificação',
        'Quando se quer medir cobertura de código'
      ],
      answer: 0
    },
    {
      id: 'cq5-4',
      statement: 'Qual técnica cobre estados, eventos e transições?',
      options: ['Transição de estados', 'Tabela de decisão', 'Valor limite', 'Cobertura de decisão'],
      answer: 0
    },
    {
      id: 'cq5-5',
      statement: 'O que caracteriza o teste exploratório?',
      options: [
        'Projetar, executar e aprender ao mesmo tempo, guiado pela experiência',
        'Seguir um roteiro detalhado previamente aprovado',
        'Medir a cobertura de decisão',
        'Automatizar a regressão'
      ],
      answer: 0
    }
  ],

  'ctfl-6': [
    {
      id: 'cq6-1',
      statement: 'O que são critérios de saída?',
      options: [
        'As condições que definem quando o teste pode ser considerado concluído',
        'As condições para começar a testar',
        'Os requisitos do cliente',
        'Os defeitos que impedem a entrega'
      ],
      answer: 0
    },
    {
      id: 'cq6-2',
      statement: 'Como se avalia o nível de um risco?',
      options: [
        'Pela combinação de probabilidade e impacto',
        'Pelo custo de correção',
        'Pelo número de defeitos já encontrados',
        'Pela experiência do time'
      ],
      answer: 0
    },
    {
      id: 'cq6-3',
      statement: 'Qual a diferença entre risco de produto e risco de projeto?',
      options: [
        'O de produto afeta a qualidade entregue; o de projeto afeta prazo, recursos e execução',
        'O de produto é técnico; o de projeto é financeiro',
        'São sinônimos',
        'O de projeto só existe em métodos ágeis'
      ],
      answer: 0
    },
    {
      id: 'cq6-4',
      statement: 'Qual a diferença entre severidade e prioridade de um defeito?',
      options: [
        'Severidade é o impacto técnico; prioridade é a urgência para o negócio',
        'Prioridade é o impacto técnico; severidade é a urgência',
        'São a mesma coisa',
        'Severidade só se aplica a defeitos de produção'
      ],
      answer: 0
    },
    {
      id: 'cq6-5',
      statement: 'Como o risco orienta o esforço de teste?',
      options: [
        'Áreas de maior risco recebem testes mais profundos e prioridade maior',
        'Todas as áreas recebem o mesmo esforço',
        'Testa-se primeiro o que é mais fácil',
        'O risco não influencia o teste'
      ],
      answer: 0
    }
  ],

  'ctfl-7': [
    {
      id: 'cq7-1',
      statement: 'Qual é o principal custo escondido da automação?',
      options: [
        'A manutenção dos scripts quando o sistema muda',
        'A licença das ferramentas',
        'O tempo de execução dos testes',
        'O treinamento inicial'
      ],
      answer: 0
    },
    {
      id: 'cq7-2',
      statement: 'Automatizar um teste mal projetado resolve o problema?',
      options: [
        'Não — apenas repete o erro mais rápido',
        'Sim, a automação corrige falhas de projeto',
        'Sim, se a ferramenta for boa',
        'Depende da linguagem usada'
      ],
      answer: 0
    },
    {
      id: 'cq7-3',
      statement: 'Onde a automação rende mais?',
      options: [
        'Em testes repetitivos e estáveis, como a regressão funcional',
        'Em testes exploratórios',
        'Em revisões de requisitos',
        'Em testes de usabilidade'
      ],
      answer: 0
    },
    {
      id: 'cq7-4',
      statement: 'A automação substitui o testador?',
      options: [
        'Não — não substitui o pensamento analítico nem o teste exploratório',
        'Sim, em times maduros',
        'Sim, quando a cobertura passa de 80%',
        'Sim, em projetos ágeis'
      ],
      answer: 0
    },
    {
      id: 'cq7-5',
      statement: 'Para que serve uma ferramenta de gestão de testes?',
      options: [
        'Organizar casos, execuções, resultados e rastreabilidade',
        'Executar os testes automaticamente',
        'Corrigir os defeitos encontrados',
        'Medir a performance do sistema'
      ],
      answer: 0
    }
  ],

  'ctfl-8': [
    {
      id: 'cq8-1',
      statement: 'Qual é a referência oficial do exame CTFL?',
      options: [
        'O syllabus oficial CTFL versão 4.0',
        'O manual da ferramenta de testes',
        'O Guia PMBOK',
        'O Manifesto Ágil'
      ],
      answer: 0
    },
    {
      id: 'cq8-2',
      statement: 'Quem mantém a certificação e quem a representa no Brasil?',
      options: ['ISTQB, representada pelo BSTQB', 'Scrum.org e ISTQB', 'BSTQB e PMI', 'ISO e ABNT'],
      answer: 0
    },
    {
      id: 'cq8-3',
      statement: 'Como o material complementar deve ser usado?',
      options: [
        'Para explicar o syllabus, nunca para substituí-lo',
        'Como fonte principal de estudo',
        'Apenas na revisão final',
        'Somente se o syllabus não estiver disponível'
      ],
      answer: 0
    },
    {
      id: 'cq8-4',
      statement: 'Qual o valor de construir resumos próprios?',
      options: [
        'Reformular o conceito com as próprias palavras revela o que não foi entendido',
        'Reduzir o tempo total de estudo',
        'Substituir os simulados',
        'Facilitar a memorização literal'
      ],
      answer: 0
    },
    {
      id: 'cq8-5',
      statement: 'Quais materiais a trilha define como obrigatórios?',
      options: [
        'Syllabus oficial, conteúdos da trilha, simulados e exercícios complementares',
        'Apenas os vídeos',
        'Apenas os simulados',
        'Qualquer curso online sobre testes'
      ],
      answer: 0
    }
  ],

  'ctfl-9': [
    {
      id: 'cq9-1',
      statement: 'O que a prova cobra principalmente?',
      options: [
        'Interpretação conceitual',
        'Memorização literal do syllabus',
        'Conhecimento de ferramentas específicas',
        'Experiência prática comprovada'
      ],
      answer: 0
    },
    {
      id: 'cq9-2',
      statement: 'O que fazer com os erros cometidos nos simulados?',
      options: [
        'Analisá-los e voltar ao ponto correspondente do syllabus',
        'Refazer o simulado até decorar as respostas',
        'Ignorá-los se a nota geral for boa',
        'Trocar de simulado'
      ],
      answer: 0
    },
    {
      id: 'cq9-3',
      statement: 'Quais metas a trilha recomenda para os simulados?',
      options: [
        'Consistência, segurança nos fundamentos e boa gestão de tempo',
        'Acertar 100% ao menos uma vez',
        'Fazer o maior número possível de simulados',
        'Cronometrar cada questão em 20 segundos'
      ],
      answer: 0
    },
    {
      id: 'cq9-4',
      statement: 'Por que as alternativas costumam parecer todas corretas?',
      options: [
        'Porque a prova testa nuances conceituais',
        'Porque as questões são mal escritas',
        'Porque há sempre duas respostas certas',
        'Porque a tradução é imprecisa'
      ],
      answer: 0
    },
    {
      id: 'cq9-5',
      statement: 'Para que servem as questões comentadas?',
      options: [
        'Entender por que a alternativa é correta, e não apenas qual é',
        'Aumentar o número de questões resolvidas',
        'Substituir a leitura do syllabus',
        'Prever as questões da prova real'
      ],
      answer: 0
    }
  ],

  'ctfl-10': [
    {
      id: 'cq10-1',
      statement: 'O que deve ser revisado na preparação final?',
      options: [
        'Fundamentos, processo, técnicas, níveis, tipos, gestão de defeitos e de riscos',
        'Apenas as técnicas de teste',
        'Apenas os conceitos de automação',
        'Apenas os simulados errados'
      ],
      answer: 0
    },
    {
      id: 'cq10-2',
      statement: 'Qual cuidado é recomendado durante a prova?',
      options: [
        'Leitura cuidadosa e atenção às pegadinhas conceituais',
        'Responder o mais rápido possível',
        'Marcar sempre a alternativa mais longa',
        'Pular as questões difíceis sem revisar'
      ],
      answer: 0
    },
    {
      id: 'cq10-3',
      statement: 'Quando o participante conclui a trilha?',
      options: [
        'Ao finalizar as fases, estudar o syllabus, fazer os simulados e demonstrar entendimento',
        'Ao assistir a todos os vídeos',
        'Ao agendar a prova',
        'Ao acessar todos os materiais'
      ],
      answer: 0
    },
    {
      id: 'cq10-4',
      statement: 'O que a trilha recomenda para o ambiente do exame?',
      options: [
        'Ambiente silencioso, internet estável e organização do tempo',
        'Fazer a prova acompanhado de um colega',
        'Consultar o syllabus durante a prova',
        'Realizar a prova no fim do expediente'
      ],
      answer: 0
    },
    {
      id: 'cq10-5',
      statement: 'Qual o objetivo maior da trilha, além da aprovação?',
      options: [
        'Construir base sólida e entendimento real de qualidade e testes',
        'Obter o certificado no menor prazo',
        'Aprender uma ferramenta de automação',
        'Preparar para uma entrevista técnica'
      ],
      answer: 0
    }
  ]
};

const first = (moduleId: string, count: number) => CTFL_MODULE_QUIZZES[moduleId].slice(0, count);

/**
 * Simulado final: 50 questões — 4 de cada uma das 10 fases (40)
 * e mais 10 cenários de aplicação, no estilo da prova.
 */
export const CTFL_SIMULADO: SimuladoQuestion[] = [
  ...first('ctfl-1', 4),
  ...first('ctfl-2', 4),
  ...first('ctfl-3', 4),
  ...first('ctfl-4', 4),
  ...first('ctfl-5', 4),
  ...first('ctfl-6', 4),
  ...first('ctfl-7', 4),
  ...first('ctfl-8', 4),
  ...first('ctfl-9', 4),
  ...first('ctfl-10', 4),
  {
    id: 'cs-41',
    statement:
      'Um campo aceita valores de 1 a 100. Quais valores a análise de valor limite sugere testar?',
    options: [
      '0, 1, 100 e 101',
      'Apenas 50',
      'Apenas 1 e 100',
      'Todos os valores de 1 a 100'
    ],
    answer: 0
  },
  {
    id: 'cs-42',
    statement:
      'Após corrigir um defeito, o time reexecuta o caso que falhou e também um conjunto de testes já aprovados. Que testes são esses?',
    options: [
      'Teste de confirmação e teste de regressão, respectivamente',
      'Teste de sistema e teste de aceite',
      'Teste funcional e não funcional',
      'Teste de componente e de integração'
    ],
    answer: 0
  },
  {
    id: 'cs-43',
    statement:
      'A equipe testa há meses com o mesmo conjunto de casos e quase não encontra defeitos novos. Qual princípio explica isso?',
    options: [
      'A degradação (paradoxo) dos testes',
      'O agrupamento de defeitos',
      'A falácia da ausência de defeitos',
      'A dependência de contexto'
    ],
    answer: 0
  },
  {
    id: 'cs-44',
    statement:
      'Um sistema se comporta de forma diferente conforme o pedido esteja aberto, pago ou cancelado. Qual técnica é a mais adequada?',
    options: ['Transição de estados', 'Particionamento de equivalência', 'Cobertura de decisão', 'Checklist'],
    answer: 0
  },
  {
    id: 'cs-45',
    statement:
      'Uma regra de negócio depende de três condições combinadas. Qual técnica cobre melhor essas combinações?',
    options: ['Tabela de decisão', 'Valor limite', 'Teste exploratório', 'Cobertura de código'],
    answer: 0
  },
  {
    id: 'cs-46',
    statement: 'O prazo encurtou e não é possível testar tudo. Qual o critério correto para priorizar?',
    options: [
      'O risco: maior probabilidade e maior impacto primeiro',
      'A ordem dos requisitos no documento',
      'A facilidade de execução dos testes',
      'A preferência do time de desenvolvimento'
    ],
    answer: 0
  },
  {
    id: 'cs-47',
    statement: 'Um defeito derruba o sistema, mas ocorre em uma função usada uma vez por ano. Como classificá-lo?',
    options: [
      'Severidade alta e prioridade possivelmente baixa',
      'Severidade baixa e prioridade alta',
      'Severidade e prioridade sempre altas',
      'Severidade e prioridade são a mesma coisa'
    ],
    answer: 0
  },
  {
    id: 'cs-48',
    statement: 'Em qual nível de teste se verifica se o sistema atende às necessidades do negócio?',
    options: ['Teste de aceite', 'Teste de componente', 'Teste de integração', 'Teste de sistema'],
    answer: 0
  },
  {
    id: 'cs-49',
    statement: 'O time quer automatizar os testes exploratórios. Qual a orientação correta?',
    options: [
      'Testes exploratórios dependem de julgamento humano e não são bons candidatos à automação',
      'Automatizar tudo é sempre o melhor caminho',
      'Automatizar exploratórios reduz o custo de manutenção',
      'Basta gravar a sessão e reproduzi-la'
    ],
    answer: 0
  },
  {
    id: 'cs-50',
    statement: 'A equipe quer encerrar os testes porque o prazo acabou. Qual a conduta correta?',
    options: [
      'Avaliar os critérios de saída definidos e comunicar os riscos residuais',
      'Encerrar imediatamente, pois o prazo manda',
      'Continuar testando indefinidamente',
      'Encerrar e registrar os testes pendentes como aprovados'
    ],
    answer: 0
  }
];
