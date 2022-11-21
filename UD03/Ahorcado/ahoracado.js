let palabraCorrecta = "azul";
let letrasCorrectas = document.getElementById("letrasCorrectas");
let letrasIncorrectas = document.getElementById("letrasIncorrectas");
let arrayAciertos = [];
let arrayFallos = [];
let counterFallos = 0;
for (let i = 0; i < palabraCorrecta.length; i++) {
  arrayAciertos[i] = "_";
}
letrasCorrectas.innerText = arrayAciertos;
function comprobarLetra(letra) {
  if (palabraCorrecta.indexOf(letra) !== -1) {
    while (palabraCorrecta.indexOf(letra) !== -1) {
      arrayAciertos[palabraCorrecta.indexOf(letra)] = letra;
      palabraCorrecta = palabraCorrecta.replace(letra, "_");
    }
    letrasCorrectas.innerText = arrayAciertos;
    if (arrayAciertos.indexOf("_") === -1) {
      alert("Has ganado!");
      document.getElementById("letras").style.display = "none";
    }
  } else {
    arrayFallos.push(letra);
    letrasIncorrectas.innerText = arrayFallos;
    counterFallos++;
    if (counterFallos === 9) {
      alert("Has perdido la partida");
      document.getElementById("letras").style.display = "none";
    }
  }
}