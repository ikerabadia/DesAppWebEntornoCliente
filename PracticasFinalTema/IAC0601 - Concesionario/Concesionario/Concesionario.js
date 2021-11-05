Concesionario = function() {
    this.clientes = [];
    this.coches = [];
}

Concesionario.prototype.abrir = function(){
    coche1 = new Coche("2007FJH","BMW","X5",214);
    añadirCoche(coche1);
    coche2 = new Coche("2314GBH","Audi","TT",250);
    añadirCoche(coche2);
    coche3 = new Coche("8475","Chevrolet","Camaro",405);
    añadirCoche(coche3);
}

Concesionario.prototype.nuevoCliente = function(cliente) {
    this.clientes.push(cliente);
}
function añadirCoche(coche){
    this.coches.push(coche);
}

Concesionario.prototype.venta = function(matriculaCoche, dniCliente) {
    var cliente = getCliente(dniCliente);
    var coche = getCoche(matriculaCoche);

    cliente.comprarCoche(coche);
}

Concesionario.prototype.getCliente = function(dniCliente){
    for (var i = 0; i < this.clients.length; i++) {
        var client = this.clients[i];
        if (client.dni == dniCliente) {
            return client;
        }
    }
    return false;
}

Concesionario.prototype.getCoche = function(matriculaCoche) {
    for (var i = 0; i < this.coches.length; i++) {
        var coche = this.coches[i];
        if (coche.matricula == matriculaCoche) {
            this.coches.splice(i,1);
            return coche;
        }
    }
    return false;
}