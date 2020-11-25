window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('.header__left').classList.toggle('is-active');
  })
// Изменение цвета пунктов меню
  window.onload = function () {
    var elems = document.getElementsByClassName('nav__link');
    for (var i = 0; i < elems.length; i++) {
      elems[i].className += ' is-white';
    }
  };
})
