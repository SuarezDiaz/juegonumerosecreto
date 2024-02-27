/*let titulo = document.querySelector("h1");
titulo.innerHTML = "Juego del número secreto";

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Indica un número del 1 al 10";

Este codigo se va a optimizar creando una funcion generica para reutilizarla con los demas elementos HTML
*/

//Se declaran las variables a utilizar
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


//Con esta función modificamos el texto en pantalla
function elementoTexto (elemento,texto){
    let elmentoHTML = document.querySelector(elemento);
    elmentoHTML.innerHTML = texto;
    return;
}

//! Es importante realizar el cambio de string a number con "parseInt."

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroSecreto === numeroDeUsuario) {
        elementoTexto("p", `Acertaste el número en ${intentos} ${(intentos === 1 ) ? "vez" : "veces"} `);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        // El usuario no acertó

        if (numeroSecreto > numeroDeUsuario) {
            elementoTexto("p","El número secreto es mayor");
        } else {
            elementoTexto("p","El número secreto es menor");
        }
        intentos++;
        limpiarCaja();
        //! funcionalidad agregada de manera personal fuera de las instrucciones del curso de Alura 
        //! se le da al usuario un máximo de 3 intentos para acertar
        //! si las oportunidades se terminan el juego finaliza y se habilita el botón de juego nuevo.
        if (intentos > 3){
            elementoTexto("p","Llegaste al número máximo de intentos");
            document.getElementById("reiniciar").removeAttribute("disabled");
        }
    }
    
    return;
}

//* se untiliza el # para seleccionar el id del elemento.

function limpiarCaja(){
   document.querySelector("#valorUsuario").value = '';
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
//* si el número generado esta incluido en la lista 
    
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);

//* si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo){
        elementoTexto ('p','Ya se sortearon todos los números posibles.');
    } else {
//* de otro modo continuamos jugando y almacenando el número generado en la lista de números sorteados. 
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        } 
    }
}

function condicionesIniciales(){
    elementoTexto ("h1","Juego del número secreto!");
    elementoTexto("p",`Indica un número del 1 al ${numeroMaximo} tienes un máximo de 3 intentos.`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalos de números
    //Generar número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Desabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

    condicionesIniciales();
