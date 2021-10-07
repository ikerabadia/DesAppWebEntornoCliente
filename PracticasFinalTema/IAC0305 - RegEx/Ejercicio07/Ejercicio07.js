/*El lenguaje de todas las secuencias no vacías que se pueden formar con signos más y letras mayúsculas respetando 
las dos condiciones siguientes: no habrá dos signos más consecutivos ni tampoco dos letras consecutivas.*/

document.write("Cadena Introducida: \"BA*O*B*A*B\" | Resultado: " + ejercicio7("BA*O*B*A*B") + "<br>");
document.write("Cadena Introducida: \"\" | Resultado: " +  ejercicio7("")+ "<br>");
document.write("Cadena Introducida: \"*B*b*\" | Resultado: " + ejercicio7("xxxbbb")+ "<br>");

function ejercicio7(cadena){
    if (/^[A-Z]+$/.test(cadena)) {
        if(!/++|[A-Z]{2}/.test(cadena)){
            return true;
        }        
    }
    return false;
}
