/*Modela mediante una expresión regular el lenguaje de los identificadores de cierto lenguaje de programación donde 
estos: Están formados por dígitos decimales y, opcionalmente, también por letras minúsculas. Su primer y su último carácter es un cero o un uno. */

document.write("Cadena Introducida: \"1a77a0\" | Resultado: " + ejercicio8("1a77a0") + "<br>");
document.write("Cadena Introducida: \"a99m1\" | Resultado: " +  ejercicio8("a99m1")+ "<br>");
document.write("Cadena Introducida: \"0Aa1\" | Resultado: " + ejercicio8("0Aa1")+ "<br>");

function ejercicio8(cadena){
    if (/^[01]{1}[0-9a-z]+[01]{1}$/.test(cadena)) {
        return true;
    }
    return false;
}
