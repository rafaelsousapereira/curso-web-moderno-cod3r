const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
];

// Desafio 1: Todos os alunos sao bolsistas ?

const todosBolsista = (resultado, atual) => resultado && atual;
console.log(alunos.map(a => a.bolsista).reduce(todosBolsista));

// Desafio 2: Algum aluno eh bolsista ?

const algumBolsista = (resultado, atual) => resultado || atual;
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));
