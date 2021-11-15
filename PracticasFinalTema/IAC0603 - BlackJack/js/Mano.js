/*
* Clase Mano -> contiene un array de cartas, numero de cartas, tope de puntos en caso de ser la banca y puntos actuales
*/
class Mano{
    constructor (){
        this.numCartas = 0;
        this.tope = 17;
        this.cartas = [];
        this.puntos = 0;
    }

    //Vacia el array de las cartas
    descartaTodas(){
        this.cartas = [];
    }

    //Añade la carta recibida al array de cartas
    agnadeCarta(carta){
        this.cartas.push(carta);
    }
    getNumeroCartas(){
        return this.numCartas;
    }
    getCartas(){
        return this.cartas;
    }

    //Cuenta, devuelve y establece los puntos actuales a partir de las cartas del array de cartas
    cuentaPuntos(){
        var ases = 0;
        this.puntos = 0;
        this.cartas.forEach(carta => {
            if (carta.getSimbolo() == 1) {
                ases++;
                this.puntos+=11;
            }else if(carta.getSimbolo() == "J" || carta.getSimbolo() == "Q" || carta.getSimbolo() == "K"){
                this.puntos+=10;
            }else{
                this.puntos+=carta.getSimbolo();
            }
        });
        for (let i = 0; i < ases; i++) {
            if (this.puntos > 21) {
                this.puntos-=10;
            }            
        }
        return this.puntos;
    }
    getPuntos(){
        return this.puntos;
    }

    //Devuelve una cadena con las cartas que se encuentran en el array de cartas
    toString(){
        var aux = "";
        this.cartas.forEach(carta => {
            aux += carta.toString()+" | ";
        });
    }
}