const numbers = [];


let number = +prompt("Enter a number: ")
let duplicate = false;

while (!duplicate)

    if (numbers.includes(number)){
    duplicate = true;
    alert("Number " + number + " has already been given.");
    }

else{
    numbers.push(number);
    number = +prompt("Enter a number: ")
}


numbers.sort((a, b) => a - b);
console.log(numbers);