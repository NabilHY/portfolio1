const btn = document.querySelector('.mobile-menu-btn');
const ham = document.querySelector('.ham');
const menu = document.querySelector('.mobile-menu');
const menuTag = document.querySelectorAll('.mobile-menu a');

btn.addEventListener('click', function (elem) {
  menu.classList.toggle('none');
});

ham.addEventListener('click', function (elem) {
  menu.classList.toggle('none');
});

menuTag.forEach(elem => {
  elem.addEventListener('click', function(elem) {
    menu.classList.add('none');
  });
});

