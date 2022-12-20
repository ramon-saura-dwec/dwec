const botones = document.getElementsByTagName('button');
resultat = document.getElementById('resultat');

let w;

function startWebWorker() {
    if(typeof(Worker) !== 'undefined'){
        if(typeof(w) === 'undefined'){
            w = new Worker('treballador');
        }

        w.onmessage = function(event) {
            resultat.innerHTML = event.data;
        }

    }else{
        resultat.innerHTML = 'Fallo al ejecutar el Worker!';
    }
}

function stopWebWorker() {
    w.terminated();

    w = undefined;
}

botones[0].addEventListener('click'),()=>{
    startWebWorker();
}

botones[1].addEventListener('click'),()=>{
    stopWebWorker();
}