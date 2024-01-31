import { openModalWindEx } from './modal-window-exercise';

const exercisesNotFound = document.querySelector(
  '.favorites-page-items-not-found'
);
const exercisesGallery = document.querySelector(
  '.favorites-page-items-gallery'
);
const mobilePagination = document.querySelector('.favorites-mobile-pagination');

const svgArrowUrl = new URL('/img/sprite.svg#icon-arrow', import.meta.url);
const svgLigthUrl = new URL('/img/sprite.svg#icon-lighticon', import.meta.url);
const svgTrashhUrl = new URL('/img/sprite.svg#icon-trash', import.meta.url);

const KEY = 'favorites';
let savedInStorageExercises = JSON.parse(localStorage.getItem(KEY));

const limitPerPage = 3;
let currentPage = 1;
let totalPages;

function hideElem(elem) {
  if (elem) {
    elem.style.display = 'none';
  }
}

function showElem(elem) {
  if (elem) {
    elem.style.display = 'flex';
  }
}

if (window.innerWidth < 768) {
  showElem(mobilePagination);
}

function renderExerciseCards(arr) {
  if (!exercisesGallery) {
    return; // Перевірка на наявність елементу exercisesGallery
  }

  exercisesGallery.innerHTML = '';

  const galleryItems = arr.reduce((html, card) => {
    const nameSliced = adjustLengthName(card.name);
    return (
      html +
      `<li class="gallery-list-item">
          <!-- ваш код тут -->
        </li>`
    );
  }, '');
  exercisesGallery.innerHTML = galleryItems;

  exercisesGallery.addEventListener('click', async event => {
    let id;
    const clickedButton = event.target;
    if (clickedButton && clickedButton.closest('.start-button-item')) {
      id = clickedButton.closest('.start-button-item').getAttribute('id');
      await openModalWindEx(id);
    }
  });

  exercisesGallery.addEventListener('click', event => {
    if (event.target.className === 'delete-workout-btn') {
      const newStorageFetch = localStorage.getItem(KEY);
      const actualExercisesList = JSON.parse(newStorageFetch);
      const filteredArr = actualExercisesList.filter(
        card => card._id !== event.target.id
      );
      localStorage.setItem(KEY, JSON.stringify(filteredArr));

      if (filteredArr.length === 0) {
        hideElem(exercisesGallery);
        showElem(exercisesNotFound);
      } else {
        renderExerciseCards(filteredArr);
      }
    }
  });
}

export const renderFavorites = () => {
  savedInStorageExercises = JSON.parse(localStorage.getItem(KEY)) || {};
  if (!savedInStorageExercises || savedInStorageExercises.length === 0) {
    hideElem(exercisesGallery);
  } else {
    hideElem(exercisesNotFound);
    renderExerciseCards(savedInStorageExercises);
  }
  totalPages = Math.ceil(savedInStorageExercises.length / 3);
};

function adjustLengthName(name) {
  const widthScreen = document.documentElement.clientWidth;
  let fontSize = 20;
  let boxWidth = 295;
  let factor = 0.7;
  if (widthScreen >= 1440) {
    fontSize = 24;
    boxWidth = 424;
    factor = 0.85;
  } else if (widthScreen >= 768) {
    fontSize = 24;
    boxWidth = 313;
    factor = 0.8;
  }

  const maxCharacters = (boxWidth / (fontSize / 2)) * factor;
  if (name.length > maxCharacters) {
    return name.slice(0, maxCharacters) + '...';
  }
  return name;
}
