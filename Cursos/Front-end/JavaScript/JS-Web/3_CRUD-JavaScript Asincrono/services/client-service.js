// Abrir http (metodo, url)

// CRUD
// C : Create - POST
// R : Read - GET
// U : Update - PUT / PATCH
// D : Delete - DELETE

const url = "http://localhost:3000/perfil"

const listaClientes = () => fetch(url).then((respuesta) => respuesta.json())

const crearCliente = (nombre, email) => {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, email, id: uuid.v4() })
    })
};

const eliminarCliente = (id) =>{
    return fetch(`${url}/${id}`, {
        method: "DELETE",
    })
}

const detalleCliente = (id) =>{
    return fetch(`${url}/${id}`).then(respuesta =>{
        return (respuesta.json())
    })
}

const actualizarCliente = (nombre,email,id) =>{
    return fetch(`${url}/${id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre,email})
    }).then(respuesta =>{console.log(respuesta)}).catch((error)=>{console.log(error)})
}

export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
}