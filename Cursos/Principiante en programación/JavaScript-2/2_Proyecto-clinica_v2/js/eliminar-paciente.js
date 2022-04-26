
const tabla = document.querySelector("#tabla-pacientes")
tabla.addEventListener("dblclick",function (event){
    console.log(event.target)
    // Ya que el eventListener lo estamos agregando a la tabla en general , event.target aisla el objeto especifico de la tabla al que le estamos haciendo dbdclick y parentNode selecciona al padre de ese objeto.
    event.target.parentNode.classList.add("fadeOut")
    setTimeout(function (){
        event.target.parentNode.remove()
    },500)
})
