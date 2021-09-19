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
document.write("<pre>Palabra 3 -> huevo | Ordenada -> " + ordenarCadena("huevo") + "</pre>");


function ordenarCadena(palabra) {
    var letrasSeparadas = palabra.split("");
    
    return letrasSeparadas.sort().toString().replace(/,/g, '');
}

//EJERCICIO 04
document.write("<h2>Ejercicio04 - Palabra mas larga en cadena</h2>");
document.write("<pre>Cadena 1 -> Hola pepe que tal estas | Palabra mas larga -> " + getPalabraMasLarga("Hola pepe que tal estas") + "</pre>");
document.write("<pre>Cadena 2 -> Cual es la palabra mas larga entre todas estas? | Palabra mas larga -> " + getPalabraMasLarga("Cual es la palabra mas larga entre todas estas?") + "</pre>");
document.write("<pre>Cadena 3 -> fresco bueno eliminado suspendido estuche manzana | Palabra mas larga -> " + getPalabraMasLarga("fresco bueno eliminado suspendido estuche manzana") + "</pre>");


function getPalabraMasLarga(cadena) {
    var palabraMasLarga = "";
    var palabrasSeparadas = cadena.split(" ");

    palabrasSeparadas.forEach(element => {
        if (element.length > palabraMasLarga.length) {
            palabraMasLarga = element;
        }
    });
    
    return palabraMasLarga;
}

//EJERCICIO 05
document.write("<h2>Ejercicio05 - Contar vocales en una cadena</h2>");
document.write("<pre>Cadena 1 -> Probando | Numero de vocales -> " + cuentaVocales("Probando") + "</pre>");
document.write("<pre>Cadena 2 -> Acentos y mayúsculas | Numero de vocales -> " + cuentaVocales("Acentos y mayúsculas") + "</pre>");
document.write("<pre>Cadena 3 -> Acentos con mayúsculas Ó | Numero de vocales -> " + cuentaVocales("Acentos con mayúsculas Ó") + "</pre>");


function cuentaVocales(cadena) {
    var numeroVocales = 0;
    var caracteresSeparados = cadena.split("");
    var vocales = ["a","e","i","o","u","á","é","í","ó","ú","A","E","I","O","U","Á","É","Í","Ó","Ú"];

    caracteresSeparados.forEach(element => {
        if (vocales.includes(element)) {
            numeroVocales++;
        }
    });
    return numeroVocales;
}

//EJERCICIO 06
document.write("<h2>Ejercicio06 - Devolver tipo de argumento</h2>");
document.write("<pre>Argumento 1 -> Cadena (\"pepe\") | Tipo de argumento -> " + getTipo("pepe") + "</pre>");
document.write("<pre>Argumento 2 -> Number (\"397\") | Tipo de argumento -> " + getTipo(397) + "</pre>");
document.write("<pre>Argumento 3 -> boolean (\"true\") | Tipo de argumento -> " + getTipo(true) + "</pre>");

function getTipo(arg) {
    return typeof(arg);
}

//EJERCICIO 07
document.write("<h2>Ejercicio07 - Conversion de X dinero en monedas</h2>");
document.write("<pre>Cantidad 1 -> 100 - Grupos -> 30 10 <br> RESULTADO <br>");
getGruposMonedas(100, ordenarArrayNumeros("30 10")).forEach(element => {
    document.write("<pre> Monedas de " + element[0] + " -> " + element[1] + " </pre>");
});
document.write("<pre>Cantidad 1 -> 100 - Grupos -> 30 3 <br> RESULTADO <br>");
getGruposMonedas(100, ordenarArrayNumeros("30 3")).forEach(element => {
    document.write("<pre> Monedas de " + element[0] + " -> " + element[1] + " </pre>");
});
document.write("<pre>Cantidad 1 -> 1500 - Grupos -> 1000 200 45 20 5 3 2 1 <br> RESULTADO <br>");
getGruposMonedas(1500, ordenarArrayNumeros("1000 200 45 20 5 3 2 1")).forEach(element => {
    document.write("<pre> Monedas de " + element[0] + " -> " + element[1] + " </pre>");
});


function getGruposMonedas(numero, gruposMonedas) {

    var map = [];

    for (let i = 0; i < gruposMonedas.length; i++) {
        if (numero == 0) {
            map[i] = [gruposMonedas[i],0];
        }else{
            map[i] = [gruposMonedas[i],Math.floor(numero/gruposMonedas[i])];
            numero = numero%gruposMonedas[i];
        }        
    }

    return map;
}

function ordenarArrayNumeros(gruposMonedas) {

    gruposMonedasNumber = [];
    gruposMonedas.split(" ").forEach(element => {
        gruposMonedasNumber.push(parseInt(element));
    });;    

    return gruposMonedasNumber.sort(function (a, b){
        return a - b;
    }).reverse();
}

//EJERCICIO 08
document.write("<h2>Ejercicio08 - Obtención de carácteres únicos en una cadena</h2>");
document.write("<pre>Cadena 1 -> Hola pepe que tal estás - Caracteres unicos en la cadena -> " + getCaracteresUnicos("Hola pepe que tal estás") + " <br>");
document.write("<pre>Cadena 1 -> Buenos Bombos - Caracteres unicos en la cadena -> " + getCaracteresUnicos("Buenos Bombos") + " <br>");
document.write("<pre>Cadena 1 -> Buenos Bombos - El músculo con el nombre mas largo es el esternocleidomastoideo. -> " + getCaracteresUnicos("El músculo con el nombre mas largo es el esternocleidomastoideo.") + " <br>");


function getCaracteresUnicos(cadena) {
    caracteresSeparados = cadena.split("");
    caracteresUnicos = [];

    caracteresSeparados.forEach(element => {
        if (!caracteresUnicos.includes(element)) {
            caracteresUnicos.push(element);  
        }
    });
    return caracteresUnicos.toString();
}

//EJERCICIO 09
document.write("<h2>Ejercicio08 - Obtención de carácteres únicos en una cadena</h2>");
document.write("<pre>Palabra 1 -> 10 letras | Resultado -> " + generaCadenaAleatoria(10) + " <br>");
document.write("<pre>Palabra 1 -> 25 letras | Resultado -> " + generaCadenaAleatoria(25) + " <br>");
document.write("<pre>Palabra 1 -> 50 letras | Resultado -> " + generaCadenaAleatoria(50) + " <br>");


function generaCadenaAleatoria(longitudCadena) {
    caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    arrayCaracteres = caracteres.split("");
    cadenaRandom = "";
     for (let i = 0; i < longitudCadena; i++) {
         cadenaRandom = cadenaRandom + arrayCaracteres[randomNumber(0,arrayCaracteres.length-1)];         
     }
     return cadenaRandom;
}

function randomNumber(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}