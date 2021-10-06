let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);

console.log(19.90 * (1 - 0.40));
console.log(preco * (1 - desconto));
console.log(precoComDesconto);

let nome = ('caderno');
let categoria = ('papelaria');

console.log("Produto: " + nome // String ->  (Texto)sequencia de símbolos
+ ", Categoria: " + categoria 
+ ", Preço: " + preco 
+ ", Desconto:" + desconto);
