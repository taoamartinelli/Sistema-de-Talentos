export interface Question {
  id: string;
  statement: string;
  options: string[];
  /** Índice da alternativa correta em `options`. */
  answer: number;
}

export interface Assessment {
  key: AssessmentKey;
  title: string;
  subtitle: string;
  description: string;
  questions: Question[];
}

export type AssessmentKey = 'desenvolvimento' | 'analise';

const DEVELOPMENT_QUESTIONS: Question[] = [
  {
    id: 'dev-1',
    statement: 'O que faz um programador?',
    options: [
      'Escreve programas para o computador',
      'Conserta cadeiras do escritório',
      'Cuida do financeiro da empresa',
      'Entrega encomendas'
    ],
    answer: 0
  },
  {
    id: 'dev-2',
    statement: 'Qual destes é uma linguagem de programação?',
    options: ['Python', 'Português', 'Excel', 'Chrome'],
    answer: 0
  },
  {
    id: 'dev-3',
    statement: 'Para que serve um site?',
    options: [
      'Mostrar informações e serviços na internet',
      'Imprimir documentos',
      'Recarregar a bateria do celular',
      'Aumentar o volume do som'
    ],
    answer: 0
  },
  {
    id: 'dev-4',
    statement: 'O que é um aplicativo (app)?',
    options: [
      'Um programa usado no celular ou no computador',
      'Um tipo de cabo de energia',
      'Um modelo de impressora',
      'Uma rede de lojas'
    ],
    answer: 0
  },
  {
    id: 'dev-5',
    statement: 'O que é a internet?',
    options: [
      'Uma rede que conecta computadores do mundo todo',
      'Um programa de edição de fotos',
      'Uma peça dentro do teclado',
      'Um tipo de arquivo'
    ],
    answer: 0
  },
  {
    id: 'dev-6',
    statement: 'Em um programa, quanto é 2 + 3?',
    options: ['5', '23', '6', '1'],
    answer: 0
  },
  {
    id: 'dev-7',
    statement: 'Qual símbolo é usado para somar?',
    options: ['+', '#', '@', '?'],
    answer: 0
  },
  {
    id: 'dev-8',
    statement: 'O que significa salvar um arquivo?',
    options: [
      'Guardar as informações para usar depois',
      'Apagar tudo o que foi escrito',
      'Enviar o arquivo para a impressora',
      'Desligar o computador'
    ],
    answer: 0
  },
  {
    id: 'dev-9',
    statement: 'Qual destes é um navegador de internet?',
    options: ['Google Chrome', 'Word', 'Calculadora', 'Bloco de Notas'],
    answer: 0
  },
  {
    id: 'dev-10',
    statement: 'Quando um programa não funciona como deveria, dizemos que ele tem:',
    options: ['Um erro', 'Uma senha', 'Uma pasta', 'Um teclado'],
    answer: 0
  },
  {
    id: 'dev-11',
    statement: 'Quem é o usuário de um sistema?',
    options: [
      'A pessoa que usa o sistema',
      'O computador onde ele está instalado',
      'O cabo de internet',
      'O nome do arquivo'
    ],
    answer: 0
  },
  {
    id: 'dev-12',
    statement: 'Para que serve uma senha?',
    options: [
      'Proteger o acesso à sua conta',
      'Aumentar a velocidade da internet',
      'Escolher a cor da tela',
      'Salvar fotos automaticamente'
    ],
    answer: 0
  },
  {
    id: 'dev-13',
    statement: 'O que é uma pasta no computador?',
    options: [
      'Um lugar para organizar arquivos',
      'Um tipo de senha',
      'Um programa de vídeo',
      'Uma página da internet'
    ],
    answer: 0
  },
  {
    id: 'dev-14',
    statement: 'Para que serve o teclado?',
    options: ['Digitar', 'Imprimir', 'Escutar música', 'Guardar arquivos'],
    answer: 0
  },
  {
    id: 'dev-15',
    statement: 'O botão "atualizar" do navegador serve para:',
    options: [
      'Carregar a página de novo',
      'Fechar o computador',
      'Apagar o histórico do celular',
      'Trocar a senha do Wi-Fi'
    ],
    answer: 0
  },
  {
    id: 'dev-16',
    statement: 'Testar um programa antes de entregar serve para:',
    options: [
      'Ver se está funcionando direito',
      'Deixar o arquivo menor',
      'Trocar a cor dos botões',
      'Aumentar o preço do projeto'
    ],
    answer: 0
  }
];

const ANALYSIS_QUESTIONS: Question[] = [
  {
    id: 'ana-1',
    statement: 'Antes de criar um sistema, o mais importante é:',
    options: [
      'Entender o que a pessoa precisa',
      'Escolher a cor do logotipo',
      'Comprar um computador novo',
      'Publicar nas redes sociais'
    ],
    answer: 0
  },
  {
    id: 'ana-2',
    statement: 'Se o cliente pediu algo e você não entendeu, o certo é:',
    options: [
      'Perguntar para ele',
      'Fazer do jeito que achar melhor',
      'Deixar para depois',
      'Pedir para outra pessoa adivinhar'
    ],
    answer: 0
  },
  {
    id: 'ana-3',
    statement: 'Anotar o que foi combinado com o cliente serve para:',
    options: [
      'Lembrar depois e evitar confusão',
      'Encher o documento de páginas',
      'Atrasar o projeto',
      'Substituir a conversa'
    ],
    answer: 0
  },
  {
    id: 'ana-4',
    statement: 'Um sistema deve resolver:',
    options: [
      'Um problema real de quem vai usar',
      'Apenas o gosto do programador',
      'Qualquer coisa que dê mais trabalho',
      'Nada em especial'
    ],
    answer: 0
  },
  {
    id: 'ana-5',
    statement: 'Uma reunião com o cliente serve para:',
    options: [
      'Alinhar o que será feito',
      'Passar o tempo',
      'Escolher o lanche da equipe',
      'Testar o código'
    ],
    answer: 0
  },
  {
    id: 'ana-6',
    statement: 'O que é um prazo?',
    options: [
      'A data combinada para entregar',
      'O nome do cliente',
      'O valor do projeto',
      'Um tipo de relatório'
    ],
    answer: 0
  },
  {
    id: 'ana-7',
    statement: 'Se o trabalho vai atrasar, o certo é:',
    options: [
      'Avisar o quanto antes',
      'Não falar nada',
      'Entregar incompleto sem explicar',
      'Esperar alguém perguntar'
    ],
    answer: 0
  },
  {
    id: 'ana-8',
    statement: 'Para que serve uma lista de tarefas?',
    options: [
      'Organizar o que precisa ser feito',
      'Decorar a mesa de trabalho',
      'Aumentar o número de reuniões',
      'Guardar senhas'
    ],
    answer: 0
  },
  {
    id: 'ana-9',
    statement: 'Prioridade significa:',
    options: [
      'O que deve ser feito primeiro',
      'O que ninguém quer fazer',
      'O que é mais caro',
      'O que ficou por último na lista'
    ],
    answer: 0
  },
  {
    id: 'ana-10',
    statement: 'O que é um feedback?',
    options: [
      'Um retorno sobre o que foi feito',
      'Um tipo de arquivo',
      'Uma reunião obrigatória',
      'Um sistema de senhas'
    ],
    answer: 0
  },
  {
    id: 'ana-11',
    statement: 'Trabalhar em equipe exige, acima de tudo:',
    options: ['Comunicação', 'Silêncio total', 'Competição', 'Trabalhar sozinho'],
    answer: 0
  },
  {
    id: 'ana-12',
    statement: 'O que é um processo?',
    options: [
      'Uma sequência de passos para chegar a um resultado',
      'Um documento assinado',
      'Um tipo de computador',
      'Uma reunião de encerramento'
    ],
    answer: 0
  },
  {
    id: 'ana-13',
    statement: 'Para melhorar um processo, primeiro é preciso:',
    options: [
      'Entender como ele funciona hoje',
      'Trocar toda a equipe',
      'Comprar um sistema novo',
      'Aumentar o prazo'
    ],
    answer: 0
  },
  {
    id: 'ana-14',
    statement: 'Quando duas pessoas pedem coisas diferentes, o melhor é:',
    options: [
      'Conversar com as duas e decidir juntos',
      'Atender quem falou mais alto',
      'Ignorar as duas',
      'Parar o projeto'
    ],
    answer: 0
  },
  {
    id: 'ana-15',
    statement: 'Mostrar o resultado para o cliente antes de finalizar serve para:',
    options: [
      'Confirmar se é isso mesmo que ele queria',
      'Adiantar o pagamento',
      'Evitar reuniões',
      'Aumentar o prazo do projeto'
    ],
    answer: 0
  },
  {
    id: 'ana-16',
    statement: 'Um relatório serve para:',
    options: [
      'Mostrar informações organizadas sobre algo',
      'Substituir o sistema',
      'Guardar arquivos de vídeo',
      'Trocar a senha do usuário'
    ],
    answer: 0
  }
];

export const ASSESSMENTS: Assessment[] = [
  {
    key: 'desenvolvimento',
    title: 'Teste de Desenvolvimento',
    subtitle: 'Noções básicas de tecnologia',
    description:
      'Perguntas simples sobre computador, internet e lógica do dia a dia. Não precisa saber programar.',
    questions: DEVELOPMENT_QUESTIONS
  },
  {
    key: 'analise',
    title: 'Teste de Análise',
    subtitle: 'Organização e entendimento',
    description:
      'Perguntas simples sobre entender o que o cliente precisa, organizar tarefas e trabalhar em equipe.',
    questions: ANALYSIS_QUESTIONS
  }
];

export type Level = 'Não aprovado' | 'Iniciante' | 'Intermediário' | 'Avançado';

/** Percentual mínimo de acerto exigido em cada teste. */
export const PASSING_SCORE = 40;

// Faixas de acerto que definem o nível em cada eixo.
export function levelFor(percentage: number): Level {
  if (percentage >= 80) return 'Avançado';
  if (percentage >= 60) return 'Intermediário';
  if (percentage >= PASSING_SCORE) return 'Iniciante';
  return 'Não aprovado';
}

export function isApproved(percentage: number): boolean {
  return percentage >= PASSING_SCORE;
}
