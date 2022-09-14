const nombreCliente = "Leonardo"
const dniCliente = "12313121"
const numeroCuenta = "111ss"
const saldoCuenta = 1000


//Creacion de clase
class cliente {
    nombreCliente;
    dniCliente;
    rutCliente;
}

class cuentaCorriente {
    numero;
    #saldo; // # Convierte el atributo en privado
    //saldo; 
    agencia;

    constructor(){
        this.numero = ""
        this.#saldo = 0;
        this.agencia = ""
    }

    //Metodos 
    deposito = (valor) =>{
        if(valor > 0){
            this.#saldo += valor;
        }
        return this.#saldo
    }

    retiro = (valor) =>{
        if(valor <= this.#saldo){
            this.#saldo -= valor;
        }else{
            console.log("Saldo insuficiente")
        }
        return this.#saldo
    }

    verSaldo = () =>{
        return this.#saldo
    }
}

// Istancia o objeto de la clase 
const cliente1 = new cliente();

// Asignacion de valores a los atributos de la clase
cliente1.nombreCliente = "Jose";
cliente1.dniCliente = "1111111";
cliente1.rutCliente = "1112221111";

const cuentaCorriente1 = new cuentaCorriente();
cuentaCorriente1.numero = "12312313";
/* cuentaCorriente1.#saldo = 12000; */
cuentaCorriente1.agencia = "elPepe";

let saldo = cuentaCorriente1.verSaldo();
console.log(`El saldo actual es ${saldo}`);
cuentaCorriente1.deposito(1000);

saldo = cuentaCorriente1.verSaldo();
console.log(`El saldo actual es ${saldo}`);

cuentaCorriente1.retiro(15000);

/* const cliente2 = new cliente();

cliente2.nombreCliente = "Pepe";
cliente2.dniCliente = "1111222111";
cliente2.rutCliente = "33132131";

const cuentaCorriente2 = new cuentaCorriente();
cuentaCorriente2.numero = "1213123312313";
cuentaCorriente2.saldo = 123000;
cuentaCorriente2.agencia = "elPepe2"; */