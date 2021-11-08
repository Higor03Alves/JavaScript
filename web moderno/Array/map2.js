const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.99 }',
    '{ "nome": "kit de lapis", "preco": 41.22}',
    '{ " nome": "Caneta", "preco": 7.50}'
];

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

const result = carrinho.map(paraObjeto).map(apenasPreco);
console.log(result)