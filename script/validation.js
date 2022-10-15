// Валидация форм согласно чек-листа Яндекс Практикум

const settingList = ({
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".popup__button-submit",
    inactiveButtonClass: "popup__button_invalid",
    inputErrorClassActiv: 'form-input-message-error-activ',
    inputErrorClass: "form__input-invalid",
  });

const showInputError = (formElement, inputElement, errorMessage, settingList) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(settingList.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settingList.inputErrorClassActiv);
};

const hideInputError = (formElement, inputElement, settingList) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(settingList.inputErrorClass);
  errorElement.classList.remove(settingList.inputErrorClassActiv);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, settingList) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, settingList);
  } else {
    hideInputError(formElement, inputElement, settingList);
  }
};

const setEventListeners = (formElement, settingList) => {
  const inputList = Array.from(formElement.querySelectorAll(settingList.inputSelector));
  const buttonElement = formElement.querySelector(settingList.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, settingList);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, settingList);
      toggleButtonState(inputList, buttonElement, settingList);
    });
  });
  formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
    toggleButtonState(inputList, buttonElement, settingList);
  });
};

const enableValidation = (settingList) => {
  const formList = Array.from(document.querySelectorAll(settingList.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, settingList);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, settingList) => {
  if(hasInvalidInput(inputList)) {
    buttonElement.classList.add(settingList.inactiveButtonClass);
    buttonElement.disabled = true;
  }
  else {
    buttonElement.classList.remove(settingList.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};
  
enableValidation(settingList);
