import { Flashcard } from '../trilha360';

/** 100 flash cards da trilha PSPO II, distribuídos pelos 12 módulos. */
export const PSPO2_FLASHCARDS: Flashcard[] = [
  /* ---------- Módulo 1 — Outcome × Output (9) ---------- */
  { id: 'pf-1', moduleId: 'pspo2-1', front: 'O que é output?', back: 'O que a equipe produz: features, itens de backlog entregues, código escrito.' },
  { id: 'pf-2', moduleId: 'pspo2-1', front: 'O que é outcome?', back: 'A mudança real gerada: um comportamento de cliente, um resultado de negócio, um problema resolvido.' },
  { id: 'pf-3', moduleId: 'pspo2-1', front: 'Quando um incremento é valioso o suficiente para ser lançado?', back: 'Quando entrega um único resultado novo ou melhorado — não quando entrega muitas features.' },
  { id: 'pf-4', moduleId: 'pspo2-1', front: 'Qual é o critério de valor de um incremento?', back: 'A probabilidade de aumentar a satisfação do cliente — não a velocidade, a especificação ou a data.' },
  { id: 'pf-5', moduleId: 'pspo2-1', front: 'Qual a evidência mais forte de que o produto agrega valor?', back: 'O uso real pelo cliente: frequência de uso, adoção e retenção.' },
  { id: 'pf-6', moduleId: 'pspo2-1', front: 'Itens obrigatórios entregues são métrica de quê?', back: 'De processo e output — não de valor.' },
  { id: 'pf-7', moduleId: 'pspo2-1', front: 'Muitos stakeholders pedindo features essenciais: o que fazer?', back: 'Lançar assim que for possível entregar ao menos um resultado real, mesmo sem todas as features.' },
  { id: 'pf-8', moduleId: 'pspo2-1', front: 'Por que não esperar entregar tudo?', back: 'Porque lançar antes reduz risco e antecipa aprendizado.' },
  { id: 'pf-9', moduleId: 'pspo2-1', front: 'Qual alternativa desconfiar sempre na prova?', back: 'A que oferece "entregar mais" quando existe opção ligada a outcome, validação ou redução de risco.' },

  /* ---------- Módulo 2 — Lacuna de satisfação (7) ---------- */
  { id: 'pf-10', moduleId: 'pspo2-2', front: 'O que é a lacuna de satisfação do usuário?', back: 'A diferença entre a experiência real de uso e o resultado que o usuário desejava alcançar.' },
  { id: 'pf-11', moduleId: 'pspo2-2', front: 'A lacuna de satisfação tem relação com tamanho de mercado?', back: 'Não. É puramente a distância entre expectativa e experiência.' },
  { id: 'pf-12', moduleId: 'pspo2-2', front: 'Uma feature importante quase não é usada. Qual o primeiro movimento?', back: 'Investigar: conversar com usuários, experimentar e analisar se ela resolve o problema — não decidir de imediato.' },
  { id: 'pf-13', moduleId: 'pspo2-2', front: 'Desativar uma funcionalidade pouco usada é decisão unilateral?', back: 'Não. Pode ser considerada, mas observando o feedback dos usuários.' },
  { id: 'pf-14', moduleId: 'pspo2-2', front: 'Que tipos de evidência a prova valoriza combinados?', back: 'Quantitativa (dados de uso), qualitativa (conversa com usuários) e validação (experimentos).' },
  { id: 'pf-15', moduleId: 'pspo2-2', front: 'Dados de uso surpreendentes são o quê?', back: 'Ponto de partida para investigação, não sentença final.' },
  { id: 'pf-16', moduleId: 'pspo2-2', front: 'Quanto maior a lacuna de satisfação...', back: '...menor a satisfação, independentemente do tamanho do mercado.' },

  /* ---------- Módulo 3 — EBM (11) ---------- */
  { id: 'pf-17', moduleId: 'pspo2-3', front: 'O que é o EBM?', back: 'O framework que guia decisões de investimento e estratégia de produto com base em evidência, não em opinião ou hierarquia.' },
  { id: 'pf-18', moduleId: 'pspo2-3', front: 'Quais são as quatro áreas de valor do EBM?', back: 'Current Value, Unrealized Value, Time-to-Market e Ability to Innovate.' },
  { id: 'pf-19', moduleId: 'pspo2-3', front: 'O que é Current Value?', back: 'Quanto o produto entrega de valor hoje — alta satisfação do cliente, por exemplo.' },
  { id: 'pf-20', moduleId: 'pspo2-3', front: 'O que é Unrealized Value?', back: 'Quanto valor ainda pode ser capturado no futuro — indicado, por exemplo, por baixa participação de mercado.' },
  { id: 'pf-21', moduleId: 'pspo2-3', front: 'O que é Time-to-Market?', back: 'A velocidade da organização em entregar novidade ao mercado.' },
  { id: 'pf-22', moduleId: 'pspo2-3', front: 'O que é Ability to Innovate?', back: 'A capacidade da organização de continuar entregando coisas novas e valiosas.' },
  { id: 'pf-23', moduleId: 'pspo2-3', front: 'Quando reduzir investimento em um produto?', back: 'Quando o Valor Não Realizado é muito pequeno — não há mais muito potencial a capturar.' },
  { id: 'pf-24', moduleId: 'pspo2-3', front: 'Valor Atual alto e Valor Não Realizado alto: o que fazer?', back: 'Melhorar o marketing — quem usa gosta, mas pouca gente conhece o produto.' },
  { id: 'pf-25', moduleId: 'pspo2-3', front: 'Por que não baixar o preço nesse caso?', back: 'Porque ataca a rentabilidade sem resolver o problema, que é de descoberta do produto.' },
  { id: 'pf-26', moduleId: 'pspo2-3', front: 'Concorrente menor lança mais rápido e ganha mercado. Onde agir?', back: 'Em Time-to-Market e Ability to Innovate — velocidade de lançamento e taxa de inovação.' },
  { id: 'pf-27', moduleId: 'pspo2-3', front: 'Um stakeholder não acredita nos dados de uso. O que fazer?', back: 'Continuar medindo e publicando com transparência, usando os dados para fundamentar decisões.' },

  /* ---------- Módulo 4 — Métricas e preço (9) ---------- */
  { id: 'pf-28', moduleId: 'pspo2-4', front: 'Quais métricas interessam a investidores e acionistas?', back: 'Receita por funcionário, participação de mercado, preço médio de venda e rentabilidade do produto.' },
  { id: 'pf-29', moduleId: 'pspo2-4', front: 'A velocidade dos developers interessa ao investidor?', back: 'Não. É métrica interna de capacidade, sem relação direta com valor de mercado ou retorno.' },
  { id: 'pf-30', moduleId: 'pspo2-4', front: 'Produtividade da equipe é sinônimo de valor gerado?', back: 'Não — é um erro comum confundir os dois.' },
  { id: 'pf-31', moduleId: 'pspo2-4', front: 'Quais fontes considerar em uma decisão de preço?', back: 'Satisfação do cliente, preços da concorrência, participação de mercado e necessidades não atendidas.' },
  { id: 'pf-32', moduleId: 'pspo2-4', front: 'Metas de lucro devem guiar o preço?', back: 'Não. São fonte interna e de pressão política, não evidência de mercado.' },
  { id: 'pf-33', moduleId: 'pspo2-4', front: 'Estratégia de vendas por canal é boa fonte para preço?', back: 'Não — é pressão interna; a decisão deve se ancorar em como mercado e cliente percebem o produto.' },
  { id: 'pf-34', moduleId: 'pspo2-4', front: 'Conflito entre vendas e financeiro sobre preço: qual o caminho?', back: 'Fugir dos dois lados da pressão interna e apontar para evidência externa de mercado e cliente.' },
  { id: 'pf-35', moduleId: 'pspo2-4', front: 'Quando a questão fala em perspectiva executiva, pense em...', back: '...métricas de mercado e financeiras, não em métricas de entrega da Equipe Scrum.' },
  { id: 'pf-36', moduleId: 'pspo2-4', front: 'Preço médio de venda serve para quê?', back: 'Comparar o produto com os concorrentes diretos sob a ótica de negócio.' },

  /* ---------- Módulo 5 — Product Backlog (11) ---------- */
  { id: 'pf-37', moduleId: 'pspo2-5', front: 'O Product Backlog é congelado em algum momento?', back: 'Nunca. Ele é emergente e evolui conforme mudam ambiente, mercado e entendimento.' },
  { id: 'pf-38', moduleId: 'pspo2-5', front: 'Quantos Product Backlogs existem por produto?', back: 'Um só — não por equipe, não por portfólio, não por programa.' },
  { id: 'pf-39', moduleId: 'pspo2-5', front: 'Várias equipes no mesmo produto: quantos backlogs?', back: 'Um, compartilhado por todas.' },
  { id: 'pf-40', moduleId: 'pspo2-5', front: 'O que envolve gerenciar o Product Backlog?', back: 'Ordenar itens, dividir itens grandes, reduzir dependências e revisar com as partes interessadas.' },
  { id: 'pf-41', moduleId: 'pspo2-5', front: 'Previsão detalhada de esforço é gestão de backlog?', back: 'Não — é estimativa, atividade mais ligada aos Developers.' },
  { id: 'pf-42', moduleId: 'pspo2-5', front: 'Onde está o "plano do projeto" no Scrum?', back: 'O próprio Product Backlog é o plano, atualizado continuamente.' },
  { id: 'pf-43', moduleId: 'pspo2-5', front: 'Quem ordena o Product Backlog?', back: 'O Product Owner.' },
  { id: 'pf-44', moduleId: 'pspo2-5', front: 'Quem pode sugerir itens para o backlog?', back: 'Qualquer pessoa. O que é exclusivo do PO é a ordenação e a responsabilidade final.' },
  { id: 'pf-45', moduleId: 'pspo2-5', front: 'Todo item precisa ser história de usuário?', back: 'Não — é apenas um formato possível, não exigência do Scrum.' },
  { id: 'pf-46', moduleId: 'pspo2-5', front: 'Todos os itens da próxima Sprint precisam estar identificados antes dela começar?', back: 'Não — isso contraria a natureza emergente do backlog.' },
  { id: 'pf-47', moduleId: 'pspo2-5', front: 'O backlog dispensa a conversa entre Developers e stakeholders?', back: 'Não. O contato direto é incentivado.' },

  /* ---------- Módulo 6 — Product Goal (6) ---------- */
  { id: 'pf-48', moduleId: 'pspo2-6', front: 'O que é o Product Goal?', back: 'O elemento que conecta as Sprints a um propósito de longo prazo, dentro do Product Backlog.' },
  { id: 'pf-49', moduleId: 'pspo2-6', front: 'O Product Goal é opcional?', back: 'Não. Ele faz parte do Product Backlog.' },
  { id: 'pf-50', moduleId: 'pspo2-6', front: 'O Product Goal serve para prever o fim do backlog?', back: 'Não — isso é forecasting, outro conceito.' },
  { id: 'pf-51', moduleId: 'pspo2-6', front: 'Quem mantém e comunica o Product Goal?', back: 'O Product Owner.' },
  { id: 'pf-52', moduleId: 'pspo2-6', front: 'Que benefício o Product Goal traz à Sprint Review?', back: 'Facilita a inspeção do progresso incremental.' },
  { id: 'pf-53', moduleId: 'pspo2-6', front: 'Qual a sensação que um bom Product Goal cria nas Sprints?', back: 'A de fazerem parte de uma jornada, e não de trabalhos isolados.' },

  /* ---------- Módulo 7 — Eventos e artefatos (9) ---------- */
  { id: 'pf-54', moduleId: 'pspo2-7', front: 'O que a Sprint Planning produz?', back: 'Entre outras coisas, o Sprint Goal — a meta e direção da Sprint.' },
  { id: 'pf-55', moduleId: 'pspo2-7', front: 'Qual a diferença entre Sprint Goal e Sprint Backlog?', back: 'O Sprint Goal é a meta; o Sprint Backlog é o "como" o trabalho será feito.' },
  { id: 'pf-56', moduleId: 'pspo2-7', front: 'O Sprint Backlog é um contrato?', back: 'Não. É uma previsão do que os Developers acreditam concluir na Sprint.' },
  { id: 'pf-57', moduleId: 'pspo2-7', front: 'Qual é o foco da Daily Scrum?', back: 'O trabalho que será feito hoje para atingir o Sprint Goal.' },
  { id: 'pf-58', moduleId: 'pspo2-7', front: 'A Daily Scrum é relatório de status?', back: 'Não. É planejamento voltado ao futuro próximo.' },
  { id: 'pf-59', moduleId: 'pspo2-7', front: 'Qual o timebox da Sprint Review?', back: 'Proporcional à Sprint: até 4 horas para uma Sprint de 4 semanas, menos para Sprints menores.' },
  { id: 'pf-60', moduleId: 'pspo2-7', front: 'Quanto dura a Daily Scrum?', back: '15 minutos.' },
  { id: 'pf-61', moduleId: 'pspo2-7', front: 'O que um gráfico de burndown rastreia?', back: 'O trabalho restante ao longo do tempo.' },
  { id: 'pf-62', moduleId: 'pspo2-7', front: 'O burndown mostra valor de negócio entregue?', back: 'Não — isso seria um burnup de valor.' },

  /* ---------- Módulo 8 — Definição de Pronto (7) ---------- */
  { id: 'pf-63', moduleId: 'pspo2-8', front: 'O que acontece com itens que não atingem a Definição de Pronto?', back: 'Voltam ao Product Backlog — não ficam "meio prontos".' },
  { id: 'pf-64', moduleId: 'pspo2-8', front: 'Um incremento fora da Definição de Pronto pode ser lançado?', back: 'Não. Não está pronto para uso, ponto final.' },
  { id: 'pf-65', moduleId: 'pspo2-8', front: 'Qual o efeito sobre a transparência?', back: 'A indicação de progresso no Product Backlog deixa de ser transparente.' },
  { id: 'pf-66', moduleId: 'pspo2-8', front: 'O que pode acontecer com a próxima Sprint?', back: 'Pode precisar ser interrompida se os problemas de qualidade forem descobertos depois.' },
  { id: 'pf-67', moduleId: 'pspo2-8', front: 'O PO deve "aceitar" formalmente o trabalho da Sprint?', back: 'Não. Não existe gate de aprovação unilateral item a item no Scrum.' },
  { id: 'pf-68', moduleId: 'pspo2-8', front: 'Como a qualidade é garantida?', back: 'Continuamente, pela Definição de Pronto, com inspeção colaborativa na Sprint Review.' },
  { id: 'pf-69', moduleId: 'pspo2-8', front: 'Como resumir a qualidade no Scrum?', back: 'É binária e coletiva: atende à Definição de Pronto ou não deve ser lançado.' },

  /* ---------- Módulo 9 — Papel do PO (8) ---------- */
  { id: 'pf-70', moduleId: 'pspo2-9', front: 'Quais são os focos reais do trabalho do PO?', back: 'Comunicar progresso e estratégia, colaborar para identificar requisitos, manter o Product Goal e ordenar o backlog.' },
  { id: 'pf-71', moduleId: 'pspo2-9', front: 'Escrever todas as histórias de usuário é foco do PO?', back: 'Não — é tarefa tática, que pode ser feita em colaboração com os Developers.' },
  { id: 'pf-72', moduleId: 'pspo2-9', front: 'Estar sempre disponível para os Developers é o foco do papel?', back: 'Não. É atividade legítima, mas não define o papel.' },
  { id: 'pf-73', moduleId: 'pspo2-9', front: 'PO sobrecarregado com várias equipes: qual a saída?', back: 'Comunicar um objetivo claro e delegar atividades aos Developers, mantendo um PO e um backlog.' },
  { id: 'pf-74', moduleId: 'pspo2-9', front: 'Criar sub-POs por equipe resolve a sobrecarga?', back: 'Não. Fragmenta uma responsabilidade que deve permanecer única.' },
  { id: 'pf-75', moduleId: 'pspo2-9', front: 'Um PMO pode assumir a coordenação nesse caso?', back: 'Não. Também fragmenta a responsabilidade do PO.' },
  { id: 'pf-76', moduleId: 'pspo2-9', front: 'Quem pode interagir com as partes interessadas?', back: 'Qualquer membro da Equipe Scrum: PO, Developers e Scrum Master.' },
  { id: 'pf-77', moduleId: 'pspo2-9', front: 'O PO precisa ser intermediário único dos stakeholders?', back: 'Não. A colaboração direta entre Developers e stakeholders é desejável.' },

  /* ---------- Módulo 10 — Stakeholders e decisão (8) ---------- */
  { id: 'pf-78', moduleId: 'pspo2-10', front: 'O que é um quadro de delegação?', back: 'Um instrumento que deixa claro quem decide o quê, criado e compartilhado com a equipe.' },
  { id: 'pf-79', moduleId: 'pspo2-10', front: 'Como usar evidência quando as decisões travam?', back: 'Demonstrando com dados quanto tempo elas levam e o impacto disso na entrega de valor.' },
  { id: 'pf-80', moduleId: 'pspo2-10', front: 'Qual o papel do Scrum Master nesse cenário?', back: 'Ajudar a elevar a maturidade da organização em gestão de produto.' },
  { id: 'pf-81', moduleId: 'pspo2-10', front: 'Deixar todos decidindo sem dono claro resolve?', back: 'Não — gera caos.' },
  { id: 'pf-82', moduleId: 'pspo2-10', front: 'O PO deve virar autocrático para acelerar?', back: 'Não — gera ressentimento e perda de informação.' },
  { id: 'pf-83', moduleId: 'pspo2-10', front: 'Stakeholder influente discorda dos dados: o que fazer?', back: 'Reconhecer a opinião sem ceder à pressão e validar com um experimento pequeno e barato, junto com ele.' },
  { id: 'pf-84', moduleId: 'pspo2-10', front: 'Resolver por votação entre opções não testadas é correto?', back: 'Não. A decisão deve ser ancorada em evidência e experimentação.' },
  { id: 'pf-85', moduleId: 'pspo2-10', front: 'Adicionar uma feature só para agradar um stakeholder?', back: 'Nunca — é ceder à pressão, não decisão baseada em evidência.' },

  /* ---------- Módulo 11 — Visão e estratégia (7) ---------- */
  { id: 'pf-86', moduleId: 'pspo2-11', front: 'O que uma boa visão e estratégia de produto cobre?', back: 'O que é valor e como medi-lo, quem usa e o que quer, como o produto se compara e como será usado.' },
  { id: 'pf-87', moduleId: 'pspo2-11', front: 'Para que servem personas?', back: 'Entender necessidades, formular hipóteses de valor, avaliar potencial de mercado e descobrir gatilhos de adoção.' },
  { id: 'pf-88', moduleId: 'pspo2-11', front: 'O que uma boa Visão de Produto expressa?', back: 'O propósito do produto: o valor que ele deve entregar e a quem.' },
  { id: 'pf-89', moduleId: 'pspo2-11', front: 'Como visão e valor se alinham?', back: 'De forma iterativa e incremental, pelo refinamento contínuo do Product Backlog.' },
  { id: 'pf-90', moduleId: 'pspo2-11', front: 'O que impulsiona o valor do produto?', back: 'A satisfação e a fidelização do cliente, a reputação da marca e a longevidade do negócio.' },
  { id: 'pf-91', moduleId: 'pspo2-11', front: 'Como a estratégia de negócio se relaciona com a visão?', back: 'A missão e a visão da empresa influenciam a visão de cada produto, e a estratégia é adaptada com o feedback dos incrementos.' },
  { id: 'pf-92', moduleId: 'pspo2-11', front: 'A comparação com concorrentes entra na estratégia?', back: 'Sim — é um dos elementos que a visão e a estratégia precisam cobrir.' },

  /* ---------- Módulo 12 — Dependências e lançamentos (8) ---------- */
  { id: 'pf-93', moduleId: 'pspo2-12', front: 'Produtos muito interdependentes: qual a resposta esperada?', back: 'Desenvolvê-los o mais independentes possível, cada um com seu plano de lançamento, com coordenação entre eles.' },
  { id: 'pf-94', moduleId: 'pspo2-12', front: 'Criar um plano centralizado resolve dependências?', back: 'Não. Adiciona camada de gestão em vez de reduzir o acoplamento na origem.' },
  { id: 'pf-95', moduleId: 'pspo2-12', front: 'Qual o princípio geral sobre dependências?', back: 'Reduzi-las na origem é preferível a gerenciá-las com mais burocracia.' },
  { id: 'pf-96', moduleId: 'pspo2-12', front: 'Quais as vantagens de lançar com frequência?', back: 'Inspecionar e adaptar mais vezes, entender melhor o cliente, corrigir erros mais rápido e correr menos risco.' },
  { id: 'pf-97', moduleId: 'pspo2-12', front: 'Quanto maior a incerteza sobre o cliente...', back: '...menor deve ser o tamanho de cada liberação, validando antes de investir pesado.' },
  { id: 'pf-98', moduleId: 'pspo2-12', front: 'Qual o fio condutor sobre evidência?', back: 'Evidência acima de opinião e hierarquia: decisões se apoiam em dados de mercado e cliente e, quando possível, em experimentos.' },
  { id: 'pf-99', moduleId: 'pspo2-12', front: 'Qual o fio condutor sobre responsabilidade?', back: 'Um PO e um Product Backlog por produto: a responsabilidade não se fragmenta, só a execução tática é delegada.' },
  { id: 'pf-100', moduleId: 'pspo2-12', front: 'Qual o fio condutor sobre diagnóstico?', back: 'Diagnostique antes de agir: Valor Atual e Valor Não Realizado contam histórias diferentes e pedem ações diferentes.' }
];
