import axios from 'axios';
const exercisesGallery = document.querySelector('.exercises-gallery');
const filterButton = document.querySelector('.exercises-gallery-filter');
const pageButtonsContainer = document.querySelector('.page-buttons-container');

const baseURL = 'https://energyflow.b.goit.study/api/filters';
let urlOptions = {
  filter: 'Muscles',
  page: 1,
  limit: 8,
};
let totalPages = 0;
const defaultFilter = 'muscles';
const axiosInstance = axios.create({
  baseURL: baseURL,
});

function renderExercises(images) {
  exercisesGallery.innerHTML = '';
  const newImages = images.results.map(image => {
    return `<li class="exercises-item">
      <a class="exercises-item-background "  href="${image.imgUrl}">
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

function renderPagesIcon(images) {
  let pagesMarkup = '';
  pageButtonsContainer.innerHTML = '';
  for (let i = 1; i <= images.totalPages; i++) {
    if (i === 1) {
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

filterButton.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    const buttonName = event.target.getAttribute('name');
    handleFilter(buttonName);
  }
});

function handleFilter(buttonName) {
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
    .then(imgages => renderPagesIcon(imgages))
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
    totalPages = response.data.totalPages;
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

pageButtonsContainer.addEventListener('click', function (event) {
  const clickedButton = event.target.closest('.page-button');

  if (clickedButton) {
    const buttonValue = clickedButton.id;
    console.log('Clicked button value: ' + buttonValue);
    changeActiveButton(buttonValue);
  }
});

function changeActiveButton(index) {
  const buttons = document.querySelectorAll('.page-button');

  buttons.forEach(button => {
    if (button.id === index) {
      button.classList.add('active');
      urlOptions.page = index;
      fetchUrl();
    } else {
      button.classList.remove('active');
    }
  });
}

window.addEventListener('resize', () => {
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

/* 
Instructions for Olga-ampilogova: Add the code to your JavaScript project, 
and you can use it to correctly handle clicks on the card and retrieve information about the card.
Feel free to use this corrected version in your communication. 
If you have any more questions or if there's anything else I can help you with, let me know!

const exercisesGallery = document.querySelector('.exercises-gallery');
exercisesGallery.addEventListener('click', event => {
  event.preventDefault();
  const cardElement = event.target.closest('.exercises-item');
  if (cardElement) {
    const name = cardElement.querySelector('.name-card').textContent;
    const filter = cardElement.querySelector('.type-card').textContent;
    console.log('Clicked on card with name:', name, 'and filter:', filter);
  }
});
*/
