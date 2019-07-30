// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку (в строке будут только слова и пробелы)
// и возвращает самое длинное слово в этой строке.

// Вызовы функции для проверки работоспособности твоей реализации:

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
// console.log(findLongestWord('Google do a roll')); // 'Google'
// console.log(findLongestWord('May the force be with you')); // 'force'

'use strict';

function findLongestWord(string) {
  const arrayFromString = string.split(' ');
  let longestWord = arrayFromString[0];

  for (let i = 1; i < arrayFromString.length; i += 1) {
    if (arrayFromString[i].length > longestWord.length) {
      longestWord = arrayFromString[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
