// Não aceita repetição/ não e idexada
const times = new Set();
times.add('Vasco');
times.add('São Paulo').add('Santos').add('Curitiba');
times.add('Flamengo');
times.add('Vasco');

console.log(times);
console.log(times.size);
console.log(times.has('vasco'));
console.log(times.has('Vasco'));
times.delete('Flamengo');

console.log(times, times.size)

const nomes = ['lucas', 'miguel', 'thiago', 'joana ', 'lucas'];
const nomeSet = new Set(nomes);
console.log(nomeSet)
