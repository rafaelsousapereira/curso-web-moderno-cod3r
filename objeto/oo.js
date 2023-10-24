// colecao dinamica de pares chave/valor

const produto = new Object;
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Generica';
produto.preco = 220;
console.log(produto);

delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Jose',
        idade: 45,
        endereco: {
            logradouro: 'Rua AB',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Joao',
        idade: 18
    }, 
    {
        nome: 'Ana',
        idade: 19
    }]
};
carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Av. Qualquer';
delete carro.proprietario.endereco;

console.log(carro);
console.log(carro.condutores);
