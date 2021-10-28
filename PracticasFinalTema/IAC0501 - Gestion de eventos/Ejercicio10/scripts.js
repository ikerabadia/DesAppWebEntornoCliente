/*Crea dos formularios. El primero pedirá al usuario su nombre, apellido, teléfono, correo electrónico y 
dni. El segundo pedirá su dirección: dirección, código postal, localidad y provincia. Comprueba mediante 
expresiones regulares y lanzando un alert que:*/
window.onload = function () {
  document.getElementById("apellido").focus();
}

function ValidaCampos(formulario) {
  Array.from(formulario.getElementsByClassName("requerido")).forEach(element => {
    if (element.value.length > 0) {
      element.style.background == "green";
    }else{
      alert("Campos requeridos sin completar");
    }
  });

  Array.from(formulario.getElementsByClassName("texto")).forEach(element => {
    if (/^[a-zA-Z]{1,}$/.test(element.value)) {
      element.style.background == "green";
    }else{
      alert("Campos de texto incorrecto");
    }
  });

  Array.from(formulario.getElementsByClassName("telefono")).forEach(element => {
    if (/^[0-9]{9}$/.test(element.value)) {
      element.style.background == "green";
    }else{
      alert("Campo de telefono incorrecto");
    }
  });

  Array.from(formulario.getElementsByClassName("email")).forEach(element => {
    if (/^[a-zA-Z]{1,}@[a-zA-Z]{1,}\.[a-zA-Z]{1,}$/.test(element.value)) {
      element.style.background == "green";
    }else{
      alert("Campos de email incorrecto");
    }
  });

  Array.from(formulario.getElementsByClassName("dni")).forEach(element => {
    if (/^[0-9]{8}[a-zA-Z]{1}$/.test(element.value)) {
      element.style.background == "green";
    }else{
      alert("Campos de dni incorrecto");
    }
  });
}
