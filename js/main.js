let btn = document.querySelector('.mobile-menu-btn');
let ham = document.querySelector('.ham');
let menu = document.querySelector('.mobile-menu');

btn.addEventListener('click', function () {
  menu.classList.toggle('none');
});

ham.addEventListener('click', function () {
  menu.classList.toggle('none');
});
