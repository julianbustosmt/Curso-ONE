
public class Cuenta {

	private double saldo;
	private int agencia;
	private int numero;
	Cliente titular = new Cliente();
	
	public Cuenta() {
		
	}
	
	private static int total = 0;
	
	public static int getTotal() {
		return Cuenta.total;
	}
	
	public Cuenta(int agencia) {
				
		if(agencia <= 0) {
			System.out.println("No se permite 0");
			this.agencia = 1;
		}else {
			this.agencia = agencia;
		}
		
		total ++;
		
		System.out.println("Creacion de nueva cuenta");
		System.out.println("Numero de cuentas creadas: " + total);
	}

	public void depositar(double valor) {
		this.saldo += valor;
	}

	public boolean retirar(double valor) {

		if (this.saldo >= valor) {
			this.saldo -= valor;
			return true;
		}
		return false;
	}

	public boolean trasnferir(double valor, Cuenta cuenta) {

		if (this.saldo >= valor) {
			this.saldo -= valor;
			cuenta.depositar(valor);

			return true;

		}
		return false;
	}

	public double getSaldo() {
		return this.saldo;
	}

	public int getAgencia() {
		return this.agencia;
	}

	public void setAgencia(int agencia) {
		if (agencia > 0) {
			this.agencia = agencia;
		} else {
			System.out.println("No estan permitidos valores negativos");
		}
	}

	public int getNumero() {
		return this.agencia;
	}

	public void setNumero(int numero) {
		if (numero > 0) {
			this.numero = numero;
		} else {
			System.out.println("No estan permitidos valores negativos");
		}
	}
	
	public void setTitular(Cliente titular) {
		this.titular = titular;
	}
	
	public Cliente getTitular() {
		return titular;
	}

}
