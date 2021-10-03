//2. Escribe una función JavaScript para obtener el número de días de un mes.
document.write("Mes: 1,2012 -> Dias del mes: " + getDaysInMonth(1,2012) + "<br>");
document.write("Mes: 2,2012 -> Dias del mes: " + getDaysInMonth(2,2012) + "<br>");
document.write("Mes: 9,2012 -> Dias del mes: " + getDaysInMonth(9,2012) + "<br>");
document.write("Mes: 12,2012 -> Dias del mes: " + getDaysInMonth(12,2012) + "<br>");

function getDaysInMonth(mes, año) {
  var inicio = new Date(año,mes-1);
  if (mes == 11) {
    var fin = new Date(año+1, 0)
  }else{
    var fin = new Date(año, mes)
  }
  var dias = (((((fin-inicio)/1000)/60)/60)/24);
  return dias;
}