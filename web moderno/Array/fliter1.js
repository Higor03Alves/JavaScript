const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iphone', preco:4999, fragil: true},
    {nome: 'Copo de vidro', preco:12.50, fragil: true},
    {nome: 'Copo de plasticos', preco:6.99 , fragil: false}
];

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

console.log(produtos.filter(caro).filter(fragil));