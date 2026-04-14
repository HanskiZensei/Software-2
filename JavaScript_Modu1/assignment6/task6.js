const query = confirm("Should I calculate the square root?");
const squareroot = document.querySelector("#squareroot");

if (query) {
    const number = +prompt("Enter a number:");

    if (number < 0) {
        squareroot.innerHTML = "The square root of a negative number is not defined.";
    } else {
        const result = Math.sqrt(number);
        squareroot.innerHTML = `The square root of ${number} is ${result}.`;
    }
} else {
    squareroot.innerHTML = "The square root is not calculated.";
}
