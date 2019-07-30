// Используя методы массива, последовательно выполни указанные операции над массивом имен пользователей.

// const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

// Удалить первый элемент массива
// console.log(users); // ["Poly", "Ajax", "Chelsey"]

// Удалить последний элемент массива
// console.log(users); // ["Poly", "Ajax"]

// // Добавить в начало массива пользователя "Lux"
// console.log(users); // ["Lux", "Poly", "Ajax"]

// // Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
// console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// // Удалить из массива элемент хранящийся в переменной userToDelete
// const userToDelete = 'Ajax';
// console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

// // Добавить в массив пользователя хранящегося в переменной userToInsert,
// // перед пользователем хранящимся в переменной insertBefore
// const userToInsert = 'Kong';
// const insertBefore = 'Jay';
// console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]

'use strict';
const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];
const userToDelete = 'Ajax';
const userToInsert = 'Kong';
const insertBefore = 'Jay';

users.shift();
console.log(users);

users.pop();
console.log(users);

users.unshift('Lux');
console.log(users);

users.push('Jay', 'Kiwi');
console.log(users);

users.splice(users.indexOf(userToDelete), 1);
console.log(users);

users.splice(users.indexOf(insertBefore), 0, userToInsert);
console.log(users);
