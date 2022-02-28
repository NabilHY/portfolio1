let btn = document.querySelector('.mobile-menu-btn');
let ham = document.querySelector('.ham');
let menu = document.querySelector('.mobile-menu');
let menuTag = document.querySelectorAll('.mobile-menu a');

btn.addEventListener('click', function () {
  menu.classList.toggle('none');
});

ham.addEventListener('click', function () {
  menu.classList.toggle('none');
});

menuTag.forEach(elem => {
  elem.addEventListener('click', function() {
    menu.classList.add('none');

  })
})

