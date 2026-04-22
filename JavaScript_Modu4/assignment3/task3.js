const form = document.querySelector('#searchForm');
const resultsContainer = document.querySelector('#results');

form.addEventListener('submit', async (e) => {
    e.preventDefault();


    resultsContainer.innerHTML = '';

    const value_from_input = document.querySelector('#query').value;

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`);
        const data = await response.json();


        data.forEach(tvShow => {

            const article = document.createElement('article');
            const title = document.createElement('h2');


            title.textContent = tvShow.show.name;


            const link = document.createElement('a');


            link.href = tvShow.show.url;
            link.target = '_blank';
            link.textContent = 'View Details';


            const image = document.createElement('img');
            // Using the ? operator as requested:
            image.src = tvShow.show.image?.medium || 'https://via.placeholder.com/210x295?text=No+Image';
            image.alt = tvShow.show.name;


            const summaryDiv = document.createElement('div');
            summaryDiv.innerHTML = tvShow.show.summary;


            article.appendChild(title);
            article.appendChild(image);
            article.appendChild(link);
            article.appendChild(summaryDiv);


            resultsContainer.appendChild(article);
        });

    } catch (error) {
        console.log("Error:", error);
    }
});