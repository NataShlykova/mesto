import { Popup } from './popup.js';

class PopupWithImage extends Popup {
    
    constructor (popupSelect) {
        super(popupSelect);
        this._popupImage = this._popup.querySelector('.popup__img');
        this._popupParagraph = this._popup.querySelector('.popup__paragraph');
    }

    open (name, link) {
        super.open();
        this._popupImage.src = link;
        this._popupImage.alt = name;
        this._popupParagraph.textContent = name;
    }
}

export {PopupWithImage};