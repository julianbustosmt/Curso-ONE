const paciente = document.querySelector("#primerPaciente")

const tdpeso = paciente.querySelector(".info-peso")
const peso = tdpeso.textContent

const tdAltura = paciente.querySelector(".info-altura")
const altura = tdAltura.textContent

const tdIMC = paciente.querySelector(".info-imc")

let pesoEsValido = true
let alturaEsValida = true

if(peso < 0 || peso > 100){
    console.log("Peso Incorrecto")
    tdpeso.textContent = "Peso Incorrecto"
    pesoEsValido = false
}


if(altura < 0 || altura > 4){
    console.log("Altura Incorrecto")
    tdAltura.textContent = "Altura Incorrecta"
    alturaEsValida = false
}

if(pesoEsValido && alturaEsValida){
    const imc = peso/Math.pow(altura,2)
    tdIMC.textContent = imc
}