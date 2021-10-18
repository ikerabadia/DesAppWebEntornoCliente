/*1. Escribir un programa en JavaScript para establecer el color de fondo de el segundo 
párrafo en función de lo que seleccionemos en un input de tipo color (no hay mas inputs).
El HTML tendrá tres párrafos sin nombre, id ni class. */
function colorParrafo(){
    var color = document.getElementById("color").value;
    document.getElementById("p2").style.background = color;
}


