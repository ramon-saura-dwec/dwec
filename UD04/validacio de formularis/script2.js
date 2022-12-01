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
//Eventos

form.addEventListener('submit', function(e){
    e.preventDefault();

    if(nomUsusari.value === ''){
        mostraError(nomUsusari, 'és obligatori')
    }

    if(email.value === ''){
        mostraError(email, 'és obligatori')
    }else if(!esEmailValid(email.value)){
        mostraError(email, 'no és valid')
    }else{
        mostreCorrecte(email);
    }

    if(password.value === ''){
        mostraError(password, 'és obligatori')
    }else{
        mostreCorrecte(password);
    }
    
    if(password2.value === ''){
        mostraError(password2, 'és obligatori')
    }else{
        mostreCorrecte(password2);
    }
})
