export class FormValidator {

    constructor(setting, formElement) {

        this._formSelector = setting.formSelector;
        this._inputSelector = setting.inputSelector;
        this._submitButtonSelector = setting.submitButtonSelector; 
        this._inactiveButtonClass = setting.inactiveButtonClass; 
        this._inputErrorClassActiv = setting.inputErrorClassActiv;
        this._inputErrorClass = setting.inputErrorClass; 
    
        this._formElement = formElement;
        this._formList = Array.from(document.querySelectorAll(this._formSelector));
        this._inputList = Array.from(
          this._formElement.querySelectorAll(this._inputSelector)
        ); // массив инпутов
        this._buttonElement = this._formElement.querySelector(
          this._submitButtonSelector
        ); // кнопка формы
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
        if (this._hasInvalidInput(this._inputList)) {
          this._buttonElement.classList.add(this._inactiveButtonClass);
          this._buttonElement.setAttribute("disabled", "disabled");
        } else {
          this._buttonElement.classList.remove(this._inactiveButtonClass);
          this._buttonElement.removeAttribute("disabled", "disabled");
        }
      }

    _setEventListeners () {
        this._toggleButtoneState(this._inputList, this._buttonElement);
  
        this._inputList.forEach((inputElement) => {
          inputElement.addEventListener("input", () => {
            // Внутри колбэка вызовем checkInputValidity
            // передав ей форму и проверяемый элемент
            this._checkInputValidity(inputElement);
            this._toggleButtoneState(this._inputList, this._buttonElement);
          });
        });
      };


      enableValidation = () => {
        // Переберём полученную коллекцию
        this._formList.forEach((formElement) => {
          this._setEventListeners(formElement);
        });
      };
       

}