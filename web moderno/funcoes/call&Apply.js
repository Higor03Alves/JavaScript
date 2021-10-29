function getPreco (imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
};

const produto = {
    nome : 'Iphone',
    preco : 1299,
    desc : 0.15,
    getPreco
};

console.log(getPreco());// assim nao vai funcionar
console.log(produto.getPreco())

const carro = {preco : 12000, desc : 0.06};

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log (getPreco.call(carro, 0.15, '$'));
console.log(getPreco.apply(carro, [0.15, '$'])); // apply nessecita de um array para poder funcionar