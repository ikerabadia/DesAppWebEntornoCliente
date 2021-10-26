/*Realiza el ejercicio anterior pasando this como parámetro (y sin pasar un nº 1, 2 o 3). 
Pista: puedes utilizar la función de DOM previousSibling.
*/
function muestraOculta(enlace) {
    contenido = enlace.previousElementSibling;
    if (contenido.style.display == "none") {
        enlace.innerHTML="Ocultar contenidos";
        contenido.style.display = "block";
    }else{
        enlace.innerHTML="Mostrar contenidos";
        contenido.style.display = "none";
    }
  
}
