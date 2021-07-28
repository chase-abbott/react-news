import React from 'react';
import { render } from '@testing-library/react';
import Article from './Article.jsx';

describe('Article componenet', () => {
  it('renders a title, author, and description', () => {
    const article = {
      title: 'Sports team wins',
      author: 'Chase Abbott',
      description: 'They won by a lot'
    };

    const { asFragment } = render(<Article article={article}/>);

    expect(asFragment()).toMatchSnapshot();
  });
});
