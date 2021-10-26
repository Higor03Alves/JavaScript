const notas = [6.4, 7.3, 8.87, 9.7, 10];

for(let i in notas) {
    console.log(i, notas[i])
};

const pessoa = {
   nome:'Higor',
   sobrenome:'Alves',
   idade:21,
   peso:83.5,
};

for(let atributos in pessoa) {
    console.log(`${atributos} = ${pessoa[atributos]}`)
};