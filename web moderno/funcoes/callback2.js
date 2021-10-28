const notas = [3.4, 6.8, 7.5, 10, 9.3, 6.5, 2.7];

//Sem usa o callback
let notasBaixas = []
for (let i in notas) {
     if (notas[i] < 7) {
         notasBaixas.push(notas[i])
     }
};

console.log(notasBaixas)

// Usando o callback
 const notasBaixas2 = notas.filter(function(nota) {
    return nota < 7
});

console.log(notasBaixas2)

 //usuando arrow function

 const notaMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notaMenorQue7)
console.log(notasBaixas3)