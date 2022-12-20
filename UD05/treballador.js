let anterior = 0;
let actual = 0;
let secuencia = '';

function fibonacci() {
    if(!anterior){
        secuencia += ' ' + actual;
    }else{
        secuencia += ' - ' + actual;
    }

    postMessage(secuencia);

    aux = anterior + actual;
    anterior = actual;
    actual = aux;

    setTimeout('fibonacci()',500);
}

fibonacci();