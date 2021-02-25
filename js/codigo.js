"use strict";



rellenarLocalStorage();

//limpiar toda la pantalla nada mas empezar
limpiaPantalla();

/*-------------------------EVENTSLISTENERS----------------------------------------------*/


document.getElementById("btnAceptarAltaPersona").addEventListener("click",altaUsuario);
document.getElementById("btnAceptarBajaPersona").addEventListener("click",bajaUsuario);
document.getElementById("btnAceptarAltaDietista").addEventListener("click",altaDietista);

var botonBusquedaConFiltro = document.getElementById('btnBuscarFiltroDNI');
botonBusquedaConFiltro.addEventListener('click', muestraClientesConFiltro); 


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

var btonAltaDietista = document.getElementById('altaDietista');
botonBajaCliente.addEventListener("click", mostrarFormularioAltaDietista);


//funcion para limpiar pantalla

function limpiaPantalla(){
    
    let listado1 = document.getElementById('listado1');
    let listado2 = document.getElementById('listado2');
    let listado3 = document.getElementById('listado3');
    let formularioAlta = document.getElementById('formularioAlta');
    let formularioBaja = document.getElementById('formularioBaja');
    let formularioAltaDietista = document.getElementById('formularioAltaDietista');

    listado1.style.display = "none";
    listado2.style.display = "none";
    listado3.style.display = "none";
    formularioAlta.style.display = "none";
    formularioBaja.style.display = "none";
    formularioAltaDietista.style.display = "none";
}

//funciones para mostrar formularios

function mostrarFormularioAltaCliente(){

    let listado1 = document.getElementById('listado1');
    let listado2 = document.getElementById('listado2');
    let listado3 = document.getElementById('listado3');
    let formularioBaja = document.getElementById('formularioBaja');
    let formularioAltaDietista = document.getElementById('formularioAltaDietista');
    
    listado1.style.display = "none";
    listado2.style.display = "none";
    listado3.style.display = "none";
    formularioBaja.style.display = "none";
    formularioAltaDietista.style.display = "none";

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
    let formularioAltaDietista = document.getElementById('formularioAltaDietista');
    
    listado1.style.display = "none";
    listado2.style.display = "none";
    listado3.style.display = "none";
    formularioAlta.style.display = "none";
    formularioAltaDietista.style.display = "none";

    let formularioBaja = document.getElementById('formularioBaja');

    if (formularioBaja.style.display == "block") {
        formularioBaja.style.display = "none";
    }
    else {
        formularioBaja.style.display = "block";
    }
}

function listarClientes(){
    $('#listado1').load("php/getDatosClientesHTML.php");
}

//funciones mostrar listado
function mostrarListado1() {

    let listado2 = document.getElementById('listado2');
    let listado3 = document.getElementById('listado3');
    let formularioAlta = document.getElementById('formularioAlta');
    let formularioBaja = document.getElementById('formularioBaja');
    let formularioAltaDietista = document.getElementById('formularioAltaDietista');
    
    listado2.style.display = "none";
    listado3.style.display = "none";
    formularioAlta.style.display = "none";
    formularioBaja.style.display = "none";
    formularioAltaDietista.style.display = "none";

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
    let formularioAltaDietista = document.getElementById('formularioAltaDietista');
    
    listado1.style.display = "none";
    listado3.style.display = "none";
    formularioAlta.style.display = "none";
    formularioBaja.style.display = "none";
    formularioAltaDietista.style.display = "none";

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
    let formularioAltaDietista = document.getElementById('formularioAltaDietista');
    
    listado1.style.display = "none";
    listado2.style.display = "none";
    formularioAlta.style.display = "none";
    formularioBaja.style.display = "none";
    formularioAltaDietista.style.display = "none";

    let listado3 = document.getElementById('listado3');

    formularioFiltrarDNI.reset();

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


function mostrarFormularioAltaDietista(){

    let listado1 = document.getElementById('listado1');
    let listado2 = document.getElementById('listado2');
    let listado3 = document.getElementById('listado3');
    let formularioBaja = document.getElementById('formularioBaja');

    listado1.style.display = "none";
    listado2.style.display = "none";
    listado3.style.display = "none";
    formularioBaja.style.display = "none";

    let formularioAlta = document.getElementById('formularioAltaDietista');

    if (formularioAlta.style.display == "block") {
        formularioAlta.style.display = "none";
    }
    else {
        formularioAlta.style.display = "block";
    }

}


//LOCAL STORAGE


function rellenarLocalStorage() {
  
    if (localStorage["clientes"] != undefined) {

    } else {
      $.get("php/getClientes.php", null, procesoRespuestaGetLugares, 'html');
    }
}

function procesoRespuestaGetLugares(sHTML) {
    localStorage["clientes"] = sHTML;

}

function listarDietas(oEvento)
{
 
    let oE = oEvento || window.event;
    $.get("PHP/getDietaXML.php", null, respuestaXMLJqueary, 'xml');

}




function respuestaXMLJqueary(data, status, oXHR){
    
    console.log(data);
    var oOptions = data.querySelectorAll("dieta");
    console.log(oOptions);
    var table = "<table>";

    for (let i = 0; i < oOptions.length; i++) {
      table +=
        "<tr><td>" +
        oOptions[i].querySelector("nombre").textContent +
        "</td><td>" +
        oOptions[i].querySelector("tratamiento").textContent +
        "</td></tr>";
    }
    table += "</table>";

    $("#listado2").html(table);
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

function altaDietista(oEVento) {

    if (validarAltaDietista()) {
        // Proceso

             let dni = formularioAltaDietista.dni.value.trim();
            let nombre = formularioAltaDietista.inputNombre.value.trim();
            let apellido = formularioAltaDietista.inputApellidos.value.trim();
    
        $.get("php/altaDietistaJson.php?dni="+dni+"&nombre="+nombre+"&apellido="+apellido,respuestaJson, 'json');

    }

}

function respuestaJson(data) {

    if (oDatos.error) {
        alert(oDatos.mensaje);
    } else {
        alert(oDatos.mensaje);
        formularioAlta.reset();
    }

  }

  function validarAltaDietista() {

    var bValido = true;
    var sError = "";

    if (formularioAltaDietista.dni.value.trim().length == 0 ||
    formularioAltaDietista.inputNombre.value.trim().length == 0 ||
    formularioAltaDietista.inputApellidos.value.trim().length == 0) {
        sError += "Campos no rellenos";
        bValido = false;
    }

    if (bValido == false) {
        alert(sError);
    }
    return bValido;
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





























































//METODO CON FILTROS

function objetoXHR() {
    if (window.XMLHttpRequest) {
      // El navegador implementa la interfaz XHR de forma nativa
      return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      var versionesIE = new Array(
        "MsXML2.XMLHTTP.5.0",
        "MsXML2.XMLHTTP.4.0",
        "MsXML2.XMLHTTP.3.0",
        "MsXML2.XMLHTTP",
        "Microsoft.XMLHTTP"
      );
      for (var i = 0; i < versionesIE.length; i++) {
        try {
          return new ActiveXObject(versionesIE[i]);
        } catch (errorControlado) {} //Capturamos el error,
      }
    }
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
  }


  function muestraClientesConFiltro() {

    let dni = ""+document.getElementById('buscarPorDNI').value.trim();

    //console.log(dni);
    let oAJAX = objetoXHR();
  
    oAJAX.addEventListener("readystatechange", respuestatHtml);
  
    oAJAX.open("GET", "PHP/getClientesHTMLConFiltros.php?dni="+dni, true);
  //puede que de fallo
    oAJAX.send(null);
}
  


function respuestatHtml(data) {
    console.log(data);
  
    if (this.readyState == 4 && this.status == 200) {
        if(this.response=="vacio"){
            document.getElementById('resultado').innerHTML="No existe ninguna persona con ese DNI";
        }
        else{
            document.getElementById("resultado").innerHTML = this.response;
        }
    }
  }
