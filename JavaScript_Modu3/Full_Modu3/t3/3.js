'use strict';
const names = ['John', 'Paul', 'Jones'];
const target = document.querySelector("#target");

let listHTML = "";

for (let i = 0; i < names.length; i++){
    listHTML += `<li>${names[i]}</li>`;
}

target.innerHTML = listHTML;
