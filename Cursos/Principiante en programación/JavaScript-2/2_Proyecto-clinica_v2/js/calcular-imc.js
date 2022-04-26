let pacientes = document.querySelectorAll(".paciente")

const calcularIMC = (peso,altura) =>{
    var imc = peso/Math.pow(altura,2)
    return imc.toFixed(2)
}

const validarPeso = (peso) =>{
    return(peso >= 0 && peso < 1000)
}

const validarAltura = (altura) =>{
    return(altura >= 0 && altura < 4)
}

for (let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i]

    const tdpeso = paciente.querySelector(".info-peso")
    const peso = tdpeso.textContent

    const tdAltura = paciente.querySelector(".info-altura")
    const altura = tdAltura.textContent

    const tdIMC = paciente.querySelector(".info-imc")

    let pesoEsValido = validarPeso(peso)
    let alturaEsValida = validarAltura(altura)

    if (!pesoEsValido) {
        tdIMC.textContent = "Peso Incorrecto"
        pesoEsValido = false
        paciente.classList.add("paciente-incorrecto")
    }

    if (!alturaEsValida) {
        tdIMC.textContent = "Altura Incorrecta"
        alturaEsValida = false
        paciente.classList.add("paciente-incorrecto")
    }

    if (pesoEsValido && alturaEsValida) {
        calcularIMC(peso,altura)
    }
}

