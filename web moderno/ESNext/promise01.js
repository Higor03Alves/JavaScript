let p = new Promise(function(resolve) {
    resolve(['Bruno', 'Carlos', 'Dede', 'Fufu'])
});

function primeiroElemento(array) {
    return array[0]
};

function primeraLetra(string) {
    return string[0]
};

const letraMinusc = letra => letra.toLowerCase()

p
    .then(primeiroElemento)
    .then(primeraLetra)
    .then(letraMinusc )
    .then(console.log);
