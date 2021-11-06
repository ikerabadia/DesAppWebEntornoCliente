class biblioteca{
    constructor(){
        autor1 = new Autor("Felipe","Español",new Date(1971,10,2));
        autor2 = new Autor("Gonzalo","Español",new Date(1973,5,26));
        autor3 = new Autor("Palomares","Español",new Date(1979,11,15));
        this.autores = [autor1,autor2,autor3];
        libro1 = new Libro("Harry Potter","Fantasia","Santana", 2000,autores[0]);
        libro2 = new Libro("El hobbit","Fantasia","Santana", 1985,autores[1]);
        libro3 = new Libro("El señor de los anillos","Fantasia","Santana", 1990,autores[1]);
        libro4 = new Libro("El amuleto de samarkanda","Fantasia","Santana", 2005,autores[2]);
        this.libros = [libro1,libro2,libro3,libro4];
        copia1 = new Copia(Libros[0],0,"Biblioteca",0);
        copia2 = new Copia(Libros[0],1,"Biblioteca",1);
        copia3 = new Copia(Libros[0],2,"Biblioteca",2);
        copia4 = new Copia(Libros[1],0,"Biblioteca",3);
        copia5 = new Copia(Libros[1],1,"Biblioteca",4);
        copia6 = new Copia(Libros[2],0,"Biblioteca",5);
        copia7 = new Copia(Libros[3],0,"Biblioteca",6);
        this.copias = [copia1,copia2,copia3,copia4,copia5,copia6,copia7]
        lector1 = new Lector(0,"Iker",111111111,"Paseo del prior 13 BºA");
        lector2 = new Lector(1,"Pepe",222222222,"Calle Delicias 27 3ºC");
        lector3 = new Lector(2,"Eusebio",333333333,"Avenida Empanada 12 4ºA");
        lector4 = new Lector(3,"Nicolas",444444444,"Calle nevada 5 1ºB");
        this.lectores = [lector1,lector2,lector3,lector4];
    }
}