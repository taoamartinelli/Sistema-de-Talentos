import { Flashcard } from './trilha360';

/**
 * Baralho padrão da trilha: 100 flash cards distribuídos pelas 10 fases.
 * O conteúdo vem do documento "Trilha para estudos iniciantes".
 */
export const FLASHCARDS: Flashcard[] = [
  /* ---------------- Fase 1 — Introdução à Tecnologia (12) ---------------- */
  { id: 'fc-1', moduleId: 'fase-1', front: 'O que é programação?', back: 'O processo de criar instruções para que um computador execute determinadas tarefas.' },
  { id: 'fc-2', moduleId: 'fase-1', front: 'O que é um algoritmo?', back: 'Uma sequência de passos para resolver um problema.' },
  { id: 'fc-3', moduleId: 'fase-1', front: 'Dê um exemplo de algoritmo do dia a dia.', back: 'Fazer um café: pegar a xícara, adicionar café, aquecer a água, misturar e servir.' },
  { id: 'fc-4', moduleId: 'fase-1', front: 'O que é lógica de programação?', back: 'A capacidade de organizar pensamentos em uma sequência de passos para resolver problemas de forma eficiente.' },
  { id: 'fc-5', moduleId: 'fase-1', front: 'O que faz um desenvolvedor?', back: 'Cria, mantém e melhora sistemas, aplicativos, sites e softwares, transformando necessidades em soluções.' },
  { id: 'fc-6', moduleId: 'fase-1', front: 'Cite três atividades de um desenvolvedor.', back: 'Desenvolver sistemas, corrigir bugs e testar aplicações — além de documentar, trabalhar com bancos de dados e colaborar com a equipe.' },
  { id: 'fc-7', moduleId: 'fase-1', front: 'O que faz um desenvolvedor front-end?', back: 'Desenvolve a parte visual, aquilo que o usuário vê e utiliza.' },
  { id: 'fc-8', moduleId: 'fase-1', front: 'O que faz um desenvolvedor back-end?', back: 'Desenvolve a lógica e o funcionamento interno do sistema.' },
  { id: 'fc-9', moduleId: 'fase-1', front: 'O que é um desenvolvedor full stack?', back: 'Aquele que trabalha tanto no front-end quanto no back-end.' },
  { id: 'fc-10', moduleId: 'fase-1', front: 'O que faz um desenvolvedor mobile?', back: 'Desenvolve aplicativos para celulares.' },
  { id: 'fc-11', moduleId: 'fase-1', front: 'Com o que trabalha a área de Data/IA?', back: 'Com dados, automação e inteligência artificial.' },
  { id: 'fc-12', moduleId: 'fase-1', front: 'O que é um bug?', back: 'Um erro no sistema — o programa se comporta de forma diferente da esperada. Corrigir bugs é parte do trabalho do desenvolvedor.' },

  /* ------------------- Fase 2 — Python Fundamentos (16) ------------------ */
  { id: 'fc-13', moduleId: 'fase-2', front: 'Para que serve print()?', back: 'Exibir informações na tela.' },
  { id: 'fc-14', moduleId: 'fase-2', front: 'Para que serve input()?', back: 'Ler o que o usuário digita. O valor vem sempre como texto.' },
  { id: 'fc-15', moduleId: 'fase-2', front: 'Para que serve type()?', back: 'Mostrar o tipo de dado de um valor ou variável.' },
  { id: 'fc-16', moduleId: 'fase-2', front: 'O que faz int()?', back: 'Converte um valor para número inteiro.' },
  { id: 'fc-17', moduleId: 'fase-2', front: 'O que faz float()?', back: 'Converte um valor para número decimal.' },
  { id: 'fc-18', moduleId: 'fase-2', front: 'O que faz str()?', back: 'Converte um valor para texto.' },
  { id: 'fc-19', moduleId: 'fase-2', front: 'O que é uma f-string?', back: 'Uma forma de montar texto inserindo variáveis diretamente: f"Olá, {nome}".' },
  { id: 'fc-20', moduleId: 'fase-2', front: 'Para que serve format()?', back: 'Montar um texto substituindo os marcadores {} pelos valores informados.' },
  { id: 'fc-21', moduleId: 'fase-2', front: 'O que é uma lista?', back: 'Uma estrutura que guarda vários valores em sequência, acessados por índice.' },
  { id: 'fc-22', moduleId: 'fase-2', front: 'Qual é o índice do primeiro item de uma lista?', back: 'Zero. Em ["A", "B", "C"], o item "A" está no índice 0.' },
  { id: 'fc-23', moduleId: 'fase-2', front: 'O que é um dicionário?', back: 'Uma estrutura que guarda pares de chave e valor, como {"nome": "Ana"}.' },
  { id: 'fc-24', moduleId: 'fase-2', front: 'Lista ou dicionário: qual usar?', back: 'Lista quando a ordem importa e o acesso é por posição; dicionário quando o acesso é por um nome (chave).' },
  { id: 'fc-25', moduleId: 'fase-2', front: 'Como se define uma função em Python?', back: 'Com a palavra def, o nome da função e os parênteses: def somar(a, b):' },
  { id: 'fc-26', moduleId: 'fase-2', front: 'O que é um parâmetro de função?', back: 'O valor de entrada que a função recebe para trabalhar.' },
  { id: 'fc-27', moduleId: 'fase-2', front: 'O que é o retorno de uma função?', back: 'O valor que ela devolve ao final, com o comando return.' },
  { id: 'fc-28', moduleId: 'fase-2', front: 'O que fazem isnumeric(), isalpha() e isalnum()?', back: 'Validam o conteúdo de um texto: apenas números, apenas letras, ou letras e números.' },

  /* ------------------ Fase 3 — Lógica de Programação (14) ---------------- */
  { id: 'fc-29', moduleId: 'fase-3', front: 'Para que serve o if?', back: 'Executar um bloco de código quando a condição for verdadeira.' },
  { id: 'fc-30', moduleId: 'fase-3', front: 'Para que serve o else?', back: 'Executar um bloco quando a condição do if for falsa.' },
  { id: 'fc-31', moduleId: 'fase-3', front: 'Para que serve o elif?', back: 'Testar outra condição quando a anterior for falsa.' },
  { id: 'fc-32', moduleId: 'fase-3', front: 'O que faz o for?', back: 'Percorre uma sequência de itens, executando o bloco para cada um.' },
  { id: 'fc-33', moduleId: 'fase-3', front: 'O que faz o while?', back: 'Repete o bloco enquanto a condição for verdadeira.' },
  { id: 'fc-34', moduleId: 'fase-3', front: 'Quando usar for e quando usar while?', back: 'for quando você sabe o que vai percorrer; while quando a repetição depende de uma condição.' },
  { id: 'fc-35', moduleId: 'fase-3', front: 'Quais são os operadores matemáticos?', back: 'Soma (+), subtração (-), multiplicação (*) e divisão (/), entre outros.' },
  { id: 'fc-36', moduleId: 'fase-3', front: 'Quais são os operadores relacionais?', back: 'Maior (>), menor (<), maior ou igual (>=), menor ou igual (<=), igual (==) e diferente (!=).' },
  { id: 'fc-37', moduleId: 'fase-3', front: 'Quais são os operadores lógicos?', back: 'and, or e not.' },
  { id: 'fc-38', moduleId: 'fase-3', front: 'Quando "A and B" é verdadeiro?', back: 'Somente quando A e B são verdadeiros ao mesmo tempo.' },
  { id: 'fc-39', moduleId: 'fase-3', front: 'Quando "A or B" é verdadeiro?', back: 'Quando pelo menos um dos dois for verdadeiro.' },
  { id: 'fc-40', moduleId: 'fase-3', front: 'O que faz o operador not?', back: 'Inverte o resultado: o que era verdadeiro vira falso, e vice-versa.' },
  { id: 'fc-41', moduleId: 'fase-3', front: 'Qual a diferença entre = e ==?', back: '= atribui um valor a uma variável; == compara dois valores.' },
  { id: 'fc-42', moduleId: 'fase-3', front: 'O que é um laço infinito?', back: 'Uma repetição que nunca atinge a condição de parada e não termina sozinha.' },

  /* ---------------- Fase 4 — Prática com Exercícios (6) ------------------ */
  { id: 'fc-43', moduleId: 'fase-4', front: 'Por que resolver exercícios diariamente?', back: 'Para ganhar confiança na resolução de problemas e velocidade na programação.' },
  { id: 'fc-44', moduleId: 'fase-4', front: 'O que é o FreeCodeCamp?', back: 'Uma plataforma gratuita de exercícios usada na trilha para praticar Python básico, condicionais, loops e funções.' },
  { id: 'fc-45', moduleId: 'fase-4', front: 'O que é o Beecrowd?', back: 'Uma plataforma de desafios de lógica e programação, usada na prática da trilha.' },
  { id: 'fc-46', moduleId: 'fase-4', front: 'Quais temas praticar na fase de exercícios?', back: 'Python básico, estruturas condicionais, loops e funções.' },
  { id: 'fc-47', moduleId: 'fase-4', front: 'Qual o resultado esperado da fase de prática?', back: 'Confiança para resolver problemas e mais velocidade ao programar.' },
  { id: 'fc-48', moduleId: 'fase-4', front: 'Por que praticar antes de partir para o projeto?', back: 'Porque a prática fixa os conceitos e reduz a dificuldade na hora de construir o projeto.' },

  /* ------------- Fase 5 — Desenvolvimento de Projeto (8) ----------------- */
  { id: 'fc-49', moduleId: 'fase-5', front: 'Qual é o projeto prático da trilha?', back: 'O Sistema de Biblioteca, feito em Python.' },
  { id: 'fc-50', moduleId: 'fase-5', front: 'Quais funcionalidades o Sistema de Biblioteca tem?', back: 'Cadastro de usuários e livros, empréstimos, devoluções, histórico e controle de disponibilidade.' },
  { id: 'fc-51', moduleId: 'fase-5', front: 'Quais conceitos são usados no projeto?', back: 'Listas, dicionários, funções, validações, estruturas condicionais e loops.' },
  { id: 'fc-52', moduleId: 'fase-5', front: 'Para que serve o controle de disponibilidade?', back: 'Para saber se o livro está emprestado ou disponível para retirada.' },
  { id: 'fc-53', moduleId: 'fase-5', front: 'Onde entram as validações no projeto?', back: 'Ao conferir os dados digitados antes de cadastrar ou registrar qualquer operação.' },
  { id: 'fc-54', moduleId: 'fase-5', front: 'O que é o histórico de empréstimos?', back: 'O registro de quem pegou cada livro e quando, permitindo consultar depois.' },
  { id: 'fc-55', moduleId: 'fase-5', front: 'Qual o resultado esperado da fase de projeto?', back: 'Construir um sistema funcional utilizando Python.' },
  { id: 'fc-56', moduleId: 'fase-5', front: 'Por que fazer um projeto prático?', back: 'Para aplicar de forma integrada tudo o que foi estudado nas fases anteriores.' },

  /* --------------------- Fase 6 — Git do Zero (14) ----------------------- */
  { id: 'fc-57', moduleId: 'fase-6', front: 'O que é o Git?', back: 'Uma ferramenta de controle de versão que guarda o histórico de alterações do código.' },
  { id: 'fc-58', moduleId: 'fase-6', front: 'Para que serve o controle de versão?', back: 'Guardar o histórico, permitir voltar atrás e facilitar o trabalho em equipe.' },
  { id: 'fc-59', moduleId: 'fase-6', front: 'O que faz git init?', back: 'Cria um repositório Git na pasta do projeto.' },
  { id: 'fc-60', moduleId: 'fase-6', front: 'O que faz git status?', back: 'Mostra a situação atual: o que mudou, o que está selecionado e o que falta commitar.' },
  { id: 'fc-61', moduleId: 'fase-6', front: 'O que faz git add?', back: 'Seleciona as alterações que entrarão no próximo commit.' },
  { id: 'fc-62', moduleId: 'fase-6', front: 'O que faz git commit?', back: 'Grava as alterações selecionadas no histórico do repositório.' },
  { id: 'fc-63', moduleId: 'fase-6', front: 'O que faz git log?', back: 'Exibe o histórico de commits do repositório.' },
  { id: 'fc-64', moduleId: 'fase-6', front: 'Para que serve git config --global user.name?', back: 'Definir o nome que aparecerá como autor dos commits.' },
  { id: 'fc-65', moduleId: 'fase-6', front: 'Para que serve git config --global user.email?', back: 'Definir o e-mail associado aos seus commits.' },
  { id: 'fc-66', moduleId: 'fase-6', front: 'O que é um commit?', back: 'Um registro de alterações salvo no histórico, com autor, data e mensagem.' },
  { id: 'fc-67', moduleId: 'fase-6', front: 'Por que escrever boas mensagens de commit?', back: 'Porque elas explicam o que mudou e tornam o histórico compreensível depois.' },
  { id: 'fc-68', moduleId: 'fase-6', front: 'Como o Git ajuda no trabalho em equipe?', back: 'Cada pessoa altera sua parte e as mudanças são reunidas com histórico de quem fez o quê.' },
  { id: 'fc-69', moduleId: 'fase-6', front: 'Qual a diferença entre Git e GitHub?', back: 'Git é a ferramenta de versionamento; GitHub é o serviço que hospeda os repositórios na internet.' },
  { id: 'fc-70', moduleId: 'fase-6', front: 'Qual é o fluxo básico do Git?', back: 'Alterar os arquivos → git add → git commit.' },

  /* -------------------- Fase 7 — GitHub do Zero (10) --------------------- */
  { id: 'fc-71', moduleId: 'fase-7', front: 'O que é o GitHub?', back: 'Uma plataforma para armazenar, compartilhar e publicar repositórios de código.' },
  { id: 'fc-72', moduleId: 'fase-7', front: 'O que é um repositório?', back: 'O projeto versionado: seus arquivos e todo o histórico de alterações.' },
  { id: 'fc-73', moduleId: 'fase-7', front: 'O que faz git remote add origin?', back: 'Liga o repositório local a um repositório remoto.' },
  { id: 'fc-74', moduleId: 'fase-7', front: 'O que faz git push?', back: 'Envia os commits locais para o repositório remoto.' },
  { id: 'fc-75', moduleId: 'fase-7', front: 'O que faz git pull?', back: 'Traz as alterações do repositório remoto para o local.' },
  { id: 'fc-76', moduleId: 'fase-7', front: 'O que faz git clone?', back: 'Copia um repositório remoto para a sua máquina.' },
  { id: 'fc-77', moduleId: 'fase-7', front: 'O que significa "origin"?', back: 'É o apelido padrão dado ao repositório remoto principal.' },
  { id: 'fc-78', moduleId: 'fase-7', front: 'Como o GitHub funciona como portfólio?', back: 'Os projetos publicados ficam visíveis e mostram na prática o que você sabe fazer.' },
  { id: 'fc-79', moduleId: 'fase-7', front: 'O que aparece no histórico do GitHub?', back: 'Os commits, com autor, data e as alterações feitas.' },
  { id: 'fc-80', moduleId: 'fase-7', front: 'Quais são os primeiros passos no GitHub?', back: 'Criar a conta, criar o repositório e publicar o projeto.' },

  /* ------------ Fase 8 — Portfólio e Evolução Contínua (6) --------------- */
  { id: 'fc-81', moduleId: 'fase-8', front: 'Quais projetos a trilha recomenda?', back: 'Sistema de Biblioteca, Lista de Tarefas, Calculadora, Cadastro de Usuários e Conversor de Moedas.' },
  { id: 'fc-82', moduleId: 'fase-8', front: 'Quais são os próximos passos após a trilha?', back: 'Python intermediário, orientação a objetos, banco de dados, APIs e frameworks Python.' },
  { id: 'fc-83', moduleId: 'fase-8', front: 'O que é um portfólio?', back: 'O conjunto de projetos que demonstram, na prática, o que você é capaz de construir.' },
  { id: 'fc-84', moduleId: 'fase-8', front: 'Por que manter o portfólio atualizado?', back: 'Porque ele mostra sua evolução ao longo do tempo, e não apenas um momento.' },
  { id: 'fc-85', moduleId: 'fase-8', front: 'O que é orientação a objetos?', back: 'Uma forma de organizar o código em objetos que reúnem dados e comportamentos. É um dos próximos passos da trilha.' },
  { id: 'fc-86', moduleId: 'fase-8', front: 'Qual o resultado esperado da fase de portfólio?', back: 'Ter base sólida para continuar os estudos de forma independente.' },

  /* -------------- Fase 9 — Boas Práticas de Programação (8) -------------- */
  { id: 'fc-87', moduleId: 'fase-9', front: 'Qual é a boa prática de nomenclatura?', back: 'Usar nomes claros para variáveis e funções, evitando abreviações desnecessárias.' },
  { id: 'fc-88', moduleId: 'fase-9', front: 'O que é separação de responsabilidades?', back: 'Cada parte do código cuidar de uma única tarefa bem definida.' },
  { id: 'fc-89', moduleId: 'fase-9', front: 'Por que reutilizar funções?', back: 'Para evitar repetição, reduzir erros e facilitar a manutenção.' },
  { id: 'fc-90', moduleId: 'fase-9', front: 'Quando usar comentários?', back: 'Em partes importantes ou não óbvias do código, para explicar a intenção.' },
  { id: 'fc-91', moduleId: 'fase-9', front: 'O que é validação de entradas?', back: 'Conferir os dados informados antes de usá-los, evitando falhas.' },
  { id: 'fc-92', moduleId: 'fase-9', front: 'Por que dar mensagens de erro claras?', back: 'Para que o usuário entenda o que aconteceu e saiba o que fazer em seguida.' },
  { id: 'fc-93', moduleId: 'fase-9', front: 'O que é refatorar?', back: 'Melhorar a organização do código sem mudar o que ele faz.' },
  { id: 'fc-94', moduleId: 'fase-9', front: 'Qual o problema de repetir código?', back: 'Toda correção precisa ser feita em vários lugares, o que aumenta a chance de erro.' },

  /* ---------------- Fase 10 — Organização dos Estudos (6) ---------------- */
  { id: 'fc-95', moduleId: 'fase-10', front: 'O que envolve o planejamento dos estudos?', back: 'Definir metas e organizar a rotina semanal e diária.' },
  { id: 'fc-96', moduleId: 'fase-10', front: 'Por que registrar os aprendizados?', back: 'As anotações viram referência para consulta e ajudam a fixar o conteúdo.' },
  { id: 'fc-97', moduleId: 'fase-10', front: 'Para que servem as revisões periódicas?', back: 'Para retomar o que já foi estudado e evitar esquecer com o tempo.' },
  { id: 'fc-98', moduleId: 'fase-10', front: 'O que é prática constante?', back: 'Resolver exercícios com frequência e continuar desenvolvendo projetos.' },
  { id: 'fc-99', moduleId: 'fase-10', front: 'O que é uma trilha de estudo?', back: 'Uma sequência organizada de temas, do mais básico ao mais avançado.' },
  { id: 'fc-100', moduleId: 'fase-10', front: 'O que é uma rotina de estudos sustentável?', back: 'Aquela que você consegue manter ao longo do tempo, sem depender de esforços pontuais.' }
];
