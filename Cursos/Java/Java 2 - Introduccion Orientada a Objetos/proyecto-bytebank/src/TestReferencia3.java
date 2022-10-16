
public class TestReferencia3 {
	public static void main(String[] args) {
		Cuenta cuentaElPepe = new Cuenta();

		//cuentaElPepe.titular = new Cliente ();
		
		cuentaElPepe.titular.setNombre("El pepe");
		
		System.out.println(cuentaElPepe.titular.getNombre());
				
	}
}
