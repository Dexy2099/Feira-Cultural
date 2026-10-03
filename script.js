const questions = [
 // =========================
  // ILUSÕES DE ÓTICA
  // =========================
  {
    question: "O que é uma ilusão de ótica?",
    options: [
      "A) Uma doença dos olhos",
      "B) Um erro ou alteração na forma como o cérebro interpreta uma imagem",
      "C) Uma mudança permanente na visão",
      "D) Uma deficiência visual"
    ],
    correctIndex: 1
  },
  {
    question: "Por que algumas imagens parecem se movimentar mesmo estando paradas?",
    options: [
      "A) Porque a imagem realmente se movimenta",
      "B) Porque nossos olhos produzem luz",
      "C) Porque o cérebro interpreta contrastes, formas e padrões de maneira específica",
      "D) Porque a retina muda de posição"
    ],
    correctIndex: 2
  },
  {
    question: "Qual órgão é responsável por interpretar as informações visuais recebidas pelos olhos?",
    options: [
      "A) Coração",
      "B) Pulmão",
      "C) Cérebro",
      "D) Estômago"
    ],
    correctIndex: 2
  },
  {
    question: "Em algumas ilusões, uma mesma imagem pode ser interpretada de duas maneiras diferentes. Isso acontece porque:",
    options: [
      "A) O cérebro pode organizar as informações visuais de diferentes formas",
      "B) Os olhos mudam de cor",
      "C) A imagem muda fisicamente",
      "D) A retina deixa de funcionar"
    ],
    correctIndex: 0
  },
  {
    question: "As ilusões de ótica demonstram principalmente que:",
    options: [
      "A) A visão depende apenas dos olhos",
      "B) O cérebro participa ativamente da interpretação do que vemos",
      "C) Os olhos conseguem enxergar tudo perfeitamente",
      "D) A luz não influencia a visão"
    ],
    correctIndex: 1
  },

  // =========================
  // REFLEXOS HUMANOS
  // =========================
  {
    question: "O que é um reflexo humano?",
    options: [
      "A) Uma resposta rápida e automática do organismo a um estímulo",
      "B) Uma decisão consciente",
      "C) Um tipo de memória",
      "D) Uma sensação causada pelo paladar"
    ],
    correctIndex: 0
  },
  {
    question: "Qual parte do sistema nervoso está frequentemente envolvida nos reflexos rápidos?",
    options: [
      "A) Medula espinhal",
      "B) Estômago",
      "C) Pulmão",
      "D) Retina"
    ],
    correctIndex: 0
  },
  {
    question: "Qual exemplo representa uma ação reflexa?",
    options: [
      "A) Escolher qual filme assistir",
      "B) Retirar rapidamente a mão ao tocar algo muito quente",
      "C) Resolver uma questão matemática",
      "D) Aprender uma música"
    ],
    correctIndex: 1
  },
  {
    question: "Por que os reflexos são importantes para o ser humano?",
    options: [
      "A) Porque ajudam a proteger o corpo de possíveis perigos",
      "B) Porque permitem enxergar melhor",
      "C) Porque aumentam a memória",
      "D) Porque controlam o paladar"
    ],
    correctIndex: 0
  },
  {
    question: "Em uma resposta reflexa, a reação geralmente acontece:",
    options: [
      "A) Somente depois de uma decisão consciente",
      "B) De forma rápida e automática",
      "C) Apenas durante o sono",
      "D) Depois de vários minutos"
    ],
    correctIndex: 1
  },

  // =========================
  // PALADAR X OLFATO
  // =========================
  {
    question: "Qual sentido é responsável principalmente por identificar sabores?",
    options: [
      "A) Audição",
      "B) Visão",
      "C) Paladar",
      "D) Tato"
    ],
    correctIndex: 2
  },
  {
    question: "Qual sentido tem grande influência na percepção dos sabores dos alimentos?",
    options: [
      "A) Olfato",
      "B) Audição",
      "C) Tato",
      "D) Equilíbrio"
    ],
    correctIndex: 0
  },
  {
    question: "Por que a comida pode parecer ter menos sabor quando estamos gripados?",
    options: [
      "A) Porque a língua deixa de funcionar",
      "B) Porque o nariz congestionado reduz a capacidade de perceber odores",
      "C) Porque os olhos ficam fechados",
      "D) Porque o ouvido produz menos som"
    ],
    correctIndex: 1
  },
  {
    question: "Onde estão localizados os principais receptores responsáveis pela percepção do paladar?",
    options: [
      "A) Nas papilas gustativas",
      "B) Na retina",
      "C) No tímpano",
      "D) Nos pulmões"
    ],
    correctIndex: 0
  },
  {
    question: "Qual alternativa apresenta uma função do olfato?",
    options: [
      "A) Detectar sons",
      "B) Identificar odores e contribuir para a percepção dos sabores",
      "C) Controlar os movimentos musculares",
      "D) Produzir saliva"
    ],
    correctIndex: 1
  },

  // =========================
  // FUNCIONAMENTO DA MEMÓRIA
  // =========================
  {
    question: "O que é a memória?",
    options: [
      "A) A capacidade de armazenar e recuperar informações",
      "B) A capacidade de enxergar cores",
      "C) Um tipo de reflexo",
      "D) Uma função exclusiva dos músculos"
    ],
    correctIndex: 0
  },
  {
    question: "Qual órgão é fundamental para o funcionamento da memória?",
    options: [
      "A) Cérebro",
      "B) Coração",
      "C) Pulmão",
      "D) Estômago"
    ],
    correctIndex: 0
  },
  {
    question: "Qual situação pode ajudar na formação de memórias?",
    options: [
      "A) Aprender e repetir uma informação",
      "B) Nunca prestar atenção",
      "C) Ignorar completamente uma experiência",
      "D) Evitar qualquer contato com novas informações"
    ],
    correctIndex: 0
  },
  {
    question: "O que pode dificultar a memorização de uma informação?",
    options: [
      "A) Atenção e concentração",
      "B) Repetição",
      "C) Falta de atenção e sono insuficiente",
      "D) Associação com conhecimentos anteriores"
    ],
    correctIndex: 2
  },
  {
    question: "Qual é a diferença entre lembrar e esquecer?",
    options: [
      "A) Lembrar envolve recuperar uma informação armazenada, enquanto esquecer envolve não conseguir recuperá-la",
      "B) Não existe diferença",
      "C) Esquecer significa nunca ter aprendido nada",
      "D) Lembrar acontece apenas durante o sono"
    ],
    correctIndex: 0
  }
];

let currentIndex = 0;
let score = 0;
let answered = false;

const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const nextBtn = document.getElementById("nextBtn");
const progressFill = document.getElementById("progressFill");
const progressLabel = document.getElementById("progressLabel");
const questionScreen = document.getElementById("questionScreen");
const resultScreen = document.getElementById("resultScreen");
const resultScore = document.getElementById("resultScore");
const resultMessage = document.getElementById("resultMessage");
const restartBtn = document.getElementById("restartBtn");

function loadQuestion() {
  answered = false;
  nextBtn.disabled = true;
  nextBtn.textContent = currentIndex === questions.length - 1 ? "Ver resultado" : "Próxima";

  const q = questions[currentIndex];
  questionText.textContent = q.question;
  optionsContainer.innerHTML = "";

  q.options.forEach((optionText, index) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = optionText;
    btn.addEventListener("click", () => selectOption(index, btn));
    optionsContainer.appendChild(btn);
  });

  const percent = ((currentIndex) / questions.length) * 100;
  progressFill.style.width = percent + "%";
  progressLabel.textContent = `Pergunta ${currentIndex + 1} de ${questions.length}`;
}

function selectOption(selectedIndex, selectedBtn) {
  if (answered) return;
  answered = true;

  const q = questions[currentIndex];
  const allButtons = optionsContainer.querySelectorAll(".option-btn");

  allButtons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correctIndex) {
      btn.classList.add("correct");
    } else if (idx === selectedIndex) {
      btn.classList.add("incorrect");
    }
  });

  if (selectedIndex === q.correctIndex) {
    score++;
  }

  nextBtn.disabled = false;
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  progressFill.style.width = "100%";
  progressLabel.textContent = `Pergunta ${questions.length} de ${questions.length}`;

  resultScore.textContent = `Você acertou ${score} de ${questions.length}`;

  let message;
  const ratio = score / questions.length;
  if (ratio === 1) {
    message = "Nota máxima! Você mandou muito bem.";
  } else if (ratio >= 0.6) {
    message = "Bom trabalho! Você conhece bastante coisa.";
  } else {
    message = "Vale a pena tentar de novo para melhorar sua pontuação.";
  }
  resultMessage.textContent = message;
}

function restartQuiz() {
  currentIndex = 0;
  score = 0;
  answered = false;
  resultScreen.classList.add("hidden");
  questionScreen.classList.remove("hidden");
  loadQuestion();
}

nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartQuiz);

loadQuestion();