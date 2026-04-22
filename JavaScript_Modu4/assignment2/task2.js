const tvForm = document.querySelector('#searchForm');
const queryInput = document.querySelector('#query');


tvForm.addEventListener('submit', async function (e) {
    e.preventDefault();


const valueFromInput = queryInput.value;
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${valueFromInput}`);
        const searchResult = await response.json();


        console.log("Search Result:", searchResult);

    } catch (error) {
        console.log("Error fetching data:", error);
    }
});