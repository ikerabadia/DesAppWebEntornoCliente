var estudios = 1;
var experiencia = 1;

function anadirEstudios() {
    var contenedorEstudios = document.getElementById("divContenedorEstudios");
    var div = document.createElement('div');
    estudios++;
    div.innerHTML = "<input list=\"datalistTitulos\" name=\"tituloEstudios"+estudios+"\" class=\"tituloEstudios\" placeholder=\"titulo\" onkeypress=\"compruebaCaracterAlfanumerico(event)\" onblur=\"compruebaCadenaAlfanumerica(this)\"><small class=\"mensajeError\">rellene el campo</small><input type=\"text\" name=\"fechaFinalizacionEstudios"+estudios+"\" class=\"fechaFinalizacionEstudios\" placeholder=\"Fecha Finalizacion\" onfocus=\"setTipoFecha(this)\" onblur=\"compruebaFecha(this)\"><small class=\"mensajeError\">rellene el campo</small><input type=\"text\" name=\"centroEstudios"+estudios+"\" class=\"centroEstudios\" placeholder=\"Centro\" onkeypress=\"compruebaCaracterAlfanumerico(event)\" onblur=\"compruebaCadenaAlfanumerica(this)\"><small class=\"mensajeError\">rellene el campo</small><a class=\"btnEliminarElemento\" onclick=\"eliminarElemento(this)\"><i class=\"fa fa-minus-square fa-2x\" aria-hidden=\"true\"></i></a>";
    div.className = "divEstudio"
    contenedorEstudios.appendChild(div);
}

function anadirExperiencia() {
    var contenedorExperienciaLaboral = document.getElementById("divContenedorExperienciaLaboral");
    var div = document.createElement('div');
    experiencia++;
    div.innerHTML = "<div class=\"cabeceraExperienciaLaboral\"><input type=\"text\" name=\"inputEmpresa"+experiencia+"\" placeholder=\"Empresa\" class=\"inputEmpresa\" onkeypress=\"compruebaCaracterAlfanumerico(event)\" onblur=\"compruebaCadenaAlfanumerica(this)\"><small class=\"mensajeError\">rellene el campo</small><input type=\"text\" name=\"inputPuesto"+experiencia+"\" placeholder=\"Puesto\" class=\"inputPuesto\" onkeypress=\"compruebaCaracterAlfanumerico(event)\" onblur=\"compruebaCadenaAlfanumerica(this)\"><small class=\"mensajeError\">rellene el campo</small><input type=\"text\" name=\"fechaFinalizacionExperienciaLaboral"+experiencia+"\" placeholder=\"Fecha finalizacion\" class=\"fechaFinalizacionExperienciaLaboral\" onfocus=\"setTipoFecha(this)\" onblur=\"compruebaFecha(this)\"><small class=\"mensajeError\">rellene el campo</small></div><div  class=\"divDescripcionExperienciaLaboral\"><textarea name=\"descripcionExperienciaLaboral"+experiencia+"\" class=\"descripcionExperienciaLaboral\" placeholder=\"Descripcion\"></textarea></div><a class=\"btnEliminarElemento\" onclick=\"eliminarElemento(this)\"><i class=\"fa fa-minus-square fa-2x\" aria-hidden=\"true\"></i></a>";
    div.className = "divExperienciaLaboral";
contenedorExperienciaLaboral.appendChild(div);
}

function eliminarElemento(elemento) {
    elemento.parentNode.parentNode.removeChild(elemento.parentNode);
}
//Comprobaciones datos personales
//Nombre y apellidos
function compruebaNombre(input) {
    if (/^[a-zA-Z]{1,}$/.test(input.value)) {
        input.style.border = "3px solid green";
        input.nextElementSibling.style.display = "none";
    }else{
        input.style.border = "3px solid red";
        input.nextElementSibling.style.display = "block";
    }
}
function compruebaCaracterNombre(evento){
    if (/^[a-zA-Z]$/.test(evento.key)) {
        return true;
    }else{
        evento.preventDefault();
        return false;
    }
}
//Edad
function compruebaEdad(input) {
    if (/^[0-9]{1,}$/.test(input.value)) {
        input.style.border = "3px solid green";
        input.nextElementSibling.style.display = "none";
    }else{
        input.style.border = "3px solid red";
        input.nextElementSibling.style.display = "block";
    }
}
function compruebaCaracterEdad(evento,input){
    if (/^[0-9]$/.test(evento.key)) {
        if (input.value.length == 2) {
            evento.preventDefault();
            return false;
        }else{            
            return true;
        }        
    }else{
        evento.preventDefault();
        return false;
    }
}
//Direccion
function compruebaDireccion(input) {
    if (/^[#.0-9a-zA-Z\s,-]+$/.test(input.value)) {
        input.style.border = "3px solid green";
        input.nextElementSibling.style.display = "none";
    }else{
        input.style.border = "3px solid red";
        input.nextElementSibling.style.display = "block";
    }
}
function compruebaCaracterDireccion(evento,input){
    if (/^[#.0-9a-zA-Z\s,-]+$/.test(evento.key)) {
        return true       
    }else{
        evento.preventDefault();
        return false;
    }
}
//Email
function compruebaEmail(input) {
    if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(input.value)) {
        input.style.border = "3px solid green";
        input.nextElementSibling.style.display = "none";
    }else{
        input.style.border = "3px solid red";
        input.nextElementSibling.style.display = "block";
    }
}
//Telefono
function compruebaTelefono(input) {
    if (/[0-9]{9}/.test(input.value)) {
        input.style.border = "3px solid green";
        input.nextElementSibling.style.display = "none";
    }else{
        input.style.border = "3px solid red";
        input.nextElementSibling.style.display = "block";
    }
}
function compruebaCaracterTelefono(evento,input){
    if (/^[0-9]$/.test(evento.key)) {
        if (input.value.length == 9) {
            evento.preventDefault();
            return false       
        }else{        
            return true;
        }       
    }else{
        evento.preventDefault();
        return false;
    }        
}
//Cadena alfanumerica
function compruebaCadenaAlfanumerica(input) {
    if (/^[a-zA-Z0-9 ñáéíóúÁÉÍÓÚ,]{1,}$/.test(input.value)) {
        input.style.border = "3px solid green";
        input.nextElementSibling.style.display = "none";
    }else{
        input.style.border = "3px solid red";
        input.nextElementSibling.style.display = "block";
    }
}
function compruebaCaracterAlfanumerico(evento){
    if (/^[a-zA-Z0-9 ñáéíóúÁÉÍÓÚ,]$/.test(evento.key)) {
        return true;
    }else{
        evento.preventDefault();
        return false;
    }
}
//Fechas
function compruebaFecha(input) {
    if (/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(input.value)) {
        input.style.border = "3px solid green";
        input.nextElementSibling.style.display = "none";
    }else{
        input.style.border = "3px solid red";
        input.nextElementSibling.style.display = "block";
    }
}
function setTipoFecha(input) {
    input.type = 'date';
}

//Links
function compruebaLink(input) {
    if (/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(input.value)) {
        input.style.border = "3px solid green";
        input.nextElementSibling.style.display = "none";
    }else{
        input.style.border = "3px solid red";
        input.nextElementSibling.style.display = "block";
    }
}

//Enviar formulario
function enviarFormulario(evento) {
    var inputs = document.getElementsByTagName("input");
    var inputsArray = Array.prototype.slice.call(inputs);
    var todoBien = true;
    inputsArray.forEach(element => {
        if (element.value != "Submit" && element.type != "file") {
            if (element.style.border != "3px solid green") {
                todoBien = false;
            } 
        }
        if (element.type == "file") {
            if (element.src == "") {
                todoBien = false;
            }
        }       
    });
    if (!todoBien) {
        var mensajeErrorSubmit = document.getElementById("mensajeErrorSubmit");
        mensajeErrorSubmit.style.visibility = "visible";
        evento.preventDefault();
        return false;
    }
}

//Apartado de Imagen Drag an drop
var el = document.getElementById('imagenDatosPersonales');

function stop_and_prevent(e) {
    e.stopPropagation();
    e.preventDefault();
}

function load_images(files) {
    var images = document.getElementById("images");
    [].forEach.call(files, function(file) {
      if (file.type.match('image.*')) {
        var reader = new FileReader();
        reader.onload = function() {
          var img = document.createElement('img');
          img.src = this.result; 
          images.appendChild(img);
          var inputImagen = document.getElementById("inputImagen");
          inputImagen.src = img.src;
          inputImagen.style.border = "input.style.border = \"3px solid green\"";
        }
        reader.readAsDataURL(file);
      }
   });
   var parrafo = document.getElementById("parrafoImagen");
   parrafo.parentNode.removeChild(parrafo);
   
}

function onDrop(e) {
    stop_and_prevent(e);
    load_images(e.dataTransfer.files);
    return false;
}

el.addEventListener('dragenter', stop_and_prevent);
el.addEventListener('dragover', stop_and_prevent);
el.addEventListener('drop', onDrop);