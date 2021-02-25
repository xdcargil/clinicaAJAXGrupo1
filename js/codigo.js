"use strict";




//limpiar toda la pantalla nada mas empezar
limpiaPantalla();

/*-------------------------EVENTSLISTENERS----------------------------------------------*/


document.getElementById("btnAceptarAltaPersona").addEventListener("click",altaUsuario);
document.getElementById("btnAceptarBajaPersona").addEventListener("click",bajaUsuario);


var botonListado1 = document.getElementById('botonListado1');
botonListado1.addEventListener("click", mostrarListado1);


var botonListado2 = document.getElementById('botonListado2');
botonListado2.addEventListener("click", mostrarListado2);

var botonListado3 = document.getElementById('botonListado3');
botonListado3.addEventListener("click", mostrarListado3);

var botonAltaCliente = document.getElementById('altaCliente');
botonAltaCliente.addEventListener("click", mostrarFormularioAltaCliente);

var botonBajaCliente = document.getElementById('bajaCliente');
botonBajaCliente.addEventListener("click", mostrarFormularioBajaCliente);




//funcion para limpiar pantalla

function limpiaPantalla(){
    
    let listado1 = document.getElementById('listado1');
    let listado2 = document.getElementById('listado2');
    let listado3 = document.getElementById('listado3');
    let formularioAlta = document.getElementById('formularioAlta');
    let formularioBaja = document.getElementById('formularioBaja');
    
    listado1.style.display = "none";
    listado2.style.display = "none";
    listado3.style.display = "none";
    formularioAlta.style.display = "none";
    formularioBaja.style.display = "none";

}

//funciones para mostrar formularios

function mostrarFormularioAltaCliente(){

    let listado1 = document.getElementById('listado1');
    let listado2 = document.getElementById('listado2');
    let listado3 = document.getElementById('listado3');
    let formularioBaja = document.getElementById('formularioBaja');
    
    listado1.style.display = "none";
    listado2.style.display = "none";
    listado3.style.display = "none";
    formularioBaja.style.display = "none";

    let formularioAlta = document.getElementById('formularioAlta');

    if (formularioAlta.style.display == "block") {
        formularioAlta.style.display = "none";
    }
    else {
        formularioAlta.style.display = "block";
    }

}

function mostrarFormularioBajaCliente(){
    let listado1 = document.getElementById('listado1');
    let listado2 = document.getElementById('listado2');
    let listado3 = document.getElementById('listado3');
    let formularioAlta = document.getElementById('formularioAlta');
    
    listado1.style.display = "none";
    listado2.style.display = "none";
    listado3.style.display = "none";
    formularioAlta.style.display = "none";

    let formularioBaja = document.getElementById('formularioBaja');

    if (formularioBaja.style.display == "block") {
        formularioBaja.style.display = "none";
    }
    else {
        formularioBaja.style.display = "block";
    }
}


//funciones mostrar listado
function mostrarListado1() {

    let listado2 = document.getElementById('listado2');
    let listado3 = document.getElementById('listado3');
    let formularioAlta = document.getElementById('formularioAlta');
    let formularioBaja = document.getElementById('formularioBaja');
    
    listado2.style.display = "none";
    listado3.style.display = "none";
    formularioAlta.style.display = "none";
    formularioBaja.style.display = "none";

    let listado1 = document.getElementById('listado1');


    if (listado1.style.display == "block") {
        listado1.style.display = "none";
    }
    else {
        listado1.style.display = "block";
        listado1.removeChild(listado1.lastChild);
        listarClientes();
    }
}

function mostrarListado2() {

    let listado1 = document.getElementById('listado1');
    let listado3 = document.getElementById('listado3');
    let formularioAlta = document.getElementById('formularioAlta');
    let formularioBaja = document.getElementById('formularioBaja');
    
    listado1.style.display = "none";
    listado3.style.display = "none";
    formularioAlta.style.display = "none";
    formularioBaja.style.display = "none";

    let listado2 = document.getElementById('listado2');
    console.log(listado2.firstChild)
    if (listado2.style.display == "block") {
        listado2.style.display = "none";
    }
    else {
        listado2.style.display = "block";
        listado2.removeChild(listado2.lastChild);
        listarDietas();
    }
}


function mostrarListado3() {

    let listado1 = document.getElementById('listado1');
    let listado2 = document.getElementById('listado2');
    let formularioAlta = document.getElementById('formularioAlta');
    let formularioBaja = document.getElementById('formularioBaja');
    
    listado1.style.display = "none";
    listado2.style.display = "none";
    formularioAlta.style.display = "none";
    formularioBaja.style.display = "none";

    let listado3 = document.getElementById('listado3');


    if (listado3.style.display == "block") {
        listado3.style.display = "none";
    }
    else {
        listado3.style.display = "block";
        let tabla =document.getElementById("tablaFiltroID");
        if(listado3.children.length==2){
            tabla.remove();
        }
        

    }
}































//------------------------------AÑADIDO DE DATOS CON XML----------------------------------------------//

function loadXMLDoc(filename) {
    if (window.XMLHttpRequest) {
        var xhttp = new XMLHttpRequest();
    }
    else // code for IE5 and IE6
    {
        var xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", filename, false);

    xhttp.send();

    return xhttp.responseXML;
}

function bajaUsuario() {
    if (validarBajaPersona()) {



        $.ajax({
            type: "post",
            url: "php/bajaUsuario.php",
            data: "dni="+ formularioBaja.quitar.value.trim(),
            dataType: "json",
            success: procesoRespuestaBajaPersona
        });
    }
}

function procesoRespuestaBajaPersona(oDatos, sStatus, oXHR) {
    console.log(oDatos.mensaje);
    if (oDatos.error) {
        alert(oDatos.mensaje);
    } else {
        alert(oDatos.mensaje);
        formularioBaja.reset();
    }
}

function altaUsuario() {
    if (validarAltaPersona()) {
        // Proceso

        var oPersona = {
            DNI: formularioAlta.dni.value.trim(),
            nombre: formularioAlta.inputNombre.value.trim(),
            apellidos:  formularioAlta.inputApellidos.value.trim()
        };

        var sPersona = JSON.stringify(oPersona);
        var sParametros = "datos=" + sPersona;

        $.post("php/altaUsuario.php", sParametros, procesoRespuestaAltaPersona, 'json');
    }

}

function procesoRespuestaAltaPersona(oDatos, sStatus, oXHR) {

    if (oDatos.error) {
        alert(oDatos.mensaje);
    } else {
        alert(oDatos.mensaje);
        formularioAlta.reset();
    }
}



function validarBajaPersona() {

    var bValido = true;
    var sError = "";

    if (formularioBaja.quitar.value.trim().length == 0) {
        sError += "Campos no rellenos";
        bValido = false;
    }

    if (bValido == false) {
        alert(sError);
    }
    return bValido;
}


function validarAltaPersona() {

    var bValido = true;
    var sError = "";

    if (formularioAlta.dni.value.trim().length == 0 ||
    formularioAlta.inputNombre.value.trim().length == 0 ||
    formularioAlta.inputApellidos.value.trim().length == 0) {
        sError += "Campos no rellenos";
        bValido = false;
    }

    if (bValido == false) {
        alert(sError);
    }
    return bValido;
}