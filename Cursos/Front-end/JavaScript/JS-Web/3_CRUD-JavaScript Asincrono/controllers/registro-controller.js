import { clientServices } from "../services/client-service.js";

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", (event)=>{
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    clientServices.crearCliente(nombre,email).then(respuesta => {
        window.location.href = "/screens/registro_completado.html"
    }).catch((error)=>{
        console.log(error)
    })
    event.preventDefault();
});