class Libro{
    constructor(titulo, tipo, editorial, anyo, autor){
        this.titulo = titulo;
        this.tipo = tipo;
        this.editorial = editorial;
        this.anyo = anyo;
        this.autor = autor;
    }
    getTitulo(){
        return this.titulo;
    }
    getTipo(){
        return this.tipo;
    }
    getEditorial(){
        return this.editorial;
    }
    getAnyo(){
        return this.anyo;
    }
    getAutor(){
        return this.autor;
    }
}