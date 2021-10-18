/*Debes entregar un despertador.
Debe mostrar:
La hora en un campo de texto o un div
setInterval(
function(){
}
1000);
debes poder introducir alarmas y que queden almacenadas.
cuando el reloj coincida con una alarma debe sonar un mp3 y el fondo debe cambiar de color alternativamente.*/
var alarmas = new Array();
setInterval(

    function(){
        var fecha = new Date();
        var hora = fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
        if(alarmas.includes(hora)){
            suenaAlarma();
        }
        document.getElementById("horaActual").innerHTML=hora;
    },1000);

function guardarAlarma() {
    var alarma = document.getElementById("hora").value+":"+document.getElementById("minuto").value+":"+document.getElementById("segundo").value;
    document.getElementById("hora").value = "";
    document.getElementById("minuto").value = "";
    document.getElementById("segundo").value = "";
    alarmas.push(alarma);
}

function suenaAlarma() {
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "alarma.mp3");
    etiquetaAudio.play();
    var contadorAlarma = 0;
    var alarma = setInterval(
        function(){
            document.body.style.background = randomColor();
            contadorAlarma += 100;
            if (contadorAlarma == 15000) {
                clearInterval(alarma);
                etiquetaAudio.pause();
                document.body.style.background = "white";
            }
        },100);
}
function randomColor() {
    var colores = ["red","blue","green","yellow","orange","purple","black","white"];
    //return colores[0];
    return colores[getRandomInt(0,8)];
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}