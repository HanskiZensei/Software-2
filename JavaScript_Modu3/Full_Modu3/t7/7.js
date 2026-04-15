"use strict";

const trigger = document.querySelector("#trigger");
const targetImg = document.querySelector("#target");

trigger.addEventListener("mouseover", function (){
    targetImg.src = "img/picB.jpg";
});

trigger.addEventListener("mouseout", function (){
    targetImg.src = "img/picA.jpg";
})