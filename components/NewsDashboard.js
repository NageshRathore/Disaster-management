import React, { useState, useEffect } from 'react';

const NewsDashboard = () => {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [searchDate, setSearchDate] = useState('');
  const [category, setCategory] = useState('all');
  const [tweets, setTweets] = useState([]); 

  
  useEffect(() => {
    fetch('/samplenews.json')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.articles)) {
          setNews(data.articles);
          setFilteredNews(data.articles);
        } else {
          console.error('Expected an array of news articles.');
        }
      })
      .catch((error) => console.error('Error loading news data:', error));

    fetch('/tweets_categorized.json')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTweets(data);
        } else {
          console.error('Expected an array of tweets.');
        }
      })
      .catch((error) => console.error('Error loading tweets data:', error));
  }, []);
 
  const filterNews = (selectedCategory) => {
    setCategory(selectedCategory);
    if (selectedCategory === 'all') {
      setFilteredNews(news);
    } else {
      const filtered = news.filter((article) =>
        article.category && article.category.toLowerCase() === selectedCategory.toLowerCase()
      );
      setFilteredNews(filtered);
    }
  };

  const searchNews = () => {
    if (searchDate) {
      const filtered = news.filter((article) => {
        const articleDate = new Date(article.publishedAt).toISOString().split('T')[0];
        return articleDate === searchDate;
      });
      setFilteredNews(filtered);
    } else {
      setFilteredNews(news);
    }
  };

  return (
    <div className="news-container bg-white p-5 shadow-lg rounded mt-5 max-w-6xl mx-auto">
      <h3 className="text-xl font-bold mb-5 text-red-600">Recent News</h3>
      <div className="filter-buttons mb-5 flex flex-wrap gap-2">
        {['all', 'earthquake', 'flood', 'cyclone'].map((type) => (
          <button
            key={type}
            className={`px-4 py-2 rounded font-medium ${
              category === type ? 'bg-red-600 text-white' : 'bg-white text-red-600 border border-red-600'
            }`}
            onClick={() => filterNews(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
      <div className="search-bar mb-5 flex flex-col md:flex-row gap-2">
        <input
          type="date"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
          className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <button
          className="px-4 py-2 bg-red-600 text-white font-medium rounded hover:bg-red-700 transition"
          onClick={searchNews}
        >
          Search
        </button>
      </div>
      {filteredNews.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredNews.map((newsItem, index) => (
            <div key={index} className="news-item bg-white p-4 shadow-md rounded hover:shadow-lg transition">
              {newsItem.urlToImage ? (
                <img
                  src={newsItem.urlToImage}
                  alt={newsItem.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 rounded-t-lg"></div>
              )}
              <h4 className="font-semibold text-red-600 mb-2">{newsItem.title}</h4>
              <p className="text-gray-700 mb-3">{newsItem.description}</p>
              <a
                href={newsItem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 font-medium hover:underline"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No news found.</p>
      )}
      
      
    </div>
  );
};

export default NewsDashboard;
