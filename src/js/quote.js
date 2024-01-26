document.addEventListener('DOMContentLoaded', function () {
  // Отримуємо елементи DOM для цитати та автора
  const quoteTextElement = document.querySelector('.quote-text');
  const quoteAuthorElement = document.querySelector('.quote-author');

  // Функція отримання збереженої цитати
  function getStoredQuote() {
    return JSON.parse(localStorage.getItem('quoteData')) || {};
  }

  // Функція збереження цитати в локальному сховищі
  function saveQuoteToLocalStorage(quote, author, date) {
    const quoteData = { quote, author, date };
    localStorage.setItem('quoteData', JSON.stringify(quoteData));
  }

  // Асинхронна функція отримання цитати з backend
  async function fetchQuote() {
    try {
      const response = await fetch('https://energyflow.b.goit.study/api/quote');
      const data = await response.json();

      const storedQuoteData = getStoredQuote();

      // Перевірка, чи цитата та автор змінилися
      if (
        data.quote !== storedQuoteData.quote ||
        data.author !== storedQuoteData.author
      ) {
        // Зберігаємо нову цитату та автора, відображаємо на сторінці
        saveQuoteToLocalStorage(
          data.quote,
          data.author,
          new Date().toDateString()
        );
        displayQuote(data.quote, data.author);
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  }

  // Функція відображення цитати
  function displayQuote(quote, author) {
    quoteTextElement.textContent = quote;
    quoteAuthorElement.textContent = author;
  }

  // Періодичний виклик функції отримання цитати (раз на добу)
  setInterval(fetchQuote, 24 * 60 * 60 * 1000);

  // Виклик функції отримання цитати при завантаженні сторінки
  fetchQuote();
});
