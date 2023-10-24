function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('TV LG', 2500.99));
console.log(criarProduto('Notebook', 4500.99));
console.log(criarProduto('IPhone', 8000.50));