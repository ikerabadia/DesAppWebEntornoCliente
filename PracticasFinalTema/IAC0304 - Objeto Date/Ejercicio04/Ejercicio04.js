//4. Escribe una función JavaScript para obtener la fecha mínima de un array de fechas.
document.write("Fechas: ['2015/02/01', '2015/02/02', '2015/01/03'] -> Fecha minima: " + getFechaMenor(['2015/02/01', '2015/02/02', '2015/01/03']) + "<br>");

function getFechaMenor(arrayFechas) {
  var fechaMinima = new Date(arrayFechas[0]);
  var fechaAux = new Date();

  arrayFechas.forEach(element => {
    fechaAux = new Date(element);
    if (fechaAux<fechaMinima) {
      fechaMinima = fechaAux;
    }
  });

  return fechaMinima;
}