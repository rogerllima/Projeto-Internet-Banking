function validateForm() {
    let numConta = document.getElementById("numConta").value;
    let senha = document.getElementById("senha").value;

    if (numConta != "" && senha != "") {
        document.getElementById('submitButton').removeAttribute('disabled')
    }

}

function efetuarLogin() {
    let numConta = document.getElementById("numConta").value;
    let user = {
        numeroConta: numConta,
        nomeUsuario: "Curi",
        saldo: "100000"
    }
    localStorage.setItem("user", JSON.stringify(user));
    location.href = '../Tela Menu/tela-menu.html';

}

function efetuarLogout(){
    localStorage.clear();
    location.href = '../Tela Login/tela-login.html';
}

document.addEventListener("DOMContentLoaded", function (e) {
    let user = JSON.parse(localStorage.getItem("user"));
    document.getElementById("nome").innerHTML = ('Nome: '+user.nomeUsuario);
    document.getElementById("conta").innerHTML = ('Número da conta: '+user.numeroConta);
    document.getElementById("saldo").innerHTML = ('Saldo: R$'+user.saldo);

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
            novoValorJuros = valorJurosFinal*juros;
            valorJurosFinal = valorJurosFinal+novoValorJuros;
        }
        valorFinalParcelado = valorJurosFinal/numeroParcelas;
    }
    console.log(novoValorJuros);
    document.getElementById('valorSimulado').innerHTML = ('R$'+valorJurosFinal.toFixed(2).toString());
    document.getElementById('valorParcela').innerHTML = ('R$'+valorFinalParcelado.toFixed(2).toString());
};