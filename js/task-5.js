'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector('#name-input');
  const greetingName = document.querySelector('#name-output');

  const inputHandler = function () {
    greetingName.textContent = input.value;

    if(input.value === '') {
      greetingName.textContent = 'незнакомец';
    }
  };

  input.addEventListener('input', ()=> inputHandler());
});