import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserFormSenha from './UserFormSenha';

describe('<UserFormSenha />', () => {
  test('it should mount', () => {
    render(<UserFormSenha />);
    
    const userFormSenha = screen.getByTestId('UserFormSenha');

    expect(userFormSenha).toBeInTheDocument();
  });
});