<?php
    header('Content-Type: application/json');
    $q = intval($_GET['q']);
    $indice = intval($_GET['oculto']);


    $con = mysqli_connect('localhost:3307','root','','ejemplodept');
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }

    mysqli_set_charset($con, "utf8");

    $columna = getNombreColumna(intval($_GET['columna']));
    $orden = $_GET['orden'];
    $ordenacion = "ORDER BY ".$columna." ".$orden;

    $sql="SELECT * FROM empleados $ordenacion LIMIT ".$indice.",".$q;
    /* $sql="SELECT * FROM empleados ORDER BY emp_no DESC LIMIT 2,3"; */
    /* echo intval($columna); */

    $result = mysqli_query($con,$sql);

    $datos=[];
    while($row = mysqli_fetch_assoc($result)) {
        array_push($datos,$row);
    }

    echo json_encode($datos);
    mysqli_close($con);

    function getNombreColumna($columna){
        switch ($columna) {
            case 0:
                return "emp_no";
            case 1:
                return "apellido";
            case 2:
                return "oficio";
            case 3:
                return "dir";
            case 4:
                return "fecha_alt";
            case 5:
                return "salario";
            case 6:
                return "comision";
            case 7:
                return "dept_no";
        }
    }
?>