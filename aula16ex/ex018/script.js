var armazem = []
var soma = 0

function adicionar() {
    resul.innerHTML='';

    var capNum = document.getElementById('num');
    var num = parseInt(capNum.value);

    var sel = document.getElementById('sel');

    if (capNum.value == '') {
        alert('Insira um número.');
        return;
    }

    if (num < 1 || num > 100) {
        alert('Insira um número válido.');
        capNum.value = '';
        return;
    }

    let valido = armazem.indexOf(num);

    if (valido == -1) {
        armazem.push(num);
    } else {
        alert('Valor já inserido.');
        capNum.value = ''
        return;
    }

    soma += num
    var option = document.createElement('option');
    option.value = `numero${armazem.length}`;
    option.text = `Valor ${num} adicionado.`

    sel.appendChild(option);
    capNum.value = '';
}

function finalizar() {
    var resul = document.getElementById('resul');
    resul.innerHTML='';

    if (armazem.length == 0) {
        alert('Nenhum número foi adicionado')
        return;
    }

    armazem.sort((a, b) => a - b);

    var p1 = document.createElement('p')
    p1.innerHTML = `Ao todo, temos ${armazem.length} números cadastrados.`
    resul.appendChild(p1);

    var p2 = document.createElement('p');
    p2.innerHTML = `O maior valor informado foi o ${armazem[armazem.length - 1]}.`;
    resul.appendChild(p2);

    var p3 = document.createElement('p');
    p3.innerHTML = `O menor valor informado foi o ${armazem[0]}.`;
    resul.appendChild(p3);

    var p4 = document.createElement('p');
    p4.innerHTML = `Somando todos os valores, temos ${soma}.`;
    resul.appendChild(p4);

    var p5 = document.createElement('p');
    p5.innerHTML = `A média dos valores digitados é ${soma / armazem.length}`;
    resul.appendChild(p5);
}