function aria(largura, altura) {
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else{
        return area
    };
};

console.log(aria(2, 2));
console.log(aria(2));
console.log(aria(6, 7));
console.log(aria(3, 3));
console.log(aria( ));