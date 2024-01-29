import axios from 'axios';
import iziToast from "izitoast";

import { renderExercise } from './modal-window-exercise';

const modalGiveRating = document.querySelector('.modal-give-rating');
const giveRatingForm = document.querySelector('.give-rating-form');
const giveRatingCloseBtn = document.querySelector('.give-rating-close');
const giveRatingSendBtn = giveRatingForm.querySelector('button[type="submit"]');
const giveRatingCurrentRating = document.querySelector('.give-rating-p1');
const backDrop = document.querySelector('.backdrop');
const markupModal = document.querySelector('.modal-window');
const URL = 'https://energyflow.b.goit.study/api';
const starsUl = document.querySelector('.give-rating-stars');
const NUMBER_OF_STARS = 5;
let selectedRating;
let exerciseId;

const starClickHandler = (event, liStar) => {
    selectedRating = event.currentTarget.querySelector('input').value;
    const selectedItems = Array.from(liStar).slice(0, selectedRating);
    const unselectedItems = Array.from(liStar).slice(selectedRating);
    selectedItems.forEach(li => li.classList.add('li-selected'));
    unselectedItems.forEach(li =>
      li.classList.replace('li-selected', 'li-unselected')
    );
  }

const submitFormHandler = async event => {
    giveRatingSendBtn.disabled = true;
    event.preventDefault();
    try {
      if (!selectedRating) {
        throw Error('Please select rating!');
      }
      await axios.patch(`${URL}/exercises/${exerciseId}/rating`, {
        rate: +selectedRating,
        email: event.target.email.value,
        review: event.target.comment.value,
      });
      giveRatingForm.reset();
      showModalExercise();
      renderExercise(exerciseId);
    } catch (e) {
        iziToast.error({
            message: e.response?.data?.message || e.message,
            position: 'topRight',
            icon: ''
        });
    } finally {
      giveRatingSendBtn.disabled = false;
    }
    return false;
  }

export const prepareGiveRatingModal = (exercise_id, currentRating) => {
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
    <use href="/img/sprite.svg#icon-Star-2"></use>
  </svg>`;
  const lies = [];
  for (let i = 0; i < NUMBER_OF_STARS; i++) {
    const li = document.createElement('li');
    li.classList.add('li-star');
    const label = document.createElement('label');
    label.innerHTML = svgHtml;
    label.style.pointerEvents = 'none';
    const checkboxInput = document.createElement('input');
    checkboxInput.setAttribute('type', 'checkbox');
    checkboxInput.style.display = 'none';
    checkboxInput.setAttribute('value', `${i + 1}`);
    li.append(label, checkboxInput);
    lies.push(li);
  }
  starsUl.append(...lies);

  const liStar = starsUl.querySelectorAll('li');
  liStar.forEach(li => {
    li.addEventListener('click', (event) => starClickHandler(event, liStar));
  });
  giveRatingForm.addEventListener('submit', submitFormHandler);
};

giveRatingCloseBtn.addEventListener('click', () => {
  showModalExercise();
});

const showModalExercise = () => {
  modalGiveRating.classList.add('hidden');
  backDrop.classList.remove('visually-hidden');
  markupModal.style.display = 'block';
};
