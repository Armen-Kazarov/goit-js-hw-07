'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const inputRange = document.querySelector('#font-size-control');
  const spanText = document.querySelector('#text');

  const textSizesHandler = () => {
    spanText.style.fontSize = inputRange.value + 'px';
  }

  inputRange.addEventListener('input', () => textSizesHandler());
});