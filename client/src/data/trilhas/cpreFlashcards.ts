import { Flashcard } from '../trilha360';

/** 100 flash cards da trilha CPRE, distribuídos pelas 10 fases. */
export const CPRE_FLASHCARDS: Flashcard[] = [
  /* ---------- Fase 1 — Introdução (11) ---------- */
  { id: 'cp-1', moduleId: 'cpre-1', front: 'O que é engenharia de requisitos?', back: 'A área responsável por identificar, documentar, validar e gerenciar necessidades e expectativas sobre sistemas, produtos e processos.' },
  { id: 'cp-2', moduleId: 'cpre-1', front: 'Quais são as quatro grandes atividades da área?', back: 'Identificar, documentar, validar e gerenciar requisitos.' },
  { id: 'cp-3', moduleId: 'cpre-1', front: 'O que é um requisito?', back: 'Uma necessidade ou expectativa documentada que o sistema deve atender.' },
  { id: 'cp-4', moduleId: 'cpre-1', front: 'O que é uma necessidade de negócio?', back: 'O problema ou objetivo da organização que motiva o sistema — a origem dos requisitos.' },
  { id: 'cp-5', moduleId: 'cpre-1', front: 'Quem mantém a certificação CPRE?', back: 'O IREB — International Requirements Engineering Board.' },
  { id: 'cp-6', moduleId: 'cpre-1', front: 'Qual o foco do nível Foundation?', back: 'Os conceitos fundamentais necessários à atuação profissional na área de requisitos.' },
  { id: 'cp-7', moduleId: 'cpre-1', front: 'Como são as questões da prova?', back: 'Múltipla escolha, conceituais e interpretativas, baseadas no syllabus do IREB.' },
  { id: 'cp-8', moduleId: 'cpre-1', front: 'Em que idioma a prova é aplicada?', back: 'Principalmente em inglês.' },
  { id: 'cp-9', moduleId: 'cpre-1', front: 'Qual o impacto de requisitos mal feitos?', back: 'Retrabalho, atraso e entrega que não resolve o problema — o defeito nasce antes do código.' },
  { id: 'cp-10', moduleId: 'cpre-1', front: 'Que postura a área exige?', back: 'Comunicação clara, pensamento analítico e organização da informação.' },
  { id: 'cp-11', moduleId: 'cpre-1', front: 'Qual a relação entre requisitos e qualidade?', back: 'A qualidade começa no requisito: não se entrega o produto certo a partir de uma necessidade mal entendida.' },

  /* ---------- Fase 2 — Organização dos estudos (6) ---------- */
  { id: 'cp-12', moduleId: 'cpre-2', front: 'Qual o papel do repositório da trilha?', back: 'Ser o ambiente central com documentações, links oficiais, simulados e histórico.' },
  { id: 'cp-13', moduleId: 'cpre-2', front: 'Por que acompanhar as versões do material?', back: 'Para não estudar por uma versão antiga do syllabus.' },
  { id: 'cp-14', moduleId: 'cpre-2', front: 'O que o participante deve saber fazer no repositório?', back: 'Acessar, navegar, localizar arquivos, baixar documentos e identificar versões.' },
  { id: 'cp-15', moduleId: 'cpre-2', front: 'Qual o benefício de centralizar os estudos?', back: 'Padronização e clareza: material, anotações e histórico em um só lugar.' },
  { id: 'cp-16', moduleId: 'cpre-2', front: 'Onde ficam os simulados da trilha?', back: 'No repositório oficial, junto dos demais materiais.' },
  { id: 'cp-17', moduleId: 'cpre-2', front: 'Anotações pessoais fazem parte do material?', back: 'Sim — a trilha prevê anotações e exercícios como parte do acervo.' },

  /* ---------- Fase 3 — Fundamentos e tipos (16) ---------- */
  { id: 'cp-18', moduleId: 'cpre-3', front: 'Qual é a referência oficial da certificação?', back: 'O syllabus oficial CPRE Foundation Level, do IREB.' },
  { id: 'cp-19', moduleId: 'cpre-3', front: 'O que é um requisito funcional?', back: 'O que o sistema deve fazer — uma função ou comportamento esperado.' },
  { id: 'cp-20', moduleId: 'cpre-3', front: 'O que é um requisito não funcional?', back: 'Uma qualidade do sistema: desempenho, segurança, usabilidade, disponibilidade.' },
  { id: 'cp-21', moduleId: 'cpre-3', front: 'O que é uma restrição?', back: 'Uma limitação imposta à solução, como tecnologia obrigatória ou exigência legal.' },
  { id: 'cp-22', moduleId: 'cpre-3', front: 'O que é uma regra de negócio?', back: 'Uma política ou condição do negócio que o sistema deve respeitar.' },
  { id: 'cp-23', moduleId: 'cpre-3', front: 'O que é um critério de aceitação?', back: 'A condição objetiva que permite considerar o requisito atendido.' },
  { id: 'cp-24', moduleId: 'cpre-3', front: 'Exemplo de requisito não funcional', back: '"O sistema deve responder em até 2 segundos para 95% das requisições."' },
  { id: 'cp-25', moduleId: 'cpre-3', front: 'O que significa clareza em um requisito?', back: 'Entendimento único, sem margem para interpretações divergentes.' },
  { id: 'cp-26', moduleId: 'cpre-3', front: 'O que significa consistência?', back: 'O requisito não conflita com outros requisitos.' },
  { id: 'cp-27', moduleId: 'cpre-3', front: 'O que significa completude?', back: 'O requisito traz a informação necessária para ser implementado e verificado.' },
  { id: 'cp-28', moduleId: 'cpre-3', front: 'O que significa verificabilidade?', back: 'Existe forma objetiva de comprovar que o requisito foi atendido.' },
  { id: 'cp-29', moduleId: 'cpre-3', front: 'Por que "o sistema deve ser rápido" é um mau requisito?', back: 'Não é verificável nem claro: falta o critério objetivo de tempo.' },
  { id: 'cp-30', moduleId: 'cpre-3', front: 'Qual o problema da ambiguidade?', back: 'Permite duas implementações diferentes, ambas defensáveis pelo texto — o erro só aparece na entrega.' },
  { id: 'cp-31', moduleId: 'cpre-3', front: 'O que é rastreabilidade de um requisito?', back: 'Saber de onde ele veio e o que ele afeta.' },
  { id: 'cp-32', moduleId: 'cpre-3', front: 'Quais são os critérios de qualidade de um requisito?', back: 'Clareza, consistência, completude, rastreabilidade, verificabilidade e ausência de ambiguidade.' },
  { id: 'cp-33', moduleId: 'cpre-3', front: 'Qual o propósito da engenharia de requisitos?', back: 'Garantir que o sistema construído corresponda às necessidades reais dos stakeholders.' },

  /* ---------- Fase 4 — Stakeholders e elicitação (16) ---------- */
  { id: 'cp-34', moduleId: 'cpre-4', front: 'Quem são os stakeholders?', back: 'Todas as pessoas ou áreas afetadas pelo sistema ou que tenham interesse nele.' },
  { id: 'cp-35', moduleId: 'cpre-4', front: 'Qual o risco de esquecer um stakeholder?', back: 'Requisitos que só aparecem no fim, quando mudar já custa caro.' },
  { id: 'cp-36', moduleId: 'cpre-4', front: 'O que é elicitação?', back: 'O levantamento das necessidades junto aos stakeholders, que dá origem aos requisitos.' },
  { id: 'cp-37', moduleId: 'cpre-4', front: 'Para que serve a entrevista?', back: 'Aprofundar a necessidade individual, com espaço para detalhes e contexto.' },
  { id: 'cp-38', moduleId: 'cpre-4', front: 'Para que serve o workshop?', back: 'Construir entendimento coletivo e resolver divergências entre áreas.' },
  { id: 'cp-39', moduleId: 'cpre-4', front: 'Para que serve o brainstorming?', back: 'Gerar alternativas antes de decidir, sem filtrar cedo demais.' },
  { id: 'cp-40', moduleId: 'cpre-4', front: 'Quando o questionário é a melhor escolha?', back: 'Quando é preciso alcançar muitas pessoas com baixo custo.' },
  { id: 'cp-41', moduleId: 'cpre-4', front: 'O que a observação revela?', back: 'O que as pessoas realmente fazem, e não apenas o que dizem fazer.' },
  { id: 'cp-42', moduleId: 'cpre-4', front: 'Para que serve a prototipação na elicitação?', back: 'Tornar concreto o que era abstrato e antecipar o feedback.' },
  { id: 'cp-43', moduleId: 'cpre-4', front: 'O que é escuta ativa?', back: 'Ouvir para compreender, confirmando o entendimento em vez de presumir.' },
  { id: 'cp-44', moduleId: 'cpre-4', front: 'Por que registrar o que foi levantado?', back: 'Porque memória não é rastreável — o registro é a base da validação posterior.' },
  { id: 'cp-45', moduleId: 'cpre-4', front: 'O que é gestão de expectativas?', back: 'Alinhar com os stakeholders o que será atendido, quando e o que ficará de fora.' },
  { id: 'cp-46', moduleId: 'cpre-4', front: 'Duas áreas pedem coisas conflitantes. O que fazer?', back: 'Levar o conflito para um workshop, registrando as posições e buscando decisão com quem tem autoridade.' },
  { id: 'cp-47', moduleId: 'cpre-4', front: 'Qual técnica usar quando o processo atual é confuso?', back: 'Observação — acompanhar o trabalho real revela o que a descrição não conta.' },
  { id: 'cp-48', moduleId: 'cpre-4', front: 'Qual técnica usar para validar uma ideia visual rapidamente?', back: 'Prototipação.' },
  { id: 'cp-49', moduleId: 'cpre-4', front: 'A elicitação termina quando?', back: 'Não termina de uma vez: novas necessidades surgem e passam pelo mesmo ciclo de análise e validação.' },

  /* ---------- Fase 5 — Documentação e modelagem (14) ---------- */
  { id: 'cp-50', moduleId: 'cpre-5', front: 'Por que padronizar a documentação?', back: 'Para que qualquer pessoa encontre a informação no mesmo lugar e a interprete do mesmo jeito.' },
  { id: 'cp-51', moduleId: 'cpre-5', front: 'Para que serve o controle de versões?', back: 'Saber o que mudou, quando e por quê.' },
  { id: 'cp-52', moduleId: 'cpre-5', front: 'O que é um caso de uso?', back: 'A descrição de como um ator interage com o sistema para atingir um objetivo.' },
  { id: 'cp-53', moduleId: 'cpre-5', front: 'O que é um fluxo?', back: 'A sequência de passos de uma interação, incluindo alternativas e exceções.' },
  { id: 'cp-54', moduleId: 'cpre-5', front: 'O que é um cenário?', back: 'Uma situação concreta que ilustra o comportamento esperado do sistema.' },
  { id: 'cp-55', moduleId: 'cpre-5', front: 'Por que modelar além do texto?', back: 'Porque o modelo revela lacunas que o texto esconde — como um fluxo sem tratamento de exceção.' },
  { id: 'cp-56', moduleId: 'cpre-5', front: 'O que é objetividade na documentação?', back: 'Dizer o necessário sem rodeios, evitando adjetivos que não podem ser verificados.' },
  { id: 'cp-57', moduleId: 'cpre-5', front: 'O que é o fluxo alternativo de um caso de uso?', back: 'O caminho válido diferente do principal — por exemplo, pagamento por outro meio.' },
  { id: 'cp-58', moduleId: 'cpre-5', front: 'O que é o fluxo de exceção?', back: 'O caminho quando algo dá errado — cartão recusado, serviço indisponível.' },
  { id: 'cp-59', moduleId: 'cpre-5', front: 'O que é um ator em um caso de uso?', back: 'Quem interage com o sistema: uma pessoa, um perfil ou outro sistema.' },
  { id: 'cp-60', moduleId: 'cpre-5', front: 'Modelagem substitui a documentação textual?', back: 'Não — as duas se complementam; o modelo estrutura, o texto detalha.' },
  { id: 'cp-61', moduleId: 'cpre-5', front: 'O que torna a documentação fácil de entender?', back: 'Estrutura previsível, linguagem simples e ausência de ambiguidade.' },
  { id: 'cp-62', moduleId: 'cpre-5', front: 'O que a documentação deve permitir rastrear?', back: 'A origem do requisito, os relacionamentos e o histórico de alterações.' },
  { id: 'cp-63', moduleId: 'cpre-5', front: 'Qual o risco de documentar demais?', back: 'Documento que ninguém lê nem mantém deixa de ser fonte confiável — vira ruído.' },

  /* ---------- Fase 6 — Validação e gerenciamento (16) ---------- */
  { id: 'cp-64', moduleId: 'cpre-6', front: 'O que é validar um requisito?', back: 'Confirmar com os stakeholders que o documentado corresponde à necessidade real.' },
  { id: 'cp-65', moduleId: 'cpre-6', front: 'Quais atividades compõem a validação?', back: 'Revisão, verificação, checagem de consistência, correção e aprovação.' },
  { id: 'cp-66', moduleId: 'cpre-6', front: 'Qual a diferença entre verificar e validar um requisito?', back: 'Verificar checa se está bem escrito e consistente; validar checa se é o requisito certo.' },
  { id: 'cp-67', moduleId: 'cpre-6', front: 'O que é controle de mudanças?', back: 'O processo que avalia, decide e registra alterações em requisitos.' },
  { id: 'cp-68', moduleId: 'cpre-6', front: 'Por que mudanças precisam ser controladas?', back: 'Porque toda mudança impacta escopo, prazo, custo e outros requisitos.' },
  { id: 'cp-69', moduleId: 'cpre-6', front: 'O que é análise de impacto?', back: 'Identificar o que será afetado por uma alteração antes de aprová-la.' },
  { id: 'cp-70', moduleId: 'cpre-6', front: 'Para que serve a priorização de requisitos?', back: 'Definir o que é essencial e o que pode esperar, orientando a ordem de entrega.' },
  { id: 'cp-71', moduleId: 'cpre-6', front: 'O que é rastreabilidade de origem?', back: 'Saber quem pediu o requisito e por qual motivo de negócio.' },
  { id: 'cp-72', moduleId: 'cpre-6', front: 'O que são relacionamentos entre requisitos?', back: 'As ligações de dependência, derivação ou conflito entre eles.' },
  { id: 'cp-73', moduleId: 'cpre-6', front: 'Para que serve o histórico de alterações?', back: 'Explicar por que o requisito é o que é hoje — e evitar refazer discussões já resolvidas.' },
  { id: 'cp-74', moduleId: 'cpre-6', front: 'O que é versionamento de requisitos?', back: 'Manter identificadas as versões do documento e de cada requisito ao longo do tempo.' },
  { id: 'cp-75', moduleId: 'cpre-6', front: 'Quem aprova um requisito?', back: 'Os stakeholders responsáveis pela necessidade, formalmente registrados na validação.' },
  { id: 'cp-76', moduleId: 'cpre-6', front: 'O que fazer com um requisito inconsistente?', back: 'Levar o conflito à tona, decidir com os responsáveis e registrar a decisão.' },
  { id: 'cp-77', moduleId: 'cpre-6', front: 'Rastreabilidade ajuda na mudança como?', back: 'Mostra o que depende do requisito alterado, permitindo dimensionar o impacto.' },
  { id: 'cp-78', moduleId: 'cpre-6', front: 'Quando validar os requisitos?', back: 'Continuamente, ao longo do projeto — não apenas em um marco final.' },
  { id: 'cp-79', moduleId: 'cpre-6', front: 'O que acontece sem controle de dependências?', back: 'Mudanças aparentemente pequenas quebram partes não previstas do sistema.' },

  /* ---------- Fase 7 — Armadilhas (11) ---------- */
  { id: 'cp-80', moduleId: 'cpre-7', front: 'Requisito é solução técnica?', back: 'Não. Requisito é a necessidade; a solução técnica é a decisão de como atendê-la.' },
  { id: 'cp-81', moduleId: 'cpre-7', front: 'Exemplo de confusão entre requisito e solução', back: '"Armazenar em PostgreSQL" é solução; "manter o histórico por cinco anos" é requisito.' },
  { id: 'cp-82', moduleId: 'cpre-7', front: 'Toda necessidade vira requisito?', back: 'Não. Necessidades passam por análise, priorização e decisão.' },
  { id: 'cp-83', moduleId: 'cpre-7', front: 'Qual o efeito de requisitos ambíguos?', back: 'Geram falhas: cada pessoa implementa o que entendeu.' },
  { id: 'cp-84', moduleId: 'cpre-7', front: 'Requisito que não pode ser verificado é aceitável?', back: 'Não. Se não há como comprovar o atendimento, não há como concluir.' },
  { id: 'cp-85', moduleId: 'cpre-7', front: 'O que acontece com comunicação incorreta?', back: 'Impacta diretamente o projeto: o time constrói a coisa errada com competência.' },
  { id: 'cp-86', moduleId: 'cpre-7', front: 'Por que ler o enunciado com cuidado?', back: 'Porque a prova é interpretativa e as alternativas costumam ser todas plausíveis.' },
  { id: 'cp-87', moduleId: 'cpre-7', front: 'Qual o risco de responder pela prática de mercado?', back: 'O syllabus define os conceitos; hábitos comuns nem sempre correspondem a eles.' },
  { id: 'cp-88', moduleId: 'cpre-7', front: 'Como tratar termos em inglês na prova?', back: 'Estudar o vocabulário original: requirement, stakeholder, elicitation, traceability, validation.' },
  { id: 'cp-89', moduleId: 'cpre-7', front: 'O que é uma pegadinha conceitual típica?', back: 'Trocar validação por verificação, ou apresentar solução técnica como se fosse requisito.' },
  { id: 'cp-90', moduleId: 'cpre-7', front: 'Como decidir entre duas alternativas parecidas?', back: 'Voltando à definição do syllabus, não à experiência pessoal de projeto.' },

  /* ---------- Fase 8 — Material complementar (4) ---------- */
  { id: 'cp-91', moduleId: 'cpre-8', front: 'Qual o papel do material complementar?', back: 'Explicar o syllabus — nunca substituí-lo.' },
  { id: 'cp-92', moduleId: 'cpre-8', front: 'Como assistir às videoaulas?', back: 'Em ordem, com anotações, pausando para revisar tópicos complexos.' },
  { id: 'cp-93', moduleId: 'cpre-8', front: 'Por que fazer resumo do próprio entendimento?', back: 'Reformular com as próprias palavras revela o que ainda não foi compreendido.' },
  { id: 'cp-94', moduleId: 'cpre-8', front: 'Para que servem os exercícios comentados?', back: 'Mostrar o raciocínio por trás da alternativa correta.' },

  /* ---------- Fase 9 — Simulados (3) ---------- */
  { id: 'cp-95', moduleId: 'cpre-9', front: 'Quais metas a trilha recomenda nos simulados?', back: 'Alto índice de acertos, consistência, rapidez de interpretação e segurança na decisão.' },
  { id: 'cp-96', moduleId: 'cpre-9', front: 'O que fazer com os erros dos simulados?', back: 'Analisá-los e voltar ao ponto correspondente do syllabus.' },
  { id: 'cp-97', moduleId: 'cpre-9', front: 'Por que o inglês pesa na preparação?', back: 'A prova é aplicada em inglês e é interpretativa: vocabulário incerto custa questões.' },

  /* ---------- Fase 10 — Preparação final (3) ---------- */
  { id: 'cp-98', moduleId: 'cpre-10', front: 'O que revisar na preparação final?', back: 'Conceitos fundamentais, tipos de requisitos, elicitação, documentação, validação, gerenciamento e armadilhas.' },
  { id: 'cp-99', moduleId: 'cpre-10', front: 'Que cuidados tomar no dia da prova?', back: 'Ambiente silencioso, internet estável, navegador atualizado e boa gestão do tempo.' },
  { id: 'cp-100', moduleId: 'cpre-10', front: 'Qual o objetivo maior da trilha?', back: 'O entendimento real da engenharia de requisitos — a certificação é consequência.' }
];
