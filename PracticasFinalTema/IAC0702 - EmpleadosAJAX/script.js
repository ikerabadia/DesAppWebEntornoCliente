var indice = 0;
var ordenColumnas = ["","","","","","","",""];
var departamentos;
var nuevoEmpleadoId;


function mostrarDatos() {
    var numFilas = document.getElementById("selectFilas").value;    
    if (numFilas == "") {
        document.getElementById("tabla").innerHTML = "";
        return;
    } else {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var json = this.responseText;
                resultados=eval(json);
                var tabla = document.createElement('table');
				tabla.setAttribute("border", 1);
                var cabecera = construirCabecera();
                tabla.id="tablaEmpleados";
                tabla.appendChild(cabecera);
                if (resultados.length == parseInt(document.getElementById("selectFilas").value)+1) {
                    document.getElementsByName("siguiente")[0].disabled = false;
                }else{
                    document.getElementsByName("siguiente")[0].disabled = true;
                }
                getDepIds();  
                setTimeout(() => {
                    for (let i = 0; i < resultados.length-1; i++) {
                        let fila = construirFila(resultados[i], resultados[i]["emp_no"]);
                        tabla.appendChild(fila);
                    }
                    document.getElementById("tabla").innerHTML = "";
                    document.getElementById("tabla").appendChild(tabla);
                }, 100);                
            }
        };
        xmlhttp.open("GET", "getEmpleados.php?q=" + (parseInt(numFilas)+1) + "&oculto=" + indice, true);        
        xmlhttp.send();
        if (indice == 0) {
            document.getElementsByName("anterior")[0].disabled = true;
        }
    }
}
function mostrarDatosOrdenados(columna) {
    var numFilas = document.getElementById("selectFilas").value;    
    if (numFilas == "") {
        document.getElementById("tabla").innerHTML = "";
        return;
    } else {
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var json = this.responseText;
                resultados=eval(json);
                var tabla = document.createElement('table');
				tabla.setAttribute("border", 1);
                var cabecera = construirCabecera();
                tabla.id="tablaEmpleados";
                tabla.appendChild(cabecera);
                if (resultados.length == parseInt(document.getElementById("selectFilas").value)+1) {
                    document.getElementsByName("siguiente")[0].disabled = false;
                }else{
                    document.getElementsByName("siguiente")[0].disabled = true;
                }
                getDepIds();
                setTimeout(() => {
                    for (let i = 0; i < resultados.length-1; i++) {
                        let fila = construirFila(resultados[i], resultados[i]["emp_no"]);
                        tabla.appendChild(fila);
                    }
                    document.getElementById("tabla").innerHTML = "";
                    document.getElementById("tabla").appendChild(tabla);
                }, 100);                
            }
        };
        xmlhttp.open("GET", "getEmpleadosOrdenados.php?q=" + (parseInt(numFilas)+1) + "&oculto=" + indice +"&columna="+columna+"&orden="+ordenColumnas[columna], true);        
        xmlhttp.send();
        if (indice == 0) {
            document.getElementsByName("anterior")[0].disabled = true;
        }
    }
}



function getDepIds() {
    
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var json = this.responseText;
                departamentos=eval(json);                
            }
        };
        xmlhttp.open("GET", "getDepIds.php", true);        
        xmlhttp.send();
    
}

function nuevoEmpleado() {
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = this.responseText;
            nuevoEmpleadoId=eval(json);                
        }
    };
    xmlhttp.open("GET", "nuevoEmpleado.php", true);        
    xmlhttp.send();
}

function actualizarFila(emp_no, elemento) {

    var campoOk = true;

    switch (elemento.className) {
        case "apellido":
            if(!/^[a-zA-Z]+$/.test(elemento.value)){
                campoOk=false;
            }
            break;
        case "oficio":
            if(!/^[a-zA-Z]+$/.test(elemento.value)){
                campoOk=false;
            }
            break;
        case "dir":
            if(!/^[0-9]+$/.test(elemento.value)){
                campoOk=false;
            }
            break;
        case "fecha_alt":            
            if(!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(elemento.value)){
                campoOk=false;
            }
            break;
        case "salario":
            if(!/^[0-9]+$/.test(elemento.value)){
                campoOk=false;
            }
            break;
        case "comision":
            if(!/^[0-9]+$/.test(elemento.value)){
                campoOk=false;
            }
            break;
    }

    if (campoOk) {
        elemento.style.background = "white";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var json = this.responseText;
                //nuevoEmpleadoId=eval(json);                
            }
        };
        xmlhttp.open("GET", "actualizarFila.php?emp_no="+emp_no+"&columna="+elemento.className+"&valor="+elemento.value, true);        
        xmlhttp.send();
    }else{
        elemento.style.background = "red";
    }

    
}

function siguiente(){
    var numFilas = document.getElementById("selectFilas").value; 
    indice+=parseInt(numFilas);
    document.getElementsByName("anterior")[0].disabled = false;
    if (ordenacion()) {
        mostrarDatosOrdenados(getColumnaOrden());
    }else{
        mostrarDatos();
    }
    
}
function anterior(){
    var numFilas = document.getElementById("selectFilas").value; 
    indice-=parseInt(numFilas);
    if (indice < 0) {
        indice = 0;
    }
    if (indice == 0) {
        document.getElementsByName("anterior")[0].disabled = true;
    }
    if (ordenacion()) {
        mostrarDatosOrdenados(getColumnaOrden());
    }else{
        mostrarDatos();
    }
    
}

function ordenacion() {
    if (ordenColumnas[0] != "" || ordenColumnas[1] != "" || ordenColumnas[2] != "" || ordenColumnas[3] != "" || ordenColumnas[4] != "" || ordenColumnas[5] != "" || ordenColumnas[6] != "" || ordenColumnas[7] != "") {
        return true;
    }else{
        return false;
    }
}
function getColumnaOrden() {
    for (let i = 0; i < ordenColumnas.length; i++) {
        if (ordenColumnas[i] != "") {
            return i;
        }        
    }    
}

function construirCabecera() {
    var cabecera = document.createElement('tr');

    var titulo = document.createElement('th');
    
    if (ordenColumnas[0] != "") {
        var texto = document.createTextNode("Núm. Empleado "+ordenColumnas[0]);
    }else{
        var texto = document.createTextNode("Núm. Empleado");
    }
    titulo.appendChild(texto);
    var funcion= function () {
        ordenar(0);
    };
    titulo.onclick = funcion;
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    if (ordenColumnas[1] != "") {
        var texto = document.createTextNode("Apellido "+ordenColumnas[1]);
    }else{
        var texto = document.createTextNode("Apellido");
    }
    var funcion= function () {
        ordenar(1);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    if (ordenColumnas[2] != "") {
        var texto = document.createTextNode("Oficio "+ordenColumnas[2]);
    }else{
        var texto = document.createTextNode("Oficio");
    }
    var funcion= function () {
        ordenar(2);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    if (ordenColumnas[3] != "") {
        var texto = document.createTextNode("Director "+ordenColumnas[3]);
    }else{
        var texto = document.createTextNode("Director");
    }
    var funcion= function () {
        ordenar(3);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    if (ordenColumnas[4] != "") {
        var texto = document.createTextNode("Fecha Alta "+ordenColumnas[4]);
    }else{
        var texto = document.createTextNode("Fecha Alta");
    }
    var funcion= function () {
        ordenar(4);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    if (ordenColumnas[5] != "") {
        var texto = document.createTextNode("Salario "+ordenColumnas[5]);
    }else{
        var texto = document.createTextNode("Salario");
    }
    var funcion= function () {
        ordenar(5);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    if (ordenColumnas[6] != "") {
        var texto = document.createTextNode("Comisión "+ordenColumnas[6]);
    }else{
        var texto = document.createTextNode("Comisión");
    }
    var funcion= function () {
        ordenar(6);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Departamento");
    if (ordenColumnas[7] != "") {
        var texto = document.createTextNode("Departamento "+ordenColumnas[7]);
    }else{
        var texto = document.createTextNode("Departamento");
    }
    var funcion= function () {
        ordenar(7);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    return cabecera;
}

function ordenar(columna) {
    limpiarArrayOrden(columna);
    if (ordenColumnas[columna] == "ASC") {
        ordenColumnas[columna] = "DESC";
    }else{
        ordenColumnas[columna] = "ASC";
    }
    mostrarDatosOrdenados(columna);
}

function limpiarArrayOrden(columna){
    for (let i = 0; i < ordenColumnas.length; i++) {
        if (columna != i) {
            ordenColumnas[i] = "";   
        }             
    }
}

function insertarFila() {
    nuevoEmpleado();
    setTimeout(() => {
        var tabla = document.getElementById("tablaEmpleados");
        /* var fila = "<tr>";
        fila+="<td><input class=\"emp_no\" type=\"number\" readonly=\"true\" value="+nuevoEmpleadoId[0]["emp_no"]+"></td>";
        fila+="<td><input class=\"apellido\" type=\"text\"></td>";
        fila+="<td><input class=\"oficio\" type=\"text\"></td>";
        fila+="<td><input class=\"dir\" type=\"number\"></td>";
        fila+="<td><input class=\"fecha_alt\" type=\"text\"></td>";
        fila+="<td><input class=\"salario\" type=\"number\"></td>";
        fila+="<td><input class=\"comision\" type=\"number\"></td>";
        fila+="<td><select class=\"dept_no\">";
        departamentos.forEach(id => {
            fila+="<option value=\""+id["dept_no"]+"\">"+id["dept_no"]+"</option>";
        });
        fila+="</select></td>";
        fila+="</tr>"; */
        
        
        tabla.appendChild(construirFila(nuevoEmpleadoId[0], nuevoEmpleadoId[0]["emp_no"])); 
    }, 100);    
}

function construirFila(datos, n) {
    linea = document.createElement('tr');

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "emp_no";
    campo.type = "number";
    campo.value = datos.emp_no;
    campo.setAttribute("readonly",true);
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "apellido";
    campo.type = "text";
    campo.value = datos.apellido;
    campo.onblur = function(){ actualizarFila(n, this) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "oficio";
    campo.type = "text";
    campo.value = datos.oficio;
    campo.onblur = function(){ actualizarFila(n, this) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "dir";
    campo.type = "number";
    campo.value = datos.dir;
    campo.onblur = function(){ actualizarFila(n, this) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "fecha_alt";
    campo.type = "text";
    campo.value = datos.fecha_alt;
    campo.onblur = function(){ actualizarFila(n, this) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "salario";
    campo.type = "number";
    campo.value = datos.salario;
    campo.onblur = function(){ actualizarFila(n, this) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "comision";
    campo.type = "number";
    campo.value = datos.comision;
    campo.onblur = function(){ actualizarFila(n, this) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('select');
    campo.className = "dept_no";
    var campoOptions = construyeDepOptions();
    /* campo.innerHTML = "<option value=10>10</option><option value=20>20</option><option value=30>30</option><option value=40>40</option>"; */
    /* campo.type = "number"; */
    
    campo.innerHTML = campoOptions;
    campo.value = datos.dept_no;
    campo.onblur = function(){ actualizarFila(n, this) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);
    return linea;
     

    
}



function construyeDepOptions() {
    var depOptions = "";
      
    departamentos.forEach(id => {
        depOptions+="<option value="+id["dept_no"]+">"+id["dept_no"]+"</option>";
    });
    return depOptions;
    
    
}