import { SimuladoQuestion } from '../trilha360';

/** Simulado de conclusão de cada módulo da trilha Dynatrace: 5 questões por módulo. */
export const DYNATRACE_MODULE_QUIZZES: Record<string, SimuladoQuestion[]> = {
  'dyn-1': [
    {
      id: 'dq1-1',
      statement: 'Qual é a ordem correta das camadas do Smartscape®, do topo para a base?',
      options: [
        'Application → Service → Process Group → Host → Data Center',
        'Host → Application → Service → Data Center → Process Group',
        'Data Center → Host → Application → Service → Process Group',
        'Service → Application → Host → Process Group → Data Center'
      ],
      answer: 0
    },
    {
      id: 'dq1-2',
      statement: 'O que diferencia o modo Infrastructure Monitoring do Full-Stack?',
      options: [
        'Não injeta código na aplicação nem gera PurePath®',
        'Monitora apenas aplicações web',
        'Exige reinicialização dos nós',
        'Coleta somente logs'
      ],
      answer: 0
    },
    {
      id: 'dq1-3',
      statement: 'Por que o modo CloudNativeFullStack é recomendado no Kubernetes?',
      options: [
        'Usa CSI Driver e webhook de admissão, dispensando reiniciar os nós',
        'Não precisa do Dynatrace Operator',
        'Coleta apenas métricas de host',
        'Funciona sem ActiveGate em qualquer cenário'
      ],
      answer: 0
    },
    {
      id: 'dq1-4',
      statement: 'O evento K8S_OOM_KILLED indica que:',
      options: [
        'O contêiner estourou o limite de memória e foi encerrado pelo kernel',
        'O pod não conseguiu baixar a imagem',
        'O nó ficou sem espaço em disco',
        'O serviço perdeu conexão com o banco'
      ],
      answer: 0
    },
    {
      id: 'dq1-5',
      statement: 'Para que o ActiveGate se conecta ao API Server do Kubernetes?',
      options: [
        'Para consultar kube-state-metrics e capturar eventos do cluster',
        'Para instalar o OneAgent nos nós',
        'Para armazenar logs no Grail™',
        'Para executar workflows de remediação'
      ],
      answer: 0
    }
  ],

  'dyn-2': [
    {
      id: 'dq2-1',
      statement: 'Onde o comando filter deve ser aplicado em uma query DQL?',
      options: [
        'O mais cedo possível, logo após o fetch',
        'Sempre no fim da query',
        'Depois do sort e antes do limit',
        'Somente dentro do summarize'
      ],
      answer: 0
    },
    {
      id: 'dq2-2',
      statement: 'Qual comando gera séries temporais para um gráfico de linha?',
      options: ['makeTimeseries', 'summarize', 'fieldsAdd', 'lookup'],
      answer: 0
    },
    {
      id: 'dq2-3',
      statement: 'Qual a diferença entre fields e fieldsAdd?',
      options: [
        'fields substitui a lista de campos exibidos; fieldsAdd acrescenta colunas',
        'fields acrescenta colunas; fieldsAdd remove campos',
        'Os dois fazem exatamente a mesma coisa',
        'fieldsAdd só funciona com métricas'
      ],
      answer: 0
    },
    {
      id: 'dq2-4',
      statement: 'O que significa dizer que o Grail™ é schema-on-read?',
      options: [
        'Os dados são gravados sem esquema e estruturados no momento da consulta',
        'É preciso definir o esquema antes de ingerir os dados',
        'Só aceita dados em formato JSON',
        'Os campos são fixos e não podem ser criados na consulta'
      ],
      answer: 0
    },
    {
      id: 'dq2-5',
      statement: 'Qual comando extrai dados estruturados de uma mensagem de log?',
      options: ['parse', 'filter', 'sort', 'limit'],
      answer: 0
    }
  ],

  'dyn-3': [
    {
      id: 'dq3-1',
      statement: 'Qual agregação é a mais indicada para um SLO de latência?',
      options: [
        'Percentil (P95), porque ignora outliers',
        'Máximo, porque considera o pior caso',
        'Soma, porque acumula os tempos',
        'Contagem, porque mede o volume'
      ],
      answer: 0
    },
    {
      id: 'dq3-2',
      statement: 'O que identifica uma métrica no Dynatrace?',
      options: [
        'A Metric Key, como dt.host.cpu.usage',
        'O nome do dashboard',
        'O id do problema no Davis®',
        'O nome do arquivo de log'
      ],
      answer: 0
    },
    {
      id: 'dq3-3',
      statement: 'Qual agregação usar para o volume total de requisições?',
      options: ['sum', 'avg', 'min', 'percentile'],
      answer: 0
    },
    {
      id: 'dq3-4',
      statement: 'A agregação count mede:',
      options: [
        'A quantidade de amostras coletadas',
        'A média dos valores',
        'O maior valor do período',
        'A soma dos valores'
      ],
      answer: 0
    },
    {
      id: 'dq3-5',
      statement: 'Qual comando usar para consultar métricas no Grail™?',
      options: ['fetch metrics', 'fetch logs', 'fetch spans', 'fetch bizevents'],
      answer: 0
    }
  ],

  'dyn-4': [
    {
      id: 'dq4-1',
      statement: 'Qual categoria de evento tem a maior prioridade?',
      options: ['AVAILABILITY', 'PERFORMANCE', 'RESOURCE', 'INFO'],
      answer: 0
    },
    {
      id: 'dq4-2',
      statement: 'Memória em 98% e disco em 95% geram qual tipo de evento?',
      options: ['RESOURCE', 'ERROR', 'AVAILABILITY', 'CUSTOM_ALERT'],
      answer: 0
    },
    {
      id: 'dq4-3',
      statement: 'Como o OneAgent trata os arquivos de log?',
      options: [
        'Detecta e ingere automaticamente, sem configurar rotas manualmente',
        'Exige que cada caminho de arquivo seja cadastrado',
        'Coleta apenas logs de aplicações Java',
        'Só coleta logs enviados por API'
      ],
      answer: 0
    },
    {
      id: 'dq4-4',
      statement: 'Um dado sensível gravado sem mascaramento no Grail™:',
      options: [
        'Permanece visível no histórico — o mascaramento precisa ocorrer na ingestão',
        'É removido automaticamente após 24 horas',
        'Fica oculto para todos os usuários',
        'É mascarado na consulta'
      ],
      answer: 0
    },
    {
      id: 'dq4-5',
      statement: 'Um aumento na taxa de HTTP 500 gera qual categoria de evento?',
      options: ['ERROR', 'RESOURCE', 'INFO', 'AVAILABILITY'],
      answer: 0
    }
  ],

  'dyn-5': [
    {
      id: 'dq5-1',
      statement: 'Qual a diferença entre trace e span?',
      options: [
        'O trace é a transação inteira; o span é uma operação dentro dela',
        'O span é a transação inteira; o trace é uma operação',
        'São sinônimos',
        'O trace só existe em aplicações Java'
      ],
      answer: 0
    },
    {
      id: 'dq5-2',
      statement: 'O PurePath® exige instrumentação manual do código?',
      options: [
        'Não — o OneAgent injeta bytecode automaticamente em tempo de execução',
        'Sim, é preciso anotar cada método',
        'Sim, apenas em aplicações .NET',
        'Somente quando há OpenTelemetry'
      ],
      answer: 0
    },
    {
      id: 'dq5-3',
      statement: 'Quais cabeçalhos fazem parte do W3C Trace Context?',
      options: [
        'traceparent e tracestate',
        'traceid e spanid',
        'x-request-id e x-correlation-id',
        'authorization e cookie'
      ],
      answer: 0
    },
    {
      id: 'dq5-4',
      statement: 'Como o Dynatrace consome dados de OpenTelemetry?',
      options: [
        'Nativamente via OTLP, processando os spans no Grail™',
        'Somente após conversão manual para o formato PurePath®',
        'Não há suporte a OpenTelemetry',
        'Apenas por meio de arquivos CSV'
      ],
      answer: 0
    },
    {
      id: 'dq5-5',
      statement: 'Qual o tamanho do Trace ID?',
      options: ['128 bits', '64 bits', '32 bits', '256 bits'],
      answer: 0
    }
  ],

  'dyn-6': [
    {
      id: 'dq6-1',
      statement: 'Uma página carregou em 0,5 s, mas houve uma exceção JavaScript. Como o Apdex classifica?',
      options: [
        'Frustrada, porque qualquer ação com erro é automaticamente frustrada',
        'Satisfeita, porque o tempo foi baixo',
        'Tolerante, por causa do erro',
        'Não é classificada'
      ],
      answer: 0
    },
    {
      id: 'dq6-2',
      statement: 'Quando uma ação é classificada como tolerante?',
      options: [
        'Quando o tempo fica entre T e 4T',
        'Quando o tempo é menor que T',
        'Quando o tempo passa de 4T',
        'Quando ocorre um erro'
      ],
      answer: 0
    },
    {
      id: 'dq6-3',
      statement: 'É necessário alterar o HTML para ativar o RUM?',
      options: [
        'Não — o OneAgent injeta a tag JS automaticamente',
        'Sim, é preciso colar o script manualmente',
        'Sim, apenas em SPAs',
        'Somente em aplicações mobile'
      ],
      answer: 0
    },
    {
      id: 'dq6-4',
      statement: 'Quando uma User Session é encerrada?',
      options: [
        'Após 30 min de inatividade, 200 User Actions ou 6 horas de duração',
        'Somente quando o usuário fecha o navegador',
        'Após 10 minutos de inatividade',
        'Após 50 User Actions'
      ],
      answer: 0
    },
    {
      id: 'dq6-5',
      statement: 'Uma requisição assíncrona em uma SPA gera qual tipo de ação?',
      options: ['XHR / Fetch Action', 'Load Action', 'Custom Action', 'Synthetic Action'],
      answer: 0
    }
  ],

  'dyn-7': [
    {
      id: 'dq7-1',
      statement: 'Qual monitor é mais indicado para testar uma API JSON?',
      options: [
        'HTTP Monitor, por ser mais leve e econômico',
        'Browser Monitor, por renderizar a página',
        'Browser Clickpath, por simular o usuário',
        'Nenhum — APIs não são monitoradas'
      ],
      answer: 0
    },
    {
      id: 'dq7-2',
      statement: 'Como monitorar um sistema interno sem acesso pela internet?',
      options: [
        'Criando uma Private Location com ActiveGate e Synthetic Engine',
        'Usando apenas Public Locations',
        'Liberando o sistema na internet',
        'Usando somente RUM'
      ],
      answer: 0
    },
    {
      id: 'dq7-3',
      statement: 'Qual monitor simula login e checkout em vários passos?',
      options: ['Browser Clickpath', 'HTTP Monitor', 'Browser Monitor', 'Log Monitor'],
      answer: 0
    },
    {
      id: 'dq7-4',
      statement: 'Para que serve o Credential Vault?',
      options: [
        'Guardar senhas e tokens criptografados usados nos scripts',
        'Armazenar os resultados dos testes',
        'Guardar as localizações privadas',
        'Registrar os alertas do Davis®'
      ],
      answer: 0
    },
    {
      id: 'dq7-5',
      statement: 'Qual a diferença essencial entre RUM e Synthetic?',
      options: [
        'RUM é passivo com usuários reais; Synthetic é proativo com robôs',
        'RUM só funciona em mobile',
        'Synthetic captura usuários reais',
        'Não há diferença prática'
      ],
      answer: 0
    }
  ],

  'dyn-8': [
    {
      id: 'dq8-1',
      statement: 'Em qual tabela do Grail™ ficam os Business Events?',
      options: ['bizevents', 'logs', 'spans', 'metrics'],
      answer: 0
    },
    {
      id: 'dq8-2',
      statement: 'Quais são os campos padrão obrigatórios de um BizEvent?',
      options: [
        'event.type e event.provider',
        'host.name e k8s.pod.name',
        'trace.id e span.id',
        'metric.key e value'
      ],
      answer: 0
    },
    {
      id: 'dq8-3',
      statement: 'É preciso alterar o código para capturar valores de uma API Java?',
      options: [
        'Não — o OneAgent Business Event Capture extrai do payload HTTP',
        'Sim, é preciso instrumentar o método manualmente',
        'Sim, apenas via RUM JS API',
        'Só é possível com a Ingest API'
      ],
      answer: 0
    },
    {
      id: 'dq8-4',
      statement: 'Qual método usar para capturar um clique de conversão no navegador?',
      options: [
        'RUM JS API, com dtrum.sendBizEvent()',
        'OneAgent BizEvent Capture',
        'Ingest API HTTP',
        'Synthetic Clickpath'
      ],
      answer: 0
    },
    {
      id: 'dq8-5',
      statement: 'Qual método é indicado para sistemas legados e barramentos de integração?',
      options: [
        'Ingest API HTTP, com POST em /api/v2/bizevents/ingest',
        'RUM JS API',
        'Session Replay',
        'Private Synthetic Location'
      ],
      answer: 0
    }
  ],

  'dyn-9': [
    {
      id: 'dq9-1',
      statement: 'Como visualizar o uso de memória de 50 servidores sem poluir a tela?',
      options: [
        'Com um Honeycomb ou uma tabela ordenada por consumo',
        'Com 50 linhas em um único Line Chart',
        'Com um Pie Chart de 50 fatias',
        'Com um Single Value por servidor'
      ],
      answer: 0
    },
    {
      id: 'dq9-2',
      statement: 'Qual comando usar para um gráfico de linha temporal?',
      options: [
        'makeTimeseries com interval definido',
        'summarize agrupando por timestamp',
        'fields com sort',
        'lookup com prefix'
      ],
      answer: 0
    },
    {
      id: 'dq9-3',
      statement: 'Quem enxerga um dashboard recém-criado?',
      options: [
        'Apenas o criador — ele nasce privado',
        'Todos os usuários do ambiente',
        'Somente administradores',
        'Qualquer pessoa com o link'
      ],
      answer: 0
    },
    {
      id: 'dq9-4',
      statement: 'Em que formato os dashboards são exportados e importados?',
      options: ['JSON', 'CSV', 'YAML', 'XML'],
      answer: 0
    },
    {
      id: 'dq9-5',
      statement: 'Para que servem as variáveis dinâmicas em um dashboard?',
      options: [
        'Filtrar todo o painel sem editar o DQL',
        'Criar novos tiles automaticamente',
        'Alterar as permissões de acesso',
        'Exportar o painel'
      ],
      answer: 0
    }
  ],

  'dyn-10': [
    {
      id: 'dq10-1',
      statement: 'Qual ferramenta usar para um post-mortem com texto, gráficos e logs?',
      options: ['Notebooks', 'Dashboards', 'Synthetic Monitor', 'Management Zone'],
      answer: 0
    },
    {
      id: 'dq10-2',
      statement: 'Quais são os tipos de seção de um notebook?',
      options: [
        'DQL Query, Markdown e Code / Execution',
        'Tabela, gráfico e alerta',
        'Trigger, ação e finalização',
        'Host, serviço e aplicação'
      ],
      answer: 0
    },
    {
      id: 'dq10-3',
      statement: 'Qual a diferença entre notebooks e dashboards?',
      options: [
        'Notebooks servem à investigação ad-hoc; dashboards, ao monitoramento contínuo',
        'Notebooks só exibem texto',
        'Dashboards não usam DQL',
        'Não há diferença de finalidade'
      ],
      answer: 0
    },
    {
      id: 'dq10-4',
      statement: 'Como funciona o timeframe em um notebook?',
      options: [
        'Há um seletor global, mas cada seção DQL pode sobrescrever o período',
        'É fixo para todo o documento',
        'Cada seção usa sempre as últimas 24 horas',
        'Não existe seleção de período'
      ],
      answer: 0
    },
    {
      id: 'dq10-5',
      statement: 'O que se pode fazer com uma seção DQL validada em um notebook?',
      options: [
        'Convertê-la em um tile de dashboard permanente',
        'Transformá-la em um monitor sintético',
        'Publicá-la como Management Zone',
        'Enviá-la como Business Event'
      ],
      answer: 0
    }
  ],

  'dyn-11': [
    {
      id: 'dq11-1',
      statement: 'Qual trigger usar para um relatório diário às 08:00?',
      options: [
        'Schedule-Based Trigger com expressão Cron',
        'Event-Based Trigger',
        'Webhook Trigger',
        'Manual Trigger'
      ],
      answer: 0
    },
    {
      id: 'dq11-2',
      statement: 'O que dispara um Event-Based Trigger?',
      options: [
        'A criação ou o fechamento de um problema do Davis®',
        'Um horário agendado',
        'Um clique no dashboard',
        'A ingestão de um log'
      ],
      answer: 0
    },
    {
      id: 'dq11-3',
      statement: 'Para que serve {{ event() }} em um workflow?',
      options: [
        'Acessar os metadados do evento ou problema de origem',
        'Encerrar o fluxo',
        'Criar um novo dashboard',
        'Definir o intervalo de execução'
      ],
      answer: 0
    },
    {
      id: 'dq11-4',
      statement: 'Qual a principal vantagem da auto-remediação?',
      options: [
        'Redução do MTTR, sem intervenção humana manual',
        'Aumento do volume de dados no Grail™',
        'Eliminação da necessidade de monitoramento',
        'Redução do número de dashboards'
      ],
      answer: 0
    },
    {
      id: 'dq11-5',
      statement: "Para que serve {{ result('nome_task') }}?",
      options: [
        'Reutilizar o retorno de uma tarefa executada antes no fluxo',
        'Agendar a próxima execução',
        'Filtrar os eventos de entrada',
        'Encerrar o workflow com erro'
      ],
      answer: 0
    }
  ],

  'dyn-12': [
    {
      id: 'dq12-1',
      statement: 'Por que o Davis® Security Score pode ser menor que o CVSS?',
      options: [
        'Porque considera o contexto real: exposição à internet, execução em memória e acesso a dados',
        'Porque ignora vulnerabilidades críticas',
        'Porque só avalia bibliotecas Java',
        'Porque usa uma escala de 0 a 5'
      ],
      answer: 0
    },
    {
      id: 'dq12-2',
      statement: 'O que fazem os SQL Bind Parameters?',
      options: [
        'Substituem os valores das queries SQL por ? antes do envio',
        'Criptografam o banco de dados',
        'Bloqueiam consultas suspeitas',
        'Registram todas as queries no Grail™'
      ],
      answer: 0
    },
    {
      id: 'dq12-3',
      statement: 'Para que servem as Management Zones?',
      options: [
        'Restringir a visibilidade das equipes por tags, ambientes e namespaces',
        'Definir limites de consumo de dados',
        'Agendar workflows',
        'Configurar monitores sintéticos'
      ],
      answer: 0
    },
    {
      id: 'dq12-4',
      statement: 'O que é o RAP (Runtime Application Protection)?',
      options: [
        'O bloqueio ativo de ataques em tempo de execução, como SQL Injection',
        'A detecção de bibliotecas vulneráveis',
        'O mascaramento de campos no Session Replay',
        'A segregação de acesso por equipe'
      ],
      answer: 0
    },
    {
      id: 'dq12-5',
      statement: 'Como o Session Replay protege dados sensíveis?',
      options: [
        'Com máscaras ativas por padrão no cliente, ocultando senhas e cartões',
        'Removendo a gravação após 24 horas',
        'Criptografando o vídeo no servidor',
        'Desativando a gravação em páginas de login'
      ],
      answer: 0
    }
  ]
};

const first = (moduleId: string, count: number) => DYNATRACE_MODULE_QUIZZES[moduleId].slice(0, count);

/**
 * Simulado final da trilha: 50 questões cobrindo os 12 módulos —
 * 4 de cada módulo (48) e mais 2 de integração.
 */
export const DYNATRACE_SIMULADO: SimuladoQuestion[] = [
  ...first('dyn-1', 4),
  ...first('dyn-2', 4),
  ...first('dyn-3', 4),
  ...first('dyn-4', 4),
  ...first('dyn-5', 4),
  ...first('dyn-6', 4),
  ...first('dyn-7', 4),
  ...first('dyn-8', 4),
  ...first('dyn-9', 4),
  ...first('dyn-10', 4),
  ...first('dyn-11', 4),
  ...first('dyn-12', 4),
  {
    id: 'ds-49',
    statement: 'Qual combinação permite ao Davis® AI mapear a propagação de uma lentidão entre microsserviços?',
    options: [
      'Smartscape® somado ao PurePath®',
      'Session Replay somado ao Credential Vault',
      'Management Zones somadas ao Honeycomb',
      'Ingest API somada ao Cron'
    ],
    answer: 0
  },
  {
    id: 'ds-50',
    statement: 'Uma equipe quer alertar no Slack sempre que um problema de disponibilidade abrir. O que usar?',
    options: [
      'Um workflow com Event-Based Trigger',
      'Um monitor sintético HTTP',
      'Um Business Event via RUM JS API',
      'Uma Management Zone'
    ],
    answer: 0
  }
];
