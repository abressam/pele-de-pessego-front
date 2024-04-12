import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductImage from './ProductImage';

describe('<ProductImage />', () => {
  test('it should mount', () => {
    render(<ProductImage />);
    
    const productImage = screen.getByTestId('ProductImage');

    expect(productImage).toBeInTheDocument();
  });
});