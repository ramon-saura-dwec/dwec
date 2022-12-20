const TABLA = document.getElementById('tabla');
let local = [];
let visitante = [];

while (visitante.length != 10) {
    let numeroAleatori = Math.floor(Math.random()*homes.length);
    if(local.length != 10) {
        if(local.indexOf(homes[numeroAleatori]) < 0){
            local.push(homes[numeroAleatori]);
        }
    }

    if(visitante.length != 10){
        if(local.indexOf(homes[numeroAleatori]) < 0 && visitante.indexOf(homes[numeroAleatori]) < 0){
            visitante.push(homes[numeroAleatori]);
        }
    }
}

TABLA.innerHTML = '<tr><th>Local</th><th></th><th>Visitante</th></tr>'
for (let i = 0; i < local.length; i++) {
    TABLA.innerHTML += '<tr><td>'+ local[i] +'</td><td class="vs">vs</td><td>'+visitante[i]+'</td></tr>'
}