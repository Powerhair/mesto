import './index.css'

import { initialCards, elements, popupFullscreen, popupCardAdd, popupProfile, buttonAddCard, settingList, formElementEdit, buttonEditOpen, inputName, inputJob } from "../utils/constans.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";

// класс Section
// С помощью функции renderer добавляем вновь созданную карточку на страницу

const apiConfig = {
  url: 'https://nomoreparties.co/v1/cohort-54',
  headers: {
    'Content-Type': 'application/json',
      authorization: 'eef832b0-db39-4c9c-94d9-9862628b85e3'
  }
}

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardList.addItem(createCard(item));
    },
  },
  elements
);


cardList.renderItems(initialCards);

// Класс UserInfo передаем классу в конструктор значения имени и рода деятельности пользователя 

const userInfo = new UserInfo({
  name: ".profile__title",
  job: ".profile__text",
});

// Нажатием на кнопку редактирования данных пользователя, открываем попап, вызываем функцию getUserInfo из класса UserInfo, тем самым получаем заполнение поля в попапе, подключаем валидацию к форме

buttonEditOpen.addEventListener("click", () => {
  popupProfileForm.open();
  const input = userInfo.getUserInfo();
  inputName.value = input.name;
  inputJob.value = input.job;
  formValidatorEdit.enableValidation();
});

// Функция для кнопки submit, передаем данные введеные в поля формы в метод setUserInfo класса UserInfo для изменения данных о пользователе, закрываем попап

function submitPopupProfile(data) {
  userInfo.setUserInfo(data.nameInput, data.jobInput);
  popupProfileForm.close();
}

const popupProfileForm = new PopupWithForm(popupProfile, submitPopupProfile);

function createCard(item) {
  // Создадим экземпляр карточки 2 пр template карточки(с лайками и т.д.) 3- попап с картинкой
  const card = new Card(item, "#element-template", handleCardClick);
  // Создаём карточку и возвращаем наружу
  const cardItem = card.generateCard();
  return cardItem;
}

const popupCard = new PopupWithForm(popupCardAdd, submitProfileForm);

function submitProfileForm(data) {
  const formValue = {
    name: data.titleInput,
    link: data.linkInput,
  };
  cardList.addItem(createCard(formValue));
  popupCard.close();
}

const popupImage = new PopupWithImage(popupFullscreen);

function handleCardClick(name, link) {
  popupImage.open(name, link);
}

buttonAddCard.addEventListener("click", () => {
  popupCard.open();
  formValidatorAddCard.enableValidation();
});

popupImage.setEventListeners();
popupCard.setEventListeners();
popupProfileForm.setEventListeners();

const formValidatorEdit = new FormValidator(settingList, formElementEdit);
const formValidatorAddCard = new FormValidator(settingList, formAdd);
formValidatorEdit.enableValidation();
formValidatorAddCard.enableValidation();



