const campoFiltro = document.querySelector("#filtrar-tabla")

campoFiltro.addEventListener("input", function () {

    if (this.value.length > 0) {
        for (let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i]
            let tdNombre = paciente.querySelector(".info-nombre")
            let nombre = tdNombre.textContent;
            let expresion = new RegExp(this.value, "i")

            if (!expresion.test(nombre)) {
                paciente.classList.add("invisible")
            } else {
                paciente.classList.remove("invisible")
            }
            
            /* Otro metodo para filtrar usando la funcion substring , la cual recibe dos parámetros, haciendo que devuelva para la string, con el tamaño definido en los parámetros. El primer parámetro es el inicio, comenzando de 0 (que representa el primer carácter). El segundo parámetro define el fin. Con esto logramos capturar una subcadena de todos los nombre con el mismo numero de letras de nuestra busqueda , despues se procede a comprar esas subcadenas generadas con el input del usuario.*/

            /*
            var comparar = nombre.substring(0, this.value.length);
            var compararMinuscula = comparar.toLowerCase();
            var valorDigitadoMinuscula = this.value.toLowerCase();
            if (!(valorDigitadoMinuscula == compararMinuscula)) {
                paciente.classList.add("invisible");
            } else {
                paciente.classList.remove("invisible");
            }
            */

        }
        


    } else {
        for (let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i]
            paciente.classList.remove("invisible")
        }
    }


})