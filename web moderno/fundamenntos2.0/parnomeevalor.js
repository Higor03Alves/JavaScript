// par nome/valor
const saudacao = 'opa'; // contexto léxico 1

function exec() {
    const saudacao = 'fala!!!' // contexto léxico 2
    return saudacao
};

// objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Higor',
    idade: 21,
    peso: 83.5,
    endereco:{
        rua: 'fazenda',
        numero: 00,
        referencia: null
    }

};

console.log(saudacao);
console.log(exec());
console.log(cliente);