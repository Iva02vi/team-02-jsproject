const burgerButton = document.querySelector('.header-burger');
const mobileMenuElement = document.querySelector('.mobile-menu-wrapper');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');
function openMobileMenu() {
 mobileMenuElement.classList.remove('visually-hidden');
 }
function closeMobileMenu() {
 mobileMenuElement.classList.add('visually-hidden');
}
burgerButton.addEventListener('click', openMobileMenu);
mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
 


// ============ navigation =============

const firstChild = document.querySelector('.header-home');
const secondChild = document.querySelector('.header-favorites');

function goToPage(path) {
  location.pathname = path;
}

const path = location.pathname;
if (path === '/home' || path === '/') {
  firstChild.classList.remove('not-active');
  firstChild.classList.add('is-active');
} else if (path === '/favorites') {
  secondChild.classList.remove('not-active');
  secondChild.classList.add('is-active');
}