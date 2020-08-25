'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector('#validation-input');
  const inputSymbolLength = document.querySelector('input[data-length="6"]');

  const inputValidatorHandler = function() {
    const inputValueLength = input.value.length;
    const inputSymbolDatasetLength = inputSymbolLength.dataset.length;

    if(inputValueLength !== Number(inputSymbolDatasetLength)) {
      input.classList.add('invalid')
    } else if (inputValueLength === Number(inputSymbolDatasetLength)) {
      input.classList.remove('invalid')
      input.classList.add('valid')
    }
  }
  input.addEventListener('blur', () => inputValidatorHandler());
});