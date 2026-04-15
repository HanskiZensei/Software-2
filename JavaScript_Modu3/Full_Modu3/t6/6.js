"use strict";

const button = document.querySelector("button");

function popup(){
    alert("Button clicked");
}

button.addEventListener("click", popup);