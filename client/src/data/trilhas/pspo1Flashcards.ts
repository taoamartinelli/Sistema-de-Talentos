import { Flashcard } from '../trilha360';

/** 100 flash cards da trilha PSPO I, distribuídos pelos 12 módulos. */
export const PSPO1_FLASHCARDS: Flashcard[] = [
  /* ---------- Módulo 1 — O exame (6) ---------- */
  { id: 'o1-1', moduleId: 'pspo1-1', front: 'Quanto tempo dura o exame PSPO I?', back: '60 minutos cravados, sem pausas — cerca de 45 segundos por questão.' },
  { id: 'o1-2', moduleId: 'pspo1-1', front: 'Quantas questões tem a prova?', back: '80 questões: múltipla escolha, resposta múltipla e verdadeiro ou falso.' },
  { id: 'o1-3', moduleId: 'pspo1-1', front: 'Qual é a nota de corte?', back: '85% — acertar pelo menos 68 das 80 questões.' },
  { id: 'o1-4', moduleId: 'pspo1-1', front: 'Qual é a fonte absoluta da verdade?', back: 'O Guia do Scrum vigente.' },
  { id: 'o1-5', moduleId: 'pspo1-1', front: 'User Stories e Story Points são Scrum oficial?', back: 'Não. São práticas complementares opcionais, nunca regras do framework.' },
  { id: 'o1-6', moduleId: 'pspo1-1', front: 'Velocity e Burndown pertencem ao Guia do Scrum?', back: 'Não — também são terminologias de mercado, tratadas como complementares.' },

  /* ---------- Módulo 2 — Empirismo e valores (9) ---------- */
  { id: 'o1-7', moduleId: 'pspo1-2', front: 'Em que o Scrum se baseia?', back: 'No empirismo e no pensamento enxuto (lean).' },
  { id: 'o1-8', moduleId: 'pspo1-2', front: 'O que é empirismo?', back: 'O conhecimento vem da experiência e as decisões se baseiam no que é observado e conhecido.' },
  { id: 'o1-9', moduleId: 'pspo1-2', front: 'O que é pensamento enxuto no Scrum?', back: 'O foco na redução de desperdícios e na entrega do que é estritamente essencial.' },
  { id: 'o1-10', moduleId: 'pspo1-2', front: 'Quais são os três pilares do empirismo?', back: 'Transparência, Inspeção e Adaptação.' },
  { id: 'o1-11', moduleId: 'pspo1-2', front: 'O que garante a Transparência?', back: 'Processo e trabalho visíveis para quem executa e para quem recebe — estados maquiados destroem o empirismo.' },
  { id: 'o1-12', moduleId: 'pspo1-2', front: 'O que exige a Inspeção?', back: 'Que artefatos e progresso rumo aos objetivos sejam inspecionados com frequência e diligência.' },
  { id: 'o1-13', moduleId: 'pspo1-2', front: 'Quando ocorre a Adaptação?', back: 'Assim que algo se desvia dos limites aceitáveis — o ajuste deve ser imediato.' },
  { id: 'o1-14', moduleId: 'pspo1-2', front: 'Quais são os cinco valores do Scrum?', back: 'Foco, Respeito, Abertura, Compromisso e Coragem.' },
  { id: 'o1-15', moduleId: 'pspo1-2', front: 'Qual a relação entre valores e pilares?', back: 'Quando os valores são vividos pela equipe, os pilares do empirismo se tornam reais.' },

  /* ---------- Módulo 3 — Product Owner (11) ---------- */
  { id: 'o1-16', moduleId: 'pspo1-3', front: 'Qual a responsabilidade central do PO?', back: 'Ser o único responsável por maximizar o valor do produto resultante do trabalho da Equipe Scrum.' },
  { id: 'o1-17', moduleId: 'pspo1-3', front: 'Quem gerencia e ordena o Product Backlog?', back: 'O Product Owner.' },
  { id: 'o1-18', moduleId: 'pspo1-3', front: 'Quem desenvolve e comunica o Product Goal?', back: 'O Product Owner, de forma explícita.' },
  { id: 'o1-19', moduleId: 'pspo1-3', front: 'O PO define o quê no produto?', back: 'O "o quê" e o "porquê" — nunca o "como" técnico.' },
  { id: 'o1-20', moduleId: 'pspo1-3', front: 'Quem decide se o incremento vai para o mercado?', back: 'O Product Owner.' },
  { id: 'o1-21', moduleId: 'pspo1-3', front: 'O PO pode ser um comitê?', back: 'Não. É uma pessoa física única, ainda que possa ser influenciado por comitês.' },
  { id: 'o1-22', moduleId: 'pspo1-3', front: 'O PO gerencia as tarefas diárias dos Developers?', back: 'Não. Ele não direciona nem distribui o trabalho diário.' },
  { id: 'o1-23', moduleId: 'pspo1-3', front: 'O PO estima o esforço dos itens?', back: 'Não. A estimativa é prerrogativa dos Developers.' },
  { id: 'o1-24', moduleId: 'pspo1-3', front: 'Quem representa os desejos da organização no backlog?', back: 'O Product Owner.' },
  { id: 'o1-25', moduleId: 'pspo1-3', front: 'De quem é a decisão final sobre o conteúdo do backlog?', back: 'Do PO — mesmo que outros influenciem, a decisão é dele.' },
  { id: 'o1-26', moduleId: 'pspo1-3', front: 'O que significa "maximizador de valor"?', back: 'Garantir que a equipe gaste energia primeiro no que traz mais impacto.' },

  /* ---------- Módulo 4 — Developers e SM (12) ---------- */
  { id: 'o1-27', moduleId: 'pspo1-4', front: 'O que significa a equipe ser autogerenciável?', back: 'Ela decide internamente quem faz o quê, como e quando.' },
  { id: 'o1-28', moduleId: 'pspo1-4', front: 'O que significa ser interfuncional?', back: 'Reunir todas as habilidades necessárias para gerar valor a cada Sprint.' },
  { id: 'o1-29', moduleId: 'pspo1-4', front: 'Existem subequipes ou hierarquias no Scrum Team?', back: 'Não — nem subequipes, nem títulos hierárquicos internos.' },
  { id: 'o1-30', moduleId: 'pspo1-4', front: 'Quem cria o Sprint Backlog?', back: 'Os Developers.' },
  { id: 'o1-31', moduleId: 'pspo1-4', front: 'Quem estima tamanho e complexidade dos itens?', back: 'Os Developers, com controle total sobre isso.' },
  { id: 'o1-32', moduleId: 'pspo1-4', front: 'Existe "testador" separado de "programador"?', back: 'Não. Não há divisões funcionais: todos são Developers.' },
  { id: 'o1-33', moduleId: 'pspo1-4', front: 'Quem mantém a Definition of Done no dia a dia?', back: 'Os Developers, que a seguem e a mantêm.' },
  { id: 'o1-34', moduleId: 'pspo1-4', front: 'O que é o Scrum Master?', back: 'Um líder que serve, responsável por estabelecer o Scrum conforme o Guia.' },
  { id: 'o1-35', moduleId: 'pspo1-4', front: 'O SM é chefe da equipe?', back: 'Não. Não é gerente de projetos tradicional nem chefe.' },
  { id: 'o1-36', moduleId: 'pspo1-4', front: 'O SM cobra status na Daily?', back: 'Não. A Daily é dos e para os Developers.' },
  { id: 'o1-37', moduleId: 'pspo1-4', front: 'O SM atualiza o Product Backlog?', back: 'Não — isso é do Product Owner.' },
  { id: 'o1-38', moduleId: 'pspo1-4', front: 'Quem resolve conflitos técnicos de engenharia?', back: 'Os próprios Developers. Nem o PO nem o SM ditam soluções técnicas.' },

  /* ---------- Módulo 5 — Eventos e timeboxes (11) ---------- */
  { id: 'o1-39', moduleId: 'pspo1-5', front: 'Qual evento é o contêiner de todos os outros?', back: 'A Sprint.' },
  { id: 'o1-40', moduleId: 'pspo1-5', front: 'Qual a duração máxima da Sprint?', back: 'Um mês ou menos.' },
  { id: 'o1-41', moduleId: 'pspo1-5', front: 'Quando começa uma nova Sprint?', back: 'Imediatamente após o término da anterior.' },
  { id: 'o1-42', moduleId: 'pspo1-5', front: 'Qual o timebox da Sprint Planning?', back: '8 horas para uma Sprint de um mês.' },
  { id: 'o1-43', moduleId: 'pspo1-5', front: 'Quais três tópicos a Sprint Planning aborda?', back: 'Por que a Sprint é valiosa, o que pode ser feito e como o trabalho será realizado.' },
  { id: 'o1-44', moduleId: 'pspo1-5', front: 'Qual o timebox da Daily Scrum?', back: '15 minutos, estrito.' },
  { id: 'o1-45', moduleId: 'pspo1-5', front: 'Qual o propósito da Daily Scrum?', back: 'Inspecionar o progresso rumo ao Sprint Goal e criar um plano para as próximas 24 horas.' },
  { id: 'o1-46', moduleId: 'pspo1-5', front: 'Qual o timebox da Sprint Review?', back: '4 horas para uma Sprint de um mês.' },
  { id: 'o1-47', moduleId: 'pspo1-5', front: 'A Sprint Review é uma apresentação de slides?', back: 'Não. É uma sessão de trabalho colaborativa sobre o produto.' },
  { id: 'o1-48', moduleId: 'pspo1-5', front: 'Qual o timebox da Retrospective?', back: '3 horas para uma Sprint de um mês.' },
  { id: 'o1-49', moduleId: 'pspo1-5', front: 'O que a Retrospective inspeciona?', back: 'Indivíduos, interações, processos, ferramentas e a Definição de Pronto.' },

  /* ---------- Módulo 6 — Participação (8) ---------- */
  { id: 'o1-50', moduleId: 'pspo1-6', front: 'Quem participa da Sprint Planning?', back: 'Toda a Equipe Scrum. Stakeholders só por convite pontual, para dar insumos.' },
  { id: 'o1-51', moduleId: 'pspo1-6', front: 'De quem é a Daily Scrum?', back: 'Exclusiva dos Developers.' },
  { id: 'o1-52', moduleId: 'pspo1-6', front: 'Quando o PO ou o SM participam da Daily?', back: 'Somente se estiverem executando ativamente itens técnicos da Sprint como Developers.' },
  { id: 'o1-53', moduleId: 'pspo1-6', front: 'Se PO ou SM assistem à Daily como ouvintes?', back: 'Não podem falar nem interferir.' },
  { id: 'o1-54', moduleId: 'pspo1-6', front: 'Stakeholders podem entrar na Daily?', back: 'Nunca.' },
  { id: 'o1-55', moduleId: 'pspo1-6', front: 'Quem participa da Sprint Review?', back: 'Toda a Equipe Scrum e as partes interessadas convidadas pelo PO.' },
  { id: 'o1-56', moduleId: 'pspo1-6', front: 'Qual é o evento-chave para o feedback dos stakeholders?', back: 'A Sprint Review.' },
  { id: 'o1-57', moduleId: 'pspo1-6', front: 'Stakeholders participam da Retrospective?', back: 'Não — estão estritamente proibidos, para preservar a segurança psicológica do time.' },

  /* ---------- Módulo 7 — Artefatos e compromissos (11) ---------- */
  { id: 'o1-58', moduleId: 'pspo1-7', front: 'Quais são os três artefatos do Scrum?', back: 'Product Backlog, Sprint Backlog e Incremento.' },
  { id: 'o1-59', moduleId: 'pspo1-7', front: 'Qual o compromisso do Product Backlog?', back: 'O Product Goal.' },
  { id: 'o1-60', moduleId: 'pspo1-7', front: 'Qual o compromisso do Sprint Backlog?', back: 'O Sprint Goal.' },
  { id: 'o1-61', moduleId: 'pspo1-7', front: 'Qual o compromisso do Incremento?', back: 'A Definition of Done.' },
  { id: 'o1-62', moduleId: 'pspo1-7', front: 'O que descreve o Product Goal?', back: 'Um estado futuro do produto, alvo de longo prazo para o planejamento da equipe.' },
  { id: 'o1-63', moduleId: 'pspo1-7', front: 'Pode-se perseguir dois Product Goals ao mesmo tempo?', back: 'Não. É preciso atingir ou abandonar um antes de começar o próximo.' },
  { id: 'o1-64', moduleId: 'pspo1-7', front: 'De quem é o Sprint Backlog?', back: 'De propriedade exclusiva dos Developers.' },
  { id: 'o1-65', moduleId: 'pspo1-7', front: 'O que compõe o Sprint Backlog?', back: 'O Sprint Goal (porquê), os itens selecionados (o quê) e o plano de entrega (como).' },
  { id: 'o1-66', moduleId: 'pspo1-7', front: 'O que é o Incremento?', back: 'Um passo concreto em direção ao Product Goal, cumulativo e totalmente utilizável.' },
  { id: 'o1-67', moduleId: 'pspo1-7', front: 'Quantos incrementos podem ser criados em uma Sprint?', back: 'Vários — e podem ser entregues durante a própria Sprint.' },
  { id: 'o1-68', moduleId: 'pspo1-7', front: 'O Product Backlog é trancado após o Sprint Planning?', back: 'Não. Ele é vivo e evolui continuamente com o negócio.' },

  /* ---------- Módulo 8 — DoD e Incremento (7) ---------- */
  { id: 'o1-69', moduleId: 'pspo1-8', front: 'O que é a Definition of Done?', back: 'A descrição formal do estado do incremento quando atende às medidas de qualidade exigidas.' },
  { id: 'o1-70', moduleId: 'pspo1-8', front: 'Um item fora da DoD pode ser demonstrado na Review?', back: 'Não, em hipótese alguma.' },
  { id: 'o1-71', moduleId: 'pspo1-8', front: 'Para onde vai o item incompleto no fim da Sprint?', back: 'Volta integralmente ao Product Backlog para reavaliação e reordenação pelo PO.' },
  { id: 'o1-72', moduleId: 'pspo1-8', front: 'Quem define a DoD quando há padrão organizacional?', back: 'A equipe adota o padrão da organização como base mínima.' },
  { id: 'o1-73', moduleId: 'pspo1-8', front: 'E quando a organização não tem padrão?', back: 'Os Developers criam uma DoD apropriada ao produto.' },
  { id: 'o1-74', moduleId: 'pspo1-8', front: 'Quando o incremento pode ir para produção?', back: 'A qualquer momento da Sprint, assim que atingir a DoD.' },
  { id: 'o1-75', moduleId: 'pspo1-8', front: 'A Sprint Review é um portão de aprovação?', back: 'Não. Serve para inspecionar e adaptar, nunca como barreira de liberação.' },

  /* ---------- Módulo 9 — Valor e visão (6) ---------- */
  { id: 'o1-76', moduleId: 'pspo1-9', front: 'Como o PO gerencia o retorno sobre o investimento?', back: 'Garantindo que a equipe gaste energia primeiro no que traz mais impacto.' },
  { id: 'o1-77', moduleId: 'pspo1-9', front: 'O que a Visão do Produto deve descrever?', back: 'O propósito do produto, o valor que entrega e quem se beneficia dele.' },
  { id: 'o1-78', moduleId: 'pspo1-9', front: 'Com o que a visão deve se alinhar?', back: 'Explicitamente, com a estratégia de negócios da organização.' },
  { id: 'o1-79', moduleId: 'pspo1-9', front: 'Como visão e valor se alinham na prática?', back: 'Por um processo iterativo de refinamento contínuo do backlog.' },
  { id: 'o1-80', moduleId: 'pspo1-9', front: 'O que envolve o refinamento contínuo?', back: 'Quebrar itens grandes em fatias menores e estimá-los.' },
  { id: 'o1-81', moduleId: 'pspo1-9', front: 'Qual a fonte única de trabalho da equipe?', back: 'O Product Backlog.' },

  /* ---------- Módulo 10 — EBM (10) ---------- */
  { id: 'o1-82', moduleId: 'pspo1-10', front: 'O que é o EBM?', back: 'Evidence-Based Management: gestão do valor comercial com dados empíricos.' },
  { id: 'o1-83', moduleId: 'pspo1-10', front: 'Quais são as quatro áreas de valor chave?', back: 'Current Value, Unrealized Value, Time-to-Market e Ability to Innovate.' },
  { id: 'o1-84', moduleId: 'pspo1-10', front: 'O que mede o Current Value?', back: 'O valor entregue a clientes, usuários e negócio no momento atual.' },
  { id: 'o1-85', moduleId: 'pspo1-10', front: 'Exemplos de métricas de Current Value', back: 'Satisfação do cliente, lucratividade, receita por funcionário, retenção e índice de uso.' },
  { id: 'o1-86', moduleId: 'pspo1-10', front: 'O que mede o Unrealized Value?', back: 'O valor potencial futuro se novas necessidades ou lacunas fossem atendidas.' },
  { id: 'o1-87', moduleId: 'pspo1-10', front: 'Exemplos de métricas de Unrealized Value', back: 'Participação de mercado potencial e desejos não atendidos dos clientes.' },
  { id: 'o1-88', moduleId: 'pspo1-10', front: 'O que mede o Time-to-Market?', back: 'A velocidade para entregar valor, aprender com o feedback e responder ao mercado.' },
  { id: 'o1-89', moduleId: 'pspo1-10', front: 'Exemplos de métricas de Time-to-Market', back: 'Frequência de releases, cycle time e lead time.' },
  { id: 'o1-90', moduleId: 'pspo1-10', front: 'O que mede o Ability to Innovate?', back: 'A capacidade estrutural de criar novas soluções em vez de apagar incêndios.' },
  { id: 'o1-91', moduleId: 'pspo1-10', front: 'Exemplos de métricas de Ability to Innovate', back: 'Custo com manutenção versus novos recursos e índice de defeitos em produção.' },

  /* ---------- Módulo 11 — Posturas profissionais (4) ---------- */
  { id: 'o1-92', moduleId: 'pspo1-11', front: 'O que faz um facilitador?', back: 'Conduz dinâmicas de forma neutra.' },
  { id: 'o1-93', moduleId: 'pspo1-11', front: 'O que faz um coach?', back: 'Faz perguntas poderosas para o time encontrar as próprias respostas.' },
  { id: 'o1-94', moduleId: 'pspo1-11', front: 'Qual a diferença entre mentor e professor?', back: 'O mentor compartilha experiência pessoal; o professor ensina a teoria do Scrum.' },
  { id: 'o1-95', moduleId: 'pspo1-11', front: 'Desenvolver a equipe é só do Scrum Master?', back: 'Não. Como o time é autogerenciável, todos apoiam a evolução mútua.' },

  /* ---------- Módulo 12 — Armadilhas (5) ---------- */
  { id: 'o1-96', moduleId: 'pspo1-12', front: 'Quem pode cancelar uma Sprint?', back: 'Apenas o Product Owner, e só se o Sprint Goal se tornar obsoleto.' },
  { id: 'o1-97', moduleId: 'pspo1-12', front: 'Dez equipes no mesmo produto: quantos POs e backlogs?', back: 'Um Product Owner e um Product Backlog — o produto é único.' },
  { id: 'o1-98', moduleId: 'pspo1-12', front: 'É preciso esperar a Review para liberar o incremento?', back: 'Não. Pode ser liberado a qualquer momento após atingir a DoD.' },
  { id: 'o1-99', moduleId: 'pspo1-12', front: 'O Sprint Goal pode ser alterado durante a Sprint?', back: 'Não se a mudança invalidar o propósito da Sprint.' },
  { id: 'o1-100', moduleId: 'pspo1-12', front: 'O que nunca deve mudar sem alinhamento drástico?', back: 'O Sprint Backlog — o Product Backlog, ao contrário, muda continuamente.' }
];
