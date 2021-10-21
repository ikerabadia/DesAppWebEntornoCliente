/*9. Escribir un programa JavaScript para resaltar las palabras en negrita del siguiente párrafo, al pasar el ratón sobre un determinado enlace.*/
function resalto(enlace) {
  let parrafo = enlace.nextElementSibling;  

  while (parrafo.tagName != "P") {
    parrafo = parrafo.nextElementSibling; 
  }

  let bs=parrafo.getElementsByTagName("b");

  for (let i = 0; i < bs.length; i++) {
      bs[i].style.color="red";      
  }
}

function quitarResalto(enlace){
  let parrafo = enlace.nextElementSibling;

  while (parrafo.tagName != "P") {
    parrafo = parrafo.nextElementSibling; 
  }

  let bs=parrafo.getElementsByTagName("b");
  for (let i = 0; i < bs.length; i++) {
      bs[i].style.color="black";
      
  }
}