function validateForm() {
    console.log("ovo")
    let numConta = document.getElementById("numConta").value;
    let senha = document.getElementById("senha").value;

    if (numConta != "" && senha != "") {
        document.getElementById('submitButton').removeAttribute('disabled')
    }

}

function efetuarLogin() {
    let numConta = document.getElementById("numConta").value;
    let user = {
        numeroConta: numConta
    }
    localStorage.setItem("user", JSON.stringify(user));
    location.href = '../Tela Menu/tela-menu.html';

}
document.addEventListener("DOMContentLoaded", function (e) {
    let user = JSON.parse(localStorage.getItem("user"));
    // alert(user.numeroConta);
    document.getElementById("numero-usuario").text = user.numeroConta;
});
