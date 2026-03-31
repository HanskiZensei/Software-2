const numDice = +prompt("How many dice?");
const targetSum = +prompt("What sum are you looking for?");
const probabilitycount = document.querySelector("#probabilitycount");

const totalSimulations = 10000;
let hits = 0;

for (let i = 0; i < totalSimulations; i++) {
    let currentRunSum = 0;

    for (let j = 0; j < numDice; j++) {
        currentRunSum += Math.floor(Math.random() * 6) + 1;
    }

    if (currentRunSum === targetSum) {
        hits++;
    }
}

const probability = (hits / totalSimulations * 100).toFixed(2);

probabilitycount.innerHTML = `Probability to get sum ${targetSum} with ${numDice} dice is ${probability}%`;