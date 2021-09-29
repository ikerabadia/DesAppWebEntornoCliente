//7. Escribe una función JavaScript para obtener un guid único (acrónimo de 'Globally Unique Identifier') de la longitud especificada, o 32 por defecto.

var cantidadGuid = prompt("Introduzca la cantidad de guid que quiere generar.");
var guids = [];
for (let i = 0; i < cantidadGuid; i++) {
    
    document.write("- " + guid() + "<br>");
    
}

function guid() {
    var alfanumericos = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    var cifras = aleatorio(5,30);
    var guid = "";

    do {
        for (let i = 0; i < cifras; i++) {
            guid += alfanumericos[aleatorio(0,alfanumericos.length-1)];
            
        }
    } while (guids.includes(guid));
    
    return guid;
}

function aleatorio(inferior, superior) {
    var numPosibilidades = superior - inferior;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return inferior + aleatorio;
}


