<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "clinica";
$usuario   = "root";
$password  = "";

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");

// Consulta SQL para obtener los datos de los centros.
$sql = "select * from cliente";
$resultados = mysqli_query($conexion,$sql) or die(mysqli_error($conexion));

$datos = "";

while ($fila = mysqli_fetch_array($resultados)) {
    $datos .= '<option value="'.$fila["nombre"].'">'.$fila["dni"].'</option>';
}

// función de PHP que convierte a formato JSON el array.
echo $datos; 

mysqli_close($conexion);
?>