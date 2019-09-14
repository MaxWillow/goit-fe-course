/* Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то outline инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid. */

'user strict';

const validationInput = document.querySelector('#validation-input');
const validTreshold = Number(validationInput.getAttribute('data-length'));

validationInput.addEventListener('change', inputValidation);

function inputValidation() {
  validationInput.classList.add('invalid');

  if (validationInput.value.length === validTreshold) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  }

  if (validationInput.value === '') {
    validationInput.classList.remove('valid', 'invalid');
  }
}
