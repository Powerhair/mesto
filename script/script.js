// Объявляем переменные

const popup = document.querySelector('.popup');
const getTitle = document.querySelector('.profile__title');
const getText = document.querySelector('.profile__text');
const buttonEditOpen = document.querySelector('.profile__editButton');
const buttonEditClose = document.querySelector('.popup__button-exit');
const editForm = document.querySelector('.popup__container');
const inputName = document.formPopup.nameInput;
const inputJob = document.formPopup.jobInput ;

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
    popup.classList.add ('popup_opened');
    inputName.value = getTitle.textContent;
    inputJob.value = getText.textContent;
}

function closePopup () {
    popup.classList.remove('popup_opened');
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

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

const placesContainer = document.querySelector(".elements");
const placeTemplate = document.querySelector("#element-template").content;

const placeInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link
  };
});
// console.log(placeInfo);

function render() {
    placeInfo.forEach(renderCard);
  }

  function renderCard({ name, link }) {
    const placeElement = placeTemplate.querySelector(".element").cloneNode(true);
    placeElement.querySelector(".element__title").textContent = name;
    placeElement.querySelector(".element__image").src = link;
    placesContainer.prepend(placeElement);
}

render();

