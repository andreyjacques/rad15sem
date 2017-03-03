var maior = 0, indice = 0, vetor = new Array();
//Codigo do kaio
function insere() {
    var n = Number(document.getElementById("valor").value);

    if (maior < n) {
        maior = n;
    }

    vetor[indice] = n;
    indice++;
    imprime_vetor();
    document.getElementById("valor").value = "";
}
function imprime_vetor() {
    document.getElementById("resultado_vetor").innerText = "";
    for (var i = 0; i < indice; i++) {
        document.getElementById("resultado_vetor").innerText += " | " + vetor[i];
    }
    document.getElementById("resultado_vetor").innerText += " | ";
}
function maior_valor() {
    document.getElementById("resultado_maior").innerText = "Maior valor e: " + maior;
}