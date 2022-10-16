
public class EjemploCondicionales2 {
	public static void main(String[] args) {

		int edad = 7;
		int cantidadPersonas = 2;


		if (edad >= 18 || cantidadPersonas >= 2) {
			System.out.println("Puede entrar");
		} else {
			System.out.println("No puede entrar");
		}
		
		edad = 18;
		boolean espareja = cantidadPersonas > 1;
		boolean puedeEntrar = edad >= 18 && espareja;

		if (puedeEntrar) {
			System.out.println("Puede entrar");
		} else {
			System.out.println("No puede entrar");
		}
	}
}
