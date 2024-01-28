document.addEventListener('DOMContentLoaded', function () {
  const QUOTE_API_URL = 'https://energyflow.b.goit.study/api/quote';
  const LOCAL_STORAGE_KEY = 'quoteData';

  const currentDate = new Date().toISOString().split('T')[0];
  const quoteBlock = document.getElementById('quote');

  const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  if (storedData && storedData.date === currentDate) {
    // Використовувати збережену цитату, якщо дата не змінилась
    displayQuote(storedData.quote, storedData.author);
  } else {
    fetch(QUOTE_API_URL)
      .then(response => response.json())
      .then(data => {
        const quote = data.quote;
        const author = data.author;

        // Відображення нової цитати
        displayQuote(quote, author);

        // Збереження нових даних в localStorage
        localStorage.setItem(
          LOCAL_STORAGE_KEY,
          JSON.stringify({ quote, author, date: currentDate })
        );
      })
      .catch(error => {
        // Обробка помилок: використовувати статичну цитату, якщо не вдалося отримати відповідь від сервера
        console.error('Error fetching quote:', error);
        if (storedData) {
          displayQuote(storedData.quote, storedData.author);
        }
      });
  }

  // Функція для відображення цитати на сторінці
  function displayQuote(quote, author) {
    const quoteText = quoteBlock.querySelector('.quote-text');
    const quoteAuthor = quoteBlock.querySelector('.quote-author');

    quoteText.textContent = quote;
    quoteAuthor.textContent = author;
  }
});
