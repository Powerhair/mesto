// Объявляем переменные
const popup = document.querySelector('.popup');
const popupCardAdd = document.querySelector('.popup_card-add');
const popupProfileEdit = document.querySelector('.popup_profile-edit');
const getTitle = document.querySelector('.profile__title');
const getText = document.querySelector('.profile__text');
const buttonEditOpen = document.querySelector('.profile__editButton');
const buttonEditClose = document.querySelector('.popup__button-exit');
const buttonAddCard = document.querySelector('.profile__addButton');
const editForm = document.querySelector('.popup__container');
const inputName = document.querySelector('.popup__input_type_name');
const inputJob = document.querySelector('.popup__input_type_description') ;
const inputTitle = document.querySelector('.popup__input_type_title');
const inputLink = document.querySelector('.popup__input_type_link');


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

buttonAddCard.addEventListener('click', openPopup);
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
  ]

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
    const placeElement = placeTemplate.cloneNode(true);
    placeElement.querySelector(".element__title").textContent = name;
    placeElement.querySelector(".element__image").src = link;
    placesContainer.prepend(placeElement);

    setListenersForElement(placeElement);
  placesContainer.appendChild(placeElement);
}

render();



function setListenersForElement(element) {
  const buttonDelete = document.querySelector('.element__trash');
  buttonDelete.addEventListener('click', cardDelete);
}

function cardDelete(event) {
  const currentElementItem = event.target.closest('.element');
  currentElementItem.remove();
 
}
