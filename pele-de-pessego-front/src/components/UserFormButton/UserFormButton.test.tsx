import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UserFormButton from './UserFormButton';

describe('<UserFormButton />', () => {
  test('it should mount', () => {
    render(<UserFormButton buttonText={''} />);
    
    const userFormButton = screen.getByTestId('UserFormButton');

    expect(userFormButton).toBeInTheDocument();
  });
});