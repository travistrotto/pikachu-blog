// menu.js
const pikaNav = document.getElementById('pika-nav');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('close-menu');

pikaNav.addEventListener('click', () => {
    menu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});
