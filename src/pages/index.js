import '../pages/index.css';
import {Card} from '../scripts/card.js';
import {FormValidator} from '../scripts/FormValidator.js';
import {
    popupProfileOpenButton,
    nameInput,
    workInput,
    popupFormEditProfile,
    buttonAddCard,
    imgAddForm,
    selectors,
    initialElements,
    cardSelector,
    popupPicSelector,
    elementContainerSelect,
    profileNameSelector,
    profileAboutSelector,
    popupCardAddSelector,
    popupProfileEditSelector
} from '../utils/container.js';
import { PopupWithForm } from '../scripts/popupWithForm.js';
import { PopupWithImage } from '../scripts/popupWithImage.js';
import { Section } from '../scripts/section.js';
import { UserInfo } from '../scripts/UserInfo.js';
import { data } from 'autoprefixer';


const profileEditFormValidator = new FormValidator(selectors, popupFormEditProfile);
profileEditFormValidator.enableValidation();

const cardAddFormValidator = new FormValidator(selectors, imgAddForm);
cardAddFormValidator.enableValidation();

const userInfo = new UserInfo({name: profileNameSelector, info: profileAboutSelector});

const popupPic = new PopupWithImage(popupPicSelector);
popupPic.setEventListeners();

const createCard = (item) => {
  const card = new Card ( {
    data: item,
    handlerCardClick: _ => {
      popupPic.open(item.name, item.link)
    }
  }, cardSelector)
  return card;
}

const cardElements = new Section ( {
  items: initialElements,
  renderer: item => {
    const card = createCard(item);
    const cardElement = card.renderCard();
    cardElements.addItem(cardElement);
  }
}, elementContainerSelect
)
cardElements.render();

const popupFormAddCard = new PopupWithForm (popupCardAddSelector, newValues => {
  const card = createCard(newValues);
  const cardElement = card.renderCard();
  cardElements.addItem(cardElement);
  cardAddFormValidator.disabledSubmitButton();
})
popupFormAddCard.setEventListeners();

const popupFormProfileEdit = new PopupWithForm (
  popupProfileEditSelector, 
  values => {
    userInfo.setUserInfo(values);
  })
popupFormProfileEdit.setEventListeners();

buttonAddCard.addEventListener('click', _ => {
  cardAddFormValidator.handleErrorElements()
  popupFormAddCard.open()
})

popupProfileOpenButton.addEventListener ('click', _ => {
  const userData = userInfo.getUserInfo()
  profileEditFormValidator.handleErrorElements()
  nameInput.value = userData.name
  workInput.value = userData.info;
  popupFormProfileEdit.open() 
})
