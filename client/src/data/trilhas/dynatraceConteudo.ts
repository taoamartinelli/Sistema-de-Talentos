import { Module } from '../trilha360';
import { TrackOverview } from '../../components/TrackPage';

/**
 * Trilha Dynatrace Associate — 12 guias de estudo oficiais da preparação.
 */

export const DYNATRACE_OVERVIEW: TrackOverview = {
  title: 'Preparação para a certificação Dynatrace Associate',
  intro:
    'Doze guias de estudo cobrindo a plataforma Dynatrace de ponta a ponta: da topologia do Smartscape® e da linguagem DQL até rastreamento distribuído, monitoramento de usuários reais, automação e segurança. Cada módulo traz os conceitos, as tabelas de referência e as questões resolvidas no estilo da prova.',
  pillars: [
    'Topologia do Smartscape® e modos do OneAgent',
    'Dynatrace Query Language (DQL) sobre o Grail™',
    'Métricas, logs, eventos e rastreamento distribuído',
    'Experiência do usuário: RUM, Apdex e Synthetic',
    'Business Events, Dashboards e Notebooks',
    'Automação com Workflows e segurança de dados'
  ],
  audience: [
    'Quem vai prestar a certificação Dynatrace Associate',
    'Times de SRE, operações e observabilidade',
    'Desenvolvedores que precisam investigar performance em produção'
  ],
  prerequisite:
    'É desejável familiaridade com aplicações web e infraestrutura. Os módulos partem dos conceitos e avançam até consultas e automações.',
  completion: [
    'Explicar as camadas do Smartscape® e os modos do OneAgent',
    'Escrever consultas DQL com filter, summarize, makeTimeseries e parse',
    'Escolher a visualização correta para cada cenário de dashboard',
    'Interpretar traces, spans e a propagação de contexto W3C',
    'Diferenciar RUM de Synthetic e calcular a classificação do Apdex',
    'Capturar Business Events e automatizar respostas com Workflows',
    'Aplicar mascaramento de PII e entender o Davis® Security Score'
  ]
};

export const DYNATRACE_MODULES: Module[] = [
  {
    id: 'dyn-1',
    number: 1,
    title: 'Infrastructure & Kubernetes',
    objective:
      'Entender a topologia do Smartscape®, os modos do OneAgent e a integração com Kubernetes via Dynatrace Operator.',
    topics: [
      {
        title: 'Smartscape® — as 5 camadas topológicas',
        items: [
          '1. Application Layer (topo): Web e Mobile Apps, monitores sintéticos',
          '2. Service Layer: endpoints de API, web services, chamadas a banco',
          '3. Process Group Layer: JVMs, processos Node.js, contêineres, pods',
          '4. Host Layer: VMs, servidores físicos, nós Kubernetes',
          '5. Data Center Layer (base): regiões de nuvem e data centers locais'
        ]
      },
      {
        title: 'Modos do OneAgent',
        items: [
          'Full-Stack Monitoring: observabilidade completa — código, infraestrutura, RUM e PurePath®',
          'Infrastructure Monitoring: métricas de SO e contêineres, sem injeção em código nem PurePath®'
        ]
      },
      {
        title: 'Kubernetes e o Dynatrace Operator (DynaKube)',
        items: [
          'CloudNativeFullStack (recomendado): usa CSI Driver e webhook de admissão para injetar o OneAgent sem reiniciar os nós',
          'ActiveGate no K8s: conecta ao API Server para consultar kube-state-metrics (deployments, quotas, namespaces)',
          'Captura eventos como OOMKilled e CrashLoopBackOff'
        ]
      },
      {
        title: 'Questão resolvida',
        text: 'O que significa K8S_OOM_KILLED? O contêiner do Pod estourou o limite de memória configurado no manifesto e foi encerrado pelo kernel do sistema operacional.'
      }
    ],
    outcome:
      'Reconhecer as camadas do Smartscape®, escolher o modo de OneAgent adequado e entender como o Dynatrace se integra ao Kubernetes.'
  },
  {
    id: 'dyn-2',
    number: 2,
    title: 'Dynatrace Query Language (DQL)',
    objective:
      'Dominar a linguagem de consulta do Grail™: estrutura em pipeline, comandos fundamentais e boas práticas de performance.',
    topics: [
      {
        title: 'Arquitetura Grail™ e o pipeline DQL',
        items: [
          'Estrutura em pipeline: o resultado de um comando alimenta o próximo, via operador |',
          'Schema-on-read: os dados são gravados sem esquema; a estrutura é extraída na consulta',
          'Modelagem unificada: logs, métricas, eventos, spans, bizevents e entidades na mesma linguagem'
        ]
      },
      {
        title: 'Dica essencial para o exame',
        text: 'A ordem das etapas impacta drasticamente a performance. Aplique o filter o mais cedo possível para reduzir o volume processado nos estágios seguintes.'
      },
      {
        title: 'Comandos fundamentais',
        items: [
          'fetch — carrega os dados de uma tabela/fonte',
          'filter — filtra registros por condições lógicas',
          'fields — seleciona, projeta ou renomeia os campos exibidos',
          'fieldsAdd — adiciona campos calculados sem remover os existentes',
          'fieldsRemove — remove campos do resultado',
          'summarize — agrupa e consolida com count, avg, max, min, sum',
          'sort — ordena em ordem ascendente ou descendente',
          'limit — restringe o número de registros retornados',
          'parse — extrai dados estruturados de strings não estruturadas',
          'makeTimeseries — gera séries temporais para gráficos',
          'lookup — cruza e enriquece dados entre duas fontes'
        ]
      },
      {
        title: 'Principais fontes de dados',
        items: [
          'fetch logs — registros coletados pelo OneAgent (status, loglevel, content, host.name)',
          'fetch events — eventos do sistema, alertas e problemas do Davis® AI',
          'fetch metrics — métricas numéricas por metric.key',
          'fetch dt.entity.<tipo> — dados topológicos das entidades monitoradas',
          'fetch bizevents — eventos de negócio',
          'fetch spans — dados de rastreamento distribuído'
        ]
      },
      {
        title: 'summarize x makeTimeseries',
        text: 'summarize condensa registros em tabelas de resumo, sem eixo temporal contínuo. makeTimeseries divide o tempo em intervalos (interval: 5m) e preenche lacunas — é a escolha correta para gráficos de linha.'
      },
      {
        title: 'Parsing com pattern matching',
        items: [
          'LD (Line Data) — captura qualquer caractere até o delimitador',
          'INT / DOUBLE — captura números inteiros ou decimais',
          'WORD — captura uma palavra sem espaços',
          'IP / TIMESTAMP — matchers específicos para IP e data/hora'
        ]
      },
      {
        title: 'Checklist final',
        items: [
          'Palavras-chave DQL são case-insensitive; valores de string e campos JSON são case-sensitive',
          'O filter vem logo após o fetch',
          'fields substitui a lista de campos; fieldsAdd apenas acrescenta',
          'O limit vem no fim da query, depois do sort'
        ]
      }
    ],
    outcome:
      'Escrever consultas DQL corretas e eficientes, escolhendo entre tabela consolidada e série temporal conforme o objetivo.'
  },
  {
    id: 'dyn-3',
    number: 3,
    title: 'Metrics & Data Explorer',
    objective: 'Consultar e agregar séries temporais numéricas, escolhendo a agregação correta para cada caso.',
    topics: [
      {
        title: 'O que são métricas',
        text: 'Séries temporais numéricas identificadas por uma Metric Key (ex.: dt.host.cpu.usage) e enriquecidas com dimensões, consultáveis no Grail™ via fetch metrics.'
      },
      {
        title: 'Tipos de agregação',
        items: [
          'avg — valor médio no período; uso contínuo de CPU ou memória',
          'max / min — picos ou vales extremos; latência máxima, uso máximo de disco',
          'sum — acúmulo numérico; volume total de bytes ou requisições',
          'count — quantidade de amostras; frequência de amostragem',
          'percentile (P90/P95) — valor abaixo do qual cai a porcentagem das amostras; análise de SLO/SLA ignorando outliers'
        ]
      },
      {
        title: 'Questão resolvida',
        text: 'Qual agregação escolher para SLO de latência? Percentil (P95), porque desconsidera outliers e reflete a experiência da maioria dos usuários.'
      }
    ],
    outcome: 'Escolher a agregação adequada e montar consultas de métricas para gráficos e KPIs.'
  },
  {
    id: 'dyn-4',
    number: 4,
    title: 'Logs & Events',
    objective:
      'Entender a ingestão automática de logs no Grail™ e a hierarquia de severidade dos eventos que alimentam o Davis® AI.',
    topics: [
      {
        title: 'Log Management no Grail™',
        text: 'O OneAgent detecta e ingere automaticamente arquivos de log em sistemas operacionais e contêineres, sem configuração manual de rotas, enriquecendo cada linha com a topologia do Smartscape® (host.name, k8s.pod.name).'
      },
      {
        title: 'Severidade dos eventos, da maior para a menor prioridade',
        items: [
          'AVAILABILITY — componente totalmente inacessível (host desligado, serviço fora do ar)',
          'ERROR — aumento em taxas de erro ou exceções (HTTP 500 acima do limite)',
          'PERFORMANCE — degradação ou lentidão (resposta de 200 ms para 3 s)',
          'RESOURCE — saturação de recursos (memória em 98%, disco em 95%)',
          'CUSTOM_ALERT / INFO — alertas manuais e eventos informativos (deployments, mudanças de configuração)'
        ]
      },
      {
        title: 'Mascaramento de PII',
        items: [
          'Log Processing Rules: regras regex aplicadas na ingestão para ocultar cartões, senhas e PII',
          'Importante: se o dado foi gravado bruto no Grail™, ele permanece visível no histórico'
        ]
      }
    ],
    outcome:
      'Consultar logs e eventos por DQL e classificar corretamente a severidade de cada tipo de evento.'
  },
  {
    id: 'dyn-5',
    number: 5,
    title: 'Distributed Tracing (PurePath®)',
    objective:
      'Compreender rastreamento distribuído, a tecnologia PurePath® e a integração com OpenTelemetry e o padrão W3C.',
    topics: [
      {
        title: 'Conceitos de rastreamento distribuído',
        items: [
          'Trace: a transação/requisição inteira, do início ao fim',
          'Span: a menor unidade de trabalho dentro de um trace (chamada HTTP, consulta SQL)',
          'Propagação de contexto: injeta e extrai cabeçalhos padronizados (W3C Trace Context) para manter a continuidade entre serviços'
        ]
      },
      {
        title: 'Tecnologia PurePath®',
        items: [
          'Instrumentação automática: o OneAgent injeta bytecode em tempo de execução, sem alterar o código-fonte',
          'Profundidade: captura métodos, chamadas SQL com parâmetros anonimizados, exceções e uso de CPU por thread',
          'End-to-end: conecta a experiência do usuário no navegador (RUM) até o banco de dados'
        ]
      },
      {
        title: 'OpenTelemetry e padronização W3C',
        items: [
          'W3C Trace Context: padrão HTTP com traceparent e tracestate',
          'Trace ID: identificador único de 128 bits da transação completa',
          'Span ID: identificador único de 64 bits de uma operação, mapeando a hierarquia pai/filho',
          'OpenTelemetry Ingest: ingestão nativa OTLP, processada na tabela spans do Grail™'
        ]
      },
      {
        title: 'Análise causal com Davis® AI',
        items: [
          'Smartscape® + PurePath®: a IA entende a dependência entre microsserviços e mapeia a propagação da lentidão',
          'Bottleneck analysis: identifica se a causa é CPU, rede, lock de threads ou consulta ao banco'
        ]
      },
      {
        title: 'Questões resolvidas',
        items: [
          'Instrumentação manual é necessária? Não — o OneAgent instrumenta automaticamente em nível de bytecode',
          'OpenTelemetry: o Dynatrace consome dados OTel nativamente via protocolo OTLP'
        ]
      }
    ],
    outcome:
      'Ler um PurePath®, entender a hierarquia de spans e explicar como o contexto se propaga entre serviços.'
  },
  {
    id: 'dyn-6',
    number: 6,
    title: 'Real User Monitoring (RUM)',
    objective:
      'Analisar a experiência de usuários reais: tipos de ação, cálculo do Apdex, sessões e Session Replay.',
    topics: [
      {
        title: 'Visão geral do RUM',
        items: [
          'Captura passivamente interações de usuários reais em aplicações web, mobile e SPAs',
          'Tag RUM JS: o script ruxitagentjs é injetado automaticamente pelo OneAgent',
          'Erros de frontend: exceções JavaScript, falhas AJAX/XHR e códigos HTTP 4xx/5xx'
        ]
      },
      {
        title: 'Tipos de User Action',
        items: [
          'Load Action: navegação inicial / carregamento completo da página',
          'XHR / Fetch Action: requisição assíncrona em SPAs, sem recarregar a página',
          'Custom Action: ação personalizada criada via API JS (dtrum.actionName())'
        ]
      },
      {
        title: 'Métrica Apdex',
        items: [
          'Satisfeito: tempo menor ou igual a T',
          'Tolerante: tempo entre T e 4T',
          'Frustrado: tempo maior que 4T OU qualquer ação que resulte em erro'
        ],
        text: 'Regra de ouro da prova: qualquer User Action que resulte em erro é classificada automaticamente como frustrada, independentemente do tempo de resposta.'
      },
      {
        title: 'Sessões e Session Replay',
        items: [
          'A sessão encerra após 30 minutos de inatividade, 200 User Actions ou 6 horas de duração',
          'Session Replay reproduz a experiência visual do usuário, com mascaramento automático de campos (privacy by default)'
        ]
      }
    ],
    outcome:
      'Interpretar métricas de experiência do usuário e classificar corretamente ações satisfeitas, toleradas e frustradas.'
  },
  {
    id: 'dyn-7',
    number: 7,
    title: 'Synthetic Monitoring',
    objective:
      'Testar proativamente disponibilidade e desempenho com monitores sintéticos, escolhendo o tipo e a localização corretos.',
    topics: [
      {
        title: 'RUM x Synthetic',
        text: 'RUM é passivo: captura a navegação de usuários reais. Synthetic é proativo: usa robôs simulados para testar rotas e fluxos continuamente, inclusive sem tráfego real.'
      },
      {
        title: 'Tipos de monitor',
        items: [
          'HTTP Monitor: chamadas HTTP/HTTPS sequenciais, sem renderizar HTML/JS — ideal para APIs REST/SOAP',
          'Browser Monitor: abre um Chrome headless e carrega a página completa — mede carregamento, LCP e DOM Interactive',
          'Browser Clickpath: simula um fluxo de múltiplos passos (login, checkout, cadastro)'
        ]
      },
      {
        title: 'Localizações públicas e privadas',
        items: [
          'Public Locations: mantidas pela Dynatrace em nuvens públicas, simulam o acesso global',
          'Private Locations: instaladas na infraestrutura do cliente com um ActiveGate com a capacidade Synthetic Engine habilitada'
        ]
      },
      {
        title: 'Segurança e alertas',
        items: [
          'Credential Vault: guarda senhas e tokens criptografados para uso em clickpaths',
          'Retry mechanism: reteste automático em caso de falha, evitando falsos positivos'
        ]
      },
      {
        title: 'Questões resolvidas',
        items: [
          'Qual monitor para APIs JSON rápidas? HTTP Monitor, mais leve e econômico',
          'Como monitorar sistemas internos sem internet? Criando uma Private Synthetic Location via ActiveGate na rede interna'
        ]
      }
    ],
    outcome: 'Escolher o tipo de monitor e a localização adequados a cada cenário de teste proativo.'
  },
  {
    id: 'dyn-8',
    number: 8,
    title: 'Business Events (BizEvents)',
    objective:
      'Transformar telemetria técnica em dados de negócio em tempo real e consultá-los no Grail™.',
    topics: [
      {
        title: 'O que são Business Events',
        text: 'Transformam telemetria técnica em dados operacionais de negócio em tempo real — pedidos efetuados, PIX realizados, logins — armazenados na tabela bizevents do Grail™.'
      },
      {
        title: 'Métodos de captura',
        items: [
          'OneAgent BizEvent Capture: extrai dados de payload HTTP (JSON/XML) ou métodos no servidor, sem alterar código — compras em e-commerce, geração de boletos',
          'Ingest API HTTP: envio de JSONs estruturados via POST para /api/v2/bizevents/ingest — sistemas legados, ESBs, barramentos',
          'RUM JS API: disparado no navegador com dtrum.sendBizEvent() — cliques em botões de conversão'
        ]
      },
      {
        title: 'Campos padrão obrigatórios',
        items: [
          'event.type: define o tipo da transação (ex.: com.loja.checkout)',
          'event.provider: identifica o sistema de origem (ex.: checkout-service)'
        ]
      },
      {
        title: 'Questão resolvida',
        text: 'É preciso alterar o código para capturar valores em APIs Java? Não — o OneAgent Business Event Capture extrai o campo do payload HTTP automaticamente.'
      }
    ],
    outcome: 'Capturar eventos de negócio pelo método adequado e consultá-los com DQL.'
  },
  {
    id: 'dyn-9',
    number: 9,
    title: 'Dynatrace Dashboards',
    objective:
      'Construir painéis com DQL, escolhendo a visualização certa e usando variáveis dinâmicas e compartilhamento.',
    topics: [
      {
        title: 'Visão geral',
        items: [
          'Centralizam KPIs e métricas de SLO para SRE, operações e negócio',
          'Modern: app Dashboards nativa, baseada em DQL',
          'Classic: widgets pré-configurados e seletores de métricas'
        ]
      },
      {
        title: 'Tipos de visualização',
        items: [
          'Line Chart: evolução temporal de métricas contínuas',
          'Area Chart: tendências acumuladas e volume proporcional no tempo',
          'Bar Chart: comparação discreta entre categorias',
          'Single Value: um KPI numérico em destaque',
          'Table: listagem detalhada de registros, logs ou top entidades',
          'Pie / Donut: proporção das partes em relação ao todo',
          'Honeycomb: status e saúde de um grande número de entidades ao mesmo tempo'
        ]
      },
      {
        title: 'Regra de ouro para a prova',
        text: 'Para gráfico de linha contínuo no tempo, nunca use summarize agrupando por timestamp — a forma correta e nativa é makeTimeseries.'
      },
      {
        title: 'Variáveis dinâmicas',
        text: 'Permitem filtrar os dados de todo o painel interativamente (por exemplo, escolher um host) sem editar o código DQL.'
      },
      {
        title: 'Compartilhamento, permissões e gestão',
        items: [
          'Privacidade por padrão: um dashboard novo é privado, visível apenas ao criador',
          'View mode permite interagir com filtros; Edit mode permite alterar tiles',
          'Exportação e importação em JSON, facilitando versionamento via IaC'
        ]
      },
      {
        title: 'Cenário resolvido',
        text: 'Visualizar o uso de memória de 50 servidores sem poluir a tela: usar Honeycomb (favos) ou uma tabela ordenada por consumo.'
      }
    ],
    outcome:
      'Montar dashboards legíveis, com a visualização adequada ao volume de dados e ao tipo de análise.'
  },
  {
    id: 'dyn-10',
    number: 10,
    title: 'Dynatrace Notebooks',
    objective:
      'Usar notebooks para investigação ad-hoc, análise de causa-raiz e documentação colaborativa.',
    topics: [
      {
        title: 'O que são',
        text: 'Ferramenta interativa baseada em documentos que combina código DQL, gráficos, texto em Markdown e blocos executáveis — semelhante ao Jupyter.'
      },
      {
        title: 'Diferença chave para o exame',
        items: [
          'Dashboards: monitoramento contínuo de KPIs e métricas padronizadas',
          'Notebooks: investigação ad-hoc, análise de causa-raiz, experimentação de DQL e documentação (playbooks, post-mortems)'
        ]
      },
      {
        title: 'Tipos de seção',
        items: [
          'DQL Query Section: executa consultas diretas no Grail, com tabelas e gráficos',
          'Markdown Section: texto formatado para contexto, relatórios e instruções',
          'Code / Execution Section: scripts e automações (JavaScript/TypeScript/AppEngine)'
        ]
      },
      {
        title: 'Casos de uso principais',
        items: [
          'Investigação de incidentes e causa-raiz, cruzando logs, métricas e traces',
          'Relatórios post-mortem e runbooks operacionais',
          'Prototipagem de queries DQL antes de levá-las a dashboards ou alertas'
        ]
      },
      {
        title: 'Recursos interativos',
        items: [
          'Timeframe global no topo, com cada seção podendo sobrescrever o período',
          'Fetch & pivot direto: clicar em um valor da tabela dispara novos filtros',
          'Conversão de seções DQL em tiles de dashboard'
        ]
      }
    ],
    outcome:
      'Escolher entre dashboard e notebook conforme o objetivo e montar um documento de investigação completo.'
  },
  {
    id: 'dyn-11',
    number: 11,
    title: 'Workflows & Automation',
    objective:
      'Automatizar respostas e remediações conectando o Grail™, o Davis® AI e ferramentas de terceiros.',
    topics: [
      {
        title: 'AutomationEngine',
        text: 'Plataforma de orquestração no-code/low-code que conecta a observabilidade do Grail™, a inteligência do Davis® AI e ferramentas externas (Slack, Jira, ServiceNow, Ansible, Kubernetes) para auto-remediação.'
      },
      {
        title: 'Componentes e triggers',
        items: [
          'Event-Based Trigger: disparado em tempo real na criação/fechamento de problemas do Davis®',
          'Schedule-Based Trigger: execução agendada por expressão Cron — relatórios diários, por exemplo',
          'Manual / Webhook Trigger: sob demanda ou via API HTTP POST, para integrações externas'
        ]
      },
      {
        title: 'Passagem de contexto e variáveis',
        items: [
          '{{ event() }} — acessa os metadados do evento de origem',
          "{{ result('nome_task') }} — reutiliza o retorno de uma tarefa anterior do fluxo"
        ]
      },
      {
        title: 'Questões resolvidas',
        items: [
          'Trigger para relatórios diários agendados: Schedule-Based com expressão Cron',
          'Vantagem da auto-remediação: redução do MTTR, fechando o ciclo de correção sem intervenção manual'
        ]
      }
    ],
    outcome: 'Desenhar um workflow com o trigger correto e reaproveitar o contexto entre as tarefas.'
  },
  {
    id: 'dyn-12',
    number: 12,
    title: 'Segurança e Privacidade',
    objective:
      'Proteger dados sensíveis, entender o Davis® Security Score e segregar visibilidade com Management Zones.',
    topics: [
      {
        title: 'Proteção e mascaramento de dados (PII / GDPR)',
        items: [
          'SQL Bind Parameters: substitui valores de queries SQL por ? no OneAgent antes do envio',
          'RUM & Session Replay: máscaras ativas por padrão no cliente, ocultando senhas e cartões',
          'Log Processing Redaction: regras regex no pipeline de ingestão do Grail™'
        ]
      },
      {
        title: 'Dynatrace Application Security',
        items: [
          'Davis® Security Score (DSS): ajusta o risco teórico do CVSS considerando o contexto real de execução, exposição à internet e acesso a banco de dados',
          'RVA (Runtime Vulnerability Analytics): detecção de bibliotecas vulneráveis em tempo de execução',
          'RAP (Runtime Application Protection): bloqueio ativo de ataques em execução, como SQL Injection'
        ]
      },
      {
        title: 'IAM e Management Zones',
        text: 'Management Zones são a segregação lógica que restringe a visibilidade das equipes por tags, ambientes e namespaces.'
      },
      {
        title: 'Questão resolvida',
        text: 'Por que o DSS difere do CVSS 10.0? Porque leva em conta o risco real no ambiente — se o servidor não está exposto à internet, o score diminui.'
      }
    ],
    outcome:
      'Aplicar mascaramento na ingestão, interpretar o Davis® Security Score e restringir visibilidade por Management Zone.'
  }
];
