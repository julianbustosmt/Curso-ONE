const btn = document.querySelector('[data-form-btn]')
const input = document.querySelector('[data-form-input]')

const creteTask = (evento) =>{
    evento.preventDefault()
    console.log(input.value)
}

btn.addEventListener("click",creteTask)