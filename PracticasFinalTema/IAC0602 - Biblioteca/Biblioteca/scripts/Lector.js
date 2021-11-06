class Lector{
    constructor(nSocio, nombre, telefono, direccion){
        this.nSocio = nSocio;
        this.nombre = nombre,
        this.telefono = telefono;
        this.direccion = direccion;
        this.multa = null;
        this.prestamos = [];
    }

    devolver(idCopia){
        var contador=0;
        if (prestamos.length>0) {
            this.prestamos.forEach(element => {
                if (element.getCopia().getId() == idCopia) {
                    this.prestamos.splice(contador,1);
                    element.getCopia().setEstado("Biblioteca");
                }
                contador++;
            });
        }
        
    }

    prestar(prestamo){
        if (multa != null && prestamos.length < 3) {            
            this.prestamos.push(prestamo);
            prestamo.getCopia().setEstado("Prestado");
        }
    }

    multar() {
        this.multa = new Multa(Date.now(),(Date.now()+2592000000));
    }
}