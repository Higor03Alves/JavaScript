// let e const 

{
    var a = 1
    let b = 2 
    console.log(b);
};

console.log(a);

// Template String
const produto = 'Iphone';
console.log(`${produto} e caro!!`);

// Destructuring
const [l, e, ...tras] = "Cod3r";
console.log(l, e, tras);

const [x, , y] = [1, 2, 3];
console.log(x, y);

const { idade: i, nome} = { nome: 'Ana', idade: 6};
console.log(i, nome);


