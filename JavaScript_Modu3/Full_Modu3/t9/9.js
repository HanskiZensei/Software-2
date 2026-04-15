"use strict";

const inputField = document.querySelector('input');
const startButton = document.querySelector('button');
const resultParagraph = document.querySelector('#result');

function calculate() {
    const calculation = inputField.value;
    let result;
    let parts;

    if (calculation.includes('+')) {
        parts = calculation.split('+');
        result = Number(parts[0]) + Number(parts[1]);
    } else if (calculation.includes('-')) {
        parts = calculation.split('-');
        result = Number(parts[0]) - Number(parts[1]);
    } else if (calculation.includes('*')) {
        parts = calculation.split('*');
        result = Number(parts[0]) * Number(parts[1]);
    } else if (calculation.includes('/')) {
        parts = calculation.split('/');
        result = Number(parts[0]) / Number(parts[1]);
    } else {
        result = 'Invalid input (use +, -, *, or /)';
    }

    resultParagraph.textContent = result;
}

startButton.addEventListener('click', calculate);