class Copia{
    constructor(libro,numCopia,estado,id){
        this.id = id;
        this.libro = libro;
        this.numCopia = numCopia;
        this.estado = estado;
    }

    getId(){
        return this.id;
    }
    getLibro(){
        return this.libro;
    }
    getNumCopia(){
        return this.numCopia;
    }
    getEstado(){
        return this.estado;
    }

    setEstado(estado){
        this.estado = estado;
    }
}