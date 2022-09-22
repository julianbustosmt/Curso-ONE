import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';

export const addTask = (event) => {

    event.preventDefault();

    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');

    const date = calendar.value;
    const dateFormat = (moment(date).format('DD/MM/YYYY'));
    const value = input.value;

    const taskObjet = {
        value,
        dateFormat,
    };

    const taskList = JSON.parse(localStorage.getItem('task')) || [];
    taskList.push(taskObjet);
    localStorage.setItem('task', JSON.stringify(taskList));

    const task = createTask(taskObjet)
    list.appendChild(task);

    input.value = '';
    calendar.value = ''
}

export const createTask = ({value,dateFormat}) => {

    const task = document.createElement('li');
    task.classList.add('card');

    const taskContent = document.createElement('div');

    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    const dateElement = document.createElement('span')
    dateElement.innerHTML = dateFormat;

    task.appendChild(taskContent);
    task.appendChild(dateElement)
    task.appendChild(deleteIcon());

    return task
};