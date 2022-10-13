// Валидация форм согласно чек-листа Яндекс Практикум

const parametres = ({
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".popup__button-submit",
    inactiveButtonClass: "popup__button_invalid",
    inputErrorClass: "form__input-invalid",
    errorInput: ".form__input-input",
  });

//Валидация
//Функция, которая добавляет класс с ошибкой
const showInputError = (formElementAll, inputElement, errorMessage, parametres) => {
    const errorElement = formElementAll.querySelector(`#${inputElement.id}-error`); 
    console.log(errorElement);
    inputElement.classList.add(parametres.inputErrorClass); 
    errorElement.textContent = errorMessage;
    errorElement.classList.add(parametres.inputErrorClassActiv); 
  }
  
  //Функция, которая удаляет класс с ошибкой
  const hideInputError = (formElementAll, inputElement, parametres) => {
    // Находим элемент ошибки
    const errorElement = formElementAll.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(parametres.inputErrorClass);
    errorElement.classList.remove(parametres.inputErrorClassActiv); 
    errorElement.textContent = '';
  }
  
  // Передаем валидность поля
  const isValid = (formElementAll, inputElement, parametres) => {
    if (!inputElement.validity.valid) {
      //Показывать ошибку если поле не прошло валидацию
      showInputError(formElementAll, inputElement, inputElement.validationMessage, parametres); 
    } else {
      //Убираем ошибку
      hideInputError(formElementAll, inputElement, parametres);
    }
  }
  
  //Вклюение и выключение кнопки 
  const toggleButtonState = (inputList, buttonElement, parametres) => {
    // Если есть хотя бы один невалидный инпут
    if (hasInvalidInput(inputList, parametres)) {
      buttonElement.classList.add(parametres.inactiveButtonClass);
      buttonElement.setAttribute('disabled', 'true');
    } else {
      buttonElement.classList.remove(parametres.inactiveButtonClass);
      buttonElement.removeAttribute('disabled')
    }
  }
  
  //Добавление слушателя события 
  const setEventListeners = (formElementAll, parametres) => {
    const inputList = Array.from(formElementAll.querySelectorAll(parametres.inputSelector));
    const buttonElement = formElementAll.querySelector(parametres.submitButtonSelector);

    inputList.forEach((inputElement) => {
     
      inputElement.addEventListener('input', () => {
        isValid(formElementAll, inputElement, parametres);
        toggleButtonState(inputList, buttonElement, parametres);
      });
    });
  };
  
  //Ищем все формы и переберием их
  const enableValidation = (parametres) => {
    //Создание массива из найденных форм
    const formList = Array.from(document.querySelectorAll(parametres.formSelector));
   
    formList.forEach((formElementAll) => {
      setEventListeners(formElementAll, parametres);
    });
  };
  
  //Проверяем валидные ли инпуты в форме
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };
  
  enableValidation (parametres);