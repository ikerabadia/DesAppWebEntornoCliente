var concesionario = new Concesionario();

function abrirConcesionarioInterface() {
    concesionario.abrir();
}

function anadirClienteInterface() {    
    var cliente = new Cliente(prompt("Introduce el DNI del cliente"));
    concesionario.nuevoCliente(cliente);
}

function venderCocheInterface() {
    var dniCliente = prompt("Introduce el DNI del cliente");
    var matriculaCoche = prompt("Introduce la matricula del coche que desea comprar");

    concesionario.venta(matriculaCoche, dniCliente);
}