import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniqueDates, orderDates } from "../services/date.js";

export const displayTask = () => {
    const taskList = JSON.parse(localStorage.getItem("task")) || [];
    const list = document.querySelector('[data-list]');

    const dates =  uniqueDates(taskList);
    orderDates(dates)

    dates.forEach(date => {
        const dateMoment = moment(date, "DD/MM/YYYY")
        list.appendChild(dateElement(date));
        taskList.forEach((task) => {
            const taskDate = moment(task.dateFormat, "DD/MM/YYYY")
            const diff = dateMoment.diff(taskDate)

            if(diff == 0){
            list.appendChild(createTask(task));
            }
        });
    });

    
}