const popupBigImage = document.querySelector ('.popup__img'); // увеличенное изображение в попапе
const elementParagraph = document.querySelector ('.popup__paragraph');// текст в попапе увеличенного изображения
const popupImage =document.querySelector('.popup_image'); //попап  изображения
const popupButtonEdit = document.querySelector('.popup_button_edit'); // попап редактирования профиля
const popupProfileOpenButton = document.querySelector('.profile__edit-button'); // кнопка редактирования профиля
const profileCloseButton = document.querySelector('.popup__close-button'); // кнопка закрытия редактирования профиля

const nameInput = document.querySelector('.popup__input_string_name'); // поле имени в попапе редактирования профиля
const workInput = document.querySelector('.popup__input_string_work'); // поле деятельности в попапе редактирования профиля

const popupFormEditProfile = document.querySelector('.popup__form'); // форма попапа редактирования профиля
const profileTitle = document.querySelector('.profile__title'); // имя в профиле на странице
const profileWork = document.querySelector('.profile__subtitle'); // название деятельности на странице
const buttonAddCard = document.querySelector('.profile__add-button'); // кнопка добавления изображений на странице 
const popupAddButton = document.querySelector('.popup_add_button'); // попап добавления изображений
const popupButtonAddSubmit  =  popupAddButton.querySelector ('.popup__submit'); // кнопка СОЗДАТЬ в попапе добавления изображений
const popupCloseAddButton = document.querySelector('.popup__close-button-add'); // кнопка закрытия попапа добавления изображений

const popupCloseButtonZoom = document.querySelector('.popup__close-button-zoom'); // кнопка закрытия увеличенного изображения
const sectionElements = document.querySelector('.elements'); //контейнер с изображениями на странице
const cardTemplate = document.querySelector('#image-elements'); // клонирование изображений
const imgAddForm = popupAddButton.querySelector('.popup__form');//форма попапа добавления изображений


const stringNamePhoto = document.querySelector ('.popup__input_string_name-photo'); // поле ввода наименования места в попапе добавления изображения
const stringLinkPhoto = document.querySelector ('.popup__input_string_link'); //поле ввода ссылки в попапе добавления изображения

const selectors = {
    inputSelector: '.popup__input',
    submitButSelector: '.popup__submit',
    activeButClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
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

  const cardSelector = '#image-elements';
  const popupPicSelector = '.popup_image';
  const elementContainerSelect = '.elements';
  const profileNameSelector = '.profile__title';
  const profileAboutSelector = '.profile__subtitle';
  const popupCardAddSelector = '.popup_add_button';
  const popupProfileEditSelector = '.popup_button_edit';





export {
    popupBigImage,
    elementParagraph,
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
    cardTemplate,
    imgAddForm,
    stringNamePhoto,
    stringLinkPhoto,
    selectors,
    initialElements,
    popupAddButton,
    cardSelector,
    popupPicSelector,
    elementContainerSelect,
    profileNameSelector,
    profileAboutSelector,
    popupCardAddSelector,
    popupProfileEditSelector
};