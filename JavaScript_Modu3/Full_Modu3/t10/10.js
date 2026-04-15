"use strict";

const form = document.querySelector('#source');
const target = document.querySelector('#target');


form.addEventListener('submit', function(event) {
    event.preventDefault();

    const firstNameInput = document.querySelector('input[name="firstname"]');
    const lastNameInput = document.querySelector('input[name="lastname"]');
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    target.textContent = `Your name is ${firstName} ${lastName}`;
});