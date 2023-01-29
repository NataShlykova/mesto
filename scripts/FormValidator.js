

class FormValidator {
    constructor (info, formElement) {
        this._inputSelector = info.inputSelector;
        this._submitButSelector = info.submitButSelector;
        this._activeButClass = info.activeButClass;
        this._inputErrorClass = info.inputErrorClass;
        this._errorClass = info.errorClass;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButSelector);
    }

    _pointError (inputElement, errorMessage) {
        const errorText = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorText.classList.add(this._errorClass);
        errorText.textContent = errorMessage;
    }

    _removeError (inputElement){
        const errorText = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorText.classList.remove(this._errorClass);
        errorText.textContent = "";
    }

    _checkInputValidity (inputElement) {
        if (!inputElement.validity.valid) {
            this._pointError(inputElement, inputElement.validationMessage)
        } else {
            this._removeError(inputElement);
        }
    }

    _hasInvalidInput (inputList) {
        return inputList.some ((inputElement) => {
            return !inputElement.validity.valid
        })
    }

    _toggleButtonState () {
        if (this._hasInvalidInput (this._inputList)) {
            this.disabledSubmitButton ();
        } else {
            this._buttonElement.classList.remove(this._activeButClass)
            this._buttonElement.disabled = false
        }
    }

    _setEventListeners () {
        this._toggleButtonState ();
        this._inputList.forEach ((inputElement) => {
            inputElement.addEventListener ('input', () => {
                this._checkInputValidity (inputElement);
                this._toggleButtonState ();
            })
        })
    }

    handleErrorElements () {
        this._inputList.forEach(inputElement => {
            this._removeError(inputElement)
        })
    }

    disabledSubmitButton () {
        this._buttonElement.classList.add(this._activeButClass);
        this._buttonElement.disabled = true;
    }

    enableValidation () {
        this._setEventListeners()
    }
}

export {FormValidator};