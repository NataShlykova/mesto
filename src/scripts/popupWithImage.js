import { Popup } from './popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._popupImage = this._popup.querySelector('.popup__img')
    this._popupParagraph = this._popup.querySelector('.popup__paragraph')
  }

  open(values) {
    super.open()
    this._popupImage.src = values.link
    this._popupImage.alt = values.name
    this._popupParagraph.textContent = values.name
  }
}

export { PopupWithImage };