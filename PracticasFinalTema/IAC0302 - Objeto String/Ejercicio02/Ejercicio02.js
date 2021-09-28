//2. Escriba una función de JavaScript que permita hacer minúscula la primera letra de cada palabra de una cadena (solo cuando haga falta).

var cadena = prompt("Introduzca una cadena y la primera letra de cada palabra sera convertida a minuscula.");

document.write(toMinusPrimeraLetraCadaPalabra(cadena));

function toMinusPrimeraLetraCadaPalabra(cadena) {
    
    var palabrasSeparadas = cadena.split(" ");
    var primeraLetra = "";

    cadena = "";

    palabrasSeparadas.forEach(element => {
        primeraLetra = element.charAt(0);
        if(primeraLetra == primeraLetra.toUpperCase()){            
            primeraLetra = primeraLetra.toLowerCase();
           cadena = cadena + primeraLetra + element.substring(1) + " ";
        }else{
            cadena = cadena + element + " ";
        }
    });

    return cadena;

}