var senha = document.getElementById('senha');

var span1 = document.querySelectorAll('span')[0];
var span2 = document.querySelectorAll('span')[1];
var span3 = document.querySelectorAll('span')[2];

var maiuscula = /[A-Z]/;
var especial = /[\W_]/;
var numero= /[0-9]/;

senha.addEventListener('input', function (){
    if(maiuscula.test(senha.value)){
        span1.innerHTML='&#x2714;';
    }else{
        span1.innerHTML='&#x274C;';
    }

    if(especial.test(senha.value)){
        span2.innerHTML='&#x2714;';
    }else{
        span2.innerHTML='&#x274C;';
    }

    if(numero.test(senha.value)){
        span3.innerHTML='&#x2714;';
    }else{
        span3.innerHTML='&#x274C;';
    }
});

var resul = document.getElementById('resul')
var texto = document.getElementById('texto');

texto.addEventListener('input', function(){
    var quantidade = texto.value.length

    resul.innerHTML=`${500-quantidade}/500`
});