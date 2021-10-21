/*10. Escribir un programa JavaScript para mostrar el ancho y la altura de la ventana en un formulario (cada vez que se cambia el tamaño de la ventana).*/
window.onresize = ()=>{
  document.getElementById("width").value = window.innerWidth;
  document.getElementById("heigth").value = window.innerHeight;
}  