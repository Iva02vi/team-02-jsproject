import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_URL = 'https://energyflow.b.goit.study/api/subscription';

const form = document.querySelector('.footer-modal-form');

form.addEventListener('submit', async event => {
  event.preventDefault();
  const { email } = form.elements;

  try {
    // Виконати запит до API для перевірки наявності емейла
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.value.trim() }),
    });

    if (response.ok) {
      // Якщо відповідь успішна, тобто емейл ще не існує в базі
      const userData = {
        email: email.value.trim(),
      };
      iziToast.success({
        position: 'topCenter',
        message: `We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.`,
        backgroundColor: 'var(--dark-gray-hover)',
        messageColor: 'var(--white-smoke)',
      });

      console.log(userData);
      form.reset();
    } else {
      // Якщо відповідь не успішна, тобто емейл вже існує в базі
      iziToast.error({
        position: 'topCenter',
        message: 'This email is already in the subscriber base. Maybe you should use another one',
        backgroundColor: 'var(--dark-gray-hover)',
        messageColor: 'var(--white-smoke)',
      });
    }
  } catch (error) {
    console.error('Error POST API:', error.message);
  }
});