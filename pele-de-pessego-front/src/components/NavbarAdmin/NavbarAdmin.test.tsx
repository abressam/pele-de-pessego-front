import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavbarAdmin from './NavbarAdmin';

describe('<NavbarAdmin />', () => {
  test('it should mount', () => {
    render(<NavbarAdmin />);
    
    const navbarAdmin = screen.getByTestId('NavbarAdmin');

    expect(navbarAdmin).toBeInTheDocument();
  });
});