const questions = [
    {
        question: "What is the plural of 'cat'?",
        options: ["catz", "cates", "cat's", "cats"],
        answer: "cats"
    },
    {
        question: "Which word means 'the opposite of big'?",
        options: ["tall", "large", "huge", "small"],
        answer: "small"
    },
    {
        question: "What is the capital of the United States?",
        options: ["New York", "Los Angeles", "Chicago", "Washington, D.C."],
        answer: "Washington, D.C."
    },
    {
        question: "Which word is a color?",
        options: ["apple", "table", "run", "blue"],
        answer: "blue"
    },
    {
        question: "What is the past tense of 'go'?",
        options: ["goed", "go", "going", "went"],
        answer: "went"
    },
    {
        question: "Which sentence is correct?",
        options: [
            "She go to school.",
            "She going to school.",
            "She gone to school.",
            "She goes to school."
        ],
        answer: "She goes to school."
    },
    {
        question: "What is the opposite of 'hot'?",
        options: ["warm", "boiling", "sunny", "cold"],
        answer: "cold"
    },
    {
        question: "What is the correct form of the verb in this sentence? 'I ___ a book.'",
        options: ["is reading", "readed", "reading", "read"],
        answer: "read"
    },
    {
        question: "Which word is a verb?",
        options: ["happy", "quickly", "table", "run"],
        answer: "run"
    },
    {
        question: "What is the correct question form? '___ you like ice cream?'",
        options: ["Does", "Do", "Is", "Do"],
        answer: "Do"
    },
    {
        question: "Which of these is a fruit?",
        options: ["Carrot", "Lettuce", "Potato", "Banana"],
        answer: "Banana"
    },
    {
        question: "What is the correct way to say 'I am ____'?",
        options: ["tireds", "tire", "tireing", "tired"],
        answer: "tired"
    },
    {
        question: "Which word means 'not heavy'?",
        options: ["strong", "thick", "large", "light"],
        answer: "light"
    },
    {
        question: "What is the opposite of 'happy'?",
        options: ["joy", "funny", "nice", "sad"],
        answer: "sad"
    },
    {
        question: "Which sentence is correct?",
        options: [
            "He don't like coffee.",
            "He doesn't likes coffee.",
            "He not like coffee.",
            "He doesn't like coffee."
        ],
        answer: "He doesn't like coffee."
    },
    {
        question: "What is the correct word? 'I have two ____.'",
        options: ["cat", "catses", "cat's", "cats"],
        answer: "cats"
    },
    {
        question: "Which word is an adjective?",
        options: ["quickly", "sing", "house", "beautiful"],
        answer: "beautiful"
    },
    {
        question: "Which of these is a body part?",
        options: ["chair", "table", "floor", "arm"],
        answer: "arm"
    },
    {
        question: "What is the correct form? 'They ___ going to the park.'",
        options: ["is", "am", "be", "are"],
        answer: "are"
    },
    {
        question: "Choose the correct form: 'I ___ happy.'",
        options: ["am not", "is", "are", "am"],
        answer: "am"
    },
    {
        question: "Which sentence is correct?",
        options: [
            "She are my friend.",
            "She am my friend.",
            "She be my friend.",
            "She is my friend."
        ],
        answer: "She is my friend."
    },
    {
        question: "What is the correct question form? '___ they at home?'",
        options: ["Is", "Am", "Are", "Are"],
        answer: "Are"
    },
    {
        question: "Identify the correct sentence:",
        options: [
            "He am a doctor.",
            "He is a doctor.",
            "He are a doctor.",
            "He is a doctor."
        ],
        answer: "He is a doctor."
    },
    {
        question: "Which sentence is correct?",
        options: [
            "She have a dog.",
            "She haves a dog.",
            "She having a dog.",
            "She has a dog."
        ],
        answer: "She has a dog."
    },
    {
        question: "What is the correct form? 'There ___ a lot of people at the party.'",
        options: ["is", "was", "am", "are"],
        answer: "are"
    },
    {
        question: "What is the correct sentence?",
        options: [
            "I have 10 years old.",
            "She has 15 years old.",
            "She are 15 years old.",
            "I am 15 years old."
        ],
        answer: "I am 15 years old."
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
