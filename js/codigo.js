"use strict";
//Creamos el objeto tienda para añadirle datos posteriormente
let clinica = new Clinica();

cargarDatos();

//limpiar toda la pantalla nada mas empezar
limpiaPantalla();

/*-------------------------EVENTSLISTENERS----------------------------------------------*/

document.getElementById("btnAceptarAltaPersona").addEventListener("click", altaUsuario);

document.getElementById("btnAceptarBajaPersona").addEventListener("click", bajaUsuario);

document.getElementById("btnBuscarFiltroDNI").addEventListener("click", listaClienteEspecifico);


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

//Mostrar lista Cliente
function listaClienteEspecifico() {
    let DNI = formularioFiltrarDNI.DNI.value.trim();
    let div = document.getElementById("listado3");
    let cliente = clinica.listaClienteEspecifico(DNI);
    if(div.children.length==1){
        if (typeof cliente === "object") {
            var insertar = document.getElementById("listado3"); //
            var tabla = document.createElement("table");
    
            //encabezado
    
            var tbThead = document.createElement("thead");
            let trEncabezado = document.createElement("tr");
    
            let thEncabezadoNombre = document.createElement("th");
            let thEncabezadoApellidos = document.createElement("th");
            let thEncabezadoDNI = document.createElement("th");
    
            var textoEncabezadoNombre = document.createTextNode("Nombre"); //Texto para Nombre
            var textoEncabezadoApellidos = document.createTextNode("Apellidos"); //Texto para Apellidos
            var textoEncabezadoDNI = document.createTextNode("DNI"); //Texto para DNI
    
            thEncabezadoNombre.appendChild(textoEncabezadoNombre);
            thEncabezadoApellidos.appendChild(textoEncabezadoApellidos);
            thEncabezadoDNI.appendChild(textoEncabezadoDNI);
    
            trEncabezado.appendChild(thEncabezadoNombre);
            trEncabezado.appendChild(thEncabezadoApellidos);
            trEncabezado.appendChild(thEncabezadoDNI);
    
            var tblBody = document.createElement("tbody");
            tbThead.appendChild(trEncabezado);
            tabla.appendChild(tbThead);
    
            let tr = document.createElement("tr");
    
            var celda1 = document.createElement("td"); //TD para Nombre
            var celda2 = document.createElement("td"); //TD para Apellidos
            var celda3 = document.createElement("td"); //TD para DNI
    
            var textoCeldaNombre = document.createTextNode(cliente.getNombre()); //Texto para Nombre
            var textoCeldaApellidos = document.createTextNode(cliente.getApellidos()); //Texto para Apellidos
            var textoCeldaDNI = document.createTextNode(cliente.getDNI()); //Texto para DNI
    
    
            celda1.appendChild(textoCeldaNombre);
            celda2.appendChild(textoCeldaApellidos);
            celda3.appendChild(textoCeldaDNI);
    
            tr.appendChild(celda1);
            tr.appendChild(celda2);
            tr.appendChild(celda3);
    
            tblBody.appendChild(tr);
    
            tabla.appendChild(tblBody);
            insertar.appendChild(tabla);
            tabla.setAttribute("border", "2");
            tabla.setAttribute("id", "tablaFiltroID");
            
            formularioFiltrarDNI.DNI.value="";
        } else {
            alert("Cliente no encontrado");
        }
    }
    
}

//Mostrar Listado Clientes
function listarClientes() {
    let aDatosClientes = clinica.listarClientes();
    var insertar = document.getElementById("listado1"); //

    if (aDatosClientes.length > 0) {

        var tabla = document.createElement("table");

        //encabezado

        var tbThead = document.createElement("thead");
        let trEncabezado = document.createElement("tr");

        let thEncabezadoNombre = document.createElement("th");
        let thEncabezadoApellidos = document.createElement("th");
        let thEncabezadoDNI = document.createElement("th");

        var textoEncabezadoNombre = document.createTextNode("Nombre"); //Texto para Nombre
        var textoEncabezadoApellidos = document.createTextNode("Apellidos"); //Texto para Apellidos
        var textoEncabezadoDNI = document.createTextNode("DNI"); //Texto para DNI

        thEncabezadoNombre.appendChild(textoEncabezadoNombre);
        thEncabezadoApellidos.appendChild(textoEncabezadoApellidos);
        thEncabezadoDNI.appendChild(textoEncabezadoDNI);

        trEncabezado.appendChild(thEncabezadoNombre);
        trEncabezado.appendChild(thEncabezadoApellidos);
        trEncabezado.appendChild(thEncabezadoDNI);

        var tblBody = document.createElement("tbody");
        tbThead.appendChild(trEncabezado);
        tabla.appendChild(tbThead);

        aDatosClientes.forEach(element => {

            let tr = document.createElement("tr");

            var celda1 = document.createElement("td"); //TD para Nombre
            var celda2 = document.createElement("td"); //TD para Apellidos
            var celda3 = document.createElement("td"); //TD para DNI

            var textoCeldaNombre = document.createTextNode(element.getNombre()); //Texto para Nombre
            var textoCeldaApellidos = document.createTextNode(element.getApellidos()); //Texto para Apellidos
            var textoCeldaDNI = document.createTextNode(element.getDNI()); //Texto para DNI


            celda1.appendChild(textoCeldaNombre);
            celda2.appendChild(textoCeldaApellidos);
            celda3.appendChild(textoCeldaDNI);

            tr.appendChild(celda1);
            tr.appendChild(celda2);
            tr.appendChild(celda3);

            tblBody.appendChild(tr);

        });

        tabla.appendChild(tblBody);
        insertar.appendChild(tabla);
        tabla.setAttribute("border", "2");

    } else {
        alert("No hay clientes");
    }
}


//Mostrar listado dietas

function listarDietas() {
    let arrayDietas = clinica.listarDietas();
    let insertar = document.getElementById('listado2');

    var tbThead = document.createElement("thead");
    let trEncabezado = document.createElement("tr");

    let thEncabezadoNombreDieta = document.createElement("th");
    let thEncabezadoDuracionDieta = document.createElement("th");
    let thEncabezadoTratamiento = document.createElement("th");
    let thEncabezadoIdDieta = document.createElement("th");

    var textoEncabezadoNombreDieta = document.createTextNode("Nombre Dieta");
    var textoEncabezadoDuracion = document.createTextNode("Duracion"); 
    var textoEncabezadoTratamiento = document.createTextNode("Tratamiento"); 
    var textoEncabezadoID= document.createTextNode("ID"); 

    thEncabezadoNombreDieta.appendChild(textoEncabezadoNombreDieta);
    thEncabezadoDuracionDieta.appendChild(textoEncabezadoDuracion);
    thEncabezadoTratamiento.appendChild(textoEncabezadoTratamiento);
    thEncabezadoIdDieta.appendChild(textoEncabezadoID);

    trEncabezado.appendChild(thEncabezadoNombreDieta);
    trEncabezado.appendChild(thEncabezadoDuracionDieta);
    trEncabezado.appendChild(thEncabezadoTratamiento);
    trEncabezado.appendChild(thEncabezadoIdDieta);
    
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");

    var tblBody = document.createElement("tbody");
    tbThead.appendChild(trEncabezado);
    tabla.appendChild(tbThead);

    if (arrayDietas.length > 0) {

        arrayDietas.forEach(element => {

            let tr = document.createElement("tr");

            var celda1 = document.createElement("td"); //TD para Nombre Dieta
            var celda2 = document.createElement("td"); //TD para Duracion Dieta
            var celda3 = document.createElement("td"); //TD para Tratamiento Dieta
            var celda4 = document.createElement("td"); //TD para ID Dieta

            var textoCeldaNombreDieta = document.createTextNode(element.getNombreDieta()); //Texto para Nombre Dieta
            var textoCeldaDuracion = document.createTextNode(element.getDuracionDieta()); //Texto para Duracion Dieta
            var textoCeldaTratamiento = document.createTextNode(element.getTratamientoDieta()); //Texto para Tratamiento Dieta
            var textoCeldaIdDieta = document.createTextNode(element.getTratamientoDieta()); //Texto para ID Dieta


            celda1.appendChild(textoCeldaNombreDieta);
            celda2.appendChild(textoCeldaDuracion);
            celda3.appendChild(textoCeldaTratamiento);
            celda4.appendChild(textoCeldaIdDieta);

            tr.appendChild(celda1);
            tr.appendChild(celda2);
            tr.appendChild(celda3);
            tr.appendChild(celda4);

            tblBody.appendChild(tr);

        });

        tabla.appendChild(tblBody);
        insertar.appendChild(tabla);
        tabla.setAttribute("border", "2");
    }
}

//Llamada a la Función de Ocultar Formularios.
ocultarFormularios();


//Mostrar los formularios


//Función para Ocultar los Formularios
function ocultarFormularios() {
}


function limpiarInputs(inputs) {

    for (let index = 0; index < inputs.length; index++) {
        if (inputs[index].type != "button") {
            inputs[index].value = "";
        }
    }
}




function altaUsuario() {



    let form = document.getElementById("formularioAlta");
    let inputs = form.getElementsByTagName("input");


    let sNombre = inputs[0].value;
    let sApellidos = inputs[1].value;
    let sDni = inputs[2].value;

    let res = validaExpRegUsuario();

    if (res == true) {
        alert("Los campos no están bien introducidos");

    } else {

        let oUsuario = new Cliente(sNombre,sApellidos,sDni);

        if (clinica.altaCliente(oUsuario)) {
            alert('Cliente añadido');
            limpiarInputs(inputs);
            ocultarFormularios();
        }else{
            alert('Ya existe un cliente con ese DNI');
        }



    }




}


function bajaUsuario() {



    let form = document.getElementById("formularioBaja");
    let inputs = form.getElementsByTagName("input");


    let sDni = inputs[0].value;

    let res = validarBajaUsuario();

    if (res == true) {
        alert("Los campos no están bien introducidos");

    } else {
        
        if (clinica.bajaCliente(sDni)) {
            alert("Cliente dado de baja correctamente");
            limpiarInputs(inputs);
            ocultarFormularios();
        }
        else{
            alert('No existe un cliente con ese DNI');
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
function cargarDatos() {


    var oXML = loadXMLDoc("clinica.xml");
    var oDietas = oXML.getElementsByTagName("dieta");
    var oClientes = oXML.getElementsByTagName("cliente");
    var oDietistas = oXML.getElementsByTagName("dietista");



    //Introduze las dietas
    for (var i = 0; i < oDietas.length; i++) {

        // console.log(oJuegos[i]);
        var nombre = oDietas[i].getElementsByTagName("nombre_dieta")[0].textContent;
        var duracion = oDietas[i].getElementsByTagName("duracion_dieta")[0].textContent;
        var tratamiento = oDietas[i].getElementsByTagName("tratamiento_dieta")[0].textContent;

        var dieta = new Dieta(nombre, duracion, tratamiento, i);

        clinica.altaDieta(dieta);

    }
    //Introduze los clientes

    for (var i = 1; i < oClientes.length; i++) {

        var nombre = oClientes[i].getElementsByTagName("nombre")[0].textContent;
        var apellidos = oClientes[i].getElementsByTagName("apellidos")[0].textContent;
        var dni = oClientes[i].getElementsByTagName("DNI")[0].textContent;
        console.log(nombre,apellidos,dni);
        var cliente = new Cliente(nombre, apellidos, dni);

        clinica.altaCliente(cliente);
    }

    //Introduzco las compras

    for (var i = 0; i < oDietistas.length; i++) {

        var nombre = oDietistas[i].getElementsByTagName("nombre")[0].textContent;
        var apellidos = oDietistas[i].getElementsByTagName("apellidos")[0].textContent;
        var dni = oDietistas[i].getElementsByTagName("dni")[0].textContent;

        var dietista = new Dietista(nombre, apellidos, dni);
        
        clinica.altaDietista(dietista);
    }

    alert("Se han cargado los datos correctamente.");
}
