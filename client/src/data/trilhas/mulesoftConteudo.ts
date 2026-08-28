import { Module } from '../trilha360';
import { TrackOverview } from '../../components/TrackPage';

/**
 * Trilha MuleSoft Associate — material de estudo da certificação
 * (APIs modernas, Anypoint Platform, Catalyst e temas de prova).
 */

export const MULESOFT_OVERVIEW: TrackOverview = {
  title: 'MuleSoft: revolucionando operações com APIs modernas',
  intro:
    'A trilha percorre o que a certificação MuleSoft Associate cobra: por que as APIs mudaram o modelo operacional, como funciona a conectividade API-Led, o papel do C4E e do Catalyst, as ferramentas da Anypoint Platform, o ciclo de vida e a segurança das APIs, transformação com DataWeave, roteadores, tratamento de erros, acionamento de fluxos e processamento em lote.',
  pillars: [
    'API-Led Connectivity: APIs de sistema, processo e experiência',
    'C4E, MuleSoft Catalyst e a lacuna de entrega de TI',
    'Anypoint Platform: Design Center, Studio, Exchange e CloudHub',
    'Ciclo de vida, governança e segurança de APIs',
    'DataWeave para transformação e validação de dados',
    'Roteadores, tratamento de erros e boas práticas de fluxo',
    'Acionamento de fluxos, watermarks e processamento em lote'
  ],
  audience: [
    'Quem vai prestar a certificação MuleSoft Associate',
    'Times de integração e arquitetura de APIs',
    'Analistas e desenvolvedores que trabalham com sistemas conectados'
  ],
  prerequisite:
    'É útil conhecer APIs e formatos como JSON e XML. A trilha parte dos conceitos de negócio e avança até a implementação de fluxos.',
  completion: [
    'Explicar as três camadas da conectividade API-Led',
    'Descrever o papel do C4E e dos Catalyst Playbooks',
    'Identificar os componentes da Anypoint Platform e quando usar cada um',
    'Percorrer o ciclo de vida de uma API, do design à desativação',
    'Aplicar políticas de segurança e níveis de SLA no API Manager',
    'Escolher a opção de implantação adequada a cada cenário',
    'Escrever transformações em DataWeave e tratar erros com On Error Continue/Propagate',
    'Selecionar o roteador certo e processar grandes volumes com Batch Job'
  ]
};

export const MULESOFT_MODULES: Module[] = [
  {
    id: 'mule-1',
    number: 1,
    title: 'APIs modernas e o novo modelo operacional',
    objective:
      'Entender por que as APIs se tornaram o motor da transformação digital e como elas fecham a lacuna de entrega de TI.',
    topics: [
      {
        title: 'A importância das APIs modernas',
        text: 'As APIs deixaram de ser detalhe técnico e passaram a ser o meio pelo qual sistemas, dados e dispositivos se conectam, criando um ecossistema ágil em vez de integrações isoladas.'
      },
      {
        title: 'IT Delivery Gap',
        text: 'É a lacuna entre o que o negócio espera e o que a TI consegue entregar. Ela aparece quando as soluções não chegam rápido o bastante para acompanhar a mudança do negócio.',
        items: [
          'Integração ágil e APIs: criar, testar e implantar APIs rapidamente',
          'Redução de complexidade: uma plataforma única para sistemas heterogêneos',
          'Automação de processos: menos tarefas repetitivas, entrega mais rápida'
        ]
      },
      {
        title: 'Fundamentos da integração digital',
        items: [
          'APIs: permitem que sistemas diferentes compartilhem dados',
          'Cloud computing: soluções híbridas conectando nuvem e on-premises',
          'Data exchange: DataWeave e conectores para múltiplos formatos e protocolos',
          'Microsserviços: componentes menores e independentes que interagem por APIs',
          'Eventos e streaming: integrações em tempo real'
        ]
      }
    ],
    outcome:
      'Explicar o papel das APIs no modelo operacional moderno e como o MuleSoft reduz a lacuna de entrega.'
  },
  {
    id: 'mule-2',
    number: 2,
    title: 'Conectividade API-Led',
    objective: 'Dominar a abordagem de três camadas que substitui as integrações ponto a ponto.',
    topics: [
      {
        title: 'O que é API-Led Connectivity',
        text: 'Uma abordagem estruturada para conectar sistemas e dados por APIs, dividindo a integração em três camadas em vez de criar integrações ponto a ponto complexas.'
      },
      {
        title: 'As três camadas',
        items: [
          'APIs de Sistema: conectam-se diretamente aos backends — ERPs, CRMs e bancos de dados',
          'APIs de Processo: agregam e transformam os dados conforme a lógica de negócio',
          'APIs de Experiência: adaptam os dados para cada canal — web, mobile, IoT'
        ]
      },
      {
        title: 'Exemplo: gestão de pedidos em uma rede de lojas',
        items: [
          'Sistema: integra inventário, CRM e pagamentos',
          'Processo: agrega os dados para relatórios de vendas e previsão de demanda',
          'Experiência: entrega dados formatados para dashboards, app de vendas e app do cliente'
        ],
        text: 'Ao lançar um novo canal, como um assistente de voz, basta criar uma nova API de Experiência reutilizando as camadas já existentes.'
      }
    ],
    outcome: 'Classificar corretamente uma API em sistema, processo ou experiência e justificar a escolha.'
  },
  {
    id: 'mule-3',
    number: 3,
    title: 'C4E e MuleSoft Catalyst',
    objective:
      'Entender como a organização se estrutura para produzir, publicar e reutilizar APIs com governança.',
    topics: [
      {
        title: 'Center for Enablement (C4E)',
        text: 'Equipe multifuncional que funciona como hub central para criação, gestão e disseminação de APIs, garantindo que elas sejam produzidas, publicadas, consumidas e reutilizadas com qualidade.'
      },
      {
        title: 'MuleSoft Catalyst',
        text: 'Framework que ajuda a empresa a implementar uma estratégia de integração digital usando APIs e a Anypoint Platform. Os Catalyst Playbooks reúnem guias, melhores práticas e abordagens recomendadas.',
        items: [
          'APIs como motor da transformação digital',
          'Visão centrada no cliente',
          'Planejamento de integração e governança'
        ]
      },
      {
        title: 'Os pilares da abordagem Catalyst',
        items: [
          'Resultados comerciais: definir resultados e KPIs claros, com alinhamento das partes interessadas',
          'Capacitação organizacional: preparar as equipes para usar a plataforma',
          'Entrega de tecnologia: garantir plataforma disponível e time pronto para criar APIs'
        ]
      },
      {
        title: 'Funções em um time MuleSoft',
        items: [
          'Arquiteto de integração: desenha a solução e define padrões',
          'Desenvolvedor: constrói APIs e fluxos no Anypoint Studio',
          'Operações/plataforma: cuida de implantação, monitoramento e disponibilidade',
          'C4E: dissemina práticas, ativos reutilizáveis e governança'
        ]
      }
    ],
    outcome: 'Descrever o papel do C4E e aplicar os três pilares do Catalyst a um plano de adoção.'
  },
  {
    id: 'mule-4',
    number: 4,
    title: 'Rede de aplicativos e padrões de integração',
    objective:
      'Compreender o valor de uma rede de aplicativos e reconhecer os principais padrões de integração empresarial.',
    topics: [
      {
        title: 'Benefícios da rede de aplicativos',
        items: [
          'Valor exponencial: cada nova API multiplica as conexões possíveis',
          'Flexibilidade: facilita integrar novos sistemas e absorver mudanças',
          'Eficiência operacional: reduz redundância ao reutilizar APIs existentes'
        ]
      },
      {
        title: 'Os 10 padrões de integração',
        items: [
          'Point-to-Point: integração simples entre dois sistemas',
          'Hub-and-Spoke: todos os sistemas conectados a um hub central',
          'Brokered: um intermediário facilita a comunicação (Anypoint MQ)',
          'API Gateway: centraliza e controla o acesso às APIs',
          'Message Bus: barramento assíncrono, com sistemas desacoplados',
          'Event-driven: comunicação dinâmica baseada em eventos',
          'Data Virtualization: acessa dados de várias fontes sem duplicação',
          'Batch Processing: processa grandes volumes em lotes',
          'File Transfer: integra por transferência de arquivos',
          'Cloud Integration: conecta sistemas em nuvem e locais'
        ]
      },
      {
        title: 'Exemplo: empresa de saúde',
        text: 'APIs de sistema conectam registros médicos, faturamento e agendamento; APIs de processo montam o perfil completo do paciente; APIs de experiência atendem app do paciente, sistemas internos e parceiros. Integrar telemedicina passa a exigir apenas uma nova API de experiência.'
      }
    ],
    outcome: 'Escolher o padrão de integração adequado ao cenário e explicar o valor da rede de aplicativos.'
  },
  {
    id: 'mule-5',
    number: 5,
    title: 'Anypoint Platform: componentes e ferramentas',
    objective: 'Conhecer as ferramentas da plataforma e saber quando usar cada uma.',
    topics: [
      {
        title: 'Design Center',
        items: [
          'Flow Designer: ferramenta visual para criar fluxos de integração sem codificação extensa',
          'API Designer: define e modela APIs em RAML, com prototipagem e documentação integradas'
        ]
      },
      {
        title: 'Anypoint Studio',
        text: 'O IDE para criar integrações e APIs: interface gráfica de arrastar e soltar e conectores prontos para diversos sistemas.'
      },
      {
        title: 'Exchange, Management Center e monitoramento',
        items: [
          'Anypoint Exchange: repositório central de APIs, conectores e ativos reutilizáveis',
          'API Manager: governança, políticas e SLAs',
          'Anypoint Monitoring: acompanhamento de tráfego e desempenho',
          'Runtime Manager: implantação e gestão das aplicações'
        ]
      },
      {
        title: 'Control Plane x Runtime Plane',
        items: [
          'Control Plane: serviços em nuvem que simplificam design, reutilização e gestão de APIs, aplicações e políticas',
          'Runtime Plane: onde as aplicações e APIs de fato são executadas'
        ]
      }
    ],
    outcome: 'Identificar a ferramenta certa para cada etapa do trabalho com APIs.'
  },
  {
    id: 'mule-6',
    number: 6,
    title: 'Ciclo de vida de uma API',
    objective: 'Percorrer as etapas de uma API, do design à desativação, e entender o design-first.',
    topics: [
      {
        title: 'As oito etapas',
        items: [
          '1. Design da API',
          '2. Implementação',
          '3. Teste',
          '4. Documentação',
          '5. Lançamento',
          '6. Monitoramento',
          '7. Manutenção e atualização',
          '8. Desativação'
        ]
      },
      {
        title: 'O ciclo na prática com MuleSoft',
        items: [
          'Planejamento e design: contratos definidos com ferramentas visuais',
          'Desenvolvimento: construção com integração de baixo código',
          'Testes e qualidade: testes funcionais e de carga',
          'Implementação: publicação e consumo pelo Exchange',
          'Monitoramento e governança: tráfego monitorado e políticas aplicadas',
          'Descomissionamento: transição sem impacto para quem ainda depende da API'
        ]
      },
      {
        title: 'Design-first x Code-first',
        items: [
          'Design-first: primeiro define-se o contrato (RAML/OAS), depois implementa-se — favorece reutilização, documentação e paralelismo entre times',
          'Code-first: o contrato nasce do código já escrito — mais rápido no início, mas costuma gerar APIs inconsistentes'
        ]
      }
    ],
    outcome: 'Ordenar as etapas do ciclo de vida e justificar a escolha do design-first.'
  },
  {
    id: 'mule-7',
    number: 7,
    title: 'API Manager, Gateway e políticas',
    objective: 'Proteger e governar APIs com proxies, políticas de segurança e níveis de SLA.',
    topics: [
      {
        title: 'API Gateway: o guardião das APIs',
        items: [
          'Controle de acesso: autenticação e autorização de quem chama a API',
          'Limitação de taxa: número máximo de requisições por período',
          'Monitoramento e análise: dados de uso para otimizar desempenho',
          'Aplicação de políticas: criptografia e verificação de integridade'
        ]
      },
      {
        title: 'Passos para restringir o acesso',
        items: [
          '1. Criar proxies de API — o proxy intermedeia consumidores e backend',
          '2. Aplicar políticas de segurança — OAuth 2.0, limitação de taxa, CORS',
          '3. Definir níveis de SLA — camadas com limites e prioridades distintas',
          '4. Monitorar e analisar — identificar padrões de consumo e ameaças'
        ]
      },
      {
        title: 'Fluxo de solicitação de acesso',
        items: [
          '1. O desenvolvedor registra o aplicativo no portal da API',
          '2. Escolhe a camada de SLA adequada',
          '3. Recebe as credenciais após aprovação'
        ]
      },
      {
        title: 'Service Mesh x API Gateway',
        items: [
          'Service Mesh: gerencia a comunicação interna entre microsserviços — balanceamento, descoberta, segurança e observabilidade',
          'API Gateway: ponto central de entrada do tráfego externo — autenticação, autorização, rate limiting e roteamento'
        ]
      }
    ],
    outcome: 'Configurar mentalmente a proteção de uma API: proxy, políticas, SLA e monitoramento.'
  },
  {
    id: 'mule-8',
    number: 8,
    title: 'Implantação flexível',
    objective: 'Escolher entre CloudHub, runtime do cliente e Runtime Fabric conforme a necessidade.',
    topics: [
      {
        title: 'CloudHub',
        text: 'PaaS gerenciada pela MuleSoft na nuvem da AWS.',
        items: [
          'Simplicidade: a MuleSoft gerencia a infraestrutura, o balanceamento e o DNS',
          'Escalabilidade elástica: ajusta a capacidade conforme a demanda',
          'Alta disponibilidade: data centers globais'
        ]
      },
      {
        title: 'Runtime hospedado pelo cliente',
        text: 'Ambientes on-premises ou em nuvem privada.',
        items: [
          'Controle total da infraestrutura — ideal para requisitos de conformidade',
          'Flexibilidade para rodar múltiplas aplicações Mule em um servidor'
        ]
      },
      {
        title: 'Anypoint Runtime Fabric',
        text: 'Serviço de contêiner que automatiza implantação e orquestração em infraestrutura do cliente.',
        items: [
          'Isolamento de aplicações',
          'Deploy com zero downtime',
          'Dimensionamento horizontal com réplicas e failover automático'
        ]
      }
    ],
    outcome: 'Recomendar a opção de implantação certa a partir dos requisitos de controle, conformidade e escala.'
  },
  {
    id: 'mule-9',
    number: 9,
    title: 'DataWeave e transformação de dados',
    objective: 'Transformar e validar dados entre formatos com a linguagem nativa do MuleSoft.',
    topics: [
      {
        title: 'O que é DataWeave',
        text: 'A linguagem de transformação de dados nativa do MuleSoft, usada para manipular e converter dados entre formatos — de XML de um sistema legado para JSON de uma API moderna, por exemplo.'
      },
      {
        title: 'Onde o código vive',
        items: [
          'Componente Transform Message, dentro do fluxo',
          'Arquivos .dwl externos, para reutilização',
          'Módulos e funções reutilizáveis importados por outros scripts'
        ]
      },
      {
        title: 'Estrutura de uma expressão',
        items: [
          'Cabeçalho: versão do DataWeave e formato de saída (output application/json)',
          'Separador: três traços',
          'Corpo: a expressão de transformação propriamente dita'
        ]
      },
      {
        title: 'Manipulação de estruturas',
        items: [
          'JSON e Java: mapeamento direto de objetos e campos',
          'XML: exige um único elemento raiz, senão a transformação falha',
          'Arrays: uso de map, filter e outras funções lambda para coleções'
        ]
      },
      {
        title: 'Variáveis, funções e coerção',
        items: [
          'Variáveis globais (no cabeçalho) e locais (com using/do)',
          'Funções customizadas com fun',
          'Operador as para coerção de tipo — converter texto em número, por exemplo'
        ]
      },
      {
        title: 'Validação de dados',
        items: [
          'Campos obrigatórios presentes na requisição',
          'Formato correto — e-mail, data, documento',
          'Regras de negócio — pedido dentro do limite de crédito'
        ]
      }
    ],
    outcome: 'Escrever transformações entre JSON, XML e Java e validar os dados antes do processamento.'
  },
  {
    id: 'mule-10',
    number: 10,
    title: 'Roteadores e padrões de mensagem',
    objective: 'Direcionar o fluxo de eventos com o roteador adequado a cada necessidade.',
    topics: [
      {
        title: 'Choice Router',
        text: 'Direciona o evento conforme condições lógicas, avaliadas em sequência: a primeira verdadeira define o caminho. Exemplo: pedidos VIP para o processamento prioritário.'
      },
      {
        title: 'First Successful',
        text: 'Testa as rotas uma a uma até que uma seja bem-sucedida. Exemplo: tentar diferentes provedores de pagamento até um concluir a transação.'
      },
      {
        title: 'Round Robin',
        text: 'Distribui os eventos de forma circular entre as rotas, equilibrando a carga e evitando sobrecarga em um único destino.'
      },
      {
        title: 'Scatter-Gather',
        text: 'Envia o mesmo evento para várias rotas em paralelo e reúne os resultados em uma resposta única. Exemplo: consultar vários serviços e agregar as respostas.'
      },
      {
        title: 'Padrões de mensagem',
        items: [
          'One-Way: envia sem esperar resposta',
          'Request-Reply: envia e aguarda a resposta',
          'Multicast: envia a mesma mensagem para vários destinos',
          'Agregação: combina respostas de várias fontes',
          'Orquestração: um componente central coordena os passos',
          'Coreografia: cada serviço reage a eventos, sem coordenador central'
        ]
      }
    ],
    outcome: 'Escolher entre Choice, First Successful, Round Robin e Scatter-Gather com segurança.'
  },
  {
    id: 'mule-11',
    number: 11,
    title: 'Boas práticas e tratamento de erros',
    objective: 'Organizar fluxos reutilizáveis e responder a falhas sem derrubar a integração.',
    topics: [
      {
        title: 'Encapsular em fluxos e subfluxos',
        items: [
          'Reutilização de lógica comum',
          'Fluxos menores e mais legíveis',
          'Manutenção mais simples'
        ]
      },
      {
        title: 'Filas assíncronas',
        items: [
          'Desacoplam produtor e consumidor',
          'Absorvem picos de carga',
          'Aumentam a resiliência do processamento'
        ]
      },
      {
        title: 'Tipos de erro',
        items: [
          'Erros do sistema: falhas externas — rede, indisponibilidade de terceiros, hardware',
          'Erros de aplicação: problemas no próprio código — lógica, dados inválidos, validação'
        ]
      },
      {
        title: 'On Error Continue x On Error Propagate',
        items: [
          'On Error Continue: captura o erro e permite que o fluxo siga, devolvendo uma resposta tratada',
          'On Error Propagate: interrompe a execução e propaga o erro ao sistema chamador'
        ]
      },
      {
        title: 'Estratégias recomendadas',
        items: [
          'Capturar exceções específicas em vez de genéricas',
          'Implementar re-tentativas para falhas temporárias',
          'Registrar logs com mensagem, tipo, fluxo afetado e timestamp',
          'Devolver respostas de erro claras e amigáveis'
        ]
      },
      {
        title: 'Tipos de erro personalizados',
        text: 'É possível mapear erros para tipos próprios, o que torna o tratamento mais preciso e as mensagens mais informativas.'
      }
    ],
    outcome:
      'Decidir entre continuar ou propagar um erro e estruturar fluxos resilientes e reutilizáveis.'
  },
  {
    id: 'mule-12',
    number: 12,
    title: 'Acionando fluxos',
    objective:
      'Disparar fluxos por arquivos, banco de dados, agendadores e mensageria, sincronizando dados sem duplicação.',
    topics: [
      {
        title: 'Conectores de arquivo',
        items: [
          'File: sistema de arquivos local',
          'FTP, FTPS e SFTP: transferência remota',
          'Operações: correspondência de arquivo, bloqueio, substituição, anexação e criação'
        ]
      },
      {
        title: 'Acionando por arquivo',
        items: [
          'On New or Updated File monitora um diretório',
          'Padrões de arquivo filtram os tipos (*.txt, *.json)',
          'Após processar: mover, renomear ou excluir para evitar reprocessamento'
        ]
      },
      {
        title: 'Considerações de implantação',
        items: [
          'CloudHub: o conector de arquivo acessa apenas a pasta /tmp',
          'Runtime do cliente: as permissões dependem da conta que executa a aplicação'
        ]
      },
      {
        title: 'Watermarks',
        text: 'Watermark é o valor que identifica o que já foi processado, evitando duplicação na sincronização.',
        items: [
          'Primeira sincronização: processa tudo e guarda o maior valor de um campo ordenado',
          'Sincronizações seguintes: processa apenas o que for maior que o valor guardado',
          'Automática: gerenciada pelo conector (arquivo e banco de dados)',
          'Manual: implementada quando a automática não atende — normalmente com Object Store'
        ]
      },
      {
        title: 'Agendadores e JMS',
        items: [
          'Scheduler: dispara por frequência fixa ou expressão Cron',
          'JMS: publica e consome mensagens de filas e tópicos, desacoplando os sistemas'
        ]
      }
    ],
    outcome: 'Configurar o gatilho certo para cada cenário e sincronizar dados sem reprocessar registros.'
  },
  {
    id: 'mule-13',
    number: 13,
    title: 'Processando registros: Batch e For Each',
    objective: 'Processar grandes volumes de dados com as ferramentas certas.',
    topics: [
      {
        title: 'Batch Job',
        text: 'Componente para processar grandes volumes, dividindo a carga em blocos processados separadamente.',
        items: [
          'Input Phase: define a fonte e converte o conteúdo em registros',
          'Load and Dispatch Phase: distribui os registros para os steps',
          'Process Phase: cada batch step executa uma ação sobre os registros'
        ]
      },
      {
        title: 'Batch Step e Batch Aggregator',
        items: [
          'Batch Step: executa a ação e pode filtrar quais registros processa',
          'Batch Aggregator: agrupa registros para enviá-los em lotes a um destino, reduzindo chamadas'
        ]
      },
      {
        title: 'For Each',
        items: [
          'Processa a coleção de forma sequencial, dentro do mesmo fluxo',
          'Indicado para volumes menores',
          'O Batch Job é assíncrono e feito para grandes volumes, com relatório por registro'
        ]
      },
      {
        title: 'Quando usar cada um',
        text: 'For Each para coleções pequenas e processamento sequencial simples; Batch Job quando há grande volume, necessidade de paralelismo, tolerância a falhas por registro e relatórios de execução.'
      }
    ],
    outcome: 'Escolher entre For Each e Batch Job e explicar as três fases de um Batch Job.'
  },
  {
    id: 'mule-14',
    number: 14,
    title: 'Arquitetura e conceitos-chave da prova',
    objective: 'Fechar os temas conceituais mais cobrados no exame Associate.',
    topics: [
      {
        title: 'Monolito x microsserviços',
        items: [
          'Monolito: construído como unidade única; difícil de manter e escalar quando cresce, mas eficiente em sistemas menores',
          'Microsserviços: serviços menores e independentes, com responsabilidade única, maior agilidade e escala horizontal'
        ]
      },
      {
        title: 'Escalabilidade vertical x horizontal',
        items: [
          'Vertical: aumenta a capacidade de um único servidor — simples, porém limitada',
          'Horizontal: adiciona mais servidores — melhor tolerância a falhas e escala quase ilimitada'
        ]
      },
      {
        title: 'Códigos de resposta HTTP',
        items: [
          '2xx: sucesso (200 OK, 201 Created)',
          '3xx: redirecionamento',
          '4xx: erro do cliente (400 Bad Request, 401 Unauthorized, 404 Not Found)',
          '5xx: erro do servidor (500 Internal Server Error, 503 Service Unavailable)'
        ]
      },
      {
        title: 'JSON x XML',
        items: [
          'JSON: leve, legível, nativo para web e APIs modernas',
          'XML: mais verboso, com esquema forte, comum em sistemas legados e SOA'
        ]
      },
      {
        title: 'SOA e RAML',
        items: [
          'SOA: arquitetura orientada a serviços, base histórica da integração corporativa',
          'RAML: linguagem de especificação de APIs usada no API Designer para descrever o contrato'
        ]
      },
      {
        title: 'Maven e MUnit',
        items: [
          'Maven: gerencia dependências e o build do projeto Mule',
          'MUnit: framework de testes automatizados para fluxos e APIs'
        ]
      },
      {
        title: 'CRM e o propósito do dado do cliente',
        text: 'O CRM concentra o relacionamento com o cliente. Integrá-lo pelas APIs de sistema permite montar uma visão única do cliente nas camadas de processo e experiência.'
      }
    ],
    outcome: 'Responder com segurança às questões conceituais de arquitetura, formatos e ferramentas.'
  }
];
