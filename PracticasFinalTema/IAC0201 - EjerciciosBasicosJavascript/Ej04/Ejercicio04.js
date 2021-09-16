//4- Recoge el alto y el ancho de una tabla mediante prompt. Escribe en el body (document.write()) 
//una tabla de esas medidas, que muestre los números desde el 1 hasta el número de celdas.
//Por ejemplo, para las entradas: alto 2, ancho 5.
//El programa debe escribir en la página:
//1	  2	  3	  4	  5
//6	  7	  8	  9	  10

//Ayuda: document.write("<table>");

var alto = prompt("Introduce el ALTO de la tabla");
var ancho = prompt("Introduce el ANCHO de la tabla");

var tabla = document.createElement("table");
var tblBody = document.createElement("tbody");
for (let i = 0; i < alto; i++) { //Generacion de la altura de la tabla
    var fila = document.createElement("tr");
    for (let j = 0; j < ancho; j++) {
        var celda = document.createElement("td")
        var textoCelda = document.createTextNode((i+1)*(j+1));
        celda.appendChild(textoCelda);
        fila.appendChild(celda);        
    }
    tblBody.appendChild(fila);
}
tabla.appendChild(tblBody);

document.write(tabla);



