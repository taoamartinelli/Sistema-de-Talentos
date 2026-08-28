import { Flashcard } from '../trilha360';

/** 100 flash cards da trilha PSM I, distribuídos pelas 10 fases. */
export const PSM1_FLASHCARDS: Flashcard[] = [
  /* ---------- Fase 1 — Introdução (12) ---------- */
  { id: 'sm-1', moduleId: 'psm1-1', front: 'O que é o Scrum?', back: 'Um framework leve para gerar valor por meio de soluções adaptativas para problemas complexos.' },
  { id: 'sm-2', moduleId: 'psm1-1', front: 'O Scrum é uma metodologia?', back: 'Não. É um framework — define o mínimo necessário e deixa as práticas a cargo do time.' },
  { id: 'sm-3', moduleId: 'psm1-1', front: 'O que é iteração no Scrum?', back: 'O ciclo repetido de trabalho — a Sprint — que permite inspecionar e adaptar com frequência.' },
  { id: 'sm-4', moduleId: 'psm1-1', front: 'O que é incremento?', back: 'O resultado utilizável produzido no ciclo, que soma aos anteriores.' },
  { id: 'sm-5', moduleId: 'psm1-1', front: 'Quantas questões tem o exame PSM I?', back: '80 questões.' },
  { id: 'sm-6', moduleId: 'psm1-1', front: 'Qual o tempo limite da prova?', back: '60 minutos.' },
  { id: 'sm-7', moduleId: 'psm1-1', front: 'Qual a nota mínima de aprovação?', back: '85%.' },
  { id: 'sm-8', moduleId: 'psm1-1', front: 'Quais os tipos de questão da prova?', back: 'Múltipla escolha, múltiplas respostas e verdadeiro ou falso.' },
  { id: 'sm-9', moduleId: 'psm1-1', front: 'Em que idioma a prova é aplicada?', back: 'Principalmente em inglês.' },
  { id: 'sm-10', moduleId: 'psm1-1', front: 'Qual é a base oficial do exame?', back: 'O Scrum Guide 2020.' },
  { id: 'sm-11', moduleId: 'psm1-1', front: 'Quem emite a certificação PSM I?', back: 'A Scrum.org.' },
  { id: 'sm-12', moduleId: 'psm1-1', front: 'O que compõe a mentalidade ágil?', back: 'Colaboração, transparência, inspeção, adaptação, melhoria contínua e autogestão.' },

  /* ---------- Fase 2 — Organização dos estudos (7) ---------- */
  { id: 'sm-13', moduleId: 'psm1-2', front: 'Qual o papel do repositório oficial na trilha?', back: 'Ser o ambiente central de estudo, com materiais, simulados e histórico de atualizações.' },
  { id: 'sm-14', moduleId: 'psm1-2', front: 'O que fica guardado no repositório?', back: 'Documentações, guias, links oficiais, simulados, anotações e exercícios.' },
  { id: 'sm-15', moduleId: 'psm1-2', front: 'Por que acompanhar o histórico de atualização?', back: 'Para não estudar por versões desatualizadas do material.' },
  { id: 'sm-16', moduleId: 'psm1-2', front: 'O que o participante deve saber fazer no repositório?', back: 'Acessar, navegar pelas pastas, localizar arquivos, baixar documentos e identificar versões.' },
  { id: 'sm-17', moduleId: 'psm1-2', front: 'Qual o benefício de centralizar os estudos?', back: 'Padronização e clareza: um único lugar para material, anotações e acompanhamento.' },
  { id: 'sm-18', moduleId: 'psm1-2', front: 'Onde ficam os simulados da trilha?', back: 'No repositório oficial, junto dos demais materiais.' },
  { id: 'sm-19', moduleId: 'psm1-2', front: 'Anotações pessoais entram no repositório?', back: 'Sim — a trilha prevê anotações e exercícios como parte do material.' },

  /* ---------- Fase 3 — Scrum Guide e empirismo (11) ---------- */
  { id: 'sm-20', moduleId: 'psm1-3', front: 'Qual é a principal referência da certificação?', back: 'O Scrum Guide 2020.' },
  { id: 'sm-21', moduleId: 'psm1-3', front: 'O que é empirismo?', back: 'O conhecimento vem da experiência e as decisões se baseiam no que é observado.' },
  { id: 'sm-22', moduleId: 'psm1-3', front: 'Quais são os três pilares?', back: 'Transparência, Inspeção e Adaptação.' },
  { id: 'sm-23', moduleId: 'psm1-3', front: 'O que a transparência permite?', back: 'A inspeção.' },
  { id: 'sm-24', moduleId: 'psm1-3', front: 'O que a inspeção permite?', back: 'A adaptação.' },
  { id: 'sm-25', moduleId: 'psm1-3', front: 'O que acontece sem adaptação?', back: 'A inspeção perde valor.' },
  { id: 'sm-26', moduleId: 'psm1-3', front: 'Para que serve o Scrum, segundo o Guia?', back: 'Para gerar valor por meio de soluções adaptativas para problemas complexos.' },
  { id: 'sm-27', moduleId: 'psm1-3', front: 'O que caracteriza um problema complexo?', back: 'Mais é desconhecido do que conhecido: a resposta emerge da experimentação, não do plano inicial.' },
  { id: 'sm-28', moduleId: 'psm1-3', front: 'Por que o Scrum é chamado de "leve"?', back: 'Porque define poucas regras: responsabilidades, eventos e artefatos — o resto é do time.' },
  { id: 'sm-29', moduleId: 'psm1-3', front: 'Quantas vezes ler o Scrum Guide?', back: 'Mais de uma — a trilha recomenda leitura repetida, priorizando entendimento sobre memorização.' },
  { id: 'sm-30', moduleId: 'psm1-3', front: 'O que significa "solução adaptativa"?', back: 'Uma solução que muda conforme o aprendizado, em vez de seguir um plano fixo.' },

  /* ---------- Fase 4 — Valores (8) ---------- */
  { id: 'sm-31', moduleId: 'psm1-4', front: 'Quais são os cinco valores do Scrum?', back: 'Commitment, Focus, Openness, Respect e Courage.' },
  { id: 'sm-32', moduleId: 'psm1-4', front: 'O que é Commitment?', back: 'Compromisso pessoal com os objetivos da equipe.' },
  { id: 'sm-33', moduleId: 'psm1-4', front: 'O que é Focus?', back: 'Foco no trabalho da Sprint e nos objetivos do time.' },
  { id: 'sm-34', moduleId: 'psm1-4', front: 'O que é Openness?', back: 'Abertura sobre o trabalho e os desafios, com a equipe e os stakeholders.' },
  { id: 'sm-35', moduleId: 'psm1-4', front: 'O que é Respect?', back: 'Respeito mútuo entre pessoas capazes e independentes.' },
  { id: 'sm-36', moduleId: 'psm1-4', front: 'O que é Courage?', back: 'Coragem para fazer a coisa certa e trabalhar em problemas difíceis.' },
  { id: 'sm-37', moduleId: 'psm1-4', front: 'Qual a relação entre valores e pilares?', back: 'Quando os valores são vividos, os pilares do empirismo se tornam reais.' },
  { id: 'sm-38', moduleId: 'psm1-4', front: 'Por que estudar os valores em inglês?', back: 'Porque a prova é aplicada em inglês e os termos aparecem no original.' },

  /* ---------- Fase 5 — Scrum Team (12) ---------- */
  { id: 'sm-39', moduleId: 'psm1-5', front: 'Como é composto o Scrum Team?', back: 'Um Product Owner, um Scrum Master e os Developers.' },
  { id: 'sm-40', moduleId: 'psm1-5', front: 'Quais características o time deve ter?', back: 'Ser pequeno, multifuncional e autogerenciável.' },
  { id: 'sm-41', moduleId: 'psm1-5', front: 'O que significa multifuncional?', back: 'O time reúne todas as habilidades necessárias para criar valor a cada Sprint.' },
  { id: 'sm-42', moduleId: 'psm1-5', front: 'O que significa autogerenciável?', back: 'O time decide internamente quem faz o quê, como e quando.' },
  { id: 'sm-43', moduleId: 'psm1-5', front: 'Qual a responsabilidade central do Scrum Master?', back: 'Estabelecer o Scrum conforme definido no Scrum Guide.' },
  { id: 'sm-44', moduleId: 'psm1-5', front: 'O que é liderança servidora?', back: 'Servir o time e a organização, removendo obstáculos em vez de comandar.' },
  { id: 'sm-45', moduleId: 'psm1-5', front: 'Cite três atuações do Scrum Master.', back: 'Facilitar, remover impedimentos e fazer coaching do time.' },
  { id: 'sm-46', moduleId: 'psm1-5', front: 'Qual o foco do Product Owner?', back: 'Maximizar o valor, gerir o Product Backlog, priorizar e cuidar do Product Goal.' },
  { id: 'sm-47', moduleId: 'psm1-5', front: 'Quais as responsabilidades dos Developers?', back: 'Autogestão, planejamento da Sprint, criação do incremento e responsabilidade pela qualidade.' },
  { id: 'sm-48', moduleId: 'psm1-5', front: 'Quem é responsável pela qualidade do incremento?', back: 'Os Developers.' },
  { id: 'sm-49', moduleId: 'psm1-5', front: 'Quantos Product Owners existem em um Scrum Team?', back: 'Um.' },
  { id: 'sm-50', moduleId: 'psm1-5', front: 'Qual papel é o foco da certificação PSM I?', back: 'O Scrum Master.' },

  /* ---------- Fase 6 — Eventos (14) ---------- */
  { id: 'sm-51', moduleId: 'psm1-6', front: 'Qual evento é o contêiner dos demais?', back: 'A Sprint.' },
  { id: 'sm-52', moduleId: 'psm1-6', front: 'O que é o Sprint Goal?', back: 'O objetivo único da Sprint, que dá foco e coerência ao trabalho.' },
  { id: 'sm-53', moduleId: 'psm1-6', front: 'O que a Sprint traz para o trabalho?', back: 'Previsibilidade, por meio de um ciclo com timebox, inspeção e adaptação.' },
  { id: 'sm-54', moduleId: 'psm1-6', front: 'Quais três perguntas a Sprint Planning responde?', back: 'Por que a Sprint é valiosa, o que será feito e como o trabalho será realizado.' },
  { id: 'sm-55', moduleId: 'psm1-6', front: 'Qual a duração máxima da Daily Scrum?', back: '15 minutos.' },
  { id: 'sm-56', moduleId: 'psm1-6', front: 'Para quem é a Daily Scrum?', back: 'Para os Developers.' },
  { id: 'sm-57', moduleId: 'psm1-6', front: 'O que a Daily inspeciona?', back: 'O progresso rumo ao Sprint Goal, planejando as próximas 24 horas.' },
  { id: 'sm-58', moduleId: 'psm1-6', front: 'O que a Sprint Review inspeciona?', back: 'O incremento, com feedback e colaboração dos stakeholders.' },
  { id: 'sm-59', moduleId: 'psm1-6', front: 'O que pode ser adaptado na Sprint Review?', back: 'O Product Backlog.' },
  { id: 'sm-60', moduleId: 'psm1-6', front: 'Qual o propósito da Sprint Retrospective?', back: 'A melhoria contínua: inspecionar processo, eficiência e qualidade e definir ações.' },
  { id: 'sm-61', moduleId: 'psm1-6', front: 'A Sprint Review é uma apresentação de status?', back: 'Não — é colaboração sobre o produto e adaptação do backlog.' },
  { id: 'sm-62', moduleId: 'psm1-6', front: 'O que é timebox?', back: 'A duração máxima fixa de um evento.' },
  { id: 'sm-63', moduleId: 'psm1-6', front: 'Para que servem os eventos, no fundo?', back: 'Para habilitar inspeção e adaptação de forma regular.' },
  { id: 'sm-64', moduleId: 'psm1-6', front: 'O que a Retrospective produz?', back: 'Ações concretas de melhoria para a próxima Sprint.' },

  /* ---------- Fase 7 — Artefatos (12) ---------- */
  { id: 'sm-65', moduleId: 'psm1-7', front: 'Quais são as características do Product Backlog?', back: 'Único, ordenado, transparente e emergente.' },
  { id: 'sm-66', moduleId: 'psm1-7', front: 'O que significa o backlog ser emergente?', back: 'Ele evolui continuamente conforme o aprendizado e as mudanças de contexto.' },
  { id: 'sm-67', moduleId: 'psm1-7', front: 'O que compõe o Sprint Backlog?', back: 'O objetivo da Sprint, o plano de trabalho e a atualização contínua desse plano.' },
  { id: 'sm-68', moduleId: 'psm1-7', front: 'Com que frequência o Sprint Backlog é atualizado?', back: 'Continuamente, ao longo da Sprint.' },
  { id: 'sm-69', moduleId: 'psm1-7', front: 'O que é o Increment?', back: 'A entrega de valor: um resultado utilizável que atende à Definition of Done.' },
  { id: 'sm-70', moduleId: 'psm1-7', front: 'O que é a Definition of Done?', back: 'O critério de qualidade que define quando o trabalho está realmente concluído.' },
  { id: 'sm-71', moduleId: 'psm1-7', front: 'A DoD pode ser reduzida para caber mais trabalho?', back: 'Nunca.' },
  { id: 'sm-72', moduleId: 'psm1-7', front: 'Qual o compromisso do Product Backlog?', back: 'O Product Goal.' },
  { id: 'sm-73', moduleId: 'psm1-7', front: 'Qual o compromisso do Sprint Backlog?', back: 'O Sprint Goal.' },
  { id: 'sm-74', moduleId: 'psm1-7', front: 'Qual o compromisso do Increment?', back: 'A Definition of Done.' },
  { id: 'sm-75', moduleId: 'psm1-7', front: 'Qual a relação entre DoD e transparência?', back: 'Sem um critério claro de pronto, o progresso relatado deixa de ser confiável.' },
  { id: 'sm-76', moduleId: 'psm1-7', front: 'Quantos Product Backlogs existem por produto?', back: 'Um — ele é único.' },

  /* ---------- Fase 8 — Armadilhas (12) ---------- */
  { id: 'sm-77', moduleId: 'psm1-8', front: 'Existe Sprint Zero no Scrum?', back: 'Não. Sprint Zero não existe.' },
  { id: 'sm-78', moduleId: 'psm1-8', front: 'Velocidade mede valor?', back: 'Não. Mede capacidade de entrega, não valor gerado.' },
  { id: 'sm-79', moduleId: 'psm1-8', front: 'Story Points medem valor?', back: 'Não. São estimativa de tamanho, não de valor.' },
  { id: 'sm-80', moduleId: 'psm1-8', front: 'O Scrum exige User Stories?', back: 'Não. É apenas um formato possível de item de backlog.' },
  { id: 'sm-81', moduleId: 'psm1-8', front: 'Quando acontece o refinamento do backlog?', back: 'É contínuo — não é um evento com hora marcada.' },
  { id: 'sm-82', moduleId: 'psm1-8', front: 'O Product Owner gerencia pessoas?', back: 'Não. Ele gerencia o produto e o backlog, não a equipe.' },
  { id: 'sm-83', moduleId: 'psm1-8', front: 'O Scrum Master substitui o Product Owner?', back: 'Não. São responsabilidades distintas.' },
  { id: 'sm-84', moduleId: 'psm1-8', front: 'Como diferenciar Scrum real de prática de mercado?', back: 'Perguntando se aquilo está no Scrum Guide — se não estiver, é complementar e opcional.' },
  { id: 'sm-85', moduleId: 'psm1-8', front: 'Qual cuidado ter com questões de múltiplas respostas?', back: 'Ler quantas alternativas devem ser marcadas antes de responder.' },
  { id: 'sm-86', moduleId: 'psm1-8', front: 'Por que a leitura cuidadosa é decisiva?', back: 'Porque as questões testam interpretação de contexto, não memorização.' },
  { id: 'sm-87', moduleId: 'psm1-8', front: 'Burndown chart é obrigatório no Scrum?', back: 'Não — é prática complementar, assim como velocity e planning poker.' },
  { id: 'sm-88', moduleId: 'psm1-8', front: 'O que fazer diante de uma alternativa que "parece do mercado"?', back: 'Desconfiar: a resposta certa é a que está alinhada ao Scrum Guide.' },

  /* ---------- Fase 9 — Simulados (7) ---------- */
  { id: 'sm-89', moduleId: 'psm1-9', front: 'Qual a meta recomendada nos simulados?', back: 'Mínimo de 90%, com consistência nos resultados.' },
  { id: 'sm-90', moduleId: 'psm1-9', front: 'Por que a meta é maior que a nota de corte?', back: 'Para criar margem diante do inglês e da pressão do tempo na prova real.' },
  { id: 'sm-91', moduleId: 'psm1-9', front: 'O que fazer com os erros dos simulados?', back: 'Analisá-los e voltar ao Scrum Guide no ponto correspondente.' },
  { id: 'sm-92', moduleId: 'psm1-9', front: 'Além de acertar, o que os simulados treinam?', back: 'A capacidade de interpretar questões rapidamente.' },
  { id: 'sm-93', moduleId: 'psm1-9', front: 'Questões comentadas servem para quê?', back: 'Entender o porquê da alternativa correta, não apenas qual é.' },
  { id: 'sm-94', moduleId: 'psm1-9', front: 'Com que frequência revisar?', back: 'Periodicamente — a trilha prevê revisões contínuas ao longo do estudo.' },
  { id: 'sm-95', moduleId: 'psm1-9', front: 'Qual o risco de acertar muito só uma vez?', back: 'Falta de consistência: a trilha pede resultados estáveis, não um pico isolado.' },

  /* ---------- Fase 10 — Preparação final (5) ---------- */
  { id: 'sm-96', moduleId: 'psm1-10', front: 'O que revisar na preparação final?', back: 'Scrum Guide completo, valores, eventos, responsabilidades, artefatos, compromissos e armadilhas.' },
  { id: 'sm-97', moduleId: 'psm1-10', front: 'Que cuidados tomar no dia da prova?', back: 'Ambiente silencioso, internet estável, navegador atualizado e boa gestão do tempo.' },
  { id: 'sm-98', moduleId: 'psm1-10', front: 'Quanto tempo por questão, em média?', back: 'Cerca de 45 segundos — 80 questões em 60 minutos.' },
  { id: 'sm-99', moduleId: 'psm1-10', front: 'Quando o participante é considerado apto?', back: 'Ao concluir todas as fases, ler o Scrum Guide, fazer os simulados e demonstrar entendimento dos conceitos.' },
  { id: 'sm-100', moduleId: 'psm1-10', front: 'Qual o objetivo principal da trilha?', back: 'O entendimento real do framework e da atuação do Scrum Master — a certificação é consequência.' }
];
