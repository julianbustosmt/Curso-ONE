# Lo que aprendimos en esta aula:

## 01 Empezando Regex

- Regex, o expresiones regulares es un lenguaje para encontrar  patrones de texto.
- Ya que es un lenguaje independiente, existen interpretadores para la mayoría de las plataformas de desarrollo, como JavaScript, C#, Python o Ruby.
- Una clase de caracteres predefinida <code>\d</code>, lo que significa cualquier dígito.
- Existen quantifiers que definen cuántas veces un carácter debe de aparecer:
    - <code>{1}</code> es un quantifier que significa una vez
    - <code>\*</code> es un quantifier que significa zero, una o más veces
    - <code>.</code> es un meta-char que significa cualquier char.
    - Con <code> \ </code> podemos escapar meta-chars, por ejemplo <code> /. </code>

## 02 Clases de Caracteres

- Podemos definir fácilmente la clase de cualquier carácter con <code> [A-Z] </code>.
- \conociendo todos los quantifiers como <code> ?, +, * y {n} </code>.
- \s significa whitespace y es un atajo para <code> [ \t\r\n\f] </code>.
- \w significa word char y es un atajo para <code> [A-Za-z0-9_] </code>.


## 03 Encontrando la posicion con anclas

Lo que aprendimos en esta aula:

- Existen anclas predefinidas que seleccionan una posición dentro de la string.
- <code>\b</code> es un ancla que selecciona un word boundary, eso es el inicio o fin de la palabra.
- <code>^</code> es un ancla que selecciona el inicio de la string.
- <code>$</code> es un ancla que selecciona el fin de una string.

- ### Para saber mas: <code> \\b </code>

  - Vimos en la clase el ancla <code> \b </code> (word boundary) para seleccionar la posición antes o después de una palabra.

  - Existe también el non-word-boundary: <code> \B (B mayúscula) </code>

  - Puedes utilizar nuestro probador para entenderlo mejor en la práctica:

  - String: <code> español proporcional compor </code>

  - Pattern: <code> \Bpor\B </code>


## 04 Trabajando con grupos

Lo que aprendimos en esta aula:

- Declara grupo <code>( ).</code>
- Podemos tener grupos y subgrupos.
- Un grupo es retornado al momento ejecutar, lo que nos ayuda a seleccionar una parte del match.
- A través de <code>?:</code> decimos que no queremos ver ese grupo en la  respuesta.
