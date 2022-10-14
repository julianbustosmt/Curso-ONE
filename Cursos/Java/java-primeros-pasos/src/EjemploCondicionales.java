
public class EjemploCondicionales {

	public static void main(String[] args) {

		int edad = 7;
		int cantidad = 2;

		if (edad >= 18) {
			System.out.println("Puede entrar");
		} else {
			if (cantidad >= 2) {
				System.out.println("Menor de edad pero puede entrar");
			} else {
				System.out.println("No puede entrar");
			}
		}
	}

}
