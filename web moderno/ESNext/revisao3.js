// ES8: Object.values/ Object.entries
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Melhorias da notação Literal
const nome = 'Ana';
const pessoa = {
    nome,
    ola() {
        return 'Oi gente'
    }
};

console.log(pessoa.nome, pessoa.ola());

// Class
class animal {}
class cachorro extends animal {
    falar () {
        return 'AU AU!!'
    }
};

console.log(new cachorro().falar())