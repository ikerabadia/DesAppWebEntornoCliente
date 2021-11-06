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

    setEstado(estado){
        this.estado = estado;
    }
}