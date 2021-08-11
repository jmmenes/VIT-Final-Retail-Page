// Smooth Scroll To Reviews

let btn = document.querySelector('.btn');
let element = document.querySelector('.scroll');

btn.addEventListener('click', function () {
  element.scrollIntoView({ behavior: 'smooth' });
});

// Cart Modal
