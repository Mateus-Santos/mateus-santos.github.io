document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.cmenu');

    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('is-active');
        menuBtn.classList.toggle('open');
        menu.classList.toggle('is-active');
    });
});