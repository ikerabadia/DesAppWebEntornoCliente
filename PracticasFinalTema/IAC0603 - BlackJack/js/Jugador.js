class Jugador{
    constructor() {
        this.mano = new Mano();
        this.balance = 0;    
        this.apuesta = 0;
        this.nombre = "";
    }
    setBalance(balance){
        this.balance = Number(balance);
    }
    setApuesta(apuesta){
        this.balance -= Number(apuesta);
        this.apuesta = Number(apuesta);
    }
    setNombre(nombre){
        this.nombre = nombre;
    }
    getNombre(){
        return this.nombre;
    }
    getBalance(){
        return this.balance;
    }
    getMano(){
        return this.mano;
    }
    getApuesta(){
        return this.apuesta;
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