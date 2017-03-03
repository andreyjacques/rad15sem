function maior() {
    var cp1 = Number(document.getElementById("campo1").value),
            cp2 = Number(document.getElementById("campo2").value),
            cp3 = Number(document.getElementById("campo3").value),
            resultado = document.getElementById("resultado");
    if (cp1 > cp2 && cp1 > cp3) {
        resultado.innerHTML = 'O maior é: ' + cp1;
    } else if (cp2 > cp1 && cp2 > cp3) {
        resultado.innerHTML = 'O maior é: ' + cp2;
    } else if (cp3 > cp1 && cp3 > cp2) {
        resultado.innerHTML = 'O maior é: ' + cp3;
    }
}

function maiorVetor() {
    var k = 0,
            n0 = Number(document.getElementById("n1").value),
            n1 = Number(document.getElementById("n2").value),
            n2 = Number(document.getElementById("n3").value),
            n3 = Number(document.getElementById("n4").value),
            n4 = Number(document.getElementById("n5").value),
            n5 = Number(document.getElementById("n6").value),
            n6 = Number(document.getElementById("n7").value),
            n7 = Number(document.getElementById("n8").value),
            n8 = Number(document.getElementById("n9").value),
            n9 = Number(document.getElementById("n0").value),
            resultado = document.getElementById("resultado-vetor"),
            vetor = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n0],
            i;
    k = 0;
    for (i = 1; i < vetor.length; i++) {
        if (vetor[i] > vetor[k]) {
            k = i;
        }
    }
    resultado.innerHTML = 'O maior é: ' + vetor[k];
}

function gerar() {
    var n = Number(document.getElementById('qtd').value),
            vetor = new Array();
    console.log(n);
    for (i = 0; i < n; i++) {
        vetor[i] = '<input type="number" id="n' + i + '"placeholder="valor ' + i + '"><br>';
    }
    document.getElementById('form').innerHTML = vetor;
    document.getElementById('btn-gerar').remove();
}

function comparar() {
    var n = Number(document.getElementById('qtd').value),
            vetor = new Array(),
            k = 0,
            r = document.getElementById('r');
    for (var i = 0; i < n; i++) {
        vetor[i] = Number(document.getElementById('n' + i).value);
    }
    for (i = 1; i < vetor.length; i++) {
        if (vetor[i] > vetor[k]) {
            k = i;
        }
    }
    r.innerHTML = 'O maior é: ' + vetor[k];
}
