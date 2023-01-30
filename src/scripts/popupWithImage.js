import { Popup } from "./popup.js";

class PopupWithImage extends Popup {
    constructor (popupSelect) {
        super(popupSelect);
    }

    open (type) {
        super.open();
        this._popupImage = this._popup.querySelector('.popup__img');
        this._popupParagraph = this._popup('.popup__paragraph');
        this._popupImage.src = type.link;
        this._popupImage.alt = type.name;
        this._popupParagraph.textContent = type.name;
    }
}

export {PopupWithImage};