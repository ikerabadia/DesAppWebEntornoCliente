/*8. Escribir un programa JavaScript para mostrar una imagen al azar (haciendo clic en un botón) 
de entre tres que estén guardadas en la carpeta img del proyecto o por URL.*/
function pintarImagenRandom() {
  var imagenes = ["https://2.bp.blogspot.com/-puX-NxE1pw0/TxMKuZUvkhI/AAAAAAAAuY4/ZTHV8a3X8jQ/s1600/la-belleza-de-la-naturaleza-by-wolfy--7.jpg","https://i.pinimg.com/originals/d3/4a/97/d34a971df8de1e42f0bc94a773924c46.jpg","https://th.bing.com/th/id/OIP.1KoPY8XPeXE5mElviL6oOwHaD5?pid=ImgDet&rs=1"];
  document.getElementById("img").setAttribute("src", imagenes[getRandomArbitrary(0,3)]);
}

//Max no incluido
function getRandomArbitrary(min, max) { 
  var numero = Math.random() * (max - min) + min;
  return parseInt(numero);
}