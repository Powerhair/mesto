
// Объявляем переменные для profile

 export const buttonAddCard = document.querySelector(".profile__addButton");
 export const buttonEditOpen = document.querySelector(".profile__editButton");

// Объявляем переменные для popup

 export const popupProfile = document.querySelector(".popup-profile");
 export const inputName = document.querySelector(".form__name");
 export const inputJob = document.querySelector(".form__description");
 export const formElementEdit = document.querySelector(".form")

// Объявляем переменные для popup добавления карточки

 export const popupCardAdd = document.querySelector(".popup_card-add");

// Объявляем переменные для popup открытия fullscreen

 export const popupFullscreen = document.querySelector(".popup_fullscreen");

//Объявляем переменные template

 export const elements = document.querySelector(".elements");

 export const settingList = ({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "popup__button_invalid",
  inputErrorClassActiv: 'form-input-message-error-activ',
  inputErrorClass: "form__input-invalid",
});

// массив с карточками

 export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];