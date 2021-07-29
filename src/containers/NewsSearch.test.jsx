import React from 'react';
import { render } from '@testing-library/react';
import NewsSearch from './NewsSearch.jsx';

describe('NewsSearch Container', () => {
  it('renders a search form and displays a list of news stories', () => {
    render(<NewsSearch/>);
  });
});
