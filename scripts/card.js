    import {openPopup} from './utils.js';
    import {
        popupBigImage,
        elementParagraph,
        popupImage
    } from './container.js';


    class Card {
    constructor (info, cardSelector) {
        this._name = info.name;
        this._link = info.link;
        this._cardSelector = cardSelector;
    }

    _getCardTemplate() {
        this._element = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true)
    }

    renderCard(list) {
        this._getCardTemplate()
        this._setEventListeners()
        this._cardImage = this._element.querySelector('.element__image')
        this._cardImage.src = this._link
        this._cardImage.alt = this.name
        this._element.querySelector('.element__text').textContent = this._name
        list.prepend(this._element)
    }

    _setEventListeners() {
        this._element
        .querySelector('.element__button-delete')
        .addEventListener ('click', () => {
            this._element.remove()
        })

        this._element
        .querySelector('.element__button')
        .addEventListener ('click', () => {
            this._handlerLikeCard()
        })

        this._element
        .querySelector('.element__image')
        .addEventListener ('click', () => {
            this._handlerOpenPopupImage()
        })
    }

    _handlerLikeCard() {
        this._element
        .querySelector('.element__button')
        .classList
        .toggle('element__button_active')
    }

    _handlerOpenPopupImage() {
        popupBigImage.src = this._link
        popupBigImage.alt = this._name
        elementParagraph.textContent = this._name
        openPopup (popupImage)
    }

    _handlerDeleteCard() {
        this._element = null;
    }
}

export {Card};