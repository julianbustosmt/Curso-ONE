import { Cliente } from "./cliente.js";

export class CuentaCorriente {
    #cliente;
    numero;
    #saldo; // # Convierte el atributo en privado
    //saldo; 
    agencia;
    static cantidadCuentas = 0;


    set setCliente(valor){
        if(valor instanceof Cliente){
        this.#cliente = valor
        }
    }

    get getCliente(){
        return this.#cliente
    }

    constructor(cliente, numero, agencia){
        this.setCliente = cliente;
        this.numero = numero;
        this.#saldo = 0;
        this.agencia = agencia;
        CuentaCorriente.cantidadCuentas ++
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