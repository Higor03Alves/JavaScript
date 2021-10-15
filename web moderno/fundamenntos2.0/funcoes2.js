//armazenando uma funcao em uma variavel

const imprimirsoma = function (a, b) {
    console.log(a + b)
};

imprimirsoma(3, 2);

// armazenando uma funcao arrow em uma variavel

const soma = (a, b) =>{
    return a + b
};

console.log(soma(2, 3));

// retorno implicito
const subtracao = (a, b) => a - b ;
console.log(subtracao(2,4));

const imprimir2 = a => console.log(a);
imprimir2('Legal!!!!!!!!')