import axios from 'axios';
const giveRatingButton = document.querySelector('.give-rating');
const modalGiveRating = document.querySelector('.modal-give-rating');
const giveRatingForm = document.querySelector('.give-rating-form');
const giveRatingCloseBtn = document.querySelector('.give-rating-close');
const URL = 'https://energyflow.b.goit.study/api';
const starsUl = document.querySelector('.give-rating-stars');
const NUMBER_OF_STARS = 5;
let selectedRating;

const renderStars = () => {
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
    label.setAttribute('for', `star${i + 1}`);
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
    li.addEventListener('click', event => {
      selectedRating = event.currentTarget.querySelector('input').value;
      const selectedItems = Array.from(liStar).slice(0, selectedRating);
      const unselectedItems = Array.from(liStar).slice(selectedRating);
      selectedItems.forEach(li => li.classList.add('li-selected'));
      unselectedItems.forEach(li => li.classList.replace('li-selected', 'li-unselected'));
    });
  });
};

renderStars();

giveRatingCloseBtn.addEventListener('click', () => {
    modalGiveRating.classList.add('hidden');
})

giveRatingButton.addEventListener('click', () => {
  modalGiveRating.classList.remove('hidden');
});

giveRatingForm.addEventListener('submit', async event => {
  event.preventDefault();
  console.log('rating', selectedRating);
  console.log(event.target.email.value);
  console.log(event.target.comment.value);
  try {
    await axios.patch(`${URL}/exercies/${exercise_id}/rating`, {
      rate: selectedRating,
      email: event.target.email.value,
      review: event.target.comment.value,
    });
  } catch (e) {
    console.error(e.message);
  }
});
