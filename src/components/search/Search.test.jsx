import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search.jsx';

describe('Search componenet', () => {
  it('renders a form element with input and search button', () => {
    const { asFragment } = render(<Search/>);

    expect(asFragment()).toMatchSnapshot();
  });
});
