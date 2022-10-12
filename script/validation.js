// Валидация форм согласно чек-листа Яндекс Практикум

const enableValidation = {
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".popup__button-submit",
    inactiveButtonClass: ".popup__button_invalid",
    inputErrorClass: ".form__input-invalid",
    errorInput: ".form__input-input",
  };

const errorMessages = {
    empty: 'Вы пропустили это поле.',
    wrongLength: 'Минимальное количество символов 2. Длина текста сейчас 1 символ.',
    wrongUrl: 'Введите адрес сайта.',
  };

  function isValid(inputElement) {
    inputElement.setCustomValidity("");
    
    if (inputElement.validity.valueMessages) {
      inputElement.setCustomValidity(errorMessages.empty);

      return false;
    };
    if (inputElement.validity.tooLong || inputElement.validity.tooShort) {
      inputElement.setCustomValidity(errorMessages.wrongLength);

      return false;
    };

    if (inputElement.validity.typeMissmatch && inputElement.type === 'url') {
      inputElement.setCustomValidity(errorMessages.wrongUrl);

      return false;
    };
    return inputElement.checkValidity();
  };


  const showInputError = (formElement, inputElement) => {
    const errorElement = formElement.parentNode.querySelector(`#${inputElement.id}-error`);
    const spanMessage = document.querySelector('.form-input-message-error');
    spanMessage.classList.add('form-input-message-error-activ');
    inputElement.classList.add(enableValidation.inputErrorClass);
    isValid(inputElement);
    errorElement.textContent = inputElement.validationMessage;
    
  };
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.parentNode.querySelector(`#${inputElement.id}-error`);
    const spanMessage = document.querySelector('.form-input-message-error');
    inputElement.classList.remove(enableValidation.inputErrorClass);
    errorElement.textContent = '';
    spanMessage.classList.remove('form-input-message-error-activ');
  };
  
  const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement, inputElement.validationMessage);
    }
  };
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(enableValidation.inputSelector));
    const buttonElement = formElement.querySelector(enableValidation.submitButtonSelector);
  
    // чтобы проверить состояние кнопки в самом начале
    toggleButtonState(inputList, buttonElement);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        // чтобы проверять его при изменении любого из полей
        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
  const setValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form'));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
  
      const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
  
  fieldsetList.forEach((fieldSet) => {
    setEventListeners(fieldSet);
  });
  
    });
  };
  
  setValidation();
  
  function hasInvalidInput(inputList) {
      if (inputList.checkValidity()) {
        toggleButtonState(buttonElement, true)
    }else{
        toggleButtonState(buttonElement, false)
    }
  };
  
  function toggleButtonState(inputList, buttonElement) {
    if (!inputList) {

    buttonElement.classList.add(enableValidation.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'true');
  } else {
    buttonElement.classList.remove(enableValidation.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  };
  };


// Валидация форм,как сделал я")

//   formEdit.addEventListener('submit', sendForm);
//   formEdit.addEventListener('input', handleValidateInput);

//   formAdd.addEventListener('submit', sendForm);
//   formAdd.addEventListener('input', handleValidateInput);

//   const errorMessages = {
//     empty: 'Вы пропустили это поле.',
//     wrongLength: 'Минимальное количество символов 2. Длина текста сейчас 1 символ.',
//     wrongUrl: 'Введите адрес сайта.',
//   };

//   function isValid(input) {
//     input.setCustomValidity("");
    
//     if (input.validity.valueMessages) {
//       input.setCustomValidity(errorMessages.empty);

//       return false;
//     };
//     if (input.validity.tooLong || input.validity.tooShort) {
//       input.setCustomValidity(errorMessages.wrongLength);

//       return false;
//     };

//     if (input.validity.typeMissmatch && input.type === 'url') {
//       input.setCustomValidity(errorMessages.wrongUrl);

//       return false;
//     };
//     return input.checkValidity();
//   };

//   function isValidField(input) {
//     const errorSpan = input.parentNode.querySelector(`#${input.id}-error`);
//     const isInputValid = isValid(input);
//     errorSpan.textContent = input.validationMessage;

//     if (!isInputValid) {
//       input.classList.add('form__input-invalid');
//     } else {
//       input.classList.remove('form__input-invalid');
//     }
//   };

//   function setSubmitButton(button, state) {
//     if (state) {
//       button.removeAttribute('disabled');
//       button.classList.remove('popup__button_invalid');
//     } else {
//       button.setAttribute('disabled', true);
//       button.classList.add('popup__button_invalid');
//     }
//   };

//   function handleValidateInput(evt) {
//     const currentInput = evt.currentTarget;
//     const submitButton = currentInput.querySelector('.popup__button-submit');
  
//     isValidField(evt.target)

//     if (currentInput.checkValidity()) {
//       setSubmitButton(submitButton, true)
//     }else{
//       setSubmitButton(submitButton, false)
//     }
//   };

//   function sendForm(evt) {
//     evt.preventDefault;
    
//     const currentForm = evt.currentTarget;

//     if (currentForm.checkValidity()) {

//       evt.target.reset();
//     }
//   };