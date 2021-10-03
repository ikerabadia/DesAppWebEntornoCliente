//6. Escribe una función JavaScript para añadir las semanas especificadas a una fecha.
document.write(
  "Fecha: 2014/10/2 | semanas: 10 -> Resultado: " +
    addWeeks(new Date(2014, 10, 2), 10) +
    "<br>"
);
document.write(
  "Fecha: 2017/12/11 | semanas: 7 -> Resultado: " +
    addWeeks(new Date(2017, 12, 11), 7) +
    "<br>"
);
document.write(
  "Fecha: 2012/5/5 | semanas: 13 -> Resultado: " +
    addWeeks(new Date(2012, 5, 5), 13) +
    "<br>"
);

function addWeeks(fecha, semanas) {
  var fechaInicial = new Date(fecha);
  //var fechaAñadir = new Date(semanas*7*24*60*60*1000);
  //var fechaFinal = fechaInicial + fechaAñadir;
  //return fechaFinal;
  return sumarDias(fechaInicial, semanas*7);
}
function sumarDias(fecha, dias){
  fecha.setDate(fecha.getDate() + dias);
  return fecha;
}
