//4. Escriba una función de JavaScript para comprobar si una cadena comienza con una cadena especificada.

var cadena1 = "Hola que tal";
var cadena2 = "Hola q";
var cadena3 = "hola q";

document.write("Cadena inicial: 'Hola que tal' <br> Cadena especificada: 'Hola q' <br> ¿La cadena inicial comienza con la cadena especificada?" + comienzaCon(cadena1, cadena2) + "<br>");
document.write("------------------------------")
document.write("Cadena inicial: 'Hola que tal' <br> Cadena especificada: 'hola q' <br> ¿La cadena inicial comienza con la cadena especificada?" + comienzaCon(cadena1, cadena3) + "<br>");


function comienzaCon(cadena1, cadena2) {
    
    if (cadena1.substring(cadena2.lenght) == cadena2) {
        return true;
    }else{
        return false;
    }

}