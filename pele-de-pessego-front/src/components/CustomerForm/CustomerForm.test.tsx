import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomerForm from './CustomerForm';

describe('<CustomerForm />', () => {
  test('it should mount', () => {
    render(<CustomerForm />);
    
    const customerForm = screen.getByTestId('CustomerForm');

    expect(customerForm).toBeInTheDocument();
  });
});