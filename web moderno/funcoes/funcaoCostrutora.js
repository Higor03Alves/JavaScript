function carro (velocidadeMaxima= 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0;

    // metodo publico
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
};

const uno = new carro;
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const BMW = new carro(300, 20)
BMW.acelerar();
BMW.acelerar();
BMW.acelerar();
BMW.acelerar();
BMW.acelerar();
console.log(BMW.getVelocidadeAtual());

console.log(typeof carro);
console.log(typeof BMW)