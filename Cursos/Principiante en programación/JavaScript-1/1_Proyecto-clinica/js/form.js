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
    const imcTd = document.createElement("td")

    nombreTd.textContent = nombre
    alturaTd.textContent = altura
    pesoTd.textContent = peso
    gorduraTd.textContent = gordura
    imcTd.textContent = calcularIMC(peso,altura)

    pacienteTr.appendChild(nombreTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    const tabla = document.querySelector("#tabla-pacientes")
    tabla.appendChild(pacienteTr)

    
})

