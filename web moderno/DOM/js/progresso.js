class progresso {
    constructor() {
        this.elemento = novoElemento('span', 'progresso');
        this.atualizarPontos = pontos => {
            this.elemento.innerHTML = pontos;
        };

        this.atualizarPontos = (0);
    }
}
