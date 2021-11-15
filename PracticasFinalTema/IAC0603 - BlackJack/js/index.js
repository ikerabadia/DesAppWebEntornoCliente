var mesa = new Mesa();


window.onload = function(){    
    
}

function pintarDatos(){
var pNombre = document.getElementById("pJugador");
var pBalance = document.getElementById("pBalance");
var pApuesta = document.getElementById("pApuesta");
pNombre.innerHTML="Nombre: "+mesa.getJugador().getNombre();
pBalance.innerHTML="Balance: "+mesa.getJugador().getBalance()+"€";
pApuesta.innerHTML="Apuesta: "+mesa.getJugador().getApuesta()+"€";
}

function establecerDatosJugador(nombre, balance, apuesta) {
    mesa.getJugador().setBalance(balance);
    mesa.getJugador().setNombre(nombre);    
    mesa.getJugador().setApuesta(apuesta);
}
function empezarPartida() {
        mesa = new Mesa();
        document.getElementById("pPerder").style.display = "none";
        document.getElementById("pGanar").style.display = "none";
        document.getElementById("btnNuevaRonda").style.display = "none";
        document.getElementById("btnNuevaPartida").style.display = "none";
        document.getElementById("btnPedirCarta").style.display = "flex";
        document.getElementById("btnPlantarse").style.display = "flex";
        var nombreJugador = prompt("Introduzca su nombre");
        var balance = prompt("Introduzca su balance");
        var apuesta = prompt("Introduzca su apuesta");        
        establecerDatosJugador(nombreJugador, balance, apuesta);        
        pintarDatos();
        mesa.robaCarta(mesa.getJugador());
        mesa.robaCarta(mesa.getBanca());
        pintarPrimerasCartas();
}
function pintarPrimerasCartas() {
    //pinto las primeras cartas de la banca
    var manoBanca = document.getElementById("manoBanca");
    mesa.getBanca().getMano().getCartas().forEach(carta => {
        var aux = "<div class=\"carta "+carta.getPalo()+" "+getValor(carta)+"\"> </div>";
        manoBanca.innerHTML = aux;
    });
    manoBanca.innerHTML += "<div class=\"cartaReverso\"></div>";

    //Pinto las primeras cartas del jugador
    var manoJugador = document.getElementById("manoJugador");
    mesa.getJugador().getMano().getCartas().forEach(carta => {
        var aux = "<div class=\"carta "+carta.getPalo()+" "+getValor(carta)+"\"> </div>";
        manoJugador.innerHTML = aux;
    });
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
function pintarCartasJugador(){
    var manoJugador = document.getElementById("manoJugador");
    manoJugador.innerHTML="";
    mesa.getJugador().getMano().getCartas().forEach(carta => {
        var aux = "<div class=\"carta "+carta.getPalo()+" "+getValor(carta)+"\"> </div>";
        manoJugador.innerHTML += aux;
    });    
}
function pintarCartasBanca() {
    var manoBanca = document.getElementById("manoBanca");
    manoBanca.innerHTML="";
    mesa.getBanca().getMano().getCartas().forEach(carta => {
        var aux = "<div class=\"carta "+carta.getPalo()+" "+getValor(carta)+"\"> </div>";
        manoBanca.innerHTML += aux;
    }); 
}
function pedirCarta() {
        mesa.robaCarta(mesa.getJugador());
        pintarCartasJugador();
        var puntosJugador = mesa.getJugador().getMano().cuentaPuntos();
        if (puntosJugador > 21) {
            perder();
        }
}
function plantarse(){
        iniciarJuegoBanca();
        comprobarGanador();
}
function perder() {
    document.getElementById("pPerder").style.display = "block";
    mesa.getJugador().perderApuesta();
    finRonda();
}
function ganar() {
    document.getElementById("pGanar").style.display = "block";
    mesa.getJugador().ganarApuesta();
    finRonda();
}
function iniciarJuegoBanca() {
    pintarCartasBanca();
    var puntosBanca = mesa.getBanca().getMano().cuentaPuntos();
    while (puntosBanca < 17) {
        mesa.robaCarta(mesa.getBanca());
        pintarCartasBanca();
        puntosBanca = mesa.getBanca().getMano().cuentaPuntos();
    }
}
function comprobarGanador() {
    var puntosBanca = mesa.getBanca().getMano().cuentaPuntos();
    var puntosJugador = mesa.getJugador().getMano().cuentaPuntos();
    if (puntosBanca > 21) {
        ganar();
    }else{
        if (puntosJugador > puntosBanca) {
            ganar();
        }else{
            perder();
        }
    }    
}
function finRonda() {
    document.getElementById("btnNuevaPartida").style.display = "flex";
    document.getElementById("btnNuevaRonda").style.display = "flex";
    document.getElementById("btnPedirCarta").style.display = "none";
    document.getElementById("btnPlantarse").style.display = "none";
    pintarDatos();
}
function nuevaRonda(){
    mesa.getJugador().getMano().descartaTodas();
    mesa.getBanca().getMano().descartaTodas();
    var apuesta = prompt("Introduzca su apuesta");
    mesa.getJugador().setApuesta(apuesta);
    pintarDatos();
    document.getElementById("pPerder").style.display = "none";
    document.getElementById("pGanar").style.display = "none";
    document.getElementById("btnNuevaRonda").style.display = "none";
    document.getElementById("btnNuevaPartida").style.display = "none";
    document.getElementById("btnPedirCarta").style.display = "flex";
    document.getElementById("btnPlantarse").style.display = "flex";
    var manoJugador = document.getElementById("manoJugador");
    manoJugador.innerHTML="";
    var manoBanca = document.getElementById("manoBanca");
    manoBanca.innerHTML="";
    //mesa.nuevoMazo();
    mesa.robaCarta(mesa.getJugador());
    mesa.robaCarta(mesa.getBanca());
    pintarPrimerasCartas();
}