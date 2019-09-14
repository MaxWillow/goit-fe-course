/* Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input и нажимает кнопку "Создать", после чего рендерится коллекция. 
При нажатии на кнопку "Очистить", коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

- Имеет случайный rgb цвет фона
- Размеры самого первого div - 30px на 30px
- Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px

Создай функцию destroyBoxes(), которая очищает div#boxes. */

'use strict';

const userInput = document.querySelector('input[type="number"]');
let chosenAmount;

userInput.addEventListener('change', () => {
  chosenAmount = Number(userInput.value);
});

const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxesContainer = document.querySelector('#boxes');

renderBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  for (let i = 0; i < chosenAmount; i += 1) {
    const divBox = document.createElement('div');
    divBox.style.width = 30 + i * 10 + 'px';
    divBox.style.height = 30 + i * 10 + 'px';
    divBox.style.marginBottom = '3px';

    divBox.style.background =
      'rgb(' +
      Math.random() * 256 +
      ',' +
      Math.random() * 256 +
      ',' +
      Math.random() * 256 +
      ')';

    boxesContainer.append(divBox);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
