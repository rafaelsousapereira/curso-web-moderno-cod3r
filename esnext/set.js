// nao aceita repeticao/nao indexado

const times = new Set();
times.add('Vasco');
times.add('Corinthians => Time do povo, eh o Coringao').add('Palmeiras => Nao tem mundial').add('Sao Paulo => eh os trikas kkk');
times.add('Vasco => Segunda divisao');
times.add('Flamengo => Cheirinho');
times.add('Vasco')

console.log(times);
console.log(times.size);
console.log(times.has('Vasco'));
times.delete('Flamengo => Cheirinho');
console.log(times.has('Flamengo => Cheirinho'));

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'];
const nomesSet = new Set(nomes);
console.log(nomesSet);
