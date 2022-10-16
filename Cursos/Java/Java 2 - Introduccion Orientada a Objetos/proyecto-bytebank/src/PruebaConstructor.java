
public class PruebaConstructor {
	public static void main(String[] args) {
		Cuenta cuenta = new Cuenta(44);
		//cuenta.setAgencia(-4);
		System.out.println(cuenta.getAgencia());
		Cuenta cuenta2 = new Cuenta(33);
		
		System.out.println(Cuenta.getTotal());
	}
}
