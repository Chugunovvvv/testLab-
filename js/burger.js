const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__body');
const body = document.body;
const link = document.querySelectorAll('.header__menu-item');
const logoText = document.querySelector('.header__logo-text');
burger.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    burger.classList.toggle('header__burger--active');
    logoText.classList.toggle('active-text');
    body.classList.toggle('lock');
   
})

link.forEach(el => {
    el.addEventListener('click', () => {
        menu.classList.remove('active');
    burger.classList.remove('header__burger--active');
    logoText.classList.remove('acitve-text');
    body.classList.remove('lock');
    })
});

