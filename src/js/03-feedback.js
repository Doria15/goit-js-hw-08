import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailEl = document.querySelector('label [name = "email"]');
const messageEl = document.querySelector('label [name = "message"]');

form.addEventListener('input', throttle(handleInput, 500));
function handleInput(event) {
  event.preventDefault();

  const email = emailEl.value;
  const message = messageEl.value;
  const formData = {
    email,
    message,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener('submit', handleSubmit);
function handleSubmit(e) {
  e.preventDefault();

  const email = emailEl.value;
  const message = messageEl.value;
  const formData = {
    email,
    message,
  };

  console.log(formData);

  localStorage.removeItem('feedback-form-state');

  form.reset();
}

const onPageLoad = function () {
  const localStorageValue = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (localStorageValue) {
    emailEl.value = localStorageValue.email;
    messageEl.value = localStorageValue.message;
  }
};
onPageLoad();
