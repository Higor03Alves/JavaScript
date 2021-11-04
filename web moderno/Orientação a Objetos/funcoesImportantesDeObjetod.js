const pessoa = {
    nome : 'Ruan',
    idade : 21,
    peso : 76.6
};

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(e =>{
    console.log(`${e[0]}: ${e[1]}`)
});

Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNacimento', {
    enumerable: true,
    writable: false,
    value: '03/03/2000'
});

pessoa.dataNacimento = '01/08/1978'
console.log(pessoa.dataNacimento);
console.log(Object.keys(pessoa));

// Object.assign (ECMASScript 2015)
const dest = { a: 1};
const o1 = { b: 2};
const o2 = { c:3, a: 4};
const obj = Object.assign(dest, o1, o2);

Object.freeze(obj);
obj.c = 1234;
console.log(obj)

console.log(obj)