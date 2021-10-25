let palabrasContadasBody = new Array();
let palabrasContadasBloqueParrafos = new Array();
let palabrasContadasParrafo = new Array();
let tresPalabrasMayorAparicionPalabra = new Array();
let tresPalabrasMayorAparicionApariciones = new Array();
let ultimoParrafo;
let ultimoTitulo;
let palabrasUltimoTitulo;

function robot() {
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
        '<br><span style=" border: 1px solid black">Las tres palabras mas repetidas en el parrafo son: ' +
        tresPalabrasMayorAparicionPalabra[0] +
        "(" +
        tresPalabrasMayorAparicionApariciones[0] +
        ")" +
        getCuentaEstilos(element, tresPalabrasMayorAparicionPalabra[0],"B") +" "+
        getCuentaEstilos(element, tresPalabrasMayorAparicionPalabra[0],"I") +" "+
        getCuentaEstilos(element, tresPalabrasMayorAparicionPalabra[0],"A") +
        ", " +
        tresPalabrasMayorAparicionPalabra[1] +
        "(" +
        tresPalabrasMayorAparicionApariciones[1] +
        ")" +
        getCuentaEstilos(element, tresPalabrasMayorAparicionPalabra[1],"B") +" "+
        getCuentaEstilos(element, tresPalabrasMayorAparicionPalabra[1],"I") +" "+
        getCuentaEstilos(element, tresPalabrasMayorAparicionPalabra[1],"A") +
        ", " +
        tresPalabrasMayorAparicionPalabra[2] +
        "(" +
        tresPalabrasMayorAparicionApariciones[2] +
        ")" +
        getCuentaEstilos(element, tresPalabrasMayorAparicionPalabra[2],"B") +" "+
        getCuentaEstilos(element, tresPalabrasMayorAparicionPalabra[2],"I") +" "+
        getCuentaEstilos(element, tresPalabrasMayorAparicionPalabra[2],"A") +
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
      "</p>"
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
    "se son será vez al también junto donde llamado muchas fue a b c d e f g h i j k l m n o p q r s t u v w x y z ante bajo con contra de desde durante en entre hacia hasta mediante para por según sin sobre tras vía el él más la los las lo un una unos unas uno su como del es de muy que y ya tales tenía".split(
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

