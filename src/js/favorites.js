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
  elem.style.display = 'none';
}
function showElem(elem) {
  elem.style.display = 'flex';
}

if (window.innerWidth < 768) {
  showElem(mobilePagination);
}
function renderExerciseCards(arr) {
  exercisesGallery.innerHTML = '';
  const galleryItems = arr.reduce(
    (html, card) =>
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
                        <h3 class="workout-name">${card.name}</h3>
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
            </li>`,
    ''
  );
  exercisesGallery.innerHTML = galleryItems;

  exercisesGallery.addEventListener('click', async event => {
    let id;
    const clickedButton = event.target;
    console.log(clickedButton);
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
