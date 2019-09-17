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

// *************** Option 1 ***************  //

// const ul = document.querySelector('#ingredients');
// let arrWithItems = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const li = document.createElement('li');
//   li.textContent = ingredients[i];
//   arrWithItems.push(li);
// }

// ul.innerHTML = [...arrWithItems].map(item => item.outerHTML).join('\n');

// *************** Option 2 (faster) ***************  //

//   const ul = document.querySelector('#ingredients');
//   const markUp = ingredients.reduce((acc, item) => {
//     return acc + `<li>${item}</li>`;
//   }, '');

//   ul.insertAdjacentHTML('afterbegin', markUp);

// *************** Option 3 ***************  //

const ul = document.querySelector('#ingredients');

const items = ingredients.map(el => {
  const li = document.createElement('li');
  li.textContent = el;
  return li;
});

ul.append(...items);
