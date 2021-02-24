"use strict";

let expRegNombreCliente = /^[\s\S]{1,15}$/;
let expRegApellidoCliente = /^[\s\S]{1,15}$/;
let sDni = /^\d{8}[a-zA-Z]$/;


function validaExpRegUsuario() {

    let sNombre = document.getElementById("inputNombre").value;
    let sApellido = document.getElementById("inputApellidos").value;
    let sDni2 = document.getElementById("dni").value;
    let bError = false;

    if (!expRegNombreCliente.test(sNombre)) {
        document.getElementById("inputNombre").classList.add("error");
        document.getElementById("inputNombre").focus();
        bError = true;
    } else {
        document.getElementById("inputNombre").classList.remove("error");
        }

        if (!expRegApellidoCliente.test(sApellido)) {
            document.getElementById("inputApellidos").classList.add("error");
            document.getElementById("inputApellidos").focus();
            bError = true;
        } else {
            document.getElementById("inputApellidos").classList.remove("error");
            }

            if (!sDni.test(sDni2)) {
                document.getElementById("dni").classList.add("error");
                document.getElementById("dni").focus();
                bError = true;
            } else {
                document.getElementById("dni").classList.remove("error");
                }


    return bError;


}


let sDni4 = /^\d{8}[a-zA-Z]$/;
function validarBajaUsuario() {

    let sDni3 = document.getElementById("quitar").value;
    let bError = false;


            if (!sDni4.test(sDni3)) {
                document.getElementById("quitar").classList.add("error");
                document.getElementById("quitar").focus();
                bError = true;
            } else {
                document.getElementById("quitar").classList.remove("error");
                }


    return bError;


}

