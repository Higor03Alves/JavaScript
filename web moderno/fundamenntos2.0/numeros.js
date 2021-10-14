const peso1 = 83.0;
const peso2 = Number ('85.0');

console.log(peso1,peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const nota1 = 8.45;
const nota2 = 9.99;

const total = nota1 * peso1 + nota2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));
console.log(media.toString());// funcao que converte para binario
console.log(typeof media);
console.log(typeof Number)