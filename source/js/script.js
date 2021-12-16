'use strict';
var pageHeader = document.querySelector('.page');
var headerToggle = document.querySelector('.nav__menu-toggle');
var menuItems = document.querySelectorAll('.menu-list__link');
var nameInput = document.querySelector('#name-id');
var telInput = document.querySelector('#tel-id');
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
        block: 'start', behavior: 'smooth'
      });
    });
  }
}

function checkEmptyName() {
  if (nameInput.value.length === 0) {
    nameInput.setCustomValidity('Имя не заполнено');
    nameInput.classList.add('contact-form--input-error');
  } else {
    nameInput.setCustomValidity('');
  }
  nameInput.reportValidity();
}

function checkEmptyTel() {
  if (telInput.value.length === 0) {
    telInput.setCustomValidity('Телефон не заполнен.');
    telInput.classList.add('contact-form--input-error');
  } else {
    telInput.setCustomValidity('');
  }
  nameInput.reportValidity();
}

nameInput.addEventListener('input', function () {
  nameInput.classList.remove('contact-form--input-error');
});

telInput.addEventListener('input', function () {
  telInput.classList.remove('contact-form--input-error');
});

submitForm.addEventListener('click', function () {
  checkEmptyName();
  checkEmptyTel();
});

if (window.localStorage) {
  var elements = document.querySelectorAll('[name]');

  for (var i = 0, length = elements.length; i < length; i++) {
    (function (element) {
      var name = element.getAttribute('name');

      element.value = localStorage.getItem(name) || element.value;

      element.onkeyup = function () {
        localStorage.setItem(name, element.value);
      };
    })(elements[i]);
  }
}
