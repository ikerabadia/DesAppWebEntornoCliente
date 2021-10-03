//1.   Escriba una función JavaScript para comprobar si un `input` es un objeto fecha o no.
document.write("Input: 13 de octubre de 2014 11:13:00 -> Es Date: " + isValidDate("13 de octubre de 2014 11:13:00") + "<br>");
document.write("Input: new Date(86400000) -> Es Date: " + isValidDate(new Date(86400000)) + "<br>");
document.write("Input: new Date(99,5,24,11,33,30,0) -> Es Date: " + isValidDate(new Date(99,5,24,11,33,30,0)) + "<br>");
document.write("Input: [1, 2, 4, 0] -> Es Date: " + isValidDate(new Date([1, 2, 4, 0])) + "<br>");

function isValidDate(value) {
  var dateWrapper = new Date(value);
  return !isNaN(dateWrapper.getDate())
}