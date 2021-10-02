//4. Escribe una función de JavaScript para redondear un número con un decimal determinado.

var numero = prompt("introduzca un numero con decimales para redondear");
var cantidadDecimales = prompt("introduzca la cantidad de decimales a lo que quieres redondear el numero anterior")

document.write("Numero sin redondear: " + numero + " | Numero redondeado: " + redondearDecimales(numero,cantidadDecimales));

function redondearDecimales(numero, cantidadDecimales) {
  return parseFloat(numero).toFixed(cantidadDecimales);
}



