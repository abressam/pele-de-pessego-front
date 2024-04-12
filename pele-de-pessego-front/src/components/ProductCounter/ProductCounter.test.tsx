import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductCounter from './ProductCounter';

describe('<ProductCounter />', () => {
  test('it should mount', () => {
    render(<ProductCounter />);
    
    const productCounter = screen.getByTestId('ProductCounter');

    expect(productCounter).toBeInTheDocument();
  });
});