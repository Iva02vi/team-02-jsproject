// ============ navigation =============
  const firstChild = document.querySelector('.header-navigation-home');
  const secondChild = document.querySelector('.header-navigation-favorites');
  const mobFirstChild = document.querySelector('.menu-list-link-home');
  const mobSecondChild = document.querySelector('.menu-list-link-favorites');

function goToPage(path) {
  location.pathname = path;
}

const path = location.pathname;
if (path === '/index.html' || path === '/') {
  secondChild.classList.remove('is-active');
  mobSecondChild.classList.remove('is-active');
  firstChild.classList.add('is-active');
  mobFirstChild.classList.add('is-active');
} else if (path === '/favorites.html') {
  firstChild.classList.remove('is-active');
  mobFirstChild.classList.remove('is-active');
  secondChild.classList.add('is-active');
  mobSecondChild.classList.add('is-active');
}
