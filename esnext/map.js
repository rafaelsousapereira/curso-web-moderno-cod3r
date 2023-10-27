const tecnologias = new Map();
tecnologias.set('react', { framework: false });
tecnologias.set('angular', { framework: true });

console.log(tecnologias.react);
console.log(tecnologias.get('react').framework);

const chavesVariados = new Map([
    [function () {}, 'Funcao'],
    [{}, 'Objeto'],
    [123, 'Numero'],
]);

chavesVariados.forEach((vl, ch) => {
    console.log(ch, vl);
});

console.log(chavesVariados.has(123));
console.log(chavesVariados.delete(123));
console.log(chavesVariados.has(123));
console.log(chavesVariados.size);

chavesVariados.set(123, 'a');
chavesVariados.set(123, 'b');
chavesVariados.set(456, 'b');
console.log(chavesVariados);
