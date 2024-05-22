document.getElementById('calcularBtn').addEventListener('click', function() {
    // Obtener los valores de los inputs
    const edad = parseInt(document.getElementById('fechaNacimiento').value);
    const ingresoMensual = parseFloat(document.getElementById('inputSaldoActual').value);
    const saldoActual = parseFloat(document.getElementById('inputSaldoActual2').value);

    // Validar que los valores sean números válidos
    if (isNaN(edad>17) || isNaN(ingresoMensual>0) || isNaN(saldoActual>0)) {
        alert('Por favor, ingrese valores válidos en todos los campos.');
        return;
    }

    // Calcular la pensión y el fondo estimado
    const pensionEstimada = calcularPension(edad, ingresoMensual);
    const fondoEstimado = calcularFondo(edad, ingresoMensual, saldoActual);

    // Actualizar los elementos del DOM con los resultados
    document.getElementById('pensionEstimada').innerText = `S/ ${pensionEstimada.toFixed(2)}`;
    document.getElementById('fondoEstimado').innerText = `S/ ${fondoEstimado.toFixed(2)}`;
    document.getElementById('saldoActual').innerText = `S/ ${saldoActual.toFixed(2)}`;
});

function calcularPension(edad, ingresoMensual) {
    return ingresoMensual * edad * 0.6 / 12;
}

function calcularFondo(edad, ingresoMensual, saldoActual) {
    return (edad * ingresoMensual) + saldoActual;
}
