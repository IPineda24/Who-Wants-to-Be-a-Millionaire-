const questions = [
    {
        question: "En Excel, ¿qué significa aplicar 'Bold' a un texto?",
        options: [
            "Destacar el texto en negrita para darle énfasis visual",
            "Inclinar el texto en cursiva para citas o títulos",
            "Subrayar el texto para indicar enlaces o importancia",
            "Tachar el texto para mostrar contenido eliminado"
        ],
        answer: "Destacar el texto en negrita para darle énfasis visual"
    },

    {
        question: "¿Qué logras con el comando 'Merge and Center'?",
        options: [
            "Unir varias celdas en una sola y centrar su contenido, útil para títulos",
            "Dividir una celda en varias columnas para organizar datos",
            "Alinear el texto a la derecha dentro de una celda individual",
            "Cambiar el color de fondo de un grupo de celdas seleccionadas"
        ],
        answer: "Unir varias celdas en una sola y centrar su contenido, útil para títulos"
    },

    {
        question: "Si necesitas completar automáticamente una serie numérica (1, 2, 3...), ¿qué herramienta usas?",
        options: [
            "Fill Series (Relleno de serie) para generar patrones automáticos",
            "AutoFilter (Autofiltro) para ordenar datos existentes",
            "Flash Fill (Relleno rápido) para extraer patrones de texto",
            "Data Validation (Validación de datos) para restringir entradas"
        ],
        answer: "Fill Series (Relleno de serie) para generar patrones automáticos"
    },

    {
        question: "¿Qué controlas con la opción 'Font Color'?",
        options: [
            "El color del texto escrito en las celdas",
            "El color de fondo que rellena toda la celda",
            "El grosor de los bordes alrededor de la celda",
            "El tamaño de la fuente en puntos"
        ],
        answer: "El color del texto escrito en las celdas"
    },

    {
        question: "¿Para qué sirve activar 'Wrap Text' en una celda?",
        options: [
            "Ajustar el texto en múltiples líneas dentro de la celda sin cambiar el ancho de columna",
            "Girar el texto en ángulo para encabezados verticales",
            "Eliminar el contenido de texto y dejar solo números",
            "Copiar automáticamente el texto a celdas adyacentes"
        ],
        answer: "Ajustar el texto en múltiples líneas dentro de la celda sin cambiar el ancho de columna"
    },

    {
        question: "En 'Conditional Formatting', ¿qué determina cuándo se aplica un formato especial?",
        options: [
            "Una condición lógica o valor específico que cumpla la celda",
            "La selección aleatoria de celdas por el programa",
            "El tipo de impresora conectada al momento de formatear",
            "El nombre del archivo guardado en el disco"
        ],
        answer: "Una condición lógica o valor específico que cumpla la celda"
    },

    {
        question: "¿Qué representa el término 'Cell Range' (Rango de celdas)?",
        options: [
            "Un grupo de celdas seleccionadas que forman un área rectangular",
            "Una única celda activa con datos ingresados",
            "La totalidad de celdas disponibles en una hoja de cálculo",
            "El conjunto de todas las hojas dentro de un libro de Excel"
        ],
        answer: "Un grupo de celdas seleccionadas que forman un área rectangular"
    },

    {
        question: "¿Qué ajustas con las opciones de 'Alignment' (Alineación)?",
        options: [
            "La posición del contenido dentro de la celda (izquierda, centro, derecha, arriba, abajo)",
            "El tipo de operación matemática a realizar con los datos",
            "El estilo de borde que rodea la celda seleccionada",
            "La cantidad de espacio entre caracteres en el texto"
        ],
        answer: "La posición del contenido dentro de la celda (izquierda, centro, derecha, arriba, abajo)"
    },

    {
        question: "¿Qué característica tiene un 'Solid Border' (Borde sólido)?",
        options: [
            "Es una línea continua sin interrupciones alrededor de la celda",
            "Está compuesto por puntos separados con espacios",
            "Tiene dos líneas paralelas para mayor énfasis",
            "No tiene ningún tipo de línea visible"
        ],
        answer: "Es una línea continua sin interrupciones alrededor de la celda"
    },

    {
        question: "¿Qué modificas al aplicar 'Shading' o 'Fill Color'?",
        options: [
            "El color de fondo que rellena el interior de la celda",
            "El color de la fuente o texto escrito",
            "La sombra proyectada por objetos gráficos",
            "La transparencia de la imagen insertada"
        ],
        answer: "El color de fondo que rellena el interior de la celda"
    },

    {
        question: "¿Qué efecto produce aplicar 'Indent' (Sangría) en una celda?",
        options: [
            "Desplaza el contenido hacia la derecha dentro de la celda",
            "Agrega espacio entre el borde de la hoja y el área de impresión",
            "Inserta un salto de página antes de la fila seleccionada",
            "Crea una fórmula que calcula automáticamente valores"
        ],
        answer: "Desplaza el contenido hacia la derecha dentro de la celda"
    },

    {
        question: "¿Qué haces al seleccionar 'Apply a Style' (Aplicar un estilo)?",
        options: [
            "Aplicas un formato predefinido que combina colores, fuentes y bordes",
            "Creas una macro que automatiza tareas repetitivas",
            "Eliminas permanentemente los datos de las celdas seleccionadas",
            "Imprimes directamente el documento con configuración estándar"
        ],
        answer: "Aplicas un formato predefinido que combina colores, fuentes y bordes"
    },

    {
        question: "¿Dónde encuentras los 'Standard Colors' (Colores estándar) en la paleta de Excel?",
        options: [
            "En la sección inferior de la paleta de colores",
            "En la parte superior junto a los colores del tema",
            "En un menú oculto que requiere contraseña",
            "No existen en Excel, solo hay colores personalizados"
        ],
        answer: "En la sección inferior de la paleta de colores"
    },

    {
        question: "¿Qué es 'Accent 1' dentro del sistema de colores de Excel?",
        options: [
            "Un color específico definido por el tema actual del libro",
            "Un tipo de fuente con serifas decorativas",
            "Una función matemática para cálculos financieros",
            "Un mensaje de error al fallar una fórmula"
        ],
        answer: "Un color específico definido por el tema actual del libro"
    },

    {
        question: "¿Qué controlas al especificar 'Decimal Places' (Lugares decimales)?",
        options: [
            "La cantidad de dígitos mostrados después del punto decimal",
            "Los puntos de separación entre miles en números grandes",
            "La conversión automática de números a enteros sin decimales",
            "El porcentaje de celdas con formato numérico"
        ],
        answer: "La cantidad de dígitos mostrados después del punto decimal"
    },

    {
        question: "¿Qué ocurre cuando usas 'Format as Table' (Dar formato como tabla)?",
        options: [
            "Los datos se convierten en un objeto Tabla con filtros y estilos automáticos",
            "Se eliminan todos los datos y se crea una tabla vacía",
            "Se genera automáticamente un gráfico basado en los datos",
            "La hoja se protege contra modificaciones no autorizadas"
        ],
        answer: "Los datos se convierten en un objeto Tabla con filtros y estilos automáticos"
    },

    {
        question: "¿Qué son los 'Cell Styles' (Estilos de celda)?",
        options: [
            "Formatos predefinidos que aplican combinaciones específicas de fuente, borde y color",
            "Diferentes tipos de fuentes tipográficas instaladas en el sistema",
            "Formatos numéricos como moneda, fecha o porcentaje",
            "Configuraciones de página para la impresión del documento"
        ],
        answer: "Formatos predefinidos que aplican combinaciones específicas de fuente, borde y color"
    },

    {
        question: "¿Para qué sirve la herramienta 'Format Painter' (Copiar formato)?",
        options: [
            "Copiar el formato de una celda y aplicarlo a otras celdas",
            "Dibujar formas geométricas en la hoja de cálculo",
            "Insertar imágenes desde archivos externos",
            "Pintar celdas con colores aleatorios"
        ],
        answer: "Copiar el formato de una celda y aplicarlo a otras celdas"
    },

    {
        question: "¿Qué elimina exactamente el comando 'Clear Formatting' (Borrar formato)?",
        options: [
            "Solo el formato visual (colores, bordes, fuentes), manteniendo los datos",
            "Los datos numéricos y textuales de las celdas seleccionadas",
            "Toda la hoja de cálculo incluyendo estructura y contenido",
            "Las fórmulas pero conservando los valores calculados"
        ],
        answer: "Solo el formato visual (colores, bordes, fuentes), manteniendo los datos"
    },

    {
        question: "¿Qué características tiene el 'Accounting Format' (Formato de contabilidad)?",
        options: [
            "Alinea los símbolos de moneda y los puntos decimales en columnas",
            "Convierte números a formato de texto para concatenación",
            "Muestra fechas en formato largo con nombre del mes",
            "Registra la hora exacta de ingreso de datos"
        ],
        answer: "Alinea los símbolos de moneda y los puntos decimales en columnas"
    },

    {
        question: "¿Qué hace la opción 'Sort A to Z' en una tabla?",
        options: [
            "Organiza los datos alfabéticamente de forma ascendente",
            "Filtra solo los registros que empiezan con la letra A",
            "Elimina todas las filas excepto las que contienen A",
            "Oculta temporalmente las filas no seleccionadas"
        ],
        answer: "Organiza los datos alfabéticamente de forma ascendente"
    },

    {
        question: "¿Cuál es la función principal de 'Filter' (Filtro)?",
        options: [
            "Mostrar solo los registros que cumplen criterios específicos",
            "Sumar automáticamente valores de una columna",
            "Crear un gráfico visual de los datos",
            "Proteger la hoja contra ediciones no autorizadas"
        ],
        answer: "Mostrar solo los registros que cumplen criterios específicos"
    },

    {
        question: "¿Qué logras al usar 'Remove Duplicates' (Quitar duplicados)?",
        options: [
            "Eliminar filas repetidas basándose en columnas seleccionadas",
            "Copiar datos únicos a una nueva hoja de cálculo",
            "Multiplicar las filas existentes por un factor determinado",
            "Resaltar con colores los valores duplicados"
        ],
        answer: "Eliminar filas repetidas basándose en columnas seleccionadas"
    },

    {
        question: "¿Qué es la 'Total Row' (Fila de totales) en una tabla de Excel?",
        options: [
            "Una fila al final que calcula automáticamente sumas, promedios u otros totales",
            "La primera fila que contiene los encabezados de columna",
            "El nombre identificador de la tabla creada",
            "La columna más importante del conjunto de datos"
        ],
        answer: "Una fila al final que calcula automáticamente sumas, promedios u otros totales"
    },

    {
        question: "¿Qué representa un 'Subtotal' en Excel?",
        options: [
            "Un cálculo parcial de un grupo de datos dentro de una lista mayor",
            "El resultado final de sumar todos los valores de una columna",
            "Un error matemático en la división de valores",
            "La resta entre el valor máximo y mínimo de un rango"
        ],
        answer: "Un cálculo parcial de un grupo de datos dentro de una lista mayor"
    },

    {
        question: "¿Qué sucede cuando seleccionas 'Convert to Range' (Convertir en rango)?",
        options: [
            "La tabla se transforma en celdas normales sin funciones de tabla",
            "Se crea automáticamente una nueva tabla con los mismos datos",
            "Los datos se borran permanentemente de la hoja",
            "Se cambia la selección a otra hoja del libro"
        ],
        answer: "La tabla se transforma en celdas normales sin funciones de tabla"
    },

    {
        question: "¿A qué se refiere 'Header Row' (Fila de encabezado)?",
        options: [
            "La primera fila que contiene los títulos descriptivos de cada columna",
            "La última fila que muestra los totales calculados",
            "Una fila vacía que separa secciones de datos",
            "La fila que contiene fórmulas de suma automática"
        ],
        answer: "La primera fila que contiene los títulos descriptivos de cada columna"
    },

    {
        question: "¿Qué permite hacer 'Data Validation' (Validación de datos)?",
        options: [
            "Establecer restricciones sobre qué datos se pueden ingresar en una celda",
            "Sumar automáticamente valores de un rango específico",
            "Copiar datos desde fuentes externas verificadas",
            "Enviar datos por correo electrónico automáticamente"
        ],
        answer: "Establecer restricciones sobre qué datos se pueden ingresar en una celda"
    },

    {
        question: "¿Qué es una 'Dropdown List' (Lista desplegable)?",
        options: [
            "Un control que muestra opciones predefinidas al hacer clic en la celda",
            "Una lista de errores detectados en la hoja de cálculo",
            "Un gráfico de líneas que muestra tendencias de datos",
            "El nombre del archivo guardado en el sistema"
        ],
        answer: "Un control que muestra opciones predefinidas al hacer clic en la celda"
    },

    {
        question: "¿Qué haces al seleccionar 'Group Rows' (Agrupar filas)?",
        options: [
            "Organizas filas en un grupo colapsable con botón de expansión/contracción",
            "Eliminas permanentemente las filas seleccionadas",
            "Aplicas color de fondo a las filas agrupadas",
            "Ocultas columnas adyacentes a las filas seleccionadas"
        ],
        answer: "Organizas filas en un grupo colapsable con botón de expansión/contracción"
    },

    {
        question: "¿Qué efecto tiene el comando 'Ungroup' (Desagrupar)?",
        options: [
            "Elimina la agrupación y muestra todas las filas individualmente",
            "Borra el contenido de las filas agrupadas",
            "Une las filas en una sola celda combinada",
            "Divide las celdas en columnas separadas"
        ],
        answer: "Elimina la agrupación y muestra todas las filas individualmente"
    },

    {
        question: "¿Qué es un 'Named Range' (Rango con nombre)?",
        options: [
            "Una selección de celdas a la que se asigna un nombre descriptivo para fórmulas",
            "El nombre del libro de Excel guardado en el disco",
            "El nombre de usuario que creó el archivo",
            "Una celda sin identificación específica"
        ],
        answer: "Una selección de celdas a la que se asigna un nombre descriptivo para fórmulas"
    },

    {
        question: "¿Qué permite hacer 'Import Data' (Importar datos)?",
        options: [
            "Traer información desde archivos externos u otras fuentes",
            "Exportar la hoja actual a formato PDF",
            "Guardar el libro en una ubicación específica",
            "Eliminar datos no utilizados del archivo"
        ],
        answer: "Traer información desde archivos externos u otras fuentes"
    },

    {
        question: "¿Qué hace la herramienta 'Text to Columns' (Texto en columnas)?",
        options: [
            "Divide el contenido de una celda en varias columnas separadas",
            "Une el texto de varias celdas en una sola columna",
            "Cambia la fuente tipográfica de las columnas seleccionadas",
            "Convierte números a formato de texto"
        ],
        answer: "Divide el contenido de una celda en varias columnas separadas"
    },

    {
        question: "¿Cuándo es útil usar 'Flash Fill' (Relleno rápido)?",
        options: [
            "Cuando necesitas extraer o combinar datos basándote en ejemplos que proporcionas",
            "Cuando quieres borrar rápidamente grandes cantidades de datos",
            "Cuando necesitas copiar fórmulas a celdas adyacentes",
            "Cuando deseas cerrar el programa rápidamente"
        ],
        answer: "Cuando necesitas extraer o combinar datos basándote en ejemplos que proporcionas"
    },

    {
        question: "¿Qué logras con 'Freeze Panes' (Inmovilizar paneles)?",
        options: [
            "Mantener visibles ciertas filas o columnas mientras te desplazas por la hoja",
            "Congelar temporalmente el programa para evitar cambios",
            "Borrar el contenido visible de la pantalla",
            "Bloquear el libro completo para que no se pueda abrir"
        ],
        answer: "Mantener visibles ciertas filas o columnas mientras te desplazas por la hoja"
    },

    {
        question: "¿Qué hace la opción 'Split' (Dividir) en la pestaña Vista?",
        options: [
            "Separa la ventana en secciones para ver diferentes partes simultáneamente",
            "Une varias ventanas de Excel en una sola",
            "Cierra la ventana actual del programa",
            "Abre una nueva ventana del mismo libro"
        ],
        answer: "Separa la ventana en secciones para ver diferentes partes simultáneamente"
    },

    {
        question: "¿Qué significa 'Hide/Unhide' (Ocultar/Mostrar)?",
        options: [
            "Ocultar o revelar filas, columnas u hojas sin eliminarlas",
            "Borrar y recuperar datos de la papelera",
            "Subir o bajar la posición de filas en la tabla",
            "Entrar o salir del modo de edición de celdas"
        ],
        answer: "Ocultar o revelar filas, columnas u hojas sin eliminarlas"
    },

    {
        question: "¿Qué permite hacer 'Consolidate' (Consolidar)?",
        options: [
            "Combinar datos de varios rangos en un resumen único",
            "Eliminar datos duplicados de forma permanente",
            "Crear un gráfico consolidado de múltiples series",
            "Proteger la hoja con contraseña consolidada"
        ],
        answer: "Combinar datos de varios rangos en un resumen único"
    },

    {
        question: "¿Qué ofrece 'Advanced Filter' (Filtro avanzado)?",
        options: [
            "Opciones complejas de filtrado con criterios múltiples y rangos externos",
            "Un filtrado básico con un solo criterio simple",
            "La eliminación completa de todos los filtros aplicados",
            "Un filtro que no muestra ningún dato"
        ],
        answer: "Opciones complejas de filtrado con criterios múltiples y rangos externos"
    },

    {
        question: "¿Qué operación matemática realiza la función 'SUM'?",
        options: [
            "Suma todos los números en un rango seleccionado",
            "Resta el valor mínimo del máximo en un rango",
            "Multiplica todos los valores entre sí",
            "Divide el total entre la cantidad de celdas"
        ],
        answer: "Suma todos los números en un rango seleccionado"
    },

    {
        question: "¿Qué cálculo realiza la función 'AVERAGE'?",
        options: [
            "Calcula el valor promedio (media aritmética) de un grupo de números",
            "Encuentra el valor más alto en un rango",
            "Encuentra el valor más bajo en un rango",
            "Cuenta cuántas celdas contienen datos"
        ],
        answer: "Calcula el valor promedio (media aritmética) de un grupo de números"
    },

    {
        question: "¿Qué hace específicamente la función 'COUNT'?",
        options: [
            "Cuenta únicamente las celdas que contienen números",
            "Suma todos los valores numéricos del rango",
            "Busca texto específico dentro de las celdas",
            "Elimina celdas vacías del rango seleccionado"
        ],
        answer: "Cuenta únicamente las celdas que contienen números"
    },

    {
        question: "¿Qué valor devuelve la función 'MAX'?",
        options: [
            "El número más grande encontrado en el rango especificado",
            "El número más pequeño del conjunto de datos",
            "La suma total de todos los valores",
            "El promedio calculado de los números"
        ],
        answer: "El número más grande encontrado en el rango especificado"
    },

    {
        question: "¿Qué resultado obtienes con la función 'MIN'?",
        options: [
            "El valor más pequeño dentro del rango seleccionado",
            "El valor máximo alcanzado en los datos",
            "El número cero como valor neutro",
            "Un mensaje de error si hay valores negativos"
        ],
        answer: "El valor más pequeño dentro del rango seleccionado"
    },

    {
        question: "¿Qué tipo de función es 'IF' (SI)?",
        options: [
            "Una función lógica que evalúa una condición y devuelve un resultado u otro",
            "Una función de búsqueda que encuentra valores en tablas",
            "Una función de fecha que calcula días entre fechas",
            "Una función de texto que modifica cadenas de caracteres"
        ],
        answer: "Una función lógica que evalúa una condición y devuelve un resultado u otro"
    },

    {
        question: "¿Qué tipo de búsqueda realiza 'VLOOKUP' (BUSCARV)?",
        options: [
            "Busca un valor en la primera columna vertical y devuelve datos de la misma fila",
            "Busca horizontalmente a través de filas de izquierda a derecha",
            "Realiza una suma rápida de valores verticales",
            "Valida que los datos cumplan ciertos criterios"
        ],
        answer: "Busca un valor en la primera columna vertical y devuelve datos de la misma fila"
    },

    {
        question: "¿Qué dirección de búsqueda usa 'HLOOKUP' (BUSCARH)?",
        options: [
            "Busca horizontalmente en la primera fila y devuelve datos de la misma columna",
            "Busca verticalmente en columnas de arriba hacia abajo",
            "Filtra datos según criterios específicos",
            "Crea gráficos basados en datos horizontales"
        ],
        answer: "Busca horizontalmente en la primera fila y devuelve datos de la misma columna"
    },

    {
        question: "¿Qué característica tiene una 'Absolute Reference' ($A$1)?",
        options: [
            "Mantiene fija la referencia de celda al copiar la fórmula a otras celdas",
            "Cambia automáticamente la referencia al copiar la fórmula",
            "Indica un error en la fórmula ingresada",
            "Convierte el contenido a texto sin formato numérico"
        ],
        answer: "Mantiene fija la referencia de celda al copiar la fórmula a otras celdas"
    },

    {
        question: "¿Qué operación realizan 'CONCATENATE' o 'CONCAT'?",
        options: [
            "Unen (combinan) textos de varias celdas en una sola cadena",
            "Dividen un texto en varias celdas separadas",
            "Eliminan espacios en blanco del texto",
            "Suman valores numéricos de diferentes celdas"
        ],
        answer: "Unen (combinan) textos de varias celdas en una sola cadena"
    },

    {
        question: "¿Qué transformación hace la función 'UPPER'?",
        options: [
            "Convierte todo el texto a letras mayúsculas",
            "Convierte todo el texto a letras minúsculas",
            "Cuenta la cantidad de letras en el texto",
            "Elimina el contenido de la celda"
        ],
        answer: "Convierte todo el texto a letras mayúsculas"
    },

    {
        question: "¿Qué efecto tiene aplicar la función 'LOWER'?",
        options: [
            "Transforma todo el texto a letras minúsculas",
            "Cambia el texto a mayúsculas completamente",
            "Realiza la suma de valores numéricos",
            "Ejecuta una resta entre valores"
        ],
        answer: "Transforma todo el texto a letras minúsculas"
    },

    {
        question: "¿Qué formato aplica la función 'PROPER'?",
        options: [
            "Convierte el texto a Nombre Propio (primera letra de cada palabra en mayúscula)",
            "Transforma todo el texto a mayúsculas",
            "Cambia todo el texto a minúsculas",
            "Genera un mensaje de error de formato"
        ],
        answer: "Convierte el texto a Nombre Propio (primera letra de cada palabra en mayúscula)"
    },

    {
        question: "¿Qué tipo de cálculo realiza la función 'PMT'?",
        options: [
            "Calcula el pago periódico de un préstamo basado en pagos constantes",
            "Determina la fecha de vencimiento de un documento",
            "Cuenta la cantidad de caracteres en un texto",
            "Evalúa una condición lógica verdadera o falsa"
        ],
        answer: "Calcula el pago periódico de un préstamo basado en pagos constantes"
    },

    {
        question: "¿Qué hace la función 'ROUND' (REDONDEAR)?",
        options: [
            "Aproxima un número a una cantidad específica de decimales",
            "Suma todos los números de un rango",
            "Multiplica valores por un factor dado",
            "Divide un número entre otro"
        ],
        answer: "Aproxima un número a una cantidad específica de decimales"
    },

    {
        question: "¿Cuál es el propósito de 'IFERROR' (SI.ERROR)?",
        options: [
            "Captura errores en fórmulas y devuelve un valor alternativo personalizado",
            "Suma todos los errores encontrados en el rango",
            "Elimina físicamente las celdas con errores",
            "Verifica si una celda contiene específicamente un error"
        ],
        answer: "Captura errores en fórmulas y devuelve un valor alternativo personalizado"
    },

    {
        question: "¿Qué es una 'Nested Function' (Función anidada)?",
        options: [
            "Una función que se coloca dentro de otra función como argumento",
            "Una función simple sin argumentos complejos",
            "Una función que no opera correctamente",
            "Una celda sin ninguna fórmula aplicada"
        ],
        answer: "Una función que se coloca dentro de otra función como argumento"
    },

    {
        question: "¿Qué cálculo realiza 'COUNTIF' (CONTAR.SI)?",
        options: [
            "Cuenta celdas que cumplen una condición específica que tú defines",
            "Cuenta todas las celdas sin importar su contenido",
            "Suma valores solo si cumplen cierta condición",
            "Calcula el promedio de celdas seleccionadas"
        ],
        answer: "Cuenta celdas que cumplen una condición específica que tú defines"
    },

    {
        question: "¿Qué operación ejecuta 'SUMIF' (SUMAR.SI)?",
        options: [
            "Suma valores únicamente si cumplen con un criterio establecido",
            "Realiza la suma total de todos los valores del rango",
            "Cuenta cuántas celdas cumplen la condición",
            "Resta valores que no cumplen el criterio"
        ],
        answer: "Suma valores únicamente si cumplen con un criterio establecido"
    },

    {
        question: "¿Qué representa el 'Lookup Value' (Valor buscado) en funciones de búsqueda?",
        options: [
            "El dato específico que estás buscando en la tabla",
            "La matriz completa donde se realiza la búsqueda",
            "El resultado final que devuelve la función",
            "Un mensaje de error cuando no se encuentra coincidencia"
        ],
        answer: "El dato específico que estás buscando en la tabla"
    },

    {
        question: "¿Qué es un 'Chart' (Gráfico) en Excel?",
        options: [
            "Una representación visual de datos para facilitar su análisis",
            "Una tabla organizada con filas y columnas de datos",
            "Una fórmula compleja para cálculos matemáticos",
            "Una celda individual con formato especial"
        ],
        answer: "Una representación visual de datos para facilitar su análisis"
    },

    {
        question: "¿Qué muestra específicamente un gráfico 'Clustered Column' (Columna agrupada)?",
        options: [
            "Compara valores de diferentes categorías usando columnas separadas lado a lado",
            "Apila los valores uno sobre otro en una sola columna",
            "Conecta puntos de datos con líneas continuas",
            "Muestra proporciones como sectores de un círculo"
        ],
        answer: "Compara valores de diferentes categorías usando columnas separadas lado a lado"
    },

    {
        question: "¿Qué tipo de visualización es un 'Pie Chart' (Gráfico circular)?",
        options: [
            "Muestra proporciones o porcentajes como sectores de un pastel",
            "Compara valores usando barras horizontales o verticales",
            "Muestra áreas sombreadas bajo líneas de tendencia",
            "Distribuye puntos en coordenadas X e Y"
        ],
        answer: "Muestra proporciones o porcentajes como sectores de un pastel"
    },

    {
        question: "¿Qué función cumple la 'Legend' (Leyenda) en un gráfico?",
        options: [
            "Identifica qué representa cada color o patrón en el gráfico",
            "Es el título principal que describe el tema del gráfico",
            "Muestra las etiquetas del eje horizontal (X)",
            "Indica las escalas del eje vertical (Y)"
        ],
        answer: "Identifica qué representa cada color o patrón en el gráfico"
    },

    {
        question: "¿Qué son los 'Axis' (Ejes) en un gráfico?",
        options: [
            "Las líneas de referencia que marcan las escalas y categorías",
            "Los colores utilizados para diferenciar series de datos",
            "Los puntos específicos donde se cruzan los datos",
            "Los títulos descriptivos del gráfico completo"
        ],
        answer: "Las líneas de referencia que marcan las escalas y categorías"
    },

    {
        question: "¿Cuándo usas un 'Secondary Axis' (Eje secundario)?",
        options: [
            "Cuando necesitas mostrar dos series con escalas de medida diferentes",
            "Cuando el gráfico es menos importante que el principal",
            "Cuando no hay suficiente espacio en el eje principal",
            "Cuando quieres ocultar ciertos datos del gráfico"
        ],
        answer: "Cuando necesitas mostrar dos series con escalas de medida diferentes"
    },

    {
        question: "¿Qué representa un 'Histogram' (Histograma)?",
        options: [
            "La distribución de frecuencias de datos en intervalos o bins",
            "Líneas que conectan puntos de datos en el tiempo",
            "Proporciones de un total mostradas como sectores circulares",
            "La relación entre dos variables numéricas"
        ],
        answer: "La distribución de frecuencias de datos en intervalos o bins"
    },

    {
        question: "¿Qué es el 'Chart Title' (Título del gráfico)?",
        options: [
            "El texto descriptivo que identifica el tema o propósito del gráfico",
            "El nombre de la hoja de cálculo donde está el gráfico",
            "La leyenda que explica los colores utilizados",
            "Las etiquetas de los ejes X e Y"
        ],
        answer: "El texto descriptivo que identifica el tema o propósito del gráfico"
    },

    {
        question: "¿Qué son las 'Gridlines' (Líneas de división)?",
        options: [
            "Líneas de fondo que ayudan a leer valores en los ejes",
            "Bordes externos de las celdas en la hoja de cálculo",
            "Fórmulas que calculan automáticamente totales",
            "Puntos de datos individuales en el gráfico"
        ],
        answer: "Líneas de fondo que ayudan a leer valores en los ejes"
    },

    {
        question: "¿Qué área representa el 'Plot Area' (Área de trazado)?",
        options: [
            "La zona donde se dibujan realmente los datos del gráfico",
            "El área total que ocupa todo el objeto del gráfico",
            "La leyenda ubicada generalmente al lado o debajo",
            "El título principal en la parte superior del gráfico"
        ],
        answer: "La zona donde se dibujan realmente los datos del gráfico"
    },

    {
        question: "¿Qué es una 'Data Series' (Serie de datos)?",
        options: [
            "Un conjunto de valores relacionados que se grafican juntos",
            "El nombre identificador del gráfico completo",
            "Las etiquetas del eje horizontal (categorías)",
            "Las etiquetas del eje vertical (valores)"
        ],
        answer: "Un conjunto de valores relacionados que se grafican juntos"
    },

    {
        question: "¿Qué hace el comando 'Switch Row/Column' (Cambiar fila/columna)?",
        options: [
            "Intercambia la orientación de los datos para cambiar qué se grafica en X o Y",
            "Elimina todos los datos del gráfico",
            "Cambia el gráfico de una hoja a otra",
            "Mueve el gráfico a una ubicación diferente en la hoja"
        ],
        answer: "Intercambia la orientación de los datos para cambiar qué se grafica en X o Y"
    },

    {
        question: "¿Qué es un 'Sparkline' (Minigráfico)?",
        options: [
            "Un pequeño gráfico simple que cabe dentro de una sola celda",
            "Un gráfico de gran tamaño que ocupa toda la hoja",
            "Una línea de tendencia calculada estadísticamente",
            "Un error en la visualización de datos"
        ],
        answer: "Un pequeño gráfico simple que cabe dentro de una sola celda"
    },

    {
        question: "¿Qué muestra una 'Trendline' (Línea de tendencia)?",
        options: [
            "La dirección general o patrón de los datos a lo largo del tiempo",
            "La línea base cero del eje horizontal",
            "El borde exterior del área del gráfico",
            "El eje principal de coordenadas"
        ],
        answer: "La dirección general o patrón de los datos a lo largo del tiempo"
    },

    {
        question: "¿Qué tipo de datos muestra un 'Scatter Chart' (Gráfico de dispersión)?",
        options: [
            "La relación entre dos variables numéricas en coordenadas X e Y",
            "Comparaciones de valores usando barras verticales",
            "Áreas sombreadas bajo curvas de datos",
            "Datos geográficos en mapas territoriales"
        ],
        answer: "La relación entre dos variables numéricas en coordenadas X e Y"
    },

    {
        question: "¿Qué representa un 'Waterfall Chart' (Gráfico de cascada)?",
        options: [
            "Cómo un valor inicial aumenta o disminuye por etapas intermedias",
            "El flujo de procesos en forma de embudo",
            "Proporciones circulares de un total",
            "Radiación solar en diferentes períodos"
        ],
        answer: "Cómo un valor inicial aumenta o disminuye por etapas intermedias"
    },

    {
        question: "¿Qué modificas con 'Chart Style' (Estilo de gráfico)?",
        options: [
            "La apariencia visual predefinida (colores, efectos, formatos) del gráfico",
            "El tipo fundamental de gráfico (columna, línea, circular)",
            "El color de relleno de celdas individuales",
            "La fuente tipográfica del texto en celdas"
        ],
        answer: "La apariencia visual predefinida (colores, efectos, formatos) del gráfico"
    },

    {
        question: "¿Qué hace el comando 'Move Chart' (Mover gráfico)?",
        options: [
            "Cambia la ubicación del gráfico a otra hoja o como objeto flotante",
            "Elimina permanentemente el gráfico del libro",
            "Copia el gráfico a múltiples hojas simultáneamente",
            "Cambia únicamente el tamaño del gráfico"
        ],
        answer: "Cambia la ubicación del gráfico a otra hoja o como objeto flotante"
    },

    {
        question: "¿Qué muestra un gráfico 'Sunburst' (Proyección solar)?",
        options: [
            "Datos jerárquicos en anillos concéntricos que muestran niveles de categoría",
            "Variaciones de temperatura solar a lo largo del tiempo",
            "Comparaciones de barras horizontales simples",
            "Tendencias de datos en líneas temporales"
        ],
        answer: "Datos jerárquicos en anillos concéntricos que muestran niveles de categoría"
    },

    {
        question: "¿Qué característica tiene un 'Stacked Column' (Columna apilada)?",
        options: [
            "Coloca segmentos uno encima de otro para mostrar partes de un total",
            "Agrupa columnas separadas lado a lado para comparar",
            "Muestra datos en forma de barras horizontales",
            "Representa datos como áreas bajo curvas"
        ],
        answer: "Coloca segmentos uno encima de otro para mostrar partes de un total"
    },

    {
        question: "¿Qué es una 'PivotTable' (Tabla dinámica)?",
        options: [
            "Una herramienta que resume y analiza grandes cantidades de datos interactivamente",
            "Una tabla estática que no permite modificaciones",
            "Un gráfico que cambia automáticamente con el tiempo",
            "Un filtro simple para mostrar u ocultar filas"
        ],
        answer: "Una herramienta que resume y analiza grandes cantidades de datos interactivamente"
    },

    {
        question: "¿Qué hace el comando 'Refresh' (Actualizar) en una PivotTable?",
        options: [
            "Actualiza los datos de la tabla con los cambios más recientes de la fuente",
            "Elimina completamente la tabla dinámica",
            "Crea una nueva tabla desde cero",
            "Cierra el archivo sin guardar cambios"
        ],
        answer: "Actualiza los datos de la tabla con los cambios más recientes de la fuente"
    },

    {
        question: "¿Qué es un 'Slicer' (Segmentador de datos)?",
        options: [
            "Un botón visual que filtra datos de la tabla dinámica de forma interactiva",
            "Una herramienta para cortar y pegar celdas",
            "Una fórmula que calcula segmentos de datos",
            "Un campo de texto para ingresar datos manualmente"
        ],
        answer: "Un botón visual que filtra datos de la tabla dinámica de forma interactiva"
    },

    {
        question: "¿Qué representa el 'Values Field' (Campo de valores) en una PivotTable?",
        options: [
            "El área donde se realizan los cálculos (suma, promedio, conteo)",
            "Las etiquetas que aparecen en las filas de la tabla",
            "Los filtros aplicados para limitar los datos mostrados",
            "El título principal de la tabla dinámica"
        ],
        answer: "El área donde se realizan los cálculos (suma, promedio, conteo)"
    },

    {
        question: "¿Qué es un 'Calculated Field' (Campo calculado)?",
        options: [
            "Un campo personalizado que usa fórmulas con otros campos de la PivotTable",
            "Una suma simple de valores numéricos existentes",
            "Un filtro que calcula automáticamente rangos",
            "Un gráfico generado desde la tabla dinámica"
        ],
        answer: "Un campo personalizado que usa fórmulas con otros campos de la PivotTable"
    },

    {
        question: "¿Qué representa el 'Grand Total' (Total general)?",
        options: [
            "La suma o resultado agregado de todos los datos en la tabla",
            "Un subtotal parcial de un grupo específico",
            "El promedio de todos los valores mostrados",
            "Un error en el cálculo de la tabla"
        ],
        answer: "La suma o resultado agregado de todos los datos en la tabla"
    },

    {
        question: "¿Qué hace la herramienta 'Goal Seek' (Buscar objetivo)?",
        options: [
            "Encuentra el valor de entrada necesario para obtener un resultado deseado",
            "Busca texto específico dentro de la hoja",
            "Reemplaza valores automáticamente en toda la hoja",
            "Localiza hojas de cálculo en el disco duro"
        ],
        answer: "Encuentra el valor de entrada necesario para obtener un resultado deseado"
    },

    {
        question: "¿Qué permite hacer el 'Scenario Manager' (Administrador de escenarios)?",
        options: [
            "Crear y comparar diferentes conjuntos de valores para análisis de hipótesis",
            "Administrar los nombres de rangos en el libro",
            "Gestionar archivos y carpetas del sistema",
            "Crear macros automáticas de forma visual"
        ],
        answer: "Crear y comparar diferentes conjuntos de valores para análisis de hipótesis"
    },

    {
        question: "¿Qué es una 'Macro' en Excel?",
        options: [
            "Una grabación de pasos que se puede reproducir para automatizar tareas",
            "Un gráfico de gran tamaño para presentaciones",
            "Un error grave que cierra el programa",
            "Una tabla de datos estática sin fórmulas"
        ],
        answer: "Una grabación de pasos que se puede reproducir para automatizar tareas"
    },

    {
        question: "¿Qué protege el comando 'Protect Sheet' (Proteger hoja)?",
        options: [
            "Restringe modificaciones en la estructura y contenido de la hoja específica",
            "Protege todo el libro de trabajo contra apertura",
            "Elimina la hoja de forma permanente",
            "Oculta la hoja de la vista normal"
        ],
        answer: "Restringe modificaciones en la estructura y contenido de la hoja específica"
    },

    {
        question: "¿Qué es 'AutoRecover' (Autorrecuperación)?",
        options: [
            "Un sistema que guarda copias de seguridad automáticas en caso de fallos",
            "La función que guarda automáticamente el archivo en la ubicación actual",
            "El cierre automático del programa después de un tiempo",
            "El formato automático de celdas según su contenido"
        ],
        answer: "Un sistema que guarda copias de seguridad automáticas en caso de fallos"
    },

    {
        question: "¿Qué hace 'Inspect Document' (Inspeccionar documento)?",
        options: [
            "Busca metadatos, comentarios o información personal oculta antes de compartir",
            "Imprime el documento con configuración estándar",
            "Guarda el archivo en formato protegido",
            "Cierra el documento sin guardar cambios"
        ],
        answer: "Busca metadatos, comentarios o información personal oculta antes de compartir"
    },

    {
        question: "¿Qué configuras en 'Page Layout' (Diseño de página)?",
        options: [
            "La apariencia del documento al imprimirse (márgenes, orientación, escala)",
            "La vista previa del documento en pantalla",
            "Los saltos de página manuales únicamente",
            "El margen izquierdo exclusivamente"
        ],
        answer: "La apariencia del documento al imprimirse (márgenes, orientación, escala)"
    },

    {
        question: "¿Qué son los 'Margins' (Márgenes)?",
        options: [
            "El espacio en blanco entre el contenido y el borde de la página impresa",
            "Los bordes de las celdas en la hoja de cálculo",
            "Los espacios entre caracteres en el texto",
            "Los títulos de las secciones del documento"
        ],
        answer: "El espacio en blanco entre el contenido y el borde de la página impresa"
    },

    {
        question: "¿Qué determina 'Orientation' (Orientación) Portrait/Landscape?",
        options: [
            "La dirección de la página: vertical (Portrait) u horizontal (Landscape)",
            "El tamaño del papel utilizado (A4, Carta, etc.)",
            "El color de fondo de la página impresa",
            "La fuente tipográfica del documento"
        ],
        answer: "La dirección de la página: vertical (Portrait) u horizontal (Landscape)"
    },

    {
        question: "¿Qué define el 'Print Area' (Área de impresión)?",
        options: [
            "El rango específico de celdas que se imprimirán",
            "El área donde se dibujan los gráficos",
            "La zona de datos de la tabla dinámica",
            "El espacio vacío entre párrafos"
        ],
        answer: "El rango específico de celdas que se imprimirán"
    },

    {
        question: "¿Qué es 'VBA' en Excel?",
        options: [
            "El lenguaje de programación para crear macros avanzadas",
            "Un tipo específico de gráfico de barras",
            "Una función lógica para validar datos",
            "Un mensaje de error común en fórmulas"
        ],
        answer: "El lenguaje de programación para crear macros avanzadas"
    },

    {
        question: "¿Qué es un 'Workbook' (Libro de trabajo)?",
        options: [
            "El archivo completo de Excel que puede contener múltiples hojas",
            "Una sola hoja de cálculo individual",
            "Una celda específica con datos importantes",
            "Un rango seleccionado de celdas"
        ],
        answer: "El archivo completo de Excel que puede contener múltiples hojas"
    },

    {
        question: "¿Qué es una 'Worksheet' (Hoja de trabajo)?",
        options: [
            "Una pestaña individual dentro del libro donde se ingresan datos",
            "El archivo completo guardado en el disco",
            "Una fila horizontal de celdas",
            "Una columna vertical de celdas"
        ],
        answer: "Una pestaña individual dentro del libro donde se ingresan datos"
    },

    {
        question: "¿Qué es un 'Hyperlink' (Hipervínculo)?",
        options: [
            "Un enlace que permite saltar a otra ubicación, archivo o página web",
            "Una fórmula que calcula automáticamente valores",
            "Un gráfico interactivo con datos actualizables",
            "Una imagen insertada en la celda"
        ],
        answer: "Un enlace que permite saltar a otra ubicación, archivo o página web"
    }

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