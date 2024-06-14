import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Success from './Success';

describe('<Success />', () => {
  test('it should mount', () => {
    render(<Success />);
    
    const success = screen.getByTestId('Success');

    expect(success).toBeInTheDocument();
  });
});