//7. Escribe una función JavaScript para obtener las diferencias de tiempo en meses entre dos fechas.
document.write("Fechas: 13/06/2014 - 19/10/2014 -> Diferencia en meses: " + dateDiffInMonths(new Date("06/13/2014"),new Date("10/19/2014")) + "<br>");
document.write("Fechas: 02/04/2014 - 04/11/2014 -> Diferencia en meses: " + dateDiffInMonths("04/02/2014","11/04/2014") + "<br>");

function dateDiffInMonths(fecha1, fecha2) {
  fecha1 = new Date(fecha1);
  fecha2 = new Date(fecha2);
  var meses; 
  meses = (fecha2.getFullYear() - fecha1.getFullYear()) * 12; 
  meses -= fecha1.getMonth(); 
  meses += fecha2.getMonth(); 
  return meses;

}