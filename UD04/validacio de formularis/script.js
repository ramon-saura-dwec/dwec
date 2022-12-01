const form = document.getElementById('form');
const nomUsusari = document.getElementById('nomusuari');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//fuctions
function mostraError(input, missatge) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control error';
    const label = formcontrol.querySelector('label');
    const small = formcontrol.querySelector('small');
    small.innerText = label.innerText + ' ' + missatge;
}

function mostreCorrecte(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control correcto';
}

function esEmailValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function esObligatori(inputArray) {
    inputArray.forEach(input => {
        if(input.value.trim() === ''){
            mostraError(input, 'és obligatori');
        }else{
            mostreCorrecte(input);
        }
    });
}
//Eventos

form.addEventListener('submit', function(e){
    e.preventDefault();

    esObligatori([nomUsusari, email, password, password2]);

})
