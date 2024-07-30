var maior;
var menor;
var soma = 0;
var media;
var controle = 0;
var p1 = document.getElementById('msg');


function vaca() {
    let pesoCap = document.getElementById('peso');
    let peso = Number((pesoCap.value));

    if (peso <= 0) {
        p1.innerHTML = ('Número inválido');
    } else if (maior === undefined && menor === undefined) {
        maior = peso;
        menor = peso;
        soma = peso;
        controle++
        pesoCap.value = '';
        p1.innerHTML = (`Peso ${controle} registrado: ${peso}Kg</br>Peso total: ${soma}Kg`);
    } else {
        if (peso > maior) {
            maior = peso;
        }
        if (peso < menor) {
            menor = peso;
        }
        soma += peso;
        controle++;
        pesoCap.value = '';
        p1.innerHTML = (`Peso ${controle} registrado: ${peso}Kg</br>Peso total: ${soma}Kg`);
    }
}

function finalizar() {
    if (controle > 0) {
        media = soma / controle;
        p1.innerHTML = (`Total de pesos registrados: ${controle}</br>Peso total: ${soma} Kg</br>Média: ${media} Kg</br>Maior peso: ${maior} Kg</br>Menor  peso:  ${menor} Kg`);
        soma = 0;
        controle = 0;
        maior = undefined;
        menor = undefined;
    } else {
        p1.innerHTML = ("Nenhum peso foi registrado.");
    }
}

function resete() {
    location.reload();
}