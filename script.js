const popapElement = document.querySelector('.popap');
const formInput = document.querySelectorAll('.popap__input');
const closeButton = document.querySelector('.popap__close');
const openButton = document.querySelector('.profile__editButton');
const submit = document.querySelector('.popap__close');


openButton.addEventListener ('click', function() {
    popapElement.classList.add('popap__open');
    formInput.values = formInput.textContent;
});


function close() { 
 popapElement.classList.remove('popap__open')
};

closeButton.addEventListener('click', close);


function buttonSubmit (evt) {
    evt.preventDefault();
    formInput.textContent = formInput.value;
    close();
}

submit.addEventListener('submit', buttonSubmit);