import '../css/styles.css';

import fetchImagesService from './apiService.js';
import galleryItemsTemplate from '../templates/img_card_template.hbs';

import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import * as basicLightbox from 'basiclightbox';
import InfiniteScroll from 'infinite-scroll';

PNotify.defaults.styling = 'material';
PNotify.defaults.icons = 'material';
PNotify.defaults.delay = 2500;

PNotify.info(
  'Hi! Please enter in a form what kind of pictures you want to find.',
);

const refs = {
  form: document.querySelector('#search-form'),
  galleryList: document.querySelector('.gallery'),
  btnLoadMore: document.querySelector('button[name="load-more"]'),
};

refs.btnLoadMore.setAttribute('disabled', true);

refs.form.addEventListener('submit', handleSubmit);
refs.btnLoadMore.addEventListener('click', handleClick);
refs.galleryList.addEventListener('click', handleGalleryClick);

function handleGalleryClick(e) {
  if (e.target === e.currentTarget) return;
  basicLightbox.create(`<img src="${e.target.dataset.source}">`).show();
}

function handleSubmit(event) {
  event.preventDefault();
  const input = event.currentTarget.elements.query;

  fetchImagesService.searchQuery = input.value;
  clearGalleryList();
  fetchImagesService.resetPage();
  renderMarkup();
  refs.btnLoadMore.removeAttribute('disabled');

  input.value = '';
}

function handleClick() {
  renderMarkup();

  const lastChild = refs.galleryList.lastElementChild;

  window.scroll({
    behavior: 'smooth',
  });

  lastChild.scrollIntoView();
}

function createGalleryItemsMarkup(item) {
  const galleryMarkup = galleryItemsTemplate(item);
  refs.galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
}

function renderMarkup() {
  fetchImagesService
    .fetchImages()
    .then(data => {
      PNotify.success('Take these wonderful pic');
      createGalleryItemsMarkup(data);
    })
    .catch(error => {
      PNotify.error('Something went wrong');
    });
}

function clearGalleryList() {
  refs.galleryList.innerHTML = '';
}
