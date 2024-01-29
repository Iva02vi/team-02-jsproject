import axios from 'axios';

const markupModal = document.querySelector('.modal-window');
console.log(markupModal);

// --- Start Anna --- //
import { prepareGiveRatingModal } from './give-rating';
const giveRatingButton = document.querySelector('.modal-btn-rating');
const modalGiveRating = document.querySelector('.modal-give-rating');
const URL = 'https://energyflow.b.goit.study/api';
// --- End Anna --- //

export async function renderExercise(id) {
  try {
    const backDrop = document.querySelector('.backdrop');
    // For testing
    const exercises = (await axios.get(`${URL}/exercises`)).data.results;
    const { _id: exerciseId, rating } =
      exercises[(exercises.length * Math.random()) | 0];

    // ----

    // --- Start Anna --- //
    giveRatingButton.addEventListener('click', (event) => {
      backDrop.classList.add('visually-hidden');
      markupModal.classList.add('hidden');
      prepareGiveRatingModal(exerciseId, rating);
      modalGiveRating.classList.remove('hidden');
      event.stopImmediatePropagation();
    });
    // --- End Anna --- //

    const test = await axios.get(
      `https://energyflow.b.goit.study/api/exercises/${_id}`
    );
    console.log('test', exerciseModalData);
    const exerciseModalData = test.data;
    console.log(exerciseModalData);
    markupModal.innerHTML = exerciseModalData
      .map(
        ({
          gifUrl,
          name,
          rating,
          target,
          bodyPart,
          equipment,
          popularity,
          burnedCalories,
          time,
          description,
        }) => {
          const parsedRating = Math.round(parseFloat(rating));
          const stars = Array.from(
            { length: 5 },
            (_, starIndex) => `
          <li>
            <svg class="modal-rating-stars-svg" width="18" height="18">
              <use href="./img/sprite.svg#icon-Star-1"></use>
            </svg>
          </li>
        `
          )
            .map((star, starIndex) => {
              if (starIndex < parsedRating) {
                return star.replace('<svg', '<svg class="is-active"');
              }
              return star;
            })
            .join('');

          return `
          <div class="modal-tablet-pc-ver">
            <div class="modal-video"><img src="${gifUrl}" alt="Animated GIF"></div>
            <div>
              <h1 class="modal-title">${name}</h1>
              <div class="modal-rating">
                <p class="modal-rating-numbers">${parsedRating}</p>
                <ul class="modal-rating-stars">
                  ${stars}
                </ul>
              </div>
              <div class="modal-info">
                <ul class="modal-info-list">
                  <li>
                    <h3 class="modal-info-list-title">Target</h3>
                    <p class="modal-info-list-title-value">${target}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Body Part</h3>
                    <p class="modal-info-list-title-value">${bodyPart}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Equipment</h3>
                    <p class="modal-info-list-title-value">${equipment}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Popular</h3>
                    <p class="modal-info-list-title-value">${popularity}</p>
                  </li>
                  <li>
                    <h3 class="modal-info-list-title">Burned Calories</h3>
                    <p class="modal-info-list-title-value">${burnedCalories}/${time} min</p>
                  </li>
                </ul>
              </div>
              <p class="descr">${description}</p>
            </div>
          </div>
        `;
        }
      )
      .join('');

    const addToFavoritesBtn = document.querySelector('.add-to-favorites-btn');

    addToFavoritesBtn.addEventListener('click', addToFavoritesClickHandler);

    function addToFavoritesClickHandler(e) {
      e.preventDefault();

      const index = favorites.findIndex(
        exercise => exercise.name === exerciseModalData.name
      );

      if (index !== -1) {
        favorites.splice(index, 1);
        iziToast.show({
          message: 'Упражнение удалено из избранного',
          messageColor: '#f7f7fc',
          backgroundColor: '#3939db',
          position: 'topRight',
        });
      } else {
        favorites.push(exerciseModalData[0]);
        addToFavoritesBtn.innerText = 'Убрать из избранного';
        iziToast.show({
          message: 'Упражнение добавлено в избранное',
          messageColor: '#f7f7fc',
          backgroundColor: '#219c2b',
          position: 'topRight',
        });
      }

      updateFavorites();
    }

    const closeBtn = document.querySelector('.modal-btn-close');
    closeBtn.addEventListener('click', closeModal);

    function closeModal() {
      markupModal.innerHTML = '';
      backDrop.classList.add('visually-hidden');
      addToFavoritesBtn.removeEventListener(
        'click',
        addToFavoritesClickHandler
      );
      closeBtn.removeEventListener('click', closeModal);
      document.removeEventListener('keydown', escapeKeyHandler);
      backDrop.removeEventListener('click', backdropClickHandler);
    }

    function escapeKeyHandler(e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    }

    document.addEventListener('keydown', escapeKeyHandler);

    function backdropClickHandler(e) {
      if (e.target === backDrop) {
        closeModal();
      }
    }

    backDrop.addEventListener('click', backdropClickHandler);
  } catch (error) {}
}

renderExercise(1);
