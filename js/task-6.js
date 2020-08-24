'use strict';

const input = document.querySelector('#validation-input');
const inputSymbolLength = document.querySelector('input[data-length="6"]');

const inputValidatorHandler = function() {

  if(input.value.length !== Number(inputSymbolLength.dataset.length)) {
    input.classList.add('invalid')

  } else if (input.value.length === Number(inputSymbolLength.dataset.length)) {
    input.classList.remove('invalid')
    input.classList.add('valid')
  }
}
input.addEventListener('blur', () => inputValidatorHandler());