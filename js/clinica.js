'use strict';
class Clinica {
    constructor(nombre_clinica) {
        this.nombre_clinica = nombre_clinica;
        this.dietistas = [];
        this.cliente = [];
        this.dietas = [];
    }
    

    listarClientes() //Lista todos los clientes
    {
        if (this.cliente.length > 0) 
            return this.cliente;
         else 
            return "no hay clientes"
    }

    listaClienteEspecifico(sDNI) //Se pasa un valor String (DNI del Cliente)
    {
        let clienteAEncontrar;
        this.cliente.forEach(element => {
            if(element.getDNI()==sDNI){
                clienteAEncontrar=element;
            }
        });
        
        return clienteAEncontrar;

    }
    listarDietistas() //Listar todos los dietistas
    {

        if (this.dietistas.length > 0) 
            return this.dietistas;
         else 
            return "no hay clientes"

    }
   
    listarDietas() //Listar todas las dietas
    {
        if (this.dietas.length > 0) 
            return this.dietas;
        else 
            return "no hay dietas"
    }
   
    altaCliente(oCliente) //Se pasa un objeto cliente
    {
        let oClienteExistente = null;

        oClienteExistente = this._buscarCliente(oCliente.DNI);

        if (oClienteExistente == null) {
            this.cliente.push(oCliente);
            return true;
        }
        else {
            return false;
        }
    }
    bajaCliente(sDni) //Se pasa un dni
    {
        let oClienteExistente = null;

        oClienteExistente = this._buscarCliente(sDni);

        if (oClienteExistente == null) {
            
            return false; // false si no encuentra el objeto
        }
        else {
            let posicion = this.posicionArrayCliente(oClienteExistente.DNI);
            this.cliente.splice(posicion, 1);
            return true;
        }

    }
    altaDietista(oDietista) //Se pasa un objeto dietista
    {

        let oDietistaExistente = null;

        oDietistaExistente = this._buscarDietista(oDietista.dni);

        if (oDietistaExistente == null) {
            this.dietistas.push(oDietista);
        }
        else {
            alert("Ya hay una persona con ese dni");
        }

    }
    bajaDietista(oDietista) //Se pasa un objeto dietista
    {

        let oDietistaExistente = null;

        oDietistaExistente = this._buscarDietista(oDietista.dni);

        if (oDietistaExistente == null) {
            return 0; // 0 si no encuentra el objeto
        }
        else {
            console.log(oDietistaExistente.dni);
            let posicion = this.posicionArrayDietista(oDietistaExistente.dni);
            this.dietistas.splice(posicion, 1);
            console.log(this.dietistas);
        }


    }
    altaDieta(oDieta) //Se pasa un objeto dieta
    {

        let oDietaExistente = null;

        oDietaExistente = this._buscarDieta(oDieta.id_dieta);

        if (oDietaExistente == null) {
            this.dietas.push(oDieta);
        }
        else {
            alert("Ya hay una persona con ese dni");
        }
    }
    bajaDieta(oDieta) //Se pasa un objeto dieta
    {
        let oDietaExistente = null;

        oDietaExistente = this._buscarDieta(oDieta.id_dieta);

        if (oDietaExistente == null) {
            return 0; // 0 si no encuentra el objeto
        }
        else {
            console.log(oDieta.id_dieta);
            let posicion = this.posicionArrayDieta(oDieta.id_dieta);
            this.dietas.splice(posicion, 1);
            console.log(this.dietas);
        }


    }
    _buscarCliente(sDni) {
        let oClienteExistente = null;
        oClienteExistente = this.cliente.find(oC => oC.DNI == sDni);
        return oClienteExistente;
    }

    _buscarDietista(sDni) {
        let oDietistaExistente = null;
        oDietistaExistente = this.dietistas.find(oC => oC.dni == sDni);
        return oDietistaExistente;
    }
    _buscarDieta(idDieta) {
        let oDietaExistente = null;
        oDietaExistente = this.dietas.find(oD => oD.id_dieta == idDieta);
        return oDietaExistente;
    }

    posicionArrayCliente(sDni) {
        for (let i = 0; i < this.cliente.length; i++) {
            if (this.cliente[i].DNI == sDni) {
                return i;
            }
        }

    }

    posicionArrayDietista(sDni) {
        for (let i = 0; i < this.dietistas.length; i++) {
            if (this.dietistas[i].dni == sDni) {
                return i;
            }
        }

    }

    posicionArrayDieta(idDieta) {
        for (let i = 0; i < this.dietas.length; i++) {
            if (this.dietas[i].id_dieta == idDieta) {
                return i;
                console.log(i);
            }
        }

    }

}
