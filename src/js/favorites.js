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

function renderPaginationButtons() {
  mobilePagination.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('favorites-mobile-pagination');
    button.textContent = i;
    button.classList.add('favorites-pagination-button');
    button.addEventListener('click', () => {
      currentPage = i;
      renderExerciseCards(savedInStorageExercises);
    });

    mobilePagination.appendChild(button);
  }
}

export const renderFavorites = () => {
  savedInStorageExercises = JSON.parse(localStorage.getItem(KEY)) || [];

  if (!savedInStorageExercises || savedInStorageExercises.length === 0) {
    hideElem(exercisesGallery);
    hideElem(mobilePagination);
  } else {
    hideElem(exercisesNotFound);
    showElem(exercisesGallery);
    showElem(mobilePagination);
    totalPages = Math.ceil(savedInStorageExercises.length / limitPerPage);
    renderPaginationButtons();
    renderExerciseCards(savedInStorageExercises);
  }
};

function renderExerciseCards(arr) {
  const startIndex = (currentPage - 1) * limitPerPage;
  const endIndex = startIndex + limitPerPage;

  const visibleExercises = arr.slice(startIndex, endIndex);

  exercisesGallery.innerHTML = '';

  const galleryItems = visibleExercises.reduce((html, card) => {
    const nameSliced = adjustLengthName(card.name);
    return (
      html +
      `<li class="gallery-list-item">
            <div class="workout-box">
                    <div class="workout-header">
                        <div class="workout-header-wrap">
                            <span class="workout-title">WORKOUT</span>
                            <button type="button" class="delete-workout-btn" id="${card._id}">                            
                                <svg class="trash-icon" id="${card._id}" width="16" height="16" aria-label="trash-icon">
                                  <use href=${svgTrashhUrl} id="${card._id}"></use>
                                </svg>
                            </button>
                        </div>
                        <div class="start-button-wrap">
                            <button type="button" class="start-button-item" id=${card._id}>Start
                                <svg class="start-arrow-icon" id=${card._id} width="14" height="14" aria-label="start-arrow">
                                  <use href=${svgArrowUrl}></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="workout-type">
                        <svg class="run-man-icon" width="24" height="24" aria-label="run-man">
                            <use href=${svgLigthUrl}></use>
                        </svg>
                        <h3 class="workout-name">${nameSliced}</h3>
                    </div>
                    <div class="workout-description">
                        <p class="description-item-name">Burned calories:
                            <span class="description-item-value">${card.burnedCalories} / ${card.time} min</span>
                        </p>
                        <p class="description-item-name">Body part:
                            <span class="description-item-value">${card.bodyPart}</span>
                        </p>
                        <p class="description-item-name">Target:
                            <span class="description-item-value">${card.target}</span>
                        </p>
                    </div>
                </div>
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
