<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "clinica";
$usuario   = "root";
$password  = "";



$dni = $_REQUEST["dni"];
$contador = 0;


// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion, "utf8");
mysqli_query($conexion, "utf8");

$sql = "DELETE FROM cliente WHERE dni='$dni'";

$resultado = mysqli_query($conexion, $sql);


if ($resultado) {
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "baja realizada"; 
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el proceso de baja: ".mysqli_error($conexion);
}

echo json_encode($respuesta);

mysqli_close($conexion);
