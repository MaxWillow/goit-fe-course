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
