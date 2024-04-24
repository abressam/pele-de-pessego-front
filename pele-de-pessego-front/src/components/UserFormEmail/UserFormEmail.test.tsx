import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserFormEmail from './UserFormEmail';

describe('<UserFormEmail />', () => {
  test('it should mount', () => {
    render(<UserFormEmail />);
    
    const userFormEmail = screen.getByTestId('UserFormEmail');

    expect(userFormEmail).toBeInTheDocument();
  });
});