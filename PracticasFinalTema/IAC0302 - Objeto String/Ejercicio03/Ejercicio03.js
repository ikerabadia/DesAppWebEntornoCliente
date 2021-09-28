//3. Escriba una función JavaScript para comprobar si el carácter en el índice (de caracteres) proporcionado es mayúscula.

var indice = prompt("Introduzca una indice y te diremos si el caracter en ese indice en la cadena 'HoLA quE tAl' es mayuscula (true) o no (false).");
document.write("Cadena: 'HoLA quE tAl' <br>Indice: " + indice + "<br>" )
document.write("¿Es mayuscula?" + esMayus("HoLA quE tAl", indice));

function esMayus(cadena, indice) {
    
    var caracter = cadena.charAt(indice);

    if(caracter == caracter.toUpperCase()){            
        return true;
    }else{
        return false;
    }

}