/*7. Escribir un programa de JavaScript para calcular el volumen de una esfera. Ten en cuenta que el radio es un número real con dos decimales positivo.*/
function calculaVolumen() {
  var radio = document.getElementById("radio").value;
  var volumen = ((Math.PI/3)*4)*(Math.pow(radio,3));
  document.getElementById("resultado").innerHTML="Radio: "+volumen;
}
