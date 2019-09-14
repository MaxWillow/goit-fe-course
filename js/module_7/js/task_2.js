/* В HTML есть пустой список ul#ingredients. В JS есть массив строк.
Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
после чего вставит все li за одну операцию в список ul.ingredients.
Для создания DOM-узлов используй document.createElement(). */

'user strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ul = document.querySelector('#ingredients');

// for (let i = 0; i < ingredients.length; i += 1) {
//   const li = document.createElement('li');
//   li.textContent = ingredients[i];
//   ul.append(li); // обновляет DOM на каждой итерации
// }

const markUp = ingredients.reduce((acc, item) => {
  return acc + `<li>${item}</li>`;
}, '');

ul.insertAdjacentHTML('afterbegin', markUp);
