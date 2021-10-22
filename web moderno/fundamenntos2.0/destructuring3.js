function rend ({min = 0, max = 1000})  {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor);
};

const obj = {max:50, min:40};
console.log(rend(obj));
console.log(rend({min:40 }));
console.log(rend({}));
