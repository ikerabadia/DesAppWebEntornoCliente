
let palos = ["corazones", "picas", "treboles", "diamantes"];

//contiene el numero de cartas, un numero de aleatorizacion, y un array de cartas
class Mazo{
    constructor (){
        this.numCartas = 52;
        this.alea = Math.random();
        this.cartas = Mazo.generarMazo();


    }

    //Genera un nuevo array de 52 cartas ordenado
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

    //Desordena de forma aleatoria el array de cartas
    barajar(){
        this.cartas.sort(()=> Math.random() - 0.5);
    }
    getNumeroCartas(){
        return this.numCartas;
    }

    //elimina y devuelve la primera carta del array, en el caso de que fuese la ultima del mazo
    //se genera un nuevo mazo y se baraja.
    daCarta(){
        var carta = this.cartas.splice(0,1)[0];
        if (this.cartas.length == 0) {
            this.cartas = Mazo.generarMazo();
            this.barajar();
        }
        return carta;
    }
}