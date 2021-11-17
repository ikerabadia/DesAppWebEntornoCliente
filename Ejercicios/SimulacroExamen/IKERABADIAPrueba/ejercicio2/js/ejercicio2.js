
function comprobarNombre(valor){
    if (valor == "") {
        document.getElementById("spnombre").innerHTML = "El NOMBRE no debe estar vacio";
    }else{
        if( !(/^[A-Z]{5,}$/.test(valor)) ) {
            document.getElementById("spnombre").innerHTML = "Debe tener minimo 5 letras, todas mayusculas";
        }else{
            document.getElementById("spnombre").innerHTML = "";
        }
    }
    
}
function comprobarApellidos(valor){
    if (valor == "") {
        document.getElementById("spapellidos").innerHTML = "Los APELLIDOS no deben estar vacios";
    }else{
        if( !(/^[A-Z]{5,}$/.test(valor)) ) {
            document.getElementById("spapellidos").innerHTML = "Debe tener minimo 5 letras, todas mayusculas";
        }else{
            document.getElementById("spapellidos").innerHTML = "";
        }
    }
    }
    
function comprobarDNI(valor) {

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    if (valor == "") {
        document.getElementById("spnif").innerHTML = "El DNI no debe estar vacio";
    }else{
        if( !(/^\d{8}[A-Z]$/.test(valor)) ) {
            document.getElementById("spnif").innerHTML = "DNI debe tener 8 numeros y una letra mayuscula";
        }else{
            if(valor.charAt(8) != letras[(valor.substring(0, 8))%23]) {
                document.getElementById("spnif").innerHTML = "DNI no valido";
            }else{
                document.getElementById("spnif").innerHTML = "";
            }
        }  
    }        
    
}
function comprobarUsuario(valor){
    if (valor == "") {
        document.getElementById("spusuario").innerHTML = "El USUARIO no debe estar vacio";
    }else{
        if (!(/^.{5,}$/.test(valor))) {
            document.getElementById("spusuario").innerHTML = "El usuario debe tener 5 caracteres o mas";
        }else{
            document.getElementById("spusuario").innerHTML = "";
        }
    }    
}
function comprobarClaves(){
    clave1 = document.getElementById("clave1").value;
    clave2 = document.getElementById("clave2").value;    
    
    if (clave1 == clave2) {
        if (!(/[@#%&]{1,}/.test(clave1))) {
            document.getElementById("spclave").innerHTML = "La clave debe tener alguno de estos simbolos @,#,%,&";
        }else{
            document.getElementById("spclave").innerHTML = "";
        }
    }else{
        document.getElementById("spclave").innerHTML = "Ambas claves deben ser iguales";        
    }

    if (clave1 == "") {
        document.getElementById("spclave").innerHTML = "La CONTRASEÑA no puede estar vacia";
    }
    if (clave2== "") {
        document.getElementById("sprep_clave").innerHTML = "La segunda CONTRASEÑA no puede estar vacia";
    }
    
}