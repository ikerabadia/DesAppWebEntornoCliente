//7-Crea un formulario de manera dinámica. Cada vez que se entre en la web se pedirá mediante promt el número de campos 
//que debe tener el formulario, y para cada uno de ellos el tipo (Texto, password o botón), el nombre y el valor por defecto. 
//Seguidamente se creará un formulario plenamente funcional con los parámetros indicados.

var numeroCampos = prompt("Introduce el numero de campos que tendra el formulario");

for (let i = 0; i < numeroCampos; i++) {
    GenerarCampos();    
}


function GenerarCampos() {
    var tipoCampo = prompt("Introduzca el tipo de campo: 1-texto, 2-password, 3-boton, 4-select, 5-radio, 6-checkbox");

    switch (parseInt(tipoCampo)) {
        case 1: //texto
            generarCampoTexto();
            break;
        case 2: //password
            var nombreCampo = prompt("Introduzca el nombre del campo");
            var valorPorDefecto = prompt("Introduzca el valor que tendra por defecto el campo");
            document.write("<input type=\"password\" name = \"" + nombreCampo + "\" placeholder=\"" + valorPorDefecto + "\"><br>");
            break;
        case 3: //boton
            var nombreCampo = prompt("Introduzca el nombre del boton");
            var valorPorDefecto = prompt("Introduzca el valor del boton");
            document.write("<button>" + valorPorDefecto + "</button><br>");
            break;
        case 4: //select
            var pregunta = prompt("Introduzca la pregunta que se realizara en el select");
            document.write("<label for=\"select\">" + pregunta + "</label>");
            document.write("<select name=\"select\" id=\"select\">");
            var numeroOpciones = prompt("Escriba el numero de opciones del select");
            for (let i = 0; i < numeroOpciones; i++) {    
                var textoOpcion = prompt("Introduzca el nombre de la opcion");            
                document.write("<option value=\"" + textoOpcion + "\">" + textoOpcion + "</option>");
            }
            document.write("</select>");            
            break;
        case 5: //radio
            var pregunta = prompt("Introduzca la pregunta que se realizara en el radio button");
            document.write("<p>" + pregunta + "</p>");
            document.write("<form>");
            var numeroOpciones = prompt("Escriba el numero de opciones del radio button");
            for (let i = 0; i < numeroOpciones; i++) {    
                var textoOpcion = prompt("Introduzca el nombre de la opcion");            
                document.write("<input type=\"radio\" id=\""+textoOpcion+"\" name=\""+textoOpcion+"\" value=\""+textoOpcion+"\">");
                document.write("<label for=\""+textoOpcion+"\">" + textoOpcion + "</label><br>");
            }
            document.write("</form>");
            break;
        case 6: //checkbox
            var pregunta = prompt("Introduzca la pregunta que se realizara en el check box");
            document.write("<p>" + pregunta + "</p>");
            document.write("<form>");
            var numeroOpciones = prompt("Escriba el numero de opciones del radio button");
            for (let i = 0; i < numeroOpciones; i++) {    
                var textoOpcion = prompt("Introduzca el nombre de la opcion");            
                document.write("<input type=\"checkbox\" id=\""+textoOpcion+"\" name=\""+textoOpcion+"\" value=\""+textoOpcion+"\">");
                document.write("<label for=\""+textoOpcion+"\">" + textoOpcion + "</label><br>");
            }
            document.write("</form>");
            break;        
    }
}

function generarCampoTexto() {
    var nombreCampo = prompt("Introduzca el nombre del campo");
    var valorPorDefecto = prompt("Introduzca el valor que tendra por defecto el campo");
    document.write("<input type=\"text\" name = \"" + nombreCampo + "\" placeholder=\"" + valorPorDefecto + "\"><br>");
}
