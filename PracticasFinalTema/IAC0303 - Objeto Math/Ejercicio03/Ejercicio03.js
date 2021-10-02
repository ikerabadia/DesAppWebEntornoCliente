//3. Escribe una función JavaScript para averiguar si un número es un número natural o no.


if (esNatural(5)) {
  document.write("El numero 5 ES natural.<br>");
}else{
  document.write("El numero 5 NO ES natural.<br>");
}

if (esNatural(5.5)) {
  document.write("El numero 5.5 ES natural.<br>");
}else{
  document.write("El numero 5.5 NO ES natural.<br>");
}

if (esNatural(-1)) {
  document.write("El numero -1 ES natural.<br>");
}else{
  document.write("El numero -1 NO ES natural.<br>");
}

function esNatural(numero) {
  if(parseInt(numero) > 0){
    if(Number.isInteger(numero)){
      return true;
    }
  }
  return false;
}



