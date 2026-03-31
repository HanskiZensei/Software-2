const dicenum = +prompt("How many dice would you like to roll?");
const diceroll = document.querySelector("#diceroll");

let totalSum = 0;

for (let i = 0; i < dicenum; i++) {

    const roll = Math.floor(Math.random() * 6) + 1;

    totalSum += roll;
}

diceroll.innerHTML = `You rolled ${dicenum} dice. The total sum is ${totalSum}.`;