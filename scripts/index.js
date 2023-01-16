const popupButtonEdit = document.querySelector('.popup_button_edit'); // попап редактирования профиля
const openEditButton = document.querySelector('.profile__edit-button'); // кнопка редактирования профиля
const profileCloseButton = document.querySelector('.popup__close-button'); // кнопка закрытия редактирования профиля

const nameInput = document.querySelector('.popup__input_string_name'); // поле имени в попапе редактирования профиля
const workInput = document.querySelector('.popup__input_string_work'); // поле деятельности в попапе редактирования профиля

const popupFormEditProfile = document.querySelector('.popup__form'); // форма попапа редактирования профиля
const profileTitle = document.querySelector('.profile__title'); // имя в профиле на странице
const profileWork = document.querySelector('.profile__subtitle'); // название деятельности на странице
const openAddButton = document.querySelector('.profile__add-button'); // кнопка добавления изображений на странице 
const popupAddButton = document.querySelector('.popup_add_button'); // попап добавления изображений
const popupButtonAddSubmit  =  popupAddButton.querySelector ('.popup__submit'); // кнопка СОЗДАТЬ в попапе добавления изображений
const popupCloseAddButton = document.querySelector('.popup__close-button-add'); // кнопка закрытия попапа добавления изображений
const popupImage =document.querySelector('.popup_image'); //попап  изображения
const popupCloseButtonZoom = document.querySelector('.popup__close-button-zoom'); // кнопка закрытия увеличенного изображения
const sectionElements = document.querySelector('.elements'); //контейнер с изображениями на странице
const cardTemplate = document.querySelector('#image-elements'); // клонирование изображений
const imgAddForm = popupAddButton.querySelector('.popup__form');//форма попапа добавления изображений
const elementParagraph = document.querySelector ('.popup__paragraph');// текст в попапе увеличенного изображения
const popupBigImage = document.querySelector ('.popup__img'); // увеличенное изображение в попапе
const stringNamePhoto = document.querySelector ('.popup__input_string_name-photo'); // поле ввода наименования места в попапе добавления изображения
const stringLinkPhoto = document.querySelector ('.popup__input_string_link'); //поле ввода ссылки в попапе добавления изображения
const selectors = {
  inputSelector: '.popup__input',
  submitButSelector: '.popup__submit',
  activeButClass: 'popup__input_type_error',
  errorClass: 'popup__error-input_active'
}
const initialElements = [  // изображения в массиве
    {
      name: 'БАО Алматы',
      link: './images/6images/бао.jpg'
    },
    {
      name: 'Сибирь',
      link: './images/6images/сибирь.jpg'
    },
    {
      name: 'Алматы',
      link: './images/6images/алматы.jpg'
    },
    {
      name: 'Чарынский каньон',
      link: './images/6images/чарын.jpg'
    },
    {
      name: 'Астана',
      link: './images/6images/Байтерек.jpg'
    },
    {
      name: 'Чимбулак',
      link: './images/6images/чимбулак.jpg'
    }
  ];

 // функция звкрытия попапа нажатием на Escape
 function closeClickEsc (evt) {
  if (evt.key === 'Escape') {
    closePopup (document.querySelector('.popup_opened'));
  }
 };

//фунция открытия попапа 
const openPopup = (openPopup) => {
  openPopup.classList.add('popup_opened');
  document.addEventListener('keydown', closeClickEsc);  
};

//функция закрытия попапа 
const closePopup = (closePopup) => { 
  closePopup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeClickEsc);
 };

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

function addElement (evt) {
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
openEditButton.addEventListener('click', function() {
  fillProfileInputs ();
  openPopup (popupButtonEdit)
});
profileCloseButton.addEventListener ('click', function () {
  closePopup (popupButtonEdit)
});

popupFormEditProfile.addEventListener ('submit', handleProfileFormSubmit);

openAddButton.addEventListener ('click', function () {
  openPopup (popupAddButton)
});

popupCloseAddButton.addEventListener ('click', function () {
  closePopup (popupAddButton)
});

imgAddForm.addEventListener('submit', addElement);

popupCloseButtonZoom.addEventListener ('click', function () {
  closePopup (popupImage);
});

popupButtonEdit.addEventListener ('click', clickOnBackground);
popupAddButton.addEventListener ('click', clickOnBackground);
popupImage.addEventListener ('click', clickOnBackground);


openAddButton.addEventListener ('click', function () {
  disableAddButton ();
  imgAddForm.reset();
  openPopup (popupAddButton);
 });

export {popupBigImage, elementParagraph, popupImage, openPopup};
import {Card} from './card.js';
import {FormValidator} from './FormValidator.js';