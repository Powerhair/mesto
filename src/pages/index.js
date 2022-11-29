import './index.css'

import { elements, popupFullscreen, popupCardAdd, popupProfile, buttonAddCard, settingList, formElementEdit, buttonEditOpen, popupDelete, popupChangeAvatar, profileName, profileJob, profileAvatar } from "../utils/constans.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Api from "../components/Api.js";

const popupCard = new PopupWithForm(popupCardAdd, addCard);
const popupDeleteForm = new PopupWithForm(popupDelete);
const popupAvatar = new PopupWithForm(popupChangeAvatar, addAvatar)
const popupProfileForm = new PopupWithForm(popupProfile, addUserInfo);
const popupImage = new PopupWithImage(popupFullscreen);

const api = new Api ({
  url: 'https://mesto.nomoreparties.co/v1/cohort-54/',
  headers: {
      authorization: 'eef832b0-db39-4c9c-94d9-9862628b85e3',
      'Content-Type': 'application/json'
  }
})


const userInform = new UserInfo(profileName, profileJob, profileAvatar);

let idUser

api.getData()
  .then(([user, data]) => {
    idUser = user._id
    userInform.setUserInfo(user)
    userInform.setUserAvatar(user.avatar)
    cardList.renderItems(data)
  })
  .catch((err) => {
    console.log(err);
  });

const cardList = new Section(
  {
    items: [],
    renderer: (data) => {
      cardList.addItemServer(createCard(data));
    },
  },
  elements
);



function addUserInfo(data) {
  popupProfileForm.load(true)
  const { nameInput, jobInput } = data;
  api.setUserInfo(nameInput, jobInput)
    .then((user) => {
      userInform.setUserInfo(user);
      popupProfileForm.close()
      console.log(ok)
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupProfileForm.load(false);
    });
}

function addCard(post) {
  popupCard.load(true)
  api.postUserCard(post)
    .then((data) => {
      cardList.addItem(createCard(data));
      popupCard.close()
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupCard.load(false)
    })
    ;
}

function addAvatar(image) {
  popupAvatar.load(true)
  api.getUserAvatar(image.linkInput)
    .then((res) => {
      userInform.setUserAvatar(res.avatar)
      popupAvatar.close()
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAvatar.load(false);
    });
}

function createCard(data) {
  const card = new Card(data, "#element-template", openPopupPhoto,
  idUser,
    (id) => {
      api.addLike(id)
        .then((res) => {
          card.setLikeCounter(res);
          card.addLike()
        })
        .catch((err) => {
          console.log(err);
        });
    },
    (id) => {
      api.removeLike(id)
        .then((res) => {
          card.setLikeCounter(res)
          card.removeLike()
        })
        .catch((err) => {
          console.log(err);
        })
    },
    (id) => {
      popupDeleteForm.open()
      popupDeleteForm.setNewSubmitForm(() => {
        api.removeCard(id)
          .then(() => {
            card.deleteCard()
            popupDeleteForm.close()
          })
          .catch((err) => {
            console.log(err);
          });
      })
    }
  );
  // Создаём карточку и возвращаем наружу
  const cardItem = card.generateCard();
  return cardItem;
}

function openPopupPhoto(name, link) {
  popupImage.open(name, link);
}

// Нажатием на кнопку редактирования данных пользователя, открываем попап, вызываем функцию getUserInfo из класса UserInfo, тем самым получаем заполнение поля в попапе, подключаем валидацию к форме

buttonEditOpen.addEventListener("click", () => {
  formValidators['formEdit'].resetValidationErrors()
  const userData = userInform.getUserInfo();
  popupProfileForm.setInputValue(userData)
  popupProfileForm.open();
});

buttonAddCard.addEventListener("click", () => {
  formValidators['formAdd'].resetValidationErrors()
  popupCard.open();
});

profileAvatar.addEventListener('click', () => {
  popupAvatar.open();
  formValidators['formAvatar'].resetValidationErrors();
})

popupImage.setEventListeners();
popupCard.setEventListeners();
popupProfileForm.setEventListeners();
popupDeleteForm.setEventListeners();
popupAvatar.setEventListeners();

// Включение валидации
const formValidators = {}
const enableValidation = (settingList) => {
  const formList = Array.from(document.querySelectorAll(settingList.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(settingList, formElement)
    // получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute('name')

    // вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(settingList);

export { openPopupPhoto, elements }



