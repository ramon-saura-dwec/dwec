const form = document.getElementById('form');
const nomUsusari = document.getElementById('nomusuari');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//fuctions
function mostraError(input, missatge) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control error';
    const small = formcontrol.querySelector('small');
    small.innerText = missatge;
}

function mostreCorrecte(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control correcto';
}

function prenNomInput(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function esEmailValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function esObligatori(inputArray) {
    inputArray.forEach(input => {
        if(input.value.trim() === ''){
            let missatge = `${prenNomInput(input)} és obligatori`
            mostraError(input, missatge);
            
        }else{
            mostreCorrecte(input);
        }
    });
}

function comprovaLongitud(inputArray){
    let min;
    let max;
    let inputValue;

    inputArray.forEach(input =>{
        inputValue = input[0].value;
        min = input[1];
        max = input[2];

        console.log(inputId, inputValue);

        if(inputValue.length > 0){
            if(inputValue.length < min){
                let missatge = `${prenNomInput(input[0])} ha de tenir almenys ${min} caràcters`;
                mostraError(input[0], missatge);
            }else if(inputValue.length > max){
                let missatge = `${prenNomInput(input[0])} ha de tenir màxim ${max} caràcters`;
                mostraError(input[0], missatge);
            }else{
                mostreCorrecte(input[0]);
            }
        }
    })
    
} 

function comprovaContrasenyasSonIguals(input1, input2) {

    if(input1.value === input2){
        mostreCorrecte()
    }else{
        let missatge = `${prenNomInput(input2)} ha de ser igual que ${prenNomInput(input1)}`;
        mostraError(input2, missatge);
    }
    
}

function esEmailValid(input) {
    
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(re.test(String(input.value.trim()))){
        mostreCorrecte(input);    
    }else{
        let missatge = `${prenNomInput(input)} no te el format correcte`;
        mostraError(input, missatge);
    }
    
}

//Eventos

form.addEventListener('submit', function(e){
    e.preventDefault();

    esObligatori([nomUsusari, email, password, password2]);

    comprovaLongitud([[nomUsusari, 3, 15],[password, 6, 25]]);

    esEmailValid(email);

    comprovaContrasenyasSonIguals(password, password2);
})
