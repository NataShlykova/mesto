const openEditButton = document.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close-button');
const nameForm = document.querySelector('.popup__input_string_name');
const workForm = document.querySelector('.popup__input_string_work');
const inputForm = document.querySelector('.popup__form');
const profileTitle = document.querySelector('.profile__title');
const profileWork = document.querySelector('.profile__subtitle');



function openPopup () {
    popupElement.classList.add('popup_opened');
    nameForm.value = profileTitle.textContent;
    workForm.value = profileWork.textContent;
}


function closePopup () { 
   popupElement.classList.remove('popup_opened');
};

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileTitle.textContent = nameForm.value;
    profileWork.textContent = workForm.value;
    closePopup ();
}


closePopupButton.addEventListener('click', closePopup);
openEditButton.addEventListener('click', openPopup);
inputForm.addEventListener('submit', formSubmitHandler);