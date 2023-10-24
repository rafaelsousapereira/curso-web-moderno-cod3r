Array.prototype.map2 = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
};

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
];

// Retornar um array apenas com os precos

// minha solucao
const fromJSON = carrinho.map2(function (e) {
    return JSON.parse(e);
});

const meuResultado = fromJSON.map2(e => e.preco);

console.log(`Minha solucao: ${meuResultado}`);

// solucao do professor

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

const resultadoDoProfessor = carrinho.map2(paraObjeto).map2(apenasPreco);
console.log(`Solucao do Professor: ${resultadoDoProfessor}`);