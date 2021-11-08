const nums = [1, 2, 3, 4, 5];

// map e um for com proposito, map nao altera o array original ele cria um novo e preserva o original
let result = nums.map(function(e) {
    return e * 2
});

console.log(result);

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

result = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(result)