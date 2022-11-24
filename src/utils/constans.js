
// Объявляем переменные для profile

 export const buttonAddCard = document.querySelector(".profile__addButton");
 export const buttonEditOpen = document.querySelector(".profile__editButton");
 export const profileName = document.querySelector(".profile__title")
 export const profileJob = document.querySelector(".profile__text")
 export const profileAvatar = document.querySelector(".profile__avatar")


// Объявляем переменные для popup

 export const popupProfile = document.querySelector(".popup-profile");
 export const inputName = document.querySelector(".form__name");
 export const inputJob = document.querySelector(".form__description");
 export const formElementEdit = document.querySelector(".form");
 export const popupDelete = document.querySelector(".popupDelete");
 export const popupChangeAvatar = document.querySelector(".popupChangeAvatar")

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
