//7. Escriba una función JavaScript para eliminar los caracteres no alfanuméricos, pero no los espacios.

var cadena = prompt("Introduzca una cadena y se le eliminaran todos los caracteres alfanumericos.");
document.write("Cadena con non-alfanumeric eliminados: " + removeNoAlfanumeric(cadena));

function removeNoAlfanumeric(cadena) {
    var alfanumericos = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 ".split("");
    cadena = cadena.split("");
    cadenaFinal = "";
    cadena.forEach(element => {
        if (alfanumericos.includes(element) || element == " ") {
            cadenaFinal+=element;
        }
    });
    return cadenaFinal;
}



