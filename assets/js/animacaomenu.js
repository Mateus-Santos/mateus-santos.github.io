const menu_btn = document.querySelector('.hamburguer');
const mobile_menu = document.querySelector('.cmenu');


menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});