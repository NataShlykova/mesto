import './index.css';
import { Card } from '../scripts/card.js';
import { FormValidator } from '../scripts/FormValidator.js';
import {
  modalProfileEditButtonOpen,
  profileNameInput,
  profileAboutInput,
  modalWindowForm,
  modalAddFormButtonOpen,
  cardAddForm,
  selectors,
  cardSelector,
  popupBigImgSelector,
  elementsContainerSelector,
  profileNameSelector,
  profileAboutSelector,
  popupCardAddSelector,
  popupProfileEditSelector,
  popupDeleteConfirmSelector,
  popupAvatarEditSelector,
  avatarEditForm,
  profileAvatarSelector,
  avatarEditButton
} from '../utils/container.js';
import { PopupWithForm } from '../scripts/popupWithForm.js';
import { PopupWithImage } from '../scripts/popupWithImage.js';
import { Section } from '../scripts/section.js';
import { UserInfo } from '../scripts/UserInfo.js';
import { PopupWithConfirm } from '../scripts/PopupWithConfirm.js';
import { Api } from '../scripts/api.js';

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-62',
  headers: {
    authorization: 'c672d757-e983-41f2-acf9-f0c5d1556504',
    'Content-Type': 'application/json'
  }
})

const profileEditFormValidator = new FormValidator(selectors, modalWindowForm)
profileEditFormValidator.enableValidation()

const cardAddFormValidator = new FormValidator(selectors, cardAddForm)
cardAddFormValidator.enableValidation()

const userInfo = new UserInfo({ name: profileNameSelector, info: profileAboutSelector, avatar: profileAvatarSelector })

const popupFigure = new PopupWithImage(popupBigImgSelector)
popupFigure.setEventListeners()

const confirmDeletePopup = new PopupWithConfirm(popupDeleteConfirmSelector)
confirmDeletePopup.setEventListeners()

let userId // переменная под id пользователя

api.getAllNeededData() // возвращает(карточки и информация пользователя)
  .then(([cards, userData]) => {
    userInfo.setUserInfo(userData)
    userId = userData._id

    cardList.render(cards)
  })
  .catch((err) => console.log(err))
  
//Функция создания карточки
const createCard = (data) => {
  const card = new Card({
    data: data,
    handleCardClick: _ => popupFigure.open(data),
    handleLikeClick: _ => card.handleLikeCard(),
    handleConfirmDelete: _ => {
      confirmDeletePopup.setSubmitAction(_ => {
        confirmDeletePopup.renderLoadingWhileDeleting(true)
        api.delete(data._id)
          .then(_ => {
            card.handleRemoveCard()
            confirmDeletePopup.close()
          })
          .catch((err) => console.log(err))
          .finally(_ => confirmDeletePopup.renderLoadingWhileDeleting(false))
      })
      confirmDeletePopup.open()
    }
  },
    cardSelector,
    api,
    userId
  )
  return card
}

const cardList = new Section({
  renderer: item => {
    const card = createCard(item)
    const cardElement = card.renderCard()
    cardList.addItem(cardElement)
  }
}, elementsContainerSelector)

const popupAvatarEditFromValidator = new FormValidator(selectors, avatarEditForm)
popupAvatarEditFromValidator.enableValidation()

const popupAvatarEdit = new PopupWithForm(popupAvatarEditSelector, newValues => {
  popupAvatarEdit.renderLoading(true)
  api.handleUserAvatar(newValues)
    .then((data) => {
      userInfo.setUserAvatar(data)
      popupAvatarEdit.close()
    })
    .catch((err) => console.log(err))
    .finally(_ => popupAvatarEdit.renderLoading(false))
})
popupAvatarEdit.setEventListeners()

avatarEditButton.addEventListener('click', _ => {
  popupAvatarEditFromValidator.removeErrors()
  popupAvatarEditFromValidator.disableSubmitButton()
  popupAvatarEdit.open()
})

const popupFormCardAdd = new PopupWithForm(popupCardAddSelector, newValues => {
  popupFormCardAdd.renderLoading(true)
  api.addUserCard(newValues)
    .then((data) => {
      const card = createCard(data)
      const cardElement = card.renderCard()
      cardList.addItem(cardElement)
      
      popupFormCardAdd.close()
    })
    .catch((err) => console.log(err))
    .finally(_ => popupFormCardAdd.renderLoading(false))
})
popupFormCardAdd.setEventListeners()

const popupFormProfilEdit = new PopupWithForm(popupProfileEditSelector, newValues => {
  popupFormProfilEdit.renderLoading(true)
  api.setUserInfoApi(newValues)
    .then((data) => {
      userInfo.setUserInfo(data)
      popupFormProfilEdit.close()
    })
    .catch((err) => console.log(err))
    .finally(_ => popupFormProfilEdit.renderLoading(false))
})
popupFormProfilEdit.setEventListeners()

modalAddFormButtonOpen.addEventListener('click', _ => {
  cardAddFormValidator.removeErrors()
  
  cardAddFormValidator.disableSubmitButton()
  popupFormCardAdd.open()
})

modalProfileEditButtonOpen.addEventListener('click', _ => {
  const userData = userInfo.getUserInfo()
  profileEditFormValidator.removeErrors()
  profileNameInput.value = userData.name
  profileAboutInput.value = userData.info
  profileEditFormValidator.enableSubmitButton()
  popupFormProfilEdit.open()
})
