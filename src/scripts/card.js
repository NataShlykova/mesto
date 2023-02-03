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

        this._elementDeleteButton = this._element
        .querySelector('.element__button-delete')

        this._elementLikeButton = this._element
        .querySelector('.element__button')

        this._cardImage = this._element
        .querySelector('.element__image')

        this._element_text = this._element
        .querySelector('.element__text')
    }

    renderCard() {
        this._getCardTemplate()
        this._setEventListeners()
        this._cardImage.src = this._link
        this._cardImage.alt = this.name
        this._element_text.textContent = this._name
        return this._element
    }

    _setEventListeners() {
        this._elementDeleteButton
        .addEventListener ('click', () => {
            this._handlerDeleteCard()
        })

        this._elementLikeButton
        .addEventListener ('click', () => {
            this._handlerLikeCard()
        })

        this._cardImage
        .addEventListener ('click', () => {
            this._handlerCardClick({
                name: this._name,
                src: this._link
            })
        })
    }

    _handlerLikeCard() {
        this._elementLikeButton.classList.toggle('element__button_active');
    }

   
    _handlerDeleteCard() {
        this._element.remove();
        this._element = null;
    }
}

export {Card};