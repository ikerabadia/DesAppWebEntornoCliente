//2.    Escribe una función JavaScript para generar un número entero aleatorio.

var minValue = prompt("Introduzca el valor minimo");
var maxValue = prompt("Introduzca el valor maximo");
var cantidadNumeros = prompt("Introduzca la cantidad de numeros aleatorios a generar");

for (let i = 0; i < cantidadNumeros; i++) {
  document.write("- " + aleatorio(minValue,maxValue) + "<br>");
}


function aleatorio(inferior, superior) {
  var numPosibilidades = superior - inferior;
  var aleatorio = Math.random() * (numPosibilidades + 1);
  aleatorio = Math.floor(aleatorio);
  return parseInt(inferior) + parseInt(aleatorio);
}
