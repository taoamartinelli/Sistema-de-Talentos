import { SimuladoQuestion } from '../trilha360';

/** Simulado de conclusão de cada módulo da trilha MuleSoft: 5 questões por módulo. */
export const MULESOFT_MODULE_QUIZZES: Record<string, SimuladoQuestion[]> = {
  'mule-1': [
    {
      id: 'uq1-1',
      statement: 'O que é o IT Delivery Gap?',
      options: [
        'A lacuna entre a expectativa do negócio e a capacidade de entrega da TI',
        'A diferença entre o custo previsto e o real de um projeto',
        'O tempo de resposta de uma API',
        'A distância entre dois data centers'
      ],
      answer: 0
    },
    {
      id: 'uq1-2',
      statement: 'Como o MuleSoft ajuda a fechar essa lacuna?',
      options: [
        'Com integração ágil por APIs, menos complexidade e automação de processos',
        'Substituindo todos os sistemas legados',
        'Eliminando a necessidade de equipes de TI',
        'Centralizando os dados em um único banco'
      ],
      answer: 0
    },
    {
      id: 'uq1-3',
      statement: 'Qual destes é um fundamento da integração digital?',
      options: [
        'Microsserviços que interagem por APIs',
        'Servidores físicos dedicados por aplicação',
        'Planilhas compartilhadas entre áreas',
        'Transferência manual de arquivos'
      ],
      answer: 0
    },
    {
      id: 'uq1-4',
      statement: 'Qual o papel das APIs na transformação digital?',
      options: [
        'São o motor que conecta sistemas e libera dados para novas soluções',
        'São apenas documentação técnica',
        'Substituem os bancos de dados',
        'Servem só para integrações internas'
      ],
      answer: 0
    },
    {
      id: 'uq1-5',
      statement: 'O que a automação de processos entrega ao negócio?',
      options: [
        'Mais eficiência operacional e entregas mais rápidas',
        'Aumento do número de tarefas manuais',
        'Redução da segurança dos dados',
        'Maior dependência de sistemas legados'
      ],
      answer: 0
    }
  ],

  'mule-2': [
    {
      id: 'uq2-1',
      statement: 'Quais são as três camadas da conectividade API-Led?',
      options: [
        'Sistema, Processo e Experiência',
        'Design, Runtime e Gateway',
        'Entrada, Processamento e Saída',
        'Front-end, Back-end e Banco'
      ],
      answer: 0
    },
    {
      id: 'uq2-2',
      statement: 'Uma API que se conecta diretamente ao ERP é de qual camada?',
      options: ['Sistema', 'Processo', 'Experiência', 'Gateway'],
      answer: 0
    },
    {
      id: 'uq2-3',
      statement: 'Onde fica a lógica de negócio na abordagem API-Led?',
      options: [
        'Na camada de Processo',
        'Na camada de Sistema',
        'Na camada de Experiência',
        'No API Gateway'
      ],
      answer: 0
    },
    {
      id: 'uq2-4',
      statement: 'Ao lançar um novo canal de vendas, o que costuma bastar?',
      options: [
        'Criar uma nova API de Experiência reutilizando as demais camadas',
        'Refazer as APIs de sistema',
        'Criar uma integração ponto a ponto',
        'Trocar o ERP da empresa'
      ],
      answer: 0
    },
    {
      id: 'uq2-5',
      statement: 'Qual problema o API-Led resolve?',
      options: [
        'A complexidade e a duplicação das integrações ponto a ponto',
        'A falta de servidores no data center',
        'O custo das licenças de banco de dados',
        'A ausência de documentação de código'
      ],
      answer: 0
    }
  ],

  'mule-3': [
    {
      id: 'uq3-1',
      statement: 'O que é o C4E?',
      options: [
        'O Center for Enablement: equipe que centraliza criação, gestão e disseminação de APIs',
        'Um tipo de conector da Anypoint Platform',
        'Uma política de segurança do API Manager',
        'Um ambiente de execução em nuvem'
      ],
      answer: 0
    },
    {
      id: 'uq3-2',
      statement: 'O que são os Catalyst Playbooks?',
      options: [
        'Guias e melhores práticas para adotar a integração digital do planejamento à entrega',
        'Os manuais de instalação do Anypoint Studio',
        'Os contratos de SLA das APIs',
        'Os relatórios de monitoramento'
      ],
      answer: 0
    },
    {
      id: 'uq3-3',
      statement: 'Quais são os pilares da abordagem Catalyst?',
      options: [
        'Resultados comerciais, capacitação organizacional e entrega de tecnologia',
        'Design, desenvolvimento e testes',
        'Sistema, processo e experiência',
        'Segurança, performance e custo'
      ],
      answer: 0
    },
    {
      id: 'uq3-4',
      statement: 'Qual a missão do C4E em relação às APIs?',
      options: [
        'Garantir que sejam produzidas, publicadas, consumidas e reutilizadas com qualidade',
        'Impedir que áreas de negócio criem APIs',
        'Centralizar todo o desenvolvimento em uma única pessoa',
        'Substituir o time de operações'
      ],
      answer: 0
    },
    {
      id: 'uq3-5',
      statement: 'O que o Catalyst coloca no centro da estratégia de integração?',
      options: ['O cliente', 'O servidor', 'O contrato de licença', 'O time de infraestrutura'],
      answer: 0
    }
  ],

  'mule-4': [
    {
      id: 'uq4-1',
      statement: 'O que é o padrão Hub-and-Spoke?',
      options: [
        'Todos os sistemas se conectam a um hub central de gerenciamento',
        'Cada sistema se conecta diretamente a todos os outros',
        'A comunicação ocorre apenas por arquivos',
        'Os dados são replicados em cada aplicação'
      ],
      answer: 0
    },
    {
      id: 'uq4-2',
      statement: 'Qual padrão usa um intermediário de mensageria?',
      options: ['Brokered', 'Point-to-Point', 'File Transfer', 'Data Virtualization'],
      answer: 0
    },
    {
      id: 'uq4-3',
      statement: 'O que caracteriza o valor exponencial de uma rede de aplicativos?',
      options: [
        'Cada nova API multiplica as conexões possíveis entre sistemas',
        'O custo aumenta a cada integração',
        'Cada API substitui uma anterior',
        'A rede exige um servidor por API'
      ],
      answer: 0
    },
    {
      id: 'uq4-4',
      statement: 'Qual padrão permite acessar dados de várias fontes sem duplicá-los?',
      options: ['Data Virtualization', 'Batch Processing', 'File Transfer', 'Hub-and-Spoke'],
      answer: 0
    },
    {
      id: 'uq4-5',
      statement: 'Qual padrão é indicado para grandes volumes processados periodicamente?',
      options: ['Batch Processing', 'Event-driven', 'API Gateway', 'Point-to-Point'],
      answer: 0
    }
  ],

  'mule-5': [
    {
      id: 'uq5-1',
      statement: 'Qual ferramenta modela APIs em RAML?',
      options: ['API Designer', 'Anypoint Monitoring', 'Runtime Manager', 'Object Store'],
      answer: 0
    },
    {
      id: 'uq5-2',
      statement: 'O que é o Anypoint Studio?',
      options: [
        'O IDE para criar integrações e APIs, com conectores prontos',
        'O repositório central de ativos',
        'O painel de monitoramento de tráfego',
        'O serviço de mensageria da plataforma'
      ],
      answer: 0
    },
    {
      id: 'uq5-3',
      statement: 'Para que serve o Anypoint Exchange?',
      options: [
        'Ser o repositório central de APIs, conectores e ativos reutilizáveis',
        'Executar as aplicações Mule',
        'Aplicar políticas de segurança',
        'Agendar fluxos por Cron'
      ],
      answer: 0
    },
    {
      id: 'uq5-4',
      statement: 'Qual a diferença entre Control Plane e Runtime Plane?',
      options: [
        'O Control Plane gerencia design e políticas; o Runtime Plane executa as aplicações',
        'O Control Plane executa as aplicações; o Runtime Plane gerencia políticas',
        'São nomes diferentes para a mesma coisa',
        'O Runtime Plane só existe no CloudHub'
      ],
      answer: 0
    },
    {
      id: 'uq5-5',
      statement: 'Que ferramenta permite criar fluxos visualmente, sem codificação extensa?',
      options: ['Flow Designer', 'API Manager', 'MUnit', 'Object Store'],
      answer: 0
    }
  ],

  'mule-6': [
    {
      id: 'uq6-1',
      statement: 'Qual é a primeira etapa do ciclo de vida de uma API?',
      options: ['Design', 'Implementação', 'Monitoramento', 'Documentação'],
      answer: 0
    },
    {
      id: 'uq6-2',
      statement: 'O que caracteriza a abordagem design-first?',
      options: [
        'Definir o contrato da API antes de implementá-la',
        'Escrever o código e gerar o contrato depois',
        'Publicar a API sem documentação',
        'Testar somente após o lançamento'
      ],
      answer: 0
    },
    {
      id: 'uq6-3',
      statement: 'Qual é a última etapa do ciclo de vida?',
      options: ['Desativação', 'Manutenção', 'Lançamento', 'Teste'],
      answer: 0
    },
    {
      id: 'uq6-4',
      statement: 'Por que o design-first favorece o trabalho em paralelo?',
      options: [
        'Porque com o contrato pronto, consumidores e implementadores avançam ao mesmo tempo',
        'Porque dispensa a etapa de testes',
        'Porque elimina a necessidade de monitoramento',
        'Porque reduz o número de APIs'
      ],
      answer: 0
    },
    {
      id: 'uq6-5',
      statement: 'O que deve acontecer no descomissionamento de uma API?',
      options: [
        'Uma transição cuidadosa para quem ainda depende dela',
        'O desligamento imediato, sem aviso',
        'A exclusão do histórico de uso',
        'A migração automática dos consumidores'
      ],
      answer: 0
    }
  ],

  'mule-7': [
    {
      id: 'uq7-1',
      statement: 'Qual é o papel do API Gateway?',
      options: [
        'Controlar o acesso, monitorar o tráfego e aplicar políticas às APIs',
        'Executar as transformações de dados',
        'Armazenar os registros processados',
        'Criar o contrato da API'
      ],
      answer: 0
    },
    {
      id: 'uq7-2',
      statement: 'O que é limitação de taxa?',
      options: [
        'O controle do número de requisições permitidas em um período',
        'O tempo máximo de resposta da API',
        'O limite de campos no payload',
        'A quantidade de proxies por API'
      ],
      answer: 0
    },
    {
      id: 'uq7-3',
      statement: 'Para que serve um nível de SLA?',
      options: [
        'Definir condições de uso, como volume permitido e prioridade',
        'Definir o formato de resposta da API',
        'Escolher a região do data center',
        'Determinar a linguagem de implementação'
      ],
      answer: 0
    },
    {
      id: 'uq7-4',
      statement: 'Qual é a sequência para um desenvolvedor obter acesso a uma API?',
      options: [
        'Registrar o aplicativo, escolher a camada de SLA e receber as credenciais',
        'Receber as credenciais e depois registrar o aplicativo',
        'Solicitar acesso direto ao banco de dados',
        'Publicar sua própria versão da API'
      ],
      answer: 0
    },
    {
      id: 'uq7-5',
      statement: 'Qual a diferença entre Service Mesh e API Gateway?',
      options: [
        'O mesh cuida do tráfego interno entre microsserviços; o gateway é a entrada do tráfego externo',
        'O mesh é a entrada externa; o gateway cuida do tráfego interno',
        'Ambos fazem exatamente a mesma coisa',
        'O gateway só funciona on-premises'
      ],
      answer: 0
    }
  ],

  'mule-8': [
    {
      id: 'uq8-1',
      statement: 'O que é o CloudHub?',
      options: [
        'A PaaS gerenciada pela MuleSoft, executada na nuvem da AWS',
        'Um contêiner instalado no data center do cliente',
        'O IDE de desenvolvimento',
        'O repositório de conectores'
      ],
      answer: 0
    },
    {
      id: 'uq8-2',
      statement: 'Quando escolher o runtime hospedado pelo cliente?',
      options: [
        'Quando há requisitos rígidos de segurança ou conformidade que exigem controle total',
        'Quando se quer o menor esforço de infraestrutura',
        'Quando não há equipe de operações',
        'Quando a aplicação é temporária'
      ],
      answer: 0
    },
    {
      id: 'uq8-3',
      statement: 'Qual vantagem é típica do Anypoint Runtime Fabric?',
      options: [
        'Deploy com zero downtime e isolamento de aplicações',
        'Dispensa qualquer infraestrutura',
        'Executa apenas uma aplicação por vez',
        'Elimina a necessidade de monitoramento'
      ],
      answer: 0
    },
    {
      id: 'uq8-4',
      statement: 'Qual limitação existe para arquivos no CloudHub?',
      options: [
        'O conector de arquivo acessa apenas a pasta /tmp',
        'Não é possível ler arquivos de forma alguma',
        'Somente arquivos XML são aceitos',
        'O tamanho máximo é de 1 KB'
      ],
      answer: 0
    },
    {
      id: 'uq8-5',
      statement: 'O que a escalabilidade elástica do CloudHub oferece?',
      options: [
        'Ajuste automático de capacidade conforme a demanda',
        'Número fixo de instâncias',
        'Migração manual entre regiões',
        'Backup automático do código-fonte'
      ],
      answer: 0
    }
  ],

  'mule-9': [
    {
      id: 'uq9-1',
      statement: 'O que é DataWeave?',
      options: [
        'A linguagem nativa de transformação de dados do MuleSoft',
        'Um conector de banco de dados',
        'Um framework de testes',
        'Um padrão de integração'
      ],
      answer: 0
    },
    {
      id: 'uq9-2',
      statement: 'Quais são as partes de um script DataWeave?',
      options: [
        'Cabeçalho, separador e corpo',
        'Entrada, processamento e saída',
        'Metadata, spec e status',
        'Input, dispatch e process'
      ],
      answer: 0
    },
    {
      id: 'uq9-3',
      statement: 'O que acontece se a saída XML não tiver um único elemento raiz?',
      options: [
        'A transformação falha',
        'O XML é gerado normalmente',
        'O MuleSoft cria a raiz automaticamente',
        'A saída vira JSON'
      ],
      answer: 0
    },
    {
      id: 'uq9-4',
      statement: 'Para que serve o operador as em DataWeave?',
      options: [
        'Para coerção de tipo, como converter texto em número',
        'Para renomear um campo',
        'Para filtrar uma coleção',
        'Para importar um módulo'
      ],
      answer: 0
    },
    {
      id: 'uq9-5',
      statement: 'O que os validadores garantem?',
      options: [
        'Que os dados atendam aos critérios definidos antes do processamento',
        'Que o fluxo seja assíncrono',
        'Que o payload seja compactado',
        'Que a API tenha um proxy'
      ],
      answer: 0
    }
  ],

  'mule-10': [
    {
      id: 'uq10-1',
      statement: 'Qual roteador direciona o evento pela primeira condição verdadeira?',
      options: ['Choice Router', 'Round Robin', 'Scatter-Gather', 'First Successful'],
      answer: 0
    },
    {
      id: 'uq10-2',
      statement: 'Qual roteador tenta as rotas em sequência até uma dar certo?',
      options: ['First Successful', 'Choice Router', 'Round Robin', 'Scatter-Gather'],
      answer: 0
    },
    {
      id: 'uq10-3',
      statement: 'Qual roteador envia o mesmo evento em paralelo e reúne os resultados?',
      options: ['Scatter-Gather', 'Choice Router', 'Round Robin', 'First Successful'],
      answer: 0
    },
    {
      id: 'uq10-4',
      statement: 'Qual roteador distribui a carga de forma circular entre as rotas?',
      options: ['Round Robin', 'Scatter-Gather', 'Choice Router', 'First Successful'],
      answer: 0
    },
    {
      id: 'uq10-5',
      statement: 'Qual a diferença entre orquestração e coreografia?',
      options: [
        'Na orquestração há um coordenador central; na coreografia cada serviço reage a eventos',
        'Na coreografia há um coordenador central',
        'Ambas exigem um barramento de mensagens',
        'Não há diferença prática'
      ],
      answer: 0
    }
  ],

  'mule-11': [
    {
      id: 'uq11-1',
      statement: 'Quais são os dois tipos de erro em MuleSoft?',
      options: [
        'Erros de sistema e erros de aplicação',
        'Erros de rede e erros de disco',
        'Erros de design e erros de runtime',
        'Erros de entrada e erros de saída'
      ],
      answer: 0
    },
    {
      id: 'uq11-2',
      statement: 'O que faz o On Error Continue?',
      options: [
        'Captura o erro e permite que o fluxo siga, devolvendo uma resposta tratada',
        'Interrompe o fluxo e propaga o erro',
        'Reinicia a aplicação',
        'Ignora o erro sem registrar nada'
      ],
      answer: 0
    },
    {
      id: 'uq11-3',
      statement: 'Quando usar On Error Propagate?',
      options: [
        'Quando o erro é crítico e o sistema chamador precisa saber',
        'Quando o erro é irrelevante',
        'Sempre que houver qualquer exceção',
        'Somente em fluxos assíncronos'
      ],
      answer: 0
    },
    {
      id: 'uq11-4',
      statement: 'Qual estratégia é indicada para falhas temporárias?',
      options: [
        'Implementar re-tentativas',
        'Interromper o serviço',
        'Capturar todas as exceções genericamente',
        'Desativar o logging'
      ],
      answer: 0
    },
    {
      id: 'uq11-5',
      statement: 'Qual a vantagem de encapsular processadores em subfluxos?',
      options: [
        'Reutilizar a lógica e facilitar a manutenção',
        'Aumentar o acoplamento entre sistemas',
        'Reduzir a legibilidade',
        'Eliminar o tratamento de erros'
      ],
      answer: 0
    }
  ],

  'mule-12': [
    {
      id: 'uq12-1',
      statement: 'O que é uma watermark?',
      options: [
        'O valor que identifica o que já foi processado, evitando duplicação',
        'Uma marca d’água aplicada aos relatórios',
        'Um tipo de conector de arquivo',
        'Uma política de segurança do gateway'
      ],
      answer: 0
    },
    {
      id: 'uq12-2',
      statement: 'Quais conectores permitem trabalhar com arquivos?',
      options: ['File, FTP, FTPS e SFTP', 'JMS, AMQP e MQTT', 'HTTP, SOAP e REST', 'JDBC e ODBC'],
      answer: 0
    },
    {
      id: 'uq12-3',
      statement: 'Como evitar o reprocessamento de um arquivo já tratado?',
      options: [
        'Movendo, renomeando ou excluindo o arquivo após o processamento',
        'Reiniciando o fluxo a cada execução',
        'Aumentando o intervalo do scheduler',
        'Desativando o listener'
      ],
      answer: 0
    },
    {
      id: 'uq12-4',
      statement: 'Para que serve o Object Store nesse contexto?',
      options: [
        'Persistir dados entre execuções, como o valor da watermark manual',
        'Armazenar os arquivos processados',
        'Guardar as credenciais das APIs',
        'Registrar os logs da aplicação'
      ],
      answer: 0
    },
    {
      id: 'uq12-5',
      statement: 'Como agendar a execução de um fluxo em horários definidos?',
      options: [
        'Com o Scheduler, por frequência fixa ou expressão Cron',
        'Com o Choice Router',
        'Com o Batch Aggregator',
        'Com o API Gateway'
      ],
      answer: 0
    }
  ],

  'mule-13': [
    {
      id: 'uq13-1',
      statement: 'Quais são as três fases de um Batch Job?',
      options: [
        'Input, Load and Dispatch e Process',
        'Design, Deploy e Monitor',
        'Entrada, Roteamento e Saída',
        'Extract, Transform e Load'
      ],
      answer: 0
    },
    {
      id: 'uq13-2',
      statement: 'O que acontece na Input Phase?',
      options: [
        'A fonte de dados é definida e o conteúdo vira um conjunto de registros',
        'Os registros são agregados em lotes',
        'O relatório final é gerado',
        'Os erros são tratados'
      ],
      answer: 0
    },
    {
      id: 'uq13-3',
      statement: 'O que faz o Batch Aggregator?',
      options: [
        'Agrupa registros para enviá-los em lotes ao destino',
        'Divide os registros em blocos menores',
        'Filtra registros inválidos',
        'Reinicia o job em caso de falha'
      ],
      answer: 0
    },
    {
      id: 'uq13-4',
      statement: 'Quando usar For Each em vez de Batch Job?',
      options: [
        'Em coleções pequenas, com processamento sequencial simples',
        'Sempre que houver mais de mil registros',
        'Quando for necessário paralelismo',
        'Quando se quer relatório por registro'
      ],
      answer: 0
    },
    {
      id: 'uq13-5',
      statement: 'Qual a principal vantagem do Batch Job?',
      options: [
        'Escalabilidade no processamento de grandes volumes',
        'Simplicidade para coleções pequenas',
        'Execução exclusivamente síncrona',
        'Dispensar o tratamento de erros'
      ],
      answer: 0
    }
  ],

  'mule-14': [
    {
      id: 'uq14-1',
      statement: 'Qual a diferença entre escalabilidade vertical e horizontal?',
      options: [
        'Vertical aumenta a capacidade de um servidor; horizontal adiciona mais servidores',
        'Vertical adiciona servidores; horizontal aumenta a memória',
        'As duas significam a mesma coisa',
        'Horizontal só existe on-premises'
      ],
      answer: 0
    },
    {
      id: 'uq14-2',
      statement: 'O que caracteriza uma arquitetura de microsserviços?',
      options: [
        'Serviços menores e independentes, com responsabilidade única',
        'Uma única unidade que concentra todas as funções',
        'A ausência de APIs entre componentes',
        'A obrigatoriedade de um banco compartilhado'
      ],
      answer: 0
    },
    {
      id: 'uq14-3',
      statement: 'O que indica um código HTTP 401?',
      options: [
        'Não autorizado — falta autenticação válida',
        'Recurso não encontrado',
        'Erro interno do servidor',
        'Requisição concluída com sucesso'
      ],
      answer: 0
    },
    {
      id: 'uq14-4',
      statement: 'Para que serve o MUnit?',
      options: [
        'Executar testes automatizados de fluxos e APIs',
        'Gerenciar dependências do projeto',
        'Monitorar o tráfego em produção',
        'Definir políticas de segurança'
      ],
      answer: 0
    },
    {
      id: 'uq14-5',
      statement: 'O que é RAML?',
      options: [
        'Uma linguagem de especificação de APIs usada no API Designer',
        'Um conector de banco de dados',
        'Um padrão de mensageria',
        'Um formato de compactação de arquivos'
      ],
      answer: 0
    }
  ]
};

const first = (moduleId: string, count: number) => MULESOFT_MODULE_QUIZZES[moduleId].slice(0, count);

/**
 * Simulado final da trilha: 50 questões — 3 de cada um dos 14 módulos (42)
 * e mais 8 questões que cruzam os assuntos.
 */
export const MULESOFT_SIMULADO: SimuladoQuestion[] = [
  ...first('mule-1', 3),
  ...first('mule-2', 3),
  ...first('mule-3', 3),
  ...first('mule-4', 3),
  ...first('mule-5', 3),
  ...first('mule-6', 3),
  ...first('mule-7', 3),
  ...first('mule-8', 3),
  ...first('mule-9', 3),
  ...first('mule-10', 3),
  ...first('mule-11', 3),
  ...first('mule-12', 3),
  ...first('mule-13', 3),
  ...first('mule-14', 3),
  {
    id: 'us-43',
    statement: 'Uma varejista quer expor dados do ERP para um app móvel novo. Qual a sequência correta de camadas?',
    options: [
      'API de Sistema no ERP, API de Processo agregando e API de Experiência para o app',
      'API de Experiência no ERP e API de Sistema para o app',
      'Uma única API ponto a ponto entre ERP e app',
      'Apenas uma API de Processo conectada ao app'
    ],
    answer: 0
  },
  {
    id: 'us-44',
    statement: 'Uma API de pagamentos precisa exigir token e limitar 100 chamadas por minuto. Onde isso é configurado?',
    options: [
      'No API Manager, como políticas aplicadas ao proxy da API',
      'No Anypoint Studio, dentro do fluxo',
      'No DataWeave, na transformação',
      'No Object Store'
    ],
    answer: 0
  },
  {
    id: 'us-45',
    statement: 'Um fluxo consulta três serviços diferentes ao mesmo tempo e junta as respostas. Qual roteador usar?',
    options: ['Scatter-Gather', 'Choice Router', 'First Successful', 'Round Robin'],
    answer: 0
  },
  {
    id: 'us-46',
    statement: 'Um serviço externo caiu momentaneamente e o pedido do cliente não pode ser perdido. Qual combinação faz sentido?',
    options: [
      'On Error Continue com política de re-tentativa',
      'On Error Propagate sem log',
      'Ignorar o erro e seguir o fluxo',
      'Encerrar a aplicação'
    ],
    answer: 0
  },
  {
    id: 'us-47',
    statement: 'A empresa precisa de deploy sem indisponibilidade em infraestrutura própria. Qual opção atende?',
    options: [
      'Anypoint Runtime Fabric',
      'CloudHub',
      'Anypoint Exchange',
      'Design Center'
    ],
    answer: 0
  },
  {
    id: 'us-48',
    statement: 'Um fluxo diário deve importar apenas os registros novos de uma tabela. O que usar?',
    options: [
      'Um scheduler com watermark sobre uma coluna ordenada',
      'Um Scatter-Gather sobre a tabela inteira',
      'Um proxy de API',
      'Um Batch Aggregator sem filtro'
    ],
    answer: 0
  },
  {
    id: 'us-49',
    statement: 'É preciso converter um XML legado em JSON para uma API moderna. Qual recurso resolve?',
    options: [
      'Uma transformação DataWeave no Transform Message',
      'Uma política do API Gateway',
      'Um Batch Step',
      'Um listener de arquivo'
    ],
    answer: 0
  },
  {
    id: 'us-50',
    statement: 'Um milhão de registros precisa ser processado com relatório por registro e tolerância a falhas. O que usar?',
    options: ['Batch Job', 'For Each', 'Choice Router', 'Object Store'],
    answer: 0
  }
];
