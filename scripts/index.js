import {Card} from './card.js';
import {FormValidator} from './FormValidator.js';
import {openPopup, closePopup} from './utils.js';
import {
    popupImage,
    popupButtonEdit,
    popupProfileOpenButton,
    profileCloseButton,
    nameInput,
    workInput,
    popupFormEditProfile,
    profileTitle,
    profileWork,
    buttonAddCard,
    popupButtonAddSubmit,
    popupCloseAddButton,
    popupCloseButtonZoom,
    sectionElements,
    imgAddForm,
    stringNamePhoto,
    stringLinkPhoto,
    selectors,
    initialElements,
    popupAddButton
} from './container.js';

 //функция закрытия попапа клик по фону
 function clickOnBackground (evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  };
 }

 // функция перевод в не активное состояние кнопки Создать----------------
 function disableAddButton () {
  popupButtonAddSubmit.classList.add('popup__submit_disabled');
  popupButtonAddSubmit.disabled = true;
 }

// функция обработчик формы попапа редактирования профиля
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileWork.textContent = workInput.value;
  closePopup (popupButtonEdit);
}

// функция для иnпутов
function fillProfileInputs () {
  nameInput.value = profileTitle.textContent;
  workInput.value = profileWork.textContent;
}

function submitCardForm (evt) {
  evt.preventDefault();
  const newValues = {
    name: stringNamePhoto.value,
    link: stringLinkPhoto.value
  }
  
  handlerAddElement(newValues);
  imgAddForm.reset();
  closePopup (popupAddButton);
};

const handlerAddElement = (item) => {
  const newElement = new Card (item, '#image-elements');
  newElement.renderCard(sectionElements);
}

initialElements.reverse().forEach((item) => {
  handlerAddElement (item)
});

const profileFormValidate = new FormValidator (selectors, popupFormEditProfile);
profileFormValidate.enableValidation();

const elementAddFormValidate = new FormValidator (selectors, imgAddForm);
elementAddFormValidate.enableValidation();

//вызовы функций 
popupProfileOpenButton.addEventListener('click', function() {
  fillProfileInputs ();
  openPopup (popupButtonEdit)
});
profileCloseButton.addEventListener ('click', function () {
  closePopup (popupButtonEdit)
});

popupFormEditProfile.addEventListener ('submit', handleProfileFormSubmit);

buttonAddCard.addEventListener ('click', function () {
  elementAddFormValidate.disabledSubmitButton();
  openPopup (popupAddButton);
  imgAddForm.reset();
});

popupCloseAddButton.addEventListener ('click', function () {
  closePopup (popupAddButton)
});

imgAddForm.addEventListener('submit', submitCardForm);

popupCloseButtonZoom.addEventListener ('click', function () {
  closePopup (popupImage);
});

popupButtonEdit.addEventListener ('click', clickOnBackground);
popupAddButton.addEventListener ('click', clickOnBackground);
popupImage.addEventListener ('click', clickOnBackground);

