/*6. Escribir un programa JavaScript para contar y mostrar los elementos de una lista desplegable, en un input de tipo number cuando carga la página..*/
let filas = 0;
let columnas = 0;
window.onload = function(){
  var select = document.getElementById("colorSelect");
  var numeroOpcionesInput = document.getElementById("numeroOpciones");
  numeroOpcionesInput.value = select.childElementCount;
  var valores = document.getElementById("valores");
  for (let i = 0; i < select.childElementCount; i++) {
    valores.innerHTML += "\n"+select.children[i].value;
    
  }

}
