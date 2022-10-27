import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

// Объявляем переменные для profile

const profileTitle = document.querySelector(".profile__title");
const profileText = document.querySelector(".profile__text");
const buttonAddCard = document.querySelector(".profile__addButton");
const buttonEditOpen = document.querySelector(".profile__editButton");

// Объявляем переменные для popup

const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector(".popup-profile");
const buttonPopupCardClose = document.querySelector(".popup__close_profile");
const inputName = document.querySelector(".form__name");
const inputJob = document.querySelector(".form__description");
const formElementEdit = document.querySelector(".form")
const formEdit = document.forms.formEdit;
const formAdd = document.forms.formAdd;

// Объявляем переменные для popup добавления карточки

const popupCardAdd = document.querySelector(".popup_card-add");
const popupInputPlaceTitle = document.querySelector(".form__title");
const popupInputPlaceLink = document.querySelector(".form__link");
const buttonAddClose = document.querySelector(".popup__close_card");

// Объявляем переменные для popup открытия fullscreen

const popupFullscreen = document.querySelector(".popup_fullscreen");
const popupImage = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__image-title');
const popupButtonCloseImage = document.querySelector(".popup__close-button");

//Объявляем переменные template

const elements = document.querySelector(".elements");

const settingList = ({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "popup__button_invalid",
  inputErrorClassActiv: 'form-input-message-error-activ',
  inputErrorClass: "form__input-invalid",
});

// массив с карточками

const initialCards = [
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

const submitAddCard = (evt) => {
  evt.preventDefault();
  const addCard = {
   name: popupInputPlaceTitle.value,
   link: popupInputPlaceLink.value,
  };

  const card = new Card(addCard, "#element-template", openPopupPhoto);
  const elementsCardTemplate = card.generateCard();
  elements.prepend(elementsCardTemplate);
  closePopup(popupCardAdd);
  formAdd.reset();
  saveButtonInactive();
};

function saveButtonInactive() {
  const buttonSaveAddCard = formAdd.querySelector(".popup__button-submit");
  buttonSaveAddCard.classList.add(settingList.inactiveButtonClass);
  buttonSaveAddCard.disabled = true;
}

buttonAddClose.addEventListener("click", () =>
  closePopup(popupCardAdd)
);
formAdd.addEventListener("submit", submitAddCard);


initialCards.forEach((item) => {
  const card = new Card(item, "#element-template", openPopupPhoto);
  const elementsCardTemplate = card.generateCard();

  elements.append(elementsCardTemplate);
});

function openPopupPhoto(name, link) {
  popupImage.src = link;
  popupImageTitle.textContent = name;
  popupImage.alt = name
  return openPopup(popupFullscreen);
}


  // Создаем функцию открытия и закрытия popup

  function openPopup(elem) {
    elem.classList.add("popup_opened");
    document.addEventListener('keydown', closeByEscape);
  };

  popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close_profile')) {
        closePopup(popup)
      }
    })
  });

  function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.addEventListener('keydown', closeByEscape);
  };

  function openPopupEdit() {
    openPopup(popupProfile);
    inputName.value = profileTitle.textContent;

    inputJob.value = profileText.textContent;
    
  };

  function closePopupFormEdit() {
    closePopup(popupProfile);
  };

   function closePopupPhoto() {
     closePopup(popupFullscreen);
   };

  function closePopupAddPhoto() {
    closePopup(popupCardAdd);
  };



  function openFormAddPhoto() {
    inputName.value = profileTitle.textContent;
    inputJob.value = profileText.textContent;
    openPopup(popupCardAdd);
  };

  /* функция редактирования профиля */
function submitHandlerEdit(event) {
  event.preventDefault();
  profileTitle.textContent = inputName.value;
  profileText.textContent = inputJob.value;
  closePopup(popupProfile);
};

  buttonEditOpen.addEventListener("click", openPopupEdit);
  formEdit.addEventListener("submit", submitHandlerEdit);
  buttonAddCard.addEventListener("click", openFormAddPhoto);
  popupButtonCloseImage.addEventListener("click", closePopupPhoto);
  buttonAddClose.addEventListener("click", closePopupAddPhoto);
  buttonPopupCardClose.addEventListener("click", closePopupFormEdit);
  
// Закрытие попапов по клику на оверлей или нажатию клавиши "Escape"
const closeByEscape = (evt) => {
  if (evt.key === 'Escape') {
    const openedNowPopup = document.querySelector('.popup_opened')
    closePopup(openedNowPopup);
  };
};

const formValidatorEdit = new FormValidator(settingList, formElementEdit);
const formValidatorAddCard = new FormValidator(settingList, formAdd);
formValidatorEdit.enableValidation();
formValidatorAddCard.enableValidation();