'use strict';

document.addEventListener("DOMContentLoaded", () => {
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
      item.textContent = elem;
      list.append(item);
    })

    return list;
  }
  console.log(createListItems());
});