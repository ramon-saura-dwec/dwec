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

let cadena = 'hola, piedra, que, papel, tal, tijeras';
 
function randomChoise() {
    let posibles = ['piedra','papel','tijeras','lagarto','spock'];
    let numeroAleatorio = Math.floor(Math.random()*posibles.length);
    
    return posibles[numeroAleatorio];
}

function game(playerChoise, randomChoise){
    let resultado = false;

    

    return resultado;
}

/* console.log(buscaEleccion(cadena)); */

console.log(randomChoise());