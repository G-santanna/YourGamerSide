// sessão
function validarSessao() {
    var email = sessionStorage.userEmail;
    var username = sessionStorage.userName;

    if (email != null && username != null) {
        bemVindo.innerHTML = `<h1>Seja bem vindo, ${username}!</h1>`
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}