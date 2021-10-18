//Desde este metodo voy a 
window.onload = function () {

    //Array de meses para convertir numeros de meses en nombres de meses
    nombreMeses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
    //Lo mismo que los meses pero con los dias de la semana
    diasSemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    //Array que almacenara las citas
    citas = [];
    nombresCitas = [];

    //Datos de la fecha actual
    fecha = new Date();
    var diaSemana = fecha.getDay(); //dia de la semana
    diaHoy = fecha.getDate(); //dia del mes
    mesHoy = fecha.getMonth(); //mes
    añoHoy = fecha.getFullYear(); //año

    //Establezco la fecha actual en la parte de abajo del calendario
    pieCalendario = document.getElementById("fechaActual");
    pieCalendario.innerHTML += diasSemana[diaSemana] + ", " + diaHoy + " de " + nombreMeses[mesHoy] + " de " + añoHoy + "<div id=\"horaMostrada\"></div>";

    //Inicio el pintado continuo de la hora
    pintarHora()

    //Establezco como globales los datos del mes y el año que se estan mostrando
    mesMostrado = fecha.getMonth();
    añoMostrado = fecha.getFullYear();

    //Establezco los valores del buscador con los valores actuales de mes y año definidos anteriormente
    document.getElementById("buscadorAño").value = añoMostrado;

    cabecera();
    cabeceraTabla();
    pintarDias();
}

//Esta funcion pintara todos los elementos de la cabecera ()
function cabecera() {
    //Establezco el mes y el año de la cabecera como los actuales en forma de datos iniciales,
    //Estos datos cambiaran dinamicamente segun el mes mostrado 
    var fecha = new Date();
    
    titulo = document.getElementById("titulos"); //Obtengo la cabecera
    titulo.innerHTML = nombreMeses[mesMostrado] + " de " + añoMostrado;

    //Calculo los meses anterior y posterior
    var mesAnterior = mesMostrado -1;
    if (mesAnterior<0) {
        mesAnterior = 11;
    }
    var mesPosterior = mesMostrado +1;
    if (mesPosterior>11) {
        mesPosterior = 0;
    }
    //Ahora pinto los botones para moverse entre meses anterior y posterior
    botonMesAnterior = document.getElementById("anterior"); //mes anterior
    botonMesPosterior = document.getElementById("posterior"); //mes posterior
    botonMesAnterior.innerHTML = nombreMeses[mesAnterior];
    botonMesPosterior.innerHTML = nombreMeses[mesPosterior];
}

//Funcion para pintar los dias de la semana en la primera fila de la tabla
function cabeceraTabla() {
    var cabeceraTabla = document.getElementById("fila0");
    for (i = 0; i < 7; i++) {
        var celda = cabeceraTabla.getElementsByTagName("th")[i];
        celda.innerHTML = diasSemana[i];
      }
}

//Funcion para pintar los dias en las demas filas de la tabla
function pintarDias() {
    primerDiaMes = new Date(añoMostrado, mesMostrado, "1"); //Obtengo el primer dia del mes
    var primerDiaSemana = primerDiaMes.getDay(); //Obtengo que dia de la semana es el primer dia del mes
    primerDiaSemana--; //lo adapto al calendario español (empezar por lunes)
    if (primerDiaSemana == -1) {
        primerDiaSemana = 6;
    }
    var primerDiaMesNumero = primerDiaMes.getDate();//Obtengo el numero del primer del mes que anteriomente era una fecha

    //Ahora que tengo la referencia del primer dia del mes, voy a obtener el dia que se mostrara en la primera celda
    var primeraCelda = primerDiaMesNumero-primerDiaSemana; 
    var diaPrimeraCelda = primerDiaMes.setDate(primeraCelda);
    var diaMes = new Date();
    diaMes.setTime(diaPrimeraCelda);

    //Ahora voy a ir recorriendo las celdas y pintando el correspondiente dia
    for (let i = 1; i < 7; i++) { //i empieza en uno para saltarse la primera fila que es la cabecera
        
        fila = document.getElementById("fila" + i);//Obtengo la fila correspondiente
        for (let j = 0; j < 7; j++) {
            
            var diaActual = diaMes.getDate();
            var mesActual = diaMes.getMonth();
            var añoActual = diaMes.getFullYear();
            var celda = fila.getElementsByTagName("td")[j];
            if (mesActual == mesMostrado) { //Solo voy a meter el metodo de datosCita en los dias del mes mostrado
                celda.innerHTML = "<a onClick=\"datosCita("+ diaActual +")\">"+diaActual+"</a>";
            }else{
                celda.innerHTML = "<p>"+diaActual+"</p>"; //Pinto el numero del dia en la celda
            }            

            //Recuperar estado inicial al cambiar de mes:
            celda.style.backgroundColor = "#9bffc5";
            celda.style.color = "#492736";
            //los domingos los pinto de rojo
            if (j == 6) {
                celda.style.color = "#f11445";
            }
            //Los dias ajenos al mes que se muestra los pinto de gris
            if (mesActual != mesMostrado) {
                celda.style.color = "#a0babc";
            }
            //destaco la fecha actual
            if (mesActual == mesHoy && diaActual == diaHoy && añoActual == añoHoy) {
                celda.style.backgroundColor = "#f0b19e";
                celda.innerHTML = "<a title='Fecha Actual' onClick=\"datosCita("+ diaActual +")\">" + diaActual + "</a>";
            }
            //Pinto las citas del dia dentro de la celda
            citas.forEach(element => {
                var fechaCitaSeparada = element.split(" ");
                var aux = "";
                if (fechaCitaSeparada[0] == añoMostrado && fechaCitaSeparada[1] == (mesActual+1) &&  fechaCitaSeparada[2] == diaActual) {
                    
                    aux += "<br> - "+fechaCitaSeparada[3]+":"+fechaCitaSeparada[4]+":"+fechaCitaSeparada[5] + " -> ";
                    aux += nombresCitas[citas.indexOf(element)];
                    celda.innerHTML+=aux;
                }
                //document.getElementById("citasMostradas").innerHTML = aux;
            });
            //Actualizo el diaActual al siguiente dia para la siguiente vuelta de bucle
            diaActual = diaActual+1;
            diaMes.setDate(diaActual);
            
        }
        
    }
}

//Funcion para el boton que carga el mes anterior
function mesAntes() {
    var nuevoMes = new Date();
    primerDiaMes--;                         //Le quito un dia al primer dia del mes para llegar a un dia del mes anteriory obtener el mes anterior
    nuevoMes.setTime(primerDiaMes);         //Convierto ese dia en una fecha
    mesMostrado = nuevoMes.getMonth();      //Cambio la variable global del mes mostrado al mes anterior
    añoMostrado = nuevoMes.getFullYear();   //Lo mismo que el mes pero con el año
    //Y ahora llamo a los metodos que pintan de nuevo el calendario
    cabecera();
    pintarDias();                           
}

//Funcion para el boton que carga el mes siguiente
function mesDespues() {
    var nuevoMes = new Date();
    var tiempoMilis = primerDiaMes.getTime(); //tiempo en milisegundos del primer dia del mes actual
    tiempoMilis = tiempoMilis + 45 * 24 * 60 * 60 * 1000; //le añado 45 días para estar seguro de que paso al siguiente mes
    nuevoMes.setTime(tiempoMilis); //convierto la fecha del mes actual + 45 dias de milisegundos a fecha
    mesMostrado = nuevoMes.getMonth();
    añoMostrado = nuevoMes.getFullYear();
    cabecera();
    pintarDias(); 
}

//Funcion para volver a la fecha actual
function actualizar() {
    mesMostrado = fecha.getMonth(); //obtengo el mes actual
    añoMostrado = fecha.getFullYear(); //obtengo el año actual
    cabecera(); 
    pintarDias(); 
  }

//Funcion para buscar una fecha concreta y mostrarla en pantalla
function buscaFecha() {
    //Obtengo los objetos del html
    var añoBuscar = document.getElementById("buscadorAño").value;
    var listaMeses = document.buscar.buscaMes;
    var opciones = listaMeses.options;
    var indexMesLista = listaMeses.selectedIndex;
    var mesBuscar = opciones[indexMesLista].value;

    //Compruebo que el año esta bien introducido
    if (isNaN(añoBuscar) || añoBuscar < 1) {
        alert("El año no es válido:\n debe ser un número mayor que 0");
    } else{
        //Esta bien asi que establezco globales y pinto
        nuevaFecha = new Date();
        nuevaFecha.setMonth(mesBuscar);
        nuevaFecha.setFullYear(añoBuscar);
        añoMostrado = nuevaFecha.getFullYear();
        mesMostrado = nuevaFecha.getMonth();
        cabecera();
        pintarDias();
    }
}

function pintarHora() {
    setInterval(

        function(){
            var fecha = new Date();
            var cita = fecha.getFullYear() + " " + (fecha.getMonth()+1) + " " + fecha.getDate() + " " + fecha.getHours()+" "+fecha.getMinutes()+" "+fecha.getSeconds();
            if(citas.includes(cita)){
                suenaAlarma(cita);
            }
            document.getElementById("horaMostrada").innerHTML=fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
        },1000);
}

function datosCita(dia) {
    //Establezco los datos del formulario de cita con los del dia clicado
    document.getElementById("año").value = añoMostrado;
    document.getElementById("mes").value = mesMostrado+1;
    document.getElementById("dia").value = dia;

    //pinto el titulo de la zona de mostrado de fechas
    document.getElementById("tituloMostradorCitas").innerHTML = "Citas el " + dia + "/" + (mesMostrado+1) + "/" + añoMostrado;

    //pinto las citas del dia seleccionado
    pintarCitas(dia);


}
//Guardo la cita en un array y su nombre en otro, estan relacionados por la misma posicion en el array
function guardarCita(){
    var cita = document.getElementById("año").value + " " + 
    document.getElementById("mes").value + " " +
    document.getElementById("dia").value + " " + 
    document.getElementById("hora").value + " " +
    document.getElementById("minuto").value + " " +
    document.getElementById("segundo").value;    
    citas.push(cita);
    var nombreCita = document.getElementById("nombreCita").value;
    nombresCitas.push(nombreCita);
    datosCita(document.getElementById("dia").value);
    limpiarCamposCita();
}

function limpiarCamposCita() {
    document.getElementById("nombreCita").value = "";
    document.getElementById("año").value = "";
    document.getElementById("mes").value = "";
    document.getElementById("dia").value = "";
    document.getElementById("hora").value = "";
    document.getElementById("minuto").value = "";
    document.getElementById("segundo").value = "";
}

function suenaAlarma(cita) {
    //Enciendo el sonido de la alarma
    let etiquetaAudio = document.createElement("audio");
    etiquetaAudio.setAttribute("src", "alarma.mp3");
    etiquetaAudio.play();
    var contadorAlarma = 0;
    document.getElementById("avisoCita").innerHTML="<h2>"+ nombresCitas[citas.indexOf(cita)] +"</h2>";
    var alarma = setInterval(
        function(){
            document.getElementById("avisoCita").style.background = randomColor();
            contadorAlarma += 100;
            if (contadorAlarma == 15000) {
                clearInterval(alarma);
                etiquetaAudio.pause();
                document.getElementById("avisoCita").style.background = "white";
                document.getElementById("avisoCita").innerHTML = "";
                alert("Tienes una cita:- "+nombresCitas[citas.indexOf(cita)]);
            }
        },100);
}
function randomColor() {
    var colores = ["red","blue","green","yellow","orange","purple","black","white"];
    return colores[getRandomInt(0,8)];
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function pintarCitas(dia) {
    var aux = "";
    citas.forEach(element => {
        var fechaCitaSeparada = element.split(" ");
        
        if (fechaCitaSeparada[0] == añoMostrado && fechaCitaSeparada[1] == (mesMostrado+1) &&  fechaCitaSeparada[2] == dia) {
            
            aux += "<br> - "+fechaCitaSeparada[3]+":"+fechaCitaSeparada[4]+":"+fechaCitaSeparada[5] + " -> ";
            aux += nombresCitas[citas.indexOf(element)];
        }        
    });
    document.getElementById("citasMostradas").innerHTML = aux;
    pintarDias();
}