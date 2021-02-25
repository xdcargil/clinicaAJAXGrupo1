<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "clinica";
$usuario   = "root";
$password  = "";






// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");
mysqli_query($conexion,"utf8");

$sql = "SELECT * FROM cliente";


$resultado = mysqli_query($conexion,$sql);
$res="";
$res="<table id='tablaFiltroID'>";
$res.="<thead>";
$res.="<tr>";
$res.="<th>dni</th>";
$res.="<th>nombre</th>";
$res.="<th>apellidos</th>";
$res.="</tr>";
$res.="</thead>";
$res.="<tbody>";

while($fila=mysqli_fetch_assoc($resultado)){


$res.="<tr>";
$res.="<td>".$fila["dni"]."</td>";
$res.="<td>".$fila["nombre"]."</td>";
$res.="<td>".$fila["apellidos"]."</td>";

$res.="</tr>";

}
$res.="</tbody>";

$res.="</table>";


echo $res;

mysqli_close($conexion);
?>