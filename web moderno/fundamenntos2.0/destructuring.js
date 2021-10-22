// recurso adicionado do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 10,
    sexo: ' Feminino',
    endereco: {
        rua: 'pilar',
        numero: 108,
        bairro:'centro'

    }
};

 const {nome,idade} = pessoa;
 console.log(nome, idade);

 const {nome: n, idade: i} = pessoa;

 console.log(n, i);

 const{sobrenome, bm = true} = pessoa;
 console.log(sobrenome, bm);

 const {endereco:{rua, numero} } = pessoa;
 console.log(rua, numero);