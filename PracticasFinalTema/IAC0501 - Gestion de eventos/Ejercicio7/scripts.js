/*Crea tres cajas de texto, para insertar números, caracteres o ambos. El máximo número de caracteres 
que puede haber en cada caja son 10. Comprueba las discrepancias entre distintos navegadores, por ejemplo Chrome y Firefox.*/
function permite(evento, tipoDatos, input, maxNumCaracteres) {
  switch (tipoDatos) {
    case "num":
      if (!/[0-9]/.test(evento.key)) {
        return false;
      }

      break;
    case "car":
      if (!/[a-zA-Z]/.test(evento.key)) {
        return false;
      }
      break;
    case "num_car":
      if (!/[0-9a-zA-Z]/.test(evento.key)) {
        return false;
      }
      break;

    default:
      break;
  }
  if (input.value.length == maxNumCaracteres) {
    return false;
  }
}
