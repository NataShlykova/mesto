const errorInTheField = (formElement, inputElement, errorMessage, {inputErrorClass, errorClass}) => {
    const errorField = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorField.textContent = errorMessage;
    errorField.classList.add(errorClass);
  };
  
  const hideTheError = (formElement, inputElement, {inputErrorClass, errorClass}) => {
    const errorField = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorField.classList.remove(errorClass);
    errorField.textContent = '';
  };
  
  const findOutTheCorrectInput = (formElement, inputElement, combination) => {
    if (!inputElement.validity.valid) {
      errorInTheField (formElement, inputElement, inputElement.validationMessage, combination);
    } else {
      hideTheError (formElement, inputElement, combination);
    }
  };
  
  const listenEventClick = (formElement, {inputSelector, submitButtonSelector, ...combination}) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonField = formElement.querySelector (submitButtonSelector);
    switchButton(inputList, buttonField, combination);
    inputList.forEach(function (inputElement) {
     inputElement.addEventListener('input', function () {
      findOutTheCorrectInput (formElement, inputElement, combination);
      switchButton(inputList, buttonField, combination);
     });
   });
  };
  
  const enableValidation = ({formSelector, ...combination}) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach(function (formElement) {
      formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
      });
      const fieldList = Array.from(document.querySelectorAll(formSelector));
      fieldList.forEach(function (field) {
          listenEventClick (field, combination);
      });
    });
  };
  
  const ifNotCorrect = (inputList) => {
    return inputList.some(function (inputElement) {
      return !inputElement.validity.valid;
    });
  };
  
  const switchButton = (inputList, buttonField,{inactiveButtonClass}) => {
    if (ifNotCorrect (inputList)) {
      buttonField.classList.add (inactiveButtonClass);
      buttonField.disabled = true;
    } else {
      buttonField.classList.remove (inactiveButtonClass);
      buttonField.disabled = false;
    }
  };
  
  
  enableValidation ({
      formSelector: '.popup_add_button',
      inputSelector: '.popup__input',
      submitButtonSelector: '.popup__submit',
      inactiveButtonClass: 'popup__submit_disablet',
      inputErrorClass: 'popup__input_type_error',
      errorClass: 'popup__error-input_active'
    }); 
  