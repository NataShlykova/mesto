const popupButtonEdit = document.querySelector('.popup_button_edit'); // попап редактирования профиля
const openEditButton = document.querySelector('.profile__edit-button'); // кнопка редактирования профиля
const profileCloseButton = document.querySelector('.popup__close-button'); // кнопка закрытия редактирования профиля
const nameForm = document.querySelector('.popup__input_string_name'); // поле имени в попапе редактирования профиля
const workForm = document.querySelector('.popup__input_string_work'); // поле деятельности в попапе редактирования профиля
const inputForm = document.querySelector('.popup__form'); // форма попапа редактирования профиля
const profileTitle = document.querySelector('.profile__title'); // имя в профиле на странице
const profileWork = document.querySelector('.profile__subtitle'); // название деятельности на странице
const openAddButton = document.querySelector('.profile__add-button'); // кнопка добавления изображений на странице 
const popupAddButton = document.querySelector('.popup_add_button'); // попап добавления изображений
const popupButtonSubmit  =  popupAddButton.querySelector ('.popup__submit'); // кнопка СОЗДАТЬ в попапе добавления изображений
const popupCloseAddButton = document.querySelector('.popup__close-button-add'); // кнопка закрытия попапа добавления изображений
const popupImage =document.querySelector('.popup_image'); //попап  изображения
const popupCloseButtonZoom = document.querySelector('.popup__close-button-zoom'); // кнопка закрытия увеличенного изображения
const sectionElements = document.querySelector('.elements'); //контейнер с изображениями на странице
const imageElements = document.querySelector('#image-elements'); // клонирование изображений
const imgAddForm = popupAddButton.querySelector('.popup__form');//форма попапа добавления изображений
const elementParagraph = document.querySelector ('.popup__paragraph');// текст в попапе увеличенного изображения
const popupBigImage = document.querySelector ('.popup__img'); // увеличенное изображение в попапе
const strigNamePhoto = document.querySelector ('.popup__input_string_name-photo'); // поле ввода наименования места в попапе добавления изображения
const stringLinkPhoto = document.querySelector ('.popup__input_string_link'); //поле ввода ссылки в попапе добавления изображения
const popupOpened  = document.querySelector ('.popup_opened'); //файл для открытия попапа

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
    closePopup (popupOpened);
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

 // функция перевод в не активное состояние кнопки Создать
 function disableButtonSubmit () {
  popupButtonSubmit.classList.add('.popup__submit_disablet');
  popupButtonSubmit.disabled = true;
 }

// функция обработчик формы попапа редактирования профиля
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameForm.value;
  profileWork.textContent = workForm.value;
  closePopup (popupButtonEdit);
}

// функция для иnпутов
function fillProfileInputs () {
  nameForm.value = profileTitle.textContent;
  workForm.value = profileWork.textContent;
}

// функция преобразования добавления изображений
function createCard (item) {
  const elementPhoto = imageElements.content.cloneNode(true);
  const elementText = elementPhoto.querySelector ('.element__text');
  elementText.textContent = item.name;
  const elementImage = elementPhoto.querySelector ('.element__image');
  elementImage.src = item.link;
  elementImage.alt = item.name;
  const elementButtonDelete = elementPhoto.querySelector ('.element__button-delete');
  elementButtonDelete.addEventListener ('click', deleteElementPhoto);
  const elementButtonLike = elementPhoto.querySelector ('.element__button');
  elementButtonLike.addEventListener ('click', toggleLike);
  elementImage.addEventListener ('click', function () {
   openPopupBigImage (item);
  });
  return elementPhoto;
};

//функция открытия большого изображения
function openPopupBigImage (data) {
 elementParagraph.textContent =  data.name;
 popupBigImage.src = data.link;
 popupBigImage.alt = data.name;
 openPopup (popupImage);
}

//функция удаления изображений
function deleteElementPhoto (evt) {
 evt.target.closest ('.element').remove();
}

// функция для лайка
function toggleLike (evt) {
  evt.target.classList.toggle('element__button_active');
}

//функция добавления новых изображений в начало секции 
function renderInitialCards () {
  const elements = initialElements.map(function (item) {
  const newElement = createCard (item);
  return newElement;  
  })
  sectionElements.append (...elements);
}

function addElement (evt) {
  evt.preventDefault();
  const newStringNamePhoto = strigNamePhoto.value;
  const newStringLinkPhoto = stringLinkPhoto.value;
  const newElement = createCard ({name: newStringNamePhoto, link: newStringLinkPhoto});
  sectionElements.prepend(newElement);
  imgAddForm.reset ();
  closePopup (popupAddButton);
};

//вызовы функций 
openEditButton.addEventListener('click', function() {
  fillProfileInputs ();
  openPopup (popupButtonEdit)
});
profileCloseButton.addEventListener ('click', function () {
  closePopup (popupButtonEdit)
});

inputForm.addEventListener ('submit', handleProfileFormSubmit);

openAddButton.addEventListener ('click', function () {
  openPopup (popupAddButton)
});

popupCloseAddButton.addEventListener ('click', function () {
  closePopup (popupAddButton)
});

renderInitialCards ();

imgAddForm.addEventListener('submit', addElement);

popupCloseButtonZoom.addEventListener ('click', function () {
  closePopup (popupImage);
});

popupButtonEdit.addEventListener ('click', clickOnBackground);
popupAddButton.addEventListener ('click', clickOnBackground);
popupImage.addEventListener ('click', clickOnBackground);


openAddButton.addEventListener ('click', function () {
  disableButtonSubmit ();
  imgAddForm.reset();
  openPopup (popupAddButton);
 });


















