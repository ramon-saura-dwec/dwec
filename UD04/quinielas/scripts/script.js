let local = [];
let visitante = [];

while (visitante.length != 10) {
    let numeroAleatori = Math.floor(Math.random()*homes.length);
    if(local.length != 10) {
        if(local.indexOf(homes[numeroAleatori]) < 0){
            local.push(homes[numeroAleatori]);
        }
    }
    if(local.indexOf(homes[numeroAleatori]) < 0 && visitante.indexOf(homes[numeroAleatori]) < 0){
        visitante.push(homes[numeroAleatori]);
    }
}

for (let i = 0; i < local.length; i++) {
    console.log(local[i]+ ' vs ' +visitante[i]);
}