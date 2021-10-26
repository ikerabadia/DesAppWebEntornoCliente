let palabrasContadasBody = new Array();
let palabrasContadasBloqueParrafos = new Array();
let palabrasContadasParrafo = new Array();
let tresPalabrasMayorAparicionPalabra = new Array();
let tresPalabrasMayorAparicionApariciones = new Array();
let ultimoParrafo;
let ultimoTitulo;
let palabrasUltimoTitulo;
let temaPagina;

/**
 * La forma de saber de que va la pagina es mediante un sistema
 * de puntaje en el que la palabra ganara:
 * 20 puntos por aparecer en un h1
 * 18 puntos por aparecer en un h2
 * 16 puntos por aparecer en un h3
 * 14 puntos por aparecer en un h4
 * 12 puntos por aparecer en un h5
 * 10 puntos por aparecer en un h6
 * Aparecer en un titulo es lo que mas puntaje va a otorgar a una palabra puesto que creo que una palabra que
 * aparece en un titulo va a tener siempre un grado de relevancia mayor que una que se repita varias veces en
 * un solo parrafo o una que aparezca en negrita aunque sean varias veces
 * 1 punto por aparecer en un p
 * Estas son las que menos puntaje suman puesto que es lo menos relevante que hay desde mi punto de vista
 * 2 puntos por aparecer en cursiva
 * 4 puntos por aparecer en negrita
 * despues de los parrafos, aparecer en negrita o cursiva es lo menos relevante, pero desde mi punto de vista
 * la negrita pretende ser mas relevante que la cursiva
 * 7 puntos por aparecer en un enlace
 * Me parece bastante relevante una palabra que aparece en un enlace por eso le he querido dar una puntuacion
 * pesada pero sin llegar a equivaler a un titulo
 * 200 puntos por estar en el title del html ya que me parece que claramente si una palabra aparece en el 
 * title, la pagina va a tratar sobre eso
 */
function robot() {
  temaPagina = getTemaPagina();
  var info = document.querySelectorAll("H1,H2,H3,H4,H5,H6,P,B,I,A");
  info.forEach((element) => {
    //Si el elemento es un titulo reinicio bloque
    if (
      element.tagName == "H1" ||
      element.tagName == "H2" ||
      element.tagName == "H3" ||
      element.tagName == "H4" ||
      element.tagName == "H5" ||
      element.tagName == "H6"
    ) {
      //Pinto los datos del ulimo bloque (si lo hubiese) antes de pasar al siguiente parrafo
      if (ultimoParrafo != undefined) {
        //Establezco tres variables en los arrays de apariciones para que sean los puestos de las palabras mas aparecidas
        tresPalabrasMayorAparicionPalabra[0] = "a";
        tresPalabrasMayorAparicionApariciones[0] = 0;
        tresPalabrasMayorAparicionPalabra[1] = "b";
        tresPalabrasMayorAparicionApariciones[1] = 0;
        tresPalabrasMayorAparicionPalabra[2] = "c";
        tresPalabrasMayorAparicionApariciones[2] = 0;

        for (var clave in palabrasContadasBloqueParrafos) {
          if (
            palabrasContadasBloqueParrafos[clave] >
            tresPalabrasMayorAparicionApariciones[0]
          ) {
            if (
              palabrasContadasBloqueParrafos[clave] >
              tresPalabrasMayorAparicionApariciones[1]
            ) {
              if (
                palabrasContadasBloqueParrafos[clave] >
                tresPalabrasMayorAparicionApariciones[2]
              ) {
                tresPalabrasMayorAparicionPalabra[0] =
                  tresPalabrasMayorAparicionPalabra[1];
                tresPalabrasMayorAparicionApariciones[0] =
                  tresPalabrasMayorAparicionApariciones[1];

                tresPalabrasMayorAparicionPalabra[1] =
                  tresPalabrasMayorAparicionPalabra[2];
                tresPalabrasMayorAparicionApariciones[1] =
                  tresPalabrasMayorAparicionApariciones[2];

                tresPalabrasMayorAparicionPalabra[2] = clave;
                tresPalabrasMayorAparicionApariciones[2] =
                  palabrasContadasBloqueParrafos[clave];
              } else {
                tresPalabrasMayorAparicionPalabra[0] =
                  tresPalabrasMayorAparicionPalabra[1];
                tresPalabrasMayorAparicionApariciones[0] =
                  tresPalabrasMayorAparicionApariciones[1];

                tresPalabrasMayorAparicionPalabra[1] = clave;
                tresPalabrasMayorAparicionApariciones[1] =
                  palabrasContadasBloqueParrafos[clave];
              }
            } else {
              tresPalabrasMayorAparicionPalabra[0] = clave;
              tresPalabrasMayorAparicionApariciones[0] =
                palabrasContadasBloqueParrafos[clave];
            }
          }
        }
        var datosBloque = "";
        datosBloque +=
          '<br><span style=" border: 1px solid black">Las tres palabras mas repetidas en el bloque son: ' +
          tresPalabrasMayorAparicionPalabra[0] +
          "(" +
          tresPalabrasMayorAparicionApariciones[0] +
          "), " +
          tresPalabrasMayorAparicionPalabra[1] +
          "(" +
          tresPalabrasMayorAparicionApariciones[1] +
          "), " +
          tresPalabrasMayorAparicionPalabra[2] +
          "(" +
          tresPalabrasMayorAparicionApariciones[2] +
          ')</span><br><span style=" border: 1px solid black">Palabras del titulo: ';

        //Pinto las palabras del ultimo titulo con las veces que aparecen si es que lo hacen
        if (ultimoTitulo != undefined) {
          palabrasUltimoTitulo = quitaPalabrasSinSentido(
            ultimoTitulo.innerHTML
          );
          palabrasUltimoTitulo.forEach((palabra) => {
            if (palabrasContadasBloqueParrafos[palabra] == undefined) {
              datosBloque += palabra + "(0) ";
            } else {
              datosBloque +=
                palabra + "(" + palabrasContadasBloqueParrafos[palabra] + ") ";
            }
          });
          datosBloque += "</span>";
          ultimoParrafo.innerHTML += datosBloque;
        }
      }
      ultimoTitulo = element;
      palabrasContadasBloqueParrafos = new Array();
      palabrasContadasParrafo = new Array();
    }
    //si el elemento es un parrafo cuento sus palabras
    if (element.tagName == "P") {
      ultimoParrafo = element;
      palabrasContadasParrafo = new Array();
      var textoParrafoLimpio = quitaPalabrasSinSentido(element.innerHTML);
      cuentaPalabrasParrafo(textoParrafoLimpio);

      //Establezco tres variables en los arrays de apariciones para que sean los puestos de las palabras mas aparecidas
      tresPalabrasMayorAparicionPalabra[0] = "a";
      tresPalabrasMayorAparicionApariciones[0] = 0;
      tresPalabrasMayorAparicionPalabra[1] = "b";
      tresPalabrasMayorAparicionApariciones[1] = 0;
      tresPalabrasMayorAparicionPalabra[2] = "c";
      tresPalabrasMayorAparicionApariciones[2] = 0;

      //Obtengo las tres palabras que mas aparecen, junto con el numero de apariciones
      for (var clave in palabrasContadasParrafo) {
        if (
          palabrasContadasParrafo[clave] >
          tresPalabrasMayorAparicionApariciones[0]
        ) {
          if (
            palabrasContadasParrafo[clave] >
            tresPalabrasMayorAparicionApariciones[1]
          ) {
            if (
              palabrasContadasParrafo[clave] >
              tresPalabrasMayorAparicionApariciones[2]
            ) {
              tresPalabrasMayorAparicionPalabra[0] =
                tresPalabrasMayorAparicionPalabra[1];
              tresPalabrasMayorAparicionApariciones[0] =
                tresPalabrasMayorAparicionApariciones[1];

              tresPalabrasMayorAparicionPalabra[1] =
                tresPalabrasMayorAparicionPalabra[2];
              tresPalabrasMayorAparicionApariciones[1] =
                tresPalabrasMayorAparicionApariciones[2];

              tresPalabrasMayorAparicionPalabra[2] = clave;
              tresPalabrasMayorAparicionApariciones[2] =
                palabrasContadasParrafo[clave];
            } else {
              tresPalabrasMayorAparicionPalabra[0] =
                tresPalabrasMayorAparicionPalabra[1];
              tresPalabrasMayorAparicionApariciones[0] =
                tresPalabrasMayorAparicionApariciones[1];

              tresPalabrasMayorAparicionPalabra[1] = clave;
              tresPalabrasMayorAparicionApariciones[1] =
                palabrasContadasParrafo[clave];
            }
          } else {
            tresPalabrasMayorAparicionPalabra[0] = clave;
            tresPalabrasMayorAparicionApariciones[0] =
              palabrasContadasParrafo[clave];
          }
        }
      }

      //Muestro los datos en el html
      element.innerHTML +=
        '<br><span style=" border: 1px solid black">Las tres palabras mas repetidas en el parrafo son:<br> - ' +
        tresPalabrasMayorAparicionPalabra[0] +
        "(" +
        tresPalabrasMayorAparicionApariciones[0] +
        ")" +
        getCuentaEstilos(element, tresPalabrasMayorAparicionPalabra[0], "B") +
        " " +
        getCuentaEstilos(element, tresPalabrasMayorAparicionPalabra[0], "I") +
        " " +
        getCuentaEstilos(element, tresPalabrasMayorAparicionPalabra[0], "A") +
        " Aparece en todos los parrafos de su bloque: " +
        aparicionPalabraTodosParrafosBloque(
          tresPalabrasMayorAparicionPalabra[0],
          ultimoTitulo
        ) +
        "<br> - " +
        tresPalabrasMayorAparicionPalabra[1] +
        "(" +
        tresPalabrasMayorAparicionApariciones[1] +
        ")" +
        getCuentaEstilos(element, tresPalabrasMayorAparicionPalabra[1], "B") +
        " " +
        getCuentaEstilos(element, tresPalabrasMayorAparicionPalabra[1], "I") +
        " " +
        getCuentaEstilos(element, tresPalabrasMayorAparicionPalabra[1], "A") +
        " Aparece en todos los parrafos de su bloque: " +
        aparicionPalabraTodosParrafosBloque(
          tresPalabrasMayorAparicionPalabra[1],
          ultimoTitulo
        ) +
        "<br> - " +
        tresPalabrasMayorAparicionPalabra[2] +
        "(" +
        tresPalabrasMayorAparicionApariciones[2] +
        ")" +
        getCuentaEstilos(element, tresPalabrasMayorAparicionPalabra[2], "B") +
        " " +
        getCuentaEstilos(element, tresPalabrasMayorAparicionPalabra[2], "I") +
        " " +
        getCuentaEstilos(element, tresPalabrasMayorAparicionPalabra[2], "A") +
        " Aparece en todos los parrafos de su bloque: " +
        aparicionPalabraTodosParrafosBloque(
          tresPalabrasMayorAparicionPalabra[2],
          ultimoTitulo
        ) +
        "<br>" +
        getInfoEnlaces(ultimoParrafo) +
        "</span>";
    }
  });
  //Pinto la informacion del ultimo parrafo
  tresPalabrasMayorAparicionPalabra[0] = "a";
  tresPalabrasMayorAparicionApariciones[0] = 0;
  tresPalabrasMayorAparicionPalabra[1] = "b";
  tresPalabrasMayorAparicionApariciones[1] = 0;
  tresPalabrasMayorAparicionPalabra[2] = "c";
  tresPalabrasMayorAparicionApariciones[2] = 0;

  for (var clave in palabrasContadasBloqueParrafos) {
    if (
      palabrasContadasBloqueParrafos[clave] >
      tresPalabrasMayorAparicionApariciones[0]
    ) {
      if (
        palabrasContadasBloqueParrafos[clave] >
        tresPalabrasMayorAparicionApariciones[1]
      ) {
        if (
          palabrasContadasBloqueParrafos[clave] >
          tresPalabrasMayorAparicionApariciones[2]
        ) {
          tresPalabrasMayorAparicionPalabra[0] =
            tresPalabrasMayorAparicionPalabra[1];
          tresPalabrasMayorAparicionApariciones[0] =
            tresPalabrasMayorAparicionApariciones[1];

          tresPalabrasMayorAparicionPalabra[1] =
            tresPalabrasMayorAparicionPalabra[2];
          tresPalabrasMayorAparicionApariciones[1] =
            tresPalabrasMayorAparicionApariciones[2];

          tresPalabrasMayorAparicionPalabra[2] = clave;
          tresPalabrasMayorAparicionApariciones[2] =
            palabrasContadasBloqueParrafos[clave];
        } else {
          tresPalabrasMayorAparicionPalabra[0] =
            tresPalabrasMayorAparicionPalabra[1];
          tresPalabrasMayorAparicionApariciones[0] =
            tresPalabrasMayorAparicionApariciones[1];

          tresPalabrasMayorAparicionPalabra[1] = clave;
          tresPalabrasMayorAparicionApariciones[1] =
            palabrasContadasBloqueParrafos[clave];
        }
      } else {
        tresPalabrasMayorAparicionPalabra[0] = clave;
        tresPalabrasMayorAparicionApariciones[0] =
          palabrasContadasBloqueParrafos[clave];
      }
    }
  }

  var datosBloque = "";
  datosBloque +=
    '<br><span style=" border: 1px solid black">Las tres palabras mas repetidas en el bloque son: <br>- ' +
    tresPalabrasMayorAparicionPalabra[0] +
    "(" +
    tresPalabrasMayorAparicionApariciones[0] +
    ")<br>- " +
    tresPalabrasMayorAparicionPalabra[1] +
    "(" +
    tresPalabrasMayorAparicionApariciones[1] +
    ")<br>- " +
    tresPalabrasMayorAparicionPalabra[2] +
    "(" +
    tresPalabrasMayorAparicionApariciones[2] +
    ')</span><br><span style=" border: 1px solid black">Palabras del titulo: ';

  //Pinto las palabras del ultimo titulo con las veces que aparecen si es que lo hacen
  if (ultimoTitulo != undefined) {
    palabrasUltimoTitulo = quitaPalabrasSinSentido(ultimoTitulo.innerHTML);
    palabrasUltimoTitulo.forEach((palabra) => {
      if (palabrasContadasBloqueParrafos[palabra] == undefined) {
        datosBloque += palabra + "(0) ";
      } else {
        datosBloque +=
          palabra + "(" + palabrasContadasBloqueParrafos[palabra] + ") ";
      }
    });
    datosBloque += "</span>";
    ultimoParrafo.innerHTML += datosBloque;
  }

  //PINTO LA INFORMACION DE TODO EL DOCUMENTO
  tresPalabrasMayorAparicionPalabra[0] = "a";
  tresPalabrasMayorAparicionApariciones[0] = 0;
  tresPalabrasMayorAparicionPalabra[1] = "b";
  tresPalabrasMayorAparicionApariciones[1] = 0;
  tresPalabrasMayorAparicionPalabra[2] = "c";
  tresPalabrasMayorAparicionApariciones[2] = 0;

  for (var clave in palabrasContadasBody) {
    if (
      palabrasContadasBody[clave] > tresPalabrasMayorAparicionApariciones[0]
    ) {
      if (
        palabrasContadasBody[clave] > tresPalabrasMayorAparicionApariciones[1]
      ) {
        if (
          palabrasContadasBody[clave] > tresPalabrasMayorAparicionApariciones[2]
        ) {
          tresPalabrasMayorAparicionPalabra[0] =
            tresPalabrasMayorAparicionPalabra[1];
          tresPalabrasMayorAparicionApariciones[0] =
            tresPalabrasMayorAparicionApariciones[1];

          tresPalabrasMayorAparicionPalabra[1] =
            tresPalabrasMayorAparicionPalabra[2];
          tresPalabrasMayorAparicionApariciones[1] =
            tresPalabrasMayorAparicionApariciones[2];

          tresPalabrasMayorAparicionPalabra[2] = clave;
          tresPalabrasMayorAparicionApariciones[2] =
            palabrasContadasBody[clave];
        } else {
          tresPalabrasMayorAparicionPalabra[0] =
            tresPalabrasMayorAparicionPalabra[1];
          tresPalabrasMayorAparicionApariciones[0] =
            tresPalabrasMayorAparicionApariciones[1];

          tresPalabrasMayorAparicionPalabra[1] = clave;
          tresPalabrasMayorAparicionApariciones[1] =
            palabrasContadasBody[clave];
        }
      } else {
        tresPalabrasMayorAparicionPalabra[0] = clave;
        tresPalabrasMayorAparicionApariciones[0] = palabrasContadasBody[clave];
      }
    }
  }

  document.body.insertAdjacentHTML(
    "afterend",
    "<h3>Palabras mas repetidas</h3><br><p>" +
      tresPalabrasMayorAparicionPalabra[0] +
      ":" +
      tresPalabrasMayorAparicionApariciones[0] +
      "<br>" +
      tresPalabrasMayorAparicionPalabra[1] +
      ":" +
      tresPalabrasMayorAparicionApariciones[1] +
      "<br>" +
      tresPalabrasMayorAparicionPalabra[2] +
      ":" +
      tresPalabrasMayorAparicionApariciones[2] +
      "</p>"+
      "<h3>Tema de la pagina<h3><br>"+
      temaPagina
  );

  //FIN DE LA LECTURA
}

function quitarSimbolos(palabra) {
  var palabraLimpia = palabra
    .toLowerCase()
    .replaceAll(/[^a-zA-ZáéíóúÁÉÍÓÚθɔÞðöÆÖ]+/g, "");
  return palabraLimpia;
}

function quitaPalabrasSinSentido(texto) {
  var palabrasInutiles =
    "and on each are as only its to of sup idciteref classreference href cite note hrefcitenote in other is has the with span reltag se son será vez al también junto donde llamado muchas fue a b c d e f g h i j k l m n o p q r s t u v w x y z ante bajo con contra de desde durante en entre hacia hasta mediante para por según sin sobre tras vía el él más la los las lo un una unos unas uno su como del es de muy que y ya tales tenía".split(
      " "
    );
  var textoSeparado = texto.split(/[ <>]+/);
  for (let i = 0; i < textoSeparado.length; i++) {
    textoSeparado[i] = quitarSimbolos(textoSeparado[i].toLowerCase());
    if (palabrasInutiles.includes(textoSeparado[i])) {
      textoSeparado[i] = "";
    }
  }

  for (let i = textoSeparado.length - 1; i > -1; i--) {
    if (textoSeparado[i] == "") {
      textoSeparado.splice(i, 1);
    }
  }
  return textoSeparado;
}

function cuentaPalabrasParrafo(arrayPalabras) {
  arrayPalabras.forEach((palabra) => {
    //Guardo la cuenta del parrafo
    if (palabrasContadasParrafo[palabra] == undefined) {
      palabrasContadasParrafo[palabra] = 1;
    } else {
      palabrasContadasParrafo[palabra]++;
    }
    //Guardo la cuenta del bloque
    if (palabrasContadasBloqueParrafos[palabra] == undefined) {
      palabrasContadasBloqueParrafos[palabra] = 1;
    } else {
      palabrasContadasBloqueParrafos[palabra]++;
    }
    //Guardo la cuenta del body
    if (palabrasContadasBody[palabra] == undefined) {
      palabrasContadasBody[palabra] = 1;
    } else {
      palabrasContadasBody[palabra]++;
    }
  });
}

function getCuentaEstilos(parrafo, palabra, tag) {
  var negritas = Array.from(parrafo.getElementsByTagName(tag));
  var palabrasNegrita = "";
  negritas.forEach((element) => {
    palabrasNegrita += " " + element.innerHTML;
  });
  palabrasNegritaLimpias = quitaPalabrasSinSentido(palabrasNegrita);
  var aparicionesPalabra = 0;
  palabrasNegritaLimpias.forEach((negrita) => {
    if (palabra == negrita) {
      aparicionesPalabra++;
    }
  });
  switch (tag) {
    case "B":
      return "Negrita(" + aparicionesPalabra + ") ";
      break;
    case "I":
      return "Cursiva(" + aparicionesPalabra + ") ";
      break;
    case "A":
      return "Enlaces(" + aparicionesPalabra + ") ";
      break;
    default:
      break;
  }
}

function aparicionPalabraTodosParrafosBloque(palabra, ultimoTitulo) {
  var ultimoElemento = ultimoTitulo.nextElementSibling;
  var palabrasParrafo = new Array();

  while (
    ultimoElemento.tagName != "H1" &&
    ultimoElemento.tagName != "H2" &&
    ultimoElemento.tagName != "H3" &&
    ultimoElemento.tagName != "H4" &&
    ultimoElemento.tagName != "H5" &&
    ultimoElemento.tagName != "H6"
  ) {
    if (ultimoElemento.tagName == "P") {
      palabrasParrafo = quitaPalabrasSinSentido(ultimoElemento.innerHTML);
      if (!palabrasParrafo.includes(palabra.toLowerCase())) {
        return "NO";
      }
    }
    ultimoElemento = ultimoElemento.nextElementSibling;
    if (ultimoElemento == null) {
      break;
    }
  }
  return "SI";
}

function getInfoEnlaces(ultimoParrafo) {
  var aux = "Enlaces <br>";
  var enlaces = Array.from(ultimoParrafo.getElementsByTagName("A"));
  enlaces.forEach((enlace) => {
    aux +=
      enlace.innerHTML +
      "-> Url: " +
      enlace.href +
      " Coincidencias entre URL y descripcion: " +
      getCoincidenciasEnlace(enlace);
  });
  return aux;
}

function getCoincidenciasEnlace(enlace) {
  var palabrasDescripcion = quitaPalabrasSinSentido(enlace.innerHTML);
  //var palabrasURL = enlace.href.split(/[ /-\.]+/);
  var aux = "";
  palabrasDescripcion.forEach((palabraDescripcion) => {
    if (enlace.href.toLowerCase().includes(palabraDescripcion)) {
      aux += " " + palabraDescripcion+"<br>";
    }
  });
  return aux;
}

/**
 * Este es el algoritmo de puntaje para saber de que va la pagina, la forma de saber esto es mediante un sistema
 * de puntaje en el que la palabra ganara:
 * 20 puntos por aparecer en un h1
 * 18 puntos por aparecer en un h2
 * 16 puntos por aparecer en un h3
 * 14 puntos por aparecer en un h4
 * 12 puntos por aparecer en un h5
 * 10 puntos por aparecer en un h6
 * Aparecer en un titulo es lo que mas puntaje va a otorgar a una palabra puesto que creo que una palabra que
 * aparece en un titulo va a tener siempre un grado de relevancia mayor que una que se repita varias veces en
 * un solo parrafo o una que aparezca en negrita aunque sean varias veces
 * 1 punto por aparecer en un p
 * Estas son las que menos puntaje suman puesto que es lo menos relevante que hay desde mi punto de vista
 * 2 puntos por aparecer en cursiva
 * 4 puntos por aparecer en negrita
 * despues de los parrafos, aparecer en negrita o cursiva es lo menos relevante, pero desde mi punto de vista
 * la negrita pretende ser mas relevante que la cursiva
 * 7 puntos por aparecer en un enlace
 * Me parece bastante relevante una palabra que aparece en un enlace por eso le he querido dar una puntuacion
 * pesada pero sin llegar a equivaler a un titulo
 */
function getTemaPagina() {
  var palabrasContadas = new Array();
  var palabrasElemento = new Array();
  var elementos = document.querySelectorAll("H1,H2,H3,H4,H5,H6,P,B,I,A");
  var aux = "</h1>Esta pagina va de: ";

  //Recorro los elementos y las palabras de cada elemento y voy asignando puntuaciones
  elementos.forEach((element) => {
    palabrasElemento = quitaPalabrasSinSentido(element.innerHTML);
    palabrasElemento.forEach((palabra) => {
      if (palabrasContadas[palabra] == undefined) {
        switch (element.tagName) {
          case "H1":
            palabrasContadas[palabra] = 20;
            break;
          case "H2":
            palabrasContadas[palabra] = 18;
            break;
          case "H3":
            palabrasContadas[palabra] = 16;
            break;
          case "H4":
            palabrasContadas[palabra] = 14;
            break;
          case "H5":
            palabrasContadas[palabra] = 12;
            break;
          case "H5":
            palabrasContadas[palabra] = 10;
            break;
          case "P":
            palabrasContadas[palabra] = 1;
            break;
          case "B":
            palabrasContadas[palabra] = 4;
            break;
          case "I":
            palabrasContadas[palabra] = 2;
            break;
          case "A":
            palabrasContadas[palabra] = 7;
            break;
          default:
            break;
        }
      } else {
        switch (element.tagName) {
          case "H1":
            palabrasContadas[palabra] += 20;
            break;
          case "H2":
            palabrasContadas[palabra] += 18;
            break;
          case "H3":
            palabrasContadas[palabra] += 16;
            break;
          case "H4":
            palabrasContadas[palabra] += 14;
            break;
          case "H5":
            palabrasContadas[palabra] += 12;
            break;
          case "H5":
            palabrasContadas[palabra] += 10;
            break;
          case "P":
            palabrasContadas[palabra] += 1;
            break;
          case "B":
            palabrasContadas[palabra] += 4;
            break;
          case "I":
            palabrasContadas[palabra] += 2;
            break;
          case "A":
            palabrasContadas[palabra] += 7;
            break;
          default:
            break;
        }
      }
    });
  });

  //Ahora voy a añadir puntuaciones segun las palabras del titulo
  var palabrasTitle = document.title.split(" ");
  palabrasTitle.forEach(palabraTitulo => {
    if (palabrasContadas[palabraTitulo] == undefined) {
      palabrasContadas[palabraTitulo] = 200;
    }else{
      palabrasContadas[palabraTitulo] += 200;
    }
  });
  //Y ahora extraigo las 3 con mas puntuacion, las formateo y las devuelvo
  var palabrasContadasOrdenadas = Object.entries(palabrasContadas);
  palabrasContadasOrdenadas.sort((a, b) => a[1] - b[1]);
  var contador = 0;
  aux+=palabrasContadasOrdenadas[palabrasContadasOrdenadas.length-1][0] + " " + palabrasContadasOrdenadas[palabrasContadasOrdenadas.length-2][0] + " " + palabrasContadasOrdenadas[palabrasContadasOrdenadas.length-3][0]; 
  return aux;
}
