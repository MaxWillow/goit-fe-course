/* Напиши скрипт, который реагирует на изменение значения input#font-size-slider (событие input) и 
обновляет инлайн-стиль span#text обновляя его свойство font-size. 
В результате при перетаскивании ползунка будет меняться размет текста. */

'user strict';

const rangeController = document.querySelector('#font-size-slider');
const text = document.querySelector('#text');

rangeController.addEventListener('input', fontSizeTransformation);

function fontSizeTransformation() {
  text.style.fontSize = rangeController.value + 'px';
}
