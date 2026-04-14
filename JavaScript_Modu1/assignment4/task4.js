const name = prompt("Enter your name. ");

const housenum = Math.floor(Math.random() * 4) + 1;

let house = "";

if (housenum === 1){
    house = "Gryffindor"
}
else if (housenum === 2){
    house = "Slytherin"
}
else if (housenum === 3){
    house = "Hufflepuff"
}
else {
    house = "Ravenclaw";
}

document.querySelector("#house").innerHTML = `${name}, you are ${house}.`;