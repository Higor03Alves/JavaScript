// operador ... rest(juntar)/Spread(espalhar)
// usa rest com parâmetro de função

// usa spread com objeto
const funcionario = { nome: 'João', salario: 1958.25 };
const clone = { ativo : true, ...funcionario };
console.log(clone);

// usa spread com array
const grupoA = [' Marcos', 'Lucas', 'Wesly'];
const grupoFinal = ['Monalisa', 'Galileu', ...grupoA];
console.log(grupoFinal)