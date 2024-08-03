function obtenerContador(id, valorInicial) {
    const valor = localStorage.getItem(id);
    return valor !== null ? parseInt(valor, 10) : valorInicial;
}

function guardarContador(id, valor) {
    localStorage.setItem(id, valor);
}

function reiniciarContadores() {
    localStorage.removeItem('contador1');
    localStorage.removeItem('contador2');
    contador1 = 0;
    contador2 = 0;
    document.getElementById('contador1').innerText = contador1;
    document.getElementById('contador2').innerText = contador2;
}

function toggleContadores() {
    const countersDiv = document.getElementById('counters');
    const controlsDiv = document.getElementById('controls');
    const showBtn = document.getElementById('show-btn');
    const resetBtn = document.getElementById('reset-btn');
    const toggleBtn = document.getElementById('toggle-btn');

    if (countersDiv.style.display === 'none') {
        countersDiv.style.display = 'block';
        controlsDiv.style.display = 'none';
        resetBtn.style.display = 'block';
        document.getElementById('contador1').innerText = obtenerContador('contador1', 0);
        document.getElementById('contador2').innerText = obtenerContador('contador2', 0);
    } else {
        countersDiv.style.display = 'none';
        controlsDiv.style.display = 'block';
        resetBtn.style.display = 'none';
    }
}

let contador1 = obtenerContador('contador1', 0);
let contador2 = obtenerContador('contador2', 0);

document.getElementById('contador1').innerText = contador1;
document.getElementById('contador2').innerText = contador2;

function aumentarContador1() {
    contador1++;
    document.getElementById('contador1').innerText = contador1;
    guardarContador('contador1', contador1);
}

function aumentarContador2() {
    contador2++;
    document.getElementById('contador2').innerText = contador2;
    guardarContador('contador2', contador2);
}