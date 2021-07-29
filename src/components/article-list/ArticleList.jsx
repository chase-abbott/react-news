import React from 'react';
import PropTypes from 'prop-types';
import Article from '../article/Article.jsx';

const ArticleList = ({ articles }) => {
  const articleItems = articles.map(article => (
    <li 
      key={article.title}
      style={{
        listStyle: 'none',
        border: '1px solid black',
        borderRadius: '10px',
        marginBottom: '10px',
      }}>
      <Article article={article}/>
    </li>
  ));
  return <ul> {articleItems}</ul>;
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  )
};

export default ArticleList;
