function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('ano');
    var resul = document.getElementById('res');

    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sex');
        var idade = ano - Number(fAno.value);
        var gen = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            gen = 'Homem';
            if (idade >= 0 && idade < 14) {
                img.setAttribute('src', 'imagens/kid-m.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-m.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-m.png');
            } else {
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher';
            if (idade >= 0 && idade < 14) {
                img.setAttribute('src', 'imagens/kid-f.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-f.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-f.png');
            } else {
                img.setAttribute('src', 'imagens/idoso-f.png')
            }
        }
        resul.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        resul.appendChild(img)
    }
}