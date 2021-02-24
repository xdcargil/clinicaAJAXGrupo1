<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "clinicas";
$usuario   = "root";
$password  = "";

// Recojo los datos de entrada
if(isset($_REQUEST["anno"])){
    $año = $_REQUEST["anno"];
}




// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");
mysqli_query($conexion,"utf8");

$sql = "SELECT * FROM peliculas";
if(isset($_REQUEST["anno"])){
    $sql.=" WHERE peli_anno=$año";
}

$resultado = mysqli_query($conexion,$sql);
$res="";
$res="<table>";
while($fila=mysqli_fetch_assoc($resultado)){


$res.="<tr>";
$res.="<td>".$fila["peli_nombre"]."</td>";
$res.="<td>".$fila["peli_anno"]."</td>";
$res.="</tr>";

}
$res.="</table>";
if ($resultado){
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "Alta realizada"; 
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el proceso de alta: ".mysqli_error($conexion);
}

echo $res;

mysqli_close($conexion);
?>