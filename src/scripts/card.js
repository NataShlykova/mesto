    class Card {
    constructor ({data, handlerCardClick}, cardSelector) {
        this._name = data.name
        this._link = data.link
        this._cardSelector = cardSelector
        this._handlerCardClick = handlerCardClick
    }

    _getCardTemplate() {
        this._element = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true)
    }

    renderCard() {
        this._getCardTemplate()
        this._setEventListeners()
        this._cardImage = this._element.querySelector('.element__image')
        this._cardImage.src = this._link
        this._cardImage.alt = this.name
        this._element.querySelector('.element__text').textContent = this._name
        return this._element
    }

    _setEventListeners() {
        this._element
        .querySelector('.element__button-delete')
        .addEventListener ('click', () => {
            this._handlerDeleteCard()
        })

        this._element
        .querySelector('.element__button')
        .addEventListener ('click', () => {
            this._handlerLikeCard()
        })

        this._element
        .querySelector('.element__image')
        .addEventListener ('click', () => {
            this._handlerCardClick({
                name: this._name,
                src: this._link
            })
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
        this._element
        .closest('.element')
        .remove()
    }
}

export {Card};