// Smooth Scroll Button To Reviews

let btn = document.querySelector('.btn');
let element = document.querySelector('.scroll');

btn.addEventListener('click', function () {
  element.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////////////////////////

// Display/Close cart modal, click function

const modalBtn = document.querySelector('.modal-btn');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', function () {
  modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click', function () {
  modalBg.classList.remove('bg-active');
});

///////////////////////////////////////////////////////////

// Add item to cart, click function

// remove item from cart, click function

// increment, decrement product price
