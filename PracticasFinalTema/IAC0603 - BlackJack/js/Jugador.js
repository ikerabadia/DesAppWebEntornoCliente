class Jugador{
    constructor() {
        this.mano = new Mano();
        this.balance = 0;    
        this.apuesta = 0;
    }
    setBalance(balance){
        this.balance = balance;
    }
    setApuesta(apuesta){
        this.balance -= apuesta;
        this.apuesta = apuesta;
    }
    robarCarta(carta){
        this.mano.agnadeCarta(carta);
    }
    ganarApuesta(){
        this.balance+=(this.apuesta*2)
        this.apuesta = 0;        
    }
    perderApuesta(){
        this.apuesta = 0;
    }
}