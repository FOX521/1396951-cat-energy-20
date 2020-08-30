var navMain = document.querySelector('.nav');
var navToggle = document.querySelector('.nav__button');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('nav__closed')) {
    navMain.classList.remove('nav__closed');
    navMain.classList.add('nav__opened');
  } else {
    navMain.classList.add('nav__closed');
    navMain.classList.remove('nav__opened');
  }
});
