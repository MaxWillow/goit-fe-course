// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
// Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а и к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
// Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

'use strict';
let userInput = prompt('Укажите страну, в которую необходимо доставить товар');
const deliveryCostChina = 100;
const deliveryCostChile = 250;
const deliveryCostAustralia = 170;
const deliveryCostIndia = 80;
const deliveryCostJamaica = 120;

if (userInput === null) {
  alert('Отменено пользователем!');
} else {
  switch (userInput.toLowerCase()) {
    case 'китай':
      alert(
        `Доставка в ${userInput.toLowerCase()} будет стоить ${deliveryCostChina} кредитов.`,
      );
      break;

    case 'чили':
      alert(
        `Доставка в ${userInput.toLowerCase()} будет стоить ${deliveryCostChile} кредитов.`,
      );
      break;

    case 'австралия':
      alert(
        `Доставка в ${userInput.toLowerCase()} будет стоить ${deliveryCostAustralia} кредитов.`,
      );
      break;

    case 'индия':
      alert(
        `Доставка в ${userInput.toLowerCase()} будет стоить ${deliveryCostIndia} кредитов.`,
      );
      break;

    case 'ямайка':
      alert(
        `Доставка в ${userInput.toLowerCase()} будет стоить ${deliveryCostJamaica} кредитов.`,
      );
      break;

    default:
      alert('В вашей стране доставка не доступна.');
  }
}
