
public class PruebaAcceso {
	public static void main(String[] args) {
		Cuenta cuenta = new Cuenta();
		//cuenta.saldo = 200;
		cuenta.retirar(300);
		//cuenta.saldo = cuenta.saldo - 300;
		
		//System.out.println(cuenta.saldo);
		
		cuenta.setAgencia(42);
		cuenta.depositar(400);
		cuenta.retirar(300);
		System.out.println(cuenta.getAgencia());
		System.out.println(cuenta.getSaldo());
	}
}
