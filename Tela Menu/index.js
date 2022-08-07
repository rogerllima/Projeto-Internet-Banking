function mostrarEditarPerfil() {
    let editarPerfil = document.getElementById('editar-perfil');
    if (editarPerfil.style.display != 'block') {
        editarPerfil.style.display = 'block';
    } else {
        editarPerfil.style.display = 'none';
    }
}

function editarPerfil() {
    let user = JSON.parse(localStorage.getItem("newUser"));
    let nomeUsuario = document.getElementById('nomeUsuario').value;
    let emailUsuario = document.getElementById('emailUsuario').value;
    let dataNascimento = document.getElementById('dataNasc').value;
    user.nome = nomeUsuario;
    user.email = emailUsuario;
    user.dataNascUsuario = dataNascimento;
    localStorage.setItem("newUser", JSON.stringify(user));
    mostrarEditarPerfil()
};

document.addEventListener("DOMContentLoaded", function (e) {
    let user = JSON.parse(localStorage.getItem("newUser"));
    let saldo = 100000
    if (user) {
        document.getElementById("nome").innerHTML = (user.nome)
        document.getElementById("conta").innerHTML = ('Número da conta: ' + user.numeroConta);
        document.getElementById("emailUsuario").innerHTML = (user.email);
        document.getElementById("saldo").innerHTML = ('Saldo: R$' + saldo);
    }
});


function mostrarConteudo(id) {
    //  Capturar status do painel a ser modificado
    let primeiroStyle = document.getElementById(id).style.display;
    //  Desativar todos os paineis
    let paineis = document.getElementsByClassName('painel');
    for (var i = 0; i < paineis.length; i++) {
        paineis[i].style.display = 'none';
    };
    //  Alternar status original do painel a ser modificado
    const targetDiv = document.getElementById(id);
    if (primeiroStyle != "none") {
        targetDiv.style.display = "none";
    } else {
        targetDiv.style.display = "block";
    }
};

function simularEmprestimo() {
    let valorEmprestimo = parseInt(document.getElementById('valorEmprestimo').value);
    let numeroParcelas = parseInt(document.getElementById('parcelasEmprestimo').value);
    let juros = 0.0314;
    let valorJurosInicial = valorEmprestimo * juros;
    let novoValorJuros = 0
    let valorJurosFinal = 0;
    let valorFinalParcelado = 0;
    for (let i = 0; i < numeroParcelas; i++) {
        if (i == 0) {
            novoValorJuros = valorEmprestimo + valorJurosInicial;;
            valorJurosFinal = novoValorJuros;
        } else {
            novoValorJuros = valorJurosFinal * juros;
            valorJurosFinal = valorJurosFinal + novoValorJuros;
        }
        valorFinalParcelado = valorJurosFinal / numeroParcelas;
    }
    console.log(novoValorJuros);
    document.getElementById('valorSimulado').innerHTML = ('R$' + valorJurosFinal.toFixed(2).toString());
    document.getElementById('valorParcela').innerHTML = ('R$' + valorFinalParcelado.toFixed(2).toString());
};

function efetuarLogout() {
    localStorage.removeItem('newUser');
    location.href = '../Tela Login/tela-login.html';
}

function fecharPagina(id) {
    let pagina = document.getElementById(id);
    if (pagina.style.display != 'block') {
        pagina.style.display = 'block';
    } else {
        pagina.style.display = 'none';
    }
}