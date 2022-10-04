export const valida = (input) =>{
    const tipoInput = input.dataset.tipo
    if(validadores[tipoInput]){
        validadores[tipoInput](input)
    }
}
const validadores = {
    nacimiento: input => validarNacimiento(input)
}
const validarNacimiento = (input) =>{
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    console.log(mayorDeEdad(fechaCliente))
    if(!mayorDeEdad(fechaCliente)){
        mensaje = "Bebes tener al menos 18 años de edad"
    }
    console.log(mensaje)
    console.log(input)
    input.setCustomValidity(mensaje)
}

const mayorDeEdad = (fecha) =>{
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18, 
        fecha.getUTCMonth(), 
        fecha.getUTCDate())

    return (diferenciaFechas <= fechaActual)
}