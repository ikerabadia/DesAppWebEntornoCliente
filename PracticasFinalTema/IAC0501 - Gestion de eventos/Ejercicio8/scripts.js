/*Crear una caja de texto donde quepan 100 caracteres, y que a medidas que escribamos 
nos avise del número de caracteres que quedan libres. Además, se debe permitir pulsar las teclas Backspace, 
Supr. y las flechas horizontales cuando se haya llegado al máximo número de caracteres.*/
function limita(evento, maxNumCaracteres){
  if (document.getElementById("texto").value.length == maxNumCaracteres) {
    return false;
  }
}

function actualizaInfo(maxNumCaracteres) {  
  document.getElementById("info").innerHTML = maxNumCaracteres-document.getElementById("texto").value.length;
}

window.onkeydown = function () {
  evento = event;
  if (evento.key == "Backspace" || evento.key == "Delete" || evento.key == "ArrowRight" || evento.key == "ArrowLeft" || evento.key == "ArrowUp" || evento.key == "ArrowDown" ) {
    if (document.getElementById("texto").value.length != 100) {
      return false;
    }
  }
}
