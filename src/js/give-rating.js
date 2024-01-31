import axios from 'axios';
import iziToast from 'izitoast';

import { renderExercise } from './modal-window-exercise';

const modalGiveRating = document.querySelector('.modal-give-rating');
const giveRatingForm = document.querySelector('.give-rating-form');
const giveRatingCloseBtn = document.querySelector('.give-rating-close');
const giveRatingSendBtn = giveRatingForm.querySelector('button[type="submit"]');
const giveRatingCurrentRating = document.querySelector('.give-rating-p1');
const backDrop = document.querySelector('.backdrop');
const markupModal = document.querySelector('.modal-window');
const starsUl = document.querySelector('.give-rating-stars');
const API_URL = 'https://energyflow.b.goit.study/api';
const NUMBER_OF_STARS = 5;
const svgStarUrl = new URL('/img/sprite.svg#icon-Star-2', import.meta.url);
let selectedRating;
let exerciseId;

const starClickHandler = (event, liStar) => {
  selectedRating = event.currentTarget.querySelector('input').value;
  updateStars(liStar);
};

const starHoverHandler = (event, liStar) => {
  updateStars(liStar);
};

const updateStars = liStar => {
  const tempRating = event.currentTarget.querySelector('input').value;
  liStar.forEach((li, index) => {
    const isSelected = index < tempRating;
    li.classList.toggle('li-selected', isSelected);
    li.classList.toggle('li-unselected', !isSelected);
  });
};

const submitFormHandler = async event => {
  giveRatingSendBtn.disabled = true;
  event.preventDefault();
  try {
    if (!selectedRating) {
      throw Error('Please select rating! Make sure to click!');
    }
    await axios.patch(`${API_URL}/exercises/${exerciseId}/rating`, {
      rate: +selectedRating,
      email: event.target.email.value,
      review: event.target.comment.value,
    });
    iziToast.success({
      message: 'Thanks for your review!',
      position: 'topRight',
      icon: '',
      zindex: 9999999999,
    });
    giveRatingForm.reset();
    showModalExercise();
    await renderExercise(exerciseId);
  } catch (e) {
    iziToast.error({
      message: e.response?.data?.message || e.message,
      position: 'topRight',
      icon: '',
      zindex: 9999999999,
    });
  } finally {
    giveRatingSendBtn.disabled = false;
  }
  return false;
};

export const prepareGiveRatingModal = (exercise_id, currentRating) => {
  backDrop.appendChild(modalGiveRating);
  backDrop.classList.remove('visually-hidden');
  markupModal.style.display = 'none';
  starsUl.innerHTML = '';
  selectedRating = undefined;
  exerciseId = exercise_id;
  giveRatingCurrentRating.innerHTML = currentRating;
  const svgHtml = `
    <svg
      class="icon-Star-2"
      width="24"
      height="24"
      aria-label="modal rating star icon"
    >
      <use href="${svgStarUrl}"></use>
    </svg>`;
  const lies = Array.from({ length: NUMBER_OF_STARS }, (_, index) => {
    const li = document.createElement('li');
    li.classList.add('li-star');
    const label = document.createElement('label');
    label.innerHTML = svgHtml;
    label.style.pointerEvents = 'none';
    const checkboxInput = document.createElement('input');
    checkboxInput.setAttribute('type', 'checkbox');
    checkboxInput.style.display = 'none';
    checkboxInput.setAttribute('value', `${index + 1}`);
    li.append(label, checkboxInput);
    return li;
  });
  starsUl.append(...lies);

  const liStar = starsUl.querySelectorAll('li');
  liStar.forEach(li => {
    li.addEventListener('click', event => starClickHandler(event, liStar));
    li.addEventListener('mouseover', event => starHoverHandler(event, liStar));
  });
  giveRatingForm.addEventListener('submit', submitFormHandler);
};

giveRatingCloseBtn.addEventListener('click', async event => {
  event.stopImmediatePropagation();
  await renderExercise(exerciseId);
  showModalExercise();
});

const showModalExercise = () => {
  modalGiveRating.classList.add('hidden');
  markupModal.style.display = 'block';
};
