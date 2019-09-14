/* Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. 
Если инпут пустой, в спане должна отображаться строка 'незнакомец'. */

'use strict';

const userInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

userInput.addEventListener('input', () => {
  output.textContent = userInput.value;
  if (userInput.value === '') output.textContent = 'незнакомец';
});
