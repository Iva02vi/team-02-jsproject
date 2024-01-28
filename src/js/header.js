const burgerButton = document.querySelector('.header-burger');
const mobileMenuElement = document.querySelector('.mobile-menu-');
const mobileMenuCloseBtn = document.querySelector('.menu-close-button');
function openMobileMenu() {
 mobileMenuElement.classList.remove('visually-hidden');
 }
function closeMobileMenu() {
 mobileMenuElement.classList.add('visually-hidden');
}
burgerButton.addEventListener('click', openMobileMenu);
mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
 




// ============ navigation =============

const firstChild = document.querySelector('.header-navigation-home');
const secondChild = document.querySelector('.header-navigation-favorites');

function goToPage(path) {
  location.pathname = path;
}

const path = location.pathname;
if (path === '/home' || path === '/') {
  firstChild.classList.remove('.not-active');
  firstChild.classList.add('.is-active');
} else if (path === '/favorites') {
  secondChild.classList.remove('.not-active');
  secondChild.classList.add('.is-active');
}