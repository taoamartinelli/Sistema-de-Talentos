import { Flashcard } from '../trilha360';

/** 100 flash cards da trilha CTFL, distribuídos pelas 10 fases. */
export const CTFL_FLASHCARDS: Flashcard[] = [
  /* ---------- Fase 1 — Fundamentos (14) ---------- */
  { id: 'ct-1', moduleId: 'ctfl-1', front: 'O que é teste de software?', back: 'O conjunto de atividades que avalia se o software atende ao esperado e revela defeitos.' },
  { id: 'ct-2', moduleId: 'ctfl-1', front: 'Qual a diferença entre verificação e validação?', back: 'Verificação: construímos o produto corretamente? Validação: construímos o produto certo?' },
  { id: 'ct-3', moduleId: 'ctfl-1', front: 'O que é um erro?', back: 'A ação humana que produz um resultado incorreto.' },
  { id: 'ct-4', moduleId: 'ctfl-1', front: 'O que é um defeito?', back: 'A imperfeição no artefato, decorrente de um erro humano.' },
  { id: 'ct-5', moduleId: 'ctfl-1', front: 'O que é uma falha?', back: 'O comportamento observado quando o defeito é executado.' },
  { id: 'ct-6', moduleId: 'ctfl-1', front: 'Qual a sequência entre erro, defeito e falha?', back: 'O erro gera o defeito; o defeito, quando executado, provoca a falha.' },
  { id: 'ct-7', moduleId: 'ctfl-1', front: 'Primeiro princípio: o teste mostra o quê?', back: 'A presença de defeitos — nunca prova a ausência deles.' },
  { id: 'ct-8', moduleId: 'ctfl-1', front: 'Por que testes exaustivos são impossíveis?', back: 'O número de combinações de entradas e caminhos é grande demais — é preciso priorizar por risco.' },
  { id: 'ct-9', moduleId: 'ctfl-1', front: 'O que diz o princípio dos testes antecipados?', back: 'Testar cedo economiza tempo e dinheiro, porque o defeito custa menos quanto antes for encontrado.' },
  { id: 'ct-10', moduleId: 'ctfl-1', front: 'O que é o agrupamento de defeitos?', back: 'Poucos módulos costumam concentrar a maioria dos defeitos.' },
  { id: 'ct-11', moduleId: 'ctfl-1', front: 'O que é a degradação (paradoxo) dos testes?', back: 'Repetir sempre os mesmos testes faz com que eles deixem de encontrar novos defeitos.' },
  { id: 'ct-12', moduleId: 'ctfl-1', front: 'O que significa o teste depender do contexto?', back: 'Testar um sistema crítico é diferente de testar um site institucional — a abordagem muda.' },
  { id: 'ct-13', moduleId: 'ctfl-1', front: 'O que é a falácia da ausência de defeitos?', back: 'Um sistema sem defeitos conhecidos ainda pode ser inútil se não atender à necessidade do usuário.' },
  { id: 'ct-14', moduleId: 'ctfl-1', front: 'Quantos são os princípios fundamentais de teste?', back: 'Sete.' },

  /* ---------- Fase 2 — Processo de teste (12) ---------- */
  { id: 'ct-15', moduleId: 'ctfl-2', front: 'Quais são as atividades do processo de teste?', back: 'Planejamento, monitoramento e controle, análise, modelagem, implementação, execução e encerramento.' },
  { id: 'ct-16', moduleId: 'ctfl-2', front: 'O que acontece na análise de testes?', back: 'Identifica-se o que testar, a partir da base de teste, definindo as condições de teste.' },
  { id: 'ct-17', moduleId: 'ctfl-2', front: 'O que acontece na modelagem (design)?', back: 'As condições de teste viram casos de teste concretos.' },
  { id: 'ct-18', moduleId: 'ctfl-2', front: 'O que acontece na implementação?', back: 'Prepara-se tudo o que é preciso para executar: dados, ambiente, scripts e procedimentos.' },
  { id: 'ct-19', moduleId: 'ctfl-2', front: 'O que acontece no encerramento?', back: 'Consolidam-se resultados, lições aprendidas e o testware para uso futuro.' },
  { id: 'ct-20', moduleId: 'ctfl-2', front: 'O que é testware?', back: 'O conjunto de produtos gerados pelas atividades de teste.' },
  { id: 'ct-21', moduleId: 'ctfl-2', front: 'Cite exemplos de testware.', back: 'Casos de teste, scripts, dados de teste, relatórios, evidências e matriz de rastreabilidade.' },
  { id: 'ct-22', moduleId: 'ctfl-2', front: 'Para que serve a rastreabilidade?', back: 'Ligar requisitos, casos de teste, resultados e defeitos, mostrando o que foi coberto.' },
  { id: 'ct-23', moduleId: 'ctfl-2', front: 'O que é um caso de teste?', back: 'Um conjunto de entradas, pré-condições e resultados esperados para verificar uma condição.' },
  { id: 'ct-24', moduleId: 'ctfl-2', front: 'Qual o papel do testador?', back: 'Planejar, projetar, executar e reportar testes, colaborando com o time ao longo do ciclo.' },
  { id: 'ct-25', moduleId: 'ctfl-2', front: 'Qual o papel do gerenciamento de testes?', back: 'Planejar, monitorar e controlar as atividades, cuidando de recursos, riscos e comunicação.' },
  { id: 'ct-26', moduleId: 'ctfl-2', front: 'Por que a colaboração entre equipes importa?', back: 'Porque qualidade não é responsabilidade isolada do time de testes.' },

  /* ---------- Fase 3 — SDLC (10) ---------- */
  { id: 'ct-27', moduleId: 'ctfl-3', front: 'O que é SDLC?', back: 'O ciclo de vida de desenvolvimento de software: as fases desde a concepção até a manutenção.' },
  { id: 'ct-28', moduleId: 'ctfl-3', front: 'O que caracteriza um modelo sequencial?', back: 'Cada fase termina antes de a próxima começar — como no modelo em cascata.' },
  { id: 'ct-29', moduleId: 'ctfl-3', front: 'O que caracteriza um modelo iterativo?', back: 'O produto é refinado em ciclos sucessivos, com feedback a cada iteração.' },
  { id: 'ct-30', moduleId: 'ctfl-3', front: 'O que caracteriza um modelo incremental?', back: 'O produto é entregue em partes que somam funcionalidade ao longo do tempo.' },
  { id: 'ct-31', moduleId: 'ctfl-3', front: 'O que é shift-left?', back: 'Antecipar as atividades de teste para o início do ciclo, testando e revisando cedo.' },
  { id: 'ct-32', moduleId: 'ctfl-3', front: 'O que é integração contínua?', back: 'Integrar e verificar o código com frequência, detectando problemas o quanto antes.' },
  { id: 'ct-33', moduleId: 'ctfl-3', front: 'O que é entrega contínua?', back: 'Manter o software sempre em condição de ser liberado, com o pipeline automatizado.' },
  { id: 'ct-34', moduleId: 'ctfl-3', front: 'Qual a contribuição do teste em times ágeis?', back: 'Feedback rápido e qualidade contínua, participando desde os requisitos.' },
  { id: 'ct-35', moduleId: 'ctfl-3', front: 'Para que servem as revisões?', back: 'Encontrar defeitos em documentos e artefatos antes de o código existir.' },
  { id: 'ct-36', moduleId: 'ctfl-3', front: 'O que o DevOps traz para o teste?', back: 'Aproxima desenvolvimento e operação, com automação e feedback do ambiente real.' },

  /* ---------- Fase 4 — Níveis e tipos (12) ---------- */
  { id: 'ct-37', moduleId: 'ctfl-4', front: 'O que é teste de componente?', back: 'O teste de partes isoladas do software — também chamado de teste de unidade.' },
  { id: 'ct-38', moduleId: 'ctfl-4', front: 'O que é teste de integração?', back: 'Verifica a comunicação e as interfaces entre componentes ou sistemas.' },
  { id: 'ct-39', moduleId: 'ctfl-4', front: 'O que é teste de sistema?', back: 'Verifica o comportamento do sistema como um todo, do ponto de vista do produto.' },
  { id: 'ct-40', moduleId: 'ctfl-4', front: 'O que é teste de aceite?', back: 'Verifica se o sistema atende às necessidades do usuário e do negócio.' },
  { id: 'ct-41', moduleId: 'ctfl-4', front: 'Quais são os quatro níveis de teste?', back: 'Componente, integração, sistema e aceite.' },
  { id: 'ct-42', moduleId: 'ctfl-4', front: 'O que é teste funcional?', back: 'Verifica o que o sistema faz — as funções que ele deve cumprir.' },
  { id: 'ct-43', moduleId: 'ctfl-4', front: 'O que é teste não funcional?', back: 'Verifica como o sistema se comporta: desempenho, usabilidade, segurança, confiabilidade.' },
  { id: 'ct-44', moduleId: 'ctfl-4', front: 'O que é teste caixa-preta?', back: 'Baseado na especificação, sem considerar a estrutura interna do software.' },
  { id: 'ct-45', moduleId: 'ctfl-4', front: 'O que é teste caixa-branca?', back: 'Baseado na estrutura interna: código, fluxos e decisões.' },
  { id: 'ct-46', moduleId: 'ctfl-4', front: 'O que é teste de confirmação?', back: 'Reexecutar o caso que falhou para confirmar que a correção funcionou.' },
  { id: 'ct-47', moduleId: 'ctfl-4', front: 'O que é teste de regressão?', back: 'Verificar se uma mudança não quebrou o que já funcionava.' },
  { id: 'ct-48', moduleId: 'ctfl-4', front: 'Qual a diferença entre confirmação e regressão?', back: 'Confirmação valida a correção específica; regressão protege o restante do sistema.' },

  /* ---------- Fase 5 — Técnicas (14) ---------- */
  { id: 'ct-49', moduleId: 'ctfl-5', front: 'Quais são as três famílias de técnicas?', back: 'Caixa-preta, caixa-branca e baseadas em experiência.' },
  { id: 'ct-50', moduleId: 'ctfl-5', front: 'O que é particionamento de equivalência?', back: 'Dividir as entradas em classes cujo comportamento esperado é o mesmo, testando uma de cada.' },
  { id: 'ct-51', moduleId: 'ctfl-5', front: 'O que é análise de valor limite?', back: 'Testar as fronteiras das partições, onde os defeitos se concentram.' },
  { id: 'ct-52', moduleId: 'ctfl-5', front: 'Por que testar os limites?', back: 'Porque erros de comparação e de intervalo aparecem justamente nas bordas.' },
  { id: 'ct-53', moduleId: 'ctfl-5', front: 'O que é tabela de decisão?', back: 'Uma técnica que cobre combinações de condições e as ações resultantes.' },
  { id: 'ct-54', moduleId: 'ctfl-5', front: 'Quando usar tabela de decisão?', back: 'Quando o comportamento depende de várias regras de negócio combinadas.' },
  { id: 'ct-55', moduleId: 'ctfl-5', front: 'O que é teste de transição de estados?', back: 'Cobrir estados, eventos e transições — válidas e inválidas — de um sistema.' },
  { id: 'ct-56', moduleId: 'ctfl-5', front: 'Quando usar transição de estados?', back: 'Quando o sistema se comporta de forma diferente conforme o estado em que está.' },
  { id: 'ct-57', moduleId: 'ctfl-5', front: 'O que é cobertura de código?', back: 'A medida de quanto do código foi exercitado pelos testes.' },
  { id: 'ct-58', moduleId: 'ctfl-5', front: 'O que é cobertura de decisão?', back: 'A medida de quantos resultados possíveis das decisões foram exercitados.' },
  { id: 'ct-59', moduleId: 'ctfl-5', front: 'O que é teste exploratório?', back: 'Projetar, executar e aprender ao mesmo tempo, guiado pela experiência do testador.' },
  { id: 'ct-60', moduleId: 'ctfl-5', front: 'Para que serve um checklist de teste?', back: 'Guiar a cobertura de pontos importantes sem prescrever passo a passo.' },
  { id: 'ct-61', moduleId: 'ctfl-5', front: 'Quando as técnicas baseadas em experiência brilham?', back: 'Quando a especificação é incompleta ou o tempo é curto — complementando as demais.' },
  { id: 'ct-62', moduleId: 'ctfl-5', front: 'Técnicas caixa-preta servem só para teste de sistema?', back: 'Não — são aplicáveis em qualquer nível de teste.' },

  /* ---------- Fase 6 — Gestão (14) ---------- */
  { id: 'ct-63', moduleId: 'ctfl-6', front: 'O que são critérios de entrada?', back: 'As condições que precisam existir para que o teste possa começar.' },
  { id: 'ct-64', moduleId: 'ctfl-6', front: 'O que são critérios de saída?', back: 'As condições que definem quando o teste pode ser considerado concluído.' },
  { id: 'ct-65', moduleId: 'ctfl-6', front: 'O que acontece sem critérios de saída?', back: 'O encerramento vira decisão de prazo, não de qualidade.' },
  { id: 'ct-66', moduleId: 'ctfl-6', front: 'O que é risco de produto?', back: 'O risco relacionado à qualidade daquilo que será entregue.' },
  { id: 'ct-67', moduleId: 'ctfl-6', front: 'O que é risco de projeto?', back: 'O risco relacionado à execução: prazo, recursos, dependências.' },
  { id: 'ct-68', moduleId: 'ctfl-6', front: 'Como se avalia um risco?', back: 'Pela combinação de probabilidade e impacto.' },
  { id: 'ct-69', moduleId: 'ctfl-6', front: 'Como o risco orienta o teste?', back: 'Áreas de maior risco recebem testes mais profundos e prioridade maior.' },
  { id: 'ct-70', moduleId: 'ctfl-6', front: 'O que é mitigação de risco?', back: 'A ação que reduz a probabilidade ou o impacto do risco.' },
  { id: 'ct-71', moduleId: 'ctfl-6', front: 'O que um bom registro de defeito deve conter?', back: 'O que aconteceu, o esperado, como reproduzir, o ambiente e as evidências.' },
  { id: 'ct-72', moduleId: 'ctfl-6', front: 'O que é o ciclo de vida do defeito?', back: 'Os estados por que ele passa: aberto, em análise, corrigido, verificado, fechado ou rejeitado.' },
  { id: 'ct-73', moduleId: 'ctfl-6', front: 'Qual a diferença entre prioridade e severidade?', back: 'Severidade é o impacto técnico da falha; prioridade é a urgência da correção para o negócio.' },
  { id: 'ct-74', moduleId: 'ctfl-6', front: 'Para que serve o monitoramento dos testes?', back: 'Comparar o progresso real com o planejado e permitir ajustes.' },
  { id: 'ct-75', moduleId: 'ctfl-6', front: 'O que é controle de testes?', back: 'A ação corretiva tomada a partir do que o monitoramento revelou.' },
  { id: 'ct-76', moduleId: 'ctfl-6', front: 'Por que priorizar os testes?', back: 'Porque testar tudo é impossível — a prioridade concentra esforço onde o risco é maior.' },

  /* ---------- Fase 7 — Ferramentas e automação (10) ---------- */
  { id: 'ct-77', moduleId: 'ctfl-7', front: 'Cite categorias de ferramentas de teste.', back: 'Gestão de testes, gestão de defeitos, execução, automação e ferramentas de apoio.' },
  { id: 'ct-78', moduleId: 'ctfl-7', front: 'Quais os benefícios da automação?', back: 'Repetição confiável, regressão mais rápida e liberação de tempo do testador.' },
  { id: 'ct-79', moduleId: 'ctfl-7', front: 'Qual o principal custo escondido da automação?', back: 'A manutenção dos scripts quando o sistema muda.' },
  { id: 'ct-80', moduleId: 'ctfl-7', front: 'Automatizar um teste ruim resolve?', back: 'Não — apenas repete o erro mais rápido.' },
  { id: 'ct-81', moduleId: 'ctfl-7', front: 'A automação substitui o testador?', back: 'Não. Ela não substitui o pensamento analítico nem o teste exploratório.' },
  { id: 'ct-82', moduleId: 'ctfl-7', front: 'Onde a automação rende mais?', back: 'Em testes repetitivos e estáveis, especialmente a regressão funcional.' },
  { id: 'ct-83', moduleId: 'ctfl-7', front: 'O que é automação de regressão?', back: 'Automatizar o conjunto de testes que protege o que já funciona.' },
  { id: 'ct-84', moduleId: 'ctfl-7', front: 'Quais são riscos comuns da automação?', back: 'Expectativas irreais, custo de manutenção e dependência de ferramenta.' },
  { id: 'ct-85', moduleId: 'ctfl-7', front: 'Ferramenta de gestão de testes serve para quê?', back: 'Organizar casos, execuções, resultados e rastreabilidade.' },
  { id: 'ct-86', moduleId: 'ctfl-7', front: 'Ferramenta de gestão de defeitos serve para quê?', back: 'Registrar, acompanhar e comunicar o ciclo de vida dos defeitos.' },

  /* ---------- Fase 8 — Syllabus e material (6) ---------- */
  { id: 'ct-87', moduleId: 'ctfl-8', front: 'Qual é a referência oficial da prova?', back: 'O syllabus oficial CTFL versão 4.0.' },
  { id: 'ct-88', moduleId: 'ctfl-8', front: 'Quem mantém a certificação CTFL?', back: 'O ISTQB, representado no Brasil pelo BSTQB.' },
  { id: 'ct-89', moduleId: 'ctfl-8', front: 'Como o material complementar deve ser usado?', back: 'Para explicar o syllabus — nunca para substituí-lo.' },
  { id: 'ct-90', moduleId: 'ctfl-8', front: 'Qual o valor de construir resumos próprios?', back: 'Obriga a reformular o conceito com as próprias palavras, o que revela o que não foi entendido.' },
  { id: 'ct-91', moduleId: 'ctfl-8', front: 'Quais são os materiais obrigatórios da trilha?', back: 'Syllabus oficial, conteúdos da trilha, simulados e exercícios complementares.' },
  { id: 'ct-92', moduleId: 'ctfl-8', front: 'Como assistir aos vídeos?', back: 'Em ordem, com anotações e revisão dos tópicos complexos.' },

  /* ---------- Fase 9 — Simulados (5) ---------- */
  { id: 'ct-93', moduleId: 'ctfl-9', front: 'O que a prova cobra, sobretudo?', back: 'Interpretação conceitual — não memorização de frases.' },
  { id: 'ct-94', moduleId: 'ctfl-9', front: 'O que fazer com os erros dos simulados?', back: 'Analisá-los e voltar ao ponto correspondente do syllabus.' },
  { id: 'ct-95', moduleId: 'ctfl-9', front: 'Qual meta a trilha recomenda nos simulados?', back: 'Consistência nos resultados, segurança nos fundamentos e boa gestão de tempo.' },
  { id: 'ct-96', moduleId: 'ctfl-9', front: 'Para que servem as questões comentadas?', back: 'Entender por que a alternativa é a correta, e não apenas qual é.' },
  { id: 'ct-97', moduleId: 'ctfl-9', front: 'Por que as alternativas parecem todas certas?', back: 'Porque a prova testa nuances conceituais — a diferença está no detalhe do conceito.' },

  /* ---------- Fase 10 — Preparação final (3) ---------- */
  { id: 'ct-98', moduleId: 'ctfl-10', front: 'O que revisar na preparação final?', back: 'Fundamentos, processo, técnicas, níveis, tipos, gestão de defeitos e de riscos.' },
  { id: 'ct-99', moduleId: 'ctfl-10', front: 'Que cuidados tomar no dia da prova?', back: 'Ambiente silencioso, internet estável, organização do tempo e leitura cuidadosa.' },
  { id: 'ct-100', moduleId: 'ctfl-10', front: 'Quando o participante conclui a trilha?', back: 'Ao finalizar as fases, estudar o syllabus, fazer os simulados e demonstrar entendimento dos conceitos.' }
];
