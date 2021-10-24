const palabrasContadasBody = new Array();
const palabrasContadasBloqueParrafos = new Array();
const palabrasContadasParrafo = new Array();

function robot() {
    var parrafoLimpio = quitaPalabrasSinSentido("Thor (del nórdico antiguo Þórr, pronunciado /θɔr/) es el dios del trueno y fuerza en la mitología nórdica y germánica. Su papel es complejo ya que tenía influencia en áreas muy diferentes, tales como el clima, las cosechas, la protección, la consagración, la justicia, las lidias, los viajes y las batallas.");
    //var parrafoLimpio = quitarSimbolos("mi mama! me mima ??");
    echo("parada");
}

function quitarSimbolos(palabra) {
  var palabraLimpia = palabra.replaceAll(/[^a-zA-ZáéíóúÁÉÍÓÚθɔÞðöÆÖ]+/g,'');
  return palabraLimpia;
}

function quitaPalabrasSinSentido(texto) {
  var palabrasInutiles =
    "a ante bajo con contra de desde durante en entre hacia hasta mediante para por según sin sobre tras vía el la los las lo un una unos unas uno".split(" ");
  var textoSeparado = texto.split(" ");
  for (let i = 0; i < textoSeparado.length; i++) {
      textoSeparado[i]=quitarSimbolos(textoSeparado[i]);
      if (palabrasInutiles.includes(textoSeparado[i])) {
          textoSeparado[i] = ""
      }
      
  }

  for (let i = textoSeparado.length-1; i > -1; i--) {
      if (textoSeparado[i]=="") {
        textoSeparado.splice(i,1);
      }
      
  }

  return textoSeparado;
}
