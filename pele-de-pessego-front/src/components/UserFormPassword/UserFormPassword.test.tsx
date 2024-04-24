import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserFormPassword from './UserFormPassword';

describe('<UserFormSenha />', () => {
  test('it should mount', () => {
    render(<UserFormPassword />);
    
    const userFormPassword = screen.getByTestId('UserFormSenha');

    expect(userFormPassword).toBeInTheDocument();
  });
});