//1. Escribe una función de JavaScript para poner en mayúsculas cada palabra de la cadena.

var cadena = prompt("Introduzca una cadena y sera convertida a mayusculas.");

document.write(toCaps(cadena));

function toCaps(cadena) {
    return cadena.toUpperCase();
}