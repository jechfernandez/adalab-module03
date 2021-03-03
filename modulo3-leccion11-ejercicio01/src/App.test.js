import { render, screen } from '@testing-library/react';
import App from './App';

test('renders aprendiendo react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/aprendiendo react/i);
  expect(linkElement).toBeInTheDocument();
});
