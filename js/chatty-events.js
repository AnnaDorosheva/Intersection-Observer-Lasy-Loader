'use strict'


// THROTTLE
window.addEventListener('scroll', _.throttle(onScroll, 700));

function onScroll() {
  console.log('OH!')
};


// DEBOUNCE

document.querySelector('.input').addEventListener('input', _.debounce(onInput, 400));

function onInput() {
  console.log("input event " + Date.now());
}
