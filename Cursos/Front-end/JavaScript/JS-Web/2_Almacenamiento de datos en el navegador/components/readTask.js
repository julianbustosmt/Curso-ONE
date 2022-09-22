import { createTask } from "./addTask.js";

export const readTask = () => {
    const taskList = JSON.parse(localStorage.getItem("task")) || [];
    const list = document.querySelector('[data-list]')
/*     console.log(taskList) */

    taskList.forEach((task) => {
        list.appendChild(createTask(task))
    });
}