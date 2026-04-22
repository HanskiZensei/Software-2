const searchForm = document.querySelector('#searchForm');


searchForm.addEventListener('submit', async function (e) {


    e.preventDefault();


const searchTerm = document.querySelector('#query').value;

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
        const data = await response.json();


        console.log("Search Results for:", searchTerm);
        console.log(data);

    } catch (error) {
        console.error("Something went wrong with the fetch:", error);
    }
});