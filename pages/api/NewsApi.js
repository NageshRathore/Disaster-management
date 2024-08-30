export async function fetchNews(category = 'disaster') {
    const API_KEY = 'bea1fed8a1844c7da7c7bc7bd4cc1859'; // Replace with your NewsAPI key
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${API_KEY}&pageSize=5`
    );
    const data = await response.json();
    return data.articles;
  }