const moduloA = require('../../moduloA');
console.log(moduloA.ola);

const saudacao = require('saudacao');
console.log(saudacao.ola);

const legal = require('../pastaC');
console.log(legal.ola2);

const http = require('http');
http.createServer((req, res) => {
    res.write('Bom dia!');
    res.end();
}).listen(8080);
