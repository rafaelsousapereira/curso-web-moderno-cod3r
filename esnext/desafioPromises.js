const fs = require('fs');

const caminho = __dirname + '/dados.txt';

function lerArquivo (caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, 'utf-8', (_, conteudo) => {
            resolve(conteudo.toString());
        });
    });
}

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linha => linha.join(','))
    .then(conteudo => `O valor final eh: ${conteudo}`)
    .then(console.log);
