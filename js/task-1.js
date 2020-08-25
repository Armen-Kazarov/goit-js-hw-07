'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelector('#categories');
  const categoriesItem = categories.querySelectorAll('.item');
  console.log(`В списке ${categoriesItem.length} категории `);

  const titleQuantityElemRef = categoriesItem.forEach(elem =>
    console.log(
          `Категория: ${elem.querySelector('h2').textContent}
Количество элементов: ${elem.querySelectorAll('li').length}`
    )
 );
});