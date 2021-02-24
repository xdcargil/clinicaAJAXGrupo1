/*JESUS*/
class Dietista{

    constructor(nombre, apellidos, dni){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.pacientes = [];
    }

    getNombre(){
        return this.nombre;
    }

    setNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }

    getApellidos(){
        return this.apellidos;
    }

    setApellidos(nuevosApellidos){
        this.apellidos = nuevosApellidos;
    }

    getDNI(){
        return this.dni;
    }

    setNombre(nuevoDNI){
        this.dni = nuevoDNI;
    }

    toHTMLRow(){
        let resultado="";
        resultado+="<tr>";
        resultado+="<td>";
        resultado+=this.getDNI();
        resultado+="</td>";
        resultado+="<td>";
        resultado+=this.getNombre();
        resultado+="</td>";
        resultado+="<td>";
        resultado+=this.getApellidos();
        resultado+="</td>";
        resultado+="</tr>";
    }

}
