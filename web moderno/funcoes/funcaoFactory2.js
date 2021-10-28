function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto : 0.12
    }
};

console.log(criarProduto('Notebook', 2500));
console.log(criarProduto('Iphone', 5000));