/*Sea L1 el lenguaje de todas las cadenas que pueden formarse utilizando únicamente ´ cero o más dígitos binarios y 
asteriscos con la restricción de que no se permiten más de dos asteriscos consecutivos. Así, por ejemplo, las siguientes 
cadenas pertenecerían a L1: 101, **, *1*1*1, *00*1*, λ. Pero no estas otras: +001, 1****1, 000***, 911...*/

document.write("Cadena Introducida: \"101\" | Resultado: " + ejercicio4("101") + "<br>");
document.write("Cadena Introducida: \"102\" | Resultado: " +  ejercicio4("102")+ "<br>");
document.write("Cadena Introducida: \"101***\" | Resultado: " + ejercicio4("101***")+ "<br>");

function ejercicio4(cadena){
    if (/^[10\*]+$/.test(cadena)) {
        if (!/[\*]{3,}/.test(cadena)) {
            return true;
        }
    }
    return false;
}

//EXPRESION ADECUADA   ^(?! \*{3,})[01*]+$   no es seguro que esta funcione