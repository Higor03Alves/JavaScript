let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo =  1;
console.log(!!isAtivo);
console.log(!isAtivo);

console.log(' os verdadeiros');
console.log(!!6);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('Para finalizar');
console.log(!!(''|| null || 0 || ' ' ));

let nome = ''
console.log(nome || 'Desconhecido');

