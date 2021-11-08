const quaseArray = { 0: 'Rafael', 1: 'Migel', 2: 'Gabriel', 3: 'Lucifer'};
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
});

console.log(quaseArray[0]);

const meuArray = ['Rafael', 'Miguel', 'Gabriel', 'Lucifer'];
console.log(quaseArray.toString(), meuArray)