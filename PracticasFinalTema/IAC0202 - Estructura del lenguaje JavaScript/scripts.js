document.write("<h1>IKER ABADIA TE0202</h1>");
//EJERCICIO 01
document.write("<h2>Ejercicio01 - Invertir numero</h2>");
document.write("<pre>Numero 1 -> 1345 | resultado -> " + reverse("1345") + "</pre>");
document.write("<pre>Numero 2 -> 463782 | resultado -> " + reverse("463782") + "</pre>");
document.write("<pre>Numero 3 -> 7891209835 | resultado -> " + reverse("7891209835") + "</pre>");

function reverse(s){
    return s.split("").reverse().join("");
}

//EJERCICIO 02
document.write("<h2>Ejercicio02 - Combinaciones palabra</h2>");
combinaciones = "";
obtieneCombinaciones("pepe").forEach(element => {
    combinaciones = combinaciones + element + ", ";
});
document.write("<pre>Palabra 1 -> pepe | Combinaciones -> " + combinaciones + "</pre>");
combinaciones = "";
obtieneCombinaciones("palabra").forEach(element => {
    combinaciones = combinaciones + element + ", ";
});
document.write("<pre>Palabra 2 -> palabra | Combinaciones -> " + combinaciones + "</pre>");
combinaciones = "";
obtieneCombinaciones("huevo").forEach(element => {
    combinaciones = combinaciones + element + ", ";
});
document.write("<pre>Palabra 3 -> huevo | Combinaciones -> " + combinaciones + "</pre>");


function obtieneCombinaciones(palabra) {
    var longitudPalabra = palabra.length;
    var combinaciones = [];

    for (let i = 1; i < longitudPalabra; i++) {
        for (let j = 0; j+i <= longitudPalabra; j++) {
            combinaciones.push(palabra.substring(j,j+i));            
        }
    }
    combinaciones.push(palabra);
    return combinaciones;
}

//EJERCICIO 03
document.write("<h2>Ejercicio03 - Ordenar cadena alfabeticamente</h2>");
document.write("<pre>Palabra 1 -> pepe | Ordenada -> " + ordenarCadena("pepe") + "</pre>");
document.write("<pre>Palabra 2 -> palabra | Ordenada -> " + ordenarCadena("palabra") + "</pre>");
document.write("<pre>Palabra 1 -> huevo | Ordenada -> " + ordenarCadena("huevo") + "</pre>");


function ordenarCadena(palabra) {
    var letrasSeparadas = palabra.split("");
    
    return letrasSeparadas.sort().toString().replace(/,/g, '');
}