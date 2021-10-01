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