const NEWS_API_KEY = process.env.NEWS_API_KEY;

export const getNews = (searchTerm) => {
  // eslint-disable-next-line max-len
  return fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${NEWS_API_KEY}`)
    .then(res => res.json());
};
