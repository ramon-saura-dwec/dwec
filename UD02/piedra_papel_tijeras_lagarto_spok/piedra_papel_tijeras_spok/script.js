let cadena = document.getElementById('paraula');
let victoriasJugador = 0;
let victoriasMaquina = 0;
let jugador = document.getElementById('nom');
let resultat = document.getElementById('resultat');
let resposta = document.getElementById('feedback');




document.getElementById('jugar').addEventListener('click', ()=>{
    if(cadena.value.length > 0 && jugador.value.length > 0 && cercaEleccio(cadena.value).length > 0){
        if(jugador.value.length > 0 ){
            jugador.innerText = jugador.value;
            jugador.disabled = true;
        }
        let eleccioJugador = cercaEleccio(cadena.value.toLowerCase().trim());
        let eleccioMaquina = randomChoise();
        resposta.innerHTML = `${jugador.value} has triat: ${eleccioJugador}. </br> El contrari ha triat: ${eleccioMaquina}. </br> Has ${game(eleccioJugador, eleccioMaquina)}!`;
        resultat.innerHTML = `${victoriasJugador} - ${victoriasMaquina}`;
    }else{
        resposta.innerText = `Si no completes els camps no es por començar a jugar. \n A més una de les paraules claus ha de ser una de les del joc. `
    }
})

function cercaEleccio(resposta) {
    let possibles = ['piedra','papel','tijeras','lagarto','spock'];
    let eleccio = '';

    for (let i = 0; i < possibles.length; i++) {
        if(resposta.indexOf(possibles[i]) >= 0 || resposta.indexOf(possibles[i]) > eleccio){
            eleccio =  possibles[i];
        }
    }
    
    return eleccio;
}

function randomChoise() {
    let posibles = ['piedra','papel','tijeras','lagarto','spock'];
    let numeroAleatorio = Math.floor(Math.random()*posibles.length);
    
    return posibles[numeroAleatorio];
}

function game(eleccioJugador, eleccioMaquina){
    let resultado = 'perdut';

    if(eleccioJugador === eleccioMaquina){
        resultado = 'empatat';
    }

    if(eleccioJugador === 'tijeras' && eleccioMaquina === 'papel' || eleccioMaquina === 'lagarto'){
        resultado = 'guanyat';
    }

    if(eleccioJugador === 'spock' && eleccioMaquina === 'tijeras' || eleccioMaquina === 'piedra'){
        resultado = 'guanyat';
    }

    if(eleccioJugador === 'lagarto' && eleccioMaquina === 'papael' || eleccioMaquina === 'spock'){
        resultado = 'guanyat';
    }

    if(eleccioJugador === 'piedra' && eleccioMaquina === 'tijeras' || eleccioMaquina === 'lagarto'){
        resultado = 'guanyat';
    }

    if(eleccioJugador === 'papel' && eleccioMaquina === 'piedra' || eleccioMaquina === 'spock'){
        resultado = 'guanyat';
    }


    if(resultado !== 'guanyat' && resultado !== 'empatat'){
        victoriasMaquina++;
    }else if(resultado !== 'empatat'){
        victoriasJugador++;
    }
    
    return resultado;
}