'use strict';

const boxes = document.querySelector('#boxes');
const inputNumber = document.querySelector('input[type="number"]');
const btnRender = document.querySelector('button[data-action="render"]');
const btnDestroy = document.querySelector('button[data-action="destroy"]');

const createBoxes = function(amount) {
  const r = Math.floor(Math.random() * (256));
  const g = Math.floor(Math.random() * (256));
  const b = Math.floor(Math.random() * (256));
  const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

  for (let i = 0; i < amount; i += 1) {

    if (amount)
      boxes.insertAdjacentHTML('afterbegin', '<div></div>');
      let box = boxes.querySelector('div')
      let wh = 30;

    for (let i = 0; i < boxes.childNodes.length; i += 1) {
      wh += 10;

      if (box.nextSibling) {
        box.style.width = wh + 'px';
        box.style.height = wh + 'px';

      } else {
        box.style.width = '30px';
        box.style.height = '30px';
      }
    }
    box.style.backgroundColor = color;
  }
};

const destroyBoxes = function () {

  while (boxes.firstChild) {
    boxes.firstChild.remove();
  }
};

btnRender.addEventListener('click', () => {
  createBoxes(inputNumber.value)
});

btnDestroy.addEventListener('click', () => {
  destroyBoxes()
});