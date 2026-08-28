import { SimuladoQuestion } from '../trilha360';

/** Simulado de conclusão de cada módulo da trilha de Kubernetes: 5 questões por módulo. */
export const KUBERNETES_MODULE_QUIZZES: Record<string, SimuladoQuestion[]> = {
  'k8s-1': [
    {
      id: 'kq1-1',
      statement: 'O que é um Pod?',
      options: [
        'A menor unidade do Kubernetes, que guarda um ou mais contêineres',
        'Um servidor físico do cluster',
        'Um tipo de volume persistente',
        'Uma regra de rede entre aplicações'
      ],
      answer: 0
    },
    {
      id: 'kq1-2',
      statement: 'O que os contêineres de um mesmo Pod compartilham?',
      options: [
        'Rede (mesmo IP), armazenamento e configurações',
        'Apenas o nome',
        'Somente a imagem',
        'Nada — são isolados entre si'
      ],
      answer: 0
    },
    {
      id: 'kq1-3',
      statement: 'Qual comando mostra os detalhes e eventos de um Pod?',
      options: ['kubectl describe pod nome', 'kubectl get nodes', 'kubectl scale pod nome', 'kubectl apply pod'],
      answer: 0
    },
    {
      id: 'kq1-4',
      statement: 'Quais são as partes que compõem um Pod?',
      options: [
        'Metadata, Spec e Status',
        'Role, RoleBinding e ServiceAccount',
        'PV, PVC e StorageClass',
        'Ingress, Egress e Selector'
      ],
      answer: 0
    },
    {
      id: 'kq1-5',
      statement: 'Qual é a boa prática sobre processos dentro de um Pod?',
      options: [
        'Manter um processo principal por Pod',
        'Colocar o maior número possível de processos',
        'Evitar o uso de labels',
        'Nunca monitorar recursos'
      ],
      answer: 0
    }
  ],

  'k8s-2': [
    {
      id: 'kq2-1',
      statement: 'Qual é o fluxo interno de um Deployment?',
      options: [
        'Deployment → ReplicaSet → Pods',
        'Deployment → Pods → ReplicaSet',
        'ReplicaSet → Deployment → Node',
        'Service → Deployment → Pods'
      ],
      answer: 0
    },
    {
      id: 'kq2-2',
      statement: 'O que o Deployment garante?',
      options: [
        'Que exista sempre a quantidade correta de Pods rodando',
        'Que cada Pod tenha nome fixo',
        'Que o volume seja persistente',
        'Que o tráfego externo seja balanceado'
      ],
      answer: 0
    },
    {
      id: 'kq2-3',
      statement: 'O que é o rolling update?',
      options: [
        'A atualização que cria Pods novos e remove os antigos aos poucos',
        'A exclusão de todos os Pods antes de subir a nova versão',
        'A cópia do cluster para outro ambiente',
        'A troca do Node onde a aplicação roda'
      ],
      answer: 0
    },
    {
      id: 'kq2-4',
      statement: 'Qual comando aumenta o número de réplicas para 5?',
      options: [
        'kubectl scale deployment nome --replicas=5',
        'kubectl rollout undo deployment nome',
        'kubectl get deployments',
        'kubectl describe deployment nome'
      ],
      answer: 0
    },
    {
      id: 'kq2-5',
      statement: 'Para que serve o rollback?',
      options: [
        'Voltar para a versão anterior quando algo dá errado',
        'Aumentar o número de Pods',
        'Criar um novo Service',
        'Reiniciar o Node'
      ],
      answer: 0
    }
  ],

  'k8s-3': [
    {
      id: 'kq3-1',
      statement: 'Qual é a função principal de um Service?',
      options: [
        'Criar um endereço fixo para acessar os Pods, mesmo quando eles mudam',
        'Armazenar dados de forma persistente',
        'Definir permissões de usuários',
        'Escolher em qual Node o Pod roda'
      ],
      answer: 0
    },
    {
      id: 'kq3-2',
      statement: 'Como o Service encontra os Pods?',
      options: ['Pelas labels', 'Pelo endereço IP fixo do Pod', 'Pelo nome do Node', 'Pelo PVC'],
      answer: 0
    },
    {
      id: 'kq3-3',
      statement: 'Qual tipo de Service é usado para acesso interno ao cluster?',
      options: ['ClusterIP', 'NodePort', 'LoadBalancer', 'ExternalName'],
      answer: 0
    },
    {
      id: 'kq3-4',
      statement: 'Qual tipo cria automaticamente um IP público em ambientes de nuvem?',
      options: ['LoadBalancer', 'ClusterIP', 'NodePort', 'Headless'],
      answer: 0
    },
    {
      id: 'kq3-5',
      statement: 'O que o Service faz com as requisições recebidas?',
      options: [
        'Distribui entre os Pods, balanceando a carga',
        'Envia sempre para o primeiro Pod criado',
        'Armazena até que um Pod peça',
        'Encaminha para fora do cluster'
      ],
      answer: 0
    }
  ],

  'k8s-4': [
    {
      id: 'kq4-1',
      statement: 'Para que serve um ConfigMap?',
      options: [
        'Guardar configurações da aplicação, separando configuração do código',
        'Guardar senhas e certificados',
        'Armazenar dados persistentes',
        'Definir regras de rede'
      ],
      answer: 0
    },
    {
      id: 'kq4-2',
      statement: 'O que deve ser guardado em um Secret?',
      options: [
        'Senhas, tokens, chaves e certificados',
        'URLs e portas públicas',
        'Mensagens de interface',
        'Logs da aplicação'
      ],
      answer: 0
    },
    {
      id: 'kq4-3',
      statement: 'Qual é a diferença entre ConfigMap e Secret?',
      options: [
        'ConfigMap guarda dados comuns; Secret guarda dados sigilosos',
        'ConfigMap é criptografado; Secret não',
        'Secret só funciona com StatefulSet',
        'Não há diferença prática'
      ],
      answer: 0
    },
    {
      id: 'kq4-4',
      statement: 'De que formas um Pod pode consumir esses recursos?',
      options: [
        'Como variável de ambiente, arquivo ou parâmetro',
        'Somente como variável de ambiente',
        'Somente por chamada de API',
        'Somente como volume persistente'
      ],
      answer: 0
    },
    {
      id: 'kq4-5',
      statement: 'Qual prática deve ser evitada?',
      options: [
        'Colocar senha em ConfigMap',
        'Usar RBAC para restringir acesso',
        'Criptografar os secrets',
        'Versionar as configurações'
      ],
      answer: 0
    }
  ],

  'k8s-5': [
    {
      id: 'kq5-1',
      statement: 'O que acontece com os dados de um Pod sem volume?',
      options: [
        'São apagados quando o Pod morre',
        'São movidos para outro Pod',
        'Ficam salvos no Service',
        'São enviados para o Node'
      ],
      answer: 0
    },
    {
      id: 'kq5-2',
      statement: 'O que é um Persistent Volume (PV)?',
      options: [
        'O disco disponível no cluster, criado pelo administrador',
        'O pedido de armazenamento feito pelo Pod',
        'Um volume temporário do Pod',
        'Uma política de acesso à rede'
      ],
      answer: 0
    },
    {
      id: 'kq5-3',
      statement: 'O que é um Persistent Volume Claim (PVC)?',
      options: [
        'O pedido de um Pod para usar um disco',
        'O disco físico do cluster',
        'Uma cópia de segurança',
        'Um tipo de Service'
      ],
      answer: 0
    },
    {
      id: 'kq5-4',
      statement: 'Qual é a ordem correta do ciclo de armazenamento?',
      options: [
        'Admin cria o PV → usuário cria o PVC → Kubernetes conecta → Pod usa',
        'Pod usa → PVC → PV → admin aprova',
        'PVC → Node → Service → Pod',
        'PV → Service → PVC → Pod'
      ],
      answer: 0
    },
    {
      id: 'kq5-5',
      statement: 'Qual destes é um modo de acesso válido?',
      options: ['ReadWriteOnce', 'ReadOnlyOnce', 'WriteOnlyMany', 'ReadWriteHeadless'],
      answer: 0
    }
  ],

  'k8s-6': [
    {
      id: 'kq6-1',
      statement: 'Quando usar um StatefulSet em vez de um Deployment?',
      options: [
        'Quando a aplicação precisa manter dados, nome fixo e ordem de inicialização',
        'Quando a aplicação não guarda estado',
        'Quando não é necessário volume',
        'Quando há apenas uma réplica'
      ],
      answer: 0
    },
    {
      id: 'kq6-2',
      statement: 'Como são nomeados os Pods de um StatefulSet?',
      options: [
        'De forma previsível e fixa: app-0, app-1, app-2',
        'Com sufixos aleatórios a cada reinício',
        'Pelo nome do Node onde rodam',
        'Pelo nome do Service'
      ],
      answer: 0
    },
    {
      id: 'kq6-3',
      statement: 'O que acontece com o armazenamento em um StatefulSet?',
      options: [
        'Cada Pod recebe um PVC automático',
        'Todos os Pods dividem o mesmo volume temporário',
        'Não há armazenamento persistente',
        'O volume é criado apenas no primeiro Pod'
      ],
      answer: 0
    },
    {
      id: 'kq6-4',
      statement: 'Qual é a ordem de criação e exclusão dos Pods?',
      options: [
        'Cria do Pod 0 em diante; exclui na ordem inversa',
        'Cria e exclui todos ao mesmo tempo',
        'Cria do último para o primeiro',
        'A ordem é aleatória'
      ],
      answer: 0
    },
    {
      id: 'kq6-5',
      statement: 'Por que o StatefulSet usa Service Headless?',
      options: [
        'Para permitir acessar cada Pod individualmente (ClusterIP: None)',
        'Para expor a aplicação na internet',
        'Para balancear a carga entre os Pods',
        'Para dispensar o uso de labels'
      ],
      answer: 0
    }
  ],

  'k8s-7': [
    {
      id: 'kq7-1',
      statement: 'O que uma NetworkPolicy controla?',
      options: [
        'O tráfego de rede entre Pods: quem se conecta a quem, em quais portas e direção',
        'Quais usuários podem apagar recursos',
        'Em qual Node o Pod roda',
        'O tamanho do volume de cada Pod'
      ],
      answer: 0
    },
    {
      id: 'kq7-2',
      statement: 'Qual a diferença entre Ingress e Egress em uma NetworkPolicy?',
      options: [
        'Ingress define quem entra; Egress define para onde se pode sair',
        'Ingress é para volumes; Egress é para rede',
        'Ingress é interno; Egress é do administrador',
        'São sinônimos'
      ],
      answer: 0
    },
    {
      id: 'kq7-3',
      statement: 'O que significa RBAC?',
      options: [
        'Role Based Access Control',
        'Resource Balance Access Configuration',
        'Rule Based Application Cluster',
        'Runtime Backup and Control'
      ],
      answer: 0
    },
    {
      id: 'kq7-4',
      statement: 'Qual é o fluxo de permissões no RBAC?',
      options: [
        'Usuário → RoleBinding → Role → permissões',
        'Role → Usuário → ServiceAccount → cluster',
        'RoleBinding → Node → Pod → permissões',
        'ServiceAccount → NetworkPolicy → Role'
      ],
      answer: 0
    },
    {
      id: 'kq7-5',
      statement: 'Qual princípio deve guiar a configuração de acessos?',
      options: [
        'O menor privilégio, liberando apenas o necessário',
        'Conceder acesso administrativo para agilizar',
        'Compartilhar uma única conta entre a equipe',
        'Liberar tudo e restringir depois'
      ],
      answer: 0
    }
  ],

  'k8s-8': [
    {
      id: 'kq8-1',
      statement: 'O que o Scheduler decide?',
      options: [
        'Em qual Node cada Pod será executado',
        'Quantas réplicas a aplicação terá',
        'Qual volume será criado',
        'Quem pode acessar o cluster'
      ],
      answer: 0
    },
    {
      id: 'kq8-2',
      statement: 'Qual a diferença entre Node Selector e Node Affinity?',
      options: [
        'O Selector escolhe por label de forma simples; a Affinity é avançada e pode ser obrigatória ou preferencial',
        'O Selector é obrigatório; a Affinity é proibida',
        'Os dois fazem exatamente a mesma coisa',
        'A Affinity só funciona com StatefulSet'
      ],
      answer: 0
    },
    {
      id: 'kq8-3',
      statement: 'Para que serve um Taint?',
      options: [
        'Bloquear Pods em um Node, salvo quem tiver Toleration',
        'Aumentar a prioridade de um Pod',
        'Marcar um volume como somente leitura',
        'Definir a porta do Service'
      ],
      answer: 0
    },
    {
      id: 'kq8-4',
      statement: 'Para que serve o Pod Anti-Affinity?',
      options: [
        'Manter Pods separados, garantindo alta disponibilidade',
        'Manter Pods sempre juntos no mesmo Node',
        'Impedir a criação de novos Pods',
        'Reduzir o consumo de memória'
      ],
      answer: 0
    },
    {
      id: 'kq8-5',
      statement: 'O que acontece na preempção?',
      options: [
        'Pods de maior prioridade podem substituir Pods menos importantes',
        'Todos os Pods são reiniciados',
        'O Node entra em manutenção',
        'O volume é desmontado'
      ],
      answer: 0
    }
  ],

  'k8s-9': [
    {
      id: 'kq9-1',
      statement: 'O que significa CrashLoopBackOff?',
      options: [
        'O Pod inicia e cai várias vezes seguidas',
        'O Pod está aguardando um volume',
        'O Node está sem espaço em disco',
        'A imagem não foi encontrada'
      ],
      answer: 0
    },
    {
      id: 'kq9-2',
      statement: 'Qual comando mostra os logs de um Pod?',
      options: ['kubectl logs pod nome', 'kubectl get pods', 'kubectl describe node nome', 'kubectl get events'],
      answer: 0
    },
    {
      id: 'kq9-3',
      statement: 'O volume não monta e o Pod fica pendente. O que verificar primeiro?',
      options: [
        'Se o PVC está Bound e se há PV disponível',
        'Se o Service existe',
        'Se o Deployment tem réplicas suficientes',
        'Se há taints no Node'
      ],
      answer: 0
    },
    {
      id: 'kq9-4',
      statement: 'Um erro Forbidden indica problema de:',
      options: ['Permissão (RBAC)', 'Rede', 'Armazenamento', 'Agendamento'],
      answer: 0
    },
    {
      id: 'kq9-5',
      statement: 'Qual é o primeiro passo do roteiro padrão de investigação?',
      options: [
        'Identificar o erro',
        'Reiniciar o cluster',
        'Aumentar as réplicas',
        'Excluir o Pod com problema'
      ],
      answer: 0
    }
  ]
};

const all = (moduleId: string) => KUBERNETES_MODULE_QUIZZES[moduleId];

/**
 * Simulado final da trilha: 50 questões — as 45 dos módulos
 * mais 5 questões que cruzam os assuntos.
 */
export const KUBERNETES_SIMULADO: SimuladoQuestion[] = [
  ...all('k8s-1'),
  ...all('k8s-2'),
  ...all('k8s-3'),
  ...all('k8s-4'),
  ...all('k8s-5'),
  ...all('k8s-6'),
  ...all('k8s-7'),
  ...all('k8s-8'),
  ...all('k8s-9'),
  {
    id: 'ks-46',
    statement: 'Uma aplicação de banco de dados precisa de nome fixo e disco próprio por réplica. O que usar?',
    options: ['StatefulSet', 'Deployment', 'DaemonSet apenas', 'ConfigMap'],
    answer: 0
  },
  {
    id: 'ks-47',
    statement: 'O frontend não deve acessar o banco diretamente. Qual recurso resolve?',
    options: ['NetworkPolicy', 'PersistentVolume', 'ReplicaSet', 'NodePort'],
    answer: 0
  },
  {
    id: 'ks-48',
    statement: 'Você precisa trocar a URL de integração sem alterar o código. Onde ela deve estar?',
    options: ['Em um ConfigMap', 'Em um Secret', 'No Dockerfile', 'No manifesto do Service'],
    answer: 0
  },
  {
    id: 'ks-49',
    statement: 'Um Pod fica pendente e o describe indica que nenhum Node atende às restrições. O que investigar?',
    options: [
      'Taints, node selector/affinity e recursos disponíveis nos Nodes',
      'A versão da imagem do contêiner',
      'O tipo do Service',
      'As permissões do RoleBinding'
    ],
    answer: 0
  },
  {
    id: 'ks-50',
    statement: 'A aplicação precisa continuar disponível durante a atualização de versão. O que garante isso?',
    options: [
      'O rolling update do Deployment',
      'A exclusão dos Pods antigos antes da atualização',
      'A troca do tipo de Service',
      'O aumento do tamanho do PVC'
    ],
    answer: 0
  }
];
