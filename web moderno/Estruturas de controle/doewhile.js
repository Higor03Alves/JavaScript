function getAleatorio(mim, max) {
   const  valor = Math.random() * (max - mim) + mim
   return Math.floor(valor)
};

let opicao = 0


do {
    opicao = getAleatorio(-1, 10)
    console.log(`Opção escolhida foi ${opicao}.`)
} while (opicao != -1)

console.log('Ate a proxima!!')