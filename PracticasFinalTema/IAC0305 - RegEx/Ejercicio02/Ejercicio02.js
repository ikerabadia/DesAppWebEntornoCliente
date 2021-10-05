//2.   comentarios que empiezan por un asterisco y un espacio y terminan con el fin de esa línea o bien empiezan por dos asteriscos y un espacio y terminan con un espacio y dos asteriscos.

document.write("Cadena Introducida: * Comentario \\n | Resultado: " + ejercicio2("* Comentario \\n") + "<br>");
document.write("Cadena Introducida: ** Comentario2 ** | Resultado: " +  ejercicio2("** Comentario2 **")+ "<br>");
document.write("Cadena Introducida: ** Comentario2** | Resultado: " + ejercicio2("** Comentario2**")+ "<br>");

function ejercicio2(cadena){
    return /(^(\*\* ).*( \*\*)$)|(^(\* ).*(\n)$)/.test(cadena);
}