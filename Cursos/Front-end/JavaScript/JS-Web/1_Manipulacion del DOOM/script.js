const btn = document.querySelector('[data-form-btn]');


const creteTask = (evento) =>{
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const task = document.createElement('li');
    const list = document.querySelector('[data-list]');
    task.classList.add("card")

    value = input.value;

    const content = 
        `<div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>`
    
    task.innerHTML = content;

    list.appendChild(task);
    input.value = "";
}

btn.addEventListener("click",creteTask)