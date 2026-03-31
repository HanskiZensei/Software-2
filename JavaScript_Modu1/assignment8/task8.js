const startYear = +prompt("Enter the start year:");
const endYear = +prompt("Enter the end year:");
const leapYears = document.querySelector("#leapYears");

let listHTML = "<ul>";

for (let year = startYear; year <= endYear; year++) {

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        listHTML += `<li>${year}</li>`;
    }
}

listHTML += "</ul>";
leapYears.innerHTML = listHTML;