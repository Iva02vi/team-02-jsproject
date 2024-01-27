document.addEventListener('DOMContentLoaded', function () {
  // Отримуємо елементи DOM для цитати та автора
  const quoteTextElement = document.querySelector('.quote-text');
  const quoteAuthorElement = document.querySelector('.quote-author');

  // Функція отримання збереженої цитати
  function getStoredQuote() {
    return JSON.parse(localStorage.getItem('quoteData')) || {};
  }

  // Функція відображення збереженої цитати при завантаженні сторінки
  function displayStoredQuote() {
    const storedQuoteData = getStoredQuote();
    displayQuote(storedQuoteData.quote, storedQuoteData.author);
  }

  // Функція відображення цитати
  // function displayQuote(quote, author) {
  //   quoteTextElement.textContent = quote || 'No quote available.';
  //   quoteAuthorElement.textContent = author || 'Unknown author';
  // }

  // Виклик функції відображення збереженої цитати при завантаженні сторінки
  displayStoredQuote();

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
      } else {
        // Якщо цитата не змінилась, відображаємо збережену цитату
        displayStoredQuote();
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  }

  // Періодичний виклик функції отримання цитати (раз на добу)
  setInterval(fetchQuote, 24 * 60 * 60 * 1000);
});
