function aluno(nota) {
    let notaC = arredondar(nota)
    if(notaC => 40) {
        console.log(`Aprovado com a nota ${notaC}`)
    } else {
        console.log(`Reprovado com a nota ${notaC}`)
    }
};

function arredondar (nota){
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
};

aluno(100)
aluno(30)
aluno(38)
aluno(88)
aluno(61)