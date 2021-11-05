class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
};

class CilcoFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamento = []
    }
    addLancamentos(...lancamento) {
        lancamento.forEach(l => this.lancamento.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamento.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
};

const Salario = new Lancamento('Salarío', 23590.25);
const contaDeLuz = new Lancamento('Luz', -220);

const contas = new CilcoFinanceiro(6, 2018);
contas.addLancamentos(Salario, contaDeLuz);
console.log(contas.sumario())