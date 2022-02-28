const btn = document.querySelector('.mobile-menu-btn');
const ham = document.querySelector('.ham');
const menu = document.querySelector('.mobile-menu');
const menuTag = document.querySelectorAll('.mobile-menu a');

btn.addEventListener('click', function () {
  menu.classList.toggle('none');
});

ham.addEventListener('click', function () {
  menu.classList.toggle('none');
});

menuTag.forEach((elem) => {
  elem.addEventListener('click', function () {
    menu.classList.add('none');
  });
});

