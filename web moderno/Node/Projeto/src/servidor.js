const porta = 3003;

const express = require('express');
const app = express();


app.use('/produtos',(req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.45}) // converter para o formato JSON
});

app.listen(porta, () => {
    console.log(`Servidor execultando na porta ${porta}.`)
});

