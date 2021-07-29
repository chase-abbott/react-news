import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import NewsSearch from './NewsSearch.jsx';

describe('NewsSearch Container', () => {
  it('renders a search form and displays a list of news stories', () => {
    render(<NewsSearch/>);

    const searchInput = screen.getByLabelText('Search');
    fireEvent.change(searchInput, { target: { value: 'Oregon Ducks' } });


    expect(searchInput).toHaveValue('Oregon Ducks');
  });
});
