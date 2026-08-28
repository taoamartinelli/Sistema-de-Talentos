import { Module } from '../trilha360';
import { TrackOverview } from '../../components/TrackPage';

/**
 * Trilha CTFL I — baseada na Trilha Oficial de Formação
 * (Certified Tester Foundation Level), organizada nas mesmas 10 fases.
 */

export const CTFL_OVERVIEW: TrackOverview = {
  title: 'Trilha oficial de formação — CTFL',
  intro:
    'Trilha para capacitar profissionais sem experiência prévia em testes de software, qualidade ou processos de validação, conduzindo-os de forma estruturada até o nível necessário para a certificação Certified Tester Foundation Level. O conteúdo evolui em fases progressivas, dos conceitos fundamentais à preparação prática para a prova oficial.',
  pillars: [
    'Fundamentos de qualidade e testes de software',
    'O processo de teste e suas atividades',
    'Testes no ciclo de vida do desenvolvimento',
    'Níveis, tipos e técnicas de teste',
    'Gestão de testes, riscos e defeitos',
    'Ferramentas e automação',
    'Simulados e preparação final'
  ],
  audience: [
    'Pessoas sem experiência anterior em testes de software',
    'Profissionais iniciantes na área de tecnologia',
    'Quem está migrando de carreira',
    'Integrantes de squads e equipes ágeis',
    'Quem quer base sólida antes da certificação'
  ],
  prerequisite:
    'Não é necessário conhecimento prévio. A referência principal é o syllabus oficial CTFL versão 4.0, mantido pelo ISTQB e representado no Brasil pelo BSTQB.',
  completion: [
    'Explicar o que é teste de software e sua relação com qualidade',
    'Distinguir erro, defeito e falha',
    'Aplicar os sete princípios fundamentais de teste',
    'Percorrer as atividades do processo de teste',
    'Relacionar testes ao ciclo de vida e às práticas ágeis',
    'Diferenciar níveis, tipos e técnicas de teste',
    'Gerir riscos e defeitos com critérios claros',
    'Reconhecer benefícios e riscos da automação'
  ]
};

export const CTFL_MODULES: Module[] = [
  {
    id: 'ctfl-1',
    number: 1,
    title: 'Introdução à qualidade e testes',
    objective: 'Introduzir os conceitos fundamentais da área de qualidade e testes de software.',
    topics: [
      {
        title: 'O que é teste de software',
        items: [
          'O que é teste de software',
          'Objetivos dos testes',
          'Importância dos testes',
          'Qualidade de software',
          'Verificação e validação',
          'Relação entre testes e qualidade'
        ]
      },
      {
        title: 'Verificação × validação',
        text: 'Verificação pergunta se o produto está sendo construído corretamente, conforme a especificação. Validação pergunta se está sendo construído o produto certo, o que atende à necessidade real.'
      },
      {
        title: 'Erro, defeito e falha',
        items: [
          'Erro: a ação humana que produz um resultado incorreto',
          'Defeito: a imperfeição no artefato, decorrente do erro',
          'Falha: o comportamento observado quando o defeito é executado',
          'Causa raiz: a origem que, tratada, evita a repetição do problema'
        ]
      },
      {
        title: 'Os sete princípios fundamentais',
        items: [
          '1. O teste mostra a presença de defeitos, não a ausência',
          '2. Testes exaustivos são impossíveis',
          '3. Testes antecipados economizam tempo e dinheiro',
          '4. Defeitos se agrupam — poucos módulos concentram a maioria',
          '5. Cuidado com a degradação dos testes: os mesmos testes deixam de encontrar novos defeitos',
          '6. O teste depende do contexto',
          '7. A falácia da ausência de defeitos: um sistema sem defeitos conhecidos pode ainda assim ser inútil'
        ]
      }
    ],
    outcome: 'Compreender o básico sobre testes e qualidade e aplicar os sete princípios.'
  },
  {
    id: 'ctfl-2',
    number: 2,
    title: 'Processo de teste e atividades',
    objective: 'Compreender como funciona o processo de testes dentro do desenvolvimento.',
    topics: [
      {
        title: 'As atividades do processo de teste',
        items: [
          'Planejamento de testes',
          'Monitoramento e controle',
          'Análise de testes',
          'Modelagem (design) de testes',
          'Implementação',
          'Execução',
          'Encerramento das atividades'
        ]
      },
      {
        title: 'Testware',
        text: 'É o conjunto de produtos de trabalho gerados pelas atividades de teste.',
        items: [
          'Casos de teste',
          'Scripts de teste',
          'Dados de teste',
          'Relatórios',
          'Evidências',
          'Rastreabilidade'
        ]
      },
      {
        title: 'Rastreabilidade',
        text: 'Liga requisitos, casos de teste, resultados e defeitos. É o que permite responder o que foi testado, com qual cobertura e com qual resultado.'
      },
      {
        title: 'Papéis no teste',
        items: [
          'Papel do testador',
          'Papel do gerenciamento de testes',
          'Responsabilidades de cada um',
          'Comunicação entre equipes',
          'A importância da colaboração'
        ]
      }
    ],
    outcome: 'Reconhecer cada atividade do processo e os artefatos que ela produz.'
  },
  {
    id: 'ctfl-3',
    number: 3,
    title: 'Testes no ciclo de vida do desenvolvimento',
    objective: 'Compreender como os testes se relacionam com o ciclo de desenvolvimento.',
    topics: [
      {
        title: 'SDLC — ciclo de vida do desenvolvimento',
        items: [
          'Conceito de SDLC',
          'Modelos sequenciais',
          'Modelos iterativos',
          'Modelos incrementais',
          'Desenvolvimento ágil'
        ]
      },
      {
        title: 'Metodologias e práticas ágeis',
        items: [
          'Scrum',
          'Kanban',
          'DevOps',
          'Shift-left',
          'Integração contínua',
          'Entrega contínua'
        ]
      },
      {
        title: 'O que é shift-left',
        text: 'Antecipar as atividades de teste para o início do ciclo: testar cedo, revisar requisitos e projetar casos de teste antes do código existir.'
      },
      {
        title: 'Teste no contexto do desenvolvimento',
        items: [
          'Participação do teste ao longo do desenvolvimento',
          'Testes antecipados',
          'Revisões',
          'Qualidade contínua',
          'Feedback rápido'
        ]
      }
    ],
    outcome: 'Situar as atividades de teste dentro de qualquer modelo de ciclo de vida.'
  },
  {
    id: 'ctfl-4',
    number: 4,
    title: 'Níveis e tipos de teste',
    objective: 'Diferenciar em que camada se testa e o que exatamente se está testando.',
    topics: [
      {
        title: 'Níveis de teste',
        items: [
          'Teste de componente (unidade): verifica partes isoladas',
          'Teste de integração: verifica a comunicação entre componentes ou sistemas',
          'Teste de sistema: verifica o comportamento do sistema como um todo',
          'Teste de aceite: verifica se o sistema atende às necessidades do usuário e do negócio'
        ]
      },
      {
        title: 'Tipos de teste',
        items: [
          'Teste funcional: o que o sistema faz',
          'Teste não funcional: como o sistema se comporta — desempenho, usabilidade, segurança',
          'Teste caixa-preta: baseado na especificação, sem olhar a estrutura interna',
          'Teste caixa-branca: baseado na estrutura interna do código'
        ]
      },
      {
        title: 'Regressão e confirmação',
        items: [
          'Teste de confirmação: reexecuta o caso que falhou para verificar se a correção funcionou',
          'Teste de regressão: verifica se a mudança não quebrou o que já funcionava',
          'Reexecução de testes e validação de correções'
        ]
      }
    ],
    outcome: 'Escolher o nível e o tipo de teste adequados a cada objetivo.'
  },
  {
    id: 'ctfl-5',
    number: 5,
    title: 'Técnicas de teste',
    objective: 'Criar e analisar cenários de teste com as técnicas fundamentais.',
    topics: [
      {
        title: 'Técnicas caixa-preta',
        items: [
          'Particionamento de equivalência: dividir as entradas em classes que devem se comportar do mesmo modo',
          'Análise de valor limite: testar as fronteiras das partições, onde os defeitos se concentram',
          'Tabela de decisão: cobrir combinações de condições e as ações resultantes',
          'Transição de estados: cobrir estados, eventos e transições válidas e inválidas'
        ]
      },
      {
        title: 'Técnicas caixa-branca',
        items: [
          'Cobertura de código',
          'Cobertura de decisão',
          'Análise do fluxo lógico'
        ]
      },
      {
        title: 'Técnicas baseadas em experiência',
        items: [
          'Testes exploratórios',
          'Checklists',
          'Experiência do testador',
          'Pensamento analítico'
        ]
      },
      {
        title: 'Quando usar cada família',
        text: 'Caixa-preta parte da especificação e é aplicável em qualquer nível; caixa-branca exige acesso à estrutura interna; a baseada em experiência complementa as duas onde a especificação é incompleta.'
      }
    ],
    outcome: 'Aplicar a técnica certa para gerar casos de teste com boa cobertura.'
  },
  {
    id: 'ctfl-6',
    number: 6,
    title: 'Gestão de testes e defeitos',
    objective: 'Planejar, controlar e comunicar as atividades de qualidade.',
    topics: [
      {
        title: 'Planejamento e controle',
        items: [
          'Planejamento das atividades',
          'Priorização',
          'Critérios de entrada',
          'Critérios de saída',
          'Monitoramento'
        ]
      },
      {
        title: 'Critérios de entrada e de saída',
        text: 'Critérios de entrada definem quando é possível começar a testar; critérios de saída definem quando o teste pode ser considerado concluído. Sem eles, o encerramento vira decisão de prazo, não de qualidade.'
      },
      {
        title: 'Gestão de riscos',
        items: [
          'Riscos de produto: relacionados à qualidade do que é entregue',
          'Riscos de projeto: relacionados à execução, prazo e recursos',
          'Probabilidade e impacto',
          'Mitigação'
        ],
        text: 'O nível de risco orienta a profundidade e a prioridade dos testes.'
      },
      {
        title: 'Gestão de defeitos',
        items: [
          'Registro de defeitos',
          'Comunicação de falhas',
          'Priorização',
          'Ciclo de vida do defeito'
        ]
      },
      {
        title: 'Um bom registro de defeito',
        text: 'Descreve o que aconteceu, o que era esperado, como reproduzir, em qual ambiente e com quais evidências. É o que permite ao time corrigir sem adivinhação.'
      }
    ],
    outcome: 'Conduzir o teste com critérios objetivos e registrar defeitos de forma útil.'
  },
  {
    id: 'ctfl-7',
    number: 7,
    title: 'Ferramentas e automação',
    objective: 'Conhecer as categorias de ferramentas e os limites da automação.',
    topics: [
      {
        title: 'Categorias de ferramentas',
        items: [
          'Ferramentas de apoio às atividades de teste',
          'Gestão de testes',
          'Gestão de defeitos',
          'Ferramentas de execução',
          'Ferramentas de automação'
        ]
      },
      {
        title: 'Benefícios da automação',
        items: [
          'Repetição confiável de testes',
          'Execução mais rápida da regressão',
          'Liberação do tempo do testador para atividades analíticas'
        ]
      },
      {
        title: 'Riscos e limitações',
        items: [
          'Custo de manutenção dos scripts',
          'Expectativas irreais sobre o que a automação resolve',
          'Automatizar o teste errado apenas repete o erro mais rápido',
          'A automação não substitui o pensamento analítico do testador'
        ]
      },
      {
        title: 'Onde a automação rende mais',
        text: 'Em testes repetitivos e estáveis — especialmente a regressão funcional — e não em cenários exploratórios, que dependem de julgamento humano.'
      }
    ],
    outcome: 'Decidir o que automatizar e reconhecer quando a automação não é a resposta.'
  },
  {
    id: 'ctfl-8',
    number: 8,
    title: 'Material complementar e syllabus',
    objective: 'Complementar o aprendizado e usar corretamente o material oficial.',
    topics: [
      {
        title: 'Como usar o material complementar',
        items: [
          'Assistir aos vídeos em ordem',
          'Fazer anotações',
          'Revisar os conceitos importantes',
          'Relacionar cada conteúdo ao syllabus oficial',
          'Revisar os tópicos complexos',
          'Construir resumos próprios'
        ]
      },
      {
        title: 'Materiais obrigatórios',
        items: [
          'Syllabus oficial CTFL',
          'Conteúdos da trilha',
          'Simulados',
          'Exercícios complementares'
        ]
      },
      {
        title: 'O syllabus é a régua',
        text: 'A prova cobra interpretação conceitual do syllabus 4.0. Todo material complementar serve para explicar o syllabus, nunca para substituí-lo.'
      }
    ],
    outcome: 'Estudar com o syllabus como referência central e construir os próprios resumos.'
  },
  {
    id: 'ctfl-9',
    number: 9,
    title: 'Simulados e fixação',
    objective: 'Preparar o participante para o formato real da prova oficial.',
    topics: [
      {
        title: 'O que deve ser realizado',
        items: [
          'Simulados',
          'Questões comentadas',
          'Revisões periódicas',
          'Análise de erros',
          'Revisão do syllabus',
          'Exercícios de interpretação'
        ]
      },
      {
        title: 'Metas recomendadas',
        items: [
          'Consistência nos simulados',
          'Capacidade de interpretação conceitual',
          'Segurança nos fundamentos',
          'Boa gestão de tempo'
        ]
      },
      {
        title: 'Por que interpretação pesa mais que memória',
        text: 'A prova é de múltipla escolha com foco em interpretação conceitual: as alternativas costumam estar todas "quase certas", e o que decide é entender o conceito, não lembrar da frase.'
      }
    ],
    outcome: 'Chegar à prova com desempenho estável e leitura conceitual afiada.'
  },
  {
    id: 'ctfl-10',
    number: 10,
    title: 'Preparação final',
    objective: 'Fazer a revisão final e organizar o dia da prova.',
    topics: [
      {
        title: 'Revisão final',
        items: [
          'Fundamentos de teste',
          'Processo de teste',
          'Técnicas de teste',
          'Níveis de teste',
          'Tipos de teste',
          'Gestão de defeitos',
          'Gestão de riscos',
          'Conceitos principais do syllabus'
        ]
      },
      {
        title: 'Preparação para o dia da prova',
        items: [
          'Ambiente silencioso',
          'Internet estável',
          'Organização do tempo',
          'Leitura cuidadosa das questões',
          'Atenção às pegadinhas conceituais',
          'Interpretação correta dos cenários'
        ]
      },
      {
        title: 'Critérios de conclusão da trilha',
        items: [
          'Finalizar todas as fases',
          'Estudar o syllabus oficial',
          'Concluir os materiais obrigatórios',
          'Realizar os simulados',
          'Demonstrar entendimento dos conceitos fundamentais'
        ]
      }
    ],
    outcome: 'Chegar ao exame com revisão completa e ambiente preparado.'
  }
];
