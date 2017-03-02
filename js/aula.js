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
function alterarValor() {
    var valor1 = document.getElementById('nome2').value;
    nome2.value = document.getElementById('senha2').value;
    senha2.value = valor1;
}
function img1() {
    document.getElementById('img').src = "https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
}
function img2() {
    document.getElementById('img').src = "https://s.ytimg.com/yts/imgbin/www-hitchhiker-vflm-serG.webp";
}
function img3() {
    document.getElementById('img').src = "https://ae01.alicdn.com/kf/HTB11mOtKpXXXXXZXFXXq6xXFXXXc/100-Resina-Gmask-Slipknot-Slipknot-Joey-M&aacute;scara-Cosplay-Assustador-M&aacute;scara-Branca-M&aacute;scara-Adulto-Fantasia-Festa-a.jpg";
}