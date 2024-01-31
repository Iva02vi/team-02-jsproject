import axios from 'axios';

const loader = document.querySelector('.loader');

axios.interceptors.request.use(
  request => {
    loader.style.display = 'inline-block';
    return request;
  },
  error => console.error(error)
);

axios.interceptors.response.use(
  response => {
    loader.style.display = 'none';
    return response;
  },
  error => Promise.reject(error)
);

// Кнопка скролу догори
const backToTopBtn = document.querySelector('.back-to-top');

const animateScrollTop = () => {
  const distance = Math.max(
    document.documentElement.scrollTop,
    document.body.scrollTop
  );

  if (distance > 0) {
    window.requestAnimationFrame(animateScrollTop);
    window.scrollTo(0, distance - distance / 8);
  }
};

backToTopBtn.addEventListener('click', animateScrollTop);

window.addEventListener('scroll', () => {
  const scrolled =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  if (scrolled > 350) {
    backToTopBtn.classList.add('active');
  } else {
    backToTopBtn.classList.remove('active');
  }
});
// Кнопка скролу догори
