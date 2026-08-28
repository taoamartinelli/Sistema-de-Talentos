import { Module } from '../trilha360';
import { TrackOverview } from '../../components/TrackPage';

/**
 * Trilha de Automação — "Dominando a Arte de Conversar com a Inteligência Artificial".
 * Conteúdo do plano de ensino oficial.
 */

export const AUTOMACAO_OVERVIEW: TrackOverview = {
  title: 'Aprenda a dar contexto para a IA',
  intro:
    'Não é sobre saber programar ou usar ferramentas, mas sobre saber dar o contexto certo. A trilha ensina a pensar de forma crítica e a transformar a IA em um copiloto inteligente para projetos, ideias e desafios — sem escrever uma única linha de código.',
  pillars: [
    'Entender como a qualidade da pergunta muda a resposta da IA',
    'Refinamento progressivo: construir resultados complexos passo a passo',
    'Um fluxo claro para conduzir qualquer projeto com IA',
    'Usar a IA para escolher as ferramentas certas',
    'Criar agentes de IA e automações que trabalham sozinhos',
    'Transformar a IA em qualquer especialista com personas'
  ],
  audience: [
    'Qualquer pessoa que queira usar IA como ferramenta de trabalho',
    'Quem quer criar sem depender de programação',
    'Quem já usa IA, mas não obtém os resultados esperados'
  ],
  prerequisite:
    'Não é necessário conhecimento técnico. A trilha parte do zero e avança até a criação de agentes autônomos.',
  completion: [
    'Dar contexto claro e obter respostas precisas da IA',
    'Refinar uma ideia bruta até um resultado concreto',
    'Seguir um fluxo estruturado do início ao fim de um projeto',
    'Escolher ferramentas com apoio da IA, a partir das suas restrições',
    'Especificar um agente de IA com papel, processo, regras e dados',
    'Usar personas profissionais para obter respostas de nível sênior'
  ]
};

export const AUTOMACAO_MODULES: Module[] = [
  {
    id: 'auto-1',
    number: 1,
    title: 'Olá, Mundo da IA!',
    objective:
      'Entender que a IA não é um bicho de sete cabeças e que a qualidade da sua conversa com ela muda tudo.',
    topics: [
      {
        title: 'A metáfora do filhote',
        text: 'A IA é como um filhote de cachorro muito inteligente: ele quer te agradar, mas você precisa ensinar o que quer com paciência e clareza.'
      },
      {
        title: 'A grande ideia',
        text: 'Imagine que a IA é um gênio da lâmpada. Se você só disser "quero um desejo", ele não saberá o que fazer. Mas se explicar "quero um castelo de areia, com três torres e uma ponte", ele constrói exatamente o que você imaginou.'
      },
      {
        title: 'Atividade 1 — A conversa inicial',
        text: 'Abra uma ferramenta de IA e faça perguntas abertas e vagas. Observe as respostas.',
        items: ['Exemplo: "Me fale sobre carros."']
      },
      {
        title: 'Atividade 2 — Adicionando uma camada de contexto',
        text: 'Refaça a pergunta acrescentando detalhes e compare o resultado.',
        items: ['Exemplo: "Me fale sobre carros vermelhos esportivos da década de 90."']
      },
      {
        title: 'Atividade 3 — O desafio do sentimento',
        text: 'Peça algo subjetivo e veja como a IA lida com isso. Depois, dê critérios para ajudá-la.',
        items: [
          'Exemplo 1: "Escreva um poema triste."',
          'Exemplo 2: "Escreva um poema triste sobre uma folha caindo de uma árvore no outono, em um dia chuvoso."'
        ]
      }
    ],
    outcome:
      'A IA não adivinha o que você quer: ela responde com base no que você fornece. Quanto melhor a pergunta, melhor a resposta.'
  },
  {
    id: 'auto-2',
    number: 2,
    title: 'A Arte de Dar Contexto',
    objective:
      'Aprender a técnica de alimentar a IA com informações aos poucos, refinando a conversa até chegar a resultados incríveis.',
    topics: [
      {
        title: 'A metáfora do detetive',
        text: 'Você é um detetive e a IA é sua parceira. Você não revela todo o caso de uma vez: entrega as pistas uma a uma e, juntos, vocês resolvem o mistério.'
      },
      {
        title: 'Técnica do refinamento progressivo',
        items: [
          '1. A ideia bruta — comece com a ideia principal, bem ampla',
          '2. Primeira rodada de pistas (o quê e quem) — os primeiros detalhes essenciais',
          '3. Segunda rodada de pistas (como e onde) — forma e ambiente',
          '4. Terceira rodada de pistas (o diferencial) — o seu toque especial'
        ]
      },
      {
        title: 'Exemplo do aplicativo de plantas',
        items: [
          'Ideia bruta: "Quero criar um aplicativo para ajudar pessoas a cuidarem de plantas."',
          'O quê e quem: "Para iniciantes em jardinagem, que nunca cuidaram de uma planta. Deve ajudar a lembrar de regar."',
          'Como e onde: "Para celular (iOS e Android), visual simples e amigável, quase como um jogo, com notificações divertidas."',
          'O diferencial: "Identificar a planta por foto e dar dicas de saúde. Pense em um nome criativo."'
        ]
      },
      {
        title: 'Frases mágicas para usar na conversa',
        items: [
          '"Vamos começar com uma ideia..."',
          '"Ótimo. Agora, considere que..."',
          '"Expandindo essa ideia, e se a gente adicionasse..."',
          '"Vamos refinar isso. O tom deve ser mais..."'
        ]
      }
    ],
    outcome:
      'Construir um resultado complexo a partir de passos simples, guiando a IA em cada etapa do processo.'
  },
  {
    id: 'auto-3',
    number: 3,
    title: 'Desenhando a Conversa',
    objective:
      'Usar um fluxo simples para visualizar e organizar a interação com a IA, garantindo que nenhuma etapa importante seja esquecida.',
    topics: [
      {
        title: 'A metáfora do móvel da IKEA',
        text: 'Construir com a IA é como montar um móvel: seguindo o manual, o resultado é sólido e funcional. Pulando etapas, sobra parafuso e a estante fica torta.'
      },
      {
        title: 'O fluxo simples para qualquer projeto',
        items: [
          '1. A ideia — você conta sua ideia ou problema para a IA',
          '2. A leitura — a IA processa e tenta entender o que você quer',
          '3. A organização — a IA quebra a ideia em partes menores (os requisitos)',
          '4. A criação — a IA transforma os blocos em algo concreto: texto, plano, roteiro, protótipo',
          '5. A verificação — você compara o entregue com o que realmente queria',
          '6. O lançamento — se estiver bom, você usa o resultado',
          '7. O refinamento — se não estiver, volta para a organização ou criação e pede ajustes'
        ]
      },
      {
        title: 'Atividade prática',
        text: 'Pegue a ideia do aplicativo de plantas do módulo anterior e desenhe esse fluxo no papel, escrevendo o que aconteceu em cada etapa da sua conversa.'
      }
    ],
    outcome:
      'Ter um método, um passo a passo mental, para guiar as interações com a IA e garantir que você está no controle do processo.'
  },
  {
    id: 'auto-4',
    number: 4,
    title: 'A IA como sua Consultora de Ferramentas',
    objective:
      'Usar a própria IA para sugerir as melhores ferramentas e tecnologias para o seu projeto, mesmo sem entender nada sobre elas.',
    topics: [
      {
        title: 'A metáfora do GPS',
        text: 'A IA é como um GPS: você diz onde quer chegar (o projeto) e ela mostra as melhores rotas (as ferramentas), explicando se o caminho é mais rápido, mais barato ou mais fácil.'
      },
      {
        title: 'Como fazer a pergunta certa',
        text: 'O segredo é dar o contexto do projeto e, principalmente, as suas restrições.',
        items: [
          'Pergunta vaga: "Que ferramentas uso para criar um site?" → lista gigante e confusa',
          'Pergunta poderosa: contexto (o que é o projeto) + restrições (tempo, dinheiro, conhecimento) + formato da resposta'
        ]
      },
      {
        title: 'Exemplo da padaria',
        text: '"Preciso criar um site para a padaria do meu bairro. Contexto: é uma padaria pequena e o site servirá apenas para mostrar endereço, horário e fotos dos pães. Restrições: não sei programar, não quero gastar dinheiro e preciso atualizar sozinho uma vez por mês. Me sugira 3 opções de ferramentas, em uma tabela, com vantagem e desvantagem de cada uma para o meu caso."'
      },
      {
        title: 'Atividade prática',
        items: [
          'Pense em um projeto real ou fictício',
          'Escreva a "pergunta poderosa", incluindo contexto e restrições',
          'Analise as sugestões: elas fazem sentido para você?'
        ]
      }
    ],
    outcome:
      'Delegar a parte técnica para a IA: seu trabalho não é saber qual ferramenta usar, e sim explicar o problema tão bem que a IA possa escolher por você.'
  },
  {
    id: 'auto-5',
    number: 5,
    title: 'A Missão Final',
    objective:
      'Juntar tudo o que foi aprendido para criar um mini projeto do zero, usando a IA como parceira do início ao fim.',
    topics: [
      {
        title: 'A metáfora do capitão',
        text: 'Você é o capitão do navio e a IA é sua tripulação. Você define o destino e a tripulação cuida das velas, do leme e dos mapas, sempre seguindo suas ordens.'
      },
      {
        title: 'O desafio — escolha uma ideia',
        items: [
          'Um planejador de viagens de fim de semana',
          'Um organizador de receitas de família',
          'Um sistema simples para controlar despesas mensais'
        ]
      },
      {
        title: 'Passo a passo da missão',
        items: [
          '1. A ideia bruta — explique a ideia de forma ampla',
          '2. Refinamento progressivo — adicione detalhes em várias rodadas',
          '3. Consulta de ferramentas — peça sugestões com base nas suas restrições',
          '4. Estruturação do projeto — peça para a IA organizar (abas, colunas, seções)',
          '5. Criação do conteúdo — peça exemplos preenchidos',
          '6. Revisão e refinamento final — revise e peça ajustes'
        ]
      }
    ],
    outcome:
      'Aplicar o método completo em um projeto real, ganhando confiança para usar a IA em qualquer desafio, por mais complexo que pareça.'
  },
  {
    id: 'auto-6',
    number: 6,
    title: 'Criando Agentes de IA e Automações',
    objective:
      'Dar contexto específico para criar agentes de IA e automações que trabalhem de forma autônoma, executando tarefas sem supervisão constante.',
    topics: [
      {
        title: 'IA conversacional x agente de IA',
        items: [
          'IA conversacional: é como ter um consultor ao lado — você pergunta, ela responde, você pergunta de novo',
          'Agente de IA: é como um assistente que você treina uma vez e ele trabalha sozinho — recebe a tarefa, pensa, age e entrega'
        ]
      },
      {
        title: 'Pilar 1 — O papel (quem é o agente?)',
        text: 'Defina a personalidade profissional do agente: nome, tom, o que conhece, qual o objetivo e o que fazer quando não souber responder.'
      },
      {
        title: 'Pilar 2 — O processo (como o agente deve agir?)',
        items: [
          '1. Gatilho: o que ativa o agente (mensagem, e-mail, formulário)',
          '2. Análise: como interpretar a entrada (reclamação? pedido? dúvida?)',
          '3. Decisão: que caminhos pode tomar',
          '4. Ação: o que faz concretamente (responder, salvar, criar tarefa)',
          '5. Finalização: como encerra a interação'
        ]
      },
      {
        title: 'Pilar 3 — As regras (o que pode e o que não pode)',
        items: [
          'PODE: responder sobre preços, disponibilidade e formas de pagamento',
          'PODE: agendar visitas e enviar catálogos',
          'NÃO PODE: dar descontos acima do limite sem aprovação',
          'NÃO PODE: prometer prazos fora do combinado',
          'NÃO PODE: compartilhar dados de outros clientes'
        ]
      },
      {
        title: 'Pilar 4 — Os dados (que informações o agente precisa)',
        items: [
          'Base de conhecimento com soluções para problemas comuns',
          'Histórico de atendimentos do cliente',
          'Status dos produtos',
          'Contatos da equipe para escalação',
          'Templates de resposta para diferentes situações'
        ]
      },
      {
        title: 'Estrutura do prompt para criar um agente',
        items: [
          'PAPEL: personalidade e função',
          'PROCESSO: o fluxo de trabalho passo a passo',
          'REGRAS: o que pode e o que não pode fazer',
          'DADOS: as informações necessárias',
          'FERRAMENTAS: que sistemas o agente vai usar'
        ]
      },
      {
        title: 'Dicas de ouro para agentes eficazes',
        items: [
          'Comece simples: o primeiro agente deve fazer uma coisa muito bem',
          'Teste com cenários reais e situações difíceis',
          'Sempre tenha uma saída humana — o agente precisa saber quando chamar o responsável',
          'Monitore e ajuste com o uso'
        ]
      }
    ],
    practice: [
      'Defina o papel do seu agente em um parágrafo',
      'Desenhe o processo em 5 etapas',
      'Liste 5 coisas que ele pode e 5 que não pode fazer',
      'Mapeie os dados a que ele precisa ter acesso'
    ],
    outcome:
      'Entender a diferença entre usar IA para conversas pontuais e criar sistemas inteligentes que trabalham 24/7, liberando seu tempo.'
  },
  {
    id: 'auto-7',
    number: 7,
    title: 'Transformando a IA em Qualquer Especialista',
    objective:
      'Usar personas profissionais para transformar a IA em especialista de diferentes áreas, obtendo respostas com nível de profissional experiente.',
    topics: [
      {
        title: 'A metáfora do ator',
        text: 'A IA é como um ator muito talentoso: se você disser "seja você mesmo", ele não sabe que personagem interpretar. Ao dizer "você é um médico experiente", ele entra no papel e traz o conhecimento e o jeito de falar daquele profissional.'
      },
      {
        title: 'O que acontece ao usar uma persona',
        items: [
          'Conhecimento especializado: a IA acessa informações específicas da área',
          'Vocabulário técnico: passa a usar termos e conceitos da profissão',
          'Perspectiva profissional: pensa como aquele especialista pensaria'
        ]
      },
      {
        title: 'As 3 camadas de uma persona eficaz',
        items: [
          '1. A profissão base: "Você é um analista de requisitos..."',
          '2. A experiência específica: "...com 10 anos de experiência em projetos de software..."',
          '3. A especialidade ou diferencial: "...especializado em sistemas financeiros e compliance bancário."'
        ]
      },
      {
        title: 'Exemplo da diferença',
        items: [
          'Pergunta comum: "Como melhorar meu site?" → lista básica de dicas gerais',
          'Com persona: "Você é um UX Designer sênior com 8 anos em e-commerce. Meu site tem taxa de conversão de 1,2%. Analise os problemas de experiência e sugira melhorias específicas." → análise detalhada e técnica'
        ]
      },
      {
        title: 'Dicas de ouro para personas',
        items: [
          'Seja específico: "Analista de QA especializado em testes de segurança" é melhor que "Analista de QA"',
          'Adicione credibilidade: anos de experiência, certificações, tipos de empresa',
          'Defina a especialidade: cada área tem sub-especialidades importantes',
          'Combine personas: "Product Manager com background técnico"',
          'Adapte ao seu nível: peça para o especialista explicar de forma didática'
        ]
      },
      {
        title: 'Combinando persona com o método completo',
        items: [
          'Escolha a persona certa para o problema',
          'Dê contexto progressivo (Módulo 2)',
          'Siga o fluxo (Módulo 3)',
          'Peça sugestões de ferramentas com a perspectiva do especialista (Módulo 4)'
        ]
      }
    ],
    practice: [
      'Teste 1 — faça sua pergunta sem persona',
      'Teste 2 — repita começando com "Você é um [profissional] experiente..."',
      'Teste 3 — use a estrutura completa: profissão + experiência + especialidade',
      'Compare as três respostas'
    ],
    outcome:
      'Transformar qualquer conversa com IA em uma consultoria especializada, obtendo insights com nível de profissional sênior.'
  }
];
