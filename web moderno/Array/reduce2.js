const alunos = [
    { nome: 'Jonas', nota: 7.3, bolsista: false},
    { nome: 'Pedro', nota: 9.2, bolsista: true},
    { nome: 'Marcos', nota: 9.8, bolsista: false},
    { nome: 'Jairo', nota: 8.7, bolsista: true}
];

// Desafio 1: Todos os alunos são bolsistas?
const tbolsistas = (result, bolsista) => result && bolsista
console.log(alunos.map(a => a.bolsista).reduce(tbolsistas))

// Desafio 2: Algum aluno e bolsista?
const algunsbolsistas = (result, bolsista) => result || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algunsbolsistas))