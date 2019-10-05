import './styles.css';
import menu from './menu.json';
import menuItem from './menu_item_template.hbs';
import { brotliDecompress } from 'zlib';

const menuContainer = document.querySelector('#menu');

const menuMarkup = menu.reduce((acc, item) => {
  return acc + menuItem(item);
}, '');

menuContainer.innerHTML = menuMarkup;

// Theme switching
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('#body');

const switcher = document.querySelector('#theme-switch-control');
switcher.addEventListener('change', handleCLick);

const savedTheme = localStorage.getItem('theme');

if (savedTheme === Theme.LIGHT) {
  addLightThemeClass();
} else {
  addDarkThemeClass();
  switcher.setAttribute('checked', true);
}

function handleCLick() {
  body.classList.toggle(Theme.DARK);

  if (body.classList.contains(Theme.DARK)) {
    removeLightThemeClass();
    setToLocalStorageDarkMode();
  } else {
    addLightThemeClass();
    setToLocalStorageLightMode();
  }
}

function addLightThemeClass() {
  body.classList.add(Theme.LIGHT);
}

function removeLightThemeClass() {
  body.classList.remove(Theme.LIGHT);
}

function addDarkThemeClass() {
  body.classList.add(Theme.DARK);
}

function setToLocalStorageLightMode() {
  localStorage.setItem('theme', Theme.LIGHT);
}

function setToLocalStorageDarkMode() {
  localStorage.setItem('theme', Theme.DARK);
}
