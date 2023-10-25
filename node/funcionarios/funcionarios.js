const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const chineses = funcioinario => funcioinario.pais === 'China';
const mulheres = funcionario => funcionario.genero === 'F';
const menorSalario = (funcionario, funcioinarioAtual) => {
    return funcionario.salario < funcioinarioAtual.salario ? funcionario : funcioinarioAtual;
};

axios.get(url).then(response => {
    const funcionarios = response.data;
    console.log(funcionarios);

    const resultado = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario);

    console.log(resultado);
});
