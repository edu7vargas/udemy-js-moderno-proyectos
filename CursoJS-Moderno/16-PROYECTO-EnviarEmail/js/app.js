// Variables
const btnEnviar = document.querySelector('#enviar');

eventListener();


function eventListener(){
    document.addEventListener('DOMContentLoaded',iniciarApp);
}


// funciones
function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed','opacy-50');
    console.log('Iniciando...');
}
