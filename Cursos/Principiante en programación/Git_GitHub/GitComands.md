# Comandos Git
## Git
- ``git init``: inicializa un repositorio en el directorio donde se ejecuta el comando. Desde este comando, Git podrá administrar los cambios realizados en los archivos.
- ``git status``: se usa para mostrar el estado del repositorio y el área de ensayo. Nos permite ver los archivos y cambios rastreados, no rastreados. 
- ``git add .`` o ``git add <archivo>``: Se usan para añadir nuevos archivos o cambios a nuestro repositorio. Si usamos el "." todos los cambios seran añadidos, si solo queremos añadir un archivo en especifico deberemos escribir el nombre de dicho archivo. 
- ``git rm --cached <\filename>``:  Elimina el archivo solo del repositorio de Git, pero no del sistema de archivos. 
- ``git commit -m "mensaje"``: Captura una copia de los cambios preparados en ese momento del proyecto. Las copias confirmadas pueden considerarse como versiones "seguras" de un proyecto.
- ``git log``: Muestra el historico de cambios de nuestro proyecto .
    - ``--oneline`` : Nos muestra todos los commits en una sola linea.
    - ``-p``: vemos mas detalle de cada commit.
    - ``--pretty="parámetros de formato"`` : Sive para visualizar de diferentes maneras el historial.
    - ``--graph`` : Muestra de forma grafica el desplazamiento de las ramas.
      - Nota: Para salir de esta pantalla debemos usar ``:q``


## Git remoto
- ``git init --bare``: Crea un repositorio en el cual unicamente se almacenaran las modificaciones de nuestros archivos (servidor).
- ``git remote``: Lista todos los servidores remotos a los que nuestro repositorio tiene acceso.
- ``git remote add <nombre> </direccion del servidor>``: Agrega un servidor remoto a nuestro servidor local.
- ``git remote -v``: Muestra las URLs que Git ha asociado al nombre y que serán usadas al leer y escribir en ese remoto.
- ``git push </servidor> <rama>``: Envia los datos al servidor especificado.
- ``git clone </direeccion del servidor> <alias>``: Clona todos los archivos del servidor al que accedimos.
- ``git remote rename <nombre original> <nombre asignado>``:cambiar el nombre del servidor. Por defecto es **origin**.
- ``git pull </servidor> <rama>``: Sincroniza el repositorio local con el repositorio remoto. 


## Branches / Ramas
- ``git branch``: Muestra la rama en la que nos encontramos.
- ``git brach <nombre rama>``: Crea una rama con el <\nombre> asignado.
- ``git checkout <nombre rama>``: Permite desplazarse entre las ramas creadas por git branch.
  - ``-b <nombre rama>``: Crea una rama y nos mueve a esta. 
- ``git merge <rama>``: Une la rama seleccionada con la rama main.
- ``git rebase <rama>``: Substituye a git merge ya que traslada todos los commits de la rama actual a la rama master.


## Manipulación de las versiones 
- ``git restore <archivo>``: Descartar los cambios que no se han añadido (git add)
    - ``--stage <archivo>``: Descarta los archivos añadidos previamente con git add
- ``git revert <commit hash>``: Restaura el repositorio a la version del commit espesificado.
- ``git stash``: Almacena temporalmente (o guarda en un stash) los cambios que hayas efectuado en el código para usarlos despues.
  - ``list``: Lista los stash a los que se puede acceder.
  - ``aply <hash>``: Podemos aplicar un cambio específico al ``stash``
  - ``drop <hash>``: Elimina un elemento determinado del ``stash``
  - ``pop``: Agrega la ultima modificación guardada en ``stash`` al proyecto principal.


## Generando entregas
- ``git diff <hash Inicial>..<hash Final>``: Muestra las acciones realizadas en el intervalo especificado. Nos sirve para indentificad bugs o fallas. 
- ``git tag -a <nombre> -m "mensaje"``:Generalmente, el etiquetado se usa para capturar un punto en el historial que se utiliza para una publicación de versión marcada (por ejemplo, v1.0.1).Una etiqueta es como una rama que no cambia.
- ``git push origin <tag>``: Subimos a nuestro repositorio remoto el tag creado.
- ``git rebase <rama>``: Esa substituye a git merge ya que traslada todos los commits de la rama actual a la rama master.


# Comandos de configuración
## Local
- git config --local user.name "Tu nombre aquí"
- git config --local user.email "Tu@email.aqui”
## Global
- git config --global user.name "Tu nombre aquí"
- git config --global user.email "Tu@email.aqui”


# Bonus: [Git ignore](https://www.w3schools.com/git/git_ignore.asp?remote=github/)
