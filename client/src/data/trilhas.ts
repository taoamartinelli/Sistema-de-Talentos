import { Flashcard, Module, SimuladoQuestion } from './trilha360';
import { TrackOverview } from '../components/TrackPage';
import { AUTOMACAO_MODULES, AUTOMACAO_OVERVIEW } from './trilhas/automacaoConteudo';
import { AUTOMACAO_FLASHCARDS } from './trilhas/automacaoFlashcards';
import { AUTOMACAO_MODULE_QUIZZES, AUTOMACAO_SIMULADO } from './trilhas/automacaoProvas';
import { DYNATRACE_MODULES, DYNATRACE_OVERVIEW } from './trilhas/dynatraceConteudo';
import { DYNATRACE_FLASHCARDS } from './trilhas/dynatraceFlashcards';
import { DYNATRACE_MODULE_QUIZZES, DYNATRACE_SIMULADO } from './trilhas/dynatraceProvas';
import { KUBERNETES_MODULES, KUBERNETES_OVERVIEW } from './trilhas/kubernetesConteudo';
import { KUBERNETES_FLASHCARDS } from './trilhas/kubernetesFlashcards';
import { KUBERNETES_MODULE_QUIZZES, KUBERNETES_SIMULADO } from './trilhas/kubernetesProvas';
import { MULESOFT_MODULES, MULESOFT_OVERVIEW } from './trilhas/mulesoftConteudo';
import { MULESOFT_FLASHCARDS } from './trilhas/mulesoftFlashcards';
import { MULESOFT_MODULE_QUIZZES, MULESOFT_SIMULADO } from './trilhas/mulesoftProvas';
import { IA_MODULES, IA_OVERVIEW } from './trilhas/iaConteudo';
import { IA_FLASHCARDS } from './trilhas/iaFlashcards';
import { IA_MODULE_QUIZZES, IA_SIMULADO } from './trilhas/iaProvas';
import { PSPO2_MODULES, PSPO2_OVERVIEW } from './trilhas/pspo2Conteudo';
import { PSPO2_FLASHCARDS } from './trilhas/pspo2Flashcards';
import { PSPO2_MODULE_QUIZZES, PSPO2_SIMULADO } from './trilhas/pspo2Provas';
import { PSPO1_MODULES, PSPO1_OVERVIEW } from './trilhas/pspo1Conteudo';
import { PSPO1_FLASHCARDS } from './trilhas/pspo1Flashcards';
import { PSPO1_MODULE_QUIZZES, PSPO1_SIMULADO } from './trilhas/pspo1Provas';
import { PSM1_MODULES, PSM1_OVERVIEW } from './trilhas/psm1Conteudo';
import { PSM1_FLASHCARDS } from './trilhas/psm1Flashcards';
import { PSM1_MODULE_QUIZZES, PSM1_SIMULADO } from './trilhas/psm1Provas';
import { CTFL_MODULES, CTFL_OVERVIEW } from './trilhas/ctflConteudo';
import { CTFL_FLASHCARDS } from './trilhas/ctflFlashcards';
import { CTFL_MODULE_QUIZZES, CTFL_SIMULADO } from './trilhas/ctflProvas';
import { CPRE_MODULES, CPRE_OVERVIEW } from './trilhas/cpreConteudo';
import { CPRE_FLASHCARDS } from './trilhas/cpreFlashcards';
import { CPRE_MODULE_QUIZZES, CPRE_SIMULADO } from './trilhas/cpreProvas';

export type TrackArea = 'desenvolvimento' | 'analista';

export interface Trilha {
  id: string;
  /** Eixo ao qual a trilha pertence. */
  area: TrackArea;
  number: number;
  title: string;
  objective: string;
  /** Temas que a trilha deve cobrir. Serve de esqueleto até o conteúdo ser cadastrado. */
  topics: string[];
  /** Conteúdo da trilha, no mesmo formato da página 360. */
  overview?: TrackOverview;
  modules: Module[];
  flashcards: Flashcard[];
  simulado: SimuladoQuestion[];
  /** Simulado de conclusão de cada módulo, indexado pelo id do módulo. */
  moduleQuizzes?: Record<string, SimuladoQuestion[]>;
}

/** Percentual mínimo de acerto no simulado das trilhas. */
export const TRILHA_PASSING_SCORE = 90;

export const AREAS: { key: TrackArea; title: string; description: string }[] = [
  {
    key: 'desenvolvimento',
    title: 'Trilhas de Desenvolvimento',
    description: 'Caminhos técnicos voltados à construção, integração e operação de soluções.'
  },
  {
    key: 'analista',
    title: 'Trilhas de Analista',
    description: 'Certificações voltadas a requisitos, qualidade e gestão ágil de produto.'
  }
];

export const TRILHAS: Trilha[] = [
  /* ------------------------- Desenvolvimento ------------------------- */
  {
    id: 'automacao',
    area: 'desenvolvimento',
    number: 1,
    title: 'Automação',
    objective:
      'Dar o contexto certo para a IA e transformá-la em copiloto: do primeiro prompt à criação de agentes que trabalham sozinhos.',
    topics: [
      'Contexto e qualidade das respostas',
      'Refinamento progressivo',
      'Fluxo de projeto com IA',
      'Escolha de ferramentas',
      'Agentes de IA e automações',
      'Personas profissionais'
    ],
    overview: AUTOMACAO_OVERVIEW,
    modules: AUTOMACAO_MODULES,
    flashcards: AUTOMACAO_FLASHCARDS,
    simulado: AUTOMACAO_SIMULADO,
    moduleQuizzes: AUTOMACAO_MODULE_QUIZZES
  },
  {
    id: 'ia',
    area: 'desenvolvimento',
    number: 2,
    title: 'IA',
    objective:
      'IA agêntica: entender o laço que define um agente, as ferramentas que o tornam útil e o que o mantém confiável.',
    topics: [
      'A virada agêntica',
      'Anatomia de um agente',
      'Ferramentas e contratos',
      'Memória e RAG',
      'Multi-agente e MCP (em construção)',
      'Guardrails, avaliação e produção (em construção)'
    ],
    overview: IA_OVERVIEW,
    modules: IA_MODULES,
    flashcards: IA_FLASHCARDS,
    simulado: IA_SIMULADO,
    moduleQuizzes: IA_MODULE_QUIZZES
  },
  {
    id: 'kubernetes',
    area: 'desenvolvimento',
    number: 3,
    title: 'Kubernetes',
    objective: 'Entender a orquestração de contêineres: implantação, escala e operação de aplicações.',
    topics: [
      'Pods, Deployments e Services',
      'ConfigMap e Secret',
      'Volumes, PV e PVC',
      'StatefulSet',
      'NetworkPolicy, RBAC e scheduling',
      'Troubleshooting'
    ],
    overview: KUBERNETES_OVERVIEW,
    modules: KUBERNETES_MODULES,
    flashcards: KUBERNETES_FLASHCARDS,
    simulado: KUBERNETES_SIMULADO,
    moduleQuizzes: KUBERNETES_MODULE_QUIZZES
  },
  {
    id: 'dynatrace',
    area: 'desenvolvimento',
    number: 4,
    title: 'Dynatrace Associate',
    objective: 'Preparar para a certificação Dynatrace Associate, com foco em observabilidade de aplicações.',
    topics: [
      'Smartscape® e OneAgent',
      'Dynatrace Query Language (DQL)',
      'Métricas, logs e eventos',
      'Distributed Tracing e RUM',
      'Dashboards, Notebooks e Workflows',
      'Segurança e privacidade'
    ],
    overview: DYNATRACE_OVERVIEW,
    modules: DYNATRACE_MODULES,
    flashcards: DYNATRACE_FLASHCARDS,
    simulado: DYNATRACE_SIMULADO,
    moduleQuizzes: DYNATRACE_MODULE_QUIZZES
  },
  {
    id: 'mulesoft',
    area: 'desenvolvimento',
    number: 5,
    title: 'MuleSoft Associate',
    objective: 'Preparar para a certificação MuleSoft Associate, com foco em integração de sistemas e APIs.',
    topics: [
      'Conectividade API-Led',
      'C4E e MuleSoft Catalyst',
      'Anypoint Platform e ciclo de vida da API',
      'Segurança, políticas e implantação',
      'DataWeave, roteadores e tratamento de erros',
      'Acionamento de fluxos e processamento em lote'
    ],
    overview: MULESOFT_OVERVIEW,
    modules: MULESOFT_MODULES,
    flashcards: MULESOFT_FLASHCARDS,
    simulado: MULESOFT_SIMULADO,
    moduleQuizzes: MULESOFT_MODULE_QUIZZES
  },

  /* ----------------------------- Analista ---------------------------- */
  {
    id: 'ctfl',
    area: 'analista',
    number: 6,
    title: 'Certified Tester Foundation Level - CTFL I',
    objective:
      'Do zero à certificação: fundamentos de qualidade e testes, técnicas, gestão de defeitos e preparação para a prova.',
    topics: [
      'Fundamentos e princípios de teste',
      'Processo de teste e testware',
      'Testes no ciclo de vida',
      'Níveis, tipos e técnicas',
      'Gestão de testes, riscos e defeitos',
      'Ferramentas, automação e simulados'
    ],
    overview: CTFL_OVERVIEW,
    modules: CTFL_MODULES,
    flashcards: CTFL_FLASHCARDS,
    simulado: CTFL_SIMULADO,
    moduleQuizzes: CTFL_MODULE_QUIZZES
  },
  {
    id: 'cpre',
    area: 'analista',
    number: 7,
    title: 'Certified Professional for Requirements Engineering - CPRE I',
    objective:
      'Do zero à certificação: fundamentos de requisitos, elicitação, documentação, validação e gerenciamento.',
    topics: [
      'Fundamentos da engenharia de requisitos',
      'Tipos de requisitos e qualidade',
      'Stakeholders e elicitação',
      'Documentação e modelagem',
      'Validação e gerenciamento',
      'Armadilhas e preparação final'
    ],
    overview: CPRE_OVERVIEW,
    modules: CPRE_MODULES,
    flashcards: CPRE_FLASHCARDS,
    simulado: CPRE_SIMULADO,
    moduleQuizzes: CPRE_MODULE_QUIZZES
  },
  {
    id: 'psm1',
    area: 'analista',
    number: 8,
    title: 'Professional Scrum Master - PSM I',
    objective:
      'Do zero à certificação: base sólida em Scrum, leitura do Scrum Guide 2020 e preparação prática para a prova.',
    topics: [
      'Introdução ao Scrum e ao PSM I',
      'Scrum Guide, empirismo e valores',
      'Scrum Team e eventos',
      'Artefatos e compromissos',
      'Armadilhas e interpretação de prova',
      'Simulados e preparação final'
    ],
    overview: PSM1_OVERVIEW,
    modules: PSM1_MODULES,
    flashcards: PSM1_FLASHCARDS,
    simulado: PSM1_SIMULADO,
    moduleQuizzes: PSM1_MODULE_QUIZZES
  },
  {
    id: 'pspo1',
    area: 'analista',
    number: 9,
    title: 'Professional Scrum Product Owner - PSPO I',
    objective:
      'Preparar para a PSPO I: o Guia do Scrum aplicado ao papel do Product Owner, com EBM e as armadilhas da prova.',
    topics: [
      'Empirismo, pilares e valores',
      'Responsabilidades e fronteiras',
      'Eventos, timeboxes e participação',
      'Artefatos e compromissos',
      'Valor, visão e EBM',
      'Armadilhas clássicas da prova'
    ],
    overview: PSPO1_OVERVIEW,
    modules: PSPO1_MODULES,
    flashcards: PSPO1_FLASHCARDS,
    simulado: PSPO1_SIMULADO,
    moduleQuizzes: PSPO1_MODULE_QUIZZES
  },
  {
    id: 'pspo2',
    area: 'analista',
    number: 10,
    title: 'Professional Scrum Product Owner - PSPO II',
    objective:
      'Decisões de produto orientadas a valor e evidência: outcome sobre output, EBM e gestão de stakeholders.',
    topics: [
      'Outcome × Output',
      'Evidence-Based Management',
      'Product Backlog e Product Goal',
      'Eventos, artefatos e Definição de Pronto',
      'Papel do PO e stakeholders',
      'Visão, dependências e lançamentos'
    ],
    overview: PSPO2_OVERVIEW,
    modules: PSPO2_MODULES,
    flashcards: PSPO2_FLASHCARDS,
    simulado: PSPO2_SIMULADO,
    moduleQuizzes: PSPO2_MODULE_QUIZZES
  }
];
