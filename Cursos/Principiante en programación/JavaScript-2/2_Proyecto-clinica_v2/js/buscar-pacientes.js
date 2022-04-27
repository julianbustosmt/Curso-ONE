const botonBuscar = document.querySelector("#buscar-paciente")

botonBuscar.addEventListener("click", function () {

    const xhr = new XMLHttpRequest;
    xhr.open("GET", "https://alura-es-cursos.github.io/api-pacientes/pacientes.json")
    xhr.addEventListener("load", function () {
        const erroAjax = document.querySelector("#error-ajax")
        if (xhr.status == 200) {
            erroAjax.classList.add("invisible")
            const respuesta = xhr.responseText
            const pacientes = JSON.parse(respuesta)

            pacientes.forEach(paciente => {
                adicionarPaciente(paciente)
            });
        }else{
            erroAjax.classList.remove("invisible")
        }
    })
    xhr.send()
})