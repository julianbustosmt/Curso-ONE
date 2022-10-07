export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }
    console.log(input.validity)
    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML = ""
    } else {
        input.parentElement.classList.add("input-container--invalid")
        console.log(input.parentElement.querySelector("input-message-error"))
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeError(tipoDeInput, input)
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customeError"
]

const mensajesError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacio"
    },
    email: {
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    password: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales."
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacio",
        customeError: "Debes tener al menos 18 años de edad"
    },
    numero: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "El formato requerido es XXXXXXXXXX 10 números",
    },
    direccion: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "La dirección debe contener entre 10 a 40 caracteres.",
    },
    ciudad: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "La ciudad debe contener entre 10 a 40 caracteres.",
    },
    estado: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "El estado debe contener entre 10 a 40 caracteres.",
    },

}

const validadores = {
    nacimiento: (input) => validarNacimiento(input),
};

const mostrarMensajeError = (tipoInput, input) => {
    let mensaje = ""
    tipoDeErrores.forEach(error => {
        if (input.validity[error]) {
            console.log(error)
            console.log(input.validity[error])
            console.log(mensajesError[tipoInput][error])
            mensaje = mensajesError[tipoInput][error]
        }
    });

    return mensaje
}

function validarNacimiento(input) {
    const fechaCliente = new Date(input.value);
    let mensaje = "";
    if (!mayorDeEdad(fechaCliente)) {
        mensaje = "Debes tener al menos 18 años de edad";
    }

    input.setCustomValidity(mensaje);
}

function mayorDeEdad(fecha) {
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDate()
    );
    return diferenciaFechas <= fechaActual;
}
