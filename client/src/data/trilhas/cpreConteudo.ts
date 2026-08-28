import { Module } from '../trilha360';
import { TrackOverview } from '../../components/TrackPage';

/**
 * Trilha CPRE I — baseada na Trilha Oficial de Formação
 * (Certified Professional for Requirements Engineering), nas mesmas 10 fases.
 */

export const CPRE_OVERVIEW: TrackOverview = {
  title: 'Trilha oficial de formação — CPRE Foundation Level',
  intro:
    'Trilha para capacitar profissionais sem experiência prévia em engenharia de requisitos, conduzindo-os de forma estruturada até o nível necessário para a certificação CPRE Foundation Level. O conteúdo evolui em fases progressivas, dos conceitos fundamentais à preparação prática para a prova oficial.',
  pillars: [
    'Fundamentos da engenharia de requisitos',
    'Tipos de requisitos e critérios de qualidade',
    'Stakeholders e técnicas de elicitação',
    'Documentação e modelagem',
    'Validação e gerenciamento de requisitos',
    'Rastreabilidade e controle de mudanças',
    'Interpretação de questões e armadilhas de prova'
  ],
  audience: [
    'Pessoas sem experiência anterior com requisitos',
    'Analistas em início de carreira',
    'Profissionais migrando para a área de análise',
    'Integrantes de squads que trabalham com requisitos',
    'Quem quer base sólida antes da certificação'
  ],
  prerequisite:
    'Não é necessário conhecimento prévio. A referência é o syllabus oficial CPRE Foundation Level, mantido pelo IREB. A prova é aplicada principalmente em inglês e tem forte foco interpretativo.',
  completion: [
    'Explicar o que é engenharia de requisitos e seu propósito',
    'Diferenciar requisito funcional, não funcional, restrição e regra de negócio',
    'Avaliar a qualidade de um requisito por critérios objetivos',
    'Identificar stakeholders e escolher a técnica de elicitação adequada',
    'Documentar e modelar requisitos com clareza',
    'Validar requisitos e conduzir o controle de mudanças',
    'Manter rastreabilidade da origem ao impacto das alterações'
  ]
};

export const CPRE_MODULES: Module[] = [
  {
    id: 'cpre-1',
    number: 1,
    title: 'Introdução à engenharia de requisitos',
    objective: 'Introduzir os conceitos iniciais da área e o objetivo da certificação.',
    topics: [
      {
        title: 'O que é engenharia de requisitos',
        text: 'A área responsável por identificar, documentar, validar e gerenciar necessidades e expectativas relacionadas a sistemas, produtos e processos.'
      },
      {
        title: 'O que o participante deve compreender',
        items: [
          'O que são requisitos',
          'Diferença entre requisito funcional e não funcional',
          'Conceito de necessidade de negócio',
          'Importância da comunicação',
          'Importância da documentação',
          'Impacto dos requisitos em projetos',
          'Relação entre requisitos e qualidade'
        ]
      },
      {
        title: 'O que é o CPRE Foundation Level',
        items: [
          'Certificação internacional mantida pelo IREB',
          'Foco nos conceitos fundamentais necessários à atuação profissional',
          'Questões de múltipla escolha, conceituais e interpretativas',
          'Prova baseada no syllabus oficial do IREB',
          'Idioma principal: inglês'
        ]
      },
      {
        title: 'Visão analítica e organizacional',
        items: [
          'Comunicação clara',
          'Organização de informações',
          'Interpretação de necessidades',
          'Pensamento analítico',
          'Estruturação de documentação',
          'Rastreabilidade'
        ]
      }
    ],
    outcome: 'Entender o papel da engenharia de requisitos e o que a certificação exige.'
  },
  {
    id: 'cpre-2',
    number: 2,
    title: 'Organização dos estudos',
    objective: 'Usar o repositório oficial como ambiente central de estudo da trilha.',
    topics: [
      {
        title: 'O repositório da trilha',
        items: [
          'Documentações e guias de estudo',
          'Links oficiais do IREB',
          'Simulados e exercícios',
          'Materiais complementares e anotações',
          'Histórico de atualização da trilha'
        ]
      },
      {
        title: 'O que o participante deve saber fazer',
        items: [
          'Acessar o repositório',
          'Navegar pelas pastas e localizar arquivos',
          'Baixar documentos',
          'Identificar versões atualizadas',
          'Acompanhar as atualizações do material'
        ]
      },
      {
        title: 'Por que centralizar',
        text: 'Padronização e clareza: um só lugar para material, anotações e histórico evita estudar por versões antigas do syllabus.'
      }
    ],
    outcome: 'Ter um ambiente único e organizado para conduzir os estudos até a prova.'
  },
  {
    id: 'cpre-3',
    number: 3,
    title: 'Fundamentos e tipos de requisitos',
    objective: 'Desenvolver o entendimento completo dos fundamentos e classificar requisitos corretamente.',
    topics: [
      {
        title: 'Material obrigatório',
        items: ['Syllabus oficial CPRE Foundation Level', 'Materiais oficiais do IREB']
      },
      {
        title: 'Definição e propósito',
        items: [
          'O propósito da engenharia de requisitos',
          'Necessidades de negócio',
          'Stakeholders',
          'Objetivos do sistema',
          'Comunicação entre áreas',
          'A importância da clareza'
        ]
      },
      {
        title: 'Tipos de requisitos',
        items: [
          'Requisito funcional: o que o sistema deve fazer',
          'Requisito não funcional: qualidades e características — desempenho, segurança, usabilidade',
          'Restrição: limitação imposta à solução, como tecnologia obrigatória ou norma legal',
          'Regra de negócio: política ou condição do negócio que o sistema deve respeitar',
          'Critério de aceitação: a condição que permite considerar o requisito atendido'
        ]
      },
      {
        title: 'Critérios de qualidade de um requisito',
        items: [
          'Clareza: entendimento único, sem margem para interpretação divergente',
          'Consistência: não conflita com outros requisitos',
          'Completude: contém a informação necessária para ser implementado e verificado',
          'Rastreabilidade: é possível saber de onde veio e o que ele afeta',
          'Verificabilidade: existe forma objetiva de comprovar que foi atendido',
          'Ausência de ambiguidade: uma única leitura possível'
        ]
      },
      {
        title: 'Por que ambiguidade é o inimigo',
        text: 'Um requisito ambíguo permite duas implementações diferentes, ambas "corretas" segundo o texto. O custo aparece só na entrega, quando já é caro corrigir.'
      }
    ],
    outcome: 'Classificar requisitos e avaliar sua qualidade com critérios objetivos.'
  },
  {
    id: 'cpre-4',
    number: 4,
    title: 'Stakeholders e elicitação',
    objective: 'Identificar stakeholders e conduzir o levantamento de requisitos.',
    topics: [
      {
        title: 'Stakeholders',
        items: [
          'Quem são os stakeholders',
          'A importância da identificação correta',
          'Comunicação entre áreas',
          'Necessidades do negócio',
          'Gestão de expectativas'
        ],
        text: 'Um stakeholder esquecido é um conjunto de requisitos que só aparece no fim — quando mudar custa caro.'
      },
      {
        title: 'Técnicas de elicitação',
        items: [
          'Entrevistas: aprofundam a necessidade individual',
          'Workshops: constroem entendimento coletivo e resolvem divergências',
          'Brainstorming: gera alternativas antes de decidir',
          'Questionários: alcançam muitas pessoas com baixo custo',
          'Observação: revela o que as pessoas fazem, não apenas o que dizem fazer',
          'Prototipação: torna concreto o que era abstrato e antecipa o feedback'
        ]
      },
      {
        title: 'Comunicação',
        items: [
          'Escuta ativa',
          'Comunicação clara',
          'Registro das informações',
          'Interpretação correta',
          'Evitar ambiguidades'
        ]
      }
    ],
    outcome: 'Escolher a técnica de elicitação adequada ao contexto e registrar o que foi levantado.'
  },
  {
    id: 'cpre-5',
    number: 5,
    title: 'Documentação e modelagem',
    objective: 'Documentar e estruturar requisitos de forma clara e padronizada.',
    topics: [
      {
        title: 'Documentação de requisitos',
        items: [
          'Estrutura de documentação',
          'Padronização',
          'Clareza textual',
          'Organização das informações',
          'Controle de versões'
        ]
      },
      {
        title: 'Modelagem de requisitos',
        items: [
          'Casos de uso: como o usuário interage com o sistema para atingir um objetivo',
          'Fluxos: a sequência de passos, incluindo alternativas e exceções',
          'Cenários: situações concretas que ilustram o comportamento esperado',
          'Diagramas e modelagem visual'
        ]
      },
      {
        title: 'Por que modelar além do texto',
        text: 'O modelo revela lacunas que o texto esconde: um fluxo sem tratamento de exceção ou um caso de uso sem ator aparecem visualmente antes de virarem defeito.'
      },
      {
        title: 'Critérios de qualidade da documentação',
        items: [
          'Objetividade',
          'Consistência',
          'Facilidade de entendimento',
          'Rastreabilidade',
          'Ausência de ambiguidades'
        ]
      }
    ],
    outcome: 'Produzir documentação compreensível, padronizada e versionada.'
  },
  {
    id: 'cpre-6',
    number: 6,
    title: 'Validação e gerenciamento',
    objective: 'Validar requisitos e controlar sua evolução ao longo do projeto.',
    topics: [
      {
        title: 'Validação de requisitos',
        items: [
          'Revisão',
          'Verificação',
          'Consistência',
          'Correção',
          'Aprovação'
        ],
        text: 'Validar é confirmar com os stakeholders que o requisito documentado corresponde à necessidade real.'
      },
      {
        title: 'Gerenciamento de requisitos',
        items: [
          'Controle de mudanças',
          'Versionamento',
          'Priorização',
          'Rastreabilidade',
          'Análise de impacto das alterações'
        ]
      },
      {
        title: 'Rastreabilidade',
        items: [
          'Origem dos requisitos: quem pediu e por quê',
          'Relacionamentos entre requisitos',
          'Controle de dependências',
          'Histórico de alterações'
        ]
      },
      {
        title: 'Por que mudanças precisam ser controladas',
        text: 'Toda mudança tem impacto em escopo, prazo, custo e em outros requisitos. Sem controle, o projeto muda sem que ninguém saiba o preço da mudança.'
      }
    ],
    outcome: 'Conduzir validação e mudanças com critério, mantendo a rastreabilidade.'
  },
  {
    id: 'cpre-7',
    number: 7,
    title: 'Interpretação e armadilhas de prova',
    objective: 'Preparar o participante para interpretar corretamente as questões.',
    topics: [
      {
        title: 'Conceitos que costumam gerar erro',
        items: [
          'Requisito não é solução técnica',
          'Nem toda necessidade é um requisito',
          'Requisitos ambíguos geram falhas',
          'Comunicação incorreta impacta projetos',
          'Requisitos precisam ser verificáveis',
          'Mudanças precisam ser controladas'
        ]
      },
      {
        title: 'Requisito × solução',
        text: '"O sistema deve armazenar os dados em PostgreSQL" é solução técnica. O requisito é a necessidade: "o sistema deve manter o histórico de pedidos por cinco anos". Confundir os dois fecha alternativas de solução cedo demais.'
      },
      {
        title: 'Nem toda necessidade vira requisito',
        text: 'Necessidades passam por análise, priorização e decisão. Registrar tudo o que foi pedido como requisito é o caminho mais curto para um escopo impossível.'
      },
      {
        title: 'Interpretação de questões',
        items: [
          'Leitura cuidadosa do enunciado',
          'Interpretação do contexto',
          'Atenção aos termos em inglês',
          'Pegadinhas conceituais',
          'Diferença entre a teoria do syllabus e a prática de mercado'
        ]
      }
    ],
    outcome: 'Separar o que o syllabus define do que é hábito de mercado.'
  },
  {
    id: 'cpre-8',
    number: 8,
    title: 'Material complementar',
    objective: 'Complementar o aprendizado com conteúdo visual e exercícios comentados.',
    topics: [
      {
        title: 'Materiais disponibilizados',
        items: [
          'Videoaulas',
          'Explicações práticas',
          'Resumos',
          'Conteúdos complementares',
          'Exercícios comentados'
        ]
      },
      {
        title: 'Como utilizar',
        items: [
          'Assistir aos vídeos em ordem',
          'Fazer anotações',
          'Revisar os termos importantes',
          'Relacionar o conteúdo ao syllabus oficial',
          'Pausar e revisar tópicos complexos',
          'Fazer resumo do próprio entendimento'
        ]
      },
      {
        title: 'O syllabus é a régua',
        text: 'Todo material complementar existe para explicar o syllabus do IREB — nunca para substituí-lo.'
      }
    ],
    outcome: 'Usar o material de apoio sem perder de vista a fonte oficial.'
  },
  {
    id: 'cpre-9',
    number: 9,
    title: 'Simulados e fixação',
    objective: 'Preparar o participante para o formato real da prova.',
    topics: [
      {
        title: 'O que deve ser realizado',
        items: [
          'Simulados oficiais',
          'Questões comentadas',
          'Revisões periódicas',
          'Análise de erros',
          'Revisão do syllabus oficial'
        ]
      },
      {
        title: 'Metas recomendadas',
        items: [
          'Alto índice de acertos nos simulados',
          'Consistência nos resultados',
          'Capacidade de interpretar questões rapidamente',
          'Segurança na tomada de decisão'
        ]
      },
      {
        title: 'O peso do inglês',
        text: 'A prova é aplicada principalmente em inglês e é interpretativa. Praticar os termos originais — requirement, stakeholder, elicitation, traceability, validation — evita perder questões por vocabulário.'
      }
    ],
    outcome: 'Chegar à prova com resultados estáveis e leitura rápida de enunciados.'
  },
  {
    id: 'cpre-10',
    number: 10,
    title: 'Preparação final',
    objective: 'Fazer a revisão final e organizar o dia da prova.',
    topics: [
      {
        title: 'Revisão final',
        items: [
          'Conceitos fundamentais',
          'Tipos de requisitos',
          'Técnicas de elicitação',
          'Documentação',
          'Validação',
          'Gerenciamento de requisitos',
          'Armadilhas comuns'
        ]
      },
      {
        title: 'Preparação para o dia da prova',
        items: [
          'Ambiente silencioso',
          'Internet estável',
          'Navegador atualizado',
          'Boa gestão do tempo',
          'Atenção às questões interpretativas'
        ]
      },
      {
        title: 'Considerações finais',
        text: 'O objetivo da trilha não é apenas a aprovação, mas o entendimento real da engenharia de requisitos: a certificação é consequência da base construída.'
      }
    ],
    outcome: 'Chegar ao exame com revisão completa e ambiente preparado.'
  }
];
