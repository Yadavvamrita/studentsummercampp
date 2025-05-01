import { render, screen } from '@testing-library/react';
import App from './App';

test('renders landing page headline', () => {
  render(<App />);
  const headline = screen.getByText(/the best place to learn and play for kids/i);
  expect(headline).toBeInTheDocument();
});
