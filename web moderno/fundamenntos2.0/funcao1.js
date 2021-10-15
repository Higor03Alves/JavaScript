//funcao sem retorno
function imprimirsoma(a,b){
    console.log(a + b);
};

imprimirsoma(2,6);
imprimirsoma(1,2,3,3,6,4,8,7,9,5,99);
imprimirsoma(7);
imprimirsoma();

// funcao com retorno
function soma(a, b = 0) {
    return a + b
};

console.log(soma(2,3));
console.log(soma(2));
console.log(soma());