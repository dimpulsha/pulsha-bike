'use strict';
var pageHeader = document.querySelector('.page');
var headerToggle = document.querySelector('.nav__menu-toggle');
// var menuItems = document.querySelectorAll('.menu-list__link');

pageHeader.classList.remove('page--nojs');

headerToggle.addEventListener('click', function (e) {
  e.preventDefault();
  pageHeader.classList.toggle('page--menu-open');
});

// if (menuItems) {
//   for (let i = 0; i < menuItems.length; i++) {
//     let menuItem = menuItems[i];
//     let sectionId = menuItem.getAttribute('href').substring(1);
//     menuItem.addEventListener('click', function (evt) {
//       evt.preventDefault();
//       pageHeader.classList.remove('page--menu-open');
//       document.getElementById(sectionId).scrollIntoView({
//         block: "start", behavior: "smooth"
//       })
//     });
//   }
// }
