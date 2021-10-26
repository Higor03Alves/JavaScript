Number.prototype.entre = function(inicio, fim) {
    return  this >= inicio && this <= fim
};

const impResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperaçâo')
    } else if (nota.entre(0, 3.99)){
        console.log('Reprovado')
    } else{
        console.log('Nota invalida')
    }

};

impResultado(10); 
impResultado(7.5); 
impResultado(9.6); 
impResultado(11); 
impResultado(3); 
impResultado(0);
impResultado(-2); 
impResultado(5.5);  