import { Flashcard } from '../trilha360';

/** 100 flash cards da trilha Dynatrace Associate, distribuídos pelos 12 módulos. */
export const DYNATRACE_FLASHCARDS: Flashcard[] = [
  /* ------------- Módulo 1 — Infrastructure & Kubernetes (7) -------------- */
  { id: 'df-1', moduleId: 'dyn-1', front: 'Quais são as 5 camadas do Smartscape®?', back: 'Application, Service, Process Group, Host e Data Center — do topo para a base.' },
  { id: 'df-4', moduleId: 'dyn-1', front: 'O que é o modo Full-Stack Monitoring?', back: 'Observabilidade completa: código, infraestrutura, RUM e PurePath®.' },
  { id: 'df-5', moduleId: 'dyn-1', front: 'O que o modo Infrastructure Monitoring entrega?', back: 'Métricas de sistema operacional e contêineres, sem injeção em código nem PurePath®.' },
  { id: 'df-6', moduleId: 'dyn-1', front: 'O que é o DynaKube?', back: 'O recurso do Dynatrace Operator que configura o monitoramento em um cluster Kubernetes.' },
  { id: 'df-7', moduleId: 'dyn-1', front: 'Por que CloudNativeFullStack é o modo recomendado no K8s?', back: 'Usa CSI Driver e webhook de admissão para injetar o OneAgent sem reiniciar os nós.' },
  { id: 'df-8', moduleId: 'dyn-1', front: 'Para que serve o ActiveGate no Kubernetes?', back: 'Conectar ao API Server para consultar kube-state-metrics e capturar eventos como OOMKilled e CrashLoopBackOff.' },
  { id: 'df-9', moduleId: 'dyn-1', front: 'O que significa K8S_OOM_KILLED?', back: 'O contêiner estourou o limite de memória do manifesto e foi encerrado pelo kernel do SO.' },

  /* ---------------------- Módulo 2 — DQL (14) ---------------------------- */
  { id: 'df-10', moduleId: 'dyn-2', front: 'O que é o Grail™?', back: 'O data lakehouse causal e sem esquema da Dynatrace, consultado por DQL.' },
  { id: 'df-11', moduleId: 'dyn-2', front: 'Como é a estrutura de uma query DQL?', back: 'Em pipeline: o resultado do comando à esquerda alimenta o comando à direita, separados por |.' },
  { id: 'df-12', moduleId: 'dyn-2', front: 'O que significa schema-on-read?', back: 'Os dados são gravados sem esquema pré-definido; a estrutura é extraída na hora da consulta.' },
  { id: 'df-13', moduleId: 'dyn-2', front: 'Onde colocar o filter na query?', back: 'O mais cedo possível, logo após o fetch, para reduzir o volume processado depois.' },
  { id: 'df-14', moduleId: 'dyn-2', front: 'O que faz o comando fetch?', back: 'Carrega os dados de uma tabela ou fonte: logs, events, metrics, spans, bizevents, dt.entity.*' },
  { id: 'df-15', moduleId: 'dyn-2', front: 'Qual a diferença entre fields e fieldsAdd?', back: 'fields substitui a lista de campos exibidos; fieldsAdd apenas acrescenta novas colunas.' },
  { id: 'df-16', moduleId: 'dyn-2', front: 'O que faz o summarize?', back: 'Agrupa e consolida dados com funções de agregação: count, avg, max, min, sum.' },
  { id: 'df-17', moduleId: 'dyn-2', front: 'O que faz o makeTimeseries?', back: 'Gera séries temporais agregadas em intervalos, para gráficos de linha, área e barras.' },
  { id: 'df-18', moduleId: 'dyn-2', front: 'Qual a diferença entre summarize e makeTimeseries?', back: 'summarize gera tabela sem eixo de tempo contínuo; makeTimeseries divide o tempo em intervalos e preenche lacunas.' },
  { id: 'df-19', moduleId: 'dyn-2', front: 'Para que serve o comando parse?', back: 'Extrair dados estruturados de strings não estruturadas, como o conteúdo de um log.' },
  { id: 'df-20', moduleId: 'dyn-2', front: 'O que faz o comando lookup?', back: 'Cruza e enriquece dados entre duas fontes, como trazer o nome do host para uma consulta de logs.' },
  { id: 'df-21', moduleId: 'dyn-2', front: 'Quais matchers o parse oferece?', back: 'LD (line data), INT, DOUBLE, WORD, IP e TIMESTAMP.' },
  { id: 'df-22', moduleId: 'dyn-2', front: 'DQL é case-sensitive?', back: 'As palavras-chave são case-insensitive, mas valores de string e campos JSON são case-sensitive.' },
  { id: 'df-23', moduleId: 'dyn-2', front: 'Onde entra o limit na query?', back: 'No final, depois do sort.' },

  /* -------------- Módulo 3 — Metrics & Data Explorer (6) ----------------- */
  { id: 'df-24', moduleId: 'dyn-3', front: 'O que é uma métrica no Dynatrace?', back: 'Uma série temporal numérica identificada por uma Metric Key e enriquecida com dimensões.' },
  { id: 'df-26', moduleId: 'dyn-3', front: 'Quando usar a agregação avg?', back: 'Para acompanhar uso contínuo, como CPU ou memória ao longo do tempo.' },
  { id: 'df-27', moduleId: 'dyn-3', front: 'Quando usar max ou min?', back: 'Para identificar picos ou vales extremos, como latência máxima ou uso máximo de disco.' },
  { id: 'df-28', moduleId: 'dyn-3', front: 'Quando usar sum?', back: 'Para acúmulo numérico no intervalo: volume total de bytes ou de requisições.' },
  { id: 'df-30', moduleId: 'dyn-3', front: 'Qual agregação usar em SLO de latência?', back: 'Percentil (P95), porque ignora outliers e reflete a experiência da maioria.' },
  { id: 'df-31', moduleId: 'dyn-3', front: 'Como consultar métricas no Grail™?', back: 'Com fetch metrics, filtrando por metric.key e agregando com makeTimeseries ou summarize.' },

  /* -------------------- Módulo 4 — Logs & Events (8) --------------------- */
  { id: 'df-32', moduleId: 'dyn-4', front: 'Como o OneAgent ingere logs?', back: 'Detecta e ingere automaticamente os arquivos em SO e contêineres, sem configurar rotas manualmente.' },
  { id: 'df-33', moduleId: 'dyn-4', front: 'Com o que cada linha de log é enriquecida?', back: 'Com a topologia do Smartscape®: host.name, k8s.pod.name e demais metadados.' },
  { id: 'df-34', moduleId: 'dyn-4', front: 'Qual severidade de evento tem maior prioridade?', back: 'AVAILABILITY — o componente está totalmente inacessível.' },
  { id: 'df-35', moduleId: 'dyn-4', front: 'O que caracteriza um evento ERROR?', back: 'Aumento em taxas de erro ou exceções, como HTTP 500 acima do limite.' },
  { id: 'df-36', moduleId: 'dyn-4', front: 'O que caracteriza um evento PERFORMANCE?', back: 'Degradação ou lentidão no tempo de resposta.' },
  { id: 'df-37', moduleId: 'dyn-4', front: 'O que caracteriza um evento RESOURCE?', back: 'Saturação de recursos computacionais, como memória em 98% ou disco em 95%.' },
  { id: 'df-38', moduleId: 'dyn-4', front: 'O que são eventos CUSTOM_ALERT / INFO?', back: 'Alertas manuais e eventos informativos, como deployments e mudanças de configuração.' },
  { id: 'df-39', moduleId: 'dyn-4', front: 'Se um log gravou PII sem mascaramento, o que acontece?', back: 'O dado permanece visível no histórico do Grail™ — o mascaramento precisa ocorrer na ingestão.' },

  /* ---------------- Módulo 5 — Distributed Tracing (10) ------------------ */
  { id: 'df-40', moduleId: 'dyn-5', front: 'O que é um trace?', back: 'A transação ou requisição inteira, do início ao fim, atravessando os serviços.' },
  { id: 'df-41', moduleId: 'dyn-5', front: 'O que é um span?', back: 'A menor unidade de trabalho dentro de um trace: uma chamada HTTP, uma consulta SQL.' },
  { id: 'df-42', moduleId: 'dyn-5', front: 'O que é propagação de contexto?', back: 'Injetar e extrair cabeçalhos padronizados (W3C Trace Context) para manter a continuidade do trace entre serviços.' },
  { id: 'df-43', moduleId: 'dyn-5', front: 'O que é o PurePath®?', back: 'A tecnologia proprietária de rastreamento distribuído em nível de código da Dynatrace.' },
  { id: 'df-44', moduleId: 'dyn-5', front: 'É preciso instrumentar o código manualmente?', back: 'Não — o OneAgent injeta bytecode automaticamente em tempo de execução.' },
  { id: 'df-45', moduleId: 'dyn-5', front: 'O que o PurePath® captura?', back: 'Métodos, chamadas SQL com parâmetros anonimizados, exceções e uso de CPU por thread.' },
  { id: 'df-46', moduleId: 'dyn-5', front: 'Quais cabeçalhos compõem o W3C Trace Context?', back: 'traceparent e tracestate.' },
  { id: 'df-47', moduleId: 'dyn-5', front: 'Qual o tamanho do Trace ID e do Span ID?', back: 'Trace ID tem 128 bits; Span ID tem 64 bits.' },
  { id: 'df-48', moduleId: 'dyn-5', front: 'Como o Dynatrace consome dados OpenTelemetry?', back: 'Nativamente, via protocolo OTLP, processando os spans na tabela spans do Grail™.' },
  { id: 'df-49', moduleId: 'dyn-5', front: 'O que a bottleneck analysis identifica?', back: 'Se o gargalo é CPU, rede, lock de threads ou consulta ao banco de dados.' },

  /* ------------------------- Módulo 6 — RUM (9) ------------------------- */
  { id: 'df-50', moduleId: 'dyn-6', front: 'O que é o Real User Monitoring?', back: 'A captura passiva de interações e transações de usuários reais em web, mobile e SPAs.' },
  { id: 'df-51', moduleId: 'dyn-6', front: 'Qual script faz o RUM funcionar?', back: 'O ruxitagentjs, injetado automaticamente pelo OneAgent nos servidores de aplicação suportados.' },
  { id: 'df-52', moduleId: 'dyn-6', front: 'É preciso alterar o HTML para ativar o RUM?', back: 'Não — o OneAgent injeta a tag JS automaticamente nas respostas HTML.' },
  { id: 'df-54', moduleId: 'dyn-6', front: 'O que é uma XHR / Fetch Action?', back: 'Uma requisição assíncrona em SPAs, sem recarregar a página.' },
  { id: 'df-55', moduleId: 'dyn-6', front: 'O que é uma Custom Action?', back: 'Uma ação personalizada criada via API JS, com dtrum.actionName().' },
  { id: 'df-56', moduleId: 'dyn-6', front: 'Como o Apdex classifica uma ação satisfeita?', back: 'Quando o tempo é menor ou igual ao limite T definido.' },
  { id: 'df-57', moduleId: 'dyn-6', front: 'Quando uma ação é tolerante?', back: 'Quando o tempo fica entre T e 4T.' },
  { id: 'df-58', moduleId: 'dyn-6', front: 'Quando uma ação é frustrada?', back: 'Quando o tempo passa de 4T ou quando a ação resulta em erro — independentemente do tempo.' },
  { id: 'df-59', moduleId: 'dyn-6', front: 'Quando uma User Session é encerrada?', back: 'Após 30 minutos de inatividade, 200 User Actions ou 6 horas de duração.' },

  /* ------------------ Módulo 7 — Synthetic Monitoring (7) ---------------- */
  { id: 'df-60', moduleId: 'dyn-7', front: 'Qual a diferença entre RUM e Synthetic?', back: 'RUM é passivo e usa tráfego real; Synthetic é proativo e usa robôs simulados 24/7.' },
  { id: 'df-61', moduleId: 'dyn-7', front: 'O que é o HTTP Monitor?', back: 'Executa chamadas HTTP/HTTPS sequenciais sem renderizar HTML/JS — ideal para APIs.' },
  { id: 'df-62', moduleId: 'dyn-7', front: 'O que é o Browser Monitor?', back: 'Abre um Chrome headless e carrega a página completa, medindo LCP e DOM Interactive.' },
  { id: 'df-63', moduleId: 'dyn-7', front: 'O que é um Browser Clickpath?', back: 'Um monitor que simula um fluxo de múltiplos passos: login, formulários, checkout.' },
  { id: 'df-65', moduleId: 'dyn-7', front: 'Como monitorar um sistema interno sem internet?', back: 'Com uma Private Location, via ActiveGate com a capacidade Synthetic Engine habilitada.' },
  { id: 'df-66', moduleId: 'dyn-7', front: 'Para que serve o Credential Vault?', back: 'Guardar senhas e tokens criptografados para uso em clickpaths, sem expô-los em texto puro.' },
  { id: 'df-67', moduleId: 'dyn-7', front: 'Para que serve o retry mechanism?', back: 'Reteste automático em caso de falha, evitando falso positivo por oscilação de rede.' },

  /* -------------------- Módulo 8 — Business Events (8) ------------------- */
  { id: 'df-68', moduleId: 'dyn-8', front: 'O que são Business Events?', back: 'Telemetria técnica transformada em dados de negócio em tempo real, na tabela bizevents do Grail™.' },
  { id: 'df-69', moduleId: 'dyn-8', front: 'Exemplos de Business Events', back: 'Pedidos efetuados, PIX realizados, logins e conversões.' },
  { id: 'df-70', moduleId: 'dyn-8', front: 'O que é o OneAgent BizEvent Capture?', back: 'A extração de dados do payload HTTP (JSON/XML) ou de métodos no servidor, sem alterar o código.' },
  { id: 'df-71', moduleId: 'dyn-8', front: 'Quando usar a Ingest API HTTP?', back: 'Para sistemas legados, ESBs e barramentos, enviando JSONs via POST para /api/v2/bizevents/ingest.' },
  { id: 'df-72', moduleId: 'dyn-8', front: 'Quando usar a RUM JS API?', back: 'Para eventos de frontend, disparados no navegador com dtrum.sendBizEvent().' },
  { id: 'df-73', moduleId: 'dyn-8', front: 'Quais são os campos padrão obrigatórios?', back: 'event.type (o tipo da transação) e event.provider (o sistema de origem).' },
  { id: 'df-74', moduleId: 'dyn-8', front: 'Precisa alterar o código para capturar valores em APIs Java?', back: 'Não — o OneAgent Business Event Capture extrai o campo do payload HTTP automaticamente.' },
  { id: 'df-75', moduleId: 'dyn-8', front: 'Como consultar bizevents?', back: 'Com fetch bizevents, filtrando por event.type e agregando com summarize.' },

  /* ---------------------- Módulo 9 — Dashboards (8) ---------------------- */
  { id: 'df-76', moduleId: 'dyn-9', front: 'Qual a diferença entre dashboards Modern e Classic?', back: 'Modern usa a app Dashboards nativa baseada em DQL; Classic usa widgets pré-configurados e seletores de métricas.' },
  { id: 'df-77', moduleId: 'dyn-9', front: 'Quando usar Line Chart?', back: 'Para a evolução temporal de métricas contínuas, como CPU ou tempo de resposta.' },
  { id: 'df-78', moduleId: 'dyn-9', front: 'Quando usar Single Value?', back: 'Para destacar um único KPI numérico, como disponibilidade ou total de requisições.' },
  { id: 'df-80', moduleId: 'dyn-9', front: 'Como visualizar 50 servidores sem 50 linhas no gráfico?', back: 'Usando Honeycomb ou uma tabela ordenada por consumo.' },
  { id: 'df-81', moduleId: 'dyn-9', front: 'Qual a regra de ouro para gráficos temporais?', back: 'Nunca usar summarize agrupando por timestamp — use makeTimeseries.' },
  { id: 'df-82', moduleId: 'dyn-9', front: 'Para que servem as variáveis dinâmicas?', back: 'Filtrar todo o painel interativamente sem editar o código DQL.' },
  { id: 'df-83', moduleId: 'dyn-9', front: 'Quem vê um dashboard recém-criado?', back: 'Apenas o criador — ele nasce privado (privacidade por padrão).' },
  { id: 'df-84', moduleId: 'dyn-9', front: 'Em que formato dashboards são exportados?', back: 'JSON, o que facilita o versionamento via infraestrutura como código.' },

  /* ---------------------- Módulo 10 — Notebooks (8) ---------------------- */
  { id: 'df-85', moduleId: 'dyn-10', front: 'O que são Dynatrace Notebooks?', back: 'Documentos interativos que combinam DQL, gráficos, Markdown e blocos executáveis — como o Jupyter.' },
  { id: 'df-86', moduleId: 'dyn-10', front: 'Dashboard ou Notebook para monitoramento contínuo?', back: 'Dashboard — os notebooks servem para investigação ad-hoc e documentação.' },
  { id: 'df-87', moduleId: 'dyn-10', front: 'Que ferramenta usar em um post-mortem com texto, gráficos e logs?', back: 'Notebooks, que mesclam Markdown com consultas DQL interativas no mesmo documento.' },
  { id: 'df-88', moduleId: 'dyn-10', front: 'Quais são os tipos de seção de um notebook?', back: 'DQL Query, Markdown e Code / Execution.' },
  { id: 'df-89', moduleId: 'dyn-10', front: 'O que faz uma Code / Execution Section?', back: 'Executa scripts e automações em JavaScript/TypeScript/AppEngine, como rotinas de remediação.' },
  { id: 'df-90', moduleId: 'dyn-10', front: 'Como funciona o timeframe em um notebook?', back: 'Há um seletor global no topo, mas cada seção DQL pode sobrescrever o período com from/to.' },
  { id: 'df-91', moduleId: 'dyn-10', front: 'O que é fetch & pivot direto?', back: 'Clicar em um valor da tabela para disparar automaticamente novos filtros DQL.' },
  { id: 'df-92', moduleId: 'dyn-10', front: 'Dá para reaproveitar uma seção de notebook?', back: 'Sim — seções DQL podem ser convertidas em tiles de um dashboard permanente.' },

  /* ----------------- Módulo 11 — Workflows & Automation (5 + 3 no complemento) -------------- */
  { id: 'df-93', moduleId: 'dyn-11', front: 'O que é o AutomationEngine?', back: 'A plataforma no-code/low-code que conecta Grail™, Davis® AI e ferramentas externas para auto-remediação.' },
  { id: 'df-94', moduleId: 'dyn-11', front: 'O que é um Event-Based Trigger?', back: 'Disparo em tempo real na criação ou fechamento de um problema do Davis®.' },
  { id: 'df-95', moduleId: 'dyn-11', front: 'Qual trigger usar para um relatório diário às 08:00?', back: 'Schedule-Based Trigger, com expressão Cron.' },
  { id: 'df-96', moduleId: 'dyn-11', front: 'Para que serve {{ event() }}?', back: 'Acessar os metadados do evento ou problema que originou o workflow.' },
  { id: 'df-97', moduleId: 'dyn-11', front: 'Qual a vantagem da auto-remediação?', back: 'Reduzir o MTTR, fechando o ciclo de correção sem intervenção humana.' },

  /* ----------------- Módulo 12 — Segurança e Privacidade (3 + 4 no complemento) ------------- */
  { id: 'df-98', moduleId: 'dyn-12', front: 'O que fazem os SQL Bind Parameters?', back: 'Substituem valores das queries SQL por ? no OneAgent, antes do envio.' },
  { id: 'df-99', moduleId: 'dyn-12', front: 'Por que o Davis® Security Score difere do CVSS?', back: 'Porque considera o contexto real: execução em memória, exposição à internet e acesso a banco de dados.' },
  { id: 'df-100', moduleId: 'dyn-12', front: 'Para que servem as Management Zones?', back: 'Segregar logicamente a visibilidade das equipes por tags, ambientes e namespaces.' },

  /* --------- Complemento: Workflows (3) e Segurança (4) --------- */
  { id: 'df-101', moduleId: 'dyn-11', front: 'Que ferramentas externas o AutomationEngine conecta?', back: 'Slack, Jira, ServiceNow, Ansible e Kubernetes, entre outras.' },
  { id: 'df-102', moduleId: 'dyn-11', front: 'O que é um Manual / Webhook Trigger?', back: 'Disparo sob demanda ou via API HTTP POST, usado em integrações com sistemas externos.' },
  { id: 'df-103', moduleId: 'dyn-11', front: 'O que significa auto-remediação?', back: 'O workflow corrigir o problema automaticamente, sem intervenção humana.' },
  { id: 'df-104', moduleId: 'dyn-12', front: 'O que é o RVA?', back: 'Runtime Vulnerability Analytics: detecção de bibliotecas vulneráveis em tempo de execução.' },
  { id: 'df-105', moduleId: 'dyn-12', front: 'O que é o RAP?', back: 'Runtime Application Protection: bloqueio ativo de ataques em execução, como SQL Injection.' },
  { id: 'df-106', moduleId: 'dyn-12', front: 'Como o Session Replay protege dados sensíveis?', back: 'Com máscaras ativas por padrão no cliente, ocultando senhas e cartões — privacy by default.' },
  { id: 'df-107', moduleId: 'dyn-12', front: 'O que é Log Processing Redaction?', back: 'Regras regex no pipeline de ingestão do Grail™ para ocultar PII antes da gravação.' }
];
