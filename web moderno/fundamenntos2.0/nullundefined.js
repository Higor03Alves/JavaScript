let valor
console.log(valor);

valor = null;// ausencia de valor
console.log(valor);
//console.log(valor.toString())// vai da erro

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.55;
console.log(produto);

produto.preco = undefined; // evitar usa atributos undefined
console.log(!!produto.preco);
//delete produto.preco;  para deletar
console.log(produto);

produto.preco = null;// sem preco
console.log(!!produto.preco);
console.log(produto);