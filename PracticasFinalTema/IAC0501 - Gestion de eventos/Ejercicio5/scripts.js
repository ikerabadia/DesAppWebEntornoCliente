/*Crear un script que informe al usuario en que zona de la pantalla ha pulsado el ratón. 
Las zonas definidas son las siguientes: izquierda arriba, izquierda abajo, derecha arriba y 
derecha abajo. Para determinar el tamaño de la ventana del navegador, utilizar la función tamanoVentanaNavegador() proporcionada*/
function tamañoVentana(tamaño) {
    var coordenadaRatonX= tamaño.clientX;
    var coordenadaRatonY= tamaño.clientY;
    var tamañoVentanaX= window.innerWidth;
    var tamañoVentanaY= window.innerHeight;
    var div= document.getElementById("info");
    var hijos =div.children;
    for (let i = 0; i < hijos.length; i++) {
        div.removeChild(hijos[i]);
        
    }
    
    var izquierdaDerecha;
    var arribaAbajo;
    if(coordenadaRatonX<tamañoVentanaX/2){
        izquierdaDerecha="izquierda";
    }else{
        izquierdaDerecha="derecha";
    }
    if((coordenadaRatonY)<(tamañoVentanaY/2)){
        arribaAbajo="arriba";
    }else{
        arribaAbajo="abajo";
    }
    var  p= document.createElement("p");
    p.appendChild(document.createTextNode(izquierdaDerecha+"\n"+arribaAbajo));
    div.appendChild(p);
}
document.onclick = tamañoVentana;