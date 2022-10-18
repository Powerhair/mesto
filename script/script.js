
// Объявляем переменные для profile

const profileTitle = document.querySelector(".profile__title");
const profileText = document.querySelector(".profile__text");
const buttonAddCard = document.querySelector(".profile__addButton");
const buttonEditOpen = document.querySelector(".profile__editButton");

// Объявляем переменные для popup

const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector(".popup-profile");
const buttonPopupCardClose = document.querySelector(".popup__close_profile");
const popupProfileEdit = document.querySelector(".popup_profile-edit");
const inputName = document.querySelector(".form__name");
const inputJob = document.querySelector(".form__description");
const buttonEditClose = document.querySelector(".popup__button-exit");
const buttonSubmit = document.querySelector(".popup__button-submit");
const popup = document.querySelector(".popup");
const formInput = document.querySelector(".form__input");
const formEdit = document.forms.formEdit;
const formAdd = document.forms.formAdd;

// Объявляем переменные для popup добавления карточки

const popupCardAdd = document.querySelector(".popup_card-add");
const popupInputPlaceTitle = document.querySelector(".form__title");
const popupInputPlaceLink = document.querySelector(".form__link");
const addCardForm = document.querySelector(".popup__container");
const buttonAddClose = document.querySelector(".popup__close_card");

// Объявляем переменные для popup открытия fullscreen

const popupFullscreen = document.querySelector(".popup_fullscreen");
const popupImage = document.querySelector('.popup__image');
const popupImageTitle = document.querySelector('.popup__image-title');
const popupButtonCloseImage = document.querySelector(".popup__close-button");

//Объявляем переменные template

const elementTemplate = document.querySelector("#element-template").content.querySelector(".element");
const elements = document.querySelector(".elements");

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


/* добавление карточек */
const createCard = (cardData) => {
  const newCard = elementTemplate.cloneNode(true);
  const titleNewElement = newCard.querySelector(".element__title");
  const likeElement = newCard.querySelector(".element__like");
  const elementDelete = newCard.querySelector(".element__trash");
  const elementImgCard = newCard.querySelector(".element__image");
  const titleElement = newCard.querySelector(".element__title");

  elementImgCard.src = cardData.link;
  elementImgCard.alt = cardData.name;
  titleNewElement.textContent = cardData.name;

  function clickCardListener() {
    popupImage.src = elementImgCard.src;
    popupImage.alt = titleElement.textContent; //передаем в alt изображения название фотографии
    popupImageTitle.textContent = titleElement.textContent;
    openPopupPhoto();
  }

    elementImgCard.addEventListener("click", clickCardListener);
    elementDelete.addEventListener("click", deleteCard);
    likeElement.addEventListener("click", tapLike);
    return newCard;
  };

  const deleteCard = (event) => {
    event.target.closest(".element").remove();
  };

  const tapLike = (event) => {
    event.target.classList.toggle("element__like-active");
  };

  const renderElement = (cardData) => {
    elements.prepend(createCard(cardData));
  };

  initialCards.forEach((cardData) => {
    renderElement(cardData);
  });


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

   function openPopupPhoto() {
     openPopup(popupFullscreen);
   }

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

  /* функция новое место */
  const submitAddCard = (event) => {
    event.preventDefault();
    renderElement({
      name: popupInputPlaceTitle.value,
      link: popupInputPlaceLink.value,
    });
    event.target.reset();
    closePopup(popupCardAdd);
  };

  formAdd.addEventListener("submit", submitAddCard);
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