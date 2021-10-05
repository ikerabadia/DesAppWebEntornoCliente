/*Modela mediante una única ´ expresión regular todas las cadenas de caracteres que cumplen simultáneamente las tres condiciones siguientes:

1.       Sus tres primeros caracteres son, por este orden, una letra i, una ene y otra i.

2.       Sus tres últimos ´ caracteres son, por este orden, una letra efe, una i y una ene.

3.       Entre las tres letras iniciales y las tres letras finales de la cadena aparece una secuencia de uno o más caracteres, ninguno de los cuales es ni una letra ni un salto de línea.

Observa que cada una de las seis letras de la cadena debe poder ser, indistintamente, mayúscula ´ o minúscula, ´ ya que no se ha impuesto ninguna restricción al respecto.*/

document.write("Cadena Introducida: \"ini123FIN\" | Resultado: " + ejercicio3("ini123FIN") + "<br>");
document.write("Cadena Introducida: \"ini123FI\" | Resultado: " +  ejercicio3("** Comentario2 **")+ "<br>");
document.write("Cadena Introducida: \"ini12A3FIN\" | Resultado: " + ejercicio3("** Comentario2**")+ "<br>");

function ejercicio3(cadena){
    return /^ini[^a-z,\n]*fin$/i.test(cadena);
}