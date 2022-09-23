export default (date) => {

    const dateElement = document.createElement('li');
    dateElement.classList.add('date');
    dateElement.innerText = date;
    return dateElement
}