"use strict";
class Cliente {
  // Constructor de atributos
  constructor(nombre, apellidos, DNI) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.DNI = DNI;
  }



  //Getters y Setters
  getNombre(){
    return this.nombre;
  }
  setNombre(nombre){
    this.nombre = nombre;
  }


  getApellidos(){
    return this.apellidos;
  }
  setApellidos(apellidos){
    this.apellidos = apellidos;
  }


  getDNI(){
    return this.DNI;
  }
  setDNI(DNI){
    this.DNI = DNI;
  }


  
  // Métodos
  toHTMLRow() {
    let sFila = "<tr>";
    sFila += "<td>" + this.getNombre() + "</td>";
    sFila += "<td>" + this.getApellidos() + "</td>";
    sFila += "<td>" + this.getDNI() + "</td>";
    sFila += "</tr>";

    return sFila;
  }
}
