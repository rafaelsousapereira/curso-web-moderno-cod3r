Number.prototype.entre = function(inicio, termino) {
    return this >= inicio && this <= termino;
}

const imprimirResultado = function(nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra');
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado');
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperacao');
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado');
    } else {
        console.log('Nota invalida');
    }
}

imprimirResultado(10);
imprimirResultado(7.2);
imprimirResultado(5.1);
imprimirResultado(1.9);
imprimirResultado(-1);
imprimirResultado(11);
