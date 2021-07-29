import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ article }) => (
  <div style={{ marginLeft: '5px' }}>
    <p> {article.title}</p>
    <p> {article.author}</p>
    <span> {article.description}</span>
  </div>
);

Article.propTypes = {
  article: PropTypes.object.isRequired
};

export default Article;
