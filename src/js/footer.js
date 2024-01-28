import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const LOCAL_KEY = 'feedback-form';

const form = document.querySelector('.footer-modal-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const { email} = form.elements;

    const userData = {
      email: email.value.trim(),
    };
    iziToast.success({
        position: 'topCenter',
        message: `We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.`,
        backgroundColor: 'var( --dark-gray-hover)',
        messageColor: 'var( --white-smoke)',
    });
    console.log(userData);
  localStorage.removeItem(LOCAL_KEY);
  form.reset();
});