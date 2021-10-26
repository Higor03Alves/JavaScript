function soboanoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovadocom ' +  nota)
    };
};

soboanoticia(4.6);
soboanoticia(8.4);

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('E verdade....' + valor)
    };
};

seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo('?');
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1, 2]);
seForVerdadeEuFalo({});
