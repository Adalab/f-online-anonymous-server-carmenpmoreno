const buttonOpen = document.querySelector('.nav-trigger');
const buttonClose = document.querySelector('.nav-close');
const navContainer = document.querySelector('.nav');
const pageContainer = document.querySelector('.page');

buttonOpen.addEventListener('click', handleButtonOpenClick);

function handleButtonOpenClick(event) {
    navContainer.classList.add('nav__opened');
    navContainer.classList.remove('nav');
    buttonOpen.classList.add('nav-trigger__hidden');
}

buttonClose.addEventListener('click', handleButtonCLoseClick);

function handleButtonCLoseClick(event) {
    navContainer.classList.remove('nav__opened');
    navContainer.classList.add('nav');
    buttonOpen.classList.remove('nav-trigger__hidden');
}
