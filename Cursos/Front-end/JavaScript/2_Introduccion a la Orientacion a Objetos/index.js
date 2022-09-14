// Importacion de clases
import {CuentaCorriente} from './cuentaCorriente.js'
import {Cliente} from './cliente.js'

// Istancia o objeto de la clase 
// Asignacion de valores a los atributos de la clase
const cliente1 = new Cliente("Jose","1111111","1112221111");
console.log(cliente1)

const cuentaCorriente1 = new CuentaCorriente(cliente1, "12312313", "elPepe");

console.log(cuentaCorriente1)

let saldo = cuentaCorriente1.verSaldo();
console.log(`El saldo actual es ${saldo}`);
cuentaCorriente1.deposito(1000);

saldo = cuentaCorriente1.verSaldo();
console.log(`El saldo actual es ${saldo}`);

cuentaCorriente1.retiro(15000);

const cliente2 = new Cliente("Pepe","1111222111","33132131");

const cuentaCorriente2 = new CuentaCorriente(cliente2, "1213123312313", "elPepe2");

cuentaCorriente1.transferir(100,cuentaCorriente2);
console.log('Cuenta 2: ', cuentaCorriente2)

console.log(cuentaCorriente2.verSaldo());
console.log(cuentaCorriente1.verSaldo());

cuentaCorriente2.Cliente = 0

console.log(cuentaCorriente2.getCliente)


console.log(CuentaCorriente.cantidadCuentas)