import React from 'react';
import { render } from '@testing-library/react';
import Article from './Article.jsx';

describe('ArticleList componenet', () => {
  it('renders a list of articles', () => {
    const article = {
      title: 'Sports team wins',
      author: 'Chase Abbott',
      description: 'They won by a lot'
    };

    const { asFragment } = render(<Article article={article}/>);

    expect(asFragment()).toMatchSnapshot();
  });
});
