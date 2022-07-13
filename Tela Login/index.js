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
document.addEventListener("DOMContentLoaded", function (e) {
    let user = JSON.parse(localStorage.getItem("user"));
    document.getElementById("nome").innerHTML = user.nomeUsuario;
    document.getElementById("conta").innerHTML = user.numeroConta;
    document.getElementById("saldo").innerHTML = user.saldo;

});
function mostrarConteudo(id) {
    const targetDiv = document.getElementById(id);
    if (targetDiv.style.display != "none") {
        targetDiv.style.display = "none";
    } else {
        targetDiv.style.display = "block";
    }
};
