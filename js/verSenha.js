function verSenha() {
    var btnSenha = document.getElementById('senha');
    var btnVersenha = document.getElementById('btn-ver');
    if (btnSenha.type == "text") {

        btnSenha.type = "password";
        btnVersenha.value = "Ver Senha";
        btnSenha.style.color = "red";
    } else {
        btnSenha.type = "text";
        btnVersenha.value = "Ocutar Senha";
        btnSenha.style.color = "blue";
    }
}