'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createListItems = function() {
  const list = document.querySelector('#ingredients');
  ingredients.forEach(elem => {
    let item = document.createElement('li');
    item.append(elem);
    list.append(item);
  })
  
  return list;
}
console.log(createListItems());