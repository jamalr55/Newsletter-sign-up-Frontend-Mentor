const email = document.querySelector('input[name=email]');
const button = document.querySelector('button');
const dismiss = document.getElementById('dismiss');
// const err = document.querySelector('.error');

const validateEmail = (email) => {
  var regex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

button.addEventListener('click', () => {
  if (validateEmail(email.value)) {
    document.querySelector(`.error`).style.display = 'none';
    document.querySelector(`.thanks-page`).style.display = 'block';
    document.querySelector(`.main-page`).style.display = 'none';
  } else {
    document.querySelector(`.error`).style.display = 'block';
    document.querySelector(`input[name=email]`).style.backgroundColor =
      'rgba(255, 0, 0, 0.3)';
    document.querySelector(`input[name=email]`).style.border =
      '1px solid rgba(255, 0, 0)';
  }
});

dismiss.addEventListener('click', () => {
  document.querySelector(`.thanks-page`).style.display = 'none';
  document.querySelector(`.main-page`).style.display = 'flex';
});
