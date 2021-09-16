//7-Crea un formulario de manera dinámica. Cada vez que se entre en la web se pedirá mediante promt el número de campos 
//que debe tener el formulario, y para cada uno de ellos el tipo (Texto, password o botón), el nombre y el valor por defecto. 
//Seguidamente se creará un formulario plenamente funcional con los parámetros indicados.

var numeroCampos = prompt("Introduce el numero de campos que tendra el formulario");

for (let i = 0; i < numeroCampos; i++) {
    GenerarCampos();    
}


function GenerarCampos() {
    var tipoCampo = prompt("Introduzca el tipo de campo: 1-texto, 2-password, 3-boton");

    switch (parseInt(tipoCampo)) {
        case 1:
            var nombreCampo = prompt("Introduzca el nombre del campo");
            var valorPorDefecto = prompt("Introduzca el valor que tendra por defecto el campo");
            document.write("<input type=\"text\" name = \"" + nombreCampo + "\" placeholder=\"" + valorPorDefecto + "\"><br>");
            break;
        case 2:
            var nombreCampo = prompt("Introduzca el nombre del campo");
            var valorPorDefecto = prompt("Introduzca el valor que tendra por defecto el campo");
            document.write("<input type=\"password\" name = \"" + nombreCampo + "\" placeholder=\"" + valorPorDefecto + "\"><br>");
            break;
        case 3:
            var nombreCampo = prompt("Introduzca el nombre del boton");
            var valorPorDefecto = prompt("Introduzca el valor del boton");
            document.write("<button>" + valorPorDefecto + "</button><br>");
            break;
    }
}


