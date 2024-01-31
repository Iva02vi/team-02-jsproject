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
const searchButton = document.querySelector('.icon-search');
const svgArrowUrl = new URL('/img/sprite.svg#icon-arrow', import.meta.url);
const svgStarUrl = new URL('/img/sprite.svg#icon-Star-1', import.meta.url);
const svgLigthUrl = new URL('/img/sprite.svg#icon-lighticon', import.meta.url);

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
let workoutCountPages = 0;
let isSearchFormActive = false;
let toggle = 'filter';
const defaultFilter = 'muscles';
const axiosInstance = axios.create({
  baseURL: baseURL,
});

filterButton.addEventListener('click', function (event) {
  clearExerciseTitle();
  closeErrorMessage();
  workoutCountPages = 0;
  searchExerciseForm.style.display = 'none';
  if (event.target.tagName === 'BUTTON') {
    toggle = 'filter';
    const buttonName = event.target.getAttribute('name');
    handleWindowResize();
    handleFilter(buttonName);
  }
});

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

    handleWindowResize();
    buildWorkoutGallery(name, filter);

    if (workoutCountPages === 0) return;
    if (workoutCountPages >= 3) {
      renderPagesIcon(3);
    } else {
      renderPagesIcon(workoutCountPages);
    }
  }
});

pageButtonsContainer.addEventListener('click', function (event) {
  const clickedButton = event.target.closest('.page-button');

  if (clickedButton) {
    const buttonValue = clickedButton.id;

    changeActivePageButton(buttonValue);
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
  changeFilterColor(selectedFilter);

  const queryStr = new URLSearchParams(urlOptions).toString();
  const apiUrl = `?${queryStr}`;
  fetchExercises(apiUrl)
    .then(images => renderExercises(images))
    .then(imgages => renderPagesIcon(imgages.totalPages, 1))
    .catch(error => console.error(error));
}

function changeFilterColor(selectedFilter) {
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
      exercisesGallery.innerHTML = '';
      pageButtonsContainer.innerHTML = '';
      const ratingRow = ratingStarRow(image.rating);
      const ratingNumber = Number(image.rating).toFixed(1);
      const name = adjustLengthName(image.name);
      return (
        html +
        `<li class="gallery-item-list" >
                <div class="workout-header-wrap">
                        <div class="workout-and-rating">
                            <p class="workout-item-title">WORKOUT</p>
                            <p class="rating-title-item">${ratingNumber}
                                ${ratingRow}
                            </p>
                            </div>
                        <div class="start-button-wrap">
                            <button type="button" class="start-button-item" data-exercise-id=${image._id}>Start
                                <svg class="start-workout-icon" width="14" height="14" aria-label="start-arrow">
                                    <use href=${svgArrowUrl}></use>
                                </svg>
                            </button>
                        </div>
                    </div>
                       <div class="workout-type-item">
                        <svg  width="24" height="24" aria-label="run-man">
                            <use href=${svgLigthUrl}></use>
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

    workoutCountPages = res.data.totalPages;
    exercisesGallery.innerHTML = '';

    exercisesGallery.insertAdjacentHTML('beforeend', renderExersisesByName);

    exercisesGallery.addEventListener('click', async event => {
      let id;
      const clickedButton = event.target;
      if (event.target && event.target.closest('.start-button-item')) {
        id = clickedButton
          .closest('.start-button-item')
          .getAttribute('data-exercise-id');
        await openModalWindEx(id);
      }
    });
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

function changeActivePageButton(index) {
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

function galleryForDesktop() {
  const widthScreen = document.documentElement.clientWidth;

  if (widthScreen >= 1440) {
    urlOptions.page = 1;
    urlOptions.limit = 12;
  } else {
    urlOptions.page = 1;
    urlOptions.limit = 8;
  }
}

function cleanAll() {
  closeErrorMessage();
  clearExerciseTitle();
  exercisesGallery.innerHTML = '';
  pageButtonsContainer.innerHTML = '';
}

function ratingStarRow(rating) {
  let row = '';
  rating = Math.floor(rating);
  for (let index = 0; index < rating; index++) {
    row += `
        <span class="rating-star-icon">
            <svg class="rating-star" width="18" height="18" aria-label="rating-star">
                   <use href=${svgStarUrl}></use>
            </svg>
        </span>`;
  }
  return row;
}

/* Search function */
searchButton.addEventListener('click', event => {
  event.preventDefault();
  const searchValue = inputSearchValue.value.trim();
  doSearchExercise(searchValue);
});

searchExerciseForm.addEventListener('focus', () => {
  isSearchFormActive = true;
});

searchExerciseForm.addEventListener('blur', () => {
  isSearchFormActive = false;
});

searchExerciseForm.addEventListener('keypress', event => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const searchValue = inputSearchValue.value.trim();
    doSearchExercise(searchValue);
  }
});

function doSearchExercise(searchValue) {
  if (searchValue.length === 0) {
    iziToast.error({
      title: 'Error',
      position: 'topRight',
      message: 'Sorry, Please choose an exercise.',
      backgroundColor: 'var(--dark-gray-hover)',
      messageColor: 'var(--white-smoke)',
    });
    return;
  }
  cleanAll();

  const cardQueryParams = {
    limit: adjustLimit(),
    page: 1, // Reset page to 1 when submitting the form
    keyword: searchValue,
  };

  cardQueryParams[pageContent.content] = pageContent.title;
  inputSearchValue.value = '';
  getListExercisesByName(cardQueryParams);
}

function openErrorMessage() {
  cardErrorMessage.style.display = 'block';
}

function closeErrorMessage() {
  cardErrorMessage.style.display = 'none';
}

function buildWorkoutGallery(title, filter) {
  pageContent.title = title;
  pageContent.content = filter;
  page = 1;
  const cardQueryParams = { limit: adjustLimit(), page: page };
  cardQueryParams[pageContent.content] = title;
  updateTitle(title);
  getListExercisesByName(cardQueryParams);
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

function adjustLimit() {
  const widthScreen = document.documentElement.clientWidth;
  if (widthScreen >= 768) {
    return 9;
  }
  return 8;
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

closeErrorMessage();
handleFilter(defaultFilter);

/*!!!experimental functions: update gap desktop for exercise and workout gallery!!!!*/

let previousWidth = window.innerWidth || window.clientWidth;
window.addEventListener('load', handleWindowResize);
window.addEventListener('resize', () => {
  const currentWidth = window.innerWidth;

  if (currentWidth !== previousWidth) {
    handleWindowResize();
    previousWidth = currentWidth;
  }
});

function handleWindowResize() {
  const windowWidth = document.documentElement.clientWidth;
  if (windowWidth >= 1440) {
    switch (toggle) {
      case 'filter':
        exercisesGallery.style.cssText = '';
        exercisesGallery.style.rowGap = '40px';
        break;
      case 'workout':
        exercisesGallery.style.cssText = '';
        exercisesGallery.style.rowGap = '28px';
        break;
      default:
        exercisesGallery.style.cssText = '';
    }
  } else {
    exercisesGallery.style.cssText = '';
  }
}
