import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserForm2 from './UserForm2';

describe('<UserForm2 />', () => {
  test('it should mount', () => {
    render(<UserForm2 />);
    
    const userForm2 = screen.getByTestId('UserForm2');

    expect(userForm2).toBeInTheDocument();
  });
});