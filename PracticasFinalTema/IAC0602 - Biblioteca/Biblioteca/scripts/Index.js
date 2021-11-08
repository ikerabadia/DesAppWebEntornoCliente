var biblioteca = new Biblioteca();
window.onload = function(){
    biblioteca.pintarLectores(document.getElementById("divScrollLectores"));
    biblioteca.pintarCopias(document.getElementById("divMuestraCopias"));
}

function cambiarLector(nSocio,btn) {
    biblioteca.cambiarLector(nSocio,btn);
}

function expirarMulta(){
    biblioteca.expirarMulta();
}
function multar(){
    biblioteca.multar();
}
function alquilarCopia(idCopia){
    biblioteca.alquilarCopia(idCopia);
}
function devolverCopia(idCopia){
    biblioteca.devolverCopia(idCopia);
}