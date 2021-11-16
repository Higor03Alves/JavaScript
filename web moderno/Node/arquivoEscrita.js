const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1299.98,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => { //esse comando writeFile pegar o produto e trasformar em arquivo em .json
    console.log(err || 'Arquivo salvo!')
})