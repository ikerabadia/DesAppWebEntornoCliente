var estudios = 1;
var experiencia = 1;

function añadirEstudios() {
    var contenedorEstudios = document.getElementById("divContenedorEstudios");
    var div = document.createElement('div');
    estudios++;
    div.innerHTML = "<input type=\"text\" name=\"tituloEstudios"+estudios+"\" class=\"tituloEstudios\" placeholder=\"titulo\"><input type=\"date\" name=\"fechaFinalizacionEstudios"+estudios+"\" class=\"fechaFinalizacionEstudios\" placeholder=\"Fecha Finalizacion\"><input type=\"text\" name=\"centroEstudios"+estudios+"\" class=\"centroEstudios\" placeholder=\"Centro\"><a class=\"btnEliminarElemento\" onclick=\"eliminarElemento(this)\"><i class=\"fa fa-minus-square fa-2x\" aria-hidden=\"true\"></i></a>";
    div.className = "divEstudio"
    contenedorEstudios.appendChild(div);
}

function añadirExperiencia() {
    var contenedorExperienciaLaboral = document.getElementById("divContenedorExperienciaLaboral");
    var div = document.createElement('div');
    experiencia++;
    div.innerHTML = "<div class=\"cabeceraExperienciaLaboral\"><input type=\"text\" name=\"inputEmpresa"+experiencia+"\" placeholder=\"Empresa\" class=\"inputEmpresa\"><input type=\"text\" name=\"inputPuesto"+experiencia+"\" placeholder=\"Puesto\" class=\"inputPuesto\"><input type=\"date\" name=\"fechaFinalizacionExperienciaLaboral"+experiencia+"\" placeholder=\"Fecha finalizacion\" class=\"fechaFinalizacionExperienciaLaboral\"></div><div  class=\"divDescripcionExperienciaLaboral\"><textarea name=\"descripcionExperienciaLaboral"+experiencia+"\" class=\"descripcionExperienciaLaboral\" placeholder=\"Descripcion\"></textarea></div><a class=\"btnEliminarElemento\" onclick=\"eliminarElemento(this)\"><i class=\"fa fa-minus-square fa-2x\" aria-hidden=\"true\"></i></a>";
    div.className = "divExperienciaLaboral";
contenedorExperienciaLaboral.appendChild(div);
}

function eliminarElemento(elemento) {
    elemento.parentNode.parentNode.removeChild(elemento.parentNode);
}