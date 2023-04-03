// API endpoints to fetch news articles
const newsapiKey = '8b0f9be2d5294719876a2b34aa8f4c4c';
const newsCatcherApiKey = 'AmxdJamGkU_kDaH0jimbG7_DfWrNDcSmeJzCu0I6Ee8'
const apiEndpoint = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsapiKey}`;
 
// Get the news feed container
const newsFeed = document.getElementById('news-feed');
 
// Fetch news articles from the API endpoint
fetch(apiEndpoint)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // Loop through each article and create a card with article details
    data.articles.forEach(article => {
      const articleCard = document.createElement('div');
      articleCard.classList.add('article-card');
       
      const articleImage = document.createElement('img');
      articleImage.src = article.urlToImage;

      const articleTitle = document.createElement('h2');
      articleTitle.textContent = article.title;

      const articleAuthor = document.createElement('p');
      articleAuthor.className = 'articleAuthor';
      articleAuthor.textContent = `By: ${article.author}`;

      const articleHR = document.createElement('hr');
      articleHR.className = 'customHR';
       
      const articleDescription = document.createElement('p');
      articleDescription.textContent = article.description;
       
      const articleLink = document.createElement('a');
      articleLink.className = 'readMore'
      articleLink.href = article.url;
      articleLink.textContent = 'Read more...';
      
      articleCard.appendChild(articleImage);
      articleCard.appendChild(articleTitle);
      articleCard.appendChild(articleHR);
      articleCard.appendChild(articleDescription);
      articleCard.appendChild(articleAuthor);
      articleCard.appendChild(articleLink);
       
      newsFeed.appendChild(articleCard);
    });
  })
  .catch(error => {
    console.log('Error fetching news articles', error);
  });