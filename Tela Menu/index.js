let numConta = document.getElementById('numConta');
let login = document.getElementById('submitButton');
let saida = document.getElementById('output1');

function mostrarConta(){
    saida.innerHTML = numConta.value;
}

login.addEventListener('click',mostrarConta());

console.log(numConta);