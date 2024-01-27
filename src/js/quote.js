document.addEventListener('DOMContentLoaded', function () {
  const QUOTE_API_URL = 'https://energyflow.b.goit.study/api/quote';
  const QUOTE_INTERVAL_MS = 4 * 60 * 60 * 1000; // Кожні 4 години

  const quoteTextElement = document.querySelector('.quote-text');
  const quoteAuthorElement = document.querySelector('.quote-author');

  function getStoredQuote() {
    return JSON.parse(localStorage.getItem('quoteData')) || {};
  }

  function saveQuoteToLocalStorage(quote, author, date) {
    localStorage.setItem(
      'quoteData',
      JSON.stringify({ quote, author, date: new Date().toDateString() })
    );
  }

  function displayQuote(quote, author) {
    quoteTextElement.textContent = quote || 'No quote available.';
    quoteAuthorElement.textContent = author || 'Unknown author';
  }

  async function fetchQuote() {
    try {
      const response = await fetch(QUOTE_API_URL);
      const data = await response.json();

      const storedQuoteData = getStoredQuote();

      if (!data.quote) {
        // Якщо цитата не отримана від сервера, використовуємо ту, що вже є в localStorage
        displayStoredQuote();
      } else if (
        data.quote !== storedQuoteData.quote ||
        data.author !== storedQuoteData.author ||
        !storedQuoteData.date ||
        new Date().toDateString() !== storedQuoteData.date
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

  function displayStoredQuote() {
    const storedQuoteData = getStoredQuote();
    displayQuote(storedQuoteData.quote, storedQuoteData.author);
  }

  setInterval(async () => {
    await fetchQuote();
  }, QUOTE_INTERVAL_MS);

  // Виклик функції відображення збереженої цитати при завантаженні сторінки
  displayStoredQuote();
});
