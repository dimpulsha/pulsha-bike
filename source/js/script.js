'use strict';
var pageHeader = document.querySelector('.page');
var headerToggle = document.querySelector('.nav__menu-toggle');
var menuItems = document.querySelectorAll('.menu-list__link');
var nameInput = document.querySelector('.contact-form__input--name');
var telInput = document.querySelector('.contact-form__input--tel');
var submitForm = document.querySelector('.contact-form__button');


pageHeader.classList.remove('page--nojs');

headerToggle.addEventListener('click', function (e) {
  e.preventDefault();
  pageHeader.classList.toggle('page--menu-open');
});

if (menuItems) {
  for (let i = 0; i < menuItems.length; i++) {
    let menuItem = menuItems[i];
    let sectionId = menuItem.getAttribute('href').substring(1);
    menuItem.addEventListener('click', function (evt) {
      evt.preventDefault();
      pageHeader.classList.remove('page--menu-open');
      document.getElementById(sectionId).scrollIntoView({
        block: "start", behavior: "smooth"
      });
    });
  }
}

function checkEmptyName() {
  if (nameInput.value.length === 0) {
    nameInput.setCustomValidity('Имя не заполнено');
    nameInput.classList.add('contact-form__input--error');
  } else {
    nameInput.setCustomValidity('');
  }
  nameInput.reportValidity();
}

function checkEmptyTel() {
  if (telInput.value.length === 0) {
    telInput.setCustomValidity('Телефон не заполнен');
    telInput.classList.add('contact-form__input--error');
  } else {
    telInput.setCustomValidity('');
  }
  nameInput.reportValidity();
}

nameInput.addEventListener('input', function () {
  nameInput.classList.remove('contact-form__input--error');
});

telInput.addEventListener('input', function () {
  telInput.classList.remove('contact-form__input--error');
});

submitForm.addEventListener('click', function () {
  checkEmptyName();
  checkEmptyTel();
});

