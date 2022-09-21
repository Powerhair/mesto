
// Объявляем переменные для profile

const getTitle = document.querySelector(".profile__title");
const getText = document.querySelector(".profile__text");
const buttonAddCard = document.querySelector(".profile__addButton");
const buttonEditOpen = document.querySelector(".profile__editButton");

// Объявляем переменные для popup

const popup = document.querySelector(".popup");
const editContainer = document.querySelector(".popup__container");
const editForm = document.querySelector(".popup__form")
const buttonPopupProfileEdit = document.querySelector(".popup_profile-edit");
const buttonPopupCardClose = document.querySelector(".popup__close_profile");
const popupProfileEdit = document.querySelector(".popup_profile-edit");
const inputName = document.querySelector(".popup__input_type_name");
const inputJob = document.querySelector(".popup__input_type_description");
const buttonEditClose = document.querySelector(".popup__button-exit");
const buttonSubmit = document.querySelector(".popup__button-submit");

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

// массив с карточками

let initialCards = [
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
  titleNewElements.textContent = cardData.name;

  function addElementsCard() {
    popupImage.src = elementsImgCard.src;
    popupImage.alt = titleElements.textContent;
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

  function editOpenForm() {
    openPopup(buttonEditOpen);
    inputName.value = getTitle.textContent;
    inputJob.value = getText.textContent;
  };

  function closePopup() {
    popup.classList.remove("popup_opened");
  };

  function closePopupFormEdit() {
    closePopup(buttonEditOpen);
  };

  function closePopupPhoto() {
    popupImageOpen.classList.remove("popup_opened");
  };

  function closePopupAddPhoto() {
    popupCardAdd.classList.remove("popup_opened");
  };

  function openPopup() {
    popup.classList.add("popup_opened");
  };

  function openPopupPhoto() {
    popupImageOpen.classList.add("popup_opened");
  }

  function openFormAddPhoto() {
    popupCardAdd.classList.add("popup_opened");
    inputName.value = getTitle.textContent;
    inputJob.value = getText.textContent;
  };

  /* функция редактирования профиля */
function submitHandlerEdit(event) {
  event.preventDefault();
  getTitle.textContent = inputName.value;
  getText.textContent = inputJob.value;
  closePopupFormEdit();
};

  /* функция новое место */
  const submitAddCard = (event) => {
    event.preventDefault();
    renderElements({
      name: popupInputPlaceTitle.value,
      link: popupInputPlaceLink.value,
    });
    event.target.reset();
    closePopupAddPhoto();
  };

  editForm.addEventListener("submit", submitAddCard);
  buttonEditOpen.addEventListener("click", editOpenForm);
  editContainer.addEventListener("submit", submitHandlerEdit);
  buttonAddCard.addEventListener("click", openFormAddPhoto);
  popupButtonCloseImage.addEventListener("click", closePopupPhoto);
  buttonAddClose.addEventListener("click", closePopupAddPhoto);
  buttonPopupCardClose.addEventListener("click", closePopupFormEdit);























































// // Создаем функции для открытия и закрытия окна popup. В функции открытия окна popup создаем возможность заполнение полей Имя и Работа содержимым со страницы



// function openPopup() {
//   popup.classList.add("popup_opened");
//   inputName.value = getTitle.textContent;
//   inputJob.value = getText.textContent;
// }

// function closeEditPopup() {
//   popup.classList.remove("popup_opened");
// }

// function openAddCardPopup() {
//   popupCardAdd.classList.add("popup_opened");
//   inputName.value = getTitle.textContent;
//   inputJob.value = getText.textContent;
// }

// function closeAddCardPopup() {
//   popupCardAdd.classList.remove("popup_opened");
// }

// // Создаем функцию для кнопки "Отправить", по шаблону из задания

// function formSubmitHandler(evt) {
//   evt.preventDefault();
//   getTitle.textContent = `${inputName.value}`;
//   getText.textContent = `${inputJob.value}`;
//   closeEditPopup();
// }

// function addCardFormSubmitHandler(evt) {
//   evt.preventDefault();
//   const name = document.querySelector(".popup__input_type_title").value;
//   const link = document.querySelector(".popup__input_type_link").value;
//   console.log(name);
//   initialCards.push({ name, link });
//   name.value = "";
//   link.value = "";
//   closeAddCardPopup();
//   render();

// }

// // Задаем логику работы кнопок открытия/закрытия popup и кнопки submit

// buttonAddCard.addEventListener("click", openAddCardPopup);
// buttonEditOpen.addEventListener("click", openPopup);
// buttonEditClose.addEventListener("click", closeEditPopup);

// buttonAddCardClose.addEventListener("click", closeAddCardPopup);
// editForm.addEventListener("submit", formSubmitHandler);
// addCardForm.addEventListener("submit", addCardFormSubmitHandler);

// let initialCards = [
//   {
//     name: "Архыз",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
//   },
//   {
//     name: "Челябинская область",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
//   },
//   {
//     name: "Иваново",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
//   },
//   {
//     name: "Камчатка",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
//   },
//   {
//     name: "Холмогорский район",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
//   },
//   {
//     name: "Байкал",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
//   },
// ];

// const placesContainer = document.querySelector(".elements");
// const placeTemplate = document.querySelector("#element-template").content;

// const getPlaceInfo = () =>
//   initialCards.map(function (item) {
//     return {
//       name: item.name,
//       link: item.link,
//     };
//   });
// // console.log(getPlaceInfo);

// let editingItem = null;

// function render() {
//   clearElements();
//   getPlaceInfo().forEach(renderCard);
// }

// function clearElements() {
//   placesContainer.innerHTML = "";
// }

// function renderCard({ name, link }) {
//   const placeElement = placeTemplate.cloneNode(true);
//   placeElement.querySelector(".element__title").textContent = name;
//   placeElement.querySelector(".element__image").src = link;
//   placesContainer.prepend(placeElement);

//   setListenersForElement(placeElement);
//   placesContainer.appendChild(placeElement);
// }

// render();


// function setListenersForElement() {
//   const buttonDelete = document.querySelector(".element__trash");
//   buttonDelete.addEventListener("click", cardDelete);
//   const buttonLike = document.querySelector("#btnLike");
//   buttonLike.addEventListener("click", changeIcon);
//   const imageButton = document.querySelector(".element__image");
//   imageButton.addEventListener("click", openFullSccreen);
//   // const buttonCloseFullScreen = document.querySelector(".popup__close-button")
//   // buttonCloseFullScreen.addEventListener("click", closeFullScreen);
// }


// function cardDelete(event) {
//   const currentElementItem = event.target.closest(".element");
//   currentElementItem.remove();
// }


// function changeIcon(event) {
//   editingItem = event.target.closest(".element__container");

//  const buttonLike = editingItem.querySelector("#btnLike");

//   if (buttonLike.classList.contains("element__like")){
//     buttonLike.classList.remove("element__like");
//     buttonLike.classList.add("element__like-active");
//   } else {
//     buttonLike.classList.remove("element__like-active");
//     buttonLike.classList.add("element__like");
//   }
// };
// const imageButton = document.querySelector(".element__image");
// const elementTitle = document.querySelector(".element__title");

// function openFullSccreen() {
//   const popupImage = document.querySelector('.popup__image');
//   const popupImageTitle = document.querySelector('.popup__image-title');
//   popupImage.src = imageButton.src;
//   popupImageTitle.textContent = elementTitle.textContent;
//   popupImageOpen.classList.add("popup_opened");
// }