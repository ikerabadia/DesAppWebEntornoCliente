//5. Escribe una función JavaScript para comprobar si una cadena termina con una cadena especificada.

var cadena1 = "Hola que tal";
var cadena2 = "ue tal";
var cadena3 = "Ue tal";

document.write("Cadena inicial: 'Hola que tal' <br> Cadena especificada: 'ue tal' <br> ¿La cadena inicial comienza con la cadena especificada?" + terminaCon(cadena1, cadena2) + "<br>");
document.write("------------------------------")
document.write("Cadena inicial: 'Hola que tal' <br> Cadena especificada: 'Ue tal' <br> ¿La cadena inicial comienza con la cadena especificada?" + terminaCon(cadena1, cadena3) + "<br>");


function terminaCon(cadena1, cadena2) {
    
    var aux = cadena1.substring(cadena1.length-cadena2.length, cadena1.length);

    if ( aux == cadena2) {
        return true;
    }else{
        return false;
    }

}