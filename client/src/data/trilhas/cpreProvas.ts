import { SimuladoQuestion } from '../trilha360';

/** Simulado de conclusão de cada fase da trilha CPRE: 5 questões por módulo. */
export const CPRE_MODULE_QUIZZES: Record<string, SimuladoQuestion[]> = {
  'cpre-1': [
    {
      id: 'pq1-1',
      statement: 'O que é engenharia de requisitos?',
      options: [
        'A área que identifica, documenta, valida e gerencia necessidades e expectativas',
        'A área que projeta a arquitetura técnica do sistema',
        'A área que testa o software antes da entrega',
        'A área que gerencia o cronograma do projeto'
      ],
      answer: 0
    },
    {
      id: 'pq1-2',
      statement: 'Quem mantém a certificação CPRE?',
      options: ['O IREB', 'O ISTQB', 'A Scrum.org', 'O PMI'],
      answer: 0
    },
    {
      id: 'pq1-3',
      statement: 'Qual o foco do nível Foundation?',
      options: [
        'Os conceitos fundamentais necessários à atuação profissional',
        'A especialização em modelagem avançada',
        'A gestão de portfólio de projetos',
        'A automação de requisitos'
      ],
      answer: 0
    },
    {
      id: 'pq1-4',
      statement: 'Qual característica marca as questões da prova?',
      options: [
        'São conceituais e interpretativas',
        'Exigem cálculo e fórmulas',
        'Cobram experiência prática comprovada',
        'São dissertativas'
      ],
      answer: 0
    },
    {
      id: 'pq1-5',
      statement: 'Qual a relação entre requisitos e qualidade?',
      options: [
        'A qualidade começa no requisito: uma necessidade mal entendida gera o produto errado',
        'Qualidade depende apenas dos testes',
        'Requisitos não influenciam a qualidade final',
        'Qualidade é responsabilidade exclusiva do desenvolvimento'
      ],
      answer: 0
    }
  ],

  'cpre-2': [
    {
      id: 'pq2-1',
      statement: 'Qual o papel do repositório oficial da trilha?',
      options: [
        'Centralizar materiais, links oficiais, simulados e histórico',
        'Hospedar o código do sistema em análise',
        'Substituir o syllabus do IREB',
        'Registrar as notas oficiais da certificação'
      ],
      answer: 0
    },
    {
      id: 'pq2-2',
      statement: 'Por que acompanhar as versões do material?',
      options: [
        'Para não estudar por uma versão antiga do syllabus',
        'Para contar quantos arquivos existem',
        'Porque a prova cobra o histórico do repositório',
        'Para saber quem escreveu cada documento'
      ],
      answer: 0
    },
    {
      id: 'pq2-3',
      statement: 'Qual habilidade é esperada do participante no repositório?',
      options: [
        'Navegar, localizar arquivos e identificar versões atualizadas',
        'Criar branches e abrir pull requests',
        'Configurar integração contínua',
        'Publicar releases'
      ],
      answer: 0
    },
    {
      id: 'pq2-4',
      statement: 'Qual o benefício de centralizar os estudos?',
      options: [
        'Padronização e clareza do material',
        'Redução do tempo de prova',
        'Dispensa da leitura do syllabus',
        'Garantia de aprovação'
      ],
      answer: 0
    },
    {
      id: 'pq2-5',
      statement: 'As anotações pessoais fazem parte do acervo da trilha?',
      options: [
        'Sim — junto com exercícios e materiais complementares',
        'Não — apenas documentos oficiais',
        'Somente se aprovadas pelo instrutor',
        'Somente ao final da trilha'
      ],
      answer: 0
    }
  ],

  'cpre-3': [
    {
      id: 'pq3-1',
      statement: 'Qual destes é um requisito não funcional?',
      options: [
        'O sistema deve responder em até 2 segundos para 95% das requisições',
        'O sistema deve permitir cadastrar clientes',
        'O usuário deve conseguir emitir um relatório',
        'O gestor deve aprovar solicitações'
      ],
      answer: 0
    },
    {
      id: 'pq3-2',
      statement: 'O que é uma restrição?',
      options: [
        'Uma limitação imposta à solução, como tecnologia obrigatória ou exigência legal',
        'Uma função que o sistema deve executar',
        'Um critério de aceitação',
        'Um objetivo de negócio'
      ],
      answer: 0
    },
    {
      id: 'pq3-3',
      statement: 'O que é uma regra de negócio?',
      options: [
        'Uma política ou condição do negócio que o sistema deve respeitar',
        'Uma etapa do processo de desenvolvimento',
        'Uma restrição tecnológica',
        'Um critério de qualidade da documentação'
      ],
      answer: 0
    },
    {
      id: 'pq3-4',
      statement: 'Por que "o sistema deve ser rápido" é um requisito ruim?',
      options: [
        'Não é verificável nem claro: falta critério objetivo',
        'É longo demais',
        'É um requisito funcional mal classificado',
        'Não tem um ator definido'
      ],
      answer: 0
    },
    {
      id: 'pq3-5',
      statement: 'Quais são critérios de qualidade de um requisito?',
      options: [
        'Clareza, consistência, completude, rastreabilidade, verificabilidade e ausência de ambiguidade',
        'Escopo, prazo, custo e risco',
        'Prioridade, severidade, impacto e urgência',
        'Origem, autor, data e versão'
      ],
      answer: 0
    }
  ],

  'cpre-4': [
    {
      id: 'pq4-1',
      statement: 'Quem são os stakeholders?',
      options: [
        'Todas as pessoas ou áreas afetadas pelo sistema ou com interesse nele',
        'Apenas quem paga pelo projeto',
        'Apenas os usuários finais',
        'Apenas a equipe de desenvolvimento'
      ],
      answer: 0
    },
    {
      id: 'pq4-2',
      statement: 'Qual o risco de não identificar um stakeholder importante?',
      options: [
        'Requisitos que só aparecem no fim, quando mudar custa caro',
        'Aumento do número de reuniões',
        'Perda do histórico de versões',
        'Excesso de documentação'
      ],
      answer: 0
    },
    {
      id: 'pq4-3',
      statement: 'Qual técnica revela o que as pessoas realmente fazem?',
      options: ['Observação', 'Questionário', 'Brainstorming', 'Entrevista'],
      answer: 0
    },
    {
      id: 'pq4-4',
      statement: 'Qual técnica é a mais indicada para resolver divergências entre áreas?',
      options: ['Workshop', 'Questionário', 'Observação', 'Prototipação'],
      answer: 0
    },
    {
      id: 'pq4-5',
      statement: 'Para que serve a prototipação na elicitação?',
      options: [
        'Tornar concreto o que era abstrato e antecipar o feedback',
        'Substituir a documentação',
        'Validar o desempenho do sistema',
        'Definir a arquitetura técnica'
      ],
      answer: 0
    }
  ],

  'cpre-5': [
    {
      id: 'pq5-1',
      statement: 'O que descreve um caso de uso?',
      options: [
        'Como um ator interage com o sistema para atingir um objetivo',
        'A estrutura das tabelas do banco',
        'O cronograma de entregas',
        'Os critérios de qualidade do documento'
      ],
      answer: 0
    },
    {
      id: 'pq5-2',
      statement: 'O que é o fluxo de exceção de um caso de uso?',
      options: [
        'O caminho quando algo dá errado, como cartão recusado',
        'O caminho principal e mais comum',
        'Um caminho válido alternativo',
        'A lista de atores envolvidos'
      ],
      answer: 0
    },
    {
      id: 'pq5-3',
      statement: 'Por que modelar além do texto?',
      options: [
        'Porque o modelo revela lacunas que o texto esconde',
        'Porque substitui a documentação escrita',
        'Porque acelera o desenvolvimento',
        'Porque é exigência do syllabus'
      ],
      answer: 0
    },
    {
      id: 'pq5-4',
      statement: 'Para que serve o controle de versões da documentação?',
      options: ['Saber o que mudou, quando e por quê', 'Reduzir o tamanho dos arquivos', 'Aprovar o documento', 'Definir a prioridade dos requisitos'],
      answer: 0
    },
    {
      id: 'pq5-5',
      statement: 'Qual o risco de documentar demais?',
      options: [
        'Documento que ninguém lê nem mantém deixa de ser fonte confiável',
        'Aumento do custo de licenças',
        'Perda da rastreabilidade automaticamente',
        'Impossibilidade de versionar'
      ],
      answer: 0
    }
  ],

  'cpre-6': [
    {
      id: 'pq6-1',
      statement: 'O que é validar um requisito?',
      options: [
        'Confirmar com os stakeholders que o documentado corresponde à necessidade real',
        'Conferir se o texto está bem escrito',
        'Testar o sistema já implementado',
        'Aprovar o cronograma do projeto'
      ],
      answer: 0
    },
    {
      id: 'pq6-2',
      statement: 'Qual a diferença entre verificar e validar um requisito?',
      options: [
        'Verificar checa se está bem escrito e consistente; validar checa se é o requisito certo',
        'Validar checa a escrita; verificar checa a necessidade',
        'São sinônimos',
        'Verificar é feito pelo cliente; validar, pelo analista'
      ],
      answer: 0
    },
    {
      id: 'pq6-3',
      statement: 'Por que mudanças de requisitos precisam ser controladas?',
      options: [
        'Porque impactam escopo, prazo, custo e outros requisitos',
        'Porque o cliente não pode mudar de ideia',
        'Porque atrasam a documentação',
        'Porque exigem nova certificação'
      ],
      answer: 0
    },
    {
      id: 'pq6-4',
      statement: 'O que é análise de impacto?',
      options: [
        'Identificar o que será afetado por uma alteração antes de aprová-la',
        'Medir a satisfação dos stakeholders',
        'Avaliar o desempenho do sistema',
        'Calcular o custo total do projeto'
      ],
      answer: 0
    },
    {
      id: 'pq6-5',
      statement: 'O que a rastreabilidade permite saber?',
      options: [
        'A origem do requisito, seus relacionamentos e o histórico de alterações',
        'O tempo gasto em cada tarefa',
        'A produtividade da equipe',
        'A cobertura de testes automatizados'
      ],
      answer: 0
    }
  ],

  'cpre-7': [
    {
      id: 'pq7-1',
      statement: 'Qual destas afirmações é correta?',
      options: [
        'Requisito é a necessidade; a solução técnica é a decisão de como atendê-la',
        'Requisito e solução técnica são a mesma coisa',
        'Todo requisito deve indicar a tecnologia a ser usada',
        'A solução técnica precede o requisito'
      ],
      answer: 0
    },
    {
      id: 'pq7-2',
      statement: '"O sistema deve armazenar os dados em PostgreSQL" é:',
      options: [
        'Uma solução técnica, não um requisito',
        'Um requisito funcional',
        'Um requisito não funcional',
        'Um critério de aceitação'
      ],
      answer: 0
    },
    {
      id: 'pq7-3',
      statement: 'Toda necessidade levantada vira requisito?',
      options: [
        'Não — necessidades passam por análise, priorização e decisão',
        'Sim, todas devem ser registradas como requisito',
        'Sim, se vierem de um stakeholder importante',
        'Somente as necessidades funcionais'
      ],
      answer: 0
    },
    {
      id: 'pq7-4',
      statement: 'Um requisito que não pode ser verificado:',
      options: [
        'Não é aceitável, pois não há como comprovar o atendimento',
        'É aceitável se o cliente concordar',
        'É aceitável para requisitos não funcionais',
        'É aceitável na fase inicial do projeto'
      ],
      answer: 0
    },
    {
      id: 'pq7-5',
      statement: 'Como decidir entre duas alternativas parecidas na prova?',
      options: [
        'Voltando à definição do syllabus, não à experiência pessoal',
        'Escolhendo a mais usada no mercado',
        'Escolhendo a mais detalhada',
        'Escolhendo a que cita ferramentas'
      ],
      answer: 0
    }
  ],

  'cpre-8': [
    {
      id: 'pq8-1',
      statement: 'Qual o papel do material complementar?',
      options: [
        'Explicar o syllabus, nunca substituí-lo',
        'Servir como fonte principal de estudo',
        'Substituir os simulados',
        'Antecipar as questões da prova'
      ],
      answer: 0
    },
    {
      id: 'pq8-2',
      statement: 'Como as videoaulas devem ser utilizadas?',
      options: [
        'Em ordem, com anotações e revisão dos tópicos complexos',
        'Em velocidade acelerada, sem pausas',
        'Apenas na semana da prova',
        'Somente após os simulados'
      ],
      answer: 0
    },
    {
      id: 'pq8-3',
      statement: 'Por que fazer resumo do próprio entendimento?',
      options: [
        'Reformular com as próprias palavras revela o que não foi compreendido',
        'Para diminuir o tempo de estudo',
        'Porque o IREB exige',
        'Para substituir a leitura do syllabus'
      ],
      answer: 0
    },
    {
      id: 'pq8-4',
      statement: 'Para que servem os exercícios comentados?',
      options: [
        'Mostrar o raciocínio por trás da alternativa correta',
        'Aumentar o número de questões respondidas',
        'Testar a velocidade de leitura',
        'Simular o ambiente da prova'
      ],
      answer: 0
    },
    {
      id: 'pq8-5',
      statement: 'Qual documento deve ser a referência central do estudo?',
      options: ['O syllabus oficial do IREB', 'O resumo do instrutor', 'As videoaulas', 'Os simulados'],
      answer: 0
    }
  ],

  'cpre-9': [
    {
      id: 'pq9-1',
      statement: 'Quais metas a trilha recomenda para os simulados?',
      options: [
        'Alto índice de acertos, consistência, rapidez de interpretação e segurança na decisão',
        'Fazer o maior número possível de simulados',
        'Acertar 100% ao menos uma vez',
        'Concluir cada simulado em metade do tempo'
      ],
      answer: 0
    },
    {
      id: 'pq9-2',
      statement: 'O que fazer com os erros cometidos?',
      options: [
        'Analisá-los e voltar ao ponto correspondente do syllabus',
        'Refazer o mesmo simulado até decorar',
        'Ignorá-los se a nota geral for boa',
        'Trocar de material'
      ],
      answer: 0
    },
    {
      id: 'pq9-3',
      statement: 'Por que o inglês pesa na preparação?',
      options: [
        'A prova é aplicada em inglês e é interpretativa',
        'Porque o syllabus não tem tradução',
        'Porque as questões usam gírias',
        'Porque o tempo é menor para não nativos'
      ],
      answer: 0
    },
    {
      id: 'pq9-4',
      statement: 'Que termos originais convém dominar?',
      options: [
        'Requirement, stakeholder, elicitation, traceability e validation',
        'Sprint, backlog, increment e retrospective',
        'Defect, severity, coverage e regression',
        'Pipeline, deploy, rollback e release'
      ],
      answer: 0
    },
    {
      id: 'pq9-5',
      statement: 'O que a consistência nos simulados indica?',
      options: [
        'Domínio estável do conteúdo, e não acerto por sorte',
        'Que os simulados são fáceis',
        'Que o candidato decorou as respostas',
        'Que o tempo está sobrando'
      ],
      answer: 0
    }
  ],

  'cpre-10': [
    {
      id: 'pq10-1',
      statement: 'O que revisar na preparação final?',
      options: [
        'Conceitos fundamentais, tipos de requisitos, elicitação, documentação, validação, gerenciamento e armadilhas',
        'Apenas as técnicas de elicitação',
        'Apenas os erros dos simulados',
        'Apenas o vocabulário em inglês'
      ],
      answer: 0
    },
    {
      id: 'pq10-2',
      statement: 'Qual recomendação vale para o dia da prova?',
      options: [
        'Ambiente silencioso, internet estável e boa gestão do tempo',
        'Fazer a prova com um colega ao lado',
        'Consultar o syllabus durante o exame',
        'Responder sem revisar, para ganhar tempo'
      ],
      answer: 0
    },
    {
      id: 'pq10-3',
      statement: 'A que tipo de questão se deve atenção especial?',
      options: ['Às interpretativas', 'Às de cálculo', 'Às dissertativas', 'Às de múltipla resposta obrigatória'],
      answer: 0
    },
    {
      id: 'pq10-4',
      statement: 'Qual é o objetivo maior da trilha?',
      options: [
        'O entendimento real da engenharia de requisitos',
        'A aprovação no menor tempo possível',
        'A memorização do syllabus',
        'O domínio de uma ferramenta de requisitos'
      ],
      answer: 0
    },
    {
      id: 'pq10-5',
      statement: 'Quando o participante conclui a trilha?',
      options: [
        'Ao finalizar as fases, estudar o syllabus, fazer os simulados e demonstrar entendimento',
        'Ao assistir a todas as videoaulas',
        'Ao agendar a prova oficial',
        'Ao acessar todos os links oficiais'
      ],
      answer: 0
    }
  ]
};

const first = (moduleId: string, count: number) => CPRE_MODULE_QUIZZES[moduleId].slice(0, count);

/**
 * Simulado final: 50 questões — 4 de cada uma das 10 fases (40)
 * e mais 10 cenários de aplicação, no estilo interpretativo da prova.
 */
export const CPRE_SIMULADO: SimuladoQuestion[] = [
  ...first('cpre-1', 4),
  ...first('cpre-2', 4),
  ...first('cpre-3', 4),
  ...first('cpre-4', 4),
  ...first('cpre-5', 4),
  ...first('cpre-6', 4),
  ...first('cpre-7', 4),
  ...first('cpre-8', 4),
  ...first('cpre-9', 4),
  ...first('cpre-10', 4),
  {
    id: 'ps-41',
    statement:
      '"O sistema deve ser fácil de usar." Qual critério de qualidade esse requisito viola principalmente?',
    options: [
      'Verificabilidade — não há como comprovar objetivamente o atendimento',
      'Consistência — ele conflita com outros requisitos',
      'Rastreabilidade — não se sabe quem pediu',
      'Completude — falta o ator'
    ],
    answer: 0
  },
  {
    id: 'ps-42',
    statement:
      'Um stakeholder diz: "preciso de um botão vermelho no canto da tela". Qual a conduta correta do analista?',
    options: [
      'Investigar a necessidade por trás do pedido antes de registrá-lo como requisito',
      'Registrar exatamente como foi pedido',
      'Recusar o pedido por ser detalhe de interface',
      'Encaminhar direto para o desenvolvimento'
    ],
    answer: 0
  },
  {
    id: 'ps-43',
    statement:
      'Duas áreas descrevem a mesma regra de forma contraditória. Que critério de qualidade está em risco?',
    options: ['Consistência', 'Verificabilidade', 'Rastreabilidade', 'Completude'],
    answer: 0
  },
  {
    id: 'ps-44',
    statement:
      'É preciso levantar necessidades de 200 usuários espalhados pelo país, com pouco tempo. Qual técnica é a mais adequada?',
    options: ['Questionário', 'Entrevista individual com cada um', 'Observação', 'Workshop presencial'],
    answer: 0
  },
  {
    id: 'ps-45',
    statement:
      'O cliente aprovou o documento, mas na entrega afirma que não era aquilo. O que provavelmente falhou?',
    options: [
      'A validação: o documento não foi confrontado com a necessidade real',
      'A verificação ortográfica do texto',
      'O versionamento do documento',
      'A priorização dos requisitos'
    ],
    answer: 0
  },
  {
    id: 'ps-46',
    statement: 'Uma mudança pequena em um requisito quebrou três funcionalidades. O que faltou?',
    options: [
      'Rastreabilidade e análise de impacto',
      'Prototipação',
      'Escuta ativa',
      'Padronização da documentação'
    ],
    answer: 0
  },
  {
    id: 'ps-47',
    statement: 'Qual destes é um critério de aceitação bem formulado?',
    options: [
      '"O pedido é confirmado em até 3 segundos após o pagamento aprovado"',
      '"O pedido deve ser confirmado rapidamente"',
      '"O sistema deve usar fila de mensagens"',
      '"O cliente deve ficar satisfeito com a confirmação"'
    ],
    answer: 0
  },
  {
    id: 'ps-48',
    statement: 'O processo atual é descrito de um jeito pela gerência e executado de outro pela equipe. Qual técnica esclarece?',
    options: ['Observação do trabalho real', 'Questionário para a gerência', 'Brainstorming', 'Revisão documental'],
    answer: 0
  },
  {
    id: 'ps-49',
    statement: 'Um requisito diz o que fazer; outro impõe usar determinada tecnologia. Como classificá-los?',
    options: [
      'O primeiro é requisito funcional; o segundo é uma restrição',
      'Ambos são requisitos funcionais',
      'O primeiro é restrição; o segundo é requisito não funcional',
      'Ambos são regras de negócio'
    ],
    answer: 0
  },
  {
    id: 'ps-50',
    statement: 'Qual é a diferença essencial entre requisito e solução?',
    options: [
      'O requisito expressa a necessidade; a solução expressa como atendê-la',
      'O requisito é técnico; a solução é de negócio',
      'O requisito vem depois da solução',
      'Não há diferença prática'
    ],
    answer: 0
  }
];
