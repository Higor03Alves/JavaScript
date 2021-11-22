function falaDepoisDe(segundos, frase) {
    return new Promise((resolve, reject)=> {
        setTimeout(() =>{
            resolve(frase)
        }, segundos * 1000)
    }) 
};

falaDepoisDe(3, 'que legal!!')
    .then((frase) => frase.concat('?!?!?!'))
    .then(outraFrase => console.log(outraFrase))
    //.catch(e => console.log(e)) usado para tratar o tratamento do erro