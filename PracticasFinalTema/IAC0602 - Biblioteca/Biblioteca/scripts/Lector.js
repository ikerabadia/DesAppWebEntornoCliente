class Lector{
    constructor(nSocio, nombre, telefono, direccion){
        this.nSocio = nSocio;
        this.nombre = nombre,
        this.telefono = telefono;
        this.direccion = direccion;
        this.multa = null;
        this.prestamos = [];
    }

    getNSocio(){
        return this.nSocio;
    }
    getNombre(){
        return this.nombre;
    }
    getTelefono(){
        return this.telefono
    }
    getDireccion(){
        return this.direccion;
    }
    getPrestamos(){
        return this.prestamos;
    }
    getMulta(){
        return this.multa;
    }

    devolver(idCopia){
        var contador=0;
        if (this.prestamos.length>0) {
            this.prestamos.forEach(element => {
                if (element.getCopia().getId() == idCopia) {
                    element.getCopia().setEstado("Biblioteca");
                    this.prestamos.splice(contador,1);                    
                }
                contador++;
            });
        }
        
    }

    prestar(prestamo){
        if (this.multa == null && this.prestamos.length < 3) {            
            this.prestamos.push(prestamo);
            prestamo.getCopia().setEstado("Prestado");
        }
    }

    multar() {
        this.multa = new Multa(Date.now(),(Date.now()+2592000000));
    }

    expirarMulta(){
        this.multa = null;
    }
}