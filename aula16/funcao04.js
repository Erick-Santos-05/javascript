//6! = 6.5.4.3.2.1

function fatorial(num){
    let fat = 1;

    for( let i = num; i > 1; i--){
        fat *= i;
    }
    return fat;
}

console.log(fatorial(5))