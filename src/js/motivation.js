var audio = document.getElementById('myAudio');
var isCyclic = false;

function toggleAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

// Вимикаємо циклічне відтворення
audio.addEventListener('ended', function () {
  if (!isCyclic) {
    audio.currentTime = 0; // Перемотуємо аудіо до початку
    audio.pause(); // Пауза, щоб не відтворювалося циклічно
  }
});

// Функція для управління циклічним відтворенням
function toggleCyclic() {
  isCyclic = !isCyclic;
  if (isCyclic) {
    // Включення циклічного відтворення
    audio.removeEventListener('ended', stopNonCyclicPlayback);
  } else {
    // Вимикаємо циклічне відтворення
    audio.addEventListener('ended', stopNonCyclicPlayback);
  }
}

// Функція для зупинки аудіо в нециклічному режимі
function stopNonCyclicPlayback() {
  audio.currentTime = 0;
  audio.pause();
}
