/* Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса */

'use strict';

const value = document.querySelector('#value');
let counterValue = Number(document.querySelector('#value').textContent);

const decrement = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

const btnDecrement = document.querySelector('button[data-action="decrement"]');
btnDecrement.addEventListener('click', decrement);

const btnIncrement = document.querySelector('button[data-action="increment"]');
btnIncrement.addEventListener('click', increment);

/* Каждая функция должна делать что то одно, но делать это хорошо.
Ниже код eventEmitter работает как обычный switch, но в реальности этот паттерн чуть сложнее реализован.
Суть именно в этом - поймать строку и вернуть вызов функци, т.е. это самодельный addEventListener */

// const counter = document.querySelector('#counter');
// const value = document.querySelector('#value');

// const state = {
//   value: 0,
// };

// const decrement = () => {
//   state.value -= 1;
// };

// const increment = () => {
//   state.value += 1;
// };

// const repaint = (elem, num) => {
//   elem.textContent = num;
// };

// const eventEmitter = str => {
//   switch (str) {
//     case 'increment':
//       increment();
//       break;
//     case 'decrement':
//       decrement();
//       break;
//   }
// };

// const changeValue = ({ target }) => {
//   eventEmitter(target.dataset.action);
//   repaint(value, state.value);
// };

// counter.addEventListener('click', changeValue);
