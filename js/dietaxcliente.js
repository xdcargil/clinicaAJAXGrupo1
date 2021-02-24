/*Miguel*/
class Dietaxcliente {
    constructor(id, cliente, dieta, estado) {

        this.id = id;
        this.cliente = cliente;
        this.dieta = dieta;
        this.estado = estado;
    }

    //Id 
    getId() {
        return this.id;
    }
    setId(id) {
            this.id = id;
        }
        //Cliente
    getCliente() {
        return this.cliente;
    }
    setCliente(cliente) {
            this.cliente = cliente;
        }
        //Dieta
    getDieta() {
        return this.dieta;
    }
    setDieta(dieta) {
            this.dieta = dieta;
        }
        //Estado
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
            this.estado = estado;
        }

    toHTMLRow() {

        let sCadena = "";
        sCadena += "<tr>";
        sCadena += "<td>";
        sCadena += this.getId();
        sCadena += "</td>";
        sCadena += "<td>";
        sCadena += this.getCliente();
        sCadena += "</td>";
        sCadena += "<td>";
        sCadena += this.getDieta();
        sCadena += "</td>";
        sCadena += "<td>";
        sCadena += this.getPrecioo();
        sCadena += "</td>";
        sCadena += "<td>";
        sCadena += this.getEstado();
        sCadena += "</td>";
        sCadena += "</tr>";
        return sCadena;

    }

}
