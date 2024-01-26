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

  
    var logo = document.getElementById('logo');
    var home = document.getElementById('home');
    var energyFlow = document.getElementById('logoMenu');
  
    if (logo) {
      logo.addEventListener('click', function() {

        window.location.href = 'ваш_головний_URL';
      });
    }
  
    if (home) {
      home.addEventListener('click', function() {
       
        window.location.href = 'ваш_головний_URL'; 
      });
    }
  
    if (energyFlow) {
      energyFlow.addEventListener('click', function() {
       
        window.location.href = 'ваш_головний_URL'; 
      });
    }
  });
  