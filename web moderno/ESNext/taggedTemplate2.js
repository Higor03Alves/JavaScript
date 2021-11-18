function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, idice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[idice], valor)
    })
    return resultado.join('')
};

const preco = 29.9;
const precoParcela = 11;
console.log(real `1x de ${preco} ou  3x de ${precoParcela}.`);