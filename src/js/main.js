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
