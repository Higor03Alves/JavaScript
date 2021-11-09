const impar = [1, 3, 5, 7];
const par = [0, 2, 4, 6];
const todosnuns = impar.concat(par, 8, 9, 10);

console.log(todosnuns, impar, par);

console.log([].concat(1, 2, 3, [4, 5, 6], [[7, 8, 9]]));