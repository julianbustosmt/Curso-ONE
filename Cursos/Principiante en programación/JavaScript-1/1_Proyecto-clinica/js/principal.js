const btnAdicionar = document.querySelector("#adicionar-paciente")

btnAdicionar.addEventListener("click", function(event){
    event.preventDefault()
    const form = document.querySelector("#form-adicionar")
    
    const nombre = form.nombre.value;
    const peso = form.peso.value;
    const altura = form.altura.value;
    const gordura = form.gordura.value;

    // <tr></tr>
    const pacienteTr = document.createElement("tr")
    // <td></td>
    const nombreTd = document.createElement("td")
    const alturaTd = document.createElement("td")
    const pesoTd = document.createElement("td")
    const gorduraTd = document.createElement("td")

    nombreTd.textContent = nombre
    alturaTd.textContent = altura
    pesoTd.textContent = peso
    gorduraTd.textContent = gordura

    pacienteTr.appendChild(nombreTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)

    const tabla = document.querySelector("#tabla-pacientes")
    tabla.appendChild(pacienteTr)

    
})


const pacientes = document.querySelectorAll(".paciente")
console.log(pacientes)


for (let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i]

    const tdpeso = paciente.querySelector(".info-peso")
    const peso = tdpeso.textContent

    const tdAltura = paciente.querySelector(".info-altura")
    const altura = tdAltura.textContent

    const tdIMC = paciente.querySelector(".info-imc")

    let pesoEsValido = true
    let alturaEsValida = true

    if (peso < 0 || peso > 100) {
        console.log("Peso Incorrecto")
        tdIMC.textContent = "Peso Incorrecto"
        pesoEsValido = false
        paciente.classList.add("paciente-incorrecto")
    }

    if (altura < 0 || altura > 4) {
        console.log("Altura Incorrecto")
        tdIMC.textContent = "Altura Incorrecta"
        alturaEsValida = false
        paciente.classList.add("paciente-incorrecto")
    }

    if (pesoEsValido && alturaEsValida) {
        const imc = peso / Math.pow(altura, 2)
        tdIMC.textContent = imc.toFixed(2)
    }

}


