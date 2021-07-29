import React, { useState } from 'react';
import Search from '../components/search/Search.jsx';
import ArticleList from '../components/article-list/ArticleList.jsx';
import { getNews } from '../utils/newsAPI.js';

const NewsSearch = () => {
  const [searchInput, setSearchInput] = useState('');
  const [articles, setArticles] = useState([]);

  const handleChange = ({ target }) => {
    setSearchInput(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const news = await getNews(searchInput);
    return setArticles(news.articles);
  };

  return (
    <>
      <Search 
        searchInput={searchInput}
        onChange={handleChange}
        onSubmit={handleSubmit}
      /> 
      <ArticleList articles={articles}/>
    </>
  );
};

export default NewsSearch;
