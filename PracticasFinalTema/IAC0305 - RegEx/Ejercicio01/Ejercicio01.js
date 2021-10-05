//1.   secuencias de uno o más dígitos que no contienen dos dígitos pares consecutivos.

document.write("Cadena Introducida: 123456789 | Resultado: " + !/[2,4,6,8]{2}/.test(123456789)+ "<br>");
document.write("Cadena Introducida: 1223456789 | Resultado: " + !/[2,4,6,8]{2}/.test(1223456789) + "<br>");
document.write("Cadena Introducida: 1234567899 | Resultado: " + !/[2,4,6,8]{2}/.test(1234567899) + "<br>");
