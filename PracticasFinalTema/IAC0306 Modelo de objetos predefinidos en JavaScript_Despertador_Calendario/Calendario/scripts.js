//Desde este metodo voy a 
window.onload = function () {

    //Array de meses para convertir numeros de meses en nombres de meses
    nombreMeses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
    //Lo mismo que los meses pero con los dias de la semana
    diasSemana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];

    //Datos de la fecha actual
    fecha = new Date();
    var diaSemana = fecha.getDay(); //dia de la semana
    diaHoy = fecha.getDate(); //dia del mes
    mesHoy = fecha.getMonth(); //mes
    añoHoy = fecha.getFullYear(); //año

    //Establezco la fecha actual en la parte de abajo del calendario
    pieCalendario = document.getElementById("fechaActual");
    pieCalendario.innerHTML += diasSemana[diaSemana] + ", " + diaHoy + " de " + nombreMeses[mesHoy] + " de " + añoHoy;

    //Establezco como globales los datos del mes y el año que se estan mostrando
    mesMostrado = fecha.getMonth();
    añoMostrado = fecha.getFullYear();

    //Pinto la cabecera
    cabecera();
    //Pinto los dias de la semana en la tabla
    cabeceraTabla();
    //Por ultimo pinto los dias del mes en los demas espacios de la tabla
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
            celda.innerHTML = diaActual; //Pinto el numero del dia en la celda

            //Recuperar estado inicial al cambiar de mes:
            celda.style.backgroundColor = "#9bf5ff";
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
                celda.innerHTML = "<cite title='Fecha Actual'>" + diaActual + "</cite>";
            }
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
    var tiempounix = primerDiaMes.getTime(); //tiempo en milisegundos del primer dia del mes actual
    tiempounix = tiempounix + 45 * 24 * 60 * 60 * 1000; //le añado 45 días para estar seguro de que paso al siguiente mes
    nuevoMes.setTime(tiempounix); //convierto la fecha del mes actual + 45 dias de milisegundos a fecha
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
    
}