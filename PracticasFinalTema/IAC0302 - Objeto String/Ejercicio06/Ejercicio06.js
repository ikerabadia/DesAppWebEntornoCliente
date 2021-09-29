//4. Escriba una función de JavaScript para comprobar si una cadena termina con una cadena especificada.

var cadena = prompt("Introduzca una cadena y le daremos el sucesor a la misma.");
document.write("Cadena introducida: " + cadena + "<br>");
document.write("Sucesor: " + getSucesorCadena(cadena) + "<br>");

function getSucesorCadena(cadena) {
    
    var letras = "abcdefghijklmnopqrstuvwxyz".split("");
    var letrasMayus = "ABCDEFGHIJKLMNOPQRSTUWXYZ".split("");
    var numeros = "0123456789".split("");
    var nuevoCaracter = "";
    
    var cadenaCaracteres = cadena.split("");

    for (let i = 1; i <= cadenaCaracteres.length; i++) {
        nuevoCaracter = getSiguenteCaracter(cadenaCaracteres[cadenaCaracteres.length-i])
        cadenaCaracteres[cadenaCaracteres.length-i] = nuevoCaracter;
        if (nuevoCaracter == "a" || nuevoCaracter == "A" || nuevoCaracter == "0") {            
            
        }else{
            break;
        }       
    }
    return cadenaCaracteres.join("");

}

function getSiguenteCaracter(caracter) {
    var letras = "abcdefghijklmnopqrstuvwxyz".split("");
    var letrasMayus = "ABCDEFGHIJKLMNOPQRSTUWXYZ".split("");
    var numeros = "0123456789".split("");

    //en el caso de que sea una letra minuscula
    if (letras.includes(caracter)) {
        if (caracter == "z") {
            return "a";
        }else{
            return letras[(letras.indexOf(caracter))+1];
        }
    }

    //en el caso de que sea una letra mayusulas
    if (letrasMayus.includes(caracter)) {
        if (caracter == "Z") {
            return "A";
        }else{
            return letrasMayus[(letrasMayus.indexOf(caracter))+1];
        }
    }

    //en el caso de que sea una numero
    if (numeros.includes(caracter)) {
        if (caracter == "9") {
            return "0";
        }else{
            return numeros[(numeros.indexOf(caracter))+1];
        }
    }
}