import { openModalWindEx } from './modal-window-exercise';

const exercisesNotFound = document.querySelector(
  '.favorites-page-items-not-found'
);
const exercisesGallery = document.querySelector(
  '.favorites-page-items-gallery'
);

const svgArrowUrl = new URL('/img/sprite.svg#icon-arrow', import.meta.url);
const KEY = 'favorites';
const storageFetch = localStorage.getItem(KEY);
const savedInStorageExercises = JSON.parse(storageFetch);

const limitPerPage = 3;
let currentPage = 1;
let totalPages = Math.ceil(savedInStorageExercises.length / 3);

console.log(totalPages);
console.log(savedInStorageExercises);

function hideElem(elem) {
  elem.style.display = 'none';
}
function showElem(elem) {
  elem.style.display = 'flex';
}
function renderExerciseCards(arr) {
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
                                  <use href="./img/sprite.svg#icon-trash" id="${card._id}"></use>
                                </svg>
                            </button>
                        </div>
                        <div class="start-button-wrap">
                            <button type="button" class="start-button" id=${card._id}>Start
                                <svg class="start-arrow-icon" id=${card._id} width="14" height="14" aria-label="start-arrow">
                                  <use href=${svgArrowUrl}></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="workout-type">
                        <svg class="run-man-icon" width="24" height="24" aria-label="run-man">
                            <use href="./img/sprite.svg#icon-lighticon"></use>
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
}

if (storageFetch === null || savedInStorageExercises.length === 0) {
  hideElem(exercisesGallery);
} else {
  hideElem(exercisesNotFound);
  renderExerciseCards(savedInStorageExercises);
}

///
exercisesGallery.addEventListener('click', async event => {
  let id;
  const clickedButton = event.target;
  console.log(clickedButton);
  if (clickedButton && clickedButton.closest('.start-button')) {
    id = clickedButton.closest('.start-button').getAttribute('id');
    await openModalWindEx(id);
  }
});

exercisesGallery.addEventListener('click', event => {
  if(event.target.className === "delete-workout-btn") {
    const newStorageFetch = localStorage.getItem(KEY);
    const actualExercisesList = JSON.parse(newStorageFetch);
    const filteredArr = actualExercisesList.filter((card) => card._id !== event.target.id);
    localStorage.setItem(KEY, JSON.stringify(filteredArr));

    if(filteredArr.length === 0) {
        hideElem(exercisesGallery);
        showElem(exercisesNotFound);
    } else {
        renderExerciseCards(filteredArr);
    }
  }
});
