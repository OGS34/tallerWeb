// Función para añadir caracteres al resultado
function appendToResult(value) {
    document.getElementById('result').value += value;
}

// Función para aplicar funciones matemáticas
function applyFunction(func) {
    var resultField = document.getElementById('result');
    var currentValue = resultField.value;
    if (currentValue !== '') {
        try {
            var result = eval(func + '(' + currentValue + ')');
            resultField.value = result;
        } catch (error) {
            resultField.value = 'Error';
        }
    }
}

// Función para calcular el resultado
function calculate() {
    var resultField = document.getElementById('result');
    var currentValue = resultField.value;
    if (currentValue !== '') {
        try {
            var result = eval(currentValue);
            resultField.value = result;
            // Guardar el cálculo en el historial
            saveToHistory(currentValue + ' = ' + result);
        } catch (error) {
            resultField.value = 'Error';
        }
    }
}

// Función para limpiar el resultado
function clearResult() {
    document.getElementById('result').value = '';
}

// Función para guardar el cálculo en el historial
function saveToHistory(calculation) {
    // Obtener el historial de cálculos del almacenamiento local
    var history = localStorage.getItem('calculationHistory');
    if (history) {
        // Si existe, convertirlo de cadena JSON a array
        history = JSON.parse(history);
    } else {
        // Si no existe, crear un array vacío
        history = [];
    }
    // Añadir el nuevo cálculo al historial
    history.push(calculation);
    // Guardar el historial de cálculos en el almacenamiento local
    localStorage.setItem('calculationHistory', JSON.stringify(history));
}

// Función para mostrar el historial de cálculos
document.getElementById('btnShowPrevious').addEventListener('click', function() {
    // Obtener el historial de cálculos del almacenamiento local
    var history = localStorage.getItem('calculationHistory');
    if (history) {
        // Si existe, convertirlo de cadena JSON a array
        history = JSON.parse(history);
        // Mostrar el historial en una ventana emergente
        alert('Historial de Cálculos:\n' + history.join('\n'));
    } else {
        // Si no hay historial, mostrar un mensaje
        alert('No hay historial de cálculos.');
    }
});
