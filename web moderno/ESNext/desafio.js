const fs = require('fs');
const path = require('path')

function lerArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, function(__dirname, conteudo){
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })
};

const caminho = path.join(__dirname, 'dados.txt');

lerArquivo(caminho)
    .then(conteudo => conteudo)