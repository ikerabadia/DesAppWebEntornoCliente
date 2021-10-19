/*3. Escribir una función de JavaScript que acepte fila, columna, (para identificar una celda en particular)
 y una cadena para actualizar el contenido de esa celda.*/
window.onload = function(){
    tabla = document.getElementById("tabla");
    var fila = document.getElementById("fila");
    fila.setAttribute("max", document.getElementById("tabla").children[0].childElementCount-1);    
    var columna = document.getElementById("columna");
    columna.setAttribute("max", document.getElementById("tabla").children[0].children[0].childElementCount-1);
}

 function cambiaContenido(){
    var fila = document.getElementById("fila").value;
    var columna = document.getElementById("columna").value;
    var cadena = document.getElementById("cadena").value;
    
    var tabla = document.getElementById("tabla");
    var filas = tabla.children[0].children;
    var columnas = filas[fila].children;
    var celda = columnas[columna];
    celda.innerHTML = cadena;
    
}


