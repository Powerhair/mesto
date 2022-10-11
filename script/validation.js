//   // Валидация форм

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