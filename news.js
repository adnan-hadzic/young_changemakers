document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container');
    const apiUrl = 'https://saurav.tech/NewsAPI/top-headlines/category/general/us.json';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.articles.length === 0) {
                newsContainer.innerHTML = '<p>No news available.</p>';
                return;
            }

            newsContainer.innerHTML = ''; 

            data.articles.slice(0, 3).forEach(article => { // Display only the first 3 articles
                const articleElement = document.createElement('article');
                articleElement.classList.add('news-article');
                articleElement.innerHTML = `
                    <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                    <p>${article.description || 'No description available.'}</p>
                `;
                newsContainer.appendChild(articleElement);
            });
        })
        .catch(error => {
            console.error('Error fetching news:', error);
            newsContainer.innerHTML = `<p>An error occurred while fetching news: ${error.message}</p>`;
        });
});

