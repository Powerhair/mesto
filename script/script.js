
// Объявляем переменные для profile

const getTitle = document.querySelector(".profile__title");
const getText = document.querySelector(".profile__text");
const buttonAddCard = document.querySelector(".profile__addButton");
const buttonEditOpen = document.querySelector(".profile__editButton");

// Объявляем переменные для popup

const popupProfile = document.querySelector(".popup-profile");
const formElement = document.querySelector(".form");
const buttonPopupCardClose = document.querySelector(".popup__close_profile");
const popupProfileEdit = document.querySelector(".popup_profile-edit");
const inputName = document.querySelector(".popup__input_type_name");
const inputJob = document.querySelector(".popup__input_type_description");
const buttonEditClose = document.querySelector(".popup__button-exit");
const buttonSubmit = document.querySelector(".popup__button-submit");
const popup = document.querySelector(".popup");
const formInput = formElement.querySelector(".form__input");

// Объявляем переменные для popup добавления карточки

const popupCardAdd = document.querySelector(".popup_card-add");
const popupInputPlaceTitle = document.querySelector(".popup__input_type_title");
const popupInputPlaceLink = document.querySelector(".popup__input_type_link");
const addCardForm = document.querySelector(".popup__container");
const buttonAddClose = document.querySelector(".popup__close_card");

// Объявляем переменные для popup открытия fullscreen

const popupImageOpen = document.querySelector(".popup_fullscreen");
const popupImage = document.querySelector('.popup__image');
const popupTitle = document.querySelector('.popup__image-title');
const popupButtonCloseImage = document.querySelector(".popup__close-button");

//Объявляем переменные template

const elementTemplate = document.querySelector("#element-template").content.querySelector(".element");
const elements = document.querySelector(".elements");

//Переменные для работы с формой

const formEdit = document.forms.formEdit;
const formAdd = document.forms.formAdd;

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
const render = (cardData) => {
  const templateElements = elementTemplate.cloneNode(true);
  const titleNewElements = templateElements.querySelector(".element__title");
  const likeElements = templateElements.querySelector(".element__like");
  const elementsDelete = templateElements.querySelector(".element__trash");
  const elementsImgCard = templateElements.querySelector(".element__image");
  const titleElements = templateElements.querySelector(".element__title");

  elementsImgCard.src = cardData.link;
  elementsImgCard.alt = cardData.name;
  titleNewElements.textContent = cardData.name;

  function addElementsCard() {
    popupImage.src = elementsImgCard.src;
    popupImage.alt = titleElements.textContent; //передаем в alt изображения название фотографии
    popupTitle.textContent = titleElements.textContent;
    openPopupPhoto();
  }

   elementsImgCard.addEventListener("click", addElementsCard);
   elementsDelete.addEventListener("click", deleteCard);
   likeElements.addEventListener("click", tapLike);

  return templateElements;
  };

  const deleteCard = (event) => {
    event.target.closest(".element").remove();
  };

  const tapLike = (event) => {
    event.target.classList.toggle("element__like-active");
  };

  const renderElements = (cardData) => {
    elements.prepend(render(cardData));
  };

  initialCards.forEach((cardData) => {
    renderElements(cardData);
  });


  // Создаем функцию открытия и закрытия popup

  function openPopup(elem) {
    const form = elem.querySelector('form');
    if (form?.name === 'formAdd') {
      const button = form.querySelector('.popup__button-submit');
      button.classList.add('popup__button_invalid')
      button.setAttribute('disabled', true);
    }
  
    elem.classList.add("popup_opened");
  };

  function closePopup(popup) {
    popup.classList.remove("popup_opened");
  };

  function editOpenForm() {
    openPopup(popupProfile);
    inputName.value = getTitle.textContent;
    inputJob.value = getText.textContent;
    
  };

  function closePopupFormEdit() {
    closePopup(popupProfile);
  };

   function closePopupPhoto() {
     closePopup(popupImageOpen);
   };

  function closePopupAddPhoto() {
    closePopup(popupCardAdd);
  };

   function openPopupPhoto() {
     openPopup(popupImageOpen);
   }

  function openFormAddPhoto() {
    inputName.value = getTitle.textContent;
    inputJob.value = getText.textContent;
    openPopup(popupCardAdd);
  };

  /* функция редактирования профиля */
function submitHandlerEdit(event) {
  event.preventDefault();
  getTitle.textContent = inputName.value;
  getText.textContent = inputJob.value;
  closePopup(popupProfile);
};

  /* функция новое место */
  const submitAddCard = (event) => {
    event.preventDefault();
    renderElements({
      name: popupInputPlaceTitle.value,
      link: popupInputPlaceLink.value,
    });
    event.target.reset();
    closePopup(popupCardAdd);
  };

  formAdd.addEventListener("submit", submitAddCard);
  buttonEditOpen.addEventListener("click", editOpenForm);
  formElement.addEventListener("submit", submitHandlerEdit);
  buttonAddCard.addEventListener("click", openFormAddPhoto);
  popupButtonCloseImage.addEventListener("click", closePopupPhoto);
  buttonAddClose.addEventListener("click", closePopupAddPhoto);
  buttonPopupCardClose.addEventListener("click", closePopupFormEdit);
  
// Закрытие попапов по клику на оверлей или нажатию клавиши "Escape"

  popupImageOpen.addEventListener("click", closeOverlay);
  popupCardAdd.addEventListener("click", closeOverlay);
  popupProfile.addEventListener('click', closeOverlay);

  document.body.addEventListener('keyup', (event) => {
    if (event.key === 'Escape') { 
      closeOverlay(popupImageOpen);
      closeOverlay(popupCardAdd);
      closeOverlay(popupProfile);
    }
  });

  function closeOverlay (evt) {
    
    const target = evt?.target || evt;

    const classList = Array.prototype.slice.call(target.classList,0);

    if (classList.includes('popup_opened')) {
      target.classList.remove("popup_opened");
    }
  };