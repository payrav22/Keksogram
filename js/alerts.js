import { checkEsc } from './util.js';

const main = document.querySelector('main');
const errorTemplate = document.querySelector('#error').content;
const errorFragment = document.createDocumentFragment();
const successTemplate = document.querySelector('#success').content;
const successFragment = document.createDocumentFragment();

const onAlertEscKeydown = (evt) => {
  if (checkEsc(evt)) {
    removeAllert();
  }
};

const removeAllert = (type) => {
  document.querySelector(type).remove();
  document.removeEventListener('keydown', onAlertEscKeydown);
};

const showError = (text, button) => {
  const errorElement = errorTemplate.cloneNode(true);

  errorElement.querySelector('.error__title').textContent = text;
  errorElement.querySelector('.error__button').textContent = button;

  const errorButton = errorElement.querySelector('.error__button');

  errorElement.querySelector('.error').addEventListener('click', (evt) => {
    let element = evt.target.classList;
    if (!element.contains('error__inner')) {
      removeAllert('.error')
    }
  });

  errorButton.addEventListener('click', () => {
    removeAllert('.error');
  });

  document.addEventListener('keydown', onAlertEscKeydown);

  errorFragment.appendChild(errorElement);
  main.appendChild(errorFragment);
};

const showSuccess = (text) => {
  const successElement = successTemplate.cloneNode(true);

  successElement.querySelector('.success__title').textContent = text;

  const successButton = successElement.querySelector('.success__button');

  successElement.querySelector('.success').addEventListener('click', (evt) => {
    let element = evt.target.classList;
    if (!element.contains('success__inner')) {
      removeAllert('.success')
    }
  });

  successButton.addEventListener('click', () => {
    removeAllert('.success');
  });

  document.addEventListener('keydown', onAlertEscKeydown);

  successFragment.appendChild(successElement);
  main.appendChild(successFragment);
};

export { showError, showSuccess };



