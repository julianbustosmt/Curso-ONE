// Abrir http (metodo, url)

// CRUD
// C : Create - POST
// R : Read - GET
// U : Update - PUT / PATCH
// D : Delete - DELETE

const urlLocal = "http://localhost:3000/perfil"

const listaClientes = () => fetch(urlLocal).then((respuesta) => respuesta.json())

export const clientServices = {
    listaClientes
}