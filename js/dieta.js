/*JOSE*/
'use strict';

class Dieta
{
    constructor(nombre_dieta, duracion_dieta,tratamiento_dieta,id_dieta)
    {
        this.nombre_dieta=nombre_dieta;
        this.duracion_dieta=duracion_dieta;
        this.tratamiento_dieta=tratamiento_dieta;
        this.id_dieta=id_dieta;
    }
    getNombreDieta()
    {
        return this.nombre_dieta;
    }
    setNombreDieta(nombre_dieta)
    {
        this.nombre_dieta=nombre_dieta;
    }
    getDuracionDieta()
    {
        return this.duracion_dieta;
    }
    setDuracionDieta(duracion_dieta)
    {
        this.duracion_dieta=duracion_dieta;
    }
    getTratamientoDieta()
    {
        return this.tratamiento_dieta;
    }
    setTratamientoDieta(tratamiento_dieta)
    {
        this.tratamiento_dieta=tratamiento_dieta;
    }
    getIdDieta()
    {
        return this.id_dieta;
    }
    setIdDieta(id_dieta)
    {
        this.id_dieta=id_dieta;
    }

    toHTMLRow() {

        let sCadena = "";
        sCadena += "<tr>";
        sCadena += "<td>";
        sCadena += this.getIdDieta();
        sCadena += "</td>";
        sCadena += "<td>";
        sCadena += this.getNombreDieta();
        sCadena += "</td>";
        sCadena += "<td>";
        sCadena += this.tratamiento_dieta();
        sCadena += "</td>";
        sCadena += "<td>";
        sCadena += this.duracion_dieta();
        sCadena += "</td>";
        sCadena += "</tr>";
        return sCadena;

    }
}
