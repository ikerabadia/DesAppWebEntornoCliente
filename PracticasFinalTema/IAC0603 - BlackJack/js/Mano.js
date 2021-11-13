class Mano{
    constructor (){
        this.numCartas = 0;
        this.tope = 17;
        this.cartas = [];
        this.puntos = 0;
    }
    descartaTodas(){
        this.cartas = [];
    }
    agnadeCarta(carta){
        this.cartas.push();
    }
    getNumeroCartas(){
        return this.numCartas;
    }
    cuentaPuntos(){
        var ases = 0;
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
    }
    toString(){
        var aux = "";
        this.cartas.forEach(carta => {
            aux += carta.toString()+" | ";
        });
    }
}