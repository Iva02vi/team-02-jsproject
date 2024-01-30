import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

var audio = document.getElementById('myAudio');

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function stopAudio() {
  audio.pause();
  audio.currentTime = 0;
}

audio.addEventListener('ended', function () {
  // Викликається після завершення відтворення
  iziToast.show({
    title: 'Lets do it!',
    message: 'Subscribe in the bottom, and learn about new exercises!',
    position: 'bottomRight',
    timeout: 15000, // Час виведення повідомлення в мілісекундах (5 секунд у цьому випадку)
  });
});
