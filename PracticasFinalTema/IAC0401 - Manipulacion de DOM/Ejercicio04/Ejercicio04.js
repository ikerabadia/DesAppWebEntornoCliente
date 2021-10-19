/*4. Escribir una función de JavaScript que cree una tabla, acepte los números de fila y 
columna del usuario e introduzca el número de fila y columna como contenido (por ejemplo, Fila-0 Columna-0) de una celda.*/
let filas = 0;
let columnas = 0;

function generarTabla() {
    if (document.getElementById("tabla")) {
        document.getElementById("tabla").remove();
    }  
  //Valores de las filas y columnas a crear
  filas = document.getElementById("fila").value;
  columnas = document.getElementById("columna").value;
  //Creo la tabla
  let table = document.createElement("table");
  let tbody = document.createElement("tbody");

  for (let i = 0; i < filas; i++) {
    var tr = document.createElement("tr");
    for (let j = 0; j < columnas; j++) {
      var td = document.createElement("td");
      td.appendChild(
        document.createTextNode("Filas: " + i + "| Columnas: " + j)
      );
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.setAttribute("border", "2");
  table.setAttribute("id", "tabla");
  table.appendChild(tbody);

  // Meto la tabla en el body
  document.body.appendChild(table);
}
