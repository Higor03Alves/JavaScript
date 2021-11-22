const tecnologias = new Map();
tecnologias.set('React', {framework: false});
tecnologias.set('Angular', {framework : true});
console.log(tecnologias.React);
console.log(tecnologias.get('React').framework);

const chaveVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero'],
]);

chaveVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
});

console.log(chaveVariadas.has(123));
chaveVariadas.delete(123);
console.log(chaveVariadas.has(123));
console.log(chaveVariadas.size);

chaveVariadas.set(123, 'a');
chaveVariadas.set(456, 'a')
console.log(chaveVariadas)