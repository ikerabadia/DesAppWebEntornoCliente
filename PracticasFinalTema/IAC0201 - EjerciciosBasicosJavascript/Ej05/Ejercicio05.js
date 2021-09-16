//5-Modifica el ejercicio anterior para que, en lugar de cada número primo, aparezca la palabra “primo” o una "p"
//Por ejemplo, para las entradas: alto 2, ancho 5

var alto = prompt("Introduce el ALTO de la tabla");
var ancho = prompt("Introduce el ANCHO de la tabla");
var contador = 1;

document.write("<table border>");
for (let i = 0; i < alto; i++) { //Generacion de la altura de la tabla
    document.write("<tr>");
    for (let j = 0; j < ancho; j++) {
        if (esPrimo(contador)) {
            document.write("<td>p</td>");
        } else {
            document.write("<td>" + contador + "</td>");
        }
        contador++;
    }
    document.write("</tr>");
}
document.write("</table>");


function esPrimo(numero) {
    for (let i = 2; i < numero / 2 + 1; i++) {
        if (numero % i == 0) {
            return false;
        }
    }
    return true;
}