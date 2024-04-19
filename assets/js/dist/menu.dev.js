"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var menuBtn = document.querySelector('.menu-btn');
  var menu = document.querySelector('.cmenu');
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('is-active');
    menuBtn.classList.toggle('open');
    menu.classList.toggle('is-active');
  });
});