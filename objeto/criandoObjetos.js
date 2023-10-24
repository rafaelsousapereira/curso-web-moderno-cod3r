// usando a notacao literal
const obj1 = {};
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object;
console.log(obj2);

// funcoes construtoras
function Produto(nome, preco, desc) {
    this.nome = nome;
    this.getPrecoComProduto = () => {
        return preco * (1 - desc);
    }
}

const produto1 = new Produto('TV', 1230.90, 0.15);
const produto2 = new Produto('Caneta', 5.99, 0.23);
console.log(produto1.getPrecoComProduto(), produto2.getPrecoComProduto());

// Funcao Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = criarFuncionario('Joao', 7900.99, 4);
const f2 = criarFuncionario('Maria', 8000.9, 1);
console.log(f1.getSalario(), f2.getSalario());

// Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info);
