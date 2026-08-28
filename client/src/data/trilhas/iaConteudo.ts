import { Module } from '../trilha360';
import { TrackOverview } from '../../components/TrackPage';

/**
 * Trilha de IA — IA agêntica, construída a partir da biblioteca de 31 livros.
 * Lote 1: módulos 1 a 4. Os demais entram nos próximos lotes.
 */

export const IA_OVERVIEW: TrackOverview = {
  title: 'IA agêntica: de assistentes que respondem a sistemas que agem',
  intro:
    'A trilha percorre o que muda quando a IA deixa de conversar e passa a executar: o laço que define um agente, o estado que ele carrega, os artefatos que produz, as ferramentas que o tornam útil, a memória que o torna consistente e a recuperação de informação que o mantém honesto. O conteúdo vem da biblioteca de livros sobre IA agêntica.',
  pillars: [
    'A virada agêntica: da conversa ao resultado',
    'O laço do agente: estado, plano, ação, observação',
    'Ferramentas como contratos, com recibos e idempotência',
    'Memória governada e recuperação com citação (RAG)',
    'Multi-agente, MCP e frameworks (próximos lotes)',
    'Guardrails, avaliação, observabilidade e produção (próximos lotes)'
  ],
  audience: [
    'Quem já usa IA para conversar e quer construir sistemas que executam',
    'Analistas e desenvolvedores que vão integrar agentes ao trabalho',
    'Quem precisa avaliar risco, custo e retorno de projetos com agentes'
  ],
  prerequisite:
    'Não é preciso programar. A trilha começa pela arquitetura — o que torna um agente confiável — e só depois entra em ferramentas e frameworks.',
  completion: [
    'Explicar o que é um agente sem metáforas: um laço controlado que produz artefatos',
    'Escolher um caso de uso com critério de impacto, frequência, dados e risco',
    'Definir nível de autonomia, lista de proibições e regras de escalonamento',
    'Escrever contratos de ferramenta com recibos, retentativa segura e idempotência',
    'Separar estado de curto prazo de memória de longo prazo e governar as duas',
    'Aplicar o ciclo recuperar, resumir, citar, agir para evitar respostas inventadas'
  ]
};

export const IA_MODULES: Module[] = [
  {
    id: 'ia-1',
    number: 1,
    title: 'A virada agêntica',
    objective:
      'Entender a diferença entre um assistente que responde e um agente que assume um resultado, e escolher o primeiro caso de uso com critério.',
    topics: [
      {
        title: 'O que muda de fato',
        text: 'IA agêntica não é uma conversa melhor. É a posse de um resultado por meio de um laço controlado que dá passos rumo a um objetivo dentro de regras que você define. A mudança é sair de pedir respostas para desenhar um processo que produz artefatos mensuráveis e move o trabalho adiante sem empurrão manual constante.'
      },
      {
        title: 'Um resultado, não uma pilha de funcionalidades',
        text: 'O primeiro agente deve possuir um único resultado. A escolha se faz por quatro critérios, aplicados honestamente a três candidatos antes de decidir.',
        items: [
          'Impacto: quanto o resultado importa para a operação',
          'Frequência: com que frequência a tarefa se repete',
          'Disponibilidade de dados: você já tem acesso ao que o agente precisa?',
          'Risco: o que acontece se o agente errar'
        ]
      },
      {
        title: 'A descrição de cargo do agente',
        text: 'Antes de construir, escreva em uma frase o que o agente faz, incluindo as restrições e os artefatos que ele deve produzir. Sem isso, o sistema não sabe o que significa sucesso.'
      },
      {
        title: 'A escada da autonomia',
        items: [
          'Assistido: o agente propõe, a pessoa faz',
          'Supervisionado: o agente age, mas cada ação passa por aprovação',
          'Semiautônomo: o agente age sozinho dentro de fronteiras estreitas',
          'Padrão recomendado: draft-first para tudo que for externo, custoso, irreversível ou sensível à reputação'
        ]
      },
      {
        title: 'Lista de proibições e regras de aprovação',
        text: 'Escreva o que o agente nunca pode fazer e quando ele deve parar e perguntar. Um sistema precisa poder parar com segurança em vez de improvisar.'
      },
      {
        title: 'SLA: transformar o caso de uso em trabalho mensurável',
        items: [
          'Tempo de resposta esperado',
          'Critério de sucesso expresso em artefatos, não em impressão',
          'Tratamento de falha que impede adivinhação e ação insegura',
          'Relato que cria trilha de auditoria para melhoria contínua'
        ]
      }
    ],
    practice: [
      'Liste três candidatos a primeiro caso de uso, cada um em uma frase',
      'Pontue os três por impacto, frequência, dados e risco',
      'Escreva a descrição de cargo do escolhido, com restrições e artefatos',
      'Defina o nível de autonomia e a lista de proibições'
    ],
    outcome:
      'Sair com três entregas concretas: a descrição de cargo do agente, a decisão de autonomia e a lista de proibições com regras de aprovação.'
  },
  {
    id: 'ia-2',
    number: 2,
    title: 'Anatomia de um agente',
    objective:
      'Definir o agente sem misticismo: o laço, o estado que ele carrega e os artefatos que ele deixa para trás.',
    topics: [
      {
        title: 'O laço, a menor definição que se sustenta',
        text: 'Um agente não é uma coisa, é um ciclo que se repete até concluir ou escalar: entrada → interpretação → planejamento → ação (ferramenta ou rascunho) → observação → atualização de estado → próximo passo.',
        items: [
          'Interpretação existe porque entradas reais são confusas',
          'Planejamento existe porque o sistema precisa de um caminho, não de um palpite',
          'Ação existe porque o trabalho precisa andar, não só ser comentado',
          'Observação existe porque ações têm consequências — inclusive erros',
          'Atualização de estado existe para o sistema não se repetir nem se contradizer',
          'Próximo passo existe porque concluir é uma série de movimentos controlados'
        ]
      },
      {
        title: 'Chamada de ferramenta, RAG e multi-agente no mesmo modelo',
        text: 'Chamar uma ferramenta é um tipo de ação. Recuperar informação é observação mais atualização de estado. Times de agentes são vários ciclos com passagens de bastão. Guardrails são regras que restringem ações e definem escalonamento.'
      },
      {
        title: 'Estado: o que o agente carrega durante a execução',
        text: 'Agentes não têm memória como pessoas; têm estado. Estado é a informação que molda a próxima decisão, e ele precisa ser explícito para o sistema ser inspecionável.',
        items: [
          'O objetivo em uma linha, porque objetivos se perdem se não forem repetidos',
          'Restrições e permissões desta execução',
          'O plano, que revela a intenção antes da ação',
          'O registro de execução: o que foi tentado e o que de fato aconteceu',
          'As perguntas em aberto, para que "não sei" tenha onde morar'
        ]
      },
      {
        title: 'Por que agentes "alucinam"',
        text: 'Muitas vezes o sistema não tinha onde registrar o desconhecido, então preencheu a lacuna com texto confiante. Estado explícito resolve isso dando um lugar para o que não se sabe. Suposições devem ser rotuladas como suposições, nunca contrabandeadas como fatos.'
      },
      {
        title: 'Checkpoints',
        text: 'Antes de agir de novo, o agente reafirma em uma frase o que está tentando alcançar e o que fará em seguida. Checkpoints evitam desvio de objetivo e tornam a execução auditável.'
      },
      {
        title: 'Artefatos: a saída real do trabalho agêntico',
        text: 'A saída de um agente não é uma mensagem de chat: são artefatos — rascunhos de e-mail, tarefas, memorandos de decisão, listas estruturadas. Conversa ajuda, artefato muda o mundo.',
        items: [
          'Regra simples: toda execução produz um artefato principal e um artefato de apoio',
          'O principal move o resultado adiante',
          'O de apoio torna a execução compreensível e segura',
          'Artefatos opcionais são disparados por condição, não por impulso do agente'
        ]
      },
      {
        title: 'Instruções que se sustentam',
        text: 'Prompt não é feitiço. A instrução estável é uma pilha de quatro blocos, para que a prioridade fique óbvia sob pressão.',
        items: [
          'Papel e missão: o resultado que o agente possui',
          'Restrições: permissões e lista de proibições',
          'Processo: planejar antes de agir, verificar e escalar',
          'Formato de saída: padroniza os artefatos e torna as execuções comparáveis',
          'Comportamento de fallback: o que fazer quando travar — pausar, não adivinhar'
        ]
      }
    ],
    practice: [
      'Desenhe o laço e rotule cada etapa',
      'Escreva o que significa "concluir" e o que significa "escalar" no seu caso',
      'Defina o estado como campos, incluindo uma linha para "suposições feitas"',
      'Escolha o artefato principal e o de apoio e descreva o que é "bom" em cada um'
    ],
    outcome:
      'Ter um laço que você consegue desenhar, um estado que obriga o sistema a ser honesto e padrões de artefato que tornam o agente governável.'
  },
  {
    id: 'ia-3',
    number: 3,
    title: 'Ferramentas: quando o agente vira operação',
    objective:
      'Dar ferramentas ao agente sem criar caos: contratos explícitos, recibos, retentativa segura e idempotência.',
    topics: [
      {
        title: 'O momento em que o agente deixa de ser um assistente de escrita',
        text: 'No instante em que ganha ferramentas, o agente passa a produzir efeitos colaterais. Efeitos colaterais são onde a confiança é ganha ou perdida — de tarefas duplicadas a um e-mail enviado para a pessoa errada.'
      },
      {
        title: 'Ferramenta é um contrato',
        items: [
          'Entradas explícitas: o que a ferramenta exige e em que formato',
          'Recibo: o que ela devolve como prova de que agiu (ids, links, status)',
          'Comportamento previsível de falha: o que acontece quando dá errado',
          'Regra de retentativa segura: quando tentar de novo e quantas vezes',
          'Idempotência: repetir a mesma chamada não pode duplicar o efeito'
        ]
      },
      {
        title: 'Catálogo pequeno, valor imediato',
        text: 'Um conjunto enxuto de ferramentas — tarefas, documentos e rascunhos de e-mail — já gera valor com risco limitado. Cresça o catálogo por necessidade comprovada, não por curiosidade.'
      },
      {
        title: 'Tabela de ações permitidas',
        text: 'Uma tabela que deixa explícito o que o agente pode fazer, com qual ferramenta e sob qual permissão, torna as fronteiras óbvias para quem constrói e para quem aprova.'
      },
      {
        title: 'Prévia da carga (payload preview)',
        text: 'Antes de executar, o agente mostra exatamente o que vai enviar. Aprovar a prévia é diferente de aprovar o resultado: você aprova a intenção antes do efeito.'
      },
      {
        title: 'Verificação por recibo',
        text: 'O agente não pode afirmar que criou algo sem o recibo correspondente. Sem recibo, o passo não aconteceu — e o estado deve registrar isso como falha, não como sucesso.'
      }
    ],
    practice: [
      'Escreva o contrato de uma ferramenta que você usaria hoje',
      'Defina a regra de idempotência dessa ferramenta',
      'Monte a tabela de ações permitidas do seu agente'
    ],
    outcome:
      'Transformar o agente em sistema operacional confiável: útil sem ser imprudente, com efeitos verificáveis.'
  },
  {
    id: 'ia-4',
    number: 4,
    title: 'Memória e recuperação (RAG)',
    objective:
      'Separar estado de memória, governar o que é guardado e obrigar o agente a falar a partir de evidência.',
    topics: [
      {
        title: 'Estado, memória e conhecimento não são a mesma coisa',
        items: [
          'Estado: o que o agente precisa para concluir a execução atual — curto prazo',
          'Memória: o que ele mantém entre execuções para reduzir atrito — preferências, restrições e padrões estáveis',
          'Conhecimento: vive nos documentos e sistemas de registro, e é recuperado quando necessário, com procedência'
        ]
      },
      {
        title: 'Memória é uma ferramenta com consequências',
        text: 'Toda memória gravada é comportamento futuro esperando para acontecer. Boa memória não é lembrar muito: é lembrar só o que melhora as próximas execuções, de forma auditável, corrigível e com validade.'
      },
      {
        title: 'As três falhas clássicas de memória',
        items: [
          'Memória velha: guarda algo que era verdade e aplica quando já não é',
          'Excesso de coleta: guarda o que não deveria, criando risco e ruído',
          'Memória sem procedência: ninguém sabe de onde veio nem quando foi verificada'
        ]
      },
      {
        title: 'Esquema mínimo de memória',
        items: [
          'chave e valor',
          'categoria',
          'fonte',
          'confiança',
          'última verificação',
          'TTL (prazo de validade)',
          'sensibilidade (dados pessoais, por exemplo)'
        ]
      },
      {
        title: 'RAG é disciplina, não funcionalidade',
        text: 'A regra é dura e resolve quase tudo: se não pode apontar a fonte, não pode afirmar o fato. O ciclo é recuperar, resumir, citar, agir.'
      },
      {
        title: 'Por que o agente fica "inteligentemente errado"',
        text: 'O modelo é otimizado para produzir continuações plausíveis, não para sentir incerteza. Se houver lacuna e nenhuma obrigação de recuperar e citar, ele preenche com o mais provável — e "às vezes correto" não é um sistema que escala.'
      },
      {
        title: 'Conflito entre fontes',
        text: 'Documentos discordam. O agente deve trazer o conflito à tona, ordenar as fontes por uma régua de qualidade e então seguir com a de maior autoridade ou escalar a decisão.'
      }
    ],
    practice: [
      'Escreva as regras de escrita de memória do seu agente: o que pode ser salvo e com qual TTL',
      'Monte uma base de conhecimento pequena e curada para o caso de uso escolhido',
      'Defina a régua de qualidade das fontes e a regra de conflito'
    ],
    outcome:
      'Ter memória que compõe valor em vez de acumular risco, e artefatos baseados em evidência, fáceis de auditar e corrigir.'
  }
];
