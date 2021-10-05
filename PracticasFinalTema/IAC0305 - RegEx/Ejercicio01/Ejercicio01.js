//1.   secuencias de uno o más dígitos que no contienen dos dígitos pares consecutivos.

document.write("Cadena Introducida: 123456789 | Resultado: " + !/^(?!\d*[02468]{2,})\d*$/.test(123456789)+ "<br>");
document.write("Cadena Introducida: 1223456789 | Resultado: " + !/^(?!\d*[02468]{2,})\d*$/.test(1223456789) + "<br>");
document.write("Cadena Introducida: 1234567899 | Resultado: " + !/^(?!\d*[02468]{2,})\d*$/.test(1234567899) + "<br>");
