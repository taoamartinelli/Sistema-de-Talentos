import { Module } from '../trilha360';
import { TrackOverview } from '../../components/TrackPage';

/**
 * Trilha PSPO II — baseada no Guia de Estudos PSPO II e nos conteúdos das
 * competências "Gerenciando produtos com agilidade" e "Evoluindo a Organização Ágil".
 */

export const PSPO2_OVERVIEW: TrackOverview = {
  title: 'Guia de estudos — PSPO II',
  intro:
    'O objetivo não é memorizar respostas, mas entender a lógica por trás de cada princípio: assim dá para responder qualquer questão da prova, mesmo as que você nunca viu. A trilha percorre os temas mais cobrados, do conceito de valor às decisões de portfólio, sempre destacando as pegadinhas clássicas.',
  pillars: [
    'Outcome acima de output: valor é resultado, não quantidade entregue',
    'Evidência acima de opinião e hierarquia',
    'Evidence-Based Management e suas quatro áreas de valor',
    'Product Backlog e Product Goal como plano emergente',
    'Qualidade binária: Definição de Pronto não é negociável',
    'Reduzir dependências na origem e lançar pequeno e frequente'
  ],
  audience: [
    'Quem vai prestar a certificação Professional Scrum Product Owner II',
    'Product Owners que já atuam e querem aprofundar decisões de valor',
    'Analistas e líderes que participam de decisões de produto e portfólio'
  ],
  prerequisite:
    'É esperado o domínio do Guia do Scrum. Materiais recomendados pela Scrum.org: Guia do Scrum 2020, Guia do EBM 2024, Nexus Guide 2021 e Kanban Guide 2021.',
  completion: [
    'Distinguir output de outcome e aplicar o raciocínio orientado a resultado',
    'Diagnosticar um produto pelas quatro áreas de valor do EBM',
    'Escolher métricas de negócio, e não métricas internas de processo',
    'Reconhecer o Product Backlog como plano emergente, ordenado pelo PO',
    'Aplicar corretamente propósitos e timeboxes de cada evento do Scrum',
    'Conduzir stakeholders com delegação clara, evidência e experimentos',
    'Resolver dependências reduzindo acoplamento em vez de somar burocracia'
  ]
};

export const PSPO2_MODULES: Module[] = [
  {
    id: 'pspo2-1',
    number: 1,
    title: 'Outcome × Output: o que significa valor',
    objective:
      'Entender o conceito mais cobrado da prova, que aparece de forma direta ou disfarçada em quase todas as questões.',
    topics: [
      {
        title: 'A distinção',
        items: [
          'Output é o que a equipe produz: features, itens de backlog entregues, código escrito',
          'Outcome é a mudança real que isso gera: um comportamento de cliente, um resultado de negócio, um problema resolvido'
        ]
      },
      {
        title: 'Quando um incremento é valioso',
        text: 'Um incremento é valioso o suficiente para ser lançado quando entrega um único resultado novo ou melhorado — e não quando entrega "muitas features", corrige um defeito ou completa todos os itens obrigatórios do backlog. Quantidade de output não é sinônimo de valor.'
      },
      {
        title: 'O critério de valor é do cliente',
        text: 'Um incremento é valioso quando é provável que aumente a satisfação do cliente — não porque foi entregue rápido, atendeu a uma especificação técnica, chegou na data esperada ou continha tudo o que o PO queria. O critério é o impacto percebido, não a conformidade com um plano interno.'
      },
      {
        title: 'A métrica mais forte',
        text: 'Para saber se o produto agrega valor, a melhor evidência é o uso real pelo cliente — frequência de uso, adoção, retenção. Itens obrigatórios entregues, custo do lançamento e cumprimento de cronograma são métricas de processo e de output.'
      },
      {
        title: 'Muitos stakeholders, todos com pedidos "essenciais"',
        text: 'A resposta certa nunca é esperar entregar tudo, nem escolher os stakeholders mais importantes para agradar. O caminho é lançar assim que for possível entregar ao menos um resultado esperado real, mesmo com nem todas as features prontas — isso reduz risco e antecipa aprendizado.'
      },
      {
        title: 'O que fixar',
        text: 'Sempre que uma alternativa oferecer "entregar mais" como resposta, desconfie. Output em excesso não é a resposta correta quando existe opção ligada a outcome, validação ou redução de risco.'
      }
    ],
    outcome: 'Reconhecer, em qualquer questão, qual alternativa fala de resultado e qual fala apenas de entrega.'
  },
  {
    id: 'pspo2-2',
    number: 2,
    title: 'Lacuna de satisfação do usuário',
    objective: 'Medir a distância entre o que o usuário esperava e o que ele de fato vive ao usar o produto.',
    topics: [
      {
        title: 'O que é a lacuna',
        items: [
          'A experiência real do usuário: o que de fato acontece quando ele usa o produto',
          'O resultado desejado pelo usuário: o que ele esperava alcançar'
        ],
        text: 'A lacuna é a diferença entre as duas. Não tem relação com tamanho ou participação de mercado: quanto maior a distância entre expectativa e experiência, menor a satisfação, por maior que seja o mercado.'
      },
      {
        title: 'Quando os dados de uso surpreendem',
        text: 'Uma feature considerada importante que quase não é usada não pede uma ação isolada e definitiva. O caminho maduro combina várias frentes ao mesmo tempo.',
        items: [
          'Conversar mais com os usuários para entender o impacto que realmente buscam',
          'Considerar desativar a funcionalidade pouco usada, observando o feedback',
          'Fazer experimentos para entender o que os clientes consideram valioso',
          'Analisar se a funcionalidade resolve mesmo o problema que deveria resolver'
        ]
      },
      {
        title: 'O que fixar',
        text: 'Dados de uso surpreendentes são ponto de partida para investigação, não sentença final. A prova valoriza a combinação de evidência quantitativa (uso), evidência qualitativa (conversa) e validação (experimentos).'
      }
    ],
    outcome: 'Interpretar dados de uso inesperados sem tomar decisões unilaterais e precipitadas.'
  },
  {
    id: 'pspo2-3',
    number: 3,
    title: 'Evidence-Based Management (EBM)',
    objective:
      'Usar as quatro áreas de valor para guiar decisões de investimento e estratégia com evidência, não com opinião ou hierarquia.',
    topics: [
      {
        title: 'As quatro áreas de valor',
        items: [
          'Current Value (Valor Atual): quanto o produto entrega de valor hoje — alta satisfação do cliente, por exemplo',
          'Unrealized Value (Valor Não Realizado): quanto ainda pode ser capturado — baixa participação de mercado quando quem usa gosta',
          'Time-to-Market: a velocidade da organização em levar novidade ao mercado',
          'Ability to Innovate: a capacidade de continuar entregando coisas novas e valiosas'
        ]
      },
      {
        title: 'Quando reduzir o investimento em um produto',
        text: 'Quando o Valor Não Realizado é muito pequeno — não há mais muito potencial a capturar. Não é sobre o Valor Atual estar alto ou baixo isoladamente, é sobre quanto ainda dá para ganhar.'
      },
      {
        title: 'Valor Atual alto e Valor Não Realizado alto',
        text: 'Quem usa, gosta; o problema é que pouca gente conhece o produto. A primeira ação correta é melhorar o marketing para atrair mais clientes. Reduzir preço ataca a rentabilidade sem resolver a descoberta; adicionar funcionalidades não faz sentido em um produto que já satisfaz; relançar com outro nome, menos ainda.'
      },
      {
        title: 'Concorrente menor, porém mais rápido',
        text: 'A estratégia correta ataca Time-to-Market e Ability to Innovate — melhorar a velocidade de lançamento e a taxa de inovação. Reduzir preço, buscar novos mercados ou empilhar features não resolve a causa raiz, que é capacidade de resposta.'
      },
      {
        title: 'Quando um stakeholder não acredita nos dados',
        text: 'Dados de uso devem continuar sendo medidos e publicados com transparência, e usados para fundamentar decisões — nunca escondidos para evitar conflito nem descartados para agradar alguém influente.'
      },
      {
        title: 'O que fixar',
        text: 'O diagnóstico certo depende de olhar Valor Atual e Valor Não Realizado juntos: eles contam histórias diferentes e pedem ações diferentes.'
      }
    ],
    outcome: 'Diagnosticar um cenário de produto pelas quatro áreas de valor antes de propor qualquer ação.'
  },
  {
    id: 'pspo2-4',
    number: 4,
    title: 'Métricas de negócio e decisões de preço',
    objective:
      'Escolher as métricas certas conforme a perspectiva de quem pergunta e ancorar preço em evidência de mercado.',
    topics: [
      {
        title: 'O que importa para investidores e acionistas',
        items: [
          'Receita por funcionário',
          'Participação de mercado',
          'Preço médio de venda comparado aos concorrentes diretos',
          'Rentabilidade do produto'
        ]
      },
      {
        title: 'A armadilha da velocidade',
        text: 'A velocidade dos developers — quantos pontos ou itens a equipe entrega por sprint — não é métrica relevante para investidor. É uma medida interna de capacidade, sem relação direta com valor de mercado ou retorno financeiro. Produtividade da equipe não é valor gerado para o negócio.'
      },
      {
        title: 'Fontes de informação para decidir preço',
        items: [
          'Satisfação do cliente',
          'Preços da concorrência',
          'Participação de mercado',
          'Necessidades não atendidas dos clientes'
        ]
      },
      {
        title: 'O que não deve guiar o preço',
        text: 'Metas de lucro da empresa e estratégia de vendas por canal são fontes internas e de pressão política, não evidências de mercado ou de cliente.'
      },
      {
        title: 'O que fixar',
        text: 'Quando a questão descreve conflito entre departamentos internos — vendas querendo baixar preço, financeiro preocupado com rentabilidade —, a resposta certa costuma fugir dos dois lados e apontar para evidência externa.'
      }
    ],
    outcome: 'Separar métricas de mercado de métricas internas e justificar decisões de preço com evidência.'
  },
  {
    id: 'pspo2-5',
    number: 5,
    title: 'Product Backlog: natureza e gestão',
    objective: 'Tratar o backlog como plano emergente, transparente e de responsabilidade única do PO.',
    topics: [
      {
        title: 'O backlog é emergente',
        text: 'Ele nunca está congelado até o fim de um projeto, não é arquivado e substituído por outro do zero, e não existe documento de especificação formal que o mantenha estável. Conforme o ambiente, o mercado e o entendimento mudam, o backlog evolui.'
      },
      {
        title: 'Um backlog por produto',
        text: 'Não por equipe Scrum, não por portfólio, não por programa. Mesmo com várias equipes no mesmo produto, o backlog é compartilhado.'
      },
      {
        title: 'O que é gerenciar o Product Backlog',
        items: [
          'Ordenar os itens',
          'Dividir itens grandes em menores',
          'Reduzir ou eliminar dependências entre itens',
          'Revisar o backlog com as partes interessadas'
        ],
        text: 'Previsão detalhada de esforço é estimativa feita pelos Developers, não gestão de backlog.'
      },
      {
        title: 'O backlog é o plano',
        text: 'O Scrum não tem plano de projeto tradicional separado. O próprio Product Backlog é o plano, atualizado continuamente conforme surgem informações — não em momentos fixos do calendário.'
      },
      {
        title: 'Afirmações verdadeiras',
        items: [
          'Deve ser visível para toda a Equipe Scrum e para as partes interessadas',
          'É ordenado pelo Product Owner'
        ]
      },
      {
        title: 'Distratores comuns',
        items: [
          'Nem todo item precisa ser história de usuário — é só um formato possível',
          'Não é só o PO que pode adicionar itens; qualquer pessoa pode sugerir. Exclusivo do PO é a ordenação e a responsabilidade final',
          'Não é exigido que todos os itens da Sprint atual e da próxima estejam identificados antes de começar',
          'O backlog não elimina a conversa direta entre Developers e stakeholders — ela é incentivada'
        ]
      },
      {
        title: 'O que fixar',
        text: 'Sempre que a questão sugerir "congelar", "arquivar", "documento de especificação separado" ou "só o PO toca no backlog", é pegadinha.'
      }
    ],
    outcome: 'Identificar afirmações verdadeiras e falsas sobre o backlog sem cair nos distratores clássicos.'
  },
  {
    id: 'pspo2-6',
    number: 6,
    title: 'Product Goal',
    objective: 'Conectar as Sprints a um propósito de longo prazo dentro do Product Backlog.',
    topics: [
      {
        title: 'Benefícios de um Product Goal bem compreendido',
        items: [
          'Ajuda a equipe a manter o foco e validar decisões com base nele',
          'Dá direção geral: as Sprints parecem parte de uma jornada, não trabalhos isolados',
          'Facilita a inspeção do progresso incremental na Sprint Review'
        ]
      },
      {
        title: 'Duas pegadinhas comuns',
        items: [
          'O Product Goal não é opcional no Scrum — ele faz parte do Product Backlog',
          'Ele não serve para prever quando todo o backlog será entregue: isso é forecasting, outro conceito'
        ]
      },
      {
        title: 'De quem é a responsabilidade',
        text: 'Manter e comunicar o Product Goal é responsabilidade do Product Owner — não dos Developers, não dos patrocinadores executivos, não das partes interessadas, ainda que ele converse com todos eles no processo.'
      }
    ],
    outcome: 'Explicar o papel do Product Goal e a quem cabe mantê-lo, sem confundir com previsão de entrega.'
  },
  {
    id: 'pspo2-7',
    number: 7,
    title: 'Eventos e artefatos do Scrum',
    objective: 'Não trocar propósitos e timeboxes entre eventos — a troca é a pegadinha favorita da prova.',
    topics: [
      {
        title: 'Sprint Planning',
        text: 'Produz, entre outras coisas, o Sprint Goal — o elemento que dá meta e direção à Sprint. Diferente do Sprint Backlog, que é o "como" o trabalho será feito.'
      },
      {
        title: 'Sprint Backlog e forecast',
        text: 'Representa a quantidade de trabalho que os Developers acreditam conseguir concluir na Sprint. É uma previsão, não um contrato rígido, nem ferramenta gerencial, nem instrumento para informar stakeholders sobre versões futuras.'
      },
      {
        title: 'Daily Scrum',
        text: 'O foco é o trabalho que será feito hoje para ajudar a equipe a atingir o Sprint Goal. É planejamento voltado ao futuro próximo, não relatório de status do que já foi feito.'
      },
      {
        title: 'Sprint Review e timebox',
        text: 'O tempo é proporcional à duração da Sprint — até 4 horas para uma Sprint de 4 semanas, e menos para Sprints menores. Não são 15 minutos (isso é a Daily) nem "o tempo que for necessário".'
      },
      {
        title: 'Gráficos de burndown',
        text: 'Rastreiam trabalho restante ao longo do tempo — não custo acumulado, não produtividade individual, não valor de negócio entregue (isso seria um burnup de valor).'
      }
    ],
    outcome: 'Ler a questão identificando exatamente qual evento ou artefato está sendo perguntado.'
  },
  {
    id: 'pspo2-8',
    number: 8,
    title: 'Definição de Pronto e qualidade',
    objective: 'Tratar qualidade como binária e coletiva, sem aceite individual item a item.',
    topics: [
      {
        title: 'Quando a Definição de Pronto não é atendida',
        items: [
          'Os itens incompletos do Sprint Backlog voltam ao Product Backlog',
          'A indicação de progresso no Product Backlog deixa de ser transparente',
          'A próxima Sprint pode precisar ser interrompida se o problema aparecer depois',
          'A Equipe Scrum não deve liberar esse incremento'
        ]
      },
      {
        title: 'O distrator do gerente de projeto',
        text: 'Esse raciocínio não tem relação com um "gerente de projeto" atualizando planos — esse papel nem existe formalmente no Scrum.'
      },
      {
        title: 'O que o PO nunca deve fazer',
        text: 'Aceitar formalmente o trabalho da Sprint, como um gate de aprovação unilateral. Não existe momento formal de aceite item a item: a qualidade é garantida continuamente pela Definição de Pronto e o incremento é inspecionado de forma colaborativa na Sprint Review.'
      },
      {
        title: 'O que fixar',
        text: 'Ou o incremento atende à Definição de Pronto e está pronto para uso, ou não está e não deve ser lançado. Não existe meio-termo gerido por aprovação individual.'
      }
    ],
    outcome: 'Aplicar as consequências corretas quando a qualidade acordada não é atingida.'
  },
  {
    id: 'pspo2-9',
    number: 9,
    title: 'O papel do Product Owner',
    objective: 'Separar o foco real do papel das atividades táticas que costumam aparecer como distratores.',
    topics: [
      {
        title: 'O foco do trabalho do PO',
        items: [
          'Comunicar com clareza o progresso e as estratégias do produto a clientes e partes interessadas',
          'Colaborar com clientes e stakeholders para identificar os requisitos mais importantes',
          'Manter e comunicar o Product Goal',
          'Ordenar o Product Backlog'
        ]
      },
      {
        title: 'O que não é o foco principal',
        items: [
          'Estar sempre fisicamente disponível para tirar dúvidas dos Developers',
          'Escrever pessoalmente todas as histórias de usuário',
          'Aceitar formalmente o trabalho item a item'
        ],
        text: 'São atividades legítimas, mas não definem o papel.'
      },
      {
        title: 'PO sobrecarregado com múltiplas equipes',
        text: 'A melhor estratégia é comunicar um objetivo claro para o produto e delegar algumas atividades aos Developers, mantendo um único PO e um único Product Backlog. Criar sub-POs por equipe, POs de componente ou recorrer a um PMO fragmenta uma responsabilidade que deve permanecer única.'
      },
      {
        title: 'Quem fala com as partes interessadas',
        text: 'Qualquer membro da Equipe Scrum — Product Owner, Developers e Scrum Master. Não é exclusividade do PO, e a colaboração direta entre Developers e stakeholders é desejável.'
      }
    ],
    outcome: 'Escolher a ação correta em cenários de sobrecarga e de fronteira entre papéis.'
  },
  {
    id: 'pspo2-10',
    number: 10,
    title: 'Stakeholders e tomada de decisão',
    objective: 'Decidir de forma colaborativa, mas ancorada em evidência e experimentação.',
    topics: [
      {
        title: 'Quando muita gente quer decidir',
        items: [
          'Clareza de autoridade: criar e compartilhar um quadro de delegação com a equipe',
          'Evidência: demonstrar com dados quanto tempo as decisões estão levando e o impacto na entrega de valor',
          'Evolução organizacional: trabalhar com o Scrum Master para elevar a maturidade da empresa em gestão de produto'
        ],
        text: 'Não é correto deixar todo mundo decidindo sem dono claro, nem o PO virar autocrático e parar de ouvir.'
      },
      {
        title: 'Quando um stakeholder influente discorda dos dados',
        items: [
          'Reconhecer a opinião, mas não ceder só por pressão — nada de adicionar funcionalidade para agradar',
          'Validar com um experimento pequeno e barato, junto com o stakeholder'
        ],
        text: 'Concordar por pressão, recusar sem diálogo ou "resolver por votação" entre opções não testadas são todas respostas erradas.'
      },
      {
        title: 'O que fixar',
        text: 'A prova valoriza decisões colaborativas, mas ancoradas em evidência e experimentação — nunca por hierarquia, popularidade ou pressão emocional.'
      }
    ],
    outcome: 'Responder cenários de conflito escolhendo delegação clara, dados e experimento.'
  },
  {
    id: 'pspo2-11',
    number: 11,
    title: 'Visão, estratégia e personas',
    objective: 'Cobrir os quatro elementos que uma boa visão e estratégia de produto precisa responder.',
    topics: [
      {
        title: 'O que uma boa visão e estratégia cobre',
        items: [
          'O que significa valor naquele contexto e como medi-lo',
          'Quem vai usar o produto e o que essas pessoas querem alcançar',
          'Como o produto se compara aos concorrentes',
          'Como as pessoas vão usar o produto para alcançar os resultados esperados'
        ]
      },
      {
        title: 'Personas como ferramenta multifuncional',
        items: [
          'Entender as necessidades de um grupo de usuários',
          'Formular hipóteses sobre valor',
          'Entender o potencial de mercado',
          'Descobrir os gatilhos que levam alguém a adotar ou comprar'
        ]
      },
      {
        title: 'Visão de produto e estratégia de negócio',
        text: 'Uma Visão de Produto clara alinha o desenvolvimento à estratégia da organização; o foco no Valor do Produto trata das melhorias contínuas para atender às necessidades do cliente. O alinhamento entre visão e valor é iterativo e se dá pelo refinamento contínuo do backlog.'
      }
    ],
    outcome: 'Avaliar se uma visão de produto está completa e usar personas além da descrição de usuário.'
  },
  {
    id: 'pspo2-12',
    number: 12,
    title: 'Dependências, múltiplos times e lançamentos frequentes',
    objective: 'Reduzir acoplamento na origem e usar o tamanho do lançamento como ferramenta contra a incerteza.',
    topics: [
      {
        title: 'Produtos com muitas dependências',
        text: 'Em cenários com várias interfaces — mobile, web, caixas eletrônicos — acessando os mesmos serviços de back-end, a resposta esperada é reduzir o acoplamento na própria arquitetura: desenvolver produtos o mais independentes possível, cada um com seu plano de lançamento, garantindo coordenação entre eles.'
      },
      {
        title: 'O que não fazer',
        text: 'Controlar a complexidade de fora, somando camadas de gestão: plano de desenvolvimento centralizado, líder de projeto único supervisionando tudo ou um PMO gerenciando dependências. O princípio é reduzir dependências na origem, não gerenciá-las com mais burocracia.'
      },
      {
        title: 'Por que lançar com frequência',
        items: [
          'Permite inspecionar e adaptar com mais frequência',
          'Ajuda a entender e atender melhor as necessidades reais dos clientes',
          'Ensina a corrigir e eliminar erros mais rápido',
          'É menos arriscado do que liberações grandes e raras'
        ]
      },
      {
        title: 'Incerteza e tamanho do lançamento',
        text: 'Quanto mais incerto você estiver sobre as necessidades do cliente ou os desejos do mercado, mais importante fica reduzir o tamanho de cada liberação e validar antes de investir pesado em construir mais.'
      },
      {
        title: 'Os oito fios condutores da prova',
        items: [
          '1. Outcome > Output',
          '2. Evidência > opinião e hierarquia',
          '3. Backlog e plano são emergentes, com ordenação sempre do PO',
          '4. Um PO, um Product Backlog, por produto',
          '5. Reduzir dependências na origem em vez de gerenciá-las',
          '6. Tamanho pequeno e frequência alta reduzem risco',
          '7. Qualidade é binária e coletiva',
          '8. Diagnostique antes de agir: Valor Atual e Valor Não Realizado pedem ações diferentes'
        ]
      }
    ],
    outcome: 'Fechar a preparação com os princípios que permitem raciocinar questões inéditas.'
  }
];
