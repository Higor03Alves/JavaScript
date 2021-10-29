function formatacaoDeValores (valorDec) {
    VarEmReais = `R$ ${valorDec.toFixed(2).toString().replace(".", ",")}`
    console.log(VarEmReais)
};

formatacaoDeValores(0.5 + 0.6)