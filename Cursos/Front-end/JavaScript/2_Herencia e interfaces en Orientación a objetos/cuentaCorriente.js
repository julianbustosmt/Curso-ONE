import { cliente } from "./cliente.js";

export class cuentaCorriente {
    #cliente;
    numero;
    #saldo; // # Convierte el atributo en privado
    //saldo; 
    agencia;

    set setCliente(valor){
        if(valor instanceof cliente){
        this.#cliente = valor
        }
    }

    get getCliente(){
        return this.#cliente
    }

    constructor(){
        this.#cliente = null;
        this.numero = "";
        this.#saldo = 0;
        this.agencia = "";
    }

    //Metodos 
    deposito = (valor) =>{
        if(valor > 0){
            this.#saldo += valor;
        }
        return this.#saldo;
    }

    retiro = (valor) =>{
        if(valor <= this.#saldo){
            this.#saldo -= valor;
        }else{
            console.log("Saldo insuficiente");
        }
        return this.#saldo;
    }

    verSaldo = () =>{
        return this.#saldo;
    }

    transferir = (valor,cuentaDestino) =>{
        this.retiro(valor);
        cuentaDestino.deposito(valor);
    }
}