const fabricantes = ["BMW", "Audi", "Mercedes", "Toyota", "MacLaren"];

function imprimir (nome, idice) {
    console.log(`${idice + 1}.${nome}`)
};

fabricantes.forEach(imprimir);
fabricantes.forEach(function(a){
    console.log(a)
});