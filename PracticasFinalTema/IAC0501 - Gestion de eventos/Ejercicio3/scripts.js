/*Adapta el ejercicio 2 para no tener que utilizar this, usando manejadores semánticos.*/
window.onload=function () {
    var enlaces = document.getElementsByTagName("A");
    for (let i = 0; i < enlaces.length; i++) {
        enlaces[i].addEventListener("click", ()=>{
            muestraOculta(i+1);
        });
        
    }
    
}
function muestraOculta(numeroEnlace) {
    if (document.getElementById("contenidos_"+numeroEnlace).style.display == "none") {
        document.getElementById("enlace_"+numeroEnlace).innerHTML="Ocultar contenidos";
        document.getElementById("contenidos_"+numeroEnlace).style.display = "block";
    }else{
        document.getElementById("enlace_"+numeroEnlace).innerHTML="Mostrar contenidos";
        document.getElementById("contenidos_"+numeroEnlace).style.display = "none";
    }
  
}
