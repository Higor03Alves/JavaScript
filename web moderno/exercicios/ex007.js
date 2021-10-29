function bhas (as2, bs, c) {
    let result = []
    let delt = (bs ** 2) - (4 * as2 * c)
    if (delt < 0) {
        return "Delta Negativo!"
    }
    let xt1 = (-bs + Math.sqrt(delt))/(2*as2)
    let xt2 = (-bs - Math.sqrt(delt))/(2*as2)
    result.push(xt1)
    result.push(xt2)
    return result
};

console.log(bhas(1, 3, 2));
console.log(bhas(3, 2, 1));