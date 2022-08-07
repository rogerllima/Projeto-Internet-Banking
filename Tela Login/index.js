function validateForm() {
    let numConta = document.getElementById("numConta").value;
    let senha = document.getElementById("senha").value;

    if (numConta != "" && senha != "") {
        document.getElementById('submitButton').removeAttribute('disabled')
    }

}
function mostrarFormRegistro() {
    let registrarUsuario = document.getElementById('form-registro');
    if (registrarUsuario.style.display != 'block') {
        registrarUsuario.style.display = 'block';
    } else {
        registrarUsuario.style.display = 'none';
    }
}
function registrarUsuario() {
    let novoNome = document.getElementById('novoNome').value;
    let novoEmail = document.getElementById('novoEmail').value;
    let novaSenha = document.getElementById('novaSenha').value;
    let dataNasc = document.getElementById('dataNascimento').value;
    let numConta = Math.floor(Math.random() * 1000000);
    let newUser = {
        nome: novoNome,
        email: novoEmail,
        senha: novaSenha,
        numeroConta: numConta,
        dataNascUsuario: dataNasc
    }
    localStorage.setItem('newUser', JSON.stringify(newUser))
    salvarUsuarios();
    location.href = '../Tela Menu/tela-menu.html';

}

function validarRegistro() {
    let novoNome = document.getElementById('novoNome').value;
    let novoEmail = document.getElementById('novoEmail').value;
    let novaData = document.getElementById('dataNascimento').value;
    let novaSenha = document.getElementById('novaSenha').value;
    let novaSenhaRep = document.getElementById('novaSenhaRepetida').value;
    if (novoNome != "" && novoEmail != "" && novaSenha != "" && novaData != "") {
        document.getElementById('btnEnviarRegistro').removeAttribute('disabled')
    }
    if (novaSenha != novaSenhaRep) {
        document.getElementById('btnEnviarRegistro').setAttribute('disabled','disabled')
    }
}

function efetuarLogin() {

    location.href = '../Tela Menu/tela-menu.html';

}

function fecharPagina(id) {
    let pagina = document.getElementById(id);
    if (pagina.style.display != 'block') {
        pagina.style.display = 'block';
    } else {
        pagina.style.display = 'none';
    }

}


function salvarUsuarios() {
    let user = JSON.parse(localStorage.getItem("newUser"));
    if (localStorage.getItem('listaUsuarios') == null) {
        localStorage.setItem('listaUsuarios', '[]')
    };
    lista = JSON.parse(localStorage.getItem('listaUsuarios'));
    lista.push(user);
    localStorage.setItem('listaUsuarios', JSON.stringify(lista));
}


