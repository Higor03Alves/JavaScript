function triangulo(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        return 'EQUILATERO'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'ISOSELES'
    } else {
        return 'ESCSLENO'
    }
};

console.log(triangulo(3, 3, 3));
console.log(triangulo(3, 3, 2));
console.log(triangulo(3, 2, 4));