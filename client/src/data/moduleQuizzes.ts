import { SimuladoQuestion } from './trilha360';

/**
 * Simulado de conclusão de cada módulo: 5 questões sobre o conteúdo do próprio módulo.
 * Chave = id do módulo.
 */
export const MODULE_QUIZZES: Record<string, SimuladoQuestion[]> = {
  'fase-1': [
    {
      id: 'q1-1',
      statement: 'O que é programação?',
      options: [
        'Criar instruções para o computador executar tarefas',
        'Montar peças de hardware',
        'Configurar a rede de internet',
        'Digitar textos em um editor'
      ],
      answer: 0
    },
    {
      id: 'q1-2',
      statement: 'Um algoritmo é:',
      options: [
        'Uma sequência de passos para resolver um problema',
        'Uma linguagem de programação',
        'Um erro no sistema',
        'Um programa instalado no computador'
      ],
      answer: 0
    },
    {
      id: 'q1-3',
      statement: 'O desenvolvedor front-end cuida de:',
      options: [
        'A parte visual com que o usuário interage',
        'A lógica interna do sistema',
        'O contrato com o cliente',
        'A instalação dos servidores'
      ],
      answer: 0
    },
    {
      id: 'q1-4',
      statement: 'O desenvolvedor back-end cuida de:',
      options: [
        'A lógica e o funcionamento interno do sistema',
        'As artes e ilustrações do site',
        'O atendimento ao usuário',
        'A compra de equipamentos'
      ],
      answer: 0
    },
    {
      id: 'q1-5',
      statement: 'Qual destas é uma atividade do desenvolvedor?',
      options: [
        'Corrigir erros (bugs) encontrados nos sistemas',
        'Definir o orçamento da empresa',
        'Contratar novos funcionários',
        'Organizar o estoque'
      ],
      answer: 0
    }
  ],

  'fase-2': [
    {
      id: 'q2-1',
      statement: 'Qual comando lê o que o usuário digita?',
      options: ['input()', 'print()', 'type()', 'str()'],
      answer: 0
    },
    {
      id: 'q2-2',
      statement: 'Qual função converte um valor para número inteiro?',
      options: ['int()', 'float()', 'str()', 'isalpha()'],
      answer: 0
    },
    {
      id: 'q2-3',
      statement: 'Qual estrutura guarda pares de chave e valor?',
      options: ['Dicionário', 'Lista', 'Função', 'String'],
      answer: 0
    },
    {
      id: 'q2-4',
      statement: 'Qual palavra define uma função em Python?',
      options: ['def', 'for', 'if', 'input'],
      answer: 0
    },
    {
      id: 'q2-5',
      statement: 'O método isnumeric() verifica se o texto contém:',
      options: ['Apenas números', 'Apenas letras', 'Espaços', 'Símbolos'],
      answer: 0
    }
  ],

  'fase-3': [
    {
      id: 'q3-1',
      statement: 'Qual estrutura repete um bloco enquanto a condição for verdadeira?',
      options: ['while', 'if', 'else', 'def'],
      answer: 0
    },
    {
      id: 'q3-2',
      statement: 'O elif serve para:',
      options: [
        'Testar outra condição quando a anterior for falsa',
        'Encerrar o programa',
        'Criar uma função',
        'Repetir um bloco'
      ],
      answer: 0
    },
    {
      id: 'q3-3',
      statement: 'Quais são os operadores lógicos?',
      options: ['and, or e not', '+, - e *', '>, < e ==', 'int, float e str'],
      answer: 0
    },
    {
      id: 'q3-4',
      statement: 'Qual a diferença entre = e ==?',
      options: [
        '= atribui um valor e == compara valores',
        '= compara e == atribui',
        'Os dois fazem a mesma coisa',
        'Nenhum existe em Python'
      ],
      answer: 0
    },
    {
      id: 'q3-5',
      statement: 'Qual estrutura percorre item a item uma sequência?',
      options: ['for', 'while', 'elif', 'return'],
      answer: 0
    }
  ],

  'fase-4': [
    {
      id: 'q4-1',
      statement: 'Quais plataformas de exercícios a trilha indica?',
      options: [
        'FreeCodeCamp e Beecrowd',
        'Excel e PowerPoint',
        'Figma e Photoshop',
        'Trello e Slack'
      ],
      answer: 0
    },
    {
      id: 'q4-2',
      statement: 'Qual o objetivo de resolver exercícios diariamente?',
      options: [
        'Ganhar confiança e velocidade na resolução de problemas',
        'Terminar a trilha sem estudar',
        'Substituir o projeto prático',
        'Evitar usar o Git'
      ],
      answer: 0
    },
    {
      id: 'q4-3',
      statement: 'Quais temas são praticados nesta fase?',
      options: [
        'Python básico, condicionais, loops e funções',
        'Design de interfaces',
        'Administração de servidores',
        'Redação técnica'
      ],
      answer: 0
    },
    {
      id: 'q4-4',
      statement: 'Por que praticar antes de partir para o projeto?',
      options: [
        'Porque a prática fixa os conceitos e facilita o projeto',
        'Porque o projeto não usa o que foi estudado',
        'Porque o projeto é opcional',
        'Porque exercícios substituem o projeto'
      ],
      answer: 0
    },
    {
      id: 'q4-5',
      statement: 'Qual o resultado esperado desta fase?',
      options: [
        'Mais confiança e velocidade ao programar',
        'Dominar frameworks avançados',
        'Publicar um site profissional',
        'Aprender banco de dados'
      ],
      answer: 0
    }
  ],

  'fase-5': [
    {
      id: 'q5-1',
      statement: 'Qual é o projeto prático desta fase?',
      options: [
        'Sistema de Biblioteca',
        'Rede social',
        'Loja virtual',
        'Aplicativo de mensagens'
      ],
      answer: 0
    },
    {
      id: 'q5-2',
      statement: 'Qual destas NÃO é uma funcionalidade do projeto?',
      options: [
        'Emitir nota fiscal de venda',
        'Cadastrar livros',
        'Registrar devoluções',
        'Consultar histórico de empréstimos'
      ],
      answer: 0
    },
    {
      id: 'q5-3',
      statement: 'Quais conceitos são aplicados no projeto?',
      options: [
        'Listas, dicionários, funções, validações, condicionais e loops',
        'Apenas print() e input()',
        'Somente comandos Git',
        'Apenas orientação a objetos'
      ],
      answer: 0
    },
    {
      id: 'q5-4',
      statement: 'Para que serve o controle de disponibilidade?',
      options: [
        'Saber se o livro está emprestado ou disponível',
        'Calcular o preço do livro',
        'Cadastrar o autor',
        'Imprimir o catálogo'
      ],
      answer: 0
    },
    {
      id: 'q5-5',
      statement: 'As validações no projeto servem para:',
      options: [
        'Conferir os dados informados antes de registrar',
        'Deixar as telas mais bonitas',
        'Aumentar o número de funções',
        'Substituir os testes'
      ],
      answer: 0
    }
  ],

  'fase-6': [
    {
      id: 'q6-1',
      statement: 'Para que serve o Git?',
      options: [
        'Controlar versões e o histórico de alterações do código',
        'Executar programas em Python',
        'Criar bancos de dados',
        'Editar imagens'
      ],
      answer: 0
    },
    {
      id: 'q6-2',
      statement: 'Qual comando cria um repositório local?',
      options: ['git init', 'git push', 'git clone', 'git log'],
      answer: 0
    },
    {
      id: 'q6-3',
      statement: 'Qual comando seleciona as alterações para o próximo commit?',
      options: ['git add', 'git log', 'git push', 'git status'],
      answer: 0
    },
    {
      id: 'q6-4',
      statement: 'Qual comando grava as alterações no histórico?',
      options: ['git commit', 'git status', 'git add', 'git remote'],
      answer: 0
    },
    {
      id: 'q6-5',
      statement: 'Qual comando mostra a situação atual dos arquivos?',
      options: ['git status', 'git commit', 'git pull', 'git init'],
      answer: 0
    }
  ],

  'fase-7': [
    {
      id: 'q7-1',
      statement: 'Qual comando envia os commits para o repositório remoto?',
      options: ['git push', 'git pull', 'git init', 'git status'],
      answer: 0
    },
    {
      id: 'q7-2',
      statement: 'Qual comando traz as alterações do remoto para o local?',
      options: ['git pull', 'git push', 'git add', 'git commit'],
      answer: 0
    },
    {
      id: 'q7-3',
      statement: 'Qual comando copia um repositório remoto para a sua máquina?',
      options: ['git clone', 'git init', 'git log', 'git status'],
      answer: 0
    },
    {
      id: 'q7-4',
      statement: 'O que significa "origin"?',
      options: [
        'O apelido padrão do repositório remoto',
        'O nome do primeiro commit',
        'A pasta do projeto',
        'O autor das alterações'
      ],
      answer: 0
    },
    {
      id: 'q7-5',
      statement: 'Como o GitHub funciona como portfólio?',
      options: [
        'Os projetos publicados mostram o que você sabe fazer',
        'Ele gera um currículo automático',
        'Ele avalia seu código e dá uma nota',
        'Ele publica vagas de emprego'
      ],
      answer: 0
    }
  ],

  'fase-8': [
    {
      id: 'q8-1',
      statement: 'Qual destes é um projeto recomendado nesta fase?',
      options: ['Conversor de Moedas', 'Sistema bancário completo', 'Rede social', 'Editor de vídeo'],
      answer: 0
    },
    {
      id: 'q8-2',
      statement: 'Quais são os próximos passos indicados após a trilha?',
      options: [
        'Python intermediário, orientação a objetos, banco de dados, APIs e frameworks',
        'Trocar de área',
        'Parar de estudar por um tempo',
        'Refazer a trilha do início'
      ],
      answer: 0
    },
    {
      id: 'q8-3',
      statement: 'O que é um portfólio?',
      options: [
        'O conjunto de projetos que mostram o que você sabe fazer',
        'Um certificado de conclusão',
        'Uma lista de cursos assistidos',
        'Um currículo em PDF'
      ],
      answer: 0
    },
    {
      id: 'q8-4',
      statement: 'Por que manter o portfólio atualizado?',
      options: [
        'Porque ele mostra sua evolução ao longo do tempo',
        'Porque o GitHub exige atualizações',
        'Porque projetos antigos são apagados',
        'Porque substitui a entrevista técnica'
      ],
      answer: 0
    },
    {
      id: 'q8-5',
      statement: 'Qual o resultado esperado desta fase?',
      options: [
        'Ter base sólida para continuar estudando de forma independente',
        'Dominar todas as linguagens de programação',
        'Conseguir uma certificação internacional',
        'Encerrar os estudos'
      ],
      answer: 0
    }
  ],

  'fase-9': [
    {
      id: 'q9-1',
      statement: 'Uma boa prática de nomenclatura é:',
      options: [
        'Usar nomes claros para variáveis e funções',
        'Usar abreviações sempre que possível',
        'Numerar as variáveis: a1, a2, a3',
        'Usar nomes aleatórios'
      ],
      answer: 0
    },
    {
      id: 'q9-2',
      statement: 'Qual o problema de repetir código?',
      options: [
        'Cada correção precisa ser feita em vários lugares',
        'O arquivo fica menor',
        'O programa fica mais rápido',
        'Não há problema algum'
      ],
      answer: 0
    },
    {
      id: 'q9-3',
      statement: 'Quando usar comentários?',
      options: [
        'Em partes importantes ou não óbvias do código',
        'Em todas as linhas do programa',
        'Somente no fim do arquivo',
        'Nunca'
      ],
      answer: 0
    },
    {
      id: 'q9-4',
      statement: 'O tratamento de erros inclui:',
      options: [
        'Validar entradas e dar mensagens claras ao usuário',
        'Ignorar dados inválidos',
        'Remover os comentários',
        'Apagar o histórico do Git'
      ],
      answer: 0
    },
    {
      id: 'q9-5',
      statement: 'O que é refatorar?',
      options: [
        'Melhorar a organização do código sem mudar o que ele faz',
        'Reescrever o sistema em outra linguagem',
        'Apagar funções antigas',
        'Publicar o projeto no GitHub'
      ],
      answer: 0
    }
  ],

  'fase-10': [
    {
      id: 'q10-1',
      statement: 'O planejamento dos estudos envolve:',
      options: [
        'Definir metas e organizar a rotina semanal e diária',
        'Estudar apenas quando sobrar tempo',
        'Assistir vídeos sem anotar',
        'Deixar tudo para o fim do mês'
      ],
      answer: 0
    },
    {
      id: 'q10-2',
      statement: 'Por que registrar os aprendizados?',
      options: [
        'As anotações viram referência e ajudam a fixar o conteúdo',
        'Para aumentar o número de arquivos',
        'Porque o sistema exige',
        'Para substituir a prática'
      ],
      answer: 0
    },
    {
      id: 'q10-3',
      statement: 'Para que servem as revisões periódicas?',
      options: [
        'Retomar o que já foi estudado e evitar esquecer',
        'Adiar o conteúdo novo',
        'Corrigir erros do sistema',
        'Trocar de trilha'
      ],
      answer: 0
    },
    {
      id: 'q10-4',
      statement: 'Prática constante significa:',
      options: [
        'Exercícios frequentes e desenvolvimento de projetos',
        'Estudar apenas na véspera das provas',
        'Ler documentação uma vez por mês',
        'Assistir aulas sem exercitar'
      ],
      answer: 0
    },
    {
      id: 'q10-5',
      statement: 'Uma rotina de estudos sustentável é aquela que:',
      options: [
        'Você consegue manter ao longo do tempo',
        'Ocupa todas as horas do dia',
        'Depende de esforços pontuais',
        'Muda de tema toda semana'
      ],
      answer: 0
    }
  ]
};

/**
 * Percentual mínimo para concluir o simulado de um módulo.
 * Com 5 questões, 80% equivale a acertar 4.
 */
export const MODULE_QUIZ_PASSING_SCORE = 80;

/** Quantidade mínima de acertos, dado o total de questões do simulado. */
export function minimoDeAcertos(total: number): number {
  return Math.ceil((total * MODULE_QUIZ_PASSING_SCORE) / 100);
}
