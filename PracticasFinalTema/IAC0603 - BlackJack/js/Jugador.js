/*
*   clase Jugador -> contiene una mano, el balance, apuesta y el nombre del jugador
*/
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

    //Recibe una carta y la añade a la mano del jugador
    robarCarta(carta){
        this.mano.agnadeCarta(carta);
    }

    //obtiene el balance y le suma la apuesta multiplicada por 2
    ganarApuesta(){
        this.balance+=(this.apuesta*2)
        this.apuesta = 0;        
    }

    //Establece la apuesta en 0
    perderApuesta(){
        this.apuesta = 0;
    }
}