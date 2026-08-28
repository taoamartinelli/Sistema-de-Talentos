import { Module } from '../trilha360';
import { TrackOverview } from '../../components/TrackPage';

/** Trilha de Kubernetes — 9 trilhas de estudo oficiais, do Pod ao troubleshooting. */

export const KUBERNETES_OVERVIEW: TrackOverview = {
  title: 'Trilha de Estudos — Kubernetes',
  intro:
    'Do bloco mais simples ao diagnóstico de problemas: a trilha percorre Pods, Deployments, Services, configuração, armazenamento, aplicações com estado, segurança, agendamento e resolução de problemas. Cada módulo usa exemplos do dia a dia, os componentes do recurso, os comandos essenciais e as boas práticas.',
  pillars: [
    'Pods: a menor unidade do Kubernetes',
    'Deployments, réplicas, rolling update e rollback',
    'Services e comunicação entre aplicações',
    'ConfigMap, Secret e separação de configuração',
    'Volumes, PV e PVC para dados persistentes',
    'StatefulSet, políticas de rede, RBAC e scheduling',
    'Troubleshooting com método'
  ],
  audience: [
    'Quem está começando com Kubernetes',
    'Times que vão operar aplicações em cluster',
    'Desenvolvedores que precisam entender como sua aplicação roda'
  ],
  prerequisite:
    'É útil ter noção de contêineres. A trilha parte do conceito de Pod e avança até a investigação de incidentes.',
  completion: [
    'Explicar o que é um Pod e o que ele compartilha',
    'Usar Deployment para manter réplicas, atualizar e reverter versões',
    'Escolher o tipo de Service adequado a cada acesso',
    'Separar configuração e segredos da aplicação',
    'Provisionar armazenamento persistente com PV e PVC',
    'Reconhecer quando usar StatefulSet em vez de Deployment',
    'Aplicar NetworkPolicy e RBAC com menor privilégio',
    'Influenciar o agendamento com selectors, affinity e taints',
    'Investigar problemas seguindo um passo a passo padrão'
  ]
};

export const KUBERNETES_MODULES: Module[] = [
  {
    id: 'k8s-1',
    number: 1,
    title: 'Pods',
    objective: 'Entender a menor unidade do Kubernetes: o que é um Pod, o que ele compartilha e como operá-lo.',
    topics: [
      {
        title: 'O que é um Pod',
        text: 'É a menor unidade do Kubernetes — uma "caixinha" que guarda um ou mais contêineres. É como uma mochila: tudo que está dentro anda junto.',
        items: ['Compartilha a rede (mesmo IP)', 'Compartilha o armazenamento', 'Compartilha as configurações']
      },
      {
        title: 'Para que serve',
        items: [
          'Executar aplicações',
          'Agrupar contêineres que trabalham juntos',
          'Controlar recursos'
        ],
        text: 'Exemplo: um site pode ter o contêiner do site e o contêiner de logs no mesmo Pod.'
      },
      {
        title: 'Estrutura de um Pod',
        items: [
          'Metadata: nome e labels',
          'Spec: contêineres, volumes e portas',
          'Status: rodando, parado ou com erro'
        ]
      },
      {
        title: 'Ciclo de vida',
        items: ['1. Criado', '2. Inicializando', '3. Rodando', '4. Finalizado']
      },
      {
        title: 'Comandos básicos',
        items: ['kubectl get pods', 'kubectl describe pod nome', 'kubectl delete pod nome']
      },
      {
        title: 'Boas práticas',
        items: ['Um processo principal por Pod', 'Usar labels', 'Monitorar recursos']
      }
    ],
    practice: ['O que é um Pod?', 'Para que ele serve?', 'Cite dois comandos.'],
    outcome: 'Reconhecer o Pod como base do Kubernetes e inspecionar seu estado pela linha de comando.'
  },
  {
    id: 'k8s-2',
    number: 2,
    title: 'Deployment',
    objective:
      'Controlar como a aplicação é criada, atualizada e mantida rodando, com o número certo de Pods.',
    topics: [
      {
        title: 'O que é um Deployment',
        text: 'É o recurso que garante que sempre exista a quantidade correta de Pods funcionando. Como um gerente de loja: se um vendedor falta, ele chama outro automaticamente.'
      },
      {
        title: 'Para que serve',
        items: [
          'Criar vários Pods automaticamente',
          'Manter a aplicação sempre disponível',
          'Atualizar versões sem parar o sistema',
          'Recuperar Pods que caíram'
        ]
      },
      {
        title: 'Como funciona por dentro',
        text: 'O fluxo é Deployment → ReplicaSet → Pods: o Deployment controla o ReplicaSet, que controla os Pods.'
      },
      {
        title: 'Componentes',
        items: [
          'Metadata: nome e labels',
          'Spec.replicas: quantos Pods',
          'Spec.template: como será o Pod',
          'Spec.selector: como identificar os Pods',
          'Status: situação atual'
        ]
      },
      {
        title: 'Escalabilidade',
        text: 'É possível aumentar ou diminuir o número de Pods facilmente — de 2 para 10 em horário de pico, por exemplo.'
      },
      {
        title: 'Rolling update e rollback',
        items: [
          'Rolling update: cria os Pods novos e remove os antigos aos poucos, sem derrubar o sistema',
          'Rollback: se algo der errado, volta para a versão anterior'
        ]
      },
      {
        title: 'Comandos básicos',
        items: [
          'kubectl get deployments',
          'kubectl describe deployment nome',
          'kubectl scale deployment nome --replicas=5',
          'kubectl rollout status deployment nome',
          'kubectl rollout undo deployment nome'
        ]
      },
      {
        title: 'Boas práticas',
        items: [
          'Sempre usar Deployment para aplicações',
          'Definir limites de recursos',
          'Usar labels corretamente',
          'Testar o rollback'
        ]
      }
    ],
    practice: [
      'O que é um Deployment?',
      'O que é ReplicaSet?',
      'Como aumentar o número de Pods?',
      'Para que serve o rollback?'
    ],
    outcome: 'Manter a aplicação disponível, escalar réplicas e atualizar versões sem indisponibilidade.'
  },
  {
    id: 'k8s-3',
    number: 3,
    title: 'Service',
    objective:
      'Permitir que aplicações se comuniquem entre si e com o mundo externo por um endereço estável.',
    topics: [
      {
        title: 'O que é um Service',
        text: 'Cria um endereço fixo para acessar os Pods, mesmo quando eles mudam. Se os Pods são casas que mudam de lugar, o Service é o endereço fixo da rua.'
      },
      {
        title: 'Para que serve',
        items: [
          'Permitir acesso aos Pods',
          'Balancear carga automaticamente',
          'Criar endereço estável',
          'Conectar sistemas internos'
        ]
      },
      {
        title: 'Como funciona',
        text: 'O Service usa labels para encontrar os Pods. O fluxo é Usuário → Service → Pod; se um Pod cai, o tráfego vai para outro automaticamente.'
      },
      {
        title: 'Tipos de Service',
        items: [
          'ClusterIP: acesso interno ao cluster (backend acessando o banco)',
          'NodePort: acesso externo pela porta do servidor',
          'LoadBalancer: cria um IP público automaticamente, em nuvem',
          'ExternalName: aponta para um serviço externo'
        ]
      },
      {
        title: 'Componentes',
        items: ['Metadata: nome e labels', 'Spec: type, ports e selector', 'Status']
      },
      {
        title: 'Comandos básicos',
        items: ['kubectl get services', 'kubectl describe service nome', 'kubectl delete service nome']
      },
      {
        title: 'Boas práticas',
        items: [
          'Usar labels corretamente',
          'Evitar NodePort em produção',
          'Documentar as portas',
          'Monitorar o tráfego'
        ]
      }
    ],
    practice: ['O que é um Service?', 'Cite dois tipos de Service.', 'Qual a função do balanceamento?'],
    outcome: 'Escolher o tipo de Service certo e entender como o tráfego chega até os Pods.'
  },
  {
    id: 'k8s-4',
    number: 4,
    title: 'ConfigMap e Secret',
    objective: 'Separar configuração e informações sensíveis do código da aplicação.',
    topics: [
      {
        title: 'O que é ConfigMap',
        text: 'Guarda as configurações da aplicação, separando configuração do código. É como um caderno com as regras e instruções que o app usa.',
        items: ['URLs', 'Portas', 'Mensagens', 'Variáveis de ambiente']
      },
      {
        title: 'Para que serve o ConfigMap',
        items: [
          'Facilitar a mudança de configuração',
          'Evitar alterar o código',
          'Centralizar os parâmetros'
        ],
        text: 'Exemplo: trocar o endereço do banco sem mexer no sistema.'
      },
      {
        title: 'O que é Secret',
        text: 'Guarda informações sensíveis — é o cofre da aplicação.',
        items: ['Senhas', 'Tokens', 'Chaves', 'Certificados']
      },
      {
        title: 'Diferença entre os dois',
        text: 'ConfigMap guarda dados comuns; Secret guarda dados sigilosos.'
      },
      {
        title: 'Como o Pod consome',
        items: ['Como variável de ambiente', 'Como arquivo', 'Como parâmetro']
      },
      {
        title: 'Comandos básicos',
        items: [
          'kubectl get configmap',
          'kubectl describe configmap nome',
          'kubectl get secret',
          'kubectl describe secret nome'
        ]
      },
      {
        title: 'Boas práticas',
        items: [
          'Nunca colocar senha em ConfigMap',
          'Usar RBAC',
          'Criptografar os secrets',
          'Versionar as configurações'
        ]
      }
    ],
    practice: ['O que é ConfigMap?', 'O que é Secret?', 'Cite as diferenças.', 'Como um Pod usa esses dados?'],
    outcome: 'Organizar configurações e proteger informações sensíveis fora do código.'
  },
  {
    id: 'k8s-5',
    number: 5,
    title: 'Volumes, PV e PVC',
    objective: 'Guardar dados que sobrevivem ao fim do Pod, entendendo o ciclo de provisionamento.',
    topics: [
      {
        title: 'O que é Volume',
        text: 'É o espaço de armazenamento usado pelos Pods. Sem volume, tudo o que o Pod grava é apagado quando ele morre — o Pod é o computador, o volume é o HD.',
        items: ['Salvar arquivos', 'Banco de dados', 'Logs', 'Compartilhar dados entre contêineres']
      },
      {
        title: 'Tipos de volume mais comuns',
        items: [
          'emptyDir: temporário',
          'hostPath: pasta do servidor',
          'NFS: rede',
          'Cloud Disk: AWS, Azure, GCP'
        ]
      },
      {
        title: 'PV — Persistent Volume',
        text: 'É o disco físico disponível no cluster, criado pelo administrador. É como um estoque de HDs disponíveis.'
      },
      {
        title: 'PVC — Persistent Volume Claim',
        text: 'É o pedido de um Pod para usar um disco: você pede um HD de 10 GB e o sistema entrega. O fluxo é PVC → encontra um PV → o Pod usa.'
      },
      {
        title: 'Ciclo completo',
        items: [
          '1. O administrador cria o PV',
          '2. O usuário cria o PVC',
          '3. O Kubernetes conecta os dois',
          '4. O Pod usa o armazenamento'
        ]
      },
      {
        title: 'Modos de acesso',
        items: ['ReadWriteOnce', 'ReadOnlyMany', 'ReadWriteMany']
      },
      {
        title: 'Comandos básicos',
        items: ['kubectl get pv', 'kubectl get pvc', 'kubectl describe pv nome', 'kubectl describe pvc nome']
      },
      {
        title: 'Boas práticas',
        items: ['Sempre usar PVC', 'Monitorar espaço', 'Ter backup', 'Definir o tamanho correto']
      }
    ],
    practice: ['O que é Volume?', 'Diferença entre PV e PVC?', 'Cite um tipo de volume.'],
    outcome: 'Provisionar e consumir armazenamento persistente sem perder dados no ciclo do Pod.'
  },
  {
    id: 'k8s-6',
    number: 6,
    title: 'StatefulSet',
    objective:
      'Rodar aplicações que precisam manter identidade e dados fixos, com ordem controlada.',
    topics: [
      {
        title: 'O que é um StatefulSet',
        text: 'Controlador para aplicações que precisam manter identidade e dados. Como uma sala de aula em que cada aluno tem nome fixo, mesa exclusiva e armário próprio — mesmo saindo e voltando, tudo continua igual.'
      },
      {
        title: 'Quando usar',
        items: [
          'A aplicação precisa manter dados (banco de dados)',
          'Precisa de nome fixo',
          'Precisa de ordem de inicialização',
          'Precisa de volume exclusivo por Pod'
        ],
        text: 'Exemplos: MySQL, PostgreSQL, Kafka, Redis Cluster e Elasticsearch.'
      },
      {
        title: 'Deployment x StatefulSet',
        items: [
          'Deployment: Pods sem identidade fixa, podem trocar de nome, sem garantia de ordem',
          'StatefulSet: Pods com nome fixo (app-0, app-1), volume próprio e ordem controlada'
        ]
      },
      {
        title: 'Nomes e identidade',
        text: 'Os Pods recebem nomes previsíveis — meu-app-0, meu-app-1, meu-app-2 — e o nome permanece mesmo após reiniciar.'
      },
      {
        title: 'Armazenamento',
        text: 'Cada Pod recebe um PVC automático, garantindo que os dados não se percam. O fluxo é StatefulSet → PVC → PV → disco.'
      },
      {
        title: 'Ordem de criação e deleção',
        text: 'Cria o Pod 0, depois o 1, depois o 2. Na exclusão, a ordem é inversa.'
      },
      {
        title: 'Service Headless',
        text: 'O StatefulSet normalmente usa um Service Headless (ClusterIP: None), o que permite acessar cada Pod individualmente.'
      },
      {
        title: 'Comandos e boas práticas',
        items: [
          'kubectl get statefulsets / describe statefulset nome / get pvc',
          'Usar sempre com volumes persistentes',
          'Planejar backup',
          'Usar Service Headless',
          'Monitorar espaço em disco'
        ]
      }
    ],
    practice: [
      'O que é StatefulSet?',
      'Quando usar?',
      'Qual a diferença para o Deployment?',
      'Por que ele usa PVC automático?'
    ],
    outcome: 'Escolher entre Deployment e StatefulSet conforme a aplicação tenha ou não estado.'
  },
  {
    id: 'k8s-7',
    number: 7,
    title: 'Policies: NetworkPolicy e RBAC',
    objective: 'Controlar quem acessa quem na rede e quem pode fazer o quê no cluster.',
    topics: [
      {
        title: 'O que são policies',
        text: 'Regras que controlam quem pode acessar quem (rede) e quem pode fazer o quê (permissões) — como as regras de uma escola sobre quem entra em qual sala.'
      },
      {
        title: 'NetworkPolicy',
        text: 'Controla o tráfego de rede entre Pods: quem pode se conectar a quem, em quais portas e em qual direção. É como uma cerca com portões.',
        items: [
          'Ingress: quem pode entrar',
          'Egress: para onde pode sair',
          'Funciona com labels: Pod → verifica policy → permite ou bloqueia'
        ]
      },
      {
        title: 'Para que serve a NetworkPolicy',
        items: [
          'Aumentar a segurança',
          'Bloquear acessos indevidos',
          'Separar ambientes (o frontend não acessa o banco direto)',
          'Controlar a comunicação entre microsserviços'
        ]
      },
      {
        title: 'Boas práticas de NetworkPolicy',
        items: [
          'Sempre negar tudo e liberar só o necessário',
          'Usar labels bem definidas',
          'Testar as regras em homologação',
          'Monitorar o tráfego'
        ]
      },
      {
        title: 'RBAC — Role Based Access Control',
        text: 'Controla quem pode executar comandos e quem pode criar, deletar ou visualizar recursos. É o porteiro que libera acesso por crachá.',
        items: [
          'Role: define permissões',
          'ClusterRole: permissões globais',
          'RoleBinding: liga o usuário à Role',
          'ServiceAccount: identidade de uma aplicação'
        ]
      },
      {
        title: 'Como funciona o RBAC',
        text: 'O fluxo é Usuário → RoleBinding → Role → Permissões. Exemplo: o dev pode ver Pods, mas não apagar.'
      },
      {
        title: 'Comandos básicos',
        items: [
          'kubectl get networkpolicy / describe networkpolicy nome',
          'kubectl get roles / get rolebindings / get clusterroles'
        ]
      },
      {
        title: 'Boas práticas de RBAC',
        items: [
          'Princípio do menor privilégio',
          'Evitar permissões administrativas',
          'Usar ServiceAccount para aplicações',
          'Revisar acessos periodicamente'
        ]
      }
    ],
    practice: [
      'O que é NetworkPolicy?',
      'Para que servem Ingress e Egress?',
      'O que faz uma Role?',
      'Por que a segurança é importante?'
    ],
    outcome: 'Proteger a rede e as permissões do cluster aplicando o menor privilégio.'
  },
  {
    id: 'k8s-8',
    number: 8,
    title: 'Scheduling',
    objective: 'Entender como o Kubernetes decide em qual Node cada Pod vai rodar e como influenciar essa decisão.',
    topics: [
      {
        title: 'O que é scheduling',
        text: 'O processo que decide em qual Node um Pod será executado. O Scheduler é como o professor que escolhe em qual sala cada aluno vai sentar.'
      },
      {
        title: 'Para que serve',
        items: [
          'Distribuir carga entre servidores',
          'Evitar sobrecarga',
          'Garantir desempenho',
          'Usar os recursos corretamente'
        ]
      },
      {
        title: 'Como o Scheduler funciona',
        items: [
          '1. Analisa os Nodes disponíveis',
          '2. Verifica recursos: CPU, memória e disco',
          '3. Aplica regras e restrições',
          '4. Escolhe o melhor Node',
          '5. Agenda o Pod'
        ],
        text: 'O fluxo é Pod → Scheduler → Node.'
      },
      {
        title: 'Node Selector e Node Affinity',
        items: [
          'Node Selector: escolhe um Node específico por label (rodar apenas em Node com GPU)',
          'Node Affinity: forma avançada, podendo ser obrigatória (required) ou preferencial (preferred)'
        ]
      },
      {
        title: 'Taints e Tolerations',
        text: 'Taint bloqueia Pods em um Node; Toleration permite a exceção. Exemplo: um Node exclusivo para banco de dados.'
      },
      {
        title: 'Pod Affinity e Anti-Affinity',
        items: [
          'Affinity: mantém Pods juntos',
          'Anti-Affinity: mantém Pods separados, usado para alta disponibilidade'
        ]
      },
      {
        title: 'Preempção e prioridade',
        text: 'Pods podem ter prioridade — os mais importantes podem substituir Pods menos importantes.'
      },
      {
        title: 'Comandos e boas práticas',
        items: [
          'kubectl get nodes / describe node nome / describe pod nome',
          'Definir requests e limits',
          'Evitar regras muito restritivas',
          'Monitorar o uso de recursos'
        ]
      }
    ],
    practice: [
      'O que faz o Scheduler?',
      'Diferença entre NodeSelector e Affinity?',
      'Para que serve um Taint?',
      'O que é prioridade?'
    ],
    outcome: 'Influenciar onde os Pods rodam usando selectors, affinity, taints e prioridades.'
  },
  {
    id: 'k8s-9',
    number: 9,
    title: 'Troubleshooting',
    objective: 'Investigar e corrigir problemas com método, do sintoma à causa.',
    topics: [
      {
        title: 'O que é troubleshooting',
        text: 'Identificar, analisar e corrigir problemas. É a mesma lógica de quando a luz não acende em casa: verifica a lâmpada, o interruptor e a energia — passo a passo.'
      },
      {
        title: 'Problemas mais comuns',
        items: [
          'Pod não sobe',
          'Pod em CrashLoopBackOff',
          'Aplicação sem acesso à rede',
          'Falta de recursos (CPU / memória)',
          'Volume não monta',
          'Service não responde',
          'Permissão negada (RBAC)'
        ]
      },
      {
        title: 'Ferramenta principal: kubectl',
        items: [
          'kubectl get pods',
          'kubectl describe pod nome',
          'kubectl logs pod nome',
          'kubectl get events',
          'kubectl get nodes',
          'kubectl describe node nome'
        ]
      },
      {
        title: 'Pod não inicia',
        items: ['Imagem errada', 'Erro de configuração', 'Falta de recursos', 'Erro de volume'],
        text: 'Como investigar: get pods → describe pod → ver os eventos de erro.'
      },
      {
        title: 'CrashLoopBackOff',
        text: 'O Pod inicia e cai várias vezes. Causas: erro na aplicação, variável de ambiente errada, porta errada ou falta de dependência. Investigue com kubectl logs.'
      },
      {
        title: 'Problemas de rede',
        items: [
          'O Service existe?',
          'As labels estão corretas?',
          'Alguma NetworkPolicy está bloqueando?',
          'A porta está correta?'
        ]
      },
      {
        title: 'Problemas de volume e de recursos',
        items: [
          'Volume: o PVC está Bound? Há PV disponível? Permissões e StorageClass corretas?',
          'Recursos: requests e limits, uso de CPU e memória, quantidade de Pods no Node'
        ]
      },
      {
        title: 'Problemas de permissão (RBAC)',
        text: 'Sintomas: erro Forbidden e acesso negado. Verifique Role, RoleBinding e ServiceAccount.'
      },
      {
        title: 'Passo a passo padrão de investigação',
        items: [
          '1. Identificar o erro',
          '2. Ver os Pods',
          '3. Ver o describe',
          '4. Ver os logs',
          '5. Ver os events',
          '6. Validar os recursos',
          '7. Testar a correção'
        ]
      }
    ],
    practice: [
      'Qual comando vê os logs?',
      'O que significa CrashLoopBackOff?',
      'Como verificar erro de volume?',
      'Qual o primeiro passo da investigação?'
    ],
    outcome: 'Investigar com método e resolver os problemas mais comuns de um cluster rapidamente.'
  }
];
