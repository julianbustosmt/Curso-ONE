import { uniqueDates } from '../services/date.js';
import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTask } from './readTask.js';

export const addTask = (event) => {

    event.preventDefault();

    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');

    const date = calendar.value;
    const dateFormat = (moment(date).format('DD/MM/YYYY'));
    const value = input.value;

    const complete = false;

    const taskObjet = {
        id: uuid.v4(),
        value,
        dateFormat,
        complete,
    };

    if( value == "" || date == ""){
        return
    }
    
    const taskList = JSON.parse(localStorage.getItem('task')) || [];
    taskList.push(taskObjet);
    localStorage.setItem('task', JSON.stringify(taskList));

    list.innerHTML = ""

    displayTask();

    input.value = '';
    calendar.value = ''
}

export const createTask = ({id, value, dateFormat, complete}) => {

    const task = document.createElement('li');
    task.classList.add('card');

    const taskContent = document.createElement('div');

    const check = checkComplete(id);

    if(complete){
        check.classList.toggle("fas");
        check.classList.toggle("completeIcon");
        check.classList.toggle("far");
    }

    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(check);
    taskContent.appendChild(titleTask);

    const dateElement = document.createElement('span')
    dateElement.innerHTML = dateFormat;

    task.appendChild(taskContent);
    task.appendChild(dateElement)
    task.appendChild(deleteIcon(id));

    return task
};