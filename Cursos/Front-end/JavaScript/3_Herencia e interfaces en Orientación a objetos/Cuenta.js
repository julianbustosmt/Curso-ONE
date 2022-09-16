export class Cuenta {
    #cliente;
    #saldo;

    constructor(cliente, numero, agencia, saldo) {
        this.#cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = saldo;
    }

    set cliente(valor) {
        if (valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        _retirarDeCuenta(valor, 0)
    }

    _retirarDeCuenta(valor, comision) {
        valor = valor * (1 + comision / 100)
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor, cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }

}

