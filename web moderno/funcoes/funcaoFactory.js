const prod1 = {
    nome : 'Arroz',
    preco : '12.99',
    peso : '5 kilogramas'
};

const prod2 = {
    nome : 'Feijão',
    preco : '3.99',
    peso : '1 kilogramas'

};

// Factory simples
function criarProduto () {
    return {
        nome : 'Feijão',
        peso : '1 Kilograma',
        preso : 2.99,
    }
};

console.log(criarProduto());