
public class PruebaMetodos {
	
	public static void main(String[] args) {
		Cuenta miCuenta = new Cuenta();
		
		miCuenta.depositar(200);
		
		//System.out.println(miCuenta.saldo);
		
		miCuenta.retirar(100);
		//System.out.println(miCuenta.saldo);
		
		
		Cuenta otraCuenta = new Cuenta();
		otraCuenta.depositar(300);
		
		//otraCuenta.trasnferir(500, miCuenta);
		
		System.out.println(miCuenta.getSaldo());
		System.out.println(otraCuenta.getSaldo());
		
		boolean puedeTransferir = otraCuenta.trasnferir(500, miCuenta);
		
		if(puedeTransferir) {
			System.out.println("Transferecnai exitosa");
		}else {
			System.out.println("No es posible realizar la transferencia");
		}
		
		
		System.out.println(miCuenta.getSaldo());
		System.out.println(otraCuenta.getSaldo());
		
		
	}
}
