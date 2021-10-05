/*Sea L1 el lenguaje de todas las cadenas que pueden formarse utilizando únicamente ´ cero o más dígitos binarios y 
asteriscos con la restricción de que no se permiten más de dos asteriscos consecutivos. Así, por ejemplo, las siguientes 
cadenas pertenecerían a L1: 101, **, *1*1*1, *00*1*, λ. Pero no estas otras: +001, 1****1, 000***, 911...*/

document.write("Cadena Introducida: \"101\" | Resultado: " + ejercicio4("ini123FIN") + "<br>");
document.write("Cadena Introducida: \"102\" | Resultado: " +  ejercicio4("** Comentario2 **")+ "<br>");
document.write("Cadena Introducida: \"101***\" | Resultado: " + ejercicio4("** Comentario2**")+ "<br>");

function ejercicio4(cadena){
    return (/^[0,1,*]{0,}$/.test(cadena) && !/\*{3,}*/.test(cadena));
}

//EXPRESION ADECUADA   ^(?! \*{3,})[01*]+$   no es seguro que esta funcione