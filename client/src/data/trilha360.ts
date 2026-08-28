/**
 * Conteúdo da "Trilha para estudos iniciantes" (documento oficial da formação).
 * Alimenta as sub-páginas de Módulos, Conteúdos, Flash cards e Simulado.
 */

export interface TopicBlock {
  title: string;
  text?: string;
  items?: string[];
}

export interface Module {
  id: string;
  number: number;
  title: string;
  objective: string;
  topics: TopicBlock[];
  practice?: string[];
  outcome: string;
}

export interface Flashcard {
  id: string;
  moduleId: string;
  front: string;
  back: string;
}

export interface SimuladoQuestion {
  id: string;
  statement: string;
  options: string[];
  answer: number;
}

export const TRILHA_OVERVIEW = {
  title: 'Trilha para estudos iniciantes',
  intro:
    'Guia de aprendizado para quem está iniciando na área de tecnologia e quer construir uma base sólida em programação, versionamento de código e desenvolvimento de projetos. O conteúdo é progressivo: vai dos conceitos mais básicos até a aplicação prática em projetos reais.',
  pillars: [
    'Fundamentos da tecnologia e programação',
    'Desenvolvimento da lógica de programação',
    'Aprendizado da linguagem Python',
    'Resolução de problemas através de exercícios práticos',
    'Desenvolvimento de projetos para aplicação dos conhecimentos',
    'Utilização de Git para controle de versão',
    'Utilização de GitHub para armazenamento e compartilhamento de projetos',
    'Boas práticas de organização e documentação de código',
    'Autonomia para continuar aprendendo novas tecnologias'
  ],
  audience: [
    'Pessoas sem experiência em programação',
    'Estudantes iniciantes na área de tecnologia',
    'Pessoas em transição de carreira'
  ],
  prerequisite: 'Não é necessário conhecimento prévio. A trilha está organizada em ordem progressiva para permitir aprendizado do zero.',
  completion: [
    'Compreender os fundamentos da programação',
    'Utilizar Python para resolver problemas',
    'Desenvolver pequenos sistemas',
    'Utilizar Git para controle de versão',
    'Utilizar GitHub para armazenamento de projetos',
    'Criar e manter um portfólio básico',
    'Documentar projetos e aprendizados',
    'Ter autonomia para continuar evoluindo na área de tecnologia'
  ]
};

export const MODULES: Module[] = [
  {
    id: 'fase-1',
    number: 1,
    title: 'Introdução à Tecnologia',
    objective: 'Entender os conceitos básicos da área de tecnologia e programação.',
    topics: [
      {
        title: 'O que é Programação?',
        text: 'É o processo de criar instruções para que um computador execute determinadas tarefas.'
      },
      {
        title: 'O que é um Algoritmo?',
        text: 'É uma sequência de passos para resolver um problema.',
        items: ['Ligar o computador', 'Abrir o navegador', 'Acessar um site']
      },
      {
        title: 'O que é Lógica de Programação?',
        text: 'É a capacidade de organizar pensamentos e criar uma sequência de passos para resolver problemas de forma eficiente. Exemplo — fazer um café: pegar a xícara, adicionar café, aquecer a água, misturar e servir. Um programa também segue uma sequência lógica de instruções para alcançar um resultado.'
      },
      {
        title: 'O que faz um Desenvolvedor?',
        text: 'É o profissional responsável por criar, manter e melhorar sistemas, aplicativos, sites e softwares.',
        items: [
          'Desenvolver sistemas e aplicações',
          'Criar novas funcionalidades',
          'Corrigir erros (bugs) encontrados nos sistemas',
          'Realizar manutenção e melhorias em projetos existentes',
          'Testar o funcionamento das aplicações',
          'Trabalhar com bancos de dados',
          'Documentar códigos e processos',
          'Colaborar com outros profissionais da equipe'
        ]
      },
      {
        title: 'Tipos de Desenvolvedor',
        items: [
          'Front-end: desenvolve a parte visual que o usuário vê',
          'Back-end: desenvolve a lógica e o funcionamento interno do sistema',
          'Full Stack: trabalha no front-end e no back-end',
          'Mobile: desenvolve aplicativos para celulares',
          'Data/IA: trabalha com dados, automação e inteligência artificial'
        ]
      },
      {
        title: 'Exemplo prático',
        text: 'Uma biblioteca quer controlar empréstimos de livros. O desenvolvedor pode criar um sistema para cadastrar livros e usuários, registrar empréstimos e devoluções e consultar o histórico.'
      }
    ],
    practice: [
      'Assistir vídeos introdutórios',
      'Pesquisar sobre as áreas da tecnologia',
      'Entender como funciona o desenvolvimento de software'
    ],
    outcome: 'Compreender o básico sobre tecnologia e programação, e o papel do desenvolvedor na criação de soluções.'
  },
  {
    id: 'fase-2',
    number: 2,
    title: 'Python Fundamentos',
    objective: 'Aprender os conceitos fundamentais da linguagem Python.',
    topics: [
      { title: 'Entrada e saída de dados', items: ['print()', 'input()'] },
      { title: 'Tipos de dados', items: ['type()', 'int()', 'float()', 'str()'] },
      { title: 'Manipulação de strings', items: ['format()', 'f-string', 'Métodos básicos de texto'] },
      { title: 'Estruturas de dados', items: ['Listas', 'Dicionários'] },
      { title: 'Funções', items: ['Definição de funções', 'Parâmetros', 'Retorno'] },
      { title: 'Validação de dados', items: ['isnumeric()', 'isalpha()', 'isalnum()'] }
    ],
    practice: [
      'Exercícios básicos',
      'Pequenos programas',
      'Desafios de entrada e saída de dados',
      'Exercícios de lógica utilizando Python'
    ],
    outcome: 'Desenvolver programas simples em Python e compreender os principais conceitos da linguagem.'
  },
  {
    id: 'fase-3',
    number: 3,
    title: 'Lógica de Programação',
    objective: 'Resolver problemas utilizando raciocínio lógico e estruturas básicas da programação.',
    topics: [
      { title: 'Estruturas condicionais', items: ['if', 'elif', 'else'] },
      { title: 'Estruturas de repetição', items: ['for', 'while'] },
      { title: 'Operadores', items: ['Matemáticos', 'Relacionais', 'Lógicos'] },
      { title: 'Resolução de problemas', items: ['Fluxo de execução', 'Tomada de decisão', 'Repetição de tarefas'] }
    ],
    practice: ['Exercícios de lógica', 'Desafios simples', 'Exercícios no FreeCodeCamp', 'Exercícios no Beecrowd'],
    outcome: 'Compreender como criar soluções para problemas utilizando lógica de programação.'
  },
  {
    id: 'fase-4',
    number: 4,
    title: 'Prática com Exercícios',
    objective: 'Fixar os conhecimentos adquiridos através da resolução de exercícios.',
    topics: [
      {
        title: 'FreeCodeCamp',
        items: ['Python básico', 'Estruturas condicionais', 'Loops', 'Funções']
      }
    ],
    practice: ['Resolver exercícios diariamente'],
    outcome: 'Desenvolver confiança na resolução de problemas e ganhar velocidade na programação.'
  },
  {
    id: 'fase-5',
    number: 5,
    title: 'Desenvolvimento de Projeto',
    objective: 'Aplicar os conhecimentos adquiridos em um projeto prático.',
    topics: [
      {
        title: 'Projeto: Sistema de Biblioteca',
        items: [
          'Cadastro de usuários',
          'Cadastro de livros',
          'Empréstimos',
          'Devoluções',
          'Histórico de empréstimos',
          'Controle de disponibilidade'
        ]
      },
      {
        title: 'Conceitos utilizados',
        items: ['Listas', 'Dicionários', 'Funções', 'Validações', 'Estruturas condicionais', 'Loops']
      }
    ],
    outcome: 'Construir um sistema funcional utilizando Python.'
  },
  {
    id: 'fase-6',
    number: 6,
    title: 'Git do Zero',
    objective: 'Aprender o conceito de versionamento de código.',
    topics: [
      { title: 'O que é Git', items: ['Controle de versões', 'Histórico de alterações', 'Trabalho em equipe'] },
      { title: 'Instalação e configuração inicial', items: ['git config --global user.name', 'git config --global user.email'] },
      { title: 'Principais comandos', items: ['git init', 'git status', 'git add', 'git commit', 'git log'] }
    ],
    outcome: 'Compreender e utilizar os principais recursos do Git.'
  },
  {
    id: 'fase-7',
    number: 7,
    title: 'GitHub do Zero',
    objective: 'Aprender a armazenar e compartilhar projetos utilizando GitHub.',
    topics: [
      { title: 'O que é GitHub', items: ['Repositórios', 'Commits', 'Histórico', 'Portfólio'] },
      { title: 'Primeiros passos', items: ['Criação de conta', 'Criação de repositórios', 'Publicação de projetos'] },
      { title: 'Principais comandos', items: ['git remote add origin', 'git push', 'git pull', 'git clone'] }
    ],
    outcome: 'Publicar projetos e utilizar o GitHub como portfólio.'
  },
  {
    id: 'fase-8',
    number: 8,
    title: 'Portfólio e Evolução Contínua',
    objective: 'Preparar o participante para continuar evoluindo na área de tecnologia.',
    topics: [
      {
        title: 'Projetos recomendados',
        items: ['Sistema de Biblioteca', 'Lista de Tarefas', 'Calculadora', 'Cadastro de Usuários', 'Conversor de Moedas']
      },
      {
        title: 'Próximos passos',
        items: ['Python intermediário', 'Orientação a Objetos', 'Banco de dados', 'APIs', 'Frameworks Python']
      }
    ],
    outcome: 'Ter uma base sólida para continuar os estudos de forma independente.'
  },
  {
    id: 'fase-9',
    number: 9,
    title: 'Boas Práticas de Programação',
    objective: 'Aprender práticas que ajudam a escrever códigos organizados, legíveis e fáceis de manter.',
    topics: [
      {
        title: 'Nomenclatura',
        items: ['Nomes claros para variáveis', 'Nomes claros para funções', 'Evitar abreviações desnecessárias']
      },
      {
        title: 'Organização de código',
        items: ['Separação de responsabilidades', 'Reutilização de funções', 'Evitar repetição de código']
      },
      { title: 'Comentários', items: ['Quando utilizar comentários', 'Como documentar partes importantes do código'] },
      {
        title: 'Tratamento de erros',
        items: ['Validação de entradas', 'Mensagens claras para o usuário', 'Prevenção de falhas comuns']
      }
    ],
    practice: [
      'Refatorar exercícios já realizados',
      'Melhorar o projeto Sistema de Biblioteca',
      'Aplicar validações e organização no código'
    ],
    outcome: 'Desenvolver códigos mais limpos, organizados e fáceis de entender.'
  },
  {
    id: 'fase-10',
    number: 10,
    title: 'Organização dos Estudos',
    objective: 'Desenvolver hábitos que auxiliem na continuidade dos estudos e evolução profissional.',
    topics: [
      { title: 'Planejamento', items: ['Definição de metas', 'Organização semanal', 'Organização diária'] },
      { title: 'Documentação', items: ['Registro de aprendizados', 'Criação de anotações', 'Construção de trilhas de estudo'] },
      { title: 'Prática constante', items: ['Exercícios frequentes', 'Revisões periódicas', 'Desenvolvimento de projetos'] }
    ],
    outcome: 'Criar uma rotina de estudos sustentável e organizada.'
  }
];
