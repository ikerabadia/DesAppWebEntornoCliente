var mesa = new Mesa();

/*
*   pintarDatos -> muestra los datos de nombre de jugador, balance y apuesta
*/
function pintarDatos(){
var pNombre = document.getElementById("pJugador");
var pBalance = document.getElementById("pBalance");
var pApuesta = document.getElementById("pApuesta");
pNombre.innerHTML="Nombre: "+mesa.getJugador().getNombre();
pBalance.innerHTML="Balance: "+mesa.getJugador().getBalance()+"€";
pApuesta.innerHTML="Apuesta: "+mesa.getJugador().getApuesta()+"€";
}

/*
*   establecerDatosJugador -> establece los datos del jugador que se han 
*   recogidos por prompt en otro metodo
*/
function establecerDatosJugador(nombre, balance, apuesta) {
    mesa.getJugador().setBalance(balance);
    mesa.getJugador().setNombre(nombre);    
    mesa.getJugador().setApuesta(apuesta);
}

/*
*   empezarPartida -> Comienza la partida estableciendo una nueva mesa,
*   muestra u oculta los botones segun corresponde, pide los datos del 
*   jugador, pinta los datos con pintarDatos(), y roba y muestra las primeras
*   cartas de jugador y banca
*/
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

/*
*   pintarPrimerasCartas -> Pinta las cartas de jugador y banca y añade una 
*   carta boca abajo a la mano de la banca
*/
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

/*
*   getValor -> Devuelve el valor en texto (no numero) del valor de la carta
*/
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

/*
*   pintarCartasJugador -> Pinta las cartas del jugador en el tablero
*/
function pintarCartasJugador(){
    var manoJugador = document.getElementById("manoJugador");
    manoJugador.innerHTML="";
    mesa.getJugador().getMano().getCartas().forEach(carta => {
        var aux = "<div class=\"carta "+carta.getPalo()+" "+getValor(carta)+"\"> </div>";
        manoJugador.innerHTML += aux;
    });    
}

/*
*   pintarCartasBanca -> Pinta las cartas de la banca en el tablero
*/
function pintarCartasBanca() {
    var manoBanca = document.getElementById("manoBanca");
    manoBanca.innerHTML="";
    mesa.getBanca().getMano().getCartas().forEach(carta => {
        var aux = "<div class=\"carta "+carta.getPalo()+" "+getValor(carta)+"\"> </div>";
        manoBanca.innerHTML += aux;
    }); 
}

/*
*   pedirCarta -> coje una carta del mazo y se la da al jugador
*/
function pedirCarta() {
        mesa.robaCarta(mesa.getJugador());
        pintarCartasJugador();
        var puntosJugador = mesa.getJugador().getMano().cuentaPuntos();
        if (puntosJugador > 21) {
            perder();
        }
}

/*
*   plantarse -> inicia el juego de la banca y una vez acaba comprueba el ganador
*/
function plantarse(){
        iniciarJuegoBanca();
        comprobarGanador();
}

/*
*   perder -> se lanza si el jugador pierde, muestra un mensaje al jugador indicando
*   su derrota, lanza el metodo alojado en jugador para perder la apuesta, y por ultimo
*   lanza el metodo de fin de ronda
*/
function perder() {
    document.getElementById("pPerder").style.display = "block";
    mesa.getJugador().perderApuesta();
    finRonda();
}

/*
*   ganar -> se lanza si el jugador gana la ronda, muestra un mensaje indicando que 
*   el jugador a ganado, se lanza el metodo de ganarApuesta, y por ultimo el de fin de ronda
*/
function ganar() {
    document.getElementById("pGanar").style.display = "block";
    mesa.getJugador().ganarApuesta();
    finRonda();
}

/*
*   iniciarJuegoBanca -> inicia el juego de la banca, que cojera cartas hasta tener 17 
*   puntos o mas o hasta llegar o pasarse de los 21
*/
function iniciarJuegoBanca() {
    pintarCartasBanca();
    var puntosBanca = mesa.getBanca().getMano().cuentaPuntos();
    while (puntosBanca < 17) {
        mesa.robaCarta(mesa.getBanca());
        pintarCartasBanca();
        puntosBanca = mesa.getBanca().getMano().cuentaPuntos();
    }
}

/*
*   comprobarGanador -> comprueba el ganador entre la banca y el jugador y segun quien
*   sea el ganador lanza el metodo ganar o perder
*/
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

/*
*   finRonda -> finaliza la ronda y muestra los botones necesarios para seguir con el juego
*/
function finRonda() {
    document.getElementById("btnNuevaPartida").style.display = "flex";
    document.getElementById("btnNuevaRonda").style.display = "flex";
    document.getElementById("btnPedirCarta").style.display = "none";
    document.getElementById("btnPlantarse").style.display = "none";
    pintarDatos();
}

/*
*   nuevaRonda -> inicia una nueva ronda, para lo cual descarta las manos de ambos jugadores
*   pide una nueva apuesta, muestra los botones requeridos y roba las dos cartas iniciales
*/
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