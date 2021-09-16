//6-Modifica el ejercicio 2 para que además de las medidas, pida un colspan. 
//A partir de la segunda fila deberá unir las celdas según pidan los parámetros, si el ancho no es divisible por el colspan, 
//se deben dejar tantas celdas sin colspan como se necesiten.

var alto = prompt("Introduce el ALTO de la tabla");
var ancho = prompt("Introduce el ANCHO de la tabla");
var colspan = prompt("Introduce el COLSPAN para las columnas");
var contador = 1;

document.write("<table border>");
for (let i = 0; i < alto; i++) { //Generacion de la altura de la tabla
    document.write("<tr>");

    for (let j = 0; j < ancho; j++) {

        if (i > 0) {
            if (ancho - j < colspan) {
                document.write("<td>" + contador + "</td>");
            } else {
                document.write("<td colspan = " + colspan + ">" + contador + "</td>");
                j = j + parseInt(colspan) - 1;
            }
        } else {
            document.write("<td>" + contador + "</td>");
        }

        contador++;
    }

    document.write("</tr>");
}
document.write("</table>");


