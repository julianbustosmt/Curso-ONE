# Lo que aprendimos en esta aula:

## 01 Empezando Regex

- Regex, o expresiones regulares es un lenguaje para encontrar  patrones de texto.
- Ya que es un lenguaje independiente, existen interpretadores para la mayoría de las plataformas de desarrollo, como JavaScript, C#, Python o Ruby.
- Una clase de caracteres predefinida \d, lo que significa cualquier dígito.
- Existen quantifiers que definen cuántas veces un carácter debe de aparecer:
    - {1} es un quantifier que significa una vez
    - \* es un quantifier que significa zero, una o más veces
    - . es un meta-char que significa cualquier char.
    - Con \podemos escapar meta-chars, por ejemplo /.

## 02 Clases de Caracteres

- Podemos definir fácilmente la clase de cualquier carácter con [A-Z].
- \conociendo todos los quantifiers como ?, +, * y {n}.
- \s significa whitespace y es un atajo para [ \t\r\n\f].
- \w significa word char y es un atajo para [A-Za-z0-9_].