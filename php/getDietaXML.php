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
$sql = "SELECT * FROM dieta";

$resultados = mysqli_query($conexion,$sql);

$XML ='<?xml version="1.0" encoding="UTF-8"?>';
$XML .='<datos>';

while ($fila = mysqli_fetch_array($resultados)) {
    $XML .='<dieta>';
        $XML .='<nombre>'.$fila["nombre"].'</nombre>';
        $XML .='<tratamiento>'.$fila["tratamiento"].'</tratamiento>';
        $XML .='<duracion>'.$fila["duracion"].'</duracion>';
    $XML .='</dieta>';
}

$XML .='</datos>';

// Cabecera de respuesta indicando que el contenido de la respuesta es XML
header("Content-Type: text/xml");
// Para que el navegador no haga cache de los datos devueltos por la página PHP.
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

if ($resultados){
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "Alta realizada"; 
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el proceso de alta: ".mysqli_error($conexion);
}

echo $XML;

mysqli_close($conexion);
?>