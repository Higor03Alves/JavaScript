// Usando notação literal
const obj1 = {
    
};
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object
console.log(obj2)

// Funcoes construtoras 
function produto(nome, preco, desc) {
        this.nome = nome;
        this.getPrecoComDesconto = () => {
            return preco * (1 - desc);
        };
};

const p1 = new produto('gasolina', 6.59, 0.06);
const p2 = new produto('alcool', 5.59, 0.06);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
};

const f1 = criarFuncionario('Jose', 1200, 2);
const f2 = criarFuncionario('Tião', 1200, 6);

console.log(f1.getSalario(), f2.getSalario());

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana';
console.log(filha);

// Função famosa que retorna Objeto....
const fromJSON =JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info);