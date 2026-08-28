import { SimuladoQuestion } from './trilha360';

/**
 * Simulado padrão da trilha: 50 questões cobrindo as 10 fases.
 * O conteúdo vem do documento "Trilha para estudos iniciantes".
 */
export const SIMULADO_QUESTIONS: SimuladoQuestion[] = [
  /* ---------------- Fase 1 — Introdução à Tecnologia ---------------- */
  {
    id: 'sim-1',
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
    id: 'sim-2',
    statement: 'Um algoritmo é:',
    options: [
      'Uma sequência de passos para resolver um problema',
      'Um tipo de linguagem de programação',
      'Um erro no código',
      'Um programa já instalado'
    ],
    answer: 0
  },
  {
    id: 'sim-3',
    statement: 'Lógica de programação é:',
    options: [
      'Organizar pensamentos em passos para resolver problemas',
      'Decorar comandos de uma linguagem',
      'Instalar programas no computador',
      'Escrever textos longos de documentação'
    ],
    answer: 0
  },
  {
    id: 'sim-4',
    statement: 'O que caracteriza o trabalho de um desenvolvedor back-end?',
    options: [
      'A lógica e o funcionamento interno do sistema',
      'A parte visual que o usuário vê',
      'A criação de artes e ilustrações',
      'O atendimento ao cliente'
    ],
    answer: 0
  },
  {
    id: 'sim-5',
    statement: 'O desenvolvedor front-end cuida de:',
    options: [
      'A parte visual com que o usuário interage',
      'O banco de dados do sistema',
      'A instalação dos servidores',
      'O contrato com o cliente'
    ],
    answer: 0
  },
  {
    id: 'sim-6',
    statement: 'Quem trabalha com dados, automação e inteligência artificial atua na área de:',
    options: ['Data/IA', 'Mobile', 'Front-end', 'Suporte'],
    answer: 0
  },
  {
    id: 'sim-7',
    statement: 'Corrigir bugs significa:',
    options: [
      'Consertar comportamentos diferentes do esperado no sistema',
      'Apagar o projeto e começar de novo',
      'Trocar a linguagem de programação',
      'Aumentar a memória do computador'
    ],
    answer: 0
  },

  /* ------------------ Fase 2 — Python Fundamentos ------------------ */
  {
    id: 'sim-8',
    statement: 'Qual comando do Python lê o que o usuário digita?',
    options: ['input()', 'print()', 'type()', 'str()'],
    answer: 0
  },
  {
    id: 'sim-9',
    statement: 'Qual comando exibe uma informação na tela?',
    options: ['print()', 'input()', 'int()', 'format()'],
    answer: 0
  },
  {
    id: 'sim-10',
    statement: 'Qual função converte um valor para número inteiro?',
    options: ['int()', 'float()', 'str()', 'isalpha()'],
    answer: 0
  },
  {
    id: 'sim-11',
    statement: 'Quais são os próximos passos indicados após concluir a trilha?',
    options: [
      'Python intermediário, orientação a objetos, banco de dados, APIs e frameworks',
      'Trocar de área de atuação',
      'Parar de estudar por seis meses',
      'Refazer todas as fases desde o início'
    ],
    answer: 0
  },
  {
    id: 'sim-12',
    statement: 'O que a função type() retorna?',
    options: [
      'O tipo do dado informado',
      'O tamanho do texto',
      'A soma dos valores',
      'O nome da variável'
    ],
    answer: 0
  },
  {
    id: 'sim-13',
    statement: 'Qual estrutura guarda pares de chave e valor?',
    options: ['Dicionário', 'Lista', 'Função', 'String'],
    answer: 0
  },
  {
    id: 'sim-14',
    statement: 'Em uma lista com ["A", "B", "C"], qual é o índice de "A"?',
    options: ['0', '1', '3', '-1'],
    answer: 0
  },
  {
    id: 'sim-15',
    statement: 'O que é uma f-string?',
    options: [
      'Uma forma de inserir variáveis dentro de um texto',
      'Uma função que soma números',
      'Um tipo de lista',
      'Um comando de repetição'
    ],
    answer: 0
  },
  {
    id: 'sim-16',
    statement: 'Qual palavra define uma função em Python?',
    options: ['def', 'for', 'if', 'print'],
    answer: 0
  },
  {
    id: 'sim-17',
    statement: 'O que é retorno de uma função?',
    options: [
      'O valor que a função devolve depois de executar',
      'O nome dado à função',
      'A quantidade de parâmetros',
      'O arquivo onde a função está salva'
    ],
    answer: 0
  },
  {
    id: 'sim-18',
    statement: 'O método isnumeric() serve para:',
    options: [
      'Verificar se o texto contém apenas números',
      'Somar dois números',
      'Converter texto em número',
      'Contar as letras de um texto'
    ],
    answer: 0
  },
  {
    id: 'sim-19',
    statement: 'O método isalpha() verifica se o texto contém:',
    options: ['Apenas letras', 'Apenas números', 'Letras e números', 'Espaços em branco'],
    answer: 0
  },
  {
    id: 'sim-20',
    statement: 'Por que evitar repetição de código?',
    options: [
      'Porque cada correção teria de ser feita em vários lugares',
      'Porque deixa o arquivo com menos linhas',
      'Porque o Git não aceita código repetido',
      'Porque impede o uso de funções'
    ],
    answer: 0
  },

  /* ----------------- Fase 3 — Lógica de Programação ---------------- */
  {
    id: 'sim-21',
    statement: 'Qual estrutura repete um bloco enquanto a condição for verdadeira?',
    options: ['while', 'if', 'else', 'def'],
    answer: 0
  },
  {
    id: 'sim-22',
    statement: 'Qual estrutura percorre item a item uma sequência?',
    options: ['for', 'while', 'elif', 'return'],
    answer: 0
  },
  {
    id: 'sim-23',
    statement: 'O elif serve para:',
    options: [
      'Testar outra condição quando a anterior for falsa',
      'Encerrar o programa',
      'Criar uma função nova',
      'Repetir um bloco de código'
    ],
    answer: 0
  },
  {
    id: 'sim-24',
    statement: 'O else é executado quando:',
    options: [
      'A condição do if é falsa',
      'A condição do if é verdadeira',
      'O programa é iniciado',
      'A repetição termina'
    ],
    answer: 0
  },
  {
    id: 'sim-25',
    statement: 'Quais são exemplos de operadores lógicos?',
    options: ['and, or e not', '+, - e *', '>, < e ==', 'int, float e str'],
    answer: 0
  },
  {
    id: 'sim-26',
    statement: 'Quais são exemplos de operadores relacionais?',
    options: ['>, < e ==', 'and, or e not', '+, - e /', 'def, return e input'],
    answer: 0
  },
  {
    id: 'sim-27',
    statement: 'A condição "A and B" é verdadeira quando:',
    options: [
      'A e B são verdadeiras ao mesmo tempo',
      'Pelo menos uma é verdadeira',
      'As duas são falsas',
      'Apenas B é verdadeira'
    ],
    answer: 0
  },
  {
    id: 'sim-28',
    statement: 'Qual a diferença entre = e ==?',
    options: [
      '= atribui um valor e == compara valores',
      '= compara e == atribui',
      'Os dois fazem a mesma coisa',
      'Nenhum dos dois existe em Python'
    ],
    answer: 0
  },
  {
    id: 'sim-29',
    statement: 'O que é um laço infinito?',
    options: [
      'Uma repetição que nunca atinge a condição de parada',
      'Uma função sem parâmetros',
      'Uma lista muito grande',
      'Um erro de digitação no nome da variável'
    ],
    answer: 0
  },
  {
    id: 'sim-30',
    statement: 'Fluxo de execução é:',
    options: [
      'A ordem em que as instruções são executadas',
      'A quantidade de linhas do programa',
      'O nome do arquivo principal',
      'A velocidade do computador'
    ],
    answer: 0
  },

  /* ---------------- Fase 4 — Prática com Exercícios ---------------- */
  {
    id: 'sim-31',
    statement: 'Qual o objetivo de resolver exercícios diariamente?',
    options: [
      'Ganhar confiança e velocidade na resolução de problemas',
      'Terminar a trilha mais rápido sem estudar',
      'Substituir o projeto prático',
      'Evitar o uso do Git'
    ],
    answer: 0
  },
  {
    id: 'sim-32',
    statement: 'Quais plataformas de exercícios a trilha indica?',
    options: [
      'FreeCodeCamp e Beecrowd',
      'Excel e PowerPoint',
      'Photoshop e Figma',
      'Trello e Slack'
    ],
    answer: 0
  },
  {
    id: 'sim-33',
    statement: 'Quais temas são praticados no FreeCodeCamp na trilha?',
    options: [
      'Python básico, condicionais, loops e funções',
      'Design de interfaces',
      'Redação técnica',
      'Administração de servidores'
    ],
    answer: 0
  },

  /* ------------- Fase 5 — Desenvolvimento de Projeto ---------------- */
  {
    id: 'sim-34',
    statement: 'Qual é o projeto prático da trilha?',
    options: [
      'Sistema de Biblioteca',
      'Rede social completa',
      'Loja virtual com pagamento',
      'Aplicativo de mensagens'
    ],
    answer: 0
  },
  {
    id: 'sim-35',
    statement: 'No Sistema de Biblioteca, qual destas NÃO é uma funcionalidade prevista?',
    options: [
      'Emitir nota fiscal de venda',
      'Cadastrar livros',
      'Registrar devoluções',
      'Consultar histórico de empréstimos'
    ],
    answer: 0
  },
  {
    id: 'sim-36',
    statement: 'Quais conceitos são aplicados no projeto da trilha?',
    options: [
      'Listas, dicionários, funções, validações, condicionais e loops',
      'Apenas variáveis e print()',
      'Somente comandos do Git',
      'Apenas orientação a objetos'
    ],
    answer: 0
  },
  {
    id: 'sim-37',
    statement: 'Para que serve o controle de disponibilidade no projeto?',
    options: [
      'Saber se o livro está emprestado ou disponível',
      'Calcular o preço do livro',
      'Definir o autor do livro',
      'Imprimir o catálogo'
    ],
    answer: 0
  },
  {
    id: 'sim-38',
    statement: 'As validações no projeto servem para:',
    options: [
      'Conferir os dados informados antes de registrar',
      'Deixar o programa mais bonito',
      'Aumentar o número de funções',
      'Substituir os testes'
    ],
    answer: 0
  },

  /* --------------------- Fase 6 — Git do Zero ----------------------- */
  {
    id: 'sim-39',
    statement: 'Para que serve o Git?',
    options: [
      'Controlar versões e o histórico de alterações do código',
      'Executar programas em Python',
      'Criar bancos de dados',
      'Editar imagens do projeto'
    ],
    answer: 0
  },
  {
    id: 'sim-40',
    statement: 'Qual comando cria um repositório Git local?',
    options: ['git init', 'git push', 'git clone', 'git log'],
    answer: 0
  },
  {
    id: 'sim-41',
    statement: 'Qual comando mostra a situação atual dos arquivos?',
    options: ['git status', 'git commit', 'git pull', 'git remote'],
    answer: 0
  },
  {
    id: 'sim-42',
    statement: 'Qual comando seleciona as alterações para o próximo commit?',
    options: ['git add', 'git log', 'git push', 'git init'],
    answer: 0
  },
  {
    id: 'sim-43',
    statement: 'Qual comando grava as alterações no histórico do Git?',
    options: ['git commit', 'git status', 'git add', 'git remote'],
    answer: 0
  },
  {
    id: 'sim-44',
    statement: 'Qual comando exibe o histórico de commits?',
    options: ['git log', 'git status', 'git clone', 'git config'],
    answer: 0
  },
  {
    id: 'sim-45',
    statement: 'O comando git config --global user.email define:',
    options: [
      'O e-mail associado aos seus commits',
      'O endereço do repositório remoto',
      'A senha da sua conta',
      'O nome do projeto'
    ],
    answer: 0
  },

  /* -------------------- Fase 7 — GitHub do Zero --------------------- */
  {
    id: 'sim-46',
    statement: 'Qual comando envia os commits para o repositório remoto?',
    options: ['git push', 'git pull', 'git init', 'git status'],
    answer: 0
  },
  {
    id: 'sim-47',
    statement: 'Qual comando traz as alterações do repositório remoto para o local?',
    options: ['git pull', 'git push', 'git add', 'git commit'],
    answer: 0
  },
  {
    id: 'sim-48',
    statement: 'Qual comando copia um repositório remoto para a sua máquina?',
    options: ['git clone', 'git init', 'git log', 'git status'],
    answer: 0
  },

  /* --------- Fases 8 a 10 — Portfólio, boas práticas e estudos ------ */
  {
    id: 'sim-49',
    statement: 'Uma boa prática de nomenclatura é:',
    options: [
      'Usar nomes claros para variáveis e funções',
      'Usar sempre abreviações curtas',
      'Numerar as variáveis: a1, a2, a3',
      'Escrever tudo em uma linha só'
    ],
    answer: 0
  },
  {
    id: 'sim-50',
    statement: 'Manter uma rotina de estudos depende principalmente de:',
    options: [
      'Planejamento, registro dos aprendizados e prática constante',
      'Estudar apenas na véspera das provas',
      'Assistir vídeos sem praticar',
      'Trocar de linguagem toda semana'
    ],
    answer: 0
  }
];

/** Percentual mínimo para aprovação no simulado da trilha. */
export const SIMULADO_PASSING_SCORE = 60;
