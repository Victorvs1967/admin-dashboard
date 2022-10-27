const MENU_OPENED_CLASS = 'active';

// Burger menu support
const main = document.querySelector('.main'),
  navigation = document.querySelector('.navigation'),
  control = document.querySelector('.burger-menu__control'),
  burger = document.querySelector('.burger__item'),
  close = document.querySelector('.close__item'),
  links = document.querySelectorAll('.main-nav__link');

const openMenu = () => {
  main.classList.add(MENU_OPENED_CLASS);
  navigation.classList.add(MENU_OPENED_CLASS);
  burger.style.display = 'none';
  close.style.display = 'block';
};

const closeMenu = () => {
  main.classList.remove(MENU_OPENED_CLASS);
  navigation.classList.remove(MENU_OPENED_CLASS);
  burger.style.display = 'block';
  close.style.display = 'none';
};

export const burgerMenu = () => {
  control.addEventListener('click', () => main.classList.contains(MENU_OPENED_CLASS) ? closeMenu() : openMenu());
  // control.addEventListener('click', () => body.classList.contains(MENU_OPENED_CLASS) ? closeMenu() : openMenu());
  // links.forEach(link => link.addEventListener('click', () => closeMenu()));
};
