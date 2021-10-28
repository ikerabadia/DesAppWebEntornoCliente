/*Divide la pantalla en 4 zonas iguales con colores rojo, amarillo, azul y verde. Al pulsar sobre una de ellas, 
debe aparecer un alert que nos indique el color del área sobre la que se ha hecho clic.*/
window.onload = function () {
    document.getElementById("roja").style.height = window.innerHeight/2+"px";
    document.getElementById("verde").style.height = window.innerHeight/2+"px";
    document.getElementById("amarilla").style.height = window.innerHeight/2+"px";
    document.getElementById("azul").style.height = window.innerHeight/2+"px";    
}
function getColor(evento) {
    alert(evento.path[0].id);
}
document.onclick = getColor;