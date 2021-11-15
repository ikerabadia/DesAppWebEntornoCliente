
/*
*   Clase carta, que tiene el simbolo (1-K), el palo, y el nombre de la 
*   carta que se crea con los dos atributos anteriores.
*/
class Carta{
    constructor (simbolo,palo){
        this.simbolo = simbolo;
        this.palo = palo;
        this.nombreCarta = simbolo+" de "+palo;
    }
    getPalo(){
        return this.palo;
    }
    getSimbolo(){
        return this.simbolo;
    }
    toString(){
        return this.nombreCarta;
    }
}