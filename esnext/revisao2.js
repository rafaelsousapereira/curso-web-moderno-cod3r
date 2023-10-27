// Arrow Function
const soma = (a, b) => a + b;
console.log(soma(3, 4));

// Arrow Function
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind();
lexico1();
lexico2();

// parametro default
function log(texto = 'Node') {
    console.log(texto);
}

log();
log(null);
log(undefined);
log('Qualquer coisa aqui eh mais forte que o parametro default');

// operador rest
function total(...numeros) {
    let total = 0;
    numeros.forEach(n => total += n);
    return total;
}
console.log(total(1, 2, 3, 4, 5));