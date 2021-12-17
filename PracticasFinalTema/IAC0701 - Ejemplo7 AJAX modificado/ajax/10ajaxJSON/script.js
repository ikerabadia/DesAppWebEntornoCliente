function mostrarDatos() {
    var numFilas = document.getElementById("selectFilas").value;
    var indice = 0;
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
                for (let i = 0; i < resultados.length; i++) {
                    let fila = construirFila(resultados[i], i);
                    tabla.appendChild(fila);
                }
                document.getElementById("tabla").innerHTML = "";
                document.getElementById("tabla").appendChild(tabla);
            }
        };
        xmlhttp.open("GET", "getEmpleados.php?q=" + numFilas + "&oculto=" + indice, true);
        xmlhttp.send();
    }
}

function construirCabecera() {
    var cabecera = document.createElement('tr');

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Núm. Empleado");
    titulo.appendChild(texto);
    var funcion= function () {
        ordenar(0);
    };
    titulo.onclick = funcion;
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Apellido");
    var funcion= function () {
        ordenar(1);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Oficio");
    var funcion= function () {
        ordenar(2);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Director");
    var funcion= function () {
        ordenar(3);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Fecha Alta");
    var funcion= function () {
        ordenar(4);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Salario");
    var funcion= function () {
        ordenar(5);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Comisión");
    var funcion= function () {
        ordenar(6);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    var titulo = document.createElement('th');
    var texto = document.createTextNode("Departamento");
    var funcion= function () {
        ordenar(7);
    };
    titulo.onclick = funcion;
    titulo.appendChild(texto);
    cabecera.appendChild(titulo);

    return cabecera;
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
    campo.onblur = function(){ actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "oficio";
    campo.type = "text";
    campo.value = datos.oficio;
    campo.onblur = function(){ actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "dir";
    campo.type = "number";
    campo.value = datos.dir;
    campo.onblur = function(){ actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "fecha_alt";
    campo.type = "text";
    campo.value = datos.fecha_alt;
    campo.onblur = function(){ actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "salario";
    campo.type = "number";
    campo.value = datos.salario;
    campo.onblur = function(){ actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "comision";
    campo.type = "number";
    campo.value = datos.comision;
    campo.onblur = function(){ actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    var titulo = document.createElement('td');
    var campo = document.createElement('input');
    campo.className = "dept_no";
    campo.type = "number";
    campo.value = datos.dept_no;
    campo.onblur = function(){ actualizarFila(n) };
    titulo.appendChild(campo);
    linea.appendChild(titulo);

    return linea;
}