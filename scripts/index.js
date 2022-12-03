const popupButtonEdit = document.querySelector('.popup_button_edit'); // попап редактирования профиля
const openEditButton = document.querySelector('.profile__edit-button'); // кнопка редактирования профиля
const closePopupButton = document.querySelector('.popup__close-button'); // кнопка закрытия редактирования профиля

const nameForm = document.querySelector('.popup__input_string_name'); // поле имени в попапе редактирования профиля
const workForm = document.querySelector('.popup__input_string_work'); // поле деятельности в попапе редактирования профиля
const inputForm = document.querySelector('.popup__form'); // форма попапа редактирования профиля
const profileTitle = document.querySelector('.profile__title'); // имя в профиле на странице
const profileWork = document.querySelector('.profile__subtitle'); // название деятельности на странице

const openAddButton = document.querySelector('.profile__add-button'); // кнопка добавления изображений на странице 
const popupAddButton = document.querySelector('.popup__add-button'); // попап добавления изображений 
const popupCloseAddButton = document.querySelector('.popup__close-button-add'); // кнопка закрытия попапа добавления изображений

const popupImage =document.querySelector('.popup__image'); //попап  изображения
const popupCloseButtonZoom = document.querySelector('.popup__close-button-zoom'); // кнопка закрытия увеличенного изображения


const sectionElements = document.querySelector('.elements'); //контейнер с изображениями на странице
const imageElements = document.querySelector('#image-elements'); // клонирование изображений
const imgAddForm = popupAddButton.querySelector('.popup__form');//форма попапа добавления изображений

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


//фунция открытия попапа 
const openPopupList = (openPopup) => {
  openPopup.classList.add('popup_opened');  
};

//функция закрытия попапа 
const closePopupList = (closePopup) => { 
  closePopup.classList.remove('popup_opened');
 };

// функция обработчик формы попапа редактирования профиля
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileTitle.textContent = nameForm.value;
    profileWork.textContent = workForm.value;
    closePopupList(popupButtonEdit);
}

// функция для иnпутов
function profileInput () {
  nameForm.value = profileTitle.textContent;
  workForm.value = profileWork.textContent;
}

// функция преобразования добавления изображений 
function elementAddButton (item) {
  const elementPhoto = imageElements.content.cloneNode(true);
  const elementText = elementPhoto.querySelector ('.element__text');
  elementText.textContent = item.name;

  const elementImage = elementPhoto.querySelector ('.element__image');
  elementImage.src = item.link;

  const elementButtonDelete = elementPhoto.querySelector ('.element__button-delete');
  elementButtonDelete.addEventListener ('click', deleteElementPhoto);

  const elementButtonLike = elementPhoto.querySelector ('.element__button');
  elementButtonLike.addEventListener ('click', deleteElementButtonLike);

  elementImage.addEventListener ('click', function () {
   openPopupBigImage (item);
  });
  
  popupCloseButtonZoom.addEventListener ('click', function () {
    closePopupList(popupImage);
  });

  return elementPhoto;
  
};

//функция открытия большого изображения
function openPopupBigImage (data) {
  const elementParagraph = document.querySelector ('.popup__paragraph');
  elementParagraph.textContent =  data.name;

  const popupBigImage = document.querySelector ('.popup__img');
  popupBigImage.src = data.link;

  openPopupList (popupImage);
}

//функция удаления изображений
function deleteElementPhoto (evt) {
  evt.target.closest ('.element').remove();
}

// функция для лайка
function deleteElementButtonLike (evt) {
  evt.target.classList.toggle('element__button_active');
}

//функция добавления новых изображений в начало секции 
function elementRender () {
  const element = initialElements.map(function (item) {
  const newElement = elementAddButton (item);
  return newElement;  
  })
  sectionElements.append (...element);
}

function elementAdd (evt) {
  evt.preventDefault();

  const strigNamePhoto = document.querySelector ('.popup__input_string_name-photo');
  const stringLinkPhoto = document.querySelector ('.popup__input_string_link');

  const newStringNamePhoto = strigNamePhoto.value;
  const newStringLinkPhoto = stringLinkPhoto.value;

  const newElement = elementAddButton({name: newStringNamePhoto, link: newStringLinkPhoto});

  sectionElements.prepend(newElement);

  imgAddForm.reset ();
  closePopupList (popupAddButton);
};

//вызовы функций открытия-закрытия
openEditButton.addEventListener('click', function() {
  profileInput ();
  openPopupList (popupButtonEdit)
});

closePopupButton.addEventListener ('click', function () {
  closePopupList(popupButtonEdit)
});

inputForm.addEventListener ('submit', formSubmitHandler);

openAddButton.addEventListener ('click', function () {
  openPopupList (popupAddButton)
});

popupCloseAddButton.addEventListener ('click', function () {
  closePopupList (popupAddButton)
});

elementRender ();
imgAddForm.addEventListener('submit', elementAdd);




















