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

    setUserInfo (profNameInput, profAboutInput) {
        this._profileName.textContent = profNameInput.value;
        this._profileInfo.textContent = profAboutInput.value
    }
}

export {UserInfo};