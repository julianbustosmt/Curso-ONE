/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { CuentaNomina } from './CuantaNomina.js';
import { Cuenta } from './Cuenta.js';
import { CuentaAhorro } from './CuentaAhorro.js';
import { CuentaCorriente } from './CuentaCorriente.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

const cuentaAhorroLeonardo = new CuentaAhorro(cliente,"001","9985",0);

/* const cuenta = new Cuenta(cliente,"001","9985",0);

console.log(cuenta); */

const CuentaNomina1 = new CuentaNomina(cliente,"001","9985",0);
console.log(CuentaNomina1);
CuentaNomina1.depositoEnCuenta(150);
console.log(CuentaNomina1.verSaldo());
CuentaNomina1.retirarDeCuenta(50);
console.log(CuentaNomina1.verSaldo());


/* console.log(cuentaAhorroLeonardo)
console.log(cuentaDeLeonardo)

cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retirarDeCuenta(100);
console.log(cuentaDeLeonardo.verSaldo());

cuentaAhorroLeonardo.depositoEnCuenta(150);
console.log(cuentaAhorroLeonardo.verSaldo());
cuentaAhorroLeonardo.retirarDeCuenta(100);
console.log(cuentaAhorroLeonardo.verSaldo());

cuentaDeLeonardo.prueba();
 */

