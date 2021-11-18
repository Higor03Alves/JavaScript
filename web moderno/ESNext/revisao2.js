// Arrow Function
const soma = (a, b) => a + b;
console.log(soma(4, 3));

// Arrow Function (this)

const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico2();

// Parametros default
function log(texto = 'Node') {
    console.log(texto)
};

log()

// Operador rest 
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
};

console.log(total(2, 4, 6, 8, 10))