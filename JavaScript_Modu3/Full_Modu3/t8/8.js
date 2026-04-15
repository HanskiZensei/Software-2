"use strict";

const num1Input = document.querySelector('#num1');
const num2Input = document.querySelector('#num2');
const operationSelect = document.querySelector('#operation');
const startButton = document.querySelector('#start');
const resultParagraph = document.querySelector('#result');

function calculate() {
    const n1 = Number(num1Input.value);
    const n2 = Number(num2Input.value);
    const op = operationSelect.value;
    let result;

    switch (op) {
        case 'add':
            result = n1 + n2;
            break;
        case 'sub':
            result = n1 - n2;
            break;
        case 'multi':
            result = n1 * n2;
            break;
        case 'div':
            result = n1 / n2;
            break;
        default:
            result = 'Invalid operation';
    }
    resultParagraph.textContent = `Result: ${result}`;
}

startButton.addEventListener('click', calculate);
