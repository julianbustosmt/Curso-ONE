// Importacion de clases
import {cuentaCorriente} from './cuentaCorriente.js'
import {cliente} from './cliente.js'

// Istancia o objeto de la clase 
const cliente1 = new cliente();

// Asignacion de valores a los atributos de la clase
cliente1.nombreCliente = "Jose";
cliente1.dniCliente = "1111111";
cliente1.rutCliente = "1112221111";

const cuentaCorriente1 = new cuentaCorriente();
cuentaCorriente1.cliente = cliente1
cuentaCorriente1.numero = "12312313";
/* cuentaCorriente1.#saldo = 12000; */
cuentaCorriente1.agencia = "elPepe";

console.log(cuentaCorriente1)

let saldo = cuentaCorriente1.verSaldo();
console.log(`El saldo actual es ${saldo}`);
cuentaCorriente1.deposito(1000);

saldo = cuentaCorriente1.verSaldo();
console.log(`El saldo actual es ${saldo}`);

cuentaCorriente1.retiro(15000);

const cliente2 = new cliente();

cliente2.nombreCliente = "Pepe";
cliente2.dniCliente = "1111222111";
cliente2.rutCliente = "33132131";

const cuentaCorriente2 = new cuentaCorriente();
cuentaCorriente2.numero = "1213123312313";
cuentaCorriente2.agencia = "elPepe2";
cuentaCorriente2.setCliente = cliente2;

cuentaCorriente1.transferir(100,cuentaCorriente2);
console.log('Cuenta 2: ', cuentaCorriente2)

console.log(cuentaCorriente2.verSaldo());
console.log(cuentaCorriente1.verSaldo());

cuentaCorriente2.cliente = 0

console.log(cuentaCorriente2.getCliente)