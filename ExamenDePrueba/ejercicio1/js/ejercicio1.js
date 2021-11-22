/*
Códigos de ayuda, por si los quieres utilizar:

//Variables globales para moficar los inputs

var goodPbar=document.querySelector('#goodPbar');
var enemyPbar=document.querySelector('#enemyPbar');
var action=document.querySelector('#action');


// Generar número entero aletorio entre 0 y 2, es decir 0, 1 o 2

Math.round(Math.random()*2

*/
class Arma{
    constructor(nombre, daño){
        this.nombre = nombre;
        this.daño = daño;
    }
    getDaño(){
        return this.daño;
    }
    getNombre(){
        return this.nombre;
    }
}
class Profesion{
    constructor(nombre, modificadorDaño){
        this.nombre = nombre;
        this.modificadorDaño = modificadorDaño;
    }
    getModificadorDaño(){
        return this.modificadorDaño;
    }
    getNombre(){
        return this.nombre;
    }
}
class Luchador{
    constructor(nombre, armas, profesion, vida){
        this.nombre = nombre;
        this.armas = armas;
        this.profesion = profesion;
        this.vida = vida;
        this.armaFavorita = this.armas[aleatorio(0,2)];
    }

    getNombre(){
        return this.nombre;
    }
    getArmaFavorita(){
        return this.armaFavorita;
    }
    getProfesion(){
        return this.profesion;
    }
    getVida(){
        return this.vida;
    }

    recibirAtaque(daño){
        this.vida -= daño;
    }
    curarVida(daño){
        this.vida += daño;
    }
}

var luchador1;
var luchador2;

//Funcion lanzada con el boton "En guardia"
function initGame(){
    //Luchador 1
    var armasLuchador1 = new Array();
    armasLuchador1.push(new Arma("Daga",1));
    armasLuchador1.push(new Arma("Estoque",2));
    armasLuchador1.push(new Arma("Katana",3));
    var profesionLuchador1 = new Profesion("Samurai", 1);
    luchador1 = new Luchador("Iñigo Montoya", armasLuchador1, profesionLuchador1, aleatorio(4,6));

    //Luchador 2
    var armasLuchador2 = new Array();
    armasLuchador2.push(new Arma("Daga",1));
    armasLuchador2.push(new Arma("Estoque",2));
    armasLuchador2.push(new Arma("Katana",3));
    var profesionLuchador2 = new Profesion("Esgrimista", 1);
    luchador2 = new Luchador("Conde Rugen", armasLuchador2, profesionLuchador2, aleatorio(4,6));

    //Muestro los datos
    pintarDatos()
}
//Funcion lanzada con el boton "Atacar"
function startGame(){
    var atacante;
    var defensor;
    if (aleatorio(1,2)==1) {
        atacante = luchador1;
        defensor = luchador2;
    }else{
        atacante = luchador2;
        defensor = luchador1;
    }
    var dañoAtacante = atacante.getArmaFavorita().getDaño()-atacante.getProfesion().getModificadorDaño();
    defensor.recibirAtaque(dañoAtacante);
    atacante.curarVida(dañoAtacante);

    pintarDatos();
}

function aleatorio(inferior, superior) {
    var numPosibilidades = superior - inferior;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return parseInt(inferior) + parseInt(aleatorio);
}

function pintarDatos(){
    var datosLuchador1 = document.getElementById("p1");
    var textop1 = "Name: "+luchador1.getNombre()+"\n Type: "+luchador1.getProfesion().getNombre()+"\n Weapon: "+luchador1.getArmaFavorita().getNombre()+"\n Health: "+luchador1.getVida();
    if (luchador1.getVida() < 1) {
        datosLuchador1.value = luchador1.getNombre()+" murió";
    }else{
        datosLuchador1.value = textop1;
    }   
    document.getElementById("goodPbar").value = luchador1.getVida();

    var datosLuchador2 = document.getElementById("p2"); 
    var textop2 = "Name: "+luchador2.getNombre()+"\n Type: "+luchador2.getProfesion().getNombre()+"\n Weapon: "+luchador2.getArmaFavorita().getNombre()+"\n Health: "+luchador2.getVida();
    if (luchador2.getVida() < 1) {
        datosLuchador2.value = luchador2.getNombre()+" murió";
    }else{
        datosLuchador2.value = textop2;
    } 
    document.getElementById("enemyPbar").value = luchador2.getVida();
}