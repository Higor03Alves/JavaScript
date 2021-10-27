// função em JS e First-class Object
// Higher-order function

// criar de formar literal
function fun1() { };

//armazenar em uma variavel
const fun2 = function() { };

//armazenar em um array
const array = [function(a, b) {return a + b}, fun1, fun2];
console.log(array[0](2, 4));

// armazenar em um atributo de objeto
const obj = {};
obj.falar = function() {return 'opa!'};
console.log(obj.falar());

//Passa função com parametro
function run (fun) {
    fun()
};

run(function () {console.log('Execultando') })

// Um função pode retornar/conter um função
function soma(a, b) {
     return function (c) {
         console.log(a + b + c)
     };
};

soma(3, 4)(6)
const somaMaisCinco = soma(3, 4)
somaMaisCinco(6)