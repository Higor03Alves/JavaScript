// colecão dinamicas de pares cheves/valor
const produto = new Object
produto.nome = 'Cadeira';
produto ['marca do produto'] = 'Generica';
produto.preco = 250;

console.log(produto)
delete produto['marca do produto'];
console.log(produto);

const carro = {
    modelo : 'Celta',
    valor : 13500,
    ano :09,
    propietario : {
        nome : 'João',
        idade : 46,
        sexo : 'Masculino',
        endereco :{
            rua : 'Santo domingo',
            numero : 55,
            bairro : 'Santa Tereza'
        }
    },
    motoristas : [{
        nome : 'João',
        idade : 46
    }, {
        nome : 'Luis',
        idade : 23,

    }, {
        nome : 'Tereza',
        idade : 42,
    }],
    calValorDoSeguro : function() {

    }
};

carro.propietario.endereco.numero = 1000;
carro['propietario']['endereco']['rua'] = 'Sao Bernado'
 
console.log(carro)

//delete carro.motoristas;
delete carro.propietario.endereco;
delete carro.calValorDoSeguro;
console.log(carro);
console.log(carro.motoristas);
console.log(carro.motoristas.length);