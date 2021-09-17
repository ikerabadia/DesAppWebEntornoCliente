//8-Modifica el ejercicio anterior para poder pintar también campos de tipo texto, password, boton, select, radio y checkbox, 
//pidiendo más o menos datos en función de cada tipo de botón.

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
            generarCampoPassword();
            break;
        case 3: //boton
            generarCampoBoton();
            break;
        case 4: //select
            generarCampoSelect();
            break;
        case 5: //radio
            generarCampoRadioBtn();
            break;
        case 6: //checkbox
            generarCampoCheckbox();
            break;        
    }
}

function generarCampoTexto() {
    var nombreCampo = prompt("Introduzca el nombre del campo");
    var valorPorDefecto = prompt("Introduzca el valor que tendra por defecto el campo");
    document.write("<input type=\"text\" name = \"" + nombreCampo + "\" placeholder=\"" + valorPorDefecto + "\"><br>");
}

function generarCampoPassword() {
    var nombreCampo = prompt("Introduzca el nombre del campo");
    var valorPorDefecto = prompt("Introduzca el valor que tendra por defecto el campo");
    document.write("<input type=\"password\" name = \"" + nombreCampo + "\" placeholder=\"" + valorPorDefecto + "\"><br>");
}

function generarCampoBoton() {
    var nombreCampo = prompt("Introduzca el nombre del boton");
    var valorPorDefecto = prompt("Introduzca el valor del boton");
    document.write("<button>" + valorPorDefecto + "</button><br>");
}

function generarCampoSelect() {
    var pregunta = prompt("Introduzca la pregunta que se realizara en el select");
    document.write("<label for=\"select\">" + pregunta + "</label>");
    document.write("<select name=\"select\" id=\"select\">");
    var numeroOpciones = prompt("Escriba el numero de opciones del select");
    for (let i = 0; i < numeroOpciones; i++) {    
        var textoOpcion = prompt("Introduzca el nombre de la opcion");            
        document.write("<option value=\"" + textoOpcion + "\">" + textoOpcion + "</option>");
    }
    document.write("</select>");   
}

function generarCampoRadioBtn() {
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
}

function generarCampoCheckbox() {
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
}
