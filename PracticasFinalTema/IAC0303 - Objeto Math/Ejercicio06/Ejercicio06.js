//6. Escribe una función JavaScript que convierta un número entero en un número romano en javaScript.

numero = prompt("Introduzca un numero (no mayor de 3888) y lo convertiremos a numeros romanos");
document.write("Numero introducido: " + numero + " | Numero romano: " + getNumerosRomanos(numero));

function getNumerosRomanos(numero) {
  var numerosRomanos = "MDCLXVI".split("");
  var equivalencias = [1000,500,100,50,10,5,1];
  var aux = "";

  for (let i = 0; i < numerosRomanos.length; i++) {
      if (numero>=equivalencias[i]) {
        for (let j = 0; j < parseInt(numero/equivalencias[i]); j++) {
          aux = aux+numerosRomanos[i];          
        }
        numero=numero%equivalencias[i];
      }      
  }

  return aux;
}




