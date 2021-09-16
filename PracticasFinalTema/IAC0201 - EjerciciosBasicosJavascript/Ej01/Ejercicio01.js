//1-Recoge una cadena mediante prompt y comprueba si es un palíndromo, muestra un alert con el resultado.

var palabra = prompt("Escriba una palabra");
var palabraInvertida = "";


palabraInvertida = reverse(palabra);

if (palabra == palabraInvertida) {
    alert(palabra + " es un palindromo")
}else{
    alert(palabra + " no es un palindromo")
}

function reverse(s){
    return s.split("").reverse().join("");
}