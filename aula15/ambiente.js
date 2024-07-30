let num=[5,8,9,3];
num[4]=2;
num.push(7);

console.log(`Nosso vetor é o ${num} e ele tem ${num.length} posições, seu primeiro valor é ${num[0]}.\nEle em ordem crescente ${num.sort((a,b) => a-b)} \nE em decrescente ${num.sort((a,b) => b-a)}`);

// lenght mostra o tamanho do vetor

// for(let pos = 0; pos<num.length ; pos++){
//     console.log(`A posição ${pos} tem o valor ${num[pos]}`);
// }

for(let pos in num){ //para cada posição na viriavel composta, num(vetor), rode isso.
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}

let pos = num.indexOf(5); // vai pesquisar dentro do vetor se existe esse valor e mostra sua posição.

if(pos == -1){
    console.log(`O valor não foi encontrado`);
}else {
    console.log(`O valor está na posição ${pos}`);
}