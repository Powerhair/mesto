export default class FormValidator {

    constructor(setting, formElement) {

        this._formSelector = setting.formSelector;
        this._inputSelector = setting.inputSelector;
        this._submitButtonSelector = setting.submitButtonSelector; 
        this._inactiveButtonClass = setting.inactiveButtonClass; 
        this._inputErrorClassActiv = setting.inputErrorClassActiv;
        this._inputErrorClass = setting.inputErrorClass; 
    
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector)); // массив инпутов
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector); // кнопка формы
    }

    _showInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClassActiv);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._inputErrorClass);
      }

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClassActiv);
        errorElement.classList.remove(this._inputErrorClass);
        errorElement.textContent = "";
      }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
          this._showInputError(inputElement);
        } else {
          this._hideInputError(inputElement);
        }
      }

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
      }

    _toggleButtoneState() {
        if (this._hasInvalidInput()) {
          this._buttonElement.classList.add(this._inactiveButtonClass);
          this._buttonElement.disabled = true;
        } else {
          this._buttonElement.classList.remove(this._inactiveButtonClass);
          this._buttonElement.disabled = false;
        }
      }

    _setEventListeners () {
        this._toggleButtoneState();
  
        this._inputList.forEach((inputElement) => {
          inputElement.addEventListener("input", () => {
            // Внутри колбэка вызовем checkInputValidity
            // передав ей форму и проверяемый элемент
            this._checkInputValidity(inputElement);
            this._toggleButtoneState();
          });
        });
      };


      toggleSubmitButtonOnOpeningPopup() {
        // сделать кнопку сохранения неактивной, если поля невалидные
        this._toggleButtoneState(this._inputList, this._buttonElement);
      };

      resetValidationErrors() {
        this._inputList.forEach((inputElement) => {
          this._hideInputError(inputElement)
        })
        this._toggleButtoneState()
      }


      enableValidation() {
        // для формы сбросить дефолтное поведение кнопки сохранения
        this._formElement.addEventListener('submit', (evt) => {
          evt.preventDefault();
        });
        // повесить листнеры на все инпуты формы
        this._setEventListeners();
      };
       

}