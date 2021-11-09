Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
};

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iphone', preco:4999, fragil: true},
    {nome: 'Copo de vidro', preco:12.50, fragil: true},
    {nome: 'Copo de plasticos', preco:6.99 , fragil: false}
];

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

console.log(produtos.filter2(caro).filter2(fragil));