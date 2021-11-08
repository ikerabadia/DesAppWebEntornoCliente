class Biblioteca{
    constructor(){
        var autor1 = new Autor("Felipe","Español",new Date(1971,10,2));
        var autor2 = new Autor("Gonzalo","Español",new Date(1973,5,26));
        var autor3 = new Autor("Palomares","Español",new Date(1979,11,15));
        this.autores = [autor1,autor2,autor3];
        var libro1 = new Libro("Harry Potter","Fantasia","Santana", 2000,this.autores[0]);
        var libro2 = new Libro("El hobbit","Fantasia","Santana", 1985,this.autores[1]);
        var libro3 = new Libro("El señor de los anillos","Fantasia","Santana", 1990,this.autores[1]);
        var libro4 = new Libro("El amuleto de samarkanda","Fantasia","Santana", 2005,this.autores[2]);
        this.libros = [libro1,libro2,libro3,libro4];
        var copia1 = new Copia(this.libros[0],0,"Biblioteca",0);
        var copia2 = new Copia(this.libros[0],1,"Biblioteca",1);
        var copia3 = new Copia(this.libros[0],2,"Biblioteca",2);
        var copia4 = new Copia(this.libros[1],0,"Biblioteca",3);
        var copia5 = new Copia(this.libros[1],1,"Biblioteca",4);
        var copia6 = new Copia(this.libros[2],0,"Biblioteca",5);
        var copia7 = new Copia(this.libros[3],0,"Biblioteca",6);
        this.copias = [copia1,copia2,copia3,copia4,copia5,copia6,copia7]
        var lector1 = new Lector(0,"Iker",111111111,"Paseo del prior 13 BºA");
        var lector2 = new Lector(1,"Pepe",222222222,"Calle Delicias 27 3ºC");
        var lector3 = new Lector(2,"Eusebio",333333333,"Avenida Empanada 12 4ºA");
        var lector4 = new Lector(3,"Nicolas",444444444,"Calle nevada 5 1ºB");
        this.lectores = [lector1,lector2,lector3,lector4];
        this.lectorActual = null;
    }

    pintarLectores(contenedor){
        this.lectores.forEach(lector => {
            contenedor.innerHTML += 
            "<div class=\"lector\">"+
            "<p>Numero de socio: "+lector.getNSocio()+"</p>"+
            "<p>Nombre: "+lector.getNombre()+"</p>"+
            "<p>Telefono: "+lector.getTelefono()+"</p>"+
            "<p>Direccion: "+lector.getDireccion()+"</p>"+
            "<a class=\"btnLector\" onclick=\"cambiarLector("+lector.getNSocio()+",this)\">Cambiar Lector</a></div>";
        });        
    }

    pintarCopias(contenedor){
        contenedor.innerHTML = "";
        this.copias.forEach(copia => {
            if (copia.getEstado() == "Biblioteca") {
                contenedor.innerHTML += 
                "<div class=\"copia\">"+
                "<p>Titulo: "+copia.getLibro().getTitulo()+"</p>"+
                "<p>Tipo: "+copia.getLibro().getTipo()+"</p>"+
                "<p>Editorial: "+copia.getLibro().getEditorial()+"</p>"+
                "<p>Año: "+copia.getLibro().getAnyo()+"</p>"+
                "<p>Autor: "+copia.getLibro().getAutor()+"</p>"+
                "<p>Estado de la copia: "+copia.getEstado()+"</p>"+
                "<a class=\"btnAlquilarCopia\" onclick=\"alquilarCopia("+copia.getId()+")\">Alquilar</a>"+
                "</div>"
            }            
        });
    }

    cambiarLector(nSocio,btn){
        this.lectores.forEach(lector => {
            if (lector.getNSocio() == nSocio) {
                this.lectorActual = lector;
            }
        });
        Array.prototype.slice.call(document.getElementsByClassName("btnLector")).forEach(btn => {
            btn.style.display = "block";
        });
        btn.style.display = "none";
        this.pintarLectorActual();
    }

    pintarLectorActual(){
        document.getElementById("lectorActual").innerHTML = this.lectorActual.getNSocio();
        this.pintarPrestamosLectorActual();
        this.pintarMultaLectorActual();
    }

    expirarMulta(){
        this.lectorActual.expirarMulta();
        this.pintarMultaLectorActual();
    }

    pintarMultaLectorActual(){
        var multa = this.lectorActual.getMulta();
        var contenedorMultas = document.getElementById("contenedorMultas");
        if (multa != null) {
            var fInicio = new Date(multa.getFInicio());
            var fFin = new Date(multa.getFFin());
            contenedorMultas.innerHTML = 
            "<p>Fecha de inicio: "+fInicio.getDate()+"-"+(fInicio.getMonth()+1)+"-"+fInicio.getFullYear()+"</p>"+
            "<p>Fecha de expiracion: "+fFin.getDate()+"-"+fFin.getMonth()+"-"+fFin.getFullYear()+"</p>"+
            "<a id=\"btnExpirarMulta\" onclick=\"expirarMulta("+this.lectorActual.getNSocio()+")\">Expirar multa</a>";
        }else{
            contenedorMultas.innerHTML = "<p>Este usuario no tiene multas activas</p>";
        }
    }

    pintarPrestamosLectorActual(){
        var prestamosLectorActual = this.lectorActual.getPrestamos();
        var contenedorPrestamos = document.getElementById("contenedorPrestamos");
        contenedorPrestamos.innerHTML = "";
        if (prestamosLectorActual.length > 0) {
            prestamosLectorActual.forEach(prestamo => {
                contenedorPrestamos.innerHTML += 
                "<div class=\"prestamo\">"+
                "<p>Titulo: "+prestamo.getCopia().getLibro().getTitulo()+"</p>"+
                "<p>Tipo: "+prestamo.getCopia().getLibro().getTipo()+"</p>"+
                "<p>Editorial: "+prestamo.getCopia().getLibro().getEditorial()+"</p>"+
                "<p>Año: "+prestamo.getCopia().getLibro().getAnyo()+"</p>"+
                "<p>Autor: "+prestamo.getCopia().getLibro().getAutor().getNombre()+"</p>"+
                "<p>Estado de la copia: "+prestamo.getCopia().getEstado()+"</p>"+
                "<p><b>El prestamo es hasta el dia: "+prestamo.getFFin().getDate()+"-"+prestamo.getFFin().getMonth()+"-"+prestamo.getFFin().getFullYear()+"</b></p>"+
                "<a class=\"btnDevolver\" onclick=\"devolverCopia("+prestamo.getCopia().getId()+")\">Devolver</a></div>";
            });
        }else{
            contenedorPrestamos.innerHTML = "<p>Este usuario no tiene prestamos actualmente</p>";
        }
        
    }

    multar(){
        this.lectorActual.multar();
        this.pintarMultaLectorActual();
    }

    alquilarCopia(idCopia){
        var copiaAlquilar = null;
        this.copias.forEach(copia => {
            if (copia.getId() == idCopia) {
                copiaAlquilar = copia;
                var prestamo = new Prestamo(copiaAlquilar,new Date(Date.now()),new Date(Date.now()+2592000000))
                this.lectorActual.prestar(prestamo);
            }
        });
        this.pintarCopias(document.getElementById("divMuestraCopias"));
        this.pintarPrestamosLectorActual();
    }
    devolverCopia(idCopia){
        this.lectorActual.devolver(idCopia);
        this.pintarPrestamosLectorActual();
        this.pintarCopias(document.getElementById("divMuestraCopias"));
    }
}