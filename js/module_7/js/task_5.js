/* Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. 
Если инпут пустой, в спане должна отображаться строка 'незнакомец'. */

'use strict';

const userInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

userInput.addEventListener('input', () => {
  output.textContent = userInput.value;
  if (userInput.value === '') output.textContent = 'незнакомец';
});

/* Уменьшаем связность. 
Обратите внимание на state. В нем хранятся данные, которые будут отображаться.
Далее можно будет написать функцию, которая следит за state и если что-то поменялось - вызывает метод repaint

Это уже фактически React - меняем что-то в state и автоматически вызываются функции по отрисовке DOM */

// const userInput = document.querySelector('#name-input');
// const output = document.querySelector('#name-output');

// const state = {
//   defaultValue: 'незнакомец',
//   message: '',
// };

// const repaint = (elem, num) => {
//   elem.textContent = num;
// };

// const setName = name => {
//   state.message = name || state.defaultValue;
// };

// userInput.addEventListener('input', () => {
//   setName(userInput.value);
//   repaint(output, state.message);
// });

// setName();
// repaint(output, state.message);
