/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { CuentaNomina } from './Cuentas/CuantaNomina.js';
import { Cuenta } from './Cuentas/Cuenta.js';
import { CuentaAhorro } from './Cuentas/CuentaAhorro.js';
import { CuentaCorriente } from './Cuentas/CuentaCorriente.js';
import { Empleado } from './Empleados/Empleado.js';
import { Director } from './Empleados/EmpleadoDirector.js';
import { Gerente } from './Empleados/EmpleadoGerente.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';

/* 
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

const cuentaAhorroLeonardo = new CuentaAhorro(cliente,"001","9985",0);

const cuenta = new Cuenta(cliente,"001","9985",0);

console.log(cuenta);

const CuentaNomina1 = new CuentaNomina(cliente,"001","9985",0);
console.log(CuentaNomina1);
CuentaNomina1.depositoEnCuenta(150);
console.log(CuentaNomina1.verSaldo());
CuentaNomina1.retirarDeCuenta(50);
console.log(CuentaNomina1.verSaldo());


console.log(cuentaAhorroLeonardo)
console.log(cuentaDeLeonardo)

cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retirarDeCuenta(100);
console.log(cuentaDeLeonardo.verSaldo());

cuentaAhorroLeonardo.depositoEnCuenta(150);
console.log(cuentaAhorroLeonardo.verSaldo());
cuentaAhorroLeonardo.retirarDeCuenta(100);
console.log(cuentaAhorroLeonardo.verSaldo());

cuentaDeLeonardo.prueba(); */

const empleado = new Empleado('El pepe', '1', 100); 
const gerente = new Gerente('El pepe2', '2', 1000); 
const director = new Director('El pepe3', '3', 10000); 

const cliente = new Cliente('Leonardo','13804050','123224');

/* console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion()); */

empleado.asignarClave('12345');
gerente.asignarClave('54321')
cliente.asignarClave('111')

console.log(SistemaAutenticacion.login(empleado,'12345'));
console.log(SistemaAutenticacion.login(gerente,'54321'));
console.log(SistemaAutenticacion.login(cliente,'000'));

