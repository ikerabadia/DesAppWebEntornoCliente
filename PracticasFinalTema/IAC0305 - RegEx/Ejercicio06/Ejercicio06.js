/*Sea L3 el lenguaje de todas las cadenas formadas por cero o más letras minúsculas ´ y que no tienen tres bes 
seguidas en su interior. Así, por ejemplo, las siguientes cadenas pertenecerían a L3: xyz, bb, bebebe, baobab, 
λ. Pero no estas otras: Gato, abbbba, xxxbbb, salu2... Modela el lenguaje*/

document.write("Cadena Introducida: \"baobab\" | Resultado: " + ejercicio6("baobab") + "<br>");
document.write("Cadena Introducida: \"bbebbebb\" | Resultado: " +  ejercicio6("bbebbebb")+ "<br>");
document.write("Cadena Introducida: \"xxxbbb\" | Resultado: " + ejercicio6("xxxbbb")+ "<br>");

function ejercicio6(cadena){
    if (/^[a-z]*$/.test(cadena)) {
        if(!/[b]{3,}/.test(cadena)){
            return true;
        }        
    }
    return false;
}
