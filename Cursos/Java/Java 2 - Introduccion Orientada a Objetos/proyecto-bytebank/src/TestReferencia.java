
public class TestReferencia {

	public static void main(String[] args) {
		Cuenta primeraCuenta = new Cuenta();
		primeraCuenta.depositar(200);
		Cuenta segundaCuenta = primeraCuenta;
		segundaCuenta.depositar(100);
	
		System.out.println("Saldo primera cuenta " + primeraCuenta.getSaldo());
		System.out.println("Saldo segunda cuenta " + segundaCuenta.getSaldo());
		
		segundaCuenta.depositar(400);
		
		System.out.println("Saldo primera cuenta " + primeraCuenta.getSaldo());
		
		System.out.println(primeraCuenta);
		System.out.println(segundaCuenta);
		
		System.out.println(primeraCuenta == segundaCuenta);
	}

}
