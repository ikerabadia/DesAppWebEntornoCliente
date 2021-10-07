/*Modela una expresión regular que detecte si una cadena dada es un: color en hexadecimal*/

document.write("Cadena Introducida: \"#67DC5F\" | Resultado: " + ejercicio7("#67DC5F") + "<br>");
document.write("Cadena Introducida: \"#74MF78\" | Resultado: " +  ejercicio7("#74MF78")+ "<br>");
document.write("Cadena Introducida: \"#542F54D\" | Resultado: " + ejercicio7("#542F54D")+ "<br>");

function ejercicio7(cadena){
    if (/^#[0-9A-F]{6}$/.test(cadena)) {
        return true;
    }
    return false;
}
