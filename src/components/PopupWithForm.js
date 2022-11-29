import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._formInputs = Array.from(this._popup.querySelectorAll(".form__input"));
    this._popupForm = this._popup.querySelector(".form");
    this._button = this._popupForm.querySelector('.popup__button-submit');
    this._buttonText = this._button.textContent;
  }



  _getInputValues() {
    const formValue = {};
    this._formInputs.forEach((element) => {
      formValue[element.name] = element.value;
    });
    return formValue;
  }

  setInputValue(elements) {
    this._formInputs.forEach((element) => {
      element.value = elements[element.name]
    })
  }


  close() {
    super.close();
    this._popupForm.reset();
  }

  setNewSubmitForm(newHandler) {
    this._submitForm = newHandler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
    });
  }

  load(isLoading) {
    if (isLoading) {
      this._button.textContent = 'Сохранение...'
    } else {
      this._button.textContent = this._buttonText;
    }
  }
}