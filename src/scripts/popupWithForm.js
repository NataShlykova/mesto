import { Popup } from "./popup.js";

class PopupWithForm extends Popup {
    constructor(popupSelect, submitCallback) {
        super (popupSelect);
        this._submitCallback = submitCallback;
        this._popupForm = this._popup.querySelector('.popup__form');
        this._inputList = this._popupForm.querySelectorAll('.popup__input');
    }

    _getInputValue () {
        this._newValue = {};
        this._inputList.forEach(inputElement => {
            this._newValue[inputElement.name] = inputElement.value
        });
        return this._newValue;
    }

    setEventListeners ()  {
        super.setEventListeners();
        this._popupForm.addEventListener ('submit', evt => {
            evt.preventDefault();
            this._submitCallback(this._getInputValue());
            this.close();
        })
    }

    close () {
        super.close();
        this._popupForm.reset();
    }
}

export {PopupWithForm};