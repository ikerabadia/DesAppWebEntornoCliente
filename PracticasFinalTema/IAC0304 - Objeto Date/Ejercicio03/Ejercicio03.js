//3. Escribe una función JavaScript para obtener la diferencia entre dos fechas en días. Tiene que tener en cuenta los días de cada mes y los años bisiestos.
document.write("Fechas: 04/02/2014 - 11/04/2014 -> Dias: " + dateDiffInDays("04/02/2014","11/04/2014") + "<br>");
document.write("Fechas: 12/02/2014 - 11/04/2014 -> Dias: " + dateDiffInDays("12/02/2014","11/04/2014") + "<br>");

function dateDiffInDays(fecha1, fecha2) {
  var dias = (((((new Date(fecha2)-new Date(fecha1))/1000)/60)/60)/24);
  return parseInt(dias);
}