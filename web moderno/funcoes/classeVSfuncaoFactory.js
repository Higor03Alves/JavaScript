class pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome e ${this.nome}`)
    }
};

const p1 = new pessoa('Higor');
p1.falar()

const pessoa2 = nome => {
    return {
        falar : () => console.log(`Meu nome e ${nome}`)
    }
};

const p2 = pessoa2('Higor')
p2.falar()