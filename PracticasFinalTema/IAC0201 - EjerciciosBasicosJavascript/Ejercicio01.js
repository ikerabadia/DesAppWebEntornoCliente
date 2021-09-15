var palabra = prompt("Escriba una palabra");
var palabraInvertida = "";
//for (let i = 0; i < palabra.length; i++) {
//    palabraInvertida[i] = palabra[length-i-1]
//}

palabraInvertida = reverse(palabra);

if (palabra == palabraInvertida) {
    alert(palabra + " es un palindromo")
}else{
    alert(palabra + " no es un palindromo")
}

function reverse(s){
    return s.split("").reverse().join("");
}