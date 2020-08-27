'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const counter = document.querySelector('#counter');
  const counterValueText = counter.querySelector('#value');
  const btnInc = counter.querySelector('button[data-action="increment"]');
  const btnDec = counter.querySelector('button[data-action="decrement"]');
  counter.insertAdjacentHTML('beforeend', '<button type="button" data-action="reset">reset</button>');
  const btnRes = counter.querySelector('button[data-action="reset"]');
  let counterValue = Number(counterValueText.textContent);

  const increment = function() {
    counterValue += 1;
    counterValueText.textContent = counterValue;
  };

  const decrement  = function() {
    counterValue -= 1;
    counterValueText.textContent = counterValue;
  };

  const reset = function() {
    counterValue = 0;
    counterValueText.textContent = counterValue;
  };

  btnInc.addEventListener('click', () =>  increment());
  btnDec.addEventListener('click', () => decrement());
  btnRes.addEventListener('click', () => reset());
});