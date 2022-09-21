(() => {

    const btn = document.querySelector('[data-form-btn]');

    const creteTask = (evento) => {
        evento.preventDefault();
        const input = document.querySelector('[data-form-input]');
        const task = document.createElement('li');
        const list = document.querySelector('[data-list]');
        task.classList.add("card");

        value = input.value;
        const taskContent = document.createElement('div');
        taskContent.appendChild(checkComplete());
        const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        taskContent.appendChild(titleTask);

        const content =
            `
        <i class="fas fa-trash-alt trashIcon icon"></i>
        `

        /* task.innerHTML = content; */
        task.appendChild(taskContent);

        list.appendChild(task);
        input.value = "";
    }

    btn.addEventListener("click", creteTask)

    const checkComplete = () => {
        const i = document.createElement('i');
        i.classList.add('far', 'fa-check-square', 'icon');
        i.addEventListener("click", completeTask);
        return i
    }

    const completeTask = (event) => {
        const element = event.target;
        element.classList.toggle('fas');
        element.classList.toggle('complete')
        element.classList.toggle('far');
    }

})();