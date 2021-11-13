class Mazo{
    constructor (){
        this.numCartas = 52;
        this.alea = Math.random();
        this.cartas = Mazo.generarMazo();


    }

    static generarMazo(){
        var cartas = [];
        for (let j = 0; j < 4; j++) {
            for (let i = 1; i < 14; i++) {
                if (i==11) {
                    cartas.push(new Carta("J",palos[j]));
                }else if(i==12){
                    cartas.push(new Carta("Q", palos[j]));
                }else if(i==13){
                    cartas.push(new Carta("K", palos[j]));
                }else{
                    cartas.push(new Carta(i, palos[j]));
                }            
            }            
        }
        return cartas;
    }

    barajar(){
        this.cartas.sort(()=> this.alea - 0.5);
    }
    getNumeroCartas(){
        return this.numCartas;
    }
    daCarta(){
        return this.cartas.splice(0,1)[0];
    }
}