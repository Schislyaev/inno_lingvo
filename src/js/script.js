const call = document.querySelector('.register__menu_call'),
      menu = document.querySelector('.menu__scroll'),
      closeElem = document.querySelector('.menu__scroll__close');

call.addEventListener('click', () => {
    menu.classList.add('active');
})

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
})