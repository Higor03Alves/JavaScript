function pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome e ${this.nome}`)
    }
};

const p1 = new pessoa('Higor');
p1.falar()