/*11. Escribir un programa que lea los H1 (no tienen por qué estar en el mismo div ni en el mismo nivel) 
que hay en la página y muestre su contenido en un párrafo que genera cuando ha terminado de cargar la página.*/
window.onload = ()=>{
  var titulos = document.getElementsByTagName("h1");
  var cadena = "";
  Array.prototype.slice.call(titulos).forEach(element => {
    cadena +="<br>"+element.innerHTML;
  });
  var parrafo = document.createElement("p");
  parrafo.innerHTML = cadena;
  document.body.appendChild(parrafo);
}  