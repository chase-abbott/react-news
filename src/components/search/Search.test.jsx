import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Search from './Search.jsx';

describe('Search componenet', () => {
  it('renders a form element with input and search button', () => {
    const search = 'Oregon Ducks';
    const { asFragment } = render(<Search searchInput={search}/>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('tests to see how many times the buttong is clicked', () => {
    const handleClick = jest.fn();

    render(<Search onSubmit={handleClick}/>);
    fireEvent.click(screen.getByText('Submit'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
