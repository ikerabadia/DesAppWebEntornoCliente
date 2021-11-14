var mesa = new Mesa();
var partidaEmpezada = false;


window.onload = function(){    
    
}

function pintarDatos(){
var pNombre = document.getElementById("pJugador");
var pBalance = document.getElementById("pBalance");
pNombre.innerHTML+=" "+mesa.getJugador().getNombre();
pBalance.innerHTML+=" "+mesa.getJugador().getBalance()+"€";
}

function establecerDatosJugador(nombre, balance) {
    mesa.getJugador().setBalance(balance);
    mesa.getJugador().setNombre(nombre);    
}
function empezarPartida() {
    partidaEmpezada = true;
    var nombreJugador = prompt("Introduzca su nombre");
    var balance = prompt("Introduzca su balance");
    establecerDatosJugador(nombreJugador, balance);
    pintarDatos();
    mesa.robaCarta(mesa.getJugador());
    mesa.robaCarta(mesa.getBanca());
    pintarPrimerasCartas();
}
function pintarPrimerasCartas() {
    var manoBanca = document.getElementById("manoBanca");
    mesa.getBanca().getMano().getCartas().forEach(carta => {
        var aux = "<div class=\"carta "+carta.getPalo()+" "+getValor(carta)+"\"> </div>";
        manoBanca.innerHTML += aux;
    });
    manoBanca.innerHTML = "<div class=\"cartaReverso\"></div>";
}
function getValor(carta){
    switch (carta.getSimbolo()) {
        case 1:
            return "uno";
            break;
        case 2:
            return "dos";
            break;
        case 3:
            return "tres";
            break;
        case 4:
            return "cuatro";
            break;
        case 5:
            return "cinco";
            break;
        case 6:
            return "seis";
            break;
        case 7:
            return "siete";
            break;
        case 8:
            return "ocho";
            break;
        case 9:
            return "nueve";
            break;
        case 10:
            return "diez";
            break;
        case "J":
            return "J";
            break;
        case "Q":
            return "Q";
            break;
        case "K":
            return "K";
            break;      
    }
}
function pintarCartas(){
    var cartasJugador = mesa.getJugador().getMano().getCartas();
    var cartasBanca = mesa.getBanca().getMano().getCartas();
}
function pedirCarta() {
    if (partidaEmpezada) {
        alert("pedir carta");
    }    
}
function plantarse(){
    if (partidaEmpezada) {
        alert("plantarse");
    }    
}