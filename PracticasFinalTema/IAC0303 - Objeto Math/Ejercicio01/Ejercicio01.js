//1.    Escribe una función en JavaScript para convertir un número de una base a otra.

var numero = prompt("introduzca un numero en la base que desee.");
var baseNumero = prompt(
  "introduce la base en la que estaba el numero introducido anteriormente"
);
var baseDestino = prompt(
  "introduce la base a la que quieres convertir el numero"
);

document.write(
  "Numero inicial: " +
    numero +
    " - Base: " +
    baseNumero +
    " | Numero final: " +
    converiosEntreBases(numero, baseNumero, baseDestino) +
    " - Base: " +
    baseDestino
);

function converiosEntreBases(numero, baseNumero, baseDestino) {
  var numeroFinal;
  var numeroDecimal;

  numeroDecimal = parseInt(numero,parseInt(baseNumero));
  numeroFinal = parseInt(numeroDecimal).toString(baseDestino);


  return numeroFinal;
}
