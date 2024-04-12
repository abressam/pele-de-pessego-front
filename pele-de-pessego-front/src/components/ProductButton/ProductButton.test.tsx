import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductButton from './ProductButton';

describe('<ProductButton />', () => {
  test('it should mount', () => {
    render(<ProductButton />);
    
    const productButton = screen.getByTestId('ProductButton');

    expect(productButton).toBeInTheDocument();
  });
});