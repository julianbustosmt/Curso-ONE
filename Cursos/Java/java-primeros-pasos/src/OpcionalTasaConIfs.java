
public class OpcionalTasaConIfs {

	public static void main(String[] args) {
		double salario = 3300.0;

		if (salario >= 1900 && salario <= 2800) {
			System.out.println("El IR es de 7.5% y puede deducir de la declaración el monto de 142.");
		} else if (salario > 2800 && salario <= 3751) {
			System.out.println("el IR es del 15% y puede deducir 350.");
		} else if (salario > 3751 && salario <= 4664) {
			System.out.println("el IR es 22.5% y puede deducir 636.");
		}

	}

}
