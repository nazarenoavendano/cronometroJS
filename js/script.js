var intervalo = undefined;
var tiempoRestante = 0;
var tiempoTotal = 0;


function iniciarTiempo(){
    pararTiempo() //si paras el tiempo, evitas el doble click y te aseguras que funcione el parar
    intervalo = setInterval(actualizarTiempo, 10);
}

function resetearTiempo(){
    pararTiempo()
    tiempoRestante = -10;
    actualizarTiempo();
    temporizador.style.color = "white";
    temporizadorML.style.color = "white";
}

function pararTiempo() {
    clearInterval(intervalo);
    /* 
        RARAMENTE FUNCIONA SOLO SI IGUALO EL INTERVALO A CERO
    */
    intervalo = undefined
}

function actualizarTiempo() {
    tiempoRestante = tiempoRestante + 10;

    let temporizador = document.getElementById("temporizador");
    let temporizadorML = document.getElementById("temporizadorML");

    let milisegundos = tiempoRestante % 1000;

    temporizador.innerHTML = Math.floor(tiempoRestante / 1000);

    temporizadorML.innerHTML = Math.floor(milisegundos / 10);
    /*
        AGREGO COLORES ACCEDIENDO AL STYLE
    */
    temporizador.style.color = "lime";
    temporizadorML.style.color = "fuchsia";
}

