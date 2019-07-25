// 1. Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).

// 2. Сравни эти значения и по результатам выведи:

// Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".

// 3. Проверь работоспособность кода с разными значениями переменной ordered.

// const total = 100;
// const ordered = 50;

'use strict';
const total = 200;
const ordered = 40;

if (ordered > total) {
  console.log('На складе недостаточно товаров!');
} else {
  console.log('Заказ оформлен! С вами свяжется менеджер.');
}
