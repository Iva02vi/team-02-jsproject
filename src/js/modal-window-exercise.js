import axios from 'axios';
import { prepareGiveRatingModal } from './give-rating';
const modalGiveRating = document.querySelector('.modal-give-rating');
const modalBtns = document.querySelector('.modal-btns');

const markupModal = document.querySelector('.modal-window');
const backDrop = document.querySelector('.backdrop');

export async function renderExercise(id) {
  try {
    const test = await axios.get(`https://energyflow.b.goit.study/api/exercises/${id}`);
    const exerciseModalData = test.data;
    console.log(exerciseModalData);

    // Create give rating button dynamically
    
    // можна видалити коли відкрівання картку буде дороблено
    if (document.querySelectorAll('.modal-btn-rating').length > 0) {
      document.querySelectorAll('.modal-btn-rating').forEach(el => el.remove());
    }
    // видалити до сюди

    const giveRatingButton = document.createElement('button');
    giveRatingButton.setAttribute('class', 'modal-btn-rating');
    giveRatingButton.setAttribute('id', crypto.randomUUID());
    giveRatingButton.textContent = 'Give a rating';
    modalBtns.appendChild(giveRatingButton);

    const stars = document.getElementsByClassName("modal-rating-stars")[0];
    stars.innerHTML = exerciseModalData.rating;
    for (let i = 1; i <= 5; i++) {
      if (i < exerciseModalData.rating) {
        stars.innerHTML += `<li>
      
      <svg class="modal-rating-stars-svg" width="18" height="18">
        <use href="../img/sprite.svg#icon-Star-1"></use>
      </svg>
    </li>`;
      } else {
        stars.innerHTML += `<li>
        
        <svg class="modal-rating-stars-svg" width="18" height="18">
          <use href="../img/sprite.svg#icon-Star-1"></use>
        </svg>
      </li>`;
      }
    }

    document.getElementsByClassName("imgGif")[0].src = exerciseModalData.gifUrl;
    document.getElementsByClassName("modal-title")[0].innerHTML = exerciseModalData.name;
    document.getElementsByClassName("modal-info-list-title-value")[0].innerHTML = exerciseModalData.target;
    document.getElementsByClassName("modal-info-list-title-value")[1].innerHTML = exerciseModalData.bodyPart;
    document.getElementsByClassName("modal-info-list-title-value")[2].innerHTML = exerciseModalData.equipment;
    document.getElementsByClassName("modal-info-list-title-value")[3].innerHTML = exerciseModalData.popularity;
    document.getElementsByClassName("modal-info-list-title-value")[4].innerHTML = exerciseModalData.burnedCalories;
    document.getElementsByClassName("descr")[0].innerHTML = exerciseModalData.description;

    const addToFavoritesBtn = document.querySelector('.modal-btn-favorites');

    addToFavoritesBtn.addEventListener('click', addToFavoritesClickHandler);

    function addToFavoritesClickHandler(e) {
      e.stopPropagation();
      e.preventDefault();
      let favorites = JSON.parse(localStorage.getItem("favorites"))
      if (favorites == undefined) {
        favorites = [];
      }

      const index = favorites.findIndex((exercise) => exercise.name === exerciseModalData.name);

      if (index !== -1) {
        favorites.splice(index, 1);
        addToFavoritesBtn.innerText = 'Add to favorites';
        iziToast.show({
          message: 'Упражнение удалено из избранного',
          messageColor: '#f7f7fc',
          backgroundColor: '#3939db',
          position: 'topRight'
        });
      } else {
        favorites.push(exerciseModalData);
        addToFavoritesBtn.innerText = 'Remove from favorites';
        iziToast.show({
          message: 'Упражнение добавлено в избранное',
          messageColor: '#f7f7fc',
          backgroundColor: '#219c2b',
          position: 'topRight'
        });
      }

        localStorage.setItem("favorites", JSON.stringify(favorites))
    }

    const closeBtn = document.querySelector('.modal-btn-close');
    closeBtn.addEventListener('click', closeModal);

    function closeModal() {
      markupModal.innerHTML = '';
      backDrop.classList.remove('is-open');
      addToFavoritesBtn.removeEventListener('click', addToFavoritesClickHandler);
      closeBtn.removeEventListener('click', closeModal);
      document.removeEventListener('keydown', escapeKeyHandler);
      backDrop.removeEventListener('click', backdropClickHandler);
      giveRatingButton.removeEventListener('click', giveRatingHandler);
    }

    function escapeKeyHandler(e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    }
    function backdropClickHandler() {
      closeModal();
    }

    const giveRatingHandler = (event) => {
      backDrop.classList.remove('visually-hidden');
      markupModal.classList.add('hidden');
      prepareGiveRatingModal(id, exerciseModalData.rating);
      modalGiveRating.classList.remove('hidden');
      event.stopImmediatePropagation();
      giveRatingButton.removeEventListener('click', giveRatingHandler);
      giveRatingButton.remove();
    }

    giveRatingButton.addEventListener('click', giveRatingHandler);

    document.addEventListener('keydown', escapeKeyHandler);

    // *** Це закриває усі модальні вікна по кліку в будь-якому місці.
    // Навіщо це? Це зробить обробку кліків в модальніх вікнах складнішими. Краще закрівати по крестику.
    // backDrop.addEventListener('click', backdropClickHandler);

  } catch (error) {

  }
}

renderExercise("64f389465ae26083f39b17a4");