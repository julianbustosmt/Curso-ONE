
public class PruebaEncapsulamiento {

	public static void main(String[] args) {
		Cuenta cuenta = new Cuenta();
		Cliente cliente = new Cliente();
		
		cliente.setNombre("Etesech");
		cliente.setDocumento("123456");
		
		cuenta.setTitular(cliente);
		
		System.out.println(cliente.getNombre());
		System.out.println(cuenta.getTitular().getNombre());
	}

}
