const comprova = document.getElementById('apagaelmovil');
const missatge = document.getElementById('missatge');
const aqui = document.getElementById('aqui');

comprova.addEventListener('click', (e)=>{
    missatge.innerHTML = '';
    let x = aqui.value;

    try {
        if(x == "")throw "Està buit!"

        if(isNaN(x)) throw "No és un número!"

        if(x < 5) throw "No arriba!";

        if(x>10) throw "S'ha pasat!"

    } catch (error) {
        
        missatge.innerHTML = "Hi ha hagut un errer: "+ error;

    }

}), false;