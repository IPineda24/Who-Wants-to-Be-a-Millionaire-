const questions = [
    {
        question: "¿Qué método elimina el último elemento de un array y lo devuelve?",
        options: ["pop()", "shift()", "push()", "unshift()"],
        answer: "pop()"
    },
    {
        question: "¿Qué método se utiliza para añadir elementos al final de un array y devolver la nueva longitud del array?",
        options: ["shift()", "unshift()", "push()", "pop()"],
        answer: "push()"
    },
    {
        question: "¿Qué método elimina el primer elemento de un array y lo retorna?",
        options: ["pop()", "shift()", "push()", "unshift()"],
        answer: "shift()"
    },
    {
        question: "¿Qué método añade elementos al inicio de un array y devuelve la nueva longitud del array?",
        options: ["push()", "pop()", "unshift()", "shift()"],
        answer: "unshift()"
    },
    {
        question: "¿Qué método une dos o más arrays y devuelve un nuevo array?",
        options: ["push()", "pop()", "concat()", "shift()"],
        answer: "concat()"
    },
    {
        question: "¿Qué método ejecuta una función en cada elemento del array?",
        options: ["forEach()", "map()", "filter()", "reduce()"],
        answer: "forEach()"
    },
    {
        question: "¿Qué método crea un nuevo array con los resultados de la función aplicada a cada elemento?",
        options: ["forEach()", "map()", "filter()", "reduce()"],
        answer: "map()"
    },
    {
        question: "¿Qué método crea un nuevo array con los elementos que cumplen la condición dada?",
        options: ["forEach()", "map()", "filter()", "reduce()"],
        answer: "filter()"
    },
    {
        question: "¿Qué método aplica una función a un acumulador y a cada valor del array para reducirlo a un único valor?",
        options: ["forEach()", "map()", "filter()", "reduce()"],
        answer: "reduce()"
    },
    {
        question: "¿Qué método devuelve el primer elemento que cumple la función de prueba proporcionada?",
        options: ["findIndex()", "includes()", "indexOf()", "find()"],
        answer: "find()"
    },
    {
        question: "¿Qué método devuelve el índice del primer elemento que cumple la función de prueba proporcionada?",
        options: ["find()", "includes()", "findIndex()", "indexOf()"],
        answer: "findIndex()"
    },
    {
        question: "¿Qué método determina si un array incluye un elemento específico?",
        options: ["find()", "includes()", "findIndex()", "indexOf()"],
        answer: "includes()"
    },
    {
        question: "¿Qué método devuelve el primer índice de un elemento en el array?",
        options: ["find()", "includes()", "findIndex()", "indexOf()"],
        answer: "indexOf()"
    },
    {
        question: "¿Qué método une todos los elementos de un array en una cadena?",
        options: ["slice()", "splice()", "join()", "sort()"],
        answer: "join()"
    },
    {
        question: "¿Qué método devuelve una copia de una parte del array?",
        options: ["slice()", "splice()", "join()", "sort()"],
        answer: "slice()"
    },
    {
        question: "¿Qué método cambia el contenido del array eliminando y/o agregando elementos?",
        options: ["slice()", "splice()", "join()", "sort()"],
        answer: "splice()"
    },
    {
        question: "¿Qué método ordena los elementos del array?",
        options: ["slice()", "splice()", "join()", "sort()"],
        answer: "sort()"
    },
    {
        question: "¿Qué método revierte el orden de los elementos en un array?",
        options: ["slice()", "sort()", "reverse()", "splice()"],
        answer: "reverse()"
    },
    {
        question: "¿Qué método devuelve una cadena que representa los elementos del array separados por comas?",
        options: ["join()", "toString()", "concat()", "map()"],
        answer: "toString()"
    },
    {
        question: "¿Qué método devuelve la longitud de una cadena?",
        options: ["includes()", "charAt()", "slice()", "length"],
        answer: "length"
    },
    {
        question: "¿Qué método devuelve el carácter en el índice especificado de una cadena?",
        options: ["includes()", "indexOf()", "slice()", "charAt()"],
        answer: "charAt()"
    },
    {
        question: "¿Qué método determina si una cadena contiene otra cadena?",
        options: ["includes()", "indexOf()", "slice()", "charAt()"],
        answer: "includes()"
    },
    {
        question: "¿Qué método devuelve el índice de la primera ocurrencia de un valor en una cadena?",
        options: ["includes()", "indexOf()", "slice()", "charAt()"],
        answer: "indexOf()"
    },
    {
        question: "¿Qué método extrae una sección de una cadena y devuelve una nueva cadena?",
        options: ["slice()", "split()", "substring()", "replace()"],
        answer: "slice()"
    },
    {
        question: "¿Qué método divide una cadena en un array de subcadenas?",
        options: ["slice()", "split()", "substring()", "replace()"],
        answer: "split()"
    },
    {
        question: "¿Qué método devuelve una parte de la cadena entre los índices start y end?",
        options: ["slice()", "split()", "substring()", "replace()"],
        answer: "substring()"
    },
    {
        question: "¿Qué método convierte toda la cadena a minúsculas?",
        options: ["toLowerCase()", "toUpperCase()", "trim()", "replace()"],
        answer: "toLowerCase()"
    },
    {
        question: "¿Qué método convierte toda la cadena a mayúsculas?",
        options: ["toLowerCase()", "toUpperCase()", "trim()", "replace()"],
        answer: "toUpperCase()"
    },
    {
        question: "¿Qué método elimina los espacios en blanco de ambos extremos de la cadena?",
        options: ["toLowerCase()", "toUpperCase()", "trim()", "replace()"],
        answer: "trim()"
    },
    {
        question: "¿Qué método reemplaza una parte de la cadena por otra cadena?",
        options: ["toLowerCase()", "toUpperCase()", "trim()", "replace()"],
        answer: "replace()"
    },
    {
        question: "¿Qué método reemplaza todas las coincidencias de un patrón en una cadena con una nueva subcadena?",
        options: ["toLowerCase()", "substring()", "replaceAll()", "replace()"],
        answer: "replaceAll()"
    },
    {
        question: "¿Qué método devuelve el índice del último elemento que cumple la función de prueba proporcionada?",
        options: ["find()", "findLastIndex()", "findIndex()", "indexOf()"],
        answer: "findLastIndex()"
    },
    {
        question: "¿Qué método devuelve el último elemento que cumple la función de prueba proporcionada?",
        options: ["find()", "findLast()", "findIndex()", "indexOf()"],
        answer: "findLast()"
    },
    {
        question: "¿Qué método devuelve el valor de un array convertido en una cadena local?",
        options: ["toString()", "toLocaleString()", "join()", "concat()"],
        answer: "toLocaleString()"
    },
    {
        question: "¿Qué método ejecuta una función reductora sobre cada elemento de un array, de derecha a izquierda, para reducirlo a un único valor?",
        options: ["reduce()", "map()", "filter()", "reduceRight()"],
        answer: "reduceRight()"
    },
    {
        question: "¿Qué método copia una secuencia de elementos de un array dentro del mismo array?",
        options: ["slice()", "splice()", "concat()", "copyWithin()"],
        answer: "copyWithin()"
    },
    {
        question: "¿Qué método devuelve un nuevo array con los elementos que cumplen la condición dada y luego aplica una función a cada elemento?",
        options: ["forEach()", "filter().map()", "map().filter()", "reduce().map()"],
        answer: "filter().map()"
    },
    {
        question: "¿Qué método crea un nuevo array con todos los sub-arrays concatenados?",
        options: ["flat()", "map()", "filter()", "reduce()"],
        answer: "flat()"
    },
    {
        question: "¿Qué método crea un nuevo array con todos los sub-arrays concatenados hasta la profundidad especificada?",
        options: ["flat()", "flatMap()", "concat()", "map()"],
        answer: "flatMap()"
    },
    {
        question: "¿Qué método devuelve una cadena creada por la concatenación de todos los elementos en un array separados por una cadena separadora?",
        options: ["join()", "toString()", "concat()", "split()"],
        answer: "join()"
    },
    {
        question: "¿Qué tipo de dato se utiliza para almacenar valores verdaderos o falsos?",
        options: ["String", "Number", "Boolean", "Object"],
        answer: "Boolean"
    },
    {
        question: "¿Qué tipo de dato puede almacenar una secuencia de caracteres?",
        options: ["String", "Number", "Boolean", "Array"],
        answer: "String"
    },
    {
        question: "¿Qué tipo de dato puede almacenar una lista ordenada de elementos?",
        options: ["String", "Number", "Boolean", "Array"],
        answer: "Array"
    },
    {
        question: "¿Qué tipo de dato se utiliza para almacenar datos numéricos?",
        options: ["String", "Number", "Boolean", "Object"],
        answer: "Number"
    },
    {
        question: "¿Qué tipo de dato se utiliza para representar una referencia a una función?",
        options: ["Object", "Function", "String", "Array"],
        answer: "Function"
    },
    {
        question: "¿Qué valor especial se utiliza para indicar una referencia a un objeto no existente?",
        options: ["undefined", "null", "NaN", "false"],
        answer: "null"
    },
    {
        question: "¿Cuál es el resultado de sumar una cadena y un número en JavaScript?",
        options: ["Error", "Una cadena que representa la concatenación del número y la cadena", "Un número que representa la suma", "NaN"],
        answer: "Una cadena que representa la concatenación del número y la cadena"
    },
    {
        question: "¿Qué tipo de dato es un valor booleano en JavaScript?",
        options: ["String", "Number", "Boolean", "Object"],
        answer: "Boolean"
    },
    {
        question: "¿Qué tipo de dato es una colección de caracteres?",
        options: ["String", "Number", "Boolean", "Array"],
        answer: "String"
    },
    {
        question: "¿Qué tipo de dato es una colección de propiedades y métodos?",
        options: ["Array", "Boolean", "String", "Object"],
        answer: "Object"
    },
    {
        question: "¿Qué tipo de dato representa un valor numérico no válido?",
        options: ["undefined", "null", "NaN", "0"],
        answer: "NaN"
    },
    {
        question: "¿Qué tipo de dato es un contenedor para múltiples elementos?",
        options: ["Array", "Boolean", "Number", "String"],
        answer: "Array"
    },
    {
        question: "¿Cuál de los siguientes no es un valor primitivo en JavaScript?",
        options: ["String", "Array", "Boolean", "Number"],
        answer: "Array"
    },
    {
        question: "¿Qué operador lógico se utiliza para verificar la igualdad de valores y tipos en JavaScript?",
        options: ["=", "==", "===", "!=="],
        answer: "==="
    },
    {
        question: "¿Qué operador lógico se utiliza para verificar la desigualdad de valores y tipos en JavaScript?",
        options: ["!=", "==", "!==", "!=="],
        answer: "!=="
    },
    {
        question: "¿Qué operador lógico devuelve true si ambos operandos son true?",
        options: ["||", "!", "&&", "=="],
        answer: "&&"
    },
    {
        question: "¿Qué operador lógico devuelve true si al menos uno de los operandos es true?",
        options: ["&&", "!", "||", "=="],
        answer: "||"
    },
    {
        question: "¿Qué operador lógico invierte el valor de un booleano?",
        options: ["&&", "||", "!", "=="],
        answer: "!"
    },
    {
        question: "¿Qué operador lógico se utiliza para la asignación de valores?",
        options: ["=", "==", "===", "!="],
        answer: "="
    },
    {
        question: "¿Qué operador lógico devuelve false si ambos operandos son true?",
        options: ["&&", "!", "XOR", "||"],
        answer: "XOR"
    },
    {
        question: "¿Qué operador lógico devuelve true si ambos operandos son false?",
        options: ["||", "!", "XNOR", "&&"],
        answer: "XNOR"
    },
    {
        question: "¿Qué operador lógico se utiliza para realizar la comparación entre dos expresiones?",
        options: ["=", "==", "!=", "==="],
        answer: "=="
    },
    {
        question: "¿Qué operador lógico devuelve true si los operandos no son iguales en valor?",
        options: ["=", "==", "!=", "==="],
        answer: "!="
    },
    {
        question: "¿Qué método devuelve el índice del último elemento en el array que cumpla la función de prueba proporcionada?",
        options: ["findLast()", "findLastIndex()", "findIndex()", "indexOf()"],
        answer: "findLastIndex()"
    },
    {
        question: "¿Qué método devuelve el último elemento en el array que cumpla la función de prueba proporcionada?",
        options: ["find()", "findLast()", "findIndex()", "indexOf()"],
        answer: "findLast()"
    },
    {
        question: "¿Qué método crea un nuevo array con los resultados de llamar a una función en cada elemento del array?",
        options: ["map()", "forEach()", "filter()", "reduce()"],
        answer: "map()"
    },
    {
        question: "¿Qué método ejecuta una función en cada elemento del array y devuelve true si la función retorna true para todos los elementos?",
        options: ["some()", "every()", "map()", "filter()"],
        answer: "every()"
    },
    {
        question: "¿Qué método ejecuta una función en cada elemento del array y devuelve true si la función retorna true para al menos un elemento?",
        options: ["some()", "every()", "map()", "filter()"],
        answer: "some()"
    },
    {
        question: "¿Qué método devuelve un array de los elementos que cumplen con una función de prueba proporcionada?",
        options: ["filter()", "map()", "reduce()", "forEach()"],
        answer: "filter()"
    },
    {
        question: "¿Qué método devuelve un nuevo array con los elementos del array original invertidos?",
        options: ["reverse()", "sort()", "concat()", "splice()"],
        answer: "reverse()"
    },
    {
        question: "¿Qué método cambia la posición de los elementos de un array en su lugar?",
        options: ["sort()", "splice()", "concat()", "map()"],
        answer: "sort()"
    },
    {
        question: "¿Qué método crea una nueva instancia de un array con todos los elementos de este array para los cuales la función de filtrado devuelva true?",
        options: ["filter()", "map()", "reduce()", "forEach()"],
        answer: "filter()"
    },
    {
        question: "¿Qué método devuelve una copia superficial de una porción del array en un nuevo array?",
        options: ["slice()", "splice()", "concat()", "map()"],
        answer: "slice()"
    },
    {
        question: "¿Qué método se usa para unir todos los elementos de un array en una cadena y devolver esta cadena?",
        options: ["join()", "toString()", "concat()", "map()"],
        answer: "join()"
    },
    {
        question: "¿Qué método devuelve un string con una representación de este array y sus elementos?",
        options: ["toString()", "join()", "concat()", "map()"],
        answer: "toString()"
    },
    {
        question: "¿Qué método devuelve un nuevo array con los resultados de llamar a una función provista en cada elemento del array que cumpla con la condición dada?",
        options: ["filter()", "map()", "reduce()", "forEach()"],
        answer: "filter().map()"
    },
    {
        question: "¿Qué método ejecuta una función reductora sobre cada elemento del array, de derecha a izquierda, para reducirlo a un único valor?",
        options: ["reduceRight()", "reduce()", "map()", "filter()"],
        answer: "reduceRight()"
    },
    {
        question: "¿Qué método devuelve el índice de la primera ocurrencia de un valor en una cadena de texto?",
        options: ["indexOf()", "includes()", "charAt()", "substring()"],
        answer: "indexOf()"
    },
    {
        question: "¿Qué método devuelve el carácter de una cadena en el índice especificado?",
        options: ["charAt()", "indexOf()", "slice()", "substring()"],
        answer: "charAt()"
    },
    {
        question: "¿Qué método crea una nueva cadena copiando caracteres de una parte de una cadena de texto?",
        options: ["slice()", "substring()", "split()", "replace()"],
        answer: "slice()"
    },
    {
        question: "¿Qué método elimina espacios en blanco de ambos extremos de una cadena?",
        options: ["trim()", "replace()", "slice()", "split()"],
        answer: "trim()"
    },
    {
        question: "¿Qué método busca una cadena en otra cadena y devuelve la primera posición de la coincidencia?",
        options: ["indexOf()", "includes()", "charAt()", "substring()"],
        answer: "indexOf()"
    },
    {
        question: "¿Qué método se usa para dividir un objeto tipo cadena en un array de subcadenas?",
        options: ["split()", "slice()", "substring()", "replace()"],
        answer: "split()"
    },
    {
        question: "¿Qué método convierte todos los caracteres de una cadena en minúsculas?",
        options: ["toLowerCase()", "toUpperCase()", "trim()", "slice()"],
        answer: "toLowerCase()"
    },
    {
        question: "¿Qué método convierte todos los caracteres de una cadena en mayúsculas?",
        options: ["toUpperCase()", "toLowerCase()", "trim()", "slice()"],
        answer: "toUpperCase()"
    },
    {
        question: "¿Qué método reemplaza todas las ocurrencias de un valor en una cadena por otro valor?",
        options: ["replaceAll()", "replace()", "split()", "slice()"],
        answer: "replaceAll()"
    },
    {
        question: "¿Qué método devuelve true si una cadena de texto contiene otra cadena de texto?",
        options: ["includes()", "indexOf()", "charAt()", "substring()"],
        answer: "includes()"
    },
    {
        question: "¿Qué método devuelve un valor booleano indicando si una cadena de texto termina con los caracteres de una cadena especificada?",
        options: ["endsWith()", "startsWith()", "includes()", "indexOf()"],
        answer: "endsWith()"
    },
    {
        question: "¿Qué método devuelve un valor booleano indicando si una cadena de texto comienza con los caracteres de una cadena especificada?",
        options: ["startsWith()", "endsWith()", "includes()", "indexOf()"],
        answer: "startsWith()"
    },
    {
        question: "¿Qué método devuelve un objeto tipo array con las coincidencias encontradas en una cadena de texto?",
        options: ["match()", "search()", "replace()", "split()"],
        answer: "match()"
    },
    {
        question: "¿Qué método devuelve el índice de la primera ocurrencia de un valor en una cadena de texto?",
        options: ["indexOf()", "search()", "charAt()", "includes()"],
        answer: "indexOf()"
    },
    {
        question: "¿Qué tipo de dato es un contenedor para almacenar datos estructurados?",
        options: ["Object", "String", "Boolean", "Number"],
        answer: "Object"
    },
    {
        question: "¿Qué tipo de dato se utiliza para almacenar una colección de propiedades y métodos?",
        options: ["Object", "Array", "String", "Number"],
        answer: "Object"
    },
    {
        question: "¿Qué tipo de dato representa una variable que no tiene un valor asignado?",
        options: ["undefined", "null", "NaN", "false"],
        answer: "undefined"
    },
    {
        question: "¿Qué valor especial se utiliza para representar una cantidad no numérica?",
        options: ["NaN", "null", "undefined", "false"],
        answer: "NaN"
    },
    {
        question: "¿Qué operador lógico se usa para comparar dos valores y devolver true si son iguales en valor y tipo?",
        options: ["===", "==", "=", "!="],
        answer: "==="
    },
    {
        question: "¿Qué operador lógico se usa para comparar dos valores y devolver true si no son iguales en valor y tipo?",
        options: ["!==", "!=", "==", "="],
        answer: "!=="
    },
    {
        question: "¿Qué operador lógico devuelve true si ambos operandos son true?",
        options: ["&&", "||", "!", "=="],
        answer: "&&"
    },
    {
        question: "¿Qué operador lógico devuelve true si al menos uno de los operandos es true?",
        options: ["||", "&&", "!", "=="],
        answer: "||"
    },
    {
        question: "¿Qué operador lógico devuelve true si ambos operandos son false?",
        options: ["!&&", "||", "XNOR", "&&"],
        answer: "XNOR"
    },
    {
        question: "¿Qué operador lógico devuelve false si ambos operandos son true?",
        options: ["XOR", "||", "&&", "!="],
        answer: "XOR"
    },
    {
        question: "¿Qué operador lógico se usa para la asignación de valores?",
        options: ["=", "==", "===", "!="],
        answer: "="
    },
    {
        question: "¿Qué operador lógico invierte el valor de un booleano?",
        options: ["!", "&&", "||", "=="],
        answer: "!"
    },
    {
        question: "¿Qué operador lógico se usa para comparar dos expresiones?",
        options: ["==", "=", "!=", "==="],
        answer: "=="
    },
    {
        question: "¿Qué operador lógico devuelve true si los operandos no son iguales en valor?",
        options: ["!=", "==", "===", "="],
        answer: "!="
    },
    {
        question: "¿Cuál es el resultado de usar el operador + con un número y una cadena?",
        options: ["Una cadena que representa la concatenación del número y la cadena", "Error", "Un número que representa la suma", "NaN"],
        answer: "Una cadena que representa la concatenación del número y la cadena"
    },
    {
        question: "¿Qué operador lógico se utiliza para comprobar si dos expresiones son diferentes en valor o tipo?",
        options: ["!==", "==", "!=", "==="],
        answer: "!=="
    },
    {
        question: "¿Qué operador lógico se utiliza para verificar si dos expresiones son iguales en valor, pero no necesariamente en tipo?",
        options: ["==", "===", "!=", "!=="],
        answer: "=="
    },
    {
        question: "¿Qué operador lógico se utiliza para verificar si dos expresiones son estrictamente iguales en valor y tipo?",
        options: ["===", "==", "!=", "!=="],
        answer: "==="
    },
    {
        question: "¿Qué operador lógico se utiliza para verificar si dos expresiones son estrictamente diferentes en valor y tipo?",
        options: ["!==", "!=", "==", "==="],
        answer: "!=="
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
