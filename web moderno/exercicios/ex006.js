function js (capInicial, tex, time) {
    return capInicial + (capInicial * tex  * time)
};

function jc ( capInicial, tex, time) {
    return capInicial * (1 + tex) ** time
};

console.log(js(1000, 5/100, 6))
console.log(jc(1000, 5/100, 6))