
public class TipoVariable {
	
	public static void main(String[] arg) {
		
		int edad = 28;
		System.out.println(edad);
		
		edad = 47;
		System.out.println(edad);
		
		edad = 46 + 88;
		System.out.println("Mi edad es "+ edad);
		
		double salario = 1250.58;
		System.out.println("Salario:" + salario);
		
		double edad2 = 12;
		System.out.println("Mi edad en double es: "+ edad2);
		
		double salarioMidad = salario / 2;
		System.out.println("Salario mitad:" + salarioMidad);
		
		int division = 1250/3;
		System.out.println(division); //Si asignamos un resultado decimal a un entero se redondeara.
		
		double variable1 = 230.98;
		int variable1Entero = (int) variable1; //Cast
		
		System.out.println(variable1Entero);
		
		long numeroMuyGrande = 1222222222222222222L;
		float numeroDecimalPequeno = 2.5F;
		short numeroPequeno = 12321;
		byte numeroAunMasPequeno = 123;
		
	}
	
}
