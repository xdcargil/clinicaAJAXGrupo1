<?php

// Configuración BASE DE DATOS MYSQL
$servidor  = "localhost";
$basedatos = "clinica";
$usuario   = "root";
$password  = "";

// Recojo los datos de entrada
if(isset($_REQUEST["dni"])){
    $dni = $_REQUEST["dni"];
}
// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password,$basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion,"utf8");
mysqli_query($conexion,"utf8");

$sql = "SELECT * FROM cliente";
if(isset($_REQUEST["dni"])){
    $sql.=" WHERE dni='$dni'";
}

$resultado = mysqli_query($conexion,$sql);
$res="";
if(mysqli_num_rows($resultado)==0){
    $res="vacio";
}
else{
        $res.="<table>";
        $res.="<tr>";
        $res.="<td>";
        $res.="DNI";
        $res.="</td>";
        $res.="<td>";
        $res.="Nombre";
        $res.="</td>";
        $res.="<td>";
        $res.="Apellidos";
        $res.="</td>";
        $res.="</tr>";
        while($fila=mysqli_fetch_assoc($resultado)){


        $res.="<tr>";
        $res.="<td>".$fila["dni"]."</td>";
        $res.="<td>".$fila["nombre"]."</td>";
        $res.="<td>".$fila["apellidos"]."</td>";
        $res.="</tr>";

        }
        $res.="</table>";
}
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