// pessoa --> 123 --> {...}
const pessoa = { nome : 'João' };
pessoa.nome = 'Pedro';
console.log(pessoa);

// pessoa -> 456 -> {...}
// pessoa = {nome : 'Ana'}; -> vai dar um erro pq constante vc so pode atribuir um valor que no caso esta na linha 2

Object.freeze(pessoa); // nese caso vai congelar o obj que foi definido na linha 2 tornando ele emundavel
pessoa.nome = 'Jose';
console.log(pessoa.nome);
pessoa.end = 'Rua ABC';
delete pessoa.nome;
console.log(pessoa.nome);
console.log(pessoa.end);