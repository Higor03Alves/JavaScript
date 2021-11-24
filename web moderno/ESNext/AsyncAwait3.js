function geradorDeNumeros(min, max, numerosProibidos) {
    if(min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        if(numerosProibidos.includes(aleatorio)) {
            reject('Numero Repetido!!')
        } else{
              resolve(aleatorio)
        }
    })
};

async function gerarMegaSena(qtNumerosGerados, tentativas = 1) {
    try {
        const numeros = []
        for(let _ of Array(qtNumerosGerados).fill()) {
            numeros.push(await geradorDeNumeros(1, 60, numeros))
        }
        return numeros
    } catch (e) {
        if (tentativas > 10) {
            throw "Não deu certo!!"
        }else {
            return gerarMegaSena(qtNumerosGerados, tentativas + 1)
        }
    }
};

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log)