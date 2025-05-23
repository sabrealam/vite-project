import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the name passed in props', () => {
  render(<App name="Sabre" />);
  expect(screen.getByText('Hello, Sabre')).toBeInTheDocument();
});


test('Checking Component to render successfully or not ', () => {
  render(<App name="Sabre" />);
});

