# Comandos Git

- ``git init``: inicializa un repositorio en el directorio donde se ejecuta el comando. Desde este comando, Git podrá administrar los cambios realizados en los archivos.
- ``git status``: se usa para mostrar el estado del repositorio y el área de ensayo. Nos permite ver los archivos y cambios rastreados, no rastreados. 
- ``git add .`` o ``git add <\filename>``: Se usan para añadir nuevos archivos o cambios a nuestro repositorio. Si usamos el "." todos los cambios seran añadidos, si solo queremos añadir un archivo en especifico deberemos escribir el nombre de dicho archivo. 
- ``git rm --cached <\filename>``:  Elimina el archivo solo del repositorio de Git, pero no del sistema de archivos. 
- ``git commit -m "mensaje"``: Captura una copia de los cambios preparados en ese momento del proyecto. Las copias confirmadas pueden considerarse como versiones "seguras" de un proyecto.
- ``git log``: Muestra el historico de cambios de nuestro proyecto .
    - ``--oneline`` : Nos muestra todos los commits en una sola linea.
    - ``-p``: vemos mas detalle de cada commit.
    - ``--pretty="parámetros de formato"`` : Sive para visualizar de diferentes maneras el historial.
      - Nota: Para salir de esta pantalla debemos usar ``:q``

# Comandos Git remoto (local)
- ``git init --bare``: Crea un repositorio en el cual unicamente se almacenaran las modificaciones de nuestros archivos (servidor).
- ``git remote``: Lista todos los servidores remotos a los que nuestro repositorio tiene acceso.
- ``git remote add <\nombre> <\direccion del servidor>``: Agrega un servidor remoto a nuestro servidor local.
- ``git remote -v``: Muestra las URLs que Git ha asociado al nombre y que serán usadas al leer y escribir en ese remoto.
- ``git push <\servidor> <\rama>``: Envia los datos al servidor especificado.
- ``git clone <\direeccion del servidor> <alias>``: Clona todos los archivos del servidor al que accedimos.
- ``git remote rename <\nombre original> <\nombre asignado>``:cambiar el nombre del servidor. Por defecto es **origin**.
- ``git pull <\servidor> <\rama>``: Sincroniza el repositorio local con el repositorio remoto. 

# Comandos de configuración
## Local
- git config --local user.name "Tu nombre aquí"
- git config --local user.email "Tu@email.aqui”
## Global
- git config --global user.name "Tu nombre aquí"
- git config --global user.email "Tu@email.aqui”