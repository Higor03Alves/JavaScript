const vacas = ['Beleza', 'Tuda', 'Revista', 'Curim'];
vacas.pop(); // remove o ultima da lista
console.log(vacas)

vacas.push('Mimosa'); // adiciona um no final da lista
console.log(vacas);

vacas.shift(); // remove o primeiro da lista
console.log(vacas);

vacas.unshift('gaiola'); // adiciona na primeira posição da lista
console.log(vacas);

// Splice pode adicionar e remover os elementos da lista

// adicionar
vacas.splice(2, 0, 'Curim', 'Beleza');
console.log(vacas);

// remover
vacas.splice(3, 1); // beleza desmamou de novo
console.log(vacas);

// Slice vai gera um novo array
const algunasVacas1 = vacas.slice(2);
console.log(algunasVacas1);

const algunasVacas2 = vacas.slice(1, 4);
console.log(algunasVacas2);

    