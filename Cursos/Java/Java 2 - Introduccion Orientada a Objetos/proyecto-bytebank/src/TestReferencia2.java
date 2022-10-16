
public class TestReferencia2 {
	
	public static void main(String[] args) {
		Cliente elPepe = new Cliente();
		elPepe.setNombre("El Pepe");
		elPepe.setDocumento("123456");
		elPepe.setTelefono("123456");
		
		Cuenta cuentaElpepe = new Cuenta();
		
		cuentaElpepe.titular = elPepe;
		
		System.out.println(cuentaElpepe.titular.getNombre());
		System.out.println(cuentaElpepe.titular);
		
		
	}
}
