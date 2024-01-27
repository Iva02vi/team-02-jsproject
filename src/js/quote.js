document.addEventListener('DOMContentLoaded', function () {
  const QUOTE_API_URL = 'https://energyflow.b.goit.study/api/quote';
  const QUOTE_INTERVAL_MS = 1 * 60 * 60 * 1000; // Кожну годину
  const LOCAL_STORAGE_KEY = 'quoteData';

  const quoteTextElement = document.querySelector('.quote-text');
  const quoteAuthorElement = document.querySelector('.quote-author');

  function getStoredQuote() {
    const storedData =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
    storedData.date = new Date(storedData.date);
    return storedData;
  }

  function saveQuoteToLocalStorage(quote, author, date) {
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify({ quote, author, date: new Date().getTime() })
    );
  }

  function displayQuote(quote, author) {
    quoteTextElement.textContent = quote || 'No quote available.';
    quoteAuthorElement.textContent = author || 'Unknown author';
  }

  function isQuoteChanged(data, storedData) {
    return (
      data.quote !== storedData.quote ||
      data.author !== storedData.author ||
      !storedData.date ||
      new Date().toDateString() !== storedData.date
    );
  }

  async function fetchQuote() {
    try {
      const response = await fetch(QUOTE_API_URL);
      const data = await response.json();
      const storedData = getStoredQuote();

      if (!data.quote || !isQuoteChanged(data, storedData)) {
        displayStoredQuote();
      } else {
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

  function displayStoredQuote() {
    const storedData = getStoredQuote();
    displayQuote(storedData.quote, storedData.author);
  }

  setInterval(async () => {
    await fetchQuote();
  }, QUOTE_INTERVAL_MS);

  // Виклик функції відображення збереженої цитати при завантаженні сторінки
  displayStoredQuote();
});
