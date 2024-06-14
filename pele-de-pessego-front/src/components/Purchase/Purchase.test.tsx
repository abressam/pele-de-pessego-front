import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Purchase from './Purchase';

describe('<Purchase />', () => {
  test('it should mount', () => {
    render(<Purchase />);
    
    const purchase = screen.getByTestId('Purchase');

    expect(purchase).toBeInTheDocument();
  });
});