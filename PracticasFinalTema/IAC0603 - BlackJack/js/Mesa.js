class Mesa{
    constructor(){
        this.mazo = new Mazo();
        this.mazo.barajar();
        this.jugador = new Jugador();
        this.banca = new Jugador();        
    }
    nuevoMazo(){
        this.mazo = new Mazo();
    }
    robaCarta(jugador){
        jugador.robarCarta(this.mazo.daCarta());
    }
    getJugador(){
        return this.jugador;
    }
    getBanca(){
        return this.banca;
    }
}