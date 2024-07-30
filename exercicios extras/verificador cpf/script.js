function verificar(){
    var resul= document.getElementById('resul');

    var capCpf= document.getElementById('cpf');
    var cpf= capCpf.value;

    algoritmo(cpf, resul);
    capCpf.value=''
}

function algoritmo(cpf, resul){
    resul.innerHTML=''
    cpf = cpf.replace(/[\D]/g, '');
    
    if(cpf.length !== 11){
        resul.innerHTML='Quantidade de números inválidos.'
        return;
    }

    peso = 10
    soma = 0

    for(let i = 0; i < 9 ; i++){
        soma += peso * parseInt(cpf.charAt(i));
        peso--;
    }

    let dezVer = soma%11<2 ? 0 : 11-(soma%11);

    if(dezVer !== parseInt(cpf.charAt(9))){
        resul.innerHTML='CPF inválido.'
        return;
    }

    peso = 11
    soma = 0

    for(let i = 0; i < 10; i++){
        soma += peso * parseInt(cpf.charAt(i));
        peso--;
    }

    let uniVer = soma%11<2 ? 0 : 11-(soma%11);

    if(uniVer !== parseInt(cpf.charAt(10))){
        resul.innerHTML='CPF inválido.'
        return;
    }

    resul.innerHTML='CPF válido.'
}