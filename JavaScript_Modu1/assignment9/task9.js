const number = +prompt("Enter an integer to check if it's prime:");
const primenum = document.querySelector("#primenum");

let isPrime = true;

if (number < 2) {
    isPrime = false;
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

const message = isPrime ? `${number} is a prime number.` : `${number} is not a prime number.`;
primenum.innerHTML = message;