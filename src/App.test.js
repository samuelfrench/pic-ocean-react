import { render, screen } from '@testing-library/react';
import App from './App';

test('renders test content image', () => {
  render(<App />);
  const linkElement = screen.getByAltText('Demo content');
  expect(linkElement).toBeInTheDocument();
});

