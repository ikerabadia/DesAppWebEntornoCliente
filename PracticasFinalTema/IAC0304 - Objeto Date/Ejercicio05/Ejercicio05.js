//5. Escribe una función JavaScript para obtener una representación textual completa del día de la semana (de domingo a sábado).
document.write(
  "Fecha: 2015/10/1 -> Dia de la semana: " +
    getWeekDay(new Date(2015, 10, 1)) +
    "<br>"
);
document.write(
  "Fecha: 2016/12/5 -> Dia de la semana: " +
    getWeekDay(new Date(2016, 12, 5)) +
    "<br>"
);
document.write(
  "Fecha: 2011/4/2 -> Dia de la semana: " +
    getWeekDay(new Date(2011, 4, 2)) +
    "<br>"
);

function getWeekDay(fecha) {
  var weekDay = fecha.getDay();

  switch (weekDay) {
    case 0:
      return "Domingo";
      break;
    case 1:
      return "Lunes";
      break;
    case 2:
      return "Martes";
      break;
    case 3:
      return "Miercoles";
      break;
    case 4:
      return "Jueves";
      break;
    case 5:
      return "Viernes";
      break;
    case 6:
      return "Sabado";
      break;
  }
}
