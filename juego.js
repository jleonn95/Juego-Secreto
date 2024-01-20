let numeroSecreto = 0;

let intentos = 0;

let listaNumerosSorteados = [];
let numeroMax = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


//document.getElementById solo para obtener id
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    //console.log(numeroSecreto)

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    }else {

        //El usuario no acerto.

        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'numero secreto es menor');
        }else {
            asignarTextoElemento('p','numero secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    };
    return;

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMax){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');

    }else {
        //Si el numero generado esta incluido en la lista hacemos una cosa u otra
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function limpiarCaja(){
    let valorCaja =  document.querySelector('#valorUsuario').value = '';
};

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al 10${numeroMax}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

};

function reiniciarJuego() {
    //limpiar caja del juego
    limpiarCaja();

    //Indicar mensaje de intervalo de numero
    condicionesIniciales();
    //Generar el numero aleatorio
    //Incializar el numero intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
};

condicionesIniciales();


// Arrays
// agrego un elemento con .push
/*let numeroSorteados = [];
console.log(numeroSorteados);

numeroSorteados.push(5);

console.log(numeroSorteados);

numeroSorteados.push(8);

console.log(numeroSorteados.length);

console.log(numeroSorteados[0]);

numeroSorteados.push(3);
console.log(numeroSorteados);

console.log(numeroSorteados[numeroSorteados.length-1]);*/








