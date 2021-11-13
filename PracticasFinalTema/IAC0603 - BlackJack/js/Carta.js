const palos = {
	CORAZONES: "corazones",
	PICAS: "picas",
	TREBOLES: "treboles",
	DIAMANTES: "diamantes"
}

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