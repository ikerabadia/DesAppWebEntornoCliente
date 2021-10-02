//5. Escriba una función JavaScript para comprobar si un valor es un entero o no.

document.write("Numero: 5 | Es entero: " + esEntero(5));
document.write("<br>Numero: 10.5 | Es entero: " + esEntero(10.5));
document.write("<br>Numero: ab3 | Es entero: " + esEntero("ab3"));

function esEntero(numero) {
  if(Number.isInteger(numero)){
    return true;
  }else{
    return false;
  }
}




