class Barreira {
    constructor(reserva = false) {
        this.elemento = novoElemento('div', 'barreira');

        const borda = novoElemento('div', 'borda');
        const corpo = novoElemento('div', 'corpo');
        this.elemento.appendChild(reversa ? corpo : borda);
        this.elemento.appendChild(reversa ? borda : corpo);

        this.setAltura = altura => corpo.style.height = `${altura}px`;
    }
}
