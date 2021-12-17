<?php
    header('Content-Type: application/json');
    
    $con = mysqli_connect('localhost:3307','root','','ejemplodept');
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }

    mysqli_set_charset($con, "utf8");

    $sql="INSERT INTO empleados VALUES ()";
    mysqli_query($con,$sql);
    $sql="SELECT * FROM empleados ORDER BY emp_no DESC LIMIT 1";
    $result = mysqli_query($con,$sql);

    $datos=[];
    while($row = mysqli_fetch_assoc($result)) {
        array_push($datos,$row);
    }

    echo json_encode($datos);
    mysqli_close($con);
?>