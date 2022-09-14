const nombreCliente = "Leonardo"
const dniCliente = "12313121"
const numeroCuenta = "111ss"
const saldoCuenta = 1000


//Creacion de clase
class cliente {
    nombreCliente
    dniCliente
    numeroCuenta
    saldoCuenta
}

const cliente1 = new cliente()

cliente1.nombreCliente = "Jose"
cliente1.dniCliente = "1111111"
cliente1.numeroCuenta = "12312313"
cliente1.saldoCuenta = 12000

console.log(cliente1)

const cliente2 = new cliente()

cliente2.nombreCliente = "Pepe"
cliente2.dniCliente = "1111222111"
cliente2.numeroCuenta = "1213123312313"
cliente2.saldoCuenta = 123000

console.log(cliente2)