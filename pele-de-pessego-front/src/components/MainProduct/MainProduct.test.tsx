import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainProduct from './MainProduct';

describe('<MainProduct />', () => {
  test('it should mount', () => {
    render(<MainProduct />);
    
    const mainProduct = screen.getByTestId('MainProduct');

    expect(mainProduct).toBeInTheDocument();
  });
});