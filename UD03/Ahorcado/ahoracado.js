let palabraCorrecta = "";
let letrasCorrectas = document.getElementById("letrasCorrectas");
let letrasIncorrectas = document.getElementById("letrasIncorrectas");
let arrayAciertos = [];
let arrayFallos = [];
let counterFallos = 0;
let elCrono;
let elCrono2;
let start = document.getElementById('start');
let laMevaData = new Date();
let laMevaData2 = new Date();
let horaMostrar = document.getElementById('hora');
const MAX_FALLOS = 9;
let intentos = document.getElementById('intentos');
let jugador = document.getElementById('nom');
let tiempo = 0;
let estadistica = [];
let showEstadistica = document.getElementById('est');
let nomJugador = '';
let victoria = false;
let arrPalabras = ['azul','verde','amarillo','armadillo','zambomba','trompeta','papelera','papeleria','pantalon','camiseta','abrigo','zapatos','agua','vino','cerveza','colesterol','almohada','alcoba','vaca','caballo','perro','gato','lagartija']

//funcio per triar una paraula al atzar per jugar
function elegirPalabra(){
  let rand = Math.floor(Math.random()*arrPalabras.length);
  palabraCorrecta = arrPalabras[rand];
  console.log(palabraCorrecta);
}

//es tria una paraula al atzar
elegirPalabra();

//comprobam si hi ha alguna cosa guardada a nes local storage, si és així ho guardam a s'array
//'estadistica' per poder-ho mostrar més endevant.
if(typeof sessionStorage.estadistica !== 'undefined'){
  let aux = sessionStorage.estadistica.split(' ');
  estadistica = aux;
}

//capturam el nom del jugador
jugador.addEventListener('change', (e)=>{
  nomJugador = e.target.value;
})

//mostram l'estadistica per pantalla
showEstadistica.innerHTML = mostrarEstadistica(estadistica);

//aqui cream l'objecte que es guada per l'estadistica de cada jugador i ho guardam a 
//continuació de l'existent a local storage
function setEstadistica(jugador, tiempo, resultado) {
  const datos = {nom: jugador, tiempo: tiempo, resultado: resultado};  
  if(typeof sessionStorage.estadistica !== 'undefined'){
    sessionStorage.setItem('estadistica',sessionStorage.estadistica +' '+JSON.stringify(datos));
  }else{
    sessionStorage.setItem('estadistica', JSON.stringify(datos))
  }
}

//li donam format a la hora, en aquest cas comença als 10 segons
laMevaData.setHours(0,0,10,0);

//mostram el contador per pantalla que comença en 10 segons i anirá baixant 'contaenrera'
horaMostrar.innerHTML = "00:10";

//mostram per pantalla la cantitat de falls que restan per perdre
intentos.innerHTML =  'Fallos posibles: '+(MAX_FALLOS - counterFallos);

//li donam format a la hora que utilitzam per el contador de temps transcorregut, aquest va cap amunt
laMevaData2.setHours(0,0,0,0);

//aquesta funcio va sumant segon a segon per saber quan de temps ha trigat el jugador en acabar la partida
function tempsPasat() {

  let min = laMevaData2.getMinutes();
  let seg = laMevaData2.getSeconds();
  
  seg += 1;

  laMevaData2.setSeconds(seg);

  tiempo = min + seg;
  
}


//aquesta funcio va restant segons al contador de 10 segons fins arribar a 0 i torna a començar sumant un fall
function crono(){
  
  let minutos =  laMevaData.getMinutes();
  let segundos = laMevaData.getSeconds();  
  
  segundos -= 1;  
  
  if(minutos < 10){
    minutos = `0${minutos}`;
  }  
  
  if(segundos < 10){
    segundos = `0${segundos}`;
  }
  
  laMevaData.setSeconds(segundos);
  
  horaMostrar.innerHTML = `${minutos}:${segundos}`;
  
  if(horaMostrar.innerHTML === '00:00'){
    counterFallos++
    intentos.innerHTML = 'Fallos posibles: '+(MAX_FALLOS - counterFallos);
    comprobarFallos();
    clearInterval(elCrono);
    laMevaData.setHours(0,0,10,0);
    horaMostrar.innerHTML = "00:10";
    elCrono = setInterval(crono,1000);
  }
}

//omplim l'array d'acerts amb guions perque es vegi més maco
for (let i = 0; i < palabraCorrecta.length; i++) {
  arrayAciertos[i] = "_";
}

//quan clicam el boto start activam el joc
start.addEventListener('click',()=>{
  elCrono = setInterval(crono,1000);
  elCrono2 = setInterval(tempsPasat, 1000);
  document.querySelector('.botones').classList.remove('not-active');
  start.disabled = true;
})

//capturam les lletres seleccionades i comprobam que nomes en vengui una, ja que si cliques 
//entre les lletre et torna totes les que hi ha a la filera i comprobam que la lletra 
//estigui o no a la paraula.
document.querySelector('.botones').addEventListener('click',(e)=>{
  if(e.target.innerText.length === 1){
    letra = e.target.innerText;
    comprobarLetra(letra);
  }
})

//mostram les lletres de la paraula a endivinar d'una forma agradable per el jugador
function mostrarLetras(arr) {
  let palabra = '';

  for (let i = 0; i < arr.length; i++) {
    palabra += arr[i] + ' ';
  }

  return palabra.toLocaleUpperCase();
}

//mostram l'estadistica d'una forma més agradable per el jugador
function mostrarEstadistica(arr) {
  let arrAux = [];
  for (let i = 0; i < arr.length; i++) {
    arrAux.push(JSON.parse(arr[i]));
  }

  arrAux.sort(function (a, b) {
    if (a.tiempo > b.tiempo) {
      return 1;
    }
    if (a.tiempo < b.tiempo) {
      return -1;
    }
    return 0;
  });

  let cadena = '';

    for (let i = 0; i < arrAux.length; i++) {
        let resultado = "";
        if(arrAux[i].resultado === true){
          resultado = 'victoria';
        }else{
          resultado = 'derrota';
        }
        cadena += 'Nom: ' + arrAux[i].nom + '. Temps: ' + arrAux[i].tiempo + '. Resultat: '+ resultado +'. <br>';
    }

    return cadena;
}


//mostram les lletres fallades d'una forma més agradable per el jugador
function mostrarLetrasIncorrectas(arr) {
  let palabra = '';

  for (let i = 0; i < arr.length; i++) {
    palabra += arr[i] + ' ';
  }

  return palabra.toLocaleUpperCase();
}

//mostram les lletres correctes per pantalla
letrasCorrectas.innerHTML = mostrarLetras(arrayAciertos);

//en aquesta funcio comprobam si la lletra seleccionada esta malament i
//si ens queden falls per poder continuar jugant
function comprobarFallos() {
  if (counterFallos === MAX_FALLOS) {
    document.getElementById('penjat').style.display = 'flex';
    clearInterval(elCrono2);
    setTimeout(()=>{
      alert("Has perdido la partida");
      setEstadistica(nomJugador, tiempo, victoria);
      location.reload();
    },1000);
  }
}

//comprobam si la lletra es correcte i si la paraula esta completa
function comprobarLetra(letra) {
  if (palabraCorrecta.indexOf(letra) !== -1) {
    while (palabraCorrecta.indexOf(letra) !== -1) {
      arrayAciertos[palabraCorrecta.indexOf(letra)] = letra;
      palabraCorrecta = palabraCorrecta.replace(letra, "_");
      clearInterval(elCrono);
    laMevaData.setHours(0,0,10,0);
    horaMostrar.innerHTML = "00:10";
    elCrono = setInterval(crono,1000);
    }
    letrasCorrectas.innerText = mostrarLetras(arrayAciertos);
    if (arrayAciertos.indexOf("_") === -1) {
      document.getElementById('focs').style.display = 'flex';
      clearInterval(elCrono2);
      victoria = true;
      setTimeout(()=>{
        alert("Has ganado!");
        setEstadistica(nomJugador, tiempo, victoria);
        location.reload();
      },1000);
    }
  } else {
    arrayFallos.push(letra);
    letrasIncorrectas.innerText = mostrarLetrasIncorrectas(arrayFallos);
    counterFallos++;
    intentos.innerHTML = 'Fallos posibles: '+(MAX_FALLOS - counterFallos); 
    comprobarFallos();
  }
}