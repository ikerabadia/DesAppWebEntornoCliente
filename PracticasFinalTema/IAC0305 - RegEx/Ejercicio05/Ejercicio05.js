/*Sea L2 el lenguaje de todas las cadenas que pueden formarse utilizando únicamente dígitos decimales 
y asteriscos con la restricción de que en cada cadena debe haber un único ´ grupo de varios asteriscos 
consecutivos. Así, por ejemplo, las siguientes cadenas pertenecerían a L2: **, *10*1**, 19***99. Pero 
no estas otras: **1**, x****x, 012345, 1*1, λ...*/

document.write("Cadena Introducida: \"10*1**\" | Resultado: " + ejercicio5("10*1**") + "<br>");
document.write("Cadena Introducida: \"*012345***\" | Resultado: " +  ejercicio5("*012345***")+ "<br>");
document.write("Cadena Introducida: \"1*1\" | Resultado: " + ejercicio5("1*1")+ "<br>");

function ejercicio5(cadena){
    if (/^[0-9\*]+$/.test(cadena)) {
        if (!/\*{2,}[0-9]\*{2,}/.test(cadena)) {
            return true;
        }
    }
    return false;
}
