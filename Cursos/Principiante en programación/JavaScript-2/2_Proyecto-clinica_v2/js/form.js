const btnAdicionar = document.querySelector("#adicionar-paciente")

btnAdicionar.addEventListener("click", function (event) {
    event.preventDefault()
    const form = document.querySelector("#form-adicionar")

    const paciente = capturarDatosPaciente(form)

    const errores = validarPaciente(paciente)

    if (errores.length > 0) {
        exhibirMesajesErrores(errores)
        return;
    }
    adicionarPaciente(paciente)
    form.reset()

    const mensajesErrores = document.querySelector("#mensajes-errores")
    mensajesErrores.innerHTML = ""
})

const adicionarPaciente = (paciente) => {
    const pacienteTr = construirTr(paciente)
    //Capturando la tabla
    const tabla = document.querySelector("#tabla-pacientes")
    //Asiganación del tr al la tabla
    tabla.appendChild(pacienteTr)
}


const capturarDatosPaciente = (form) => {
    //Capturando los datos del formulario
    let paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value)
    }

    return paciente
}

const construirTr = (paciente) => {
    //Creación de los tds y tr 
    const pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")

    //Asiganación de los td al tr
    pacienteTr.appendChild(construirTd(paciente.nombre, "info-nombre"))
    pacienteTr.appendChild(construirTd(paciente.peso, "info-nombre"))
    pacienteTr.appendChild(construirTd(paciente.altura, "info-nombre"))
    pacienteTr.appendChild(construirTd(paciente.gordura, "info-nombre"))
    pacienteTr.appendChild(construirTd(paciente.imc, "info-nombre"))

    return pacienteTr
}

const construirTd = (dato, clase) => {
    const td = document.createElement("td")
    td.classList.add(clase)
    td.textContent = dato
    return td
}

const validarPaciente = (paciente) => {

    let errores = []
    if (paciente.nombre.length === 0) {
        errores.push("Ingrese un nombre")
    }
    if (paciente.peso.length === 0) {
        errores.push("Ingrese el peso")
    }
    if (paciente.altura.length === 0) {
        errores.push("Ingrese la altura")
    }
    if (paciente.gordura.length === 0) {
        errores.push("Ingrese el % de gordura")
    }
    if (!validarPeso(paciente.peso)) {
        errores.push("El peso es incorrecto")
    }
    if (!validarAltura(paciente.altura)) {
        errores.push("La altura es incorrecta")
    }
    return errores
}

const exhibirMesajesErrores = (errores) => {
    const ul = document.querySelector("#mensajes-errores")
    ul.innerHTML = ""
    errores.forEach(error => {
        const li = document.createElement("li")
        li.textContent = error
        ul.appendChild(li)
    });
}