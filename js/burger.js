const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__body');
const body = document.body;
const link = document.querySelectorAll('.header__menu-item');

burger.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    burger.classList.toggle('header__burger--active');
    body.classList.toggle('lock');
   
})

link.forEach(el => {
    el.addEventListener('click', () => {
        menu.classList.remove('active');
    burger.classList.remove('header__burger--active');
    body.classList.remove('lock');
    })
});

