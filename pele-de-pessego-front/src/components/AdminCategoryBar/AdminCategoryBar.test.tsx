import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdminCategoryBar from './AdminCategoryBar';

describe('<AdminCategoryBar />', () => {
  test('it should mount', () => {
    render(<AdminCategoryBar />);
    
    const adminCategoryBar = screen.getByTestId('AdminCategoryBar');

    expect(adminCategoryBar).toBeInTheDocument();
  });
});