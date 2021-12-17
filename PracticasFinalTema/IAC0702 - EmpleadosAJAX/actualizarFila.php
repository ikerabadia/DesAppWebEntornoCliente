<?php
header('Content-Type: application/json');

$con = mysqli_connect('localhost:3307', 'root', '', 'ejemplodept');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_set_charset($con, "utf8");
$columna = $_GET["columna"];
$emp_no = $_GET["emp_no"];
$valor = $_GET["valor"];

$campoOk = true;

if (preg_match("/^[a-zA-Z]+$/", $valor)) {

    switch ($columna) {
        case "apellido":
            if (!(preg_match("/^[a-zA-Z]+$/", $valor))) {
                $campoOk = false;
            }
            break;
        case "oficio":
            if (!(preg_match("/^[a-zA-Z]+$/", $valor))) {
                $campoOk = false;
            }
            break;
        case "dir":
            if (!(preg_match("/^[0-9]+$/", $valor))) {
                $campoOk = false;
            }
            break;
        case "fecha_alt":
            if (!(preg_match("/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/", $valor))) {
                $campoOk = false;
            }
            break;
        case "salario":
            if (!(preg_match("/^[0-9]+$/", $valor))) {
                $campoOk = false;
            }
            break;
        case "comision":
            if (!(preg_match("/^[0-9]+$/", $valor))) {
                $campoOk = false;
            }
            break;
    }
}


if ($campoOk) {
    $sql = "UPDATE empleados SET " . $columna . "='" . $valor . "' WHERE emp_no=" . $emp_no;
    $result = mysqli_query($con, $sql);
    echo "update correcto";
} else {
    echo "update incorrecto";
}



echo $sql;

$datos = [];
/* while($row = mysqli_fetch_assoc($result)) {
        array_push($datos,$row);
    }  */

echo json_encode($datos);
mysqli_close($con);
