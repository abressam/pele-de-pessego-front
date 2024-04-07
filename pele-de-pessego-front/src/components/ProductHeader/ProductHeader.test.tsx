import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductHeader from './ProductHeader';

describe('<ProductHeader />', () => {
  test('it should mount', () => {
    render(<ProductHeader />);
    
    const productHeader = screen.getByTestId('ProductHeader');

    expect(productHeader).toBeInTheDocument();
  });
});