class Popup {
    constructor (popupSelect) {
        this._popup = document.querySelector(popupSelect);
        this._handlerEscClose = this._handlerEscClose.bind(this);
    }

    _handlerEscClose (evt) {
        if (evt.key === 'Escape') {
            this.close()
        }
    }

    _handlerBackgroundClose (evt) {
        if (evt.target.classList.contains('popup_opened')) {
            this.close(evt.target)
        }
    }

    setEventListeners () {
        this._popup.querySelector ('.popup__close-button')
        .addEventListener ('click', _ => this.close())
        this._popup.addEventListener ('click',this._handlerBackgroundClose.bind(this))
    }

    close () {
        this._popup.classList.remove('popup_opened')
        document.removeEventListener('keyup', this._handlerEscClose)
    }

    open () {
        this._popup.classList.add('popup_opened')
        document.addEventListener('keyup', this._handlerEscClose)
    }
}

export {Popup};