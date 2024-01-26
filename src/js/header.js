function toggleMenu() {
    var menu = document.getElementById('menu');
    var closeButton = document.getElementById('closeButton');
    var burger = document.getElementById('burger');
    var logo = document.getElementById('logo');
    var logoMenu = document.getElementById('logoMenu');
    var home = document.getElementById('home');
    var favorites = document.getElementById('favorites');
  
    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block';
      closeButton.style.display = 'block';
      burger.style.display = 'none';
      logo.style.display = 'none';
      logoMenu.style.display = 'block';
      home.style.display = 'block';
      favorites.style.display = 'block';
  
      // Dynamically center "Home" when the menu is open
      home.style.marginTop = ((menu.clientHeight - home.clientHeight) / 2) + 'px';
    } else {
      menu.style.display = 'none';
      closeButton.style.display = 'none';
      burger.style.display = 'block';
      logo.style.display = 'block';
      logoMenu.style.display = 'none';
      home.style.display = 'none';
      favorites.style.display = 'none';
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    // Код, який виконується після завантаження DOM
  
    var logo = document.getElementById('logo');
    var home = document.getElementById('home');
    var energyFlow = document.getElementById('logoMenu');
  
    if (logo) {
      logo.addEventListener('click', function() {
        // Перенаправлення на головну сторінку при кліку на логотип
        window.location.href = 'ваш_головний_URL'; // Замініть 'ваш_головний_URL' на реальний URL
      });
    }
  
    if (home) {
      home.addEventListener('click', function() {
        // Перенаправлення на головну сторінку при кліку на "Home"
        window.location.href = 'ваш_головний_URL'; // Замініть 'ваш_головний_URL' на реальний URL
      });
    }
  
    if (energyFlow) {
      energyFlow.addEventListener('click', function() {
        // Перенаправлення на головну сторінку при кліку на "energy.flow"
        window.location.href = 'ваш_головний_URL'; // Замініть 'ваш_головний_URL' на реальний URL
      });
    }
  });
  