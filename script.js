const questions = [
  {
    "question": "Which of the following sentences correctly uses negative inversion?",
    "options": [
      "I have never seen such a beautiful sunset.",
      "Never have I seen such a beautiful sunset.",
      "Such a beautiful sunset have I never seen.",
      "Never have I seen such a beautiful sunset."
    ],
    "answer": "Never have I seen such a beautiful sunset."
  },
  {
    "question": "Identify the correct negative inversion in this context:",
    "options": [
      "She didn’t only win the race, but she also set a new record.",
      "Only she won the race, not the record.",
      "She won not only the race, but a new record.",
      "Not only did she win the race, but she also set a new record."
    ],
    "answer": "Not only did she win the race, but she also set a new record."
  },
  {
    "question": "Choose the sentence that demonstrates proper negative inversion:",
    "options": [
      "I seldom have heard such a wonderful performance.",
      "Such a wonderful performance I have seldom heard.",
      "Seldom I have heard such a wonderful performance.",
      "Seldom have I heard such a wonderful performance."
    ],
    "answer": "Seldom have I heard such a wonderful performance."
  },
  {
    "question": "Which sentence uses negative inversion correctly?",
    "options": [
      "He hardly did speak a word during the meeting.",
      "He didn’t hardly speak a word during the meeting.",
      "Hardly he did speak a word during the meeting.",
      "Hardly did he speak a word during the meeting."
    ],
    "answer": "Hardly did he speak a word during the meeting."
  },
  {
    "question": "Select the correct negative inversion:",
    "options": [
      "She had no sooner arrived than the party started.",
      "She arrived no sooner than the party started.",
      "No sooner she arrived than the party started.",
      "No sooner had she arrived than the party started."
    ],
    "answer": "No sooner had she arrived than the party started."
  },
  {
    "question": "Identify the sentence that correctly applies negative inversion:",
    "options": [
      "He visits rarely his grandparents.",
      "He does rarely visit his grandparents.",
      "Rarely he visits his grandparents.",
      "Rarely does he visit his grandparents."
    ],
    "answer": "Rarely does he visit his grandparents."
  },
  {
    "question": "Which option correctly uses negative inversion?",
    "options": [
      "I little did know about the surprise party.",
      "Did I know little about the surprise party.",
      "I didn’t know little about the surprise party.",
      "Little did I know about the surprise party."
    ],
    "answer": "Little did I know about the surprise party."
  },
  {
    "question": "Choose the correct sentence with negative inversion:",
    "options": [
      "I have not once missed a class.",
      "Not once I have missed a class.",
      "Not I once have missed a class.",
      "Not once have I missed a class."
    ],
    "answer": "Not once have I missed a class."
  },
  {
    "question": "Select the sentence that correctly uses negative inversion:",
    "options": [
      "They had scarcely begun when it started to rain.",
      "They began scarcely when it started to rain.",
      "Had they scarcely begun when it started to rain.",
      "Scarcely had they begun when it started to rain."
    ],
    "answer": "Scarcely had they begun when it started to rain."
  },
  {
    "question": "Which of the following sentences correctly employs negative inversion?",
    "options": [
      "I have never before felt so excited.",
      "Never before I have felt so excited.",
      "I have felt never so excited before.",
      "Never have I felt so excited before."
    ],
    "answer": "Never have I felt so excited before."
  }
];



let currentQuestionIndex = 0;
let correctAnswers = 0;
let skippedQuestions = [];
let availableQuestions = [...questions];

const questionElement = document.getElementById('question');
const optionsElements = document.querySelectorAll('.option');
const scoreElement = document.getElementById('score');

function loadQuestion(index) {
    if (availableQuestions.length === 0) {
        questionElement.textContent = "No hay más preguntas disponibles.";
        optionsElements.forEach(button => button.style.display = 'none');
        return;
    }

    const question = availableQuestions[index];
    questionElement.textContent = question.question;
    const shuffledOptions = shuffleArray([...question.options]);
    optionsElements.forEach((button, i) => {
        button.textContent = `${String.fromCharCode(65 + i)}) ${shuffledOptions[i]}`;
        button.classList.remove('correct', 'incorrect', 'disabled');
        button.style.display = 'inline-block';
        button.onclick = () => checkAnswer(button, question.answer);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function checkAnswer(button, correctAnswer) {
    const selectedAnswer = button.textContent.slice(3); // Remove "A) ", "B) ", etc.
    if (selectedAnswer === correctAnswer) {
        button.classList.add('correct');
        correctAnswers++;
    } else {
        button.classList.add('incorrect');
        optionsElements.forEach(btn => {
            if (btn.textContent.slice(3) === correctAnswer) {
                btn.classList.add('correct');
            }
        });
        correctAnswers = 0; // Reset the counter on wrong answer
    }
    scoreElement.textContent = `Preguntas acertadas: ${correctAnswers}`;
}

document.getElementById('random-question').onclick = () => {
    currentQuestionIndex = Math.floor(Math.random() * availableQuestions.length);
    loadQuestion(currentQuestionIndex);
};

document.getElementById('reset-counter').onclick = () => {
    correctAnswers = 0;
    scoreElement.textContent = `Preguntas acertadas: 0`;
};

document.getElementById('skip-question').onclick = () => {
    skippedQuestions.push(availableQuestions[currentQuestionIndex]);
    availableQuestions.splice(currentQuestionIndex, 1);
    currentQuestionIndex = (currentQuestionIndex + 1) % availableQuestions.length;
    loadQuestion(currentQuestionIndex);
};

document.getElementById('fifty-fifty').onclick = () => {
    const correctAnswer = availableQuestions[currentQuestionIndex].answer;
    let incorrectOptions = Array.from(optionsElements).filter(btn => btn.textContent.slice(3) !== correctAnswer);
    incorrectOptions = shuffleArray(incorrectOptions).slice(0, 2);
    incorrectOptions.forEach(btn => btn.classList.add('disabled'));
};

document.getElementById('remove-question').onclick = () => {
    availableQuestions.splice(currentQuestionIndex, 1);
    currentQuestionIndex = Math.floor(Math.random() * availableQuestions.length);
    loadQuestion(currentQuestionIndex);
};

document.getElementById('reintegrate-skipped').onclick = () => {
    availableQuestions = availableQuestions.concat(skippedQuestions);
    skippedQuestions = [];
    currentQuestionIndex = Math.floor(Math.random() * availableQuestions.length);
    loadQuestion(currentQuestionIndex);
};

loadQuestion(currentQuestionIndex);
