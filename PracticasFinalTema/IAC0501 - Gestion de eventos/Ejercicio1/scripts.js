/*A partir de la página web proporcionada, completar el código JavaScript para que:
- Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
- Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
- Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
- Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista: propiedad innerHTML)
*/
function muestraOculta(numeroEnlace) {
    if (document.getElementById("contenidos_"+numeroEnlace).style.display == "none") {
        document.getElementById("enlace_"+numeroEnlace).innerHTML="Ocultar contenidos";
        document.getElementById("contenidos_"+numeroEnlace).style.display = "block";
    }else{
        document.getElementById("enlace_"+numeroEnlace).innerHTML="Mostrar contenidos";
        document.getElementById("contenidos_"+numeroEnlace).style.display = "none";
    }
  
}
