import React from 'react';
import { render } from '@testing-library/react';
import ArticleList from './ArticleList.jsx';

describe('Article componenet', () => {
  it('renders a title, author, and description', () => {
    const articles = [{
      title: 'Sports team wins',
      author: 'Chase Abbott',
      description: 'They won by a lot'
    },
    {
      title: 'Dog learns spanish',
      author: 'Nelly the Pomeranian',
      description: 'A dog that bairly knew english learns spanish'
    }];

    const { asFragment } = render(<ArticleList articles={articles}/>);

    expect(asFragment()).toMatchSnapshot();
  });
});
