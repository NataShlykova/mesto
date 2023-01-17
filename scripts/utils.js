
 // функция звкрытия попапа нажатием на Escape
const closeClickEsc = (evt) => {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened');
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


export {openPopup, closeClickEsc, closePopup};