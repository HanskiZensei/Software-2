const numbers = [];
let number = +prompt("Enter a number or enter 0 to exit: ")


while (number !== 0){
    numbers.push(number);
    number = +prompt("Enter a number or enter 0 to exit: ")
}
numbers.sort((a, b) => b - a);
console.log(numbers);