const modalProfileEdit = document.querySelector('.popup_button_edit') // попап редактирования профиля
const modalProfileEditButtonOpen = document.querySelector('.profile__edit-button')// кнопка открытия попапа редактирования профиля
const modalProfileEditButtonClose = document.querySelector('.popup__close-button') // кнопка закрытия попапа редактирования профиля
const profileNameInput = document.querySelector('.popup__input_string_name') // инпут имени попапа редактирования профиля
const profileAboutInput = document.querySelector('.popup__input_string_work') // инпут описания попапа редактирования профиля
const modalWindowForm = document.querySelector('.popup__form') // форма попапа
const modalAddForm = document.querySelector('.popup_add_button') // попап добавления карточек
const modalAddFormButtonOpen = document.querySelector('.profile__add-button') // кнопка попапа добавления карточек
const modalAddFormButtonClose = document.querySelector('.popup__close-button-add') // кнопка попапа добавления карточек
const modalFigurePopup = document.querySelector('.popup_image') // Попап с изображением
const modalFigurePopupCloseButton = document.querySelector('.popup__close-button-zoom') // Кнопка закрытия попапа с изображением
const submitButtonAddForm = modalAddForm.querySelector('.popup__submit') //Кнопка сабмита в попапе добавления карточки
const elementsContainer = document.querySelector('.elements')
const cardAddForm = modalAddForm.querySelector('.popup__form')
const popupParagraph = document.querySelector('.popup__paragraph')
const popupImage = document.querySelector('.popup__img')
const placeName = document.querySelector('.popup__input_string_name-photo')
const placeUrl = document.querySelector('.popup__input_string_link')
const modalAvatarEdit = document.querySelector('.popup_avatar-edit') // попап редактирования аватара профиля
const avatarEditForm = modalAvatarEdit.querySelector('.popup__form')
const avatarEditButton = document.querySelector('.profile__avatar-edit-button')

const cardSelector = '#image-elements' // селектор темплейт элемента
const popupBigImgSelector = '.popup_image' // селектор попапа с изображением
const elementsContainerSelector = '.elements' // селектор контейнера карточек
const profileNameSelector = '.profile__title' // селектор имени профиля
const profileAboutSelector = '.profile__subtitle' // селектор описания профиля
const popupCardAddSelector = '.popup_add_button' // селектор попапа с формой добавления
const popupProfileEditSelector = '.popup_button_edit' // селектор попапа с формой редактирования профиля
const popupDeleteConfirmSelector = '.popup_confirm-delete' // селектор попапа с подтверждением удаления карточки
const popupAvatarEditSelector = '.popup_avatar-edit' // селектор попапа редактирования аватара профиля
const profileAvatarSelector = '.profile__avatar-image'

const selectors = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error-input_active'
}

export {
  modalProfileEdit,
  modalProfileEditButtonOpen,
  modalProfileEditButtonClose,
  profileNameInput,
  profileAboutInput,
  modalWindowForm,
  modalAddForm,
  modalAddFormButtonOpen,
  modalAddFormButtonClose,
  modalFigurePopup,
  modalFigurePopupCloseButton,
  submitButtonAddForm,
  elementsContainer,
  cardAddForm,
  popupParagraph,
  popupImage,
  placeName,
  placeUrl,
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
};