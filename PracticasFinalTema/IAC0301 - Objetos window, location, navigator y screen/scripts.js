//Imprimir pagina
function imprimirPagina() {
    window.print();
}
//Comprobar si la ventana esta abierta o cerrada
var myWindow;
function openWin() {
  myWindow = window.open("", "", "width=400 ,height=200");
}

function closeWin() {
  if (myWindow) {
    myWindow.close();
  }
}

function checkWin() {
  msg = ""
  if (!myWindow) {
    msg = "was never opened";
  } else { 
    if (myWindow.closed) { 
      msg = "is closed";
    } else {
      msg = "is open";
    }
  
  }
  document.getElementById("msg").innerHTML = 
  "myWindow " + msg;
}

//Scrollear la pagina
function scrollWindow() {
    window.scrollBy(0, 10);
}

//Tamaño pantalla
function sizePantalla() {
    document.getElementById("width").innerHTML = 
    "Width: " + screen.width + "<br>";
    document.getElementById("height").innerHTML = 
    "Height: " + screen.height + "<br>";
}

//Hostname
function getHostname() {
    document.getElementById("hostname").innerHTML = 
    "Page hostname is: " + window.location.hostname;
}

//Numero paginas en historial
function pagesOnHistory() {
    document.getElementById("numberPages").innerHTML = history.length;
}

//Datos del navegador
function navigatorData() {
    document.getElementById("navigatorData").innerHTML = 
    "navigator.appCodeName is " + navigator.appCodeName;
    document.getElementById("navigatorData2").innerHTML =
    "navigator.product is " + navigator.product;
    document.getElementById("navigatorData3").innerHTML =
    "navigator.language is " + navigator.language;
}

//Sistema opertativo
function sistemaOperativo() {
    document.getElementById("sistemaOperativo").innerHTML = 
    "navigator.platform is " + navigator.platform;
}

//Cronometro
var c = 0;
function myCounter() {
  document.getElementById("demo").innerHTML = ++c;
}

//Reloj
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('reloj').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}