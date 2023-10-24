// funcao sem retorno 
function imprimirSoma(a, b) {
    let soma = a + b;
    console.log(soma);
}

imprimirSoma(2, 4);
imprimirSoma(3);
imprimirSoma(3, 4, 2, 1, 5);
imprimirSoma();

// funcao com retorno
function soma(a, b = 0) {
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());