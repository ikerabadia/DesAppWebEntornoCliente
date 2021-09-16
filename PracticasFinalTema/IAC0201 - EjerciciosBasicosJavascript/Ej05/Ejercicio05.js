//4- Recoge el alto y el ancho de una tabla mediante prompt. Escribe en el body (document.write()) 
//una tabla de esas medidas, que muestre los números desde el 1 hasta el número de celdas.
//Por ejemplo, para las entradas: alto 2, ancho 5.
//El programa debe escribir en la página:
//1	  2	  3	  4	  5
//6	  7	  8	  9	  10

//Ayuda: document.write("<table>");

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