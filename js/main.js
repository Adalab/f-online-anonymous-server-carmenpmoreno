const buttonOpen = document.querySelector('.nav-trigger');
const buttonClose = document.querySelector('.nav-close');
const navContainer = document.querySelector('.nav');
const pageContainer = document.querySelector('.page');

buttonOpen.addEventListener('click', handleButtonOpenClick);

function handleButtonOpenClick(event) {
    navContainer.classList.add('nav__opened');
    navContainer.classList.remove('nav');
    // pageContainer.classList.add('page__menu-opened')
    buttonOpen.classList.add('nav-trigger__hidden');
}

buttonClose.addEventListener('click', handleButtonCLoseClick);

function handleButtonCLoseClick(event) {
    navContainer.classList.remove('nav__opened');
    navContainer.classList.add('nav');
    // pageContainer.classList.remove('page__menu-opened');
    buttonOpen.classList.remove('nav-trigger__hidden');
}
