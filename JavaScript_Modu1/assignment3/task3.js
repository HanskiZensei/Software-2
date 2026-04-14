const n1 = +prompt("Enter first number: ");
const n2 = +prompt("Enter second number: ");
const n3 = +prompt("Enter third number: ");
const sum = n1 + n2 + n3;
document.querySelector("#sum").innerHTML = "Here is the sum of your integers:" + sum
document.querySelector("#product").innerHTML = "Here is the product of your integers:" + n1 * n2 * n3
document.querySelector("#average").innerHTML = "Here is the average of your integers:" + sum/3