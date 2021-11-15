/*
*Contiene el mazo, el jugador, y la banca necesarios para el juego.
*/
class Mesa{
    constructor(){
        this.mazo = new Mazo();
        this.mazo.barajar();
        this.jugador = new Jugador();
        this.banca = new Jugador();        
    }

    //Genera un nuevo mazo
    nuevoMazo(){
        this.mazo = new Mazo();
    }

    //Recibe un jugador y le otorga una carta del mazo
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