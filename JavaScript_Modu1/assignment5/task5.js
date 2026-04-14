const year = +prompt("Enter a year: ");

if (year % 100 === 0 && year % 400 === 0){
    leapyear = true;
}
else leapyear = year % 4 === 0 && year % 100 !== 0;

const answer = leapyear ? `${year} is a leap year.` : `${year} is not a leap year.`;
document.querySelector("#leapyears").innerHTML = answer;
