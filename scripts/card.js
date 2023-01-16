class Card {
    constructor (info, cardSelector) {
        this._name = info.name;
        this._link = info.link;
        this._cardSelector = cardSelector;
    }

    _getCardTemplate() {
        this._type = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true)
    }

    renderCard(list) {
        this._getCardTemplate()
        this._setEventListeners()
        this._cardImage = this._type.querySelector('.element__image')
        this._cardImage.src = this._link
        this._cardImage.alt = this.name
        this._type.querySelector('.element__text').textContent = this._name
        list.prepend(this._type)
    }

    _setEventListeners() {
        this._type
        .querySelector('.element__button-delete')
        .addEventListener ('click', () => {
            this._handlerDeleteCard()
        })

        this._type
        .querySelector('.element__button')
        .addEventListener ('click', () => {
            this._handlerLikeCard()
        })

        this._type
        .querySelector('.element__image')
        .addEventListener ('click', () => {
            this._handlerOpenPopupImage()
        })
    }

    _handlerLikeCard() {
        this._type
        .querySelector('.element__button')
        .classList
        .toggle('element__button_active')
    }

    _handlerOpenPopupImage() {
        popupBigImage.src = this._link
        elementParagraph.textContent = this._name
        openPopup (popupImage)
    }

    _handlerDeleteCard() {
        this._type
        .closest('.element')
        .remove()
    }
}

export {Card};
import {popupBigImage, elementParagraph, popupImage,openPopup} from './index.js';