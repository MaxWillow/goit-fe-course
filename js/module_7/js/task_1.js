/* В HTML есть список категорий ul#categories.
Напиши скрипт, который выполнит следующие операции.
Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
Для каждого элемента li.item в списке ul.list, найдет и выведет в консоль текст заголовка элемента (теге h2)
и количество элементов в категории (всех вложенных в него элементов li).
Например для первой категории получится:

Категория: Животные
Количество элементов: 4 */

'user strict';

const categories = document.querySelectorAll('.item');
console.log('Количество категорий: ', categories.length);

const itemLists = document.querySelectorAll('.item > ul');
const categoryHeadings = document.querySelectorAll('.item > h2');

for (let i = 0; i < itemLists.length; i += 1) {
  console.log(
    `Категория: '${categoryHeadings[i].textContent}', количество элементов: ${itemLists[i].children.length}`,
  );
}
