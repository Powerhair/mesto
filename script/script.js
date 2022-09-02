// Объявляем переменные
// Поля Имя и Работа будут меняться, их объявляем переменной let, остальные const

const popup = document.querySelector('.popup');
const getTitle = document.querySelector('.profile__title');
const getText = document.querySelector('.profile__text');
const buttonEditOpen = document.querySelector('.profile__editButton');
const buttonEditClose = document.querySelector('.popup__button-exit');
const editForm = document.querySelector('.popup__container');
let inputName = editForm.querySelector('.popup__input_name');
let inputJob = editForm.querySelector('.popup__input_job');

// Проверка создания переменных
// console.log (popup);
// console.log (getTitle);
// console.log (getText);
// console.log (buttonEditClose);
// console.log (buttonEditOpen);
// console.log (editForm);
// console.log (inputName);
// console.log (inputJob);


// Создаем функции для открытия и закрытия окна popup. В функции открытия окна popup создаем возможность заполнение полей Имя и Работа содержимым со страницы

function openPopup () {
    popup.classList.add ('popup__opened');
    inputName.value = getTitle.textContent;
    inputJob.value = getText.textContent;
}

function closePopup () {
    popup.classList.remove('popup__opened');
}

// Создаем функцию для кнопки "Отправить", по шаблону из задания

function formSubmitHandler (evt) {
    evt.preventDefault();
    getTitle.textContent = `${inputName.value}`;
    getText.textContent = `${inputJob.value}`;
    closePopup();
}


// Задаем логику работы кнопок открытия/закрытия popup и кнопки submit

buttonEditOpen.addEventListener('click', openPopup);
buttonEditClose.addEventListener('click', closePopup);
editForm.addEventListener('submit', formSubmitHandler);