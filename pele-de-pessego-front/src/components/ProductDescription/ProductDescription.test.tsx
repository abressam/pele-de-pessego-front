import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductDescription from './ProductDescription';

describe('<ProductDescription />', () => {
  test('it should mount', () => {
    render(<ProductDescription />);
    
    const productDescription = screen.getByTestId('ProductDescription');

    expect(productDescription).toBeInTheDocument();
  });
});