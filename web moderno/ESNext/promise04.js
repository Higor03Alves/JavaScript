function geradorDeNumeros(min, max, tempo) {
    if(min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(function(){
            const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
            resolve(aleatorio)
        }, tempo)
    })
};

function gerarVariosNumeros (){
    return Promise.all([
        geradorDeNumeros(1, 60, 4000),
        geradorDeNumeros(1, 60, 500),
        geradorDeNumeros(1, 60, 300),
        geradorDeNumeros(1, 60, 1500),
        geradorDeNumeros(1, 60, 800),
        geradorDeNumeros(1, 60, 100)
    ])
}

gerarVariosNumeros().then(numeros => console.log(numeros));

console.time('promise')

gerarVariosNumeros()
    .then(numeros => console.log(numeros))
    .then(() => {
        console.timeEnd('promise')
    })


