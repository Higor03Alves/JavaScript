const alunos = [
    { nome: 'Jonas', nota: 7.3, bolsista: false},
    { nome: 'Pedro', nota: 9.2, bolsista: true},
    { nome: 'Marcos', nota: 9.8, bolsista: false},
    { nome: 'Jairo', nota: 8.7, bolsista: true}
];

console.log(alunos.map(a => a.nota));

const result = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0);

console.log(result)