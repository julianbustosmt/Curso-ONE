const btnAdicionar = document.querySelector("#adicionar-paciente")

btnAdicionar.addEventListener("click", function (event) {
    event.preventDefault()
    const form = document.querySelector("#form-adicionar")

    const paciente = capturarDatosPaciente(form)
    //Capturando la tabla
    const tabla = document.querySelector("#tabla-pacientes")
    const pacienteTr = construirTr(paciente)
    //Asiganación del tr al la tabla
    tabla.appendChild(pacienteTr)
    form.reset()
})

const capturarDatosPaciente = (form) => {
    //Capturando los datos del formulario
    let paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value,form.altura.value)
    }

    return paciente
}

const construirTr = (paciente) => {
    //Creación de los tds y tr 
    const pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")

    //Asiganación de los td al tr
    pacienteTr.appendChild(construirTd(paciente.nombre,"info-nombre"))
    pacienteTr.appendChild(construirTd(paciente.peso,"info-nombre"))
    pacienteTr.appendChild(construirTd(paciente.altura,"info-nombre"))
    pacienteTr.appendChild(construirTd(paciente.gordura,"info-nombre"))
    pacienteTr.appendChild(construirTd(paciente.imc,"info-nombre"))

    return pacienteTr
}

const construirTd = (dato,clase) =>{
    const td = document.createElement("td")
    td.classList.add(clase)
    td.textContent = dato
    return td
}