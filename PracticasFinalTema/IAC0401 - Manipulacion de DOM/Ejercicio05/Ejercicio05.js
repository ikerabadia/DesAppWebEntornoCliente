/*5. Escribir un programa JavaScript para eliminar elementos de una lista desplegable. */
let filas = 0;
let columnas = 0;

function removecolor() {
  var select = document.getElementById("colorSelect");
  valorSeleccionado = select.selectedIndex;
  select.removeChild(select[valorSeleccionado]);
}
