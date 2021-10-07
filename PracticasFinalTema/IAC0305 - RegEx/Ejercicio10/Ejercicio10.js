/*Modela mediante una expresión regular el lenguaje de los literales enteros sin signo que sirven para 
representar en base diez valores entre quince y cien, ambos incluidos; además, cabe señalar que este lenguaje 
no prohíbe ceros innecesarios a la izquierda.*/

document.write("Cadena Introducida: \"00015\" | Resultado: " + ejercicio7("#67DC5F") + "<br>");
document.write("Cadena Introducida: \"#007\" | Resultado: " +  ejercicio7("#74MF78")+ "<br>");
document.write("Cadena Introducida: \"\" | Resultado: " + ejercicio7("#542F54D")+ "<br>");

function ejercicio7(cadena){
    if (/^0*(100|1[5-9]|[2-9][0-9])$/.test(cadena)) {
        return true;
    }
    return false;
}
