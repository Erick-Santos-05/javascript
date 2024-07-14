function contar() {
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var num3 = document.getElementById('num3');
    var resul = document.getElementById('resul');
    var h2 = document.getElementById('h2');
    resul.innerHTML = ''

    if (num1.value.length == '' || num2.value.length == '' || num3.value.length == '') {
        h2.innerHTML = 'Impossível contar.'
    } else {
        var inicio = parseInt(num1.value);
        var fim = parseInt(num2.value);
        var passo = parseInt(num3.value);

        if (passo <= 0) {
            alert('Número inválido. Passo deve conter valor minímo 1. Considerando passo 1.');
            passo = 1;
        }

        h2.innerHTML = 'Contando:'
        resul.innerHTML+=inicio
        if (inicio < fim) {
            for (i = inicio+passo; i <= fim; i = i + passo) {
                resul.innerHTML += '&#x1F449;' + i;
            }
        }
        if (inicio > fim) {
            for (i = inicio-passo; i >= fim; i = i - passo) {
                resul.innerHTML += '&#x1F449;' + i ;
            }
        }
        resul.innerHTML += '&#x1F3C1;';
    }
}
