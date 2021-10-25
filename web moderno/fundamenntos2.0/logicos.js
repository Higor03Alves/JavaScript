function compras (tb1, tb2) {
    const sorvete = tb1 || tb2
    const tv50 = tb1 && tb2
    const tv32 = tb1 != tb2
    const ms = !sorvete // operador unário

    return { sorvete, tv50, tv32, ms};
};

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));