import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector('[data-form-btn]');

const creteTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const task = document.createElement('li');
    const list = document.querySelector('[data-list]');
    task.classList.add("card");

    let value = input.value;
    const taskContent = document.createElement('div');
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(titleTask);

    /* task.innerHTML = content; */
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());

    list.appendChild(task);
    input.value = "";
}

btn.addEventListener("click", creteTask)
