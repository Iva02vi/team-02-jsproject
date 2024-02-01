import { openModalWindEx } from './modal-window-exercise';

const exercisesNotFound = document.querySelector(
  '.favorites-page-items-not-found'
);
const exercisesGallery = document.querySelector(
  '.favorites-page-items-gallery'
);
const favPageItems = document.querySelector('.favorites-page-items');
const mobilePagination = document.querySelector('.favorites-mobile-pagination');

const svgArrowUrl = new URL('/img/sprite.svg#icon-arrow', import.meta.url);
const KEY = 'favorites';
const storageFetch = localStorage.getItem(KEY);
let savedInStorageExercises = JSON.parse(storageFetch);
const svgLigthUrl = new URL('/img/sprite.svg#icon-lighticon', import.meta.url);
const svgTrashhUrl = new URL('/img/sprite.svg#icon-trash', import.meta.url);

const limitPerPage = 8;
let currentPage = 1;
let lastIdx = currentPage * limitPerPage;
let firstIdx = lastIdx - limitPerPage;
let markup = '';
let newStorageFetch;
let actualExercisesList;
let paginationButtons;
let totalPages;

function hideElem(elem) {
  elem.style.display = 'none';
  if (elem === exercisesGallery && innerWidth > 768) {
    favPageItems.style.paddingRight = '48px';
  }
}
function showElem(elem) {
  elem.style.display = 'flex';
  if (elem === exercisesGallery && innerWidth > 768) {
    favPageItems.style.paddingRight = '0';
  }
}

function renderExerciseCards(arr) {
  exercisesGallery.innerHTML = '';
  const galleryItems = arr.reduce(
    (html, card) =>
      html +
      `<li class="gallery-list-item">
        <div class="workout-box" id=${card._id}>
          <div class="workout-header">
              <div class="workout-header-wrap">
                  <span class="workout-title">WORKOUT</span>
                  <button type="button" class="delete-workout-btn" id="${card._id}">                            
                      <svg class="trash-icon" id="${card._id}" width="16" height="16" aria-label="trash-icon">
                        <use href=${svgTrashhUrl} id="${card._id}"></use>
                      </svg>
                  </button>
              </div>
              <div class="start-button-wrap">Start
                  <svg class="start-arrow-icon" id=${card._id} width="14" height="14" aria-label="start-arrow">
                    <use href=${svgArrowUrl}></use>
                  </svg>
              </div>
          </div>
          <div class="workout-type">
              <svg class="run-man-icon" width="24" height="24" aria-label="run-man">
                  <use href="${svgLigthUrl}"></use>
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
    if (clickedButton.className !== 'delete-workout-btn') {
      if (clickedButton && clickedButton.closest('.workout-box')) {
        id = clickedButton.closest('.workout-box').getAttribute('id');
        await openModalWindEx(id);
      }
    }
  });

  exercisesGallery.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.className === 'delete-workout-btn') {
      newStorageFetch = localStorage.getItem(KEY);
      actualExercisesList = JSON.parse(newStorageFetch);
      const filteredArr = actualExercisesList.filter(
        card => card._id !== event.target.id
      );
      localStorage.setItem(KEY, JSON.stringify(filteredArr));

      if (filteredArr.length === 0) {
        hideElem(exercisesGallery);
        showElem(exercisesNotFound);
        window.scrollBy({
          top: 700,
          behavior: 'smooth',
        });
        if (window.innerWidth < 768) {
          hideElem(mobilePagination);
        }
      } else {
        if (window.innerWidth < 768) {
          totalPages = Math.ceil(filteredArr.length / limitPerPage);
          markup = '';
          for (let i = 1; i <= totalPages; i++) {
            if (i === Number(currentPage)) {
              markup += `
                <li>
                  <button class="favorites-pagination-button fav-active-page" type="button" id="${i}">${i}</button>
                </li>`;
            } else {
              markup += `
                <li>
                  <button class="favorites-pagination-button" type="button" id="${i}">${i}</button>
                </li>`;
            }
          }
          mobilePagination.innerHTML = markup;
          lastIdx = currentPage * limitPerPage;
          firstIdx = lastIdx - limitPerPage;
          renderExerciseCards(filteredArr.slice(firstIdx, lastIdx));
          window.scrollBy({
            top: 700,
            behavior: 'smooth',
          });
        } else {
          renderExerciseCards(filteredArr);
        }
      }
    }
  });
}

export const renderFavorites = () => {
  if (window.innerWidth < 768) {
    showElem(mobilePagination);
  }

  if (window.innerWidth < 768) {
    markup = '';
    mobilePagination.innerHTML = '';
    totalPages = Math.ceil(savedInStorageExercises.length / limitPerPage);
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1) {
        markup += `
          <li>
            <button class="favorites-pagination-button fav-active-page" type="button" id="${i}">${i}</button>
          </li>`;
      } else {
        markup += `
          <li>
            <button class="favorites-pagination-button" type="button" id="${i}">${i}</button>
          </li>`;
      }
    }
    mobilePagination.innerHTML = markup;
  
    renderExerciseCards(savedInStorageExercises.slice(firstIdx, lastIdx));
  
    mobilePagination.addEventListener('click', event => {
      event.preventDefault();
      if (event.target.classList.value.includes('favorites-pagination-button')) {
        currentPage = event.target.id;
        lastIdx = currentPage * limitPerPage;
        firstIdx = lastIdx - limitPerPage;
        newStorageFetch = localStorage.getItem(KEY);
        actualExercisesList = JSON.parse(newStorageFetch);
        renderExerciseCards(actualExercisesList.slice(firstIdx, lastIdx));
  
        const clickedButton = event.target.closest(
          '.favorites-pagination-button'
        );
        paginationButtons = document.querySelectorAll(
          '.favorites-pagination-button'
        );
        paginationButtons.forEach(button => {
          if (button.id === clickedButton.id) {
            button.classList.add('fav-active-page');
          } else {
            button.classList.remove('fav-active-page');
          }
        });
        window.scrollBy({
          top: 700,
          behavior: 'smooth',
        });
      }
    });
  }
  
  savedInStorageExercises = JSON.parse(localStorage.getItem(KEY)) || {};
  if (!savedInStorageExercises || savedInStorageExercises.length === 0) {
    hideElem(exercisesGallery);
    showElem(exercisesNotFound);
  } else {
    hideElem(exercisesNotFound);
    renderExerciseCards(savedInStorageExercises);
  }
  totalPages = Math.ceil(savedInStorageExercises.length / 3);
};
