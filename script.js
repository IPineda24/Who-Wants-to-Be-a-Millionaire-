const questions = [
    // --- ACCIONES DE CELDAS Y FORMATO (1-20) ---
    { question: "En Excel, ¿qué significa 'Bold'?", options: ["Cursiva", "Negrita", "Subrayado", "Tachado"], answer: "Negrita" },
    { question: "¿Qué acción realizas si la instrucción dice 'Merge and Center'?", options: ["Dividir celdas", "Combinar y centrar", "Cambiar color", "Ajustar texto"], answer: "Combinar y centrar" },
    { question: "Si te piden 'Fill Series', ¿qué herramienta debes usar?", options: ["Relleno de serie", "Filtros", "Gráficos", "Tablas"], answer: "Relleno de serie" },
    { question: "¿Qué es el 'Font Color'?", options: ["Color de fondo", "Color de la fuente/texto", "Grosor de línea", "Tamaño de letra"], answer: "Color de la fuente/texto" },
    { question: "¿Qué significa 'Wrap Text'?", options: ["Ajustar texto al ancho de la celda", "Girar el texto", "Borrar texto", "Copiar texto"], answer: "Ajustar texto al ancho de la celda" },
    { question: "Si la regla es 'Conditional Formatting', el formato cambia según:", options: ["El azar", "Una condición o criterio", "La impresora", "El nombre del archivo"], answer: "Una condición o criterio" },
    { question: "¿Qué significa 'Cell Range'?", options: ["Una sola celda", "Un rango o grupo de celdas", "Una hoja entera", "Un libro de trabajo"], answer: "Un rango o grupo de celdas" },
    { question: "¿Qué es 'Alignment'?", options: ["Alineación", "Suma", "Resta", "Borde"], answer: "Alineación" },
    { question: "Si te piden un 'Solid Border', ¿cómo debe ser el borde?", options: ["Punteado", "Sólido/Continuo", "Doble", "Sin borde"], answer: "Sólido/Continuo" },
    { question: "¿Qué significa 'Shading' o 'Fill Color'?", options: ["Color de relleno de la celda", "Color de la letra", "Sombra del gráfico", "Transparencia"], answer: "Color de relleno de la celda" },
    { question: "¿Qué es 'Indent'?", options: ["Sangría", "Espacio entre hojas", "Salto de página", "Fórmula"], answer: "Sangría" },
    { question: "¿Qué significa 'Apply a Style'?", options: ["Aplicar un estilo predefinido", "Crear una macro", "Borrar datos", "Imprimir"], answer: "Aplicar un estilo predefinido" },
    { question: "Si lees 'Standard Colors', ¿dónde están?", options: ["En la parte superior", "En la parte inferior de la paleta", "En un menú oculto", "No existen"], answer: "En la parte inferior de la paleta" },
    { question: "¿Qué es 'Accent 1' en Excel?", options: ["Un tipo de letra", "Un color específico del tema", "Una función matemática", "Un error"], answer: "Un color específico del tema" },
    { question: "¿Qué significa 'Decimal Places'?", options: ["Lugares decimales", "Puntos de separación", "Números enteros", "Porcentajes"], answer: "Lugares decimales" },
    { question: "Si te piden 'Format as Table', ¿qué sucede?", options: ["Los datos se convierten en objeto Tabla", "Se borran los datos", "Se crea un gráfico", "Se protege la hoja"], answer: "Los datos se convierten en objeto Tabla" },
    { question: "¿Qué es 'Cell Styles'?", options: ["Estilos de celda", "Tipos de fuente", "Formatos de número", "Configuración de página"], answer: "Estilos de celda" },
    { question: "¿Qué significa 'Format Painter'?", options: ["Copiar formato", "Pintar celdas", "Insertar imagen", "Dibujar"], answer: "Copiar formato" },
    { question: "Si lees 'Clear Formatting', ¿qué borras?", options: ["Los datos", "Solo el formato (colores, bordes...)", "La hoja", "Las fórmulas"], answer: "Solo el formato (colores, bordes...)" },
    { question: "¿Qué es 'Accounting Format'?", options: ["Formato de contabilidad", "Formato de texto", "Formato de fecha", "Formato de hora"], answer: "Formato de contabilidad" },

    // --- TABLAS Y DATOS (21-40) ---
    { question: "¿Qué significa 'Sort A to Z'?", options: ["Ordenar de A a Z", "Filtrar por A", "Borrar de A a Z", "Ocultar filas"], answer: "Ordenar de A a Z" },
    { question: "¿Qué es 'Filter'?", options: ["Filtro para mostrar datos específicos", "Sumar datos", "Un tipo de gráfico", "Una protección"], answer: "Filtro para mostrar datos específicos" },
    { question: "Si te piden 'Remove Duplicates', ¿qué haces?", options: ["Copiar datos", "Quitar duplicados", "Multiplicar filas", "Resaltar datos"], answer: "Quitar duplicados" },
    { question: "¿Qué significa 'Total Row' en una tabla?", options: ["Fila de totales", "Fila superior", "Nombre de la tabla", "Primera columna"], answer: "Fila de totales" },
    { question: "¿Qué es 'Subtotal'?", options: ["Un cálculo parcial de un grupo", "El total final", "Un error de división", "Una resta"], answer: "Un cálculo parcial de un grupo" },
    { question: "¿Qué significa 'Convert to Range'?", options: ["Convertir tabla en rango normal", "Crear una tabla", "Borrar un rango", "Cambiar de hoja"], answer: "Convertir tabla en rango normal" },
    { question: "Si lees 'Header Row', ¿a qué se refiere?", options: ["Fila de encabezado", "Fila final", "Fila vacía", "Fila de suma"], answer: "Fila de encabezado" },
    { question: "¿Qué es 'Data Validation'?", options: ["Validación de datos (restricciones)", "Suma de datos", "Copia de datos", "Envío de datos"], answer: "Validación de datos (restricciones)" },
    { question: "¿Qué significa 'Dropdown List'?", options: ["Lista desplegable", "Lista de errores", "Gráfico de líneas", "Nombre de archivo"], answer: "Lista desplegable" },
    { question: "Si te piden 'Group Rows', ¿qué haces?", options: ["Agrupar filas", "Eliminar filas", "Pintar filas", "Ocultar columnas"], answer: "Agrupar filas" },
    { question: "¿Qué significa 'Ungroup'?", options: ["Desagrupar", "Borrar", "Unir", "Dividir"], answer: "Desagrupar" },
    { question: "¿Qué es un 'Named Range'?", options: ["Rango con nombre", "Nombre del libro", "Nombre de usuario", "Celda sin nombre"], answer: "Rango con nombre" },
    { question: "¿Qué significa 'Import Data'?", options: ["Importar datos externos", "Exportar a PDF", "Guardar", "Borrar"], answer: "Importar datos externos" },
    { question: "¿Qué es 'Text to Columns'?", options: ["Texto en columnas", "Columnas en texto", "Unir celdas", "Cambiar fuente"], answer: "Texto en columnas" },
    { question: "¿Qué significa 'Flash Fill'?", options: ["Relleno rápido", "Borrado rápido", "Copia rápida", "Cierre rápido"], answer: "Relleno rápido" },
    { question: "Si lees 'Freeze Panes', ¿qué haces?", options: ["Inmovilizar paneles", "Congelar el programa", "Borrar la pantalla", "Bloquear el libro"], answer: "Inmovilizar paneles" },
    { question: "¿Qué es 'Split' en la pestaña Vista?", options: ["Dividir la ventana", "Unir ventanas", "Cerrar ventana", "Nueva ventana"], answer: "Dividir la ventana" },
    { question: "¿Qué significa 'Hide/Unhide'?", options: ["Ocultar/Mostrar", "Borrar/Pegar", "Subir/Bajar", "Entrar/Salir"], answer: "Ocultar/Mostrar" },
    { question: "Si te piden 'Consolidate', ¿qué haces?", options: ["Consolidar datos de varios rangos", "Borrar datos", "Crear un gráfico", "Proteger"], answer: "Consolidar datos de varios rangos" },
    { question: "¿Qué significa 'Advanced Filter'?", options: ["Filtro avanzado", "Filtro simple", "Sin filtro", "Borrar filtro"], answer: "Filtro avanzado" },

    // --- FÓRMULAS Y FUNCIONES (41-60) ---
    { question: "¿Qué es 'SUM'?", options: ["Suma", "Resta", "Multiplicación", "División"], answer: "Suma" },
    { question: "¿Qué es 'AVERAGE'?", options: ["Promedio", "Máximo", "Mínimo", "Contar"], answer: "Promedio" },
    { question: "¿Qué hace la función 'COUNT'?", options: ["Cuenta celdas con números", "Suma números", "Busca texto", "Borra celdas"], answer: "Cuenta celdas con números" },
    { question: "¿Qué devuelve 'MAX'?", options: ["El valor máximo", "El valor mínimo", "El total", "El promedio"], answer: "El valor máximo" },
    { question: "¿Qué devuelve 'MIN'?", options: ["El valor mínimo", "El valor máximo", "Cero", "Error"], answer: "El valor mínimo" },
    { question: "¿Qué significa 'IF function'?", options: ["Función lógica SI", "Función de búsqueda", "Función de fecha", "Función de texto"], answer: "Función lógica SI" },
    { question: "¿Qué es 'VLOOKUP'?", options: ["Búsqueda vertical", "Búsqueda horizontal", "Suma rápida", "Validación"], answer: "Búsqueda vertical" },
    { question: "¿Qué es 'HLOOKUP'?", options: ["Búsqueda horizontal", "Búsqueda vertical", "Filtro", "Gráfico"], answer: "Búsqueda horizontal" },
    { question: "¿Qué significa 'Absolute Reference' ($A$1)?", options: ["Referencia absoluta (fija)", "Referencia relativa", "Error de fórmula", "Texto"], answer: "Referencia absoluta (fija)" },
    { question: "¿Qué es 'CONCATENATE' o 'CONCAT'?", options: ["Unir textos", "Dividir textos", "Borrar espacios", "Sumar"], answer: "Unir textos" },
    { question: "¿Qué hace 'UPPER'?", options: ["Convierte a mayúsculas", "Convierte a minúsculas", "Cuenta letras", "Borra"], answer: "Convierte a mayúsculas" },
    { question: "¿Qué hace 'LOWER'?", options: ["Convierte a minúsculas", "Convierte a mayúsculas", "Suma", "Resta"], answer: "Convierte a minúsculas" },
    { question: "¿Qué es 'PROPER'?", options: ["Nombre Propio (Mayúscula inicial)", "Todo mayúsculas", "Todo minúsculas", "Error"], answer: "Nombre Propio (Mayúscula inicial)" },
    { question: "¿Qué significa 'PMT function'?", options: ["Función de pago (financiera)", "Función de fecha", "Función de texto", "Función lógica"], answer: "Función de pago (financiera)" },
    { question: "¿Qué hace 'ROUND'?", options: ["Redondear", "Sumar", "Multiplicar", "Dividir"], answer: "Redondear" },
    { question: "¿Qué es 'IFERROR'?", options: ["Si error (manejo de errores)", "Suma errores", "Borra errores", "Es un error"], answer: "Si error (manejo de errores)" },
    { question: "¿Qué significa 'Nested Function'?", options: ["Función anidada", "Función simple", "Función rota", "Sin función"], answer: "Función anidada" },
    { question: "¿Qué hace 'COUNTIF'?", options: ["Contar si cumple una condición", "Contar todo", "Sumar si", "Promedio"], answer: "Contar si cumple una condición" },
    { question: "¿Qué hace 'SUMIF'?", options: ["Sumar si cumple una condición", "Suma total", "Contar", "Resta"], answer: "Sumar si cumple una condición" },
    { question: "¿Qué significa 'Lookup Value'?", options: ["Valor buscado", "Matriz de búsqueda", "Resultado", "Error"], answer: "Valor buscado" },

    // --- GRÁFICOS (61-80) ---
    { question: "¿Qué es un 'Chart'?", options: ["Gráfico", "Tabla", "Fórmula", "Celda"], answer: "Gráfico" },
    { question: "¿Qué significa 'Clustered Column'?", options: ["Columnas agrupadas", "Columnas apiladas", "Líneas", "Circular"], answer: "Columnas agrupadas" },
    { question: "¿Qué es un 'Pie Chart'?", options: ["Gráfico circular/pastel", "Gráfico de barras", "Gráfico de área", "Gráfico de puntos"], answer: "Gráfico circular/pastel" },
    { question: "¿Qué significa 'Legend' en un gráfico?", options: ["Leyenda", "Título", "Eje X", "Eje Y"], answer: "Leyenda" },
    { question: "¿Qué son los 'Axis'?", options: ["Ejes", "Colores", "Puntos", "Títulos"], answer: "Ejes" },
    { question: "¿Qué significa 'Secondary Axis'?", options: ["Eje secundario", "Eje principal", "Sin eje", "Título"], answer: "Eje secundario" },
    { question: "¿Qué es un 'Histogram'?", options: ["Histograma (frecuencias)", "Líneas", "Pastel", "Dispersión"], answer: "Histograma (frecuencias)" },
    { question: "¿Qué significa 'Chart Title'?", options: ["Título del gráfico", "Nombre de la hoja", "Leyenda", "Eje"], answer: "Título del gráfico" },
    { question: "¿Qué son 'Gridlines'?", options: ["Líneas de división", "Bordes de celda", "Fórmulas", "Puntos"], answer: "Líneas de división" },
    { question: "¿Qué significa 'Plot Area'?", options: ["Área de trazado", "Área del gráfico", "Leyenda", "Título"], answer: "Área de trazado" },
    { question: "¿Qué es 'Data Series'?", options: ["Serie de datos", "Nombre del gráfico", "Eje X", "Eje Y"], answer: "Serie de datos" },
    { question: "Si te piden 'Switch Row/Column', ¿qué haces?", options: ["Cambiar filas por columnas", "Borrar todo", "Cambiar de hoja", "Mover gráfico"], answer: "Cambiar filas por columnas" },
    { question: "¿Qué es un 'Sparkline'?", options: ["Minigráfico", "Gráfico grande", "Línea de tendencia", "Error"], answer: "Minigráfico" },
    { question: "¿Qué significa 'Trendline'?", options: ["Línea de tendencia", "Línea de base", "Borde", "Eje"], answer: "Línea de tendencia" },
    { question: "¿Qué es un 'Scatter Chart'?", options: ["Gráfico de dispersión", "Gráfico de barras", "Gráfico de área", "Gráfico de mapa"], answer: "Gráfico de dispersión" },
    { question: "¿Qué significa 'Waterfall Chart'?", options: ["Gráfico de cascada", "Gráfico de embudo", "Gráfico circular", "Gráfico solar"], answer: "Gráfico de cascada" },
    { question: "¿Qué es 'Chart Style'?", options: ["Estilo de gráfico", "Tipo de gráfico", "Color de celda", "Fuente"], answer: "Estilo de gráfico" },
    { question: "¿Qué significa 'Move Chart'?", options: ["Mover gráfico (a otra hoja)", "Borrar gráfico", "Copiar gráfico", "Cambiar tamaño"], answer: "Mover gráfico" },
    { question: "¿Qué es 'Sunburst'?", options: ["Gráfico de proyección solar", "Gráfico de barras", "Gráfico de líneas", "Circular"], answer: "Gráfico de proyección solar" },
    { question: "¿Qué significa 'Stacked Column'?", options: ["Columna apilada", "Columna agrupada", "Barra", "Área"], answer: "Columna apilada" },

    // --- TABLAS DINÁMICAS Y AVANZADO (81-100) ---
    { question: "¿Qué es una 'PivotTable'?", options: ["Tabla dinámica", "Tabla estática", "Gráfico dinámico", "Filtro"], answer: "Tabla dinámica" },
    { question: "¿Qué significa 'Refresh' en una PivotTable?", options: ["Actualizar datos", "Borrar tabla", "Crear tabla", "Cerrar"], answer: "Actualizar datos" },
    { question: "¿Qué es un 'Slicer'?", options: ["Segmentador de datos", "Gráfico", "Fórmula", "Campo"], answer: "Segmentador de datos" },
    { question: "¿Qué significa 'Values Field'?", options: ["Campo de valores", "Campo de fila", "Campo de filtro", "Título"], answer: "Campo de valores" },
    { question: "¿Qué es un 'Calculated Field'?", options: ["Campo calculado", "Suma simple", "Filtro", "Gráfico"], answer: "Campo calculado" },
    { question: "¿Qué significa 'Grand Total'?", options: ["Total general", "Subtotal", "Promedio", "Error"], answer: "Total general" },
    { question: "¿Qué es 'Goal Seek'?", options: ["Buscar objetivo", "Buscar texto", "Buscar reemplazo", "Buscar hoja"], answer: "Buscar objetivo" },
    { question: "¿Qué significa 'Scenario Manager'?", options: ["Administrador de escenarios", "Administrador de nombres", "Administrador de archivos", "Macros"], answer: "Administrador de escenarios" },
    { question: "¿Qué es una 'Macro'?", options: ["Automatización de tareas", "Un gráfico grande", "Un error grave", "Una tabla"], answer: "Automatización de tareas" },
    { question: "¿Qué significa 'Protect Sheet'?", options: ["Proteger hoja", "Proteger libro", "Borrar hoja", "Ocultar hoja"], answer: "Proteger hoja" },
    { question: "¿Qué es 'AutoRecover'?", options: ["Autorrecuperación", "Autoguardado", "Autocierre", "Autoformato"], answer: "Autorrecuperación" },
    { question: "¿Qué significa 'Inspect Document'?", options: ["Inspeccionar documento", "Imprimir documento", "Guardar documento", "Cerrar"], answer: "Inspeccionar documento" },
    { question: "¿Qué es 'Page Layout'?", options: ["Diseño de página", "Vista previa", "Salto de página", "Margen"], answer: "Diseño de página" },
    { question: "¿Qué significa 'Margins'?", options: ["Márgenes", "Bordes", "Espacios", "Títulos"], answer: "Márgenes" },
    { question: "¿Qué es 'Orientation' (Portrait/Landscape)?", options: ["Orientación (Vertical/Horizontal)", "Tamaño", "Color", "Fuente"], answer: "Orientación (Vertical/Horizontal)" },
    { question: "¿Qué significa 'Print Area'?", options: ["Área de impresión", "Área de trazado", "Área de datos", "Área vacía"], answer: "Área de impresión" },
    { question: "¿Qué es 'VBA'?", options: ["Lenguaje para macros", "Tipo de gráfico", "Función lógica", "Error"], answer: "Lenguaje para macros" },
    { question: "¿Qué significa 'Workbook'?", options: ["Libro de trabajo", "Hoja de trabajo", "Celda", "Rango"], answer: "Libro de trabajo" },
    { question: "¿Qué significa 'Worksheet'?", options: ["Hoja de trabajo", "Libro", "Fila", "Columna"], answer: "Hoja de trabajo" },
    { question: "¿Qué significa 'Hyperlink'?", options: ["Hipervínculo/Enlace", "Fórmula", "Gráfico", "Imagen"], answer: "Hipervínculo/Enlace" }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let skippedQuestions = [];
let availableQuestions = [];

// Escala de premios (puedes ajustar los montos)
const moneyLevels = Array.from({ length: 100 }, (_, i) => (i + 1) * 10000);

const questionElement = document.getElementById('question');
const optionsElements = document.querySelectorAll('.option');
const scoreElement = document.getElementById('score');
// Asegúrate de tener un elemento con id 'money' y 'progress' en tu HTML
const moneyElement = document.getElementById('money');
const progressElement = document.getElementById('progress');

function startGame() {
    correctAnswers = 0;
    updateUI();
    availableQuestions = shuffleArray([...questions]);
    currentQuestionIndex = 0;
    loadQuestion(currentQuestionIndex);
}

function updateUI() {
    const currentMoney = correctAnswers > 0 ? moneyLevels[correctAnswers - 1] : 0;

    // Actualiza el dinero acumulado
    if (moneyElement) {
        moneyElement.textContent = `Acumulado: $${currentMoney.toLocaleString()}`;
    }

    // Actualiza el contador tipo (X de 100)
    if (progressElement) {
        progressElement.textContent = `Pregunta: ${correctAnswers + 1} de ${questions.length}`;
    }

    scoreElement.textContent = `Aciertos: ${correctAnswers}`;
}

function loadQuestion(index) {
    if (correctAnswers === questions.length) {
        showVictory();
        return;
    }

    const question = availableQuestions[index];
    questionElement.textContent = question.question;

    const shuffledOptions = shuffleArray([...question.options]);

    optionsElements.forEach((button, i) => {
        button.textContent = `${String.fromCharCode(65 + i)}) ${shuffledOptions[i]}`;
        button.classList.remove('correct', 'incorrect', 'disabled');
        button.style.pointerEvents = 'auto';
        button.style.display = 'inline-block';
        button.onclick = () => checkAnswer(button, question.answer);
    });
}

function checkAnswer(button, correctAnswer) {
    const selectedAnswer = button.textContent.slice(3);
    optionsElements.forEach(btn => btn.style.pointerEvents = 'none');

    if (selectedAnswer === correctAnswer) {
        button.classList.add('correct');
        correctAnswers++;

        setTimeout(() => {
            if (correctAnswers < questions.length) {
                availableQuestions.splice(currentQuestionIndex, 1);
                // Siempre barajamos lo que queda para que la siguiente sea random
                currentQuestionIndex = Math.floor(Math.random() * availableQuestions.length);
                updateUI();
                loadQuestion(currentQuestionIndex);
            } else {
                showVictory();
            }
        }, 1200);

    } else {
        button.classList.add('incorrect');
        optionsElements.forEach(btn => {
            if (btn.textContent.slice(3) === correctAnswer) {
                btn.classList.add('correct');
            }
        });

        setTimeout(() => {
            alert(`¡PERDISTE! Te vas a casa con $0. \nReintentémoslo desde la pregunta 1.`);
            startGame();
        }, 2000);
    }
}

function showVictory() {
    questionElement.textContent = "¡INCREÍBLE! ¡ERES MILLONARIO EN EXCEL!";
    if (progressElement) progressElement.textContent = "100 de 100 completadas";
    if (moneyElement) moneyElement.textContent = `PREMIO FINAL: $${moneyLevels[99].toLocaleString()}`;
    optionsElements.forEach(button => button.style.display = 'none');

    // Efecto visual extra opcional
    alert("¡FELICIDADES! Has contestado correctamente las 100 preguntas de vocabulario.");
}

// ... (Las funciones shuffleArray y los botones de ayuda se mantienen igual)

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

startGame();