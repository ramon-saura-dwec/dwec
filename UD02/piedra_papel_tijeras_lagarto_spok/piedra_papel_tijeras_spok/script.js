let cadena = document.getElementById('paraula');
let victoriasJugador = 0;
let victoriasMaquina = 0;
let jugador = document.getElementById('nom');



document.getElementById('jugar').addEventListener('click', ()=>{
    console.log(jugador.value);
    console.log(cadena.value.toLowerCase().trim());
})

function buscaEleccion(respuesta) {
   let posibles = ['piedra','papel','tijeras','lagarto','spock'];
   let cadena = respuesta.split(',');
   let index = [];
   let min;
   let eleccio;


   for (let i = 0; i < cadena.length; i++) {
            let aux = cadena[i].trim();
            index[i] = -1;
            for (let j = 0; j < posibles.length; j++) {
                let aux2 = posibles[j];
                if (aux.indexOf(aux2) !== -1) {
                    index[i] = i;
                }
            }         
    }

    min = -1;

    for (let i = 0; i < index.length; i++) {
       if(index[i] !== -1){
        if(min > index[i] || min === -1){
            min = index[i];
        }    
       }
    }

    eleccio = cadena[min].trim();

    return eleccio;
}

 
function randomChoise() {
    let posibles = ['piedra','papel','tijeras','lagarto','spock'];
    let numeroAleatorio = Math.floor(Math.random()*posibles.length);
    
    return posibles[numeroAleatorio];
}

function game(playerChoise, randomChoise){
    let resultado = false;

    if(playerChoise == 'tijeras' && randomChoise == 'papel' || randomChoise == 'lagarto'){
        victoriasJugador++
    }

    if(randomChoise == 'tijeras' && playerChoise == 'papel' || playerChoise == 'lagarto'){
        victoriasMaquina++
    }

    if(playerChoise == 'piedra' && randomChoise == 'tijeras' || randomChoise == 'lagarto'){
        victoriasJugador++
    }

    if(randomChoise == 'piedra' && playerChoise == 'tijeras' || playerChoise == 'lagarto'){
        victoriasMaquina++
    }

    if(playerChoise == 'papel' && randomChoise == 'piedra' || randomChoise == 'spock'){
        victoriasJugador++
    }

    if(randomChoise == 'papel' && playerChoise == 'piedra' || playerChoise == 'spock'){
        victoriasMaquina++
    }

    if(playerChoise == 'lagarto' && randomChoise == 'papel' || randomChoise == 'spock'){
        victoriasJugador++
    }

    if(randomChoise == 'lagarto' && playerChoise == 'papel' || playerChoise == 'spock'){
        victoriasMaquina++
    }

    if(playerChoise == 'spock' && randomChoise == 'tijeras' || randomChoise == 'piedra'){
        victoriasJugador++
    }

    if(randomChoise == 'spock' && playerChoise == 'tijeras' || playerChoise == 'piedra'){
        victoriasMaquina++
    }
    

    return resultado;
}

/* console.log(buscaEleccion(cadena)); */

//console.log(randomChoise());