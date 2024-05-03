import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CategoryBar from './CategoryBar';

describe('<CategoryBar />', () => {
  test('it should mount', () => {
    render(<CategoryBar />);
    
    const categoryBar = screen.getByTestId('CategoryBar');

    expect(categoryBar).toBeInTheDocument();
  });
});