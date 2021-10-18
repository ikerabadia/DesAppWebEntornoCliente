/*3. Escribir una función de JavaScript que acepte fila, columna, (para identificar una celda en particular)
 y una cadena para actualizar el contenido de esa celda.*/
function cambiaContenido(){
    var fila = document.getElementById("fila").value;
    var columna = document.getElementById("columna").value;
    var cadena = document.getElementById("cadena").value;
    
    var tabla = document.getElementById("tabla");
    var filas = tabla.children[0].children;
    var columnas = filas[fila].children;
    var celda = columnas[columna].children;
    celda.innerHTML = "<p>"+cadena+"</p>";
    
}


