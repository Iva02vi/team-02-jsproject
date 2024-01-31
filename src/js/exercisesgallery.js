import axios from 'axios';
import iziToast from 'izitoast';
import { openModalWindEx } from './modal-window-exercise.js';

const exercisesTitle = document.querySelector('.exercises-gallery-label');
const exercisesGallery = document.querySelector('.exercises-gallery-group');
const filterButton = document.querySelector('.exercises-gallery-filter');
const pageButtonsContainer = document.querySelector('.page-buttons-container');
let titleExerciseSpan = null;
const titleExerciseSlash = document.createElement('span');
const inputSearchValue = document.querySelector('#filtre-key');
const searchExerciseForm = document.querySelector('.search-tool');
const svgArrowUrl = new URL('/img/sprite.svg#icon-arrow', import.meta.url);

const cardErrorMessage = document.querySelector('.error-card-message');

const BASE_URL = 'https://energyflow.b.goit.study/api/';
let page = 1;

const pageContent = {
  content: null,
  title: null,
};

const baseURL = 'https://energyflow.b.goit.study/api/filters';
let urlOptions = {
  filter: 'Muscles',
  page: 1,
  limit: 8,
};
const filterBodypart = 'bodypart';
let toggle = 'filter';
const defaultFilter = 'muscles';
const axiosInstance = axios.create({
  baseURL: baseURL,
});

function renderExercises(images) {
  exercisesGallery.innerHTML = '';
  const newImages = images.results.map(image => {
    return `<li class="exercises-item-background">
      <a href="${image.imgUrl}">
      <div>
        <img
          class="exercises-item"
          src="${image.imgUrl}"
          alt="${image.name}">
          <div class="text-card">
          <p class = "name-card">${image.name}</p>
          <p class = "type-card">${image.filter}</p>
          </div>
          </div>
      </a>
    </li>`;
  });

  exercisesGallery.insertAdjacentHTML('beforeend', newImages.join(''));
  return images;
}

let workoutCountPages = 0;

filterButton.addEventListener('click', function (event) {
  clearExerciseTitle();
  closeErrorMessage();
  workoutCountPages = 0;
  searchExerciseForm.style.display = 'none';
  if (event.target.tagName === 'BUTTON') {
    toggle = 'filter';
    const buttonName = event.target.getAttribute('name');
    handleFilter(buttonName);
  }
});

function handleFilter(buttonName) {
  searchExerciseForm.style.display = 'none';

  let selectedFilter = {};
  galleryForDesktop();
  switch (buttonName) {
    case 'body':
      urlOptions.filter = 'Body parts';
      selectedFilter = filterButton.querySelectorAll(
        `button[name="${buttonName}"]`
      );
      break;
    case 'equipment':
      urlOptions.filter = 'Equipment';
      selectedFilter = filterButton.querySelectorAll(
        `button[name="${buttonName}"]`
      );
      break;
    default:
      urlOptions.filter = 'Muscles';
      selectedFilter = filterButton.querySelectorAll(
        `button[name="${buttonName}"]`
      );
  }
  changeButtonColor(selectedFilter);

  const queryStr = new URLSearchParams(urlOptions).toString();
  const apiUrl = `?${queryStr}`;
  fetchExercises(apiUrl)
    .then(images => renderExercises(images))
    .then(imgages => renderPagesIcon(imgages.totalPages))
    .catch(error => console.error(error));
}

function fetchUrl() {
  const queryStr = new URLSearchParams(urlOptions).toString();
  const apiUrl = `?${queryStr}`;
  fetchExercises(apiUrl)
    .then(images => renderExercises(images))
    .catch(error => console.error(error));
}

async function fetchExercises(apiUrl) {
  try {
    const response = await axiosInstance.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

function changeButtonColor(selectedFilter) {
  const buttons = filterButton.querySelectorAll('button');
  const selectedFilterArray = Array.from(selectedFilter);
  for (let i = 0; i < buttons.length; i++) {
    const currentButton = buttons[i];
    if (selectedFilterArray.includes(currentButton)) {
      currentButton.style.backgroundColor = 'var(--dark-gray)';
      currentButton.style.color = 'var(--white)';
    } else {
      currentButton.style.backgroundColor = 'var(--white-smoke)';
      currentButton.style.color = 'var(--black)';
    }
  }
}

function renderPagesIcon(totalPages, activePage) {
  let pagesMarkup = '';
  pageButtonsContainer.innerHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    if (i == activePage) {
      pagesMarkup += `<li>
      <button class="page-button active" type="button" id="${i}">${i}</button>
    </li>`;
    } else {
      pagesMarkup += `<li>
      <button class="page-button" type="button" id="${i}">${i}</button>`;
    }
  }
  pageButtonsContainer.insertAdjacentHTML('afterbegin', pagesMarkup);
}

pageButtonsContainer.addEventListener('click', function (event) {
  const clickedButton = event.target.closest('.page-button');

  if (clickedButton) {
    const buttonValue = clickedButton.id;

    changeActiveButton(buttonValue);
  }
});

function changeActiveButton(index) {
  const buttons = document.querySelectorAll('.page-button');

  buttons.forEach(button => {
    if (button.id === index) {
      button.classList.add('active');
      switch (toggle) {
        case 'filter':
          urlOptions.page = index;
          fetchUrl();
          break;
        case 'workout':
          page = index;
          const cardQueryParams = { limit: adjustLimit(), page: page };
          cardQueryParams[pageContent.content] = pageContent.title;
          getListExercisesByName(cardQueryParams);
          break;
      }
    } else {
      button.classList.remove('active');
    }
  });
}

window.addEventListener('resize', event => {
  event.preventDefault();
  galleryForDesktop();
  handleFilter(defaultFilter);
  changeActiveButton(1);
});

function galleryForDesktop() {
  const widthScreen = document.documentElement.clientWidth;

  if (widthScreen > 1440) {
    urlOptions.page = 1;
    urlOptions.limit = 12;
  } else {
    urlOptions.page = 1;
    urlOptions.limit = 8;
  }
}

handleFilter(defaultFilter);

exercisesGallery.addEventListener('click', event => {
  event.preventDefault();
  const cardElement = event.target.closest('.exercises-item-background');

  if (cardElement) {
    toggle = 'workout';
    searchExerciseForm.style.display = 'flex';
    const name = cardElement.querySelector('.name-card').textContent;
    let filter = cardElement
      .querySelector('.type-card')
      .textContent.toLowerCase()
      .replace(/\s/g, '');
    if (filter === 'bodyparts') {
      filter = filter.slice(0, -1);
    }

    buildWorkoutGallery(name, filter);

    if (workoutCountPages === 0) return;
    if (workoutCountPages >= 3) {
      renderPagesIcon(3);
    } else {
      renderPagesIcon(workoutCountPages);
    }
  }
});

function cleanAll() {
  closeErrorMessage();
  clearExerciseTitle();
  exercisesGallery.innerHTML = '';
  pageButtonsContainer.innerHTML = '';
}

function ratingStarRow(rating) {
  let row = '';
  rating = Math.floor(rating);
  row += `
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
        </span>`;
  return row;
}

/* Search function */
searchExerciseForm.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.localName != 'svg') {
    return;
  }
  page = 1;

  const searchValue = inputSearchValue.value.trim();

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
  getListExercisesByName(cardQueryParams);
});

function adjustLimit() {
  const widthScreen = document.documentElement.clientWidth;
  if (widthScreen > 768) {
    return 12;
  }
  return 8;
}

function openErrorMessage() {
  cardErrorMessage.style.display = 'block';
}

function closeErrorMessage() {
  cardErrorMessage.style.display = 'none';
}
closeErrorMessage();

function buildWorkoutGallery(title, filter) {
  pageContent.title = title;
  pageContent.content = filter;
  page = 1;
  const cardQueryParams = { limit: adjustLimit(), page: page };
  cardQueryParams[pageContent.content] = title;
  updateTitle(title);
  getListExercisesByName(cardQueryParams);
}

async function getListExercisesByName(queryParams) {
  try {
    const res = await axios.get(`${BASE_URL}exercises`, {
      params: queryParams,
    });
    const { totalPages, results } = res.data;
    if (results.length == 0) {
      //   clearPaginationButton();
      openErrorMessage();
      return;
    }
    let renderExersisesByName = results.reduce((html, image) => {
      exercisesGallery.innerHTML = '';
      pageButtonsContainer.innerHTML = '';
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
            <button type="button" class="start-button" data-exercise-id=${image._id} >Start
                            <span class="arrow-icon">
                                <svg class="start-arrow-icon" width="16" height="16" aria-label="start-arrow">
                                    <use href=${svgArrowUrl}></use>
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

    exercisesGallery.insertAdjacentHTML('beforeend', renderExersisesByName);

    exercisesGallery.addEventListener('click', async (event) => {
      let id;
      const clickedButton = event.target;
      if (event.target && event.target.closest('.start-button')) {
        id = clickedButton.closest('.start-button').getAttribute('data-exercise-id');
        await openModalWindEx(id);
      }
      })
    toggle = 'workout';

    if (totalPages < 3) {
      renderPagesIcon(totalPages, queryParams.page);
    } else {
      renderPagesIcon(3, queryParams.page);
    }
  } catch (error) {
    console.log(error);
  }
}

function updateTitle(title) {
  titleExerciseSpan = document.createElement('span');
  titleExerciseSpan.classList.add('exercise-title-card');
  titleExerciseSpan.innerHTML = title;

  titleExerciseSlash.classList.add('exercises-gallery-label');
  titleExerciseSlash.innerHTML = ' / ';

  exercisesTitle.appendChild(titleExerciseSlash);
  exercisesTitle.appendChild(titleExerciseSpan);
}

function clearExerciseTitle() {
  if (titleExerciseSpan) {
    exercisesTitle.removeChild(titleExerciseSpan);
    exercisesTitle.removeChild(titleExerciseSlash);
    titleExerciseSpan = null;
    closeErrorMessage();
  }
}

async function getListExercisesByName(queryParams) {
  try {
    const res = await axios.get(`${BASE_URL}exercises`, {
      params: queryParams,
    });
    const { totalPages, results } = res.data;
    if (results.length == 0) {
      exercisesGallery.innerHTML = '';
      openErrorMessage();
      return;
    }

    let renderExersisesByName = results.reduce((html, image) => {
      const ratingRow = ratingStarRow(image.rating);
      const ratingNumber = Number(image.rating).toFixed(1);
      const name = adjustLengthName(image.name);
      return (
        html +
        `<li class="gallery-item-list">
                <div class="workout-header-wrap">
                        <div class= "workout-and-rating">
                            <p class="workout-item-title">WORKOUT</p>
                            <p class="rating-title-item">${ratingNumber}
                                ${ratingRow}
                            </p>
                            </div>
                        <div class="start-button-wrap">
                            <button type="button" class="start-button-item">Start
                                <svg class="start-workout-icon" width="14" height="14" aria-label="start-arrow">
                                    <use href="./img/sprite.svg#icon-arrow"></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                       <div class="workout-type-item">
                        <svg  width="24" height="24" aria-label="run-man">
                            <use href="./img/sprite.svg#icon-lighticon"></use>
                        </svg>
                        <p class="workout-name-item">${name}</p>
                    </div>
                <div class="workout-items-box">
                
                 
                    <div class="workout-description">
                        <p class="description-item-name">Burned calories:
                            <span class="description-item-value">${image.burnedCalories} / ${image.time} min</span>
                        </p>
                        <p class="description-item-name">Body part:
                            <span class="description-item-value">${image.bodyPart}</span>
                        </p>
                        <p class="description-item-name">Target:
                            <span class="description-item-value">${image.target}</span>
                        </p>
                    </div> 
            </li>`
      );
    }, '');
    // workoutCountPages = Math.ceil(res.data.totalPages / res.data.perPage);

    exercisesGallery.addEventListener('click', async (event) => {
      let id;
      const clickedButton = event.target;
      if (event.target && event.target.closest('.start-button')) {
        id = clickedButton.closest('.start-button').getAttribute('data-exercise-id');
        await openModalWindEx(id);
      }
      })

    workoutCountPages = res.data.totalPages;
    exercisesGallery.innerHTML = '';
    exercisesGallery.insertAdjacentHTML('beforeend', renderExersisesByName);
    toggle = 'workout';
  } catch (error) {
    console.log(error);
  }
}

function adjustLengthName(name) {
  const widthScreen = document.documentElement.clientWidth;
  let fontSize = 20;
  let boxWidth = 295;
  let factor = 0.75;
  if (widthScreen > 1440) {
    fontSize = 24;
    boxWidth = 424;
    factor = 0.85;
  } else if (widthScreen > 768) {
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
