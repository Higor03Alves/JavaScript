const ferrari = {
    modelo: 'F40 Spider',
    velMax: 330
};

const Bmw = {
    modelo:'I8',
    velMax: 299
};

console.log(ferrari.prototype)
console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(Bmw.__proto__);
console.log(Bmw.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);
console.log(Object.prototype.__proto__ === null);

function MeuObj() {};
console.log(typeof Object, typeof MeuObj);
console.log(Object.prototype, MeuObj.prototype);
