const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
];

// Retornar um array apenas com os precos

// minha solucao
const fromJSON = carrinho.map(function (e) { 
    return JSON.parse(e); 
});

const meuResultado = fromJSON.map(e => e.preco);

console.log(`Minha solucao: ${meuResultado}`);

// solucao do professor

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

const resultadoDoProfessor = carrinho.map(paraObjeto).map(apenasPreco);
console.log(`Solucao do Professor ${resultadoDoProfessor}`);