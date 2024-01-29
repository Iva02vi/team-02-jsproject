import axios from 'axios';
import iziToast from 'izitoast';

const galleryTitle = document.querySelector('.gallery-collection');
const galleryImage = document.querySelector('.gallery-item');
const galleryExercises = document.querySelector('.filtred-submit');
const galleryCardsList = document.querySelector('.gallery-list');
const exerciseTitle = document.querySelector('.exercise-title');
const cardPaginationButton = document.querySelector('.page-button-list');
const inputSearchValue = document.querySelector('.input-submit-key');
const searchExerciseForm = document.querySelector('.filtred-submit');

const BASE_URL = 'https://energyflow.b.goit.study/api/';
const muscleName = 'muscles';
const bodyPartName = 'bodypart';
const equipementName = 'equipment';
let page = 1;

const pageContent = {
  content: null,
  title: null,
};

const muscleButton = document.querySelector('.muscles');
muscleButton.classList.add('.active');
muscleButton.addEventListener('click', updateMusclesContent);

const bodyPartsButton = document.querySelector('.body-parts');
bodyPartsButton.addEventListener('click', updateBodyPartsContent);

const eqipementButton = document.querySelector('.equipment');
eqipementButton.addEventListener('click', updateEquipmentContent);

cardPaginationButton.addEventListener('click', event => {
  event.preventDefault();
  if (!(event.target.localName === 'button')) {
    return;
  }
  cleanAll();
  page = parseInt(event.target.value);
  const cardQueryParams = { limit: adjustLimit(), page: page };
  cardQueryParams[pageContent.content] = pageContent.title;
  getExercisesByName(cardQueryParams);
});

function updateMusclesContent() {
  cleanAll();
  const exerciseQueryParams = {
    limit: adjustLimit(),
    page: page,
    filter: 'Muscles',
  };
  pageContent.content = muscleName;
  getExercisesSet(exerciseQueryParams);
}

function updateBodyPartsContent() {
  cleanAll();
  const exerciseQueryParams = {
    limit: adjustLimit(),
    page: page,
    filter: 'Body parts',
  };
  pageContent.content = bodyPartName;
  getExercisesSet(exerciseQueryParams);
}

function updateEquipmentContent() {
  cleanAll();
  const exerciseQueryParams = {
    limit: adjustLimit(),
    page: page,
    filter: 'Equipment',
  };
  pageContent.content = equipementName;
  getExercisesSet(exerciseQueryParams);
}

function cleanAll() {
  closeErrorMessage();
  cleanGalleryList();
  cleanGalleryCardList();
}

async function getExercisesSet(queryParams) {
  try {
    const result = await axios.get(`${BASE_URL}filters`, {
      params: queryParams,
    });
    console.log(result);
    const { totalPages, results } = result.data;
    if (results.length == 0) {
      alert('NO MORE EXEERCISES');
      return console.log(results.data);
    }
    let renderExersises = results.reduce(
      (html, image) =>
        html +
        `<li class="gallery-item">
                        <a class="gallery-link" href="${image.imgUrl}">
                            <img class="gallery-image" data-source="${image.imgUrl}" src="${image.imgUrl}" alt="${image.name}" width="360" height="200"/>
                        </a>
                        <div class='title'>
                            <p>${image.name}</p>
                        </div>
                </li>`,
      ''
    );
    galleryTitle.insertAdjacentHTML('beforeend', renderExersises);
  } catch (error) {
    console.log(error);
  }
}

galleryTitle.addEventListener('click', event => {
  event.preventDefault();
  cleanAll();
  const title = event.target.alt;
  pageContent.title = title;
  page = 1;
  const cardQueryParams = { limit: adjustLimit(), page: page };
  cardQueryParams[pageContent.content] = title;
  updateTitle(title);
  getExercisesByName(cardQueryParams);
});

function updateTitle(title) {
  exerciseTitle.innerHTML = `Exercises / <span class="exercise-title-card"> ${title}</span>`;
}

async function getExercisesByName(queryParams) {
  try {
    const res = await axios.get(`${BASE_URL}exercises`, {
      params: queryParams,
    });
    const { totalPages, results } = res.data;
    if (results.length == 0) {
      clearPaginationButton();
      openErrorMessage();
      return;
    }
    let renderExersisesByName = results.reduce((html, image) => {
      const ratingRow = ratingStarRow(image.rating);
      return (
        html +
        `<li class="gallery-list-item">
                <div class="workout-box">
                    <div class="workout-rating">
                        <p class="workout-title">WORKOUT</p>
                        <p class="rating-title">${image.rating}
                          ${ratingRow}
                        </p>
                            <button type="button" class="start-button">Start
                            <span class="arrow-icon">
                                <svg class="start-arrow-icon" width="14" height="14" aria-label="start-arrow">
                                    <use href="./img/sprite.svg#icon-arrow"></use>
                                </svg>
                            </span>
                            </button>
                    </div>
                    <div class="workout-type">
                        <svg class="run-man-icon" width="24" height="24" aria-label="run-man">
                            <use href="../img/sprite.svg#icon-lighticon"></use>
                        </svg>
                        <p class="workout-name">${image.name}</p>
                    </div>
                    <div class="body-description">
                        <p class="burned-callories">Burned calories:
                            <span class="amount-callories">${image.burnedCalories}/${image.time} min</span>
                        </p>
                        <p class="filtred-class">Filtre:
                            <span class="filter-type">${pageContent.content}</span>
                        </p>
                        <p class="target">Target:
                        <span class="key-word">${image.target}</span>
                        </p>
                    </div>
                </div>
            </li>`
      );
    }, '');

    galleryCardsList.insertAdjacentHTML('beforeend', renderExersisesByName);
    cardPaginationButton.innerHTML = createCardPaginationButton(totalPages);
  } catch (error) {
    console.log(error);
  }
}

function cleanGalleryList() {
  galleryTitle.replaceChildren();
}

function cleanGalleryCardList() {
  galleryCardsList.replaceChildren();
}

function ratingStarRow(rating) {
  let row = '';
  rating = Math.floor(rating);
  for (let index = 0; index < rating; index++) {
    row += `
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
        </span>`;
  }
  return row;
}

function createCardPaginationButton(totalPages) {
  let row = '';
  const maxPages = Math.min(totalPages, 5);
  for (let index = 1; index <= maxPages; index++) {
    row += `<button class="button-next-page" value="${index}">${index}</button>`;
  }
  return row;
}

const cardErrorMessage = document.querySelector('.card-error-message');

function openErrorMessage() {
  cardErrorMessage.style.visibility = 'visible';
}

function closeErrorMessage() {
  cardErrorMessage.style.visibility = 'hidden';
}

searchExerciseForm.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.localName != 'svg') {
    return;
  }
  page = 1;

  const searchValue = inputSearchValue.value.trim();
  console.log(searchValue);

  if (searchValue.length === 0) {
    iziToast.error({
      title: 'Error',
      position: 'topCenter',
      message: 'Sorry, Please choose an exercise.',
    });
    return;
  }
  cleanAll();

  const cardQueryParams = {
    limit: adjustLimit(),
    page: page,
    keyword: searchValue,
  };
  cardQueryParams[pageContent.content] = pageContent.title;
  inputSearchValue.value = '';
  getExercisesByName(cardQueryParams);
});

function clearPaginationButton() {
  cardPaginationButton.replaceChildren();
}

function adjustLimit() {
  const widthScreen = document.documentElement.clientWidth;
  if (widthScreen > 768) {
    return 12;
  }
  return 8;
}

closeErrorMessage();
updateMusclesContent();
