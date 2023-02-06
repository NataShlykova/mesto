class UserInfo {
    constructor(userSelect) {
        this._profileName = document.querySelector(userSelect.name);
        this._profileInfo = document.querySelector(userSelect.info);
    }

    getUserInfo () {
        this._userItem = {
            name: this._profileName.textContent,
            info: this._profileInfo.textContent
        }
        return this._userItem
    }

    setUserInfo (data) {
        this._profileName.textContent = data.cardsName;
        this._profileInfo.textContent = data.cardsWork;
    }
}

export {UserInfo};