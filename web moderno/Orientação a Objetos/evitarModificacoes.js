// Object.preventExtensions 
const  produto = Object.preventExtensions({
    nome: 'borracha', preco: 1.99, tag: 'Liquidação'
});
console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Caneta';
produto.descricao = 'Caneta big';
delete produto.tag;
console.log(produto);

// Object.seal
const pessoa = { nome: 'março', idade: 3,};
Object.seal(pessoa);
console.log('selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Agosto';
delete pessoa.nome;
pessoa.idade = 08;
console.log(pessoa);

// Object.freeze = selado + valores constantes