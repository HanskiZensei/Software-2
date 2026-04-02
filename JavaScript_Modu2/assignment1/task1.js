const n1 = +prompt("Enter first number: ");
const n2 = +prompt("Enter second number: ");
const n3 = +prompt("Enter third number: ");
const n4 = +prompt("Enter fourth number: ");
const n5 = +prompt("Enter fifth number: ");

const numlist = [n1, n2, n3, n4, n5];
for (let i = numlist.length - 1; i >= 0; i--){
    console.log(numlist[i]);
}
document.querySelector("#TIP").innerHTML = "Your numbers are printed inside the console."