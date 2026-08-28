import { Flashcard } from '../trilha360';

/** 100 flash cards da trilha MuleSoft Associate, distribuídos pelos 14 módulos. */
export const MULESOFT_FLASHCARDS: Flashcard[] = [
  /* -------------- Módulo 1 — APIs modernas (7) -------------- */
  { id: 'mf-1', moduleId: 'mule-1', front: 'O que é o IT Delivery Gap?', back: 'A lacuna entre o que o negócio espera e o que a TI consegue entregar no tempo necessário.' },
  { id: 'mf-2', moduleId: 'mule-1', front: 'Como o MuleSoft ajuda a fechar essa lacuna?', back: 'Com integração ágil por APIs, redução da complexidade entre sistemas e automação de processos.' },
  { id: 'mf-3', moduleId: 'mule-1', front: 'O que é integração digital?', back: 'A interconexão de dados, aplicações e dispositivos, formando um ecossistema coeso e ágil.' },
  { id: 'mf-4', moduleId: 'mule-1', front: 'Quais são os fundamentos da integração digital?', back: 'APIs, cloud computing, data exchange, microsserviços e integrações baseadas em eventos.' },
  { id: 'mf-5', moduleId: 'mule-1', front: 'Qual o papel das APIs na transformação digital?', back: 'São o motor: conectam sistemas, liberam dados e criam novas oportunidades de inovação.' },
  { id: 'mf-7', moduleId: 'mule-1', front: 'Por que reduzir a complexidade das integrações importa?', back: 'Porque permite que tecnologias, aplicações e bancos heterogêneos se comuniquem sem grande esforço.' },

  /* -------------- Módulo 2 — API-Led Connectivity (8) -------------- */
  { id: 'mf-8', moduleId: 'mule-2', front: 'O que é API-Led Connectivity?', back: 'Uma abordagem estruturada que conecta sistemas por APIs em três camadas, no lugar de integrações ponto a ponto.' },
  { id: 'mf-9', moduleId: 'mule-2', front: 'O que faz uma API de Sistema?', back: 'Conecta-se diretamente aos backends: ERPs, CRMs e bancos de dados.' },
  { id: 'mf-10', moduleId: 'mule-2', front: 'O que faz uma API de Processo?', back: 'Agrega e transforma os dados das APIs de sistema conforme a lógica de negócio.' },
  { id: 'mf-11', moduleId: 'mule-2', front: 'O que faz uma API de Experiência?', back: 'Adapta os dados para cada canal de consumo: web, mobile, IoT.' },
  { id: 'mf-12', moduleId: 'mule-2', front: 'Qual a vantagem de lançar um novo canal com API-Led?', back: 'Basta criar uma nova API de Experiência, reutilizando as de Processo e Sistema já existentes.' },
  { id: 'mf-14', moduleId: 'mule-2', front: 'Em qual camada entra a lógica de negócio?', back: 'Na camada de Processo.' },
  { id: 'mf-15', moduleId: 'mule-2', front: 'Uma API que entrega dados a um app móvel é de qual camada?', back: 'De Experiência.' },

  /* -------------- Módulo 3 — C4E e Catalyst (8) -------------- */
  { id: 'mf-16', moduleId: 'mule-3', front: 'O que é o C4E?', back: 'O Center for Enablement: equipe multifuncional que centraliza a criação, gestão e disseminação de APIs.' },
  { id: 'mf-17', moduleId: 'mule-3', front: 'Qual a missão do C4E?', back: 'Garantir que as APIs sejam produzidas, publicadas, consumidas e reutilizadas com qualidade.' },
  { id: 'mf-18', moduleId: 'mule-3', front: 'O que é o MuleSoft Catalyst?', back: 'O framework que ajuda a empresa a implementar sua estratégia de integração digital com APIs e a Anypoint Platform.' },
  { id: 'mf-19', moduleId: 'mule-3', front: 'O que são os Catalyst Playbooks?', back: 'Uma coleção de guias, melhores práticas e abordagens recomendadas, do planejamento à entrega.' },
  { id: 'mf-20', moduleId: 'mule-3', front: 'Quais são os pilares da abordagem Catalyst?', back: 'Resultados comerciais, capacitação organizacional e entrega de tecnologia.' },
  { id: 'mf-21', moduleId: 'mule-3', front: 'O que significa "resultados comerciais" no Catalyst?', back: 'Definir resultados e KPIs claros, com alinhamento das partes interessadas.' },
  { id: 'mf-23', moduleId: 'mule-3', front: 'Qual visão o Catalyst coloca no centro da estratégia?', back: 'A visão centrada no cliente.' },

  /* ---------- Módulo 4 — Rede de aplicativos e padrões (8) ---------- */
  { id: 'mf-24', moduleId: 'mule-4', front: 'O que é valor exponencial em uma rede de aplicativos?', back: 'Cada nova API multiplica as conexões possíveis, aumentando o valor de toda a rede.' },
  { id: 'mf-25', moduleId: 'mule-4', front: 'O que é o padrão Point-to-Point?', back: 'Integração direta entre dois sistemas — simples, mas difícil de escalar.' },
  { id: 'mf-26', moduleId: 'mule-4', front: 'O que é o padrão Hub-and-Spoke?', back: 'Todos os sistemas se conectam a um hub central, que vira o ponto único de gerenciamento.' },
  { id: 'mf-27', moduleId: 'mule-4', front: 'O que caracteriza o padrão Brokered?', back: 'Um intermediário (broker) facilita a comunicação entre os sistemas — no MuleSoft, o Anypoint MQ.' },
  { id: 'mf-28', moduleId: 'mule-4', front: 'O que é o padrão Message Bus?', back: 'Um barramento assíncrono que permite comunicação desacoplada entre sistemas.' },
  { id: 'mf-29', moduleId: 'mule-4', front: 'O que é Data Virtualization?', back: 'Acessar dados de várias fontes sem duplicá-los.' },
  { id: 'mf-31', moduleId: 'mule-4', front: 'O que é integração Event-driven?', back: 'Integração baseada em eventos, permitindo comunicação dinâmica e em tempo real.' },

  /* ---------- Módulo 5 — Anypoint Platform (8) ---------- */
  { id: 'mf-32', moduleId: 'mule-5', front: 'O que é o Design Center?', back: 'O espaço da plataforma para criar e colaborar no design de APIs e fluxos.' },
  { id: 'mf-33', moduleId: 'mule-5', front: 'O que faz o API Designer?', back: 'Define e modela APIs em RAML, com prototipagem e documentação integradas.' },
  { id: 'mf-34', moduleId: 'mule-5', front: 'O que faz o Flow Designer?', back: 'Permite criar fluxos de integração visualmente, sem codificação extensa.' },
  { id: 'mf-35', moduleId: 'mule-5', front: 'O que é o Anypoint Studio?', back: 'O IDE do MuleSoft: interface de arrastar e soltar e conectores prontos para construir integrações.' },
  { id: 'mf-36', moduleId: 'mule-5', front: 'Para que serve o Anypoint Exchange?', back: 'É o repositório central de APIs, conectores e ativos reutilizáveis.' },
  { id: 'mf-37', moduleId: 'mule-5', front: 'O que é o Control Plane?', back: 'O conjunto de serviços em nuvem que gerencia design, reutilização e governança de APIs e aplicações.' },
  { id: 'mf-39', moduleId: 'mule-5', front: 'Qual ferramenta monitora o tráfego das APIs?', back: 'O Anypoint Monitoring.' },

  /* ---------- Módulo 6 — Ciclo de vida da API (7) ---------- */
  { id: 'mf-40', moduleId: 'mule-6', front: 'Qual é a primeira etapa do ciclo de vida de uma API?', back: 'O design.' },
  { id: 'mf-41', moduleId: 'mule-6', front: 'Qual é a última etapa do ciclo de vida?', back: 'A desativação (descomissionamento).' },
  { id: 'mf-42', moduleId: 'mule-6', front: 'Cite as oito etapas do ciclo de vida.', back: 'Design, implementação, teste, documentação, lançamento, monitoramento, manutenção e desativação.' },
  { id: 'mf-43', moduleId: 'mule-6', front: 'O que é a abordagem design-first?', back: 'Definir primeiro o contrato da API (RAML/OAS) e só depois implementá-la.' },
  { id: 'mf-44', moduleId: 'mule-6', front: 'Qual a desvantagem do code-first?', back: 'O contrato nasce do código já escrito, o que costuma gerar APIs inconsistentes e mal documentadas.' },
  { id: 'mf-46', moduleId: 'mule-6', front: 'O que acontece no descomissionamento?', back: 'A API obsoleta é retirada, com transição cuidadosa para quem ainda depende dela.' },

  /* ---------- Módulo 7 — API Manager e Gateway (8) ---------- */
  { id: 'mf-47', moduleId: 'mule-7', front: 'Qual o papel do API Gateway?', back: 'Ser o guardião: controla acesso, monitora tráfego e aplica políticas de segurança e governança.' },
  { id: 'mf-48', moduleId: 'mule-7', front: 'O que é limitação de taxa (rate limiting)?', back: 'O controle do número de requisições que um cliente pode fazer em um período.' },
  { id: 'mf-49', moduleId: 'mule-7', front: 'O que é um proxy de API?', back: 'A camada que encapsula a API e intermedeia consumidores e serviços de backend.' },
  { id: 'mf-50', moduleId: 'mule-7', front: 'O que é OAuth 2.0?', back: 'Um padrão de autorização que permite acesso seguro sem compartilhar senhas.' },
  { id: 'mf-51', moduleId: 'mule-7', front: 'O que define um nível de SLA?', back: 'As condições de uso da API: volume de requisições permitido e prioridade de atendimento.' },
  { id: 'mf-53', moduleId: 'mule-7', front: 'O que faz um Service Mesh?', back: 'Gerencia a comunicação interna entre microsserviços: balanceamento, descoberta, segurança e observabilidade.' },
  { id: 'mf-54', moduleId: 'mule-7', front: 'Qual a diferença entre Service Mesh e API Gateway?', back: 'O mesh cuida do tráfego interno entre serviços; o gateway é a porta de entrada do tráfego externo.' },

  /* ---------- Módulo 8 — Implantação (7) ---------- */
  { id: 'mf-55', moduleId: 'mule-8', front: 'O que é o CloudHub?', back: 'A PaaS gerenciada pela MuleSoft, executada na nuvem da AWS.' },
  { id: 'mf-56', moduleId: 'mule-8', front: 'Quais os benefícios do CloudHub?', back: 'Simplicidade (a MuleSoft cuida da infraestrutura), escalabilidade elástica e alta disponibilidade.' },
  { id: 'mf-57', moduleId: 'mule-8', front: 'Quando escolher o runtime hospedado pelo cliente?', back: 'Quando há requisitos específicos de segurança ou conformidade que exigem controle total da infraestrutura.' },
  { id: 'mf-58', moduleId: 'mule-8', front: 'O que é o Anypoint Runtime Fabric?', back: 'Um serviço de contêiner que automatiza implantação e orquestração de apps Mule na infraestrutura do cliente.' },
  { id: 'mf-59', moduleId: 'mule-8', front: 'Quais vantagens o Runtime Fabric oferece?', back: 'Isolamento de aplicações, deploy com zero downtime e dimensionamento horizontal com failover.' },
  { id: 'mf-61', moduleId: 'mule-8', front: 'Que opção permite rodar várias aplicações Mule em um servidor?', back: 'O runtime hospedado pelo cliente (on-premises ou nuvem privada).' },

  /* ---------- Módulo 9 — DataWeave (9) ---------- */
  { id: 'mf-62', moduleId: 'mule-9', front: 'O que é DataWeave?', back: 'A linguagem nativa de transformação de dados do MuleSoft.' },
  { id: 'mf-63', moduleId: 'mule-9', front: 'Qual componente executa DataWeave no fluxo?', back: 'O Transform Message.' },
  { id: 'mf-64', moduleId: 'mule-9', front: 'Quais são as partes de um script DataWeave?', back: 'Cabeçalho (versão e formato de saída), separador (três traços) e corpo da transformação.' },
  { id: 'mf-65', moduleId: 'mule-9', front: 'O que define output application/json?', back: 'O formato de saída da transformação.' },
  { id: 'mf-66', moduleId: 'mule-9', front: 'Qual cuidado é obrigatório ao gerar XML?', back: 'Ter um único elemento raiz — sem ele a transformação falha.' },
  { id: 'mf-67', moduleId: 'mule-9', front: 'Como percorrer uma coleção em DataWeave?', back: 'Com funções lambda como map e filter.' },
  { id: 'mf-69', moduleId: 'mule-9', front: 'Como reutilizar código DataWeave?', back: 'Criando módulos e funções reutilizáveis em arquivos .dwl externos.' },
  { id: 'mf-70', moduleId: 'mule-9', front: 'O que os validadores garantem?', back: 'Que os dados atendam a critérios — campos obrigatórios, formato e regras de negócio — antes do processamento.' },

  /* ---------- Módulo 10 — Roteadores (8) ---------- */
  { id: 'mf-71', moduleId: 'mule-10', front: 'O que faz o Choice Router?', back: 'Direciona o evento conforme condições lógicas, seguindo a primeira que for verdadeira.' },
  { id: 'mf-72', moduleId: 'mule-10', front: 'O que faz o First Successful?', back: 'Testa as rotas uma a uma até que alguma seja concluída com sucesso.' },
  { id: 'mf-73', moduleId: 'mule-10', front: 'O que faz o Round Robin?', back: 'Distribui os eventos de forma circular entre as rotas, equilibrando a carga.' },
  { id: 'mf-74', moduleId: 'mule-10', front: 'O que faz o Scatter-Gather?', back: 'Envia o mesmo evento para várias rotas em paralelo e reúne os resultados.' },
  { id: 'mf-75', moduleId: 'mule-10', front: 'Qual roteador usar para consultar vários serviços ao mesmo tempo?', back: 'Scatter-Gather.' },
  { id: 'mf-77', moduleId: 'mule-10', front: 'Qual a diferença entre One-Way e Request-Reply?', back: 'One-Way envia sem esperar resposta; Request-Reply envia e aguarda o retorno.' },
  { id: 'mf-78', moduleId: 'mule-10', front: 'Qual a diferença entre orquestração e coreografia?', back: 'Na orquestração um componente central coordena os passos; na coreografia cada serviço reage a eventos.' },

  /* ---------- Módulo 11 — Erros e boas práticas (8) ---------- */
  { id: 'mf-79', moduleId: 'mule-11', front: 'Quais são os dois tipos de erro em MuleSoft?', back: 'Erros de sistema (falhas externas) e erros de aplicação (problemas no próprio código ou dados).' },
  { id: 'mf-80', moduleId: 'mule-11', front: 'O que faz o On Error Continue?', back: 'Captura o erro e permite que o fluxo continue, devolvendo uma resposta tratada.' },
  { id: 'mf-81', moduleId: 'mule-11', front: 'O que faz o On Error Propagate?', back: 'Interrompe a execução e propaga o erro ao sistema chamador.' },
  { id: 'mf-82', moduleId: 'mule-11', front: 'Quando usar On Error Propagate?', back: 'Quando o erro é crítico e o chamador precisa saber — falha de autenticação, por exemplo.' },
  { id: 'mf-83', moduleId: 'mule-11', front: 'Por que capturar exceções específicas?', back: 'Porque permite um tratamento mais preciso do que capturar tudo genericamente.' },
  { id: 'mf-84', moduleId: 'mule-11', front: 'Quando aplicar re-tentativas?', back: 'Em falhas temporárias, como a indisponibilidade momentânea de um serviço.' },
  { id: 'mf-85', moduleId: 'mule-11', front: 'Qual a vantagem de encapsular em subfluxos?', back: 'Reutilizar a lógica comum, deixar os fluxos legíveis e facilitar a manutenção.' },
  { id: 'mf-86', moduleId: 'mule-11', front: 'Qual a vantagem das filas assíncronas?', back: 'Desacoplam produtor e consumidor, absorvem picos e aumentam a resiliência.' },

  /* ---------- Módulo 12 — Acionando fluxos (8) ---------- */
  { id: 'mf-87', moduleId: 'mule-12', front: 'Quais conectores de arquivo o MuleSoft oferece?', back: 'File, FTP, FTPS e SFTP.' },
  { id: 'mf-88', moduleId: 'mule-12', front: 'Qual componente aciona um fluxo ao surgir um arquivo?', back: 'O listener On New or Updated File.' },
  { id: 'mf-89', moduleId: 'mule-12', front: 'Como evitar reprocessar o mesmo arquivo?', back: 'Movendo, renomeando ou excluindo o arquivo depois do processamento.' },
  { id: 'mf-90', moduleId: 'mule-12', front: 'O que é uma watermark?', back: 'O valor que identifica o que já foi processado, evitando duplicação na sincronização.' },
  { id: 'mf-91', moduleId: 'mule-12', front: 'Como funciona a primeira sincronização com watermark?', back: 'Processa todos os dados e guarda o maior valor de um campo ordenado, como ID ou timestamp.' },
  { id: 'mf-92', moduleId: 'mule-12', front: 'Quais são os tipos de watermark?', back: 'Automática (gerenciada pelo conector) e manual (implementada na lógica do fluxo).' },
  { id: 'mf-93', moduleId: 'mule-12', front: 'Para que serve o Object Store?', back: 'Persistir dados entre execuções de fluxos — por exemplo, o valor da watermark manual.' },
  { id: 'mf-94', moduleId: 'mule-12', front: 'Como acionar um fluxo em horários definidos?', back: 'Com o Scheduler, por frequência fixa ou expressão Cron.' },

  /* ---------- Módulo 13 — Batch (3) ---------- */
  { id: 'mf-95', moduleId: 'mule-13', front: 'Quais são as três fases de um Batch Job?', back: 'Input, Load and Dispatch e Process.' },
  { id: 'mf-96', moduleId: 'mule-13', front: 'O que faz o Batch Aggregator?', back: 'Agrupa registros para enviá-los em lotes ao destino, reduzindo o número de chamadas.' },
  { id: 'mf-97', moduleId: 'mule-13', front: 'Quando usar For Each em vez de Batch Job?', back: 'Em coleções pequenas e processamento sequencial simples; o Batch Job é para grandes volumes.' },

  /* ---------- Módulo 14 — Conceitos da prova (3) ---------- */
  { id: 'mf-98', moduleId: 'mule-14', front: 'Qual a diferença entre escalabilidade vertical e horizontal?', back: 'Vertical aumenta a capacidade de um servidor; horizontal adiciona mais servidores.' },
  { id: 'mf-99', moduleId: 'mule-14', front: 'O que indica um código HTTP 4xx?', back: 'Erro do cliente — 400 requisição inválida, 401 não autorizado, 404 não encontrado.' },
  { id: 'mf-100', moduleId: 'mule-14', front: 'Para que servem Maven e MUnit?', back: 'Maven gerencia dependências e build do projeto; MUnit é o framework de testes automatizados.' },

  /* ---------- Complemento: Batch (5) e conceitos da prova (5) ---------- */
  { id: 'mf-101', moduleId: 'mule-13', front: 'O que é um Batch Job?', back: 'O componente que processa grandes volumes dividindo a carga em blocos tratados separadamente.' },
  { id: 'mf-102', moduleId: 'mule-13', front: 'O que acontece na Input Phase?', back: 'Define-se a fonte de dados e o conteúdo é convertido em um conjunto de registros.' },
  { id: 'mf-103', moduleId: 'mule-13', front: 'O que acontece na Load and Dispatch Phase?', back: 'Os registros são distribuídos para os steps do Batch Job.' },
  { id: 'mf-104', moduleId: 'mule-13', front: 'O que faz cada Batch Step?', back: 'Executa uma ação sobre os registros e pode filtrar quais deles processa.' },
  { id: 'mf-105', moduleId: 'mule-13', front: 'Qual a principal vantagem do Batch Job?', back: 'Escalabilidade: processa grandes volumes de forma eficiente, com controle por registro.' },
  { id: 'mf-106', moduleId: 'mule-14', front: 'Qual a diferença entre monolito e microsserviços?', back: 'O monolito é uma unidade única, difícil de escalar; microsserviços são serviços menores e independentes.' },
  { id: 'mf-107', moduleId: 'mule-14', front: 'O que é RAML?', back: 'A linguagem de especificação usada no API Designer para descrever o contrato de uma API.' },
  { id: 'mf-108', moduleId: 'mule-14', front: 'O que significa SOA?', back: 'Arquitetura orientada a serviços — a base histórica da integração corporativa.' },
  { id: 'mf-109', moduleId: 'mule-14', front: 'Quando um código HTTP 5xx é retornado?', back: 'Quando o erro é do servidor — 500 erro interno, 503 serviço indisponível.' },
  { id: 'mf-110', moduleId: 'mule-14', front: 'Qual a diferença prática entre JSON e XML?', back: 'JSON é leve e nativo para APIs modernas; XML é mais verboso, com esquema forte, comum em legados e SOA.' }
];
